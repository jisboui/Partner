<template>
  <div
    class="p-3 bg-white card multisteps-form__panel border-radius-xl"
    data-animation="FadeIn"
  >
    <h5 class="font-weight-bolder">Média de l'Ad</h5>
    <div class="multisteps-form__content">
      <div class="mt-3 row">
        <div class="col-12">
          <label>Choisissez une vidéo ou image de l'Ad depuis votre appareil</label>
          <form
            id="dropzone"
            action="/file-upload"
            class="form-control dropzone"
          >
            <div class="fallback">
              <input name="file" type="file" multiple />
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
  components: {
    ArgonButton,
  },
  mounted() {
    Dropzone.autoDiscover = false;
    var drop = document.getElementById("dropzone");
    var myDropzone = new Dropzone(drop, {
      url: "/file/post",
      maxFiles: 1,
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
