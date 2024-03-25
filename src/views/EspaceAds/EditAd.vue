<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-6"></div>
    </div>
    <div class="mt-4 row">
      <div class="col-lg-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="font-weight-bolder">Image de l'ad</h5>
            <div class="row">
              <div class="col-12">
                <img
                  class="mt-3 shadow-lg w-100 border-radius-lg"
                  :src="ad.imageUrl"
                  alt="ad_image"
                />
              </div>
              <div class="mt-5 col-12">
                <div class="d-flex justify-content-center">
                  <input
                    type="file"
                    ref="fileInput"
                    @change="handleFileUpload"
                    style="display: none"
                  />
                  <button
                    class="mb-0 btn bg-gradient-success btn-sm me-2 w-50"
                    type="button"
                    name="button"
                    @click="$refs.fileInput.click()"
                  >
                    Modifier
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 col-lg-8 mt-lg-0">
        <div class="card" style="height: 519px">
          <div class="card-body">
          <h5 class="font-weight-bolder">Info sur l'Ad</h5>
            <div class="mt-3 row">
              <div class="col-12 col-sm-6">
                <label>Id room (codé en dure pour le moment)</label>
                <input
                  class="multisteps-form__input form-control"
                  type="text"
                  placeholder="id room"
                  v-model="ad.idRoom"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-sm-6">
                <label>Description</label>
                <input
                  type="text"
                  class="multisteps-form__input form-control h-100"
                  placeholder="Ecrire la description de votre ad ici!"
                  v-model="ad.partnerDescription"
                />
              </div>
              <div class="col-12 col-sm-6">
                <br />
                <span
                  class="mb-0 btn bg-gradient-success btn-sm me-2 w-100 py-3"
                  @click="save()"
                  >Enregistrer</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <h5 class="font-weight-bolder">Socials</h5>
            <label>Shoppify Handle</label>
            <input class="form-control" type="text" value="@argon" />
            <label class="mt-4">Facebook Account</label>
            <input class="form-control" type="text" value="https://" />
            <label class="mt-4">Instagram Account</label>
            <input class="form-control" type="text" value="https://" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditAd",
  data() {
    return {
      ad: {
        imageUrl: this.$route.params.image,
        idRoom: "65e1b1d91fc1e501dbdc4487", // idRoom has to be hardcoded which must be changed
        startDate: this.$route.params.startDate /* "2024-03-05T15:30:15.0", */, // startDate payload of post "Ad" isn't reading instead it's being auto filled in the backend
        partnerDescription: this.$route.params.description,
      },
    };
  },
  methods: {
    showSwal(type, maxWidth, maxHeight) {
      if (type === "basic") {
        this.$swal({
          icon: "basic",
          title: "Veuillez choisir une autre image",
          text: `Les dimensions de l'image téléchargée ne doivent pas dépasser ${maxWidth}x${maxHeight}`,
          type: type,
        });
      }
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      // check if the file exceeds maxWidth or maxHeight
      const maxWidth = 1400; 
      const maxHeight = 1400;
      // Check if a file is selected to avoid error (cannot read property 'type' of undefined)
      if (file) {
        console.log("file:", file); 

      if (file.type &&file.type.startsWith('image/')) {
        const img = new Image();
        const reader = new FileReader();
        reader.onload = (e) => {
          img.onload = () => {
            if (img.width > maxWidth || img.height > maxHeight) {
              // display an error message or take appropriate action
              this.showSwal("basic", maxWidth, maxHeight);
              // clear the file input
              event.target.value = "";
            } else {
              // assign the uploaded image to the aduct's imageUrl property
              this.ad.imageUrl = e.target.result;
            }
          };
          img.src = e.target.result; // this will trigger the onload event of the img object above
        };
        reader.readAsDataURL(file);
      } else {
        // handle non-image file types 
        console.error("Invalid file type. Please upload an image.");
        // clear the file input
        event.target.value = "";
      }
    } else {
      console.error("No file selected");
    }
    },
    save() {
      const id = this.$route.params.id;
      console.log("id in ads edition:", id);
      this.$store.dispatch("adNS/updateAd", { id, adPU: this.ad }).then(() => {
        this.$router.push("/espaceads/ads-list");
      });
    },
  },
};
</script>
