<script>
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-vue3-ui'; // Add this line

export default {
  name : 'Sondage',
  components: {
    Survey // Add this line
  },
  setup() {
    const surveyJson = {
      elements: [{
        name: "FirstName",
        title: "Enter your first name:",
        type: "text"
      }, {
        name: "LastName",
        title: "Enter your last name:",
        type: "text"
      }]
    };
    const survey = new Model(surveyJson);

    return {
      survey
    };
  }
}
</script>

<template>
 <Survey :model="survey" /> <!-- Change this line -->
</template>