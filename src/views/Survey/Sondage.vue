<template>
  <div id="surveyCreator" />
</template>

<script>
import { SurveyCreator } from "survey-creator-knockout";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

const creatorOptions = {
  /* showLogicTab: true, */
  isAutoSave: true,
  showJSONEditorTab: false,
  showPropertyGrid: false,
};

const defaultJson = {
  pages: [{
    name: "Name",
    elements: [{
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    }, {
      name: "LastName",
      title: "Enter your last name:",
      type: "text"
    }]
  }]
};

export default {
  name: "survey-creator",
  mounted() {
    const creator = new SurveyCreator(creatorOptions);
    creator.text = window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
    creator.saveSurveyFunc = (saveNo, callback) => { 
      // If you use localStorage:
      window.localStorage.setItem("survey-json", creator.text);
      callback(saveNo, true);
      // If you use a web service:
      // saveSurveyJson(
      //     "https://your-web-service.com/",
      //     creator.JSON,
      //     saveNo,
      //     callback
      // );
    };
    creator.render("surveyCreator");
    creator.onShowingProperty.add(function(sender, options) {
      if (options.obj.getType() === "page" && (options.property.name === "title" || options.property.name === "description")) {
        options.canShow = false;
      }
    });
  },
 
};

// If you use a web service:
// function saveSurveyJson(url, json, saveNo, callback) {
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     },
//     body: JSON.stringify(json)
//   })
//   .then(response => {
//     if (response.ok) {
//       callback(saveNo, true);
//     } else {
//       callback(saveNo, false);
//     }
//   })
//   .catch(error => {
//     callback(saveNo, false);
//   });
// }
</script>
<style scoped>
#surveyCreator {
  height: 100vh;
  width: 100vw;
}
</style>
