<template>
    <div>
      <br>
      <h2 class="header">Mes demandes Ads</h2>
      <br />
      <ul v-if="ads && ads.data && ads.data.partnerRequestList" class="request-list">
        <li v-for="ad in ads.data.partnerRequestList" :key="ad.id">
          <div class="request-card">
            <div class="request-details">
              <p class="date">
                <strong>Date de la demande:</strong> {{ formatDateTime(ad.requestDate) }}
              </p>
              <p class="status">
                <strong>Status:</strong> {{ ad.requestStatus == 'PENDING' ? 'En attente' : 'Confirmé' }}
              </p>
              <p class="description">
                <strong>Description:</strong>
                {{ ad.partnerDescription || "Pas de description" }}
              </p>
              <p class="action">
                <strong>Action demandé:</strong>
                {{ ad.requestAction == 'ADD' ? 'Ajout' : 'kedhe'}}
              </p>
              <div>
                <p class="changes-title">
                  <strong>Changement demandés :</strong>
                </p>
                <ul class="changes-list">
                  <li v-if="ad.requestedChanges.active !== undefined">
                    <strong>Active:</strong>
                    {{ ad.requestedChanges.active ? "Oui" : "Non" }}
                  </li>
                  <li v-if="ad.requestedChanges.addedDate">
                    <strong>Date d'ajout :</strong>
                    {{ formatDateTime(ad.requestedChanges.addedDate) }}
                  </li>
                  <li v-if="ad.requestedChanges.startDate">
                    <strong>Date de début :</strong>
                    {{ formatDateTime(ad.requestedChanges.startDate) }}
                  </li>
                  <li v-if="ad.requestedChanges.endDate">
                    <strong>Date de fin :</strong>
                    {{ formatDateTime(ad.requestedChanges.endDate) }}
                  </li>
                  <li v-if="ad.requestedChanges.impressionCount !== undefined">
                    <strong>Nombre d'impressions :</strong>
                    {{ ad.requestedChanges.impressionCount }}
                  </li>
                  <li v-if="ad.requestedChanges.imageUrl">
                  <br />
                  <img
                    v-if="ad.requestedChanges.imageUrl"
                    :src="ad.requestedChanges.imageUrl"
                    alt="Requested Image"
                    class="requested-image"
                  />
                </li>
                </ul>
              </div>
            </div>
            <button @click="deleteRequest(ad.id)" class="delete-button">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "AdsRequest",
    computed: {
      ads() {
        return this.$store.state.adNS.ad;
      },
    },
    beforeMount() {
      this.$store.state.layout = "default";
  },
    methods: {
      updateCardHeights() {  // Update the height of all cards to match the height of the tallest card
          this.$nextTick(() => {
            const cardContainers = document.querySelectorAll(".request-card");
            let maxCardHeight = 0;
  
            // First iteration to find the maximum card height
            cardContainers.forEach((container) => {
              const cardHeight = container.getBoundingClientRect().height;
              maxCardHeight = Math.max(maxCardHeight, cardHeight);
            });
  
            // Second iteration to set the height of all cards
            cardContainers.forEach((container) => {
              container.style.height = `${maxCardHeight}px`;
            });
        });
      },
      deleteRequest(id) {
        this.$store.dispatch("requestNS/deleteRequest", { id })
        .then(() => {
          this.$store.dispatch("adNS/fetchad");
        });
      },
      formatDateTime(dateTimeString) {
        return new Date(dateTimeString).toLocaleString("fr-FR");
      },
    },
    created() {
      this.$store.dispatch("adNS/fetchad");
      this.updateCardHeights();
    },
  };
  </script>
  
  <style scoped>
  
  .header {
    font-size: 2em;
    margin-bottom: 20px;
    color: #2c3e50;
    text-align: center;
  }
  
  .request-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .request-card {
    position: relative;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.2s ease-in-out;
    overflow: hidden;
    padding: 15px;
    margin: 20px;
  }
  
  .request-card:hover {
    transform: scale(1.05);
  }
  .request-card:hover .delete-button {
    opacity: 1;
  }
  
  .date,
  .status,
  .action,
  .description,
  .changes-title {
    margin: 0;
    margin-bottom: 10px;
    color: #555;
  }
  
  .changes-list {
    list-style: none;
    padding: 0;
  }
  
  .delete-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;
    opacity: 0;
  }
  
  .delete-button:hover {
    background-color: #c0392b;
  }
  
  .requested-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
    transition: transform 0.2s ease-in-out;
  }
  
  .requested-image:hover {
    transform: scale(1.1);
  }
  </style>
  