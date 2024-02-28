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
              <input type="file" name="file" @change="handleFileChange" />
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
          @click="this.$parent.nextStep();"
          :disabled="!file"
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
        file: null,
    };
  },
  components: {
    ArgonButton,
  },
  methods: {
    /* handleClick() {      
      this.uploadFile()
      this.$parent.nextStep();
    }, */
     /* uploadFile() {
        this.$store.commit("fileUploadNS/setFileUpload", this.file);
    }, */ //these don't work
    /* handleFileChange(event) {
      console.log('handleFileChange called');
      this.file = event.target.files[0];
      this.$store.dispatch("fileUploadNS/a_serviceFileUpload", this.file);
    }, */ // this is the old method used with input type="file" that was replaced by the Dropzone method below
  },
  mounted() {
  Dropzone.autoDiscover = false;
  var drop = document.getElementById("dropzone");

  var vueComponent = this; // Store the Vue component instance

  var myDropzone = new Dropzone(drop, {
    url: "/file/post", // This won't be used, but Dropzone needs a URL to initialize
    maxFiles: 1,
    acceptedFiles: 'image/*',
    addRemoveLinks: true,
    autoProcessQueue: false, // Prevent Dropzone from automatically uploading the file
  });

  myDropzone.on("addedfile", function(file) {
    if (this.files.length > 1) {
      this.removeFile(this.files[0]);
    }
    vueComponent.file = file; // Store the file in my component's data instead of this.file which refers to the Dropzone instance and won't work
    vueComponent.$store.dispatch("fileUploadNS/a_serviceFileUpload", vueComponent.file); 
  });
},
};
</script>
