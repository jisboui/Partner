<template>
  <div class="p-3 bg-white card multisteps-form__panel border-radius-xl" data-animation="FadeIn">
    <h5 class="font-weight-bolder">Product Information</h5>
    <div class="multisteps-form__content" v-for="lang in langs.data" :key="lang.id">
      <button @click.prevent="setCurrentLanguage(lang.languageCode)" class="mb-0 btn bg-gradient-success btn-sm me-2">
        {{ lang.languageCode }}
      </button>
    </div>
    <div>
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
    </div>
    <br />
    <div class="mt-3 row">
      <div class="col-12 col-sm-6">
        <label class="col-12 col-sm-6">Category</label>
        <select
          id="choices-category"
          class="form-control"
          name="choices-category"
          v-model="prod.category"
        >
          <option value="Clothing">Clothing</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div class="col-12 col-sm-6">
        <label class="col-12 col-sm-6">Tier</label>
        <select
          id="choices-tier"
          class="form-control"
          name="choices-tier"
          v-model="prod.productTier"
        >
          <option value="T1">T1</option>
          <option value="T2">T2</option>
          <option value="T3">T3</option>
          <option value="T4">T4</option>
        </select>
      </div>
    </div>

    <div class="mt-4 button-row d-flex col-12">
      <argon-button
        type="button"
        color="dark"
        variant="gradient"
        class="mb-0 ms-auto js-btn-next"
        title="Next"
        @click="$parent.nextStep"
      >Next</argon-button>
    </div>
  </div>
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";

export default {
  name: "ProductInfo",
  components: {
    ArgonButton,
  },
  data() {
    return {
      currentLanguage: null,
      prod: {
        productName: {},
        description: {},
        itemImage:
          "https://firebasestorage.googleapis.com/v0/b/dopawinapi.appspot.com/o/petit-dej.png?alt=media",
        category: "Real Estate",
        idPartner: "",
        productTier: "T1",
      },
    };
  },
  methods: {
    setCurrentLanguage(language) {
      this.currentLanguage = language;
    },
  },
  async created() {
    await this.$store.dispatch("langNS/fetchLangs");
    const partnerId = localStorage.getItem("partnerId");
    this.prod.idPartner = partnerId;
    this.langs.data.forEach((lang) => {
    this.prod.productName[lang.languageCode] = "";
    this.prod.description[lang.languageCode] = "";
  });
    this.currentLanguage = this.langs.data[0].languageCode;
  },
  computed: {
    user() {
      return this.$store.state.loginNS.user;
    },
    langs() {
      return this.$store.state.langNS.langs;
    },
  },
  mounted() {
    this.$store.commit("prodNS/updateProd", this.prod);
    console.log("prod fel productinfo : ", this.prod);
    console.log("descriptio, : ", this.prod.description);
  },
  beforeUnmount() {
    /* this.choicesInstances.forEach((instance) => instance.destroy()); */
  },
};
</script>
