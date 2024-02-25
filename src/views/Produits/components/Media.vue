<template>
  <div
    class="p-3 bg-white card multisteps-form__panel border-radius-xl"
    data-animation="FadeIn"
  >
    <h5 class="font-weight-bolder">Media</h5>
    <div class="multisteps-form__content">
      <div class="mt-3 row">
        <div class="col-12">
          <label>Image du produit</label>
          <form
            id="dropzone"
            action="/file-upload"
            class="form-control dropzone"
          >
            <div class="fallback">
              <input name="file" type="file" multiple @change="handleFileChange"/>
            </div>
          </form>
        </div>
      </div>
      <div class="mt-4 button-row d-flex col-12">
        <argon-button
          color="secondary"
          variant="gradient"
          class="mb-0 js-btn-prev"
          title="Prev"
          @click="$parent.prevStep"
          >Prev</argon-button
        >
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
import Dropzone from "dropzone";

export default {
  name: "Media",
  data() {
    return {
    };
  },
  components: {
    ArgonButton,
  },
  methods: {
    handleFileChange(event) {
      const files = event.target.files;

      if (files.length > 0) {
        // Assuming you want to take the first file if multiple files are selected
        this.prod.itemImage = files[0];
      } else {
        this.prod.itemImage = null; // Reset if no file is selected
      }
    },
  },
  mounted() {
    /* console.log("prod itemimage : ",this.prod.itemImage); */
    Dropzone.autoDiscover = false;
    var drop = document.getElementById("dropzone");
    var myDropzone = new Dropzone(drop, {
      url: "/file/post",
      maxFiles: 1,
      acceptedFiles: 'image/*',
      addRemoveLinks: true,
    });
    myDropzone.on("addedfile", function() {
      if (this.files.length > 1) {
        this.removeFile(this.files[0]);
      }
    });
  },
};
</script>
