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
          >
            <option value="Choice 1" selected="">Clothing</option>
            <option value="Choice 2">Real Estate</option>
            <option value="Choice 3">Electronics</option>
            <option value="Choice 4">Furniture</option>
            <option value="Choice 5">Others</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <label class="mt-4">Description</label>
          <p class="text-xs form-text text-muted ms-1 d-inline">
            Il s'agit d'une description sur le produit que les utilisateurs
            pourront lire, alors faites-la bien!
          </p>
          <div id="edit-description" class="h-50">
            <p>écrivez la description de votre produit ici</p>
          </div>
        </div>
        <div class="mt-4 col-sm-6 mt-sm-0">
          <label class="mt-4">Language</label>
          <select
            id="choices-language"
            class="form-control"
            name="choices-language"
          >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
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
import Quill from "quill";
import Choices from "choices.js";
import ArgonButton from "@/components/ArgonButton.vue";

export default {
  name: "ProductInfo",
  components: {
    ArgonButton,
  },
  data() {
    return {
      choicesInstances: [],
    };
  },
  mounted() {
    if (document.getElementById("edit-description")) {
      // eslint-disable-next-line no-unused-vars
      var quill = new Quill("#edit-description", {
        theme: "snow", // Specify theme in configuration
      });
    }
    if (document.getElementById("choices-category")) {
      var element = document.getElementById("choices-category");
      this.choicesInstances.push(
        new Choices(element, {
          searchEnabled: false,
          allowHTML: true,
        })
      );
    }

    if (document.getElementById("choices-sizes")) {
      let element = document.getElementById("choices-sizes");
      this.choicesInstances.push(
        new Choices(element, {
          searchEnabled: false,
          allowHTML: true,
        })
      );
    }
  },
  beforeUnmount() {
    this.choicesInstances.forEach((instance) => instance.destroy());
  },
};
</script>
