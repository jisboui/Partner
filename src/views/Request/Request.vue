<template>
  <div>
    <br>
    <h2 class="header">Liste de mes demandes</h2>
    <br />
    <ul class="request-list">
      <li v-for="request in requests.data" :key="request.id">
        <div class="request-card">
          <div class="request-details">
            <p class="date">
              <strong>Date:</strong> {{ formatDateTime(request.requestDate) }}
            </p>
            <p class="status">
              <strong>Status:</strong> {{ request.requestStatus == 'PENDING' ? 'En attente' : 'Confirmé' }}
            </p>
            <p class="description">
              <strong>Description:</strong>
              {{ request.partnerDescription || "Pas de description" }}
            </p>
            <div v-if="request.requestedChanges">
              <p class="changes-title">
                <strong>Changement demandés :</strong>
              </p>
              <ul class="changes-list">
                <li v-if="request.requestedChanges.active !== undefined">
                  <strong>Active:</strong>
                  {{ request.requestedChanges.active ? "Oui" : "Non" }}
                </li>
                <li v-if="request.requestedChanges.addedDate">
                  <strong>Date d'ajout :</strong>
                  {{ formatDateTime(request.requestedChanges.addedDate) }}
                </li>
                <li v-if="request.requestedChanges.startDate">
                  <strong>Date de début :</strong>
                  {{ formatDateTime(request.requestedChanges.startDate) }}
                </li>
                <li v-if="request.requestedChanges.endDate">
                  <strong>Date de fin :</strong>
                  {{ formatDateTime(request.requestedChanges.endDate) }}
                </li>
                <li v-if="request.requestedChanges.imageUrl">
                  <br />
                  <img
                    v-if="request.requestedChanges.imageUrl"
                    :src="request.requestedChanges.imageUrl"
                    alt="Requested Image"
                    class="requested-image"
                  />
                </li>
              </ul>
            </div>
          </div>
          <button @click="deleteRequest(request.id)" class="delete-button">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Request",
  computed: {
    requests() {
      return this.$store.state.requestNS.requests;
    },
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
      this.$store.dispatch("requestNS/deleteRequest", { id }).then(() => {
        this.$store.dispatch("requestNS/fetchRequests");
      });
    },
    formatDateTime(dateTimeString) {
      return new Date(dateTimeString).toLocaleString("fr-FR");
    },
  },
  created() {
    this.$store.dispatch("requestNS/fetchRequests");
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
