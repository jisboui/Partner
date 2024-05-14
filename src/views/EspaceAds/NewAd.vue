<template>
    <br> 
    <br><br>
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
                      title="Ad Info"
                      :class="activeStep >= 0 ? activeClass : ''"
                      @click="activeStep = 0"
                    >
                      <span>1. Titre de l'Ad</span>
                    </button>
                    <button
                      class="multisteps-form__progress-btn"
                      type="button"
                      title="Media"
                      :class="activeStep >= 1 ? activeClass : ''"
                      @click="activeStep = 1"
                    >
                      2. Vidéo/Image de l'Ad
                    </button>
                    <!-- <button
                      class="multisteps-form__progress-btn"
                      type="button"
                      title="Socials"
                      :class="activeStep >= 2 ? activeClass : ''"
                      @click="activeStep = 2"
                    >
                      3. Logo
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
                    <ad-info :class="activeStep === 0 ? activeClass : ''" />
                    <!--single form panel-->
                    <media :class="activeStep === 1 ? activeClass : ''" />
                    <!--single form panel-->
                    <!--<socials :class="activeStep === 2 ? activeClass : ''" />-->
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
    import AdInfo from "./components/AdInfo.vue"; 
    import Media from "./components/Media.vue";
   /* import Socials from "./components/Socials.vue"; */
  /* import Pricing from "./components/Pricing.vue"; */
 /*  const body = document.getElementsByTagName("body")[0]; */
  
  /*import setNavPills from "@/assets/js/nav-pills.js"; */
  export default {
    name: "NewAd",
    components: {
       AdInfo,
      Media,
       /* Socials, */
      /* Pricing, */
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
    ad() {
      return this.$store.state.adNS.ad;
    },
  },
    methods: {
      nextStep() {
      if (this.activeStep < this.formSteps) {
        // If not at the last step, move to the next step
        this.activeStep += 1;
      } else {
        this.ad.imageUrl = this.$store.state.fileUploadNS.fileUpload;
        console.log("ad fel newad : " , this.ad);
        this.$store.dispatch('adNS/createAd', this.ad)
        // If at the last step, navigate to a different path
        this.$router.push('/espaceads/ads-list'); 
      }
    },
      prevStep() {
    if (this.activeStep > 0) {
      this.activeStep -= 1;
    }
    event.preventDefault(); // this line to prevent form submission
  }
    },
  };
  </script>