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
                v-model="selectedGame"
                @change="updateSelectedGame"
              >
                <option value="" selected disabled>Select a game</option>
                <option v-for="game in games.data" :key="game.id" :value="game.id">{{ game.nameGame }}</option>
              </select>
            </div>
            <div class="col-6">
              <label for="product">Choisir un cadeau</label>
              <select id="product" class="form-control" name="choices-category" @change="updateSelectedGift">
                <option value="" selected disabled>Select a gift</option>
                <option value="Choice 1">Eau de Parfum Number 60 Unisex</option>
                <option value="Choice 2">Msi Gaming Laptop</option>
                <option value="Choice 3">Nvidea Geforce</option>
                <option value="Choice 4">Lenovo Legion</option>
              </select>
            </div>
          </div>
          <br /><br />
          <div class="row">
            <div class="col-6">
              <label class="form-label">Date Début</label>
              <flat-pickr
                v-model="date"
                class="form-control datetimepicker"
                placeholder="Please select start date"
                :config="config"
              ></flat-pickr>
            </div>
            <div class="col-6">
              <label class="form-label">Période</label>
              <select
                id="choices-category"
                class="form-control"
                name="choices-category"
              >
                <option value="Choice 1" selected="">7</option>
                <option value="Choice 2">14</option>
                <option value="Choice 3">21</option>
              </select>
            </div>
          </div>
          <br />
          <div v-show="selectedGame === 'Gobowi'">
            <label class="mt-4 form-label"
              >Ajouter les éléments graphique à afficher à l'intérieur de GoBowi
              (pro+)</label
            >
            <form
              id="dropzone1"
              action="/file-upload"
              class="form-control dropzone"
            >
              <div class="fallback">
                <input name="file" type="file" multiple />
              </div>
            </form>
          </div>
          <div v-show="selectedGame === 'QuizUp'">
            <label class="mt-4 form-label"
              >Ajouter le fichier.csv pour les questions de QuiUp (pro+)</label
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
              <!-- {{ selectedGift }} -->
              </div>
              <div class="item" v-for="(dv) in dvs.data" :key="dv.id" :value="dv.id">
                <div class="item-details" >
                  <strong>{{ dv.discountValue }}{{ dv.discountType == 'PERCENTAGE' ? '%' : 'Dt' }} réduction</strong> - {{ dv.validityInDays }} jours - {{ dv.dvType == 'PRODUCT' ? "Produit" : "Service" }} - {{ dv.discountType == 'PERCENTAGE' ? 'Bon de réduction' : 'Bon dachat' }}
                </div>
                <input type="radio" :value="dv.id" v-model="selectedDv" @change="console.log('id:', selectedDv)" />
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
            <button
                  class="m-0 btn bg-gradient-success ms-2"
                  @click="showSwal('success-message')"
                >
                Créer une campagne
                </button>
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
      selectedDv: null,
      selectedGift: '',
      selectedGame: "",
      date: "",
      endDate: "",
      config: {
        allowInput: true,
      },
      showDiv: false,
    };
  },
  async created() {
    // try {
      // const response = await this.$store.dispatch('gameNS/fetchGames');
      this.$store.dispatch('gameNS/fetchGames')
      this.$store.dispatch('dvNS/fetchdv')
    //   console.log('Games response in the component:', response);
    // } catch (error) {
    //   console.error('Error fetching games:', error);
    // }
  },
  computed: {
    dvs() {
    const dvs = this.$store.state.dvNS.dv;
    return dvs;
  },
    games() {
    const games = this.$store.state.gameNS.games;
    console.log('Games in computed property:', games);
    return games;
    },
  },
  methods : {
    updateSelectedGame() {
      const select = document.getElementById("games");
      const selectedOption = select.options[select.selectedIndex];
      if (selectedOption.value)
      this.selectedGame = selectedOption.text;
    },
    updateSelectedGift(event) {
      this.selectedGift = event.target.options[event.target.selectedIndex].text;
    },
    toggleDiv() {
      this.showDiv = !this.showDiv;
    },
    showSwal(type) { 
       if (type === "success-message") {
        this.$swal({
          icon: "success",
          title: "Campagne en cours de validation...",
          text: "Veuillez attendre la validation de votre campagne par l'administrateur, vous receverez un mail de confirmation une fois la campagne validée.",
          type: type,
        });
      }
    },
  },
  mounted() {
    var drop1 = document.getElementById("dropzone1");
    var drop2 = document.getElementById("dropzone2");
    var myDropzone =new Dropzone(drop1, {
      url: "/file/post",
      maxFiles: 1,
      acceptedFiles: 'image/*',
      addRemoveLinks: true,
    });
    var myDropzone2 =new Dropzone(drop2, {
      url: "/file/post",
      acceptedFiles: '.csv',
      addRemoveLinks: true,
    });
    myDropzone.on("addedfile", function() {
      if (this.files.length > 1) {
        this.removeFile(this.files[0]);
      }
    });
    myDropzone2.on("addedfile", function() {
      if (this.files.length > 1) {
        this.removeFile(this.files[0]);
      }
    });
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

