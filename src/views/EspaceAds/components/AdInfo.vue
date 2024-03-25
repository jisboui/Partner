<template>
  <div
    class="p-3 bg-white card multisteps-form__panel border-radius-xl"
    data-animation="FadeIn"
  >
    <h5 class="font-weight-bolder">Info sur l'Ad</h5>
    <div class="multisteps-form__content">
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
        <!-- <div class="mt-3 col-12 col-sm-6 mt-sm-0">
          <label>Weight</label>
          <input
            class="multisteps-form__input form-control"
            type="text"
            placeholder="eg. 42"
          />
        </div> -->
      </div>
      <div class="row">
          <div class="col-12 col-sm-6">
          <label>Description</label>
          <input type="text" 
          class="multisteps-form__input form-control h-100"
          placeholder="Ecrire la description de votre ad ici!"
          v-model="ad.partnerDescription"
          />
        </div>
        <!-- <div class="mt-4 col-sm-6 mt-sm-0">
          <label class="mt-4">Category</label>
          <select
            id="choices-category"
            class="form-control"
            name="choices-category"
          >
            <option value="Choice 1" selected="">Clothing</option>
            <option value="Choice 2">Real Estate</option>
            <option value="Choice 3">Electronics</option>
            <option value="Choice 4">Furniture</option>
            <option value="Choice 5">Others</option>
          </select>
          <label>Sizes</label>
          <select id="choices-sizes" class="form-control" name="choices-sizes">
            <option value="Choice 1" selected="">Medium</option>
            <option value="Choice 2">Small</option>
            <option value="Choice 3">Large</option>
            <option value="Choice 4">Extra Large</option>
            <option value="Choice 5">Extra Small</option>
          </select>
        </div> -->
      </div>
      <div class="mt-4 button-row d-flex col-12">
        <argon-button
          type="button"
          color="dark"
          variant="gradient"
          class="mb-0 ms-auto js-btn-next"
          title="Next"
          @click="$parent.nextStep"
          >Next</argon-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";

export default {
  name: "AdInfo",
  components: {
    ArgonButton,
  },
  data() {
    return {
      ad:{
        imageUrl: "",
        idRoom: "65e1b1d91fc1e501dbdc4487", // idRoom has to be hardcoded which must be changed
        startDate:"", /* "2024-03-05T15:30:15.0", */ // startDate payload of post "Ad" isn't reading instead it's being auto filled in the backend
        partnerDescription: "",
      }
    };
  },
  mounted() {
    this.$store.commit('adNS/setAd', this.ad);
  },
 /*  beforeUnmount() {
    this.choicesInstances.forEach(instance => instance.destroy());
  }, */
};
</script>