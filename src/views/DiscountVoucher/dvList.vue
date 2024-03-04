<template>
  <div id="app">
    <h1>Bibliothèque des bons</h1>
    <br>
    <div id="DV" class="container" style="display: flex; justify-content: center; align-items: center;">
      <div class="card">
        <div class="main">
          <div class="co-img">
            <img
            src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/273207779_281563397405455_6026609381950187436_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=26EnkjS_GYAAX8CbJMx&_nc_ht=scontent.ftun1-2.fna&oh=00_AfBbrPlvqH4XTf7b_6wE7yulTvNn2Et4sp60m3Gz02WYQQ&oe=65E99861"
            alt="brand logo"
            />
          </div>
          <div class="vertical"></div>
          <div class="content">
          <div>
          <div>
            <label for="dvType">Le bon se porte sur un :</label>
            <select id="dvType"  class="form-control" style="width: 200px; margin-left: 85px;" v-model="dvP.dvType">
              <option value="PRODUCT">Produit</option>
              <option value="PURCHASE">Achat</option>
            </select>
          </div>
          </div>
          <br>
            <h1>
              <input v-model="dvP.discountValue" dvType="text" class="editable-input">{{ discountSign }}
                <select class="editable-input" v-model="dvP.discountType">
                <option value="PERCENTAGE">Bon de réduction</option>
                <option value="FLAT_AMOUNT">Bon d'achat</option>
                </select>
            </h1>
            <p>Valable <input v-model="dvP.validityInDays" dvType="text" class="long-input"/> jours</p> 
          </div>
        </div>
        <br>
      <button @click="addItem" class="add-button">Ajouter le bon</button>
      </div>
    </div>
      <br> <br>
    <div v-if="items.length" class="items-container" >
      <div class="item" v-for="(dv,index) in dvs.data" :key="dv.id" :value="dv.id">
        <div class="item-details" >
          <strong>{{ dv.discountValue }}{{ dv.discountType == 'PERCENTAGE' ? '%' : 'Dt' }} réduction</strong> - {{ dv.validityInDays }} jours - {{ dv.dvType == 'PRODUCT' ? "Produit" : "Achat" }} - {{ dv.discountType == 'PERCENTAGE' ? 'Bon de réduction' : 'Bon dachat' }}
        </div>
        <div class="item-actions">
          <button @click="editItem(index)" class="edit-button">Modifier</button>
          <button @click="deleteItem(index)" class="delete-button">Supprimer</button>
        </div>
      </div>
    </div>

    <div v-else>
      <p>Pas de bons, ajouter en uns!</p>
    </div>

    <div v-if="editIndex !== null" class="modal">
      <div class="modal-content">
        <h2>Modifier le bon</h2>
        <input v-model="editedItem.discountValue" placeholder="% réduction" class="input-field">
        <input v-model="editedItem.validityInDays" placeholder="date d'expiration" class="input-field">
            <select v-model="editedItem.dvType" class="input-field">
              <option value="" selected disabled>Select Option</option>
              <option value="PRODUCT">Produit</option>
              <option value="PURCHASE">Achat</option>
            </select>
            <select v-model="editedItem.discountType" class="input-field">
              <option value="" selected disabled>Select Option</option>
              <option value="PERCENTAGE">Bon de réduction</option>
              <option value="FLAT_AMOUNT">Bon d'achat</option>
            </select>
        <div class="modal-buttons">
          <button @click="saveEdit" class="save-button">Save</button>
          <button @click="cancelEdit" class="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dvList',
  data() {
    return {
      dvP : {
        dvType: "PRODUCT",
        discountType: "PERCENTAGE",
        validityInDays: '30',
        discountValue: '10',
      },/* 
      newdiscountValue: '',
      newvalidityInDays: '',
      newItemtype: '', */
      items: [], 
      editIndex: null,
      editedItem: {
        dvType: "",
        discountType: "",
        validityInDays: '',
        discountValue: '',
      }
    };
  },
async created() {
  this.fillItems();
},
computed: {
  dvs() {
    const dvs = this.$store.state.dvNS.dv;
    return dvs;
  },
  discountSign() { // Return the sign of the discount type (percentage or flat amount) depending on the selected discount type
    return this.dvP.discountType == 'PERCENTAGE' ? '%' : 'Dt';
  }
},
  methods: {
    fillItems() {
    this.$store.dispatch('dvNS/fetchdv')
      .then(() => {
        this.items = this.dvs.data.map((dv) => ({
          discountValue: dv.discountValue,
          validityInDays: dv.validityInDays,
          dvType: dv.dvType,
          discountType : dv.discountType,
          id: dv.id
        }));
        console.log("Items:", this.items);
      })
      .catch((error) => {
        console.error("Error fetching dv:", error);
      });
  },
  addItem() {
    if (this.dvP.dvType && this.dvP.discountType && this.dvP.validityInDays && this.dvP.discountValue !== '') {
      this.$store.dispatch('dvNS/postdvP', this.dvP)
      .then(() => {
        this.$store.dispatch('dvNS/fetchdv');
        this.fillItems();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      // Clear input fields after adding item
        /* this.dvP.discountValue = "";
        this.dvP.validityInDays = "";
        this.dvP.discountType = '';
        this.dvP.dvType = '';   */  
    } else {
      alert('Veuillez entrer tous les champs.');
    }
  },

    editItem(index) {
      this.editIndex = index;
      this.editedItem.dvType = this.items[index].dvType;
      this.editedItem.discountType = this.items[index].discountType;
      this.editedItem.validityInDays = this.items[index].validityInDays;
      this.editedItem.discountValue = this.items[index].discountValue;    
    },
     saveEdit() {
      this.items[this.editIndex].discountValue = this.editedItem.discountValue;
      this.items[this.editIndex].validityInDays = this.editedItem.validityInDays;
      this.items[this.editIndex].dvType = this.editedItem.dvType; 
      const id = this.items[this.editIndex].id;
      console.log("id in edition:", id);
       this.$store.dispatch('dvNS/updateDv', {id ,dvPU : this.editedItem})
       .then(() => {
        this.$store.dispatch('dvNS/fetchdv');
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      this.cancelEdit();
    }, 
    cancelEdit() {
      this.editIndex = null;
      this.editedItem.discountValue = '';
      this.editedItem.validityInDays = '';
      this.editedItem.dvType = '';
    },
    deleteItem(index) {
      if (confirm('Are you sure you want to delete this item?')) {
        const id = this.items[index].id;
        console.log("id in deletion:", id);
        this.items.splice(index, 1);
        this.$store.dispatch('dvNS/deleteDv', {id})
        .then(() => {
          this.$store.dispatch('dvNS/fetchdv');
        })
        .catch((error) => {
          console.error("Error:", error);
        });
        this.cancelEdit(); // Close the edit modal if open for the deleted item
      }
    }
  },
  beforeMount() {
    this.$store.state.layout = "default";
  },  
};
</script>

<style scoped>
#app {
  text-align: center;
}

.input-field {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.add-button {
  height: 40px;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.items-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.item {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  border-radius: 5px;
}

.item-details {
  flex-grow: 1;
}

.item-actions {
  display: flex;
}

.edit-button,
.delete-button {
  padding: 8px;
  margin-right: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
}

.edit-button {
  background-color: #3498db;
  color: #fff;
}

.delete-button {
  background-color: #e74c3c;
  color: #fff;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.save-button,
.cancel-button {
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
}

.save-button {
  background-color: #4caf50;
  color: #fff;
}

.cancel-button {
  background-color: #e74c3c;
  color: #fff;
}

/* for the dv */
#DV {
  .editable-input {
  background: none;
  font-size: 1em;
  font-weight: 1000;
  width: 50px;
  }

  .long-input {
  width: 40px; /* Adjust this value to suit your needs */
  }
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  }

  .container {
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #6bcc8b;
  }

  .card {
  width: 500px;
  height: 235px;
  border-radius: 5px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  background-color: beige;
  padding: 10px 20px;
  position: relative;
  }

  .main {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  }
  .card::after {
  position: absolute;
  content: "";
  height: 40px;
  right: -20px;
  border-radius: 40px;
  z-index: 1;
  top: 80px;
  background-color: #2dce89;
  width: 40px;
  }

  .card::before {
  position: absolute;
  content: "";
  height: 40px;
  left: -20px;
  border-radius: 40px;
  z-index: 1;
  top: 80px;
  background-color: #2dce89;
  width: 40px;
  }

  .co-img img {
  width: 100px;
  height: 100px;
  }
  .vertical {
  border-left: 5px dotted black;
  height: 170px;
  position: absolute;
  left: 35%;
  }

  .content h1 {
  font-size: 35px;
  margin-left: -20px;
  color: #565656;
  padding-left: 95px; 
  }

  .content h1 select {
  font-size: 17px;
  color: #565656;
  width: 170px;
  }
  .content h2 {
  font-size: 18px;
  margin-left: -20px;
  color: #565656;
  text-transform: uppercase;
  padding-left: 100px; 
  }

  .content p {
  font-size: 16px;
  color: #696969;
  margin-left: -20px;
  padding-left: 100px; 
  }

@media (max-width: 600px) {
  .content h1 {
    font-size: 25px; /* reduce the font size on small screens */
  }

  .content h2 {
    font-size: 14px; 
  }

  .content p {
    font-size: 12px; 
  }
  .vertical {
    border-left: 5px dotted black;
    height: 100px;
    position: absolute;
    left: 40%;
    }
}
}
</style>
