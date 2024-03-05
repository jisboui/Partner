<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="pb-0 card-header">
            <div class="d-lg-flex">
              <div>
                <h5 class="mb-0">Bibliothèque des vidéos Ads</h5>
                <p class="mb-0 text-sm">
                  C'est ici que vous trouveriez vos 5 vidéos Ads dont vous pourriez activer qu'une seule à la fois.
                </p>
              </div>
              <div class="my-auto mt-4 ms-auto mt-lg-0">
                <div class="my-auto ms-auto">
                  <router-link
                    to="./ajouter-ad"
                    class="mb-0 btn bg-gradient-success btn-sm"
                    >+&nbsp; Nouvelle Ad
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="px-0 pb-0 card-body">
            <div class="table-responsive">
              <table id="ad-list" class="table table-flush" > 
                <colgroup>
                  <col style="width: 450px; overflow: auto;"> 
                  <col style="width: 220px; overflow: auto;"> 
                  <col style="width: 400px; overflow: auto;"> 
                  <col style="width: 125px; overflow: auto;"> 
                </colgroup>
                <thead class="thead-light">
                  <tr>
                    <th>Image d'Ad</th>
                    <th>Nombre d'impression</th>
                    <!-- <th>Description</th> -->
                    <th>Date de début</th>
                    <th>Date de fin</th>
                    <th>Date d'ajout</th>
                    <th>Statut d'activité</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody >
                  <tr v-for="(ad) in ads.adsList" :key="ad.id" :value="ad.id">
                    <td>
                      <div class="d-flex">
                        <img
                          class=" ms-3"
                          style="width: 140px; height: 130px;"
                          :src="ad.imageUrl"
                          alt="ad"
                        />
                        <h6 class="my-auto ms-3">{{ad}}</h6>
                      </div>
                    </td>
                    <td class="text-sm">{{ad.impressionCount}}</td>
                    <td class="text-sm">{{ad.startDate}}</td>
                    <td class="text-sm">{{ad.endDate}}</td>
                    <td class="text-sm" >{{ad.addedDate}}</td>
                    <td class="text-sm" >{{ad.active}}</td>
                    <td class="text-sm">
                      <a
                        href="javascript:;"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Preview aduct"
                      >
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <!-- <button @click="editAd(ad, ad, ad,ad)" data-action="tooltip" class="fas fa-user-edit text-secondary"></button>
                        <button @click="deleteAd(ad.id); console.log('id  : ',ad.id); " data-action="delete" class="fas fa-trash text-secondary"></button> -->
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>Image d'Ad</th>
                    <th>Nombre d'impression</th>
                    <!-- <th>Description</th> -->
                    <th>Date de début</th>
                    <th>Date de fin</th>
                    <th>Added Date</th>
                    <th>Statut d'activité</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DataTable } from "simple-datatables";
import setTooltip from "@/assets/js/tooltip.js";

export default {
  name: "AdsList",
  /* created() {
    
  }, */
  mounted() {
    this.$store.dispatch("adNS/fetchad");
      /* this.setupDataTable(); */
  },
  computed: {
    ads() {
      const ads = this.$store.state.adNS.ad;
      return ads;
    },
  },
 /*  beforeRouteLeave(to, from, next) {
    if (this.dataTableSearch) {
      this.dataTableSearch.destroy();
    }
    next();
  }, */
  methods: {
    editAd(aductName, category, description,id) {
    this.$router.push({ name: 'EditAd', params: { aductName, category, description,id} });
  },
    deleteAd(id) {
    this.$store.dispatch('adNS/deleteAd', { id })
    .then(() => {
      return this.$store.dispatch('adNS/fetchad');
    })
    .then(() => {
      this.$nextTick(() => {
        if (this.dataTableSearch) {
          this.dataTableSearch.refresh();
        }
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
},
    setupDataTable() {
      if (document.getElementById("ad-list")) {
          this.dataTableSearch = new DataTable("#ad-list", {
            searchable: true,
            fixedHeight: false,
            perPage: 5,
          });
          document.getElementById("ad-list").addEventListener("click", (event) => {
          const target = event.target;
          if (target.tagName.toLowerCase() === "button" && target.dataset.action === "delete") {
          const id = target.closest("tr").getAttribute("value");
          console.log("target closest tr wala chnia : ",id);
          this.deleteAd(id);
            }
            else if (target.tagName.toLowerCase() === "button" && target.dataset.action === "tooltip") {
              console.log("inside tooltip");
              this.editAd();
            }
          });
      }
      setTooltip(this.$store.state.bootstrap);
    },
  },
};
</script>