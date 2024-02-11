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
              >
                <option value="" selected disabled>Select a game</option>
                <option value="Choice 1">QuizUp</option>
                <option value="Choice 2">GoBowi</option>
                <option value="Choice 3">DimaWin</option>
                <option value="Choice 4">HitSoumek</option>
                <option value="Choice 5">Others</option>
              </select>
            </div>
            <div class="col-6">
              <label for="product">Choisir un cadeau</label>
              <select id="product" class="form-control" name="choices-category">
                <option value="" selected disabled>Select a gift</option>
                <option value="Choice 1">Laptop Victus HP</option>
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
          <br /><br />

          <div v-show="selectedGame === 'Choice 2'">
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
          <div v-show="selectedGame === 'Choice 1'">
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

          <!-- <div class="mt-4 row">
              <div class="col-12 col-md-6">
                <div class="form-group">
                  <label> Private Project </label>
                  <p class="text-xs form-text text-muted ms-1">
                    If you are available for hire outside of the current
                    situation, you can encourage others to hire you.
                  </p>
                  <div class="form-check form-switch ms-1">
                    <input
                      id="flexSwitchCheckDefault"
                      class="form-check-input"
                      type="checkbox"
                      onclick="notify(this)"
                      data-type="warning"
                      data-content="Once a project is made private, you cannot revert it to a public project."
                      data-title="Warning"
                      data-icon="ni ni-bell-55"
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    ></label>
                  </div>
                </div>
              </div>
            </div> -->

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
      selectedGame: "",
      date: "",
      endDate: "",
      config: {
        allowInput: true,
      },
    };
  },
  methods : {
    showSwal(type) {
      if (type === "basic") {
        this.$swal({
          title: "Any fool can use a computer",
          type: type,
        });
      } else if (type === "success-message") {
        this.$swal({
          icon: "success",
          title: "Campagne en cours de validation...",
          text: "Veuillez attendre la validation de votre campagne par l'administrateur, vous receverez un mail de confirmation une fois la campagne validée.",
          type: type,
        });
      } else if (type === "custom-html") {
        this.$swal({
          icon: "info",
          title: "<strong>HTML <u>example</u></strong>",
          html:
            "You can use <b>bold text</b>, " +
            '<a href="//sweetalert2.github.io">links</a> ' +
            "and other HTML tags",
          type: type,
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
          confirmButtonAriaLabel: "Thumbs up, great!",
          cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
          cancelButtonAriaLabel: "Thumbs down",
          customClass: {
            confirmButton: "btn bg-gradient-success",
            cancelButton: "btn bg-gradient-danger",
          },
          buttonsStyling: false,
        });
      } else if (type === "input-field") {
        this.$swal({
          title: "Submit your Github username",
          input: "text",
          inputAttributes: {
            autocapitalize: "off",
          },
          showCancelButton: true,
          confirmButtonText: "Look up",
          showLoaderOnConfirm: true,
          customClass: {
            confirmButton: "btn bg-gradient-success",
            cancelButton: "btn bg-gradient-danger",
          },
          buttonsStyling: false,
          preConfirm: (login) => {
            return fetch(`//api.github.com/users/${login}`)
              .then((response) => {
                if (!response.ok) {
                  throw new Error(response.statusText);
                }
                return response.json();
              })
              .catch((error) => {
                this.$swal.showValidationMessage(`Request failed: ${error}`);
              });
          },
          allowOutsideClick: () => !this.$swal.isLoading(),
        }).then((result) => {
          if (result.isConfirmed) {
            this.$swal({
              title: `${result.value.login}'s avatar`,
              imageUrl: result.value.avatar_url,
            });
          }
        });
      } else if (type === "title-and-text") {
        this.$swal({
          title: "Sweet!",
          text: "Modal with a custom image.",
          imageUrl: "https://unsplash.it/400/200",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      } else if (type === "auto-close") {
        let timerInterval;
        this.$swal({
          title: "Auto close alert!",
          html: "I will close in <b></b> milliseconds.",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            this.$swal.showLoading();
            const b = this.$swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = this.$swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
      } else if (type === "warning-message-and-confirmation") {
        this.$swal({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
          customClass: {
            confirmButton: "btn bg-gradient-success",
            cancelButton: "btn bg-gradient-danger",
          },
          buttonsStyling: false,
        }).then((result) => {
          if (result.isConfirmed) {
            this.$swal({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              customClass: {
                confirmButton: "btn bg-gradient-success",
              },
              buttonsStyling: false,
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === this.$swal.DismissReason.cancel
          ) {
            this.$swal({
              title: "Cancelled!",
              text: "Your imaginary file is safe :)",
              icon: "error",
              customClass: {
                confirmButton: "btn bg-gradient-success",
              },
              buttonsStyling: false,
            });
          }
        });
      } else if (type === "warning-message-and-cancel") {
        this.$swal({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          cancelButtonText: "Cancel",
          confirmButtonText: "Yes, delete it!",
          customClass: {
            confirmButton: "btn bg-gradient-success",
            cancelButton: "btn bg-gradient-danger",
          },
          buttonsStyling: false,
        }).then((result) => {
          if (result.isConfirmed) {
            this.$swal({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              customClass: {
                confirmButton: "btn bg-gradient-success",
              },
              buttonsStyling: false,
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === this.$swal.DismissReason.cancel
          ) {
            this.$swal.dismiss;
          }
        });
      } else if (type === "rtl-language") {
        this.$swal({
          title: "هل تريد الاستمرار؟",
          icon: "question",
          iconHtml: "؟",
          confirmButtonText: "نعم",
          cancelButtonText: "لا",
          showCancelButton: true,
          showCloseButton: true,
          customClass: {
            confirmButton: "btn bg-gradient-success",
            cancelButton: "btn bg-gradient-danger",
          },
          buttonsStyling: false,
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
