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
          <div v-show="selectedGame === '65b7c3424ea8bd2cd4d6968c'">
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
          <div v-show="selectedGame === '64ae6782d87e9d685790657d'">
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

           <div id="DV" v-show="showDiv" class="container" style="display: flex; justify-content: center; align-items: center;">
              <div class="card">
                <div class="main">
                  <div class="co-img">
                    <img
                      src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/273207779_281563397405455_6026609381950187436_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=9WqjAmUBLWsAX_NkJM1&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfA6qhovC-bEm09eAmf_MAkl55ucOzLSyMlp98oO1cvDlw&oe=65C9F461"
                      alt=""
                    />
                  </div>
                  <div class="vertical"></div>
                  <div class="content">
                    <h2>{{ selectedGift }}</h2>
                    <h1><input type="text" value="10%" class="editable-input"> <span>Bon de réduction</span></h1>
                    <p>Valable jusqu'au <input type="text" value="30 avril 2025" class="long-input" /></p> 
                  </div>
                </div>
                <div class="copy-button">
                  <input id="copyvalue" type="text" readonly value="QR code" />
                  <button class="copybtn">COPY</button>
                </div>
                <br />
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
    //   console.log('Games response in the component:', response);
    // } catch (error) {
    //   console.error('Error fetching games:', error);
    // }
  },
  computed: {
    games() {
    const games = this.$store.state.gameNS.games;
    console.log('Games in computed property:', games);
    return games;
    },
  },
  methods : {
    updateSelectedGame() {
      // Update selectedGame with the value of the selected option
      const select = document.getElementById("games");
      this.selectedGame = select.value;
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

#DV {
.editable-input {
  background: none;
  font-size: 1em;
  font-weight: 1000;
  width: 78px;
}

.long-input {
  width: 110px; /* Adjust this value to suit your needs */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.container {
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #6bcc8b;
}
.qr-img {
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
}

.card {
  width: 500px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  background-color: beige;
  padding: 10px 20px;
  position: relative;
}

.main,
.copy-button {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
}
.card::after {
  position: absolute;
  content: "";
  height: 40px;
  right: -20px;
  border-radius: 40px;
  z-index: 1;
  top: 70px;
  background-color: white;
  width: 40px;
}

.card::before {
  position: absolute;
  content: "";
  height: 40px;
  left: -20px;
  border-radius: 40px;
  z-index: 1;
  top: 70px;
  background-color: white;
  width: 40px;
}

.co-img img {
  width: 100px;
  height: 100px;
}
.vertical {
  border-left: 5px dotted black;
  height: 100px;
  position: absolute;
  left: 35%;
}

.content h1 {
  font-size: 35px;
  margin-left: -20px;
  color: #565656;
  padding-left: 100px; 
}

.content h1 span {
  font-size: 18px;
}
.content h2 {
  font-size: 18px;
  margin-left: -20px;
  color: #565656;
  text-transform: uppercase;
  padding-left: 100px; 
}

.content p {
  font-size: 16px;
  color: #696969;
  margin-left: -20px;
  padding-left: 100px; 
}

.copy-button {
  margin: 12px 0 -5px 0;
  height: 45px;
  border-radius: 4px;
  padding: 0 5px;
  border: 1px solid #e1e1e1;
}

.copy-button input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 15px;
}

.copy-button button {
  padding: 5px 20px;
  background-color: #6bcc8b;
  color: #fff;
  border: 1px solid transparent;
}

@media (max-width: 600px) {

  .editable-input {
  width: 58px;
}
  
  .content h1 {
    font-size: 25px;
    padding-left: 30px; /* reduce the font size on small screens */
  }

  .content h2 {
    font-size: 14px;
    padding-left: 30px; 
  }

  .content p {
    padding-left: 30px; 
  }
  .card {
  height: 230px;
  }
  .co-img img {
  width: 100px;
  height: 150px;
  padding-right: 15px;
}
.vertical {
  border-left: 5px dotted black;
  height: 100px;
  position: absolute;
  left: 45%;
}
}
}
</style>

