<template>
  <div
    class="p-3 bg-white card multisteps-form__panel border-radius-xl"
    data-animation="FadeIn"
  >
    <h5 class="font-weight-bolder">Product Information</h5>
    <div class="multisteps-form__content">
      <div class="mt-3 row">
        <div class="col-12 col-sm-6">
          <label>Name</label>
          <input
            class="multisteps-form__input form-control"
            type="text"
            placeholder="ex : Laptop Victus HP"
            v-model="prod.productName.EN"
          />
          <!-- <div class="mt-3 col-12 col-sm-6 mt-sm-0">
            <label>Weight</label>
            <input
              class="multisteps-form__input form-control"
              type="text"
              placeholder="eg. 42"
            />
          </div> -->
        </div>
        <br />
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
      </div>

      <div class="row mt-3">
        <!-- <div class="col-12 col-sm-6">
          <label class="mt-4">Description</label>
          <p class="text-xs form-text text-muted ms-1 d-inline">
            Il s'agit d'une description sur le produit que les utilisateurs
            pourront lire, alors faites-la bien!
          </p>
          <div id="edit-description" class="h-50">
            <p>écrivez la description de votre produit ici</p>
          </div>
        </div> -->
        <div class="col-12 col-sm-6">
          <label>Description</label>
          <input type="text" 
          class="multisteps-form__input form-control h-100"
          placeholder="Ecrire la description de votre produit ici!"
          v-model="prod.description.EN"
          />
        </div>
        <div class="mt-4 col-sm-6 mt-sm-0">
          <label class="mt-4">Tier</label>
          <select
            id="choices-tier"
            class="form-control"
            name="choices-tier"
            v-model="prod.productTier"
          >
            <option value="T1" >T1</option>
            <option value="T2">T2</option>
            <option value="T3">T3</option>
            <option value="T4">T4</option>
          </select>
        </div>
        <div class="mt-4 col-sm-6 mt-sm-0">
          <!-- <label>Sizes</label>
          <select id="choices-sizes" class="form-control" name="choices-sizes">
            <option value="Choice 1" selected="">Medium</option>
            <option value="Choice 2">Small</option>
            <option value="Choice 3">Large</option>
            <option value="Choice 4">Extra Large</option>
            <option value="Choice 5">Extra Small</option>
          </select> -->
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
          >Next</argon-button
        >
      </div>
    </div>
  </div>
</template>

<script>
/* import Quill from "quill"; */
/* import Choices from "choices.js"; */
import ArgonButton from "@/components/ArgonButton.vue";

export default {
  name: "ProductInfo",
  components: {
    ArgonButton,
  },
  data() {
    return {
     prod :  {
  "productName":  {
     "EN": "Nom du produit ou service",
    "FR": "fr",
    "AR": "ar" 
  },
  "description":  {
    "EN": "Description du produit ou service",
    "FR": "fr",
    "AR": "ar"
  },
  "itemImage": "https://firebasestorage.googleapis.com/v0/b/dopawinapi.appspot.com/o/petit-dej.png?alt=media",
  "category": "Clothing",
  "idPartner": "65ce1b13f7da5b1fc0987383",
  "productTier": "T1"
},
      /* choicesInstances: [], */
    };
  },
  mounted() {
    this.$store.commit('prodNS/updateProd', this.prod);
    console.log("prod fel productinfo : ",this.prod);
    console.log("descriptio, : ",this.prod.description);
  },
  beforeUnmount() {
    
    /* this.choicesInstances.forEach((instance) => instance.destroy()); */
  },
};
</script>
