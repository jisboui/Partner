<template>
  <div class="p-3 bg-white card multisteps-form__panel border-radius-xl" data-animation="FadeIn">
    <h5 class="font-weight-bolder">Product Information</h5>
    <div class="multisteps-form__content" >
      <button v-for="lang in langs.data" :key="lang.id" @click.prevent="setCurrentLanguage(lang.languageCode)" :class="['mb-0 btn btn-sm me-2', currentLanguage === lang.languageCode ? 'bg-gradient-primary' : 'bg-gradient-success']">
        {{ lang.languageCode }}
      </button>
    </div>
    <div>
      <div v-for="lang in langs.data" :key="lang.id">
        <div v-show="currentLanguage === lang.languageCode">
        <br>
        Veuillez remplir les champs en langue : {{ lang.languageCode }}
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
          <option value="" selected disabled>Selectionner une catégorie</option>
          <option value="Clothing">Clothing</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <!-- <div class="col-12 col-sm-6">
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
      </div> -->
    </div>

    <div class="mt-4 button-row d-flex col-12">
      <div @mouseenter="showTooltip" class="ms-auto" ref="tooltipDiv">
        <argon-button
          type="button"
          color="dark"
          variant="gradient"
          class="mb-0 js-btn-next"
          title="Next"
          @click="$parent.nextStep"
          :disabled="!allFieldsFilled"
        >Next</argon-button>
      </div>
    </div>  
  </div>
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export default {
  name: "ProductInfo",
  components: {
    ArgonButton,
  },
  data() {
    return {
      tooltipInstance: null,
      currentLanguage: null,
      prod: {
        productName: {},
        description: {},
        itemImage:"",
        category: "",
        idPartner: "",
        productTier: "T1",
      },
    };
  },
  methods: {
    setCurrentLanguage(language) {
      this.currentLanguage = language;
    },
    showTooltip(event) { // Show a alerting message to the partner when hovering over the next button if all fields are not filled
    if (!this.allFieldsFilled && !this.tooltipInstance) {
      this.tooltipInstance = tippy(event.target, {
        content: 'Veuillez remplir tous les champs pour continuer!',
      });
    }
  },
  },
  watch: {
  allFieldsFilled(newVal) { // Destroy the alerting message when all fields are filled
    if (!newVal && !this.tooltipInstance) {
      this.$nextTick(() => {
        this.tooltipInstance = tippy(this.$refs.tooltipDiv, {
          content: 'Veuillez remplir tous les champs pour continuer!',
        });
      });
    } else if (newVal && this.tooltipInstance) {
      this.tooltipInstance.destroy();
      this.tooltipInstance = null;
    }
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
    this.currentLanguage = this.langs.data[0].languageCode; // to start with the first language in the list by default instead of showing nothing at the start
  }, 
    computed: {
    user() {
      return this.$store.state.loginNS.user;
    },
    langs() {
      return this.$store.state.langNS.langs;
    },
    allFieldsFilled() {
    // Check if this.langs.data is an array
    if (!Array.isArray(this.langs.data)) {
      return false;
    }
    // Check if all fields are filled for each language
    for (let lang of this.langs.data) {
      if (!this.prod.productName[lang.languageCode] || !this.prod.description[lang.languageCode]) {
        return false;
      }
    }
    // Check if the other fields are filled
    if (!this.prod.category) {
      return false;
    }
    return true;
  },
  },
  mounted() {
    this.$store.commit("prodNS/setProd", this.prod);
  },
  /* beforeUnmount() {
    this.choicesInstances.forEach((instance) => instance.destroy());
  }, */
};
</script>