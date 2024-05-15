<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="mx-auto col-lg-9 col-12">
        <div class="mt-4 card card-body">
          <h6 class="mb-0">Nouvelle campagne</h6>
          <p class="mb-0 text-sm">Créer une nouvelle campagne</p>
          <hr class="my-3 horizontal dark" />
          <!-- <label for="projectName" class="form-label">Nom de la campagne</label>
          <input id="projectName" type="text" class="form-control" />-->
          <!-- <label class="mt-4">Description de la campagne</label>
          <p class="text-xs form-text text-muted ms-1">
            Il s'agit d'une description que les utilisateurs peuvent lire sur la
            campagne, alors faites-la bien!
          </p> -->
          <!-- <div id="editor">
            <p>écrivez la description de la campagne ici</p>
            <p><br /></p>
          </div> -->
          <br />
          <div class="row">
            <div class="col-6">
              <label for="games">Choisir le jeu</label>
              <select
                id="games"
                class="form-control"
                name="choices-category"
                @change="updateSelectedGame"
                v-model="room.idGame"
              >
                <option value="Selectionner un jeu" selected disabled>Selectionner un jeu</option>
                <option v-for="game in games.data" :key="game.id" :value="game.id">{{ game.nameGame }}</option>
              </select>
            </div>
            <div class="col-6">
              <label for="product">Choisir un cadeau</label>
              <select v-model="room.idProduct" id="product" class="form-control" name="choices-category" @change="updateSelectedGift">
                <option value="Selectionner un produit" selected disabled>Selectionner un produit</option>
                <option v-for="prod in prods.data" :key="prod.id" :value="prod.id">{{ prod.productName.EN }}</option>
              </select>
            </div>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-6">
              <label class="form-label">Date Début</label>
              <flat-pickr
                v-model="room.startingDate"
                class="form-control datetimepicker"
                placeholder="Veuillez choisir une date de début"
                :config="config"
                @change="console.log('date:', toTimestamp(room.startingDate))"
              ></flat-pickr>
            </div>
            <div class="col-6">
              <label class="form-label">Période</label>
              <select
                id="choices-category"
                class="form-control"
                name="choices-category"
                v-model="room.periodInDays"
              >
                <option value="7" selected="">7</option>
                <option value="14">14</option>
                <option value="21">21</option>
              </select>
            </div>
          </div>
          <br>
          <div class="row">
              <div class="col-12">
                <label class="form-label">Description</label>
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="Ecrire la description de votre domaine ici! Ce que vous voulez que les joueurs voient, comme ce que vous offrez, etc."
                  v-model="room.partnerDescription"
                ></textarea>
              </div>
          </div>
          <br />
          <div v-show="selectedGame === 'GoBowi' && abonnement==='pro'">
            <div v-for="(value, key) in room.details" :key="key">
              <label class="mt-4 form-label">Ajouter les éléments graphiques pour {{ key }}</label>
              <form
                :id="'dropzone_' + key"
                action="/file-upload"
                class="form-control dropzone"
              >
                <div class="fallback">
                  <input name="file" type="file" multiple />
                </div>
              </form>
            </div>
          </div>
          <div v-show="selectedGame === 'QuizUp' && abonnement==='pro'">
            <label class="mt-4 form-label"
              >Ajouter l'image pour afficher dans le niveau bonus :</label
            >
            <form
              id="dropzone2"
              action="/file-upload"
              class="form-control dropzone"
            >
              <div class="fallback">
                <input name="file" type="file" multiple />
              </div>
            </form>
          </div>

          <div class="mt-3 row">
            <div class="text-center col-lg-1 col-md-2 col-sm-3 col-4 position-relative">
              <a href="javascript:;" @click="toggleDiv" class="avatar avatar-lg border-1 rounded-circle bg-gradient-success">
                <i class="text-white fas fa-plus"></i>
              </a>
              <p class="mb-0 text-sm mt-2 position-absolute w-100 text-center" style="top: 50%; left: 150%; transform: translate(-50%, -50%);">Ajouter un bon de réduction</p>
            </div>
          </div>
          <br />

          <div id="DV" v-show="showDiv"  style="display: flex; justify-content: center; align-items: center;">
            <div class="items-container" >
              <div>
              </div>
              <div class="item" v-for="(dv) in dvs.data" :key="dv.id" :value="dv.id">
                <div class="item-details" >
                  <span v-if="selectedDv === dv.id && dv.dvType !== 'PURCHASE'">
                    {{ selectedGift }}
                  </span> <br>                 
                  <strong>{{ dv.discountValue }}{{ dv.discountType == 'PERCENTAGE' ? '%' : 'Dt' }} réduction</strong> - {{ dv.validityInDays }} jours - {{ dv.dvType == 'PRODUCT' ? "Produit" : "Achat" }} - {{ dv.discountType == 'PERCENTAGE' ? 'Bon de réduction' : 'Bon dachat' }}                 
                </div>
                <input type="radio" :value="dv.id" v-model="selectedDv"/>
              </div>
            </div>
          </div>
           <br />
          <!-- <label class="mt-4 form-label">Project Tags</label>
            <select
              id="choices-multiple-remove-button"
              class="form-control"
              name="choices-multiple-remove-button"
              multiple
            >
              <option value="Choice 1" selected>Choice 1</option>
              <option value="Choice 2">Choice 2</option>
              <option value="Choice 3">Choice 3</option>
              <option value="Choice 4">Choice 4</option>
            </select> -->
          <div class="mt-4 d-flex justify-content-end">
            <router-link 
            to="/campaign/campaign-history"
            >
              <button type="button" name="button" class="m-0 btn btn-light">
                Annuler
              </button>
            </router-link>
            <router-link 
            to="/campaign/campaign-history"
            >
            <button class="m-0 btn bg-gradient-success ms-2" @click="onButtonClick"> Créer une campagne </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import flatPickr from "vue-flatpickr-component";
import Dropzone from "dropzone";
export default {
  name: "AddCampaign",
  components: {
    flatPickr,
  },
  data() {
    return {
     room : {
      "startingDate": "",
      "periodInDays": "7",
      "idProduct": "Selectionner un produit",
      "idGame": "Selectionner un jeu",
      "details": {
        "woodad": [],
        "tvad": [],
        "carre": [],
        "hrec": [],
        "ovniad": [],
        "circle": [],
        "poster": [],
        "vrec": []
      },
      "partnerDescription": ""
    },
      selectedDv: null,
      selectedGift: '',
      selectedGame: "",
      abonnement : "pro",
      date: null,
      endDate: "",
      config: {
        allowInput: true,
        defaultDate: null,
      },
      showDiv: false,
    };
  },
  async created() {
      this.$store.dispatch('prodNS/selectProduct')
      this.$store.dispatch('gameNS/selectGame')
      this.$store.dispatch('dvNS/selectDv')
  },
  computed: {
    prods() {
      const prods = this.$store.state.prodNS.prod;
      return prods;
    },
    dvs() {
    const dvs = this.$store.state.dvNS.dv;
    return dvs;
  },
    games() {
    const games = this.$store.state.gameNS.games;
    return games;
    },
  },
  methods : {
    toTimestamp(dateOnly) {
    const date = new Date(dateOnly);
    return date.toISOString();
    },
    updateSelectedGame() {
      const select = document.getElementById("games");
      const selectedOption = select.options[select.selectedIndex];
      if (selectedOption.value)
      this.selectedGame = selectedOption.text;
    },
    updateSelectedGift(event) {
      this.selectedGift = event.target.options[event.target.selectedIndex].text; // shorter way to do it than the one above but it's another way
    },
    toggleDiv() {
      this.showDiv = !this.showDiv;
    },
    showSwal(type, maxWidth, maxHeight) { 
       if (type === "success-message") {
        this.$swal({
          icon: "success",
          title: "Campagne en cours de validation...",
          text: "Veuillez attendre la validation de votre campagne par l'administrateur, vous receverez un mail de confirmation une fois la campagne validée.",
          type: type,
        });
      } else if (type === "basic") {
        this.$swal({
          icon: "basic",
          title: "Veuillez choisir une autre image",
          text: `Les dimensions de l'image téléchargée ne doivent pas dépasser ${maxWidth}x${maxHeight}`,
          type: type,
        });
      }
    },
    onButtonClick() {
      this.room.startingDate = this.toTimestamp(this.room.startingDate);
      this.showSwal('success-message');
      let details = {};
      if (this.selectedGame === 'QuizUp') {
        details = {
          "bonusLevel": this.$store.state.fileUploadNS.fileUpload, 
        };
      } else if (this.selectedGame === 'GoBowi') {
        details = {};
    // Loop through each property of the details object
    for (const prop in this.room.details) {
      details[prop] = this.$store.state.fileUploadNS.fileUploads[prop];
    }
      }
      this.room.details = details; 
      this.$store.dispatch('roomNS/createRoom', this.room)
    },
  },
  mounted() {
  const vueComponent = this; // Store the Vue component instance
  
  const dimensions = {
      woodad: { maxWidth: 171, maxHeight: 200 },
      tvad: { maxWidth: 372, maxHeight: 200 },
      carre: { maxWidth: 200, maxHeight: 200 },
      hrec: { maxWidth: 764, maxHeight: 250 },
      ovniad: { maxWidth: 648, maxHeight: 100 },
      circle: { maxWidth: 200, maxHeight: 200 },
      poster: { maxWidth: 200, maxHeight: 281 },
      vrec: { maxWidth: 250, maxHeight: 704 }
    };

  // Iterate over each property in room.details
  for (const prop in this.room.details) {
    const dropzoneId = `dropzone_${prop}`;
    const dropzoneElement = document.getElementById(dropzoneId);

    // Get the dimensions for the current prop
    const { maxWidth, maxHeight } = dimensions[prop] || { maxWidth: 1400, maxHeight: 1400 };

    // Create a Dropzone instance for each property
    const dropzone = new Dropzone(dropzoneElement, {
      url: "/file/post",
      acceptedFiles: 'image/*',
      addRemoveLinks: true,
      autoProcessQueue: false, // Prevent Dropzone from automatically uploading the file
    });
    dropzone.on("thumbnail", function(file) { // this checks the dimensions of the image to not exceed the maximum width and height
      if (file.width > maxWidth || file.height > maxHeight) { 
        // Display an error message or take appropriate action
        vueComponent.showSwal("basic", maxWidth, maxHeight);
        this.removeFile(file); // Remove the file from Dropzone
      }
    });
    // Handle events for the current Dropzone instance
    dropzone.on("removedfile", function() {
      vueComponent.$store.commit("fileUploadNS/setFileUploads", { propName: prop, fileUpload: null });
    });
    dropzone.on("addedfile", function(file) {
      if (this.files.length > 1) {   // If the user adds more than one file, remove the first one and add or keep the new one
        this.removeFile(this.files[0]);
      }
      vueComponent.$store.dispatch("fileUploadNS/a_serviceFileUploads", { propName: prop, file });
    });
  }
  
  // Handling Dropzone for bonusLevel
  const dropzoneBonusLevel = new Dropzone("#dropzone2", {
    url: "/file/post",
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
    autoProcessQueue: false, // Prevent Dropzone from automatically uploading the file
  });
  dropzoneBonusLevel.on("thumbnail", function(file) { // this checks the dimensions of the image to not exceed the maximum width and height
      if (file.width > maxWidth || file.height > maxHeight) {
        // Display an error message or take appropriate action
        vueComponent.showSwal("basic", maxWidth, maxHeight);
        this.removeFile(file); // Remove the file from Dropzone
      }
    });
  dropzoneBonusLevel.on("removedfile", function() {
    vueComponent.room.details.bonusLevel = null;
  });
  dropzoneBonusLevel.on("addedfile", function(file) {
    if (this.files.length > 1) {   
      this.removeFile(this.files[0]);
    }
    vueComponent.room.details.bonusLevel = file;
    vueComponent.$store.dispatch("fileUploadNS/a_serviceFileUpload", file);
  });
    var maxWidth = 1400;
    var maxHeight = 1400;
},

  beforeMount() {
    this.$store.state.layout = "custom2";
  },  
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
#app {
  text-align: center;
}
.items-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.item {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  border-radius: 5px;
}
.item-details {
  flex-grow: 1;
}
</style>

