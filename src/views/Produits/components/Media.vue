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
          <input type="file" ref="fileInput" @change="handleFileChange" />

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
/* import Dropzone from "dropzone"; */

export default {
  name: "Media",
  data() {
    return {
        file: null,
      prod: {
        itemImage: null,
      },
    };
  },
  components: {
    ArgonButton,
  },
  methods: {
    uploadFile() {
  if (this.file) {
    console.log("file : ", this.file);
    this.$store.dispatch("fileUploadNS/a_serviceFileUpload", this.file);
  } else {
    console.error("No file selected.");
  }
},
handleFileChange(event) {
    console.log('handleFileChange called');
    this.file = event.target.files[0];
  },
  },
  mounted() {
    /* console.log("prod itemimage : ",this.prod.itemImage); */
   /*  Dropzone.autoDiscover = false;
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
    }); */
  },
};
</script>
