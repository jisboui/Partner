<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-6">
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-lg-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="font-weight-bolder">Image du produit</h5>
            <div class="row">
              <div class="col-12">
                <img class="mt-3 shadow-lg w-100 border-radius-lg" :src="prod.itemImage" alt="product_image" />
              </div>
              <div class="mt-5 col-12">
                <div class="d-flex justify-content-center">
                  <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none" />
                  <button class="mb-0 btn bg-gradient-success btn-sm me-2 w-50" type="button" name="button" @click="$refs.fileInput.click()">
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
            <h5 class="font-weight-bolder">Product Information</h5>
            <div> 
            <br>
            <button v-for="lang in langs.data" :key="lang.id" @click.prevent="setCurrentLanguage(lang.languageCode)"
            :class="['mb-0 btn btn-sm me-2', currentLanguage === lang.languageCode ? 'bg-gradient-primary' : 'bg-gradient-success']">
              {{ lang.languageCode }}
            </button>
          </div>
            <div v-for="lang in langs.data" :key="lang.id">
            <div v-show="currentLanguage === lang.languageCode">
            <br>
              Vous pouvez modifier les champs en langue : {{ lang.languageCode }}
              <div class="mt-3 row">
                <div class="col-12 col-sm-6">
                  <label>Name</label>
                  <input
                    class="multisteps-form__input form-control"
                    type="text"
                    placeholder="ex : Laptop Victus HP"
                    v-model="prod.productName[lang.languageCode]"
                  />
                </div>
                <br />
                <div class="col-12 col-sm-6">
                  <label>Description</label>
                  <input
                    type="text"
                    class="multisteps-form__input form-control h-100"
                    placeholder="Ecrire la description de votre produit ici!"
                    v-model="prod.description[lang.languageCode]"
                  />
                </div>
              </div>
            </div>
          </div>
            <br><br>
            <div class="mt-3 row">
              <div class="col-12 col-sm-6">
                <label class="col-12 col-sm-6">Category</label>
                <select id="choices-category" class="form-control" name="choices-category" v-model="prod.category">
                  <option value="Clothing">Clothing</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div class="col-12 col-sm-6 d-flex justify-content-between">
                <br>
                  <span class="mb-0 btn bg-gradient-success btn-sm me-2 w-100 py-3 mt-4 custom-btn" @click="save()">Enregistrer</span>
                  <span class="mb-0 btn bg-gradient-success btn-sm me-2 w-100 py-3 mt-4 custom-btn" @click="cancel()">Annuler</span>
              </div>
              <!-- <div class="col-12 col-sm-6">
                <label class="col-12 col-sm-6">Tier</label>
                <select id="choices-tier" class="form-control" name="choices-tier" v-model="prod.productTier">
                  <option value="T1">T1</option>
                  <option value="T2">T2</option>
                  <option value="T3">T3</option>
                  <option value="T4">T4</option>
                </select>
              </div> -->
              <div class="mt-4 col-sm-6 mt-sm-0"></div>
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
  name: "EditProduct",
  data() {
    return {
      currentLanguage: null,
      prod: {
        productName: {},
        description: {},
        itemImage: this.$route.params.image,
        category: this.$route.params.category,
        idPartner: "",
        productTier: "T1",
      },
    };
  },
  async created() {
    await this.$store.dispatch("langNS/fetchLangs");
    const partnerId = localStorage.getItem("partnerId");
    this.prod.idPartner = partnerId;
    this.langs.data.forEach((lang) => {
    // here for every language, i'm parsing or decoding the productName and description from the URL after encoding it in ProductList to avoid the error of "URI malformed" and then assigning it to the productName and description properties of the prod object
    this.prod.productName[lang.languageCode] = JSON.parse(   
      decodeURIComponent(this.$route.params.productName)
    )[lang.languageCode];
    this.prod.description[lang.languageCode] = JSON.parse(
      decodeURIComponent(this.$route.params.description)
    )[lang.languageCode];
  });
    this.currentLanguage = this.langs.data[0].languageCode; // here i'm setting the currentLanguage to the first language in the langs array to make the first language the default language instead of starting with nothing until the user clicks on a language
  },
  computed: {
    langs() {
      return this.$store.state.langNS.langs;
    },
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
        /* console.log("file:", file); */ 
      if (file.type && file.type.startsWith('image/')) {
        const img = new Image(); //
        const reader = new FileReader(); // here i'm creating a new FileReader object to read the file and then assign it to the img object
        reader.onload = (e) => {
          img.onload = () => {
            if (img.width > maxWidth || img.height > maxHeight) {
              // display an error message or take appropriate action
              this.showSwal("basic", maxWidth, maxHeight);
              // clear the file input
              event.target.value = "";
            } else {
              // assign the uploaded image to the product's itemImage property
              this.prod.itemImage = e.target.result;
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
    setCurrentLanguage(language) {
      this.currentLanguage = language;
    },
    save() {
      const id = this.$route.params.id;
      console.log("id in prod edition:", id);
      this.$store.dispatch("prodNS/updateProd", { id, prodPU: this.prod })
      .then(() => {
      this.$router.push('/produits/product-list');
    });
    },
    cancel() {
      this.$router.push('/produits/product-list');
    },
  },
};
</script>

<style scoped>

.custom-btn {
  height: 50px; /* adjust as needed */
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>