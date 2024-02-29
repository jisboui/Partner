<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-6">
      </div>
      <div class="text-right col-lg-6 d-flex flex-column justify-content-center">
          <span class="mt-2 mb-0 btn btn-outline-white ms-lg-auto me-lg-0 me-auto mt-lg-0" @click="save()">Enregistrer</span>
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
                <div class="d-flex">
                  <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none" />
                  <button class="mb-0 btn bg-gradient-success btn-sm me-2" type="button" name="button" @click="$refs.fileInput.click()">
                    Modifier
                  </button>
                  <button class="mb-0 btn btn-outline-dark btn-sm" type="button" name="button">
                    Supprimer
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
            <div >
            <button v-for="lang in langs.data" :key="lang.id" @click.prevent="setCurrentLanguage(lang.languageCode)"
            :class="['mb-0 btn btn-sm me-2', currentLanguage === lang.languageCode ? 'bg-gradient-primary' : 'bg-gradient-success']">
              {{ lang.languageCode }}
            </button>
          </div>
            <div v-for="lang in langs.data" :key="lang.id">
            <div v-show="currentLanguage === lang.languageCode">
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
            <br><br><br>
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
/* import Quill from "quill"; */
/* import Choices from "choices.js"; */

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
    this.prod.productName[lang.languageCode] = JSON.parse(
      decodeURIComponent(this.$route.params.productName)
    )[lang.languageCode];
    this.prod.description[lang.languageCode] = JSON.parse(
      decodeURIComponent(this.$route.params.description)
    )[lang.languageCode];
  });
    this.currentLanguage = this.langs.data[0].languageCode;
  },
  computed: {
    langs() {
      return this.$store.state.langNS.langs;
    },
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      // Now you can handle the uploaded file
      // For example, you can read it as a data URL and assign it to prod.itemImage
      const reader = new FileReader();
      reader.onload = (e) => {
        this.prod.itemImage = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    setCurrentLanguage(language) {
      this.currentLanguage = language;
    },
    save() {
      const id = this.$route.params.id;
      console.log("id in edition:", id);
      this.$store.dispatch("prodNS/updateProd", { id, prodPU: this.prod })
      .then(() => {
      this.$router.push('/produits/product-list');
    });
    },
  },
};
</script>