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
        >Prev</argon-button>
        <div @mouseenter="showTooltip" class="ms-auto" ref="tooltipDiv">
          <argon-button
            type="button"
            color="dark"
            variant="gradient"
            class="mb-0 js-btn-next"
            title="Next"
            @click="this.$parent.nextStep();"
            :disabled="!uploadComplete || !file"
          >Next</argon-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";
import Dropzone from "dropzone";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export default {
  name: "Media",
  data() {
    return {
        file: null,
        uploadComplete: false,
        tooltipInstance: null,
    };
  },
  components: {
    ArgonButton,
  },
  methods: {
    showTooltip(event) { // Show a alerting message to the partner when hovering over the next button if the Partner hasn't uploaded an image yet
      if ((!this.uploadComplete || !this.file) && !this.tooltipInstance) {
        this.tooltipInstance = tippy(event.target, {
          content: 'Veuillez télécharger une image pour continuer!',
        });
      }
    },
  
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
  watch: {
    uploadComplete(newVal) {  // Destroy the alerting message when the image is uploaded by the Partner
      if (!newVal && !this.tooltipInstance) {
        this.$nextTick(() => {
          this.tooltipInstance = tippy(this.$refs.tooltipDiv, {
            content: 'Veuillez télécharger une image pour continuer!',
          });
        });
      } else if (newVal && this.tooltipInstance) {
        this.tooltipInstance.destroy();
        this.tooltipInstance = null;
      }
    },
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
  myDropzone.on("removedfile", function() { // Reset the file and uploadComplete properties when the file is removed
    vueComponent.file = null;
    vueComponent.uploadComplete = false;
});
  myDropzone.on("addedfile", function(file) {
    if (this.files.length > 1) { // If the user adds more than one file, remove the first one and add or keep the new one
      this.removeFile(this.files[0]); 
    }
    vueComponent.file = file; // Store the file in my component's data instead of this.file which refers to the Dropzone instance and won't work
    vueComponent.$store.dispatch("fileUploadNS/a_serviceFileUpload", vueComponent.file)
    .then(() => {
      vueComponent.uploadComplete = true;
    });
  });
},
};
</script>
