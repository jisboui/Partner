<template>
  <br />
  <br /><br />
  <div class="card shadow-lg mx-4 card-profile-bottom">
  </div>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="multisteps-form">
          <div class="row">
            <div class="mx-auto mt-4 mb-3 col-12 col-lg-8 mb-sm-5">
              <div class="multisteps-form__progress">
                <button
                  class="multisteps-form__progress-btn js-active"
                  type="button"
                  title="Product Info"
                  :class="activeStep >= 0 ? activeClass : ''"
                  @click="activeStep = 0"
                >
                  <span>1. Product Info</span>
                </button>
                <button
                  class="multisteps-form__progress-btn"
                  type="button"
                  title="Media"
                  :class="activeStep >= 1 ? activeClass : ''"
                  @click="activeStep = 1"
                >
                  2. Media
                </button>
                <!-- <button
                  class="multisteps-form__progress-btn"
                  type="button"
                  title="Socials"
                  :class="activeStep >= 2 ? activeClass : ''"
                  @click="activeStep = 2"
                >
                  3. Socials
                </button> -->
                <!-- <button
                    class="multisteps-form__progress-btn"
                    type="button"
                    title="Pricing"
                    :class="activeStep >= 3 ? activeClass : ''"
                    @click="activeStep = 3"
                  >
                    4. Pricing
                  </button> -->
              </div>
            </div>
          </div>
          <!--form panels-->
          <div class="row">
            <div class="m-auto col-12 col-lg-8">
              <form class="mb-8 multisteps-form__form">
                <!--single form panel-->
                <product-info :class="activeStep === 0 ? activeClass : ''" />
                <!--single form panel-->
                <media :class="activeStep === 1 ? activeClass : ''" />
                <!--single form panel-->
                <!-- <socials :class="activeStep === 2 ? activeClass : ''" /> -->
                <!--single form panel-->
                <!-- <pricing :class="activeStep === 3 ? activeClass : ''" /> -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductInfo from "./components/ProductInfo.vue";
import Media from "./components/Media.vue";
/* import Socials from "./components/Socials.vue"; */

export default {
  name: "NewProd",
  components: {
    ProductInfo,
    Media,
    /* Socials, */
  },
  data() {
    return {
      
      showMenu: false,
      activeClass: "js-active position-relative",
      activeStep: 0,
      formSteps: 1,
    };
  },
  beforeMount() {
    this.$store.state.layout = "custom";
  },
  computed: {
    prod() {
      return this.$store.state.prodNS.prod;
    },
  },
  methods: {
    nextStep() {
      if (this.activeStep < this.formSteps) {
        // If not at the last step, move to the next step
        this.activeStep += 1;
      } else {
        // If at the last step, navigate to a different path and post the product after assigning the upload image to the product's itemImage property
        this.prod.itemImage = this.$store.state.fileUploadNS.fileUpload;
        this.$store.dispatch('prodNS/createProduct', this.prod)
        this.$router.push("/produits/product-list");
      }
    },
    prevStep() {
      if (this.activeStep > 0) {
        this.activeStep -= 1;
      }
      event.preventDefault(); // this line to prevent form submission
    },
  },
};
</script>
