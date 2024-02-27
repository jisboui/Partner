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
                    >+&nbsp; Nouveau aduit
                  </router-link>
                  <!-- <button
                    type="button"
                    class="mx-1 mb-0 btn btn-outline-success btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#import"
                  >
                    Import
                  </button>
                  <div
                    id="import"
                    class="modal fade"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog mt-lg-10">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 id="ModalLabel" class="modal-title">
                            Import CSV
                          </h5>
                          <i class="fas fa-upload ms-3"></i>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <p>You can browse your computer for a file.</p>
                          <input
                            type="text"
                            placeholder="Browse file..."
                            class="mb-3 form-control"
                          />
                          <div class="form-check">
                            <input
                              id="importCheck"
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              checked=""
                            />
                            <label
                              class="custom-control-label"
                              for="importCheck"
                              >I accept the terms and conditions</label
                            >
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn bg-gradient-secondary btn-sm"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            class="btn bg-gradient-success btn-sm"
                          >
                            Upload
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> -->
                  <!--  <button
                      class="mt-1 mb-0 btn btn-outline-success btn-sm export mt-sm-0"
                      data-type="csv"
                      type="button"
                      name="button"
                    >
                      Export
                    </button> -->
                </div>
              </div>
            </div>
          </div>
          <div class="px-0 pb-0 card-body">
            <div class="table-responsive">
              <table id="aducts-list" class="table table-flush" > 
                <colgroup>
                  <col style="width: 450px; overflow: auto;"> 
                  <col style="width: 220px; overflow: auto;"> 
                  <col style="width: 400px; overflow: auto;"> 
                  <col style="width: 125px; overflow: auto;"> 
                </colgroup>
                <thead class="thead-light">
                  <tr>
                    <th>Ad image</th>
                    <!-- <th>Price</th> -->
                    <th>Description</th>
                    <!-- <th>Quantity</th> -->
                    <!-- <th>Status</th> -->
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody >
                  <!-- <tr v-for="(ad) in ads.data" :key="ad.id" :value="ad.id">
                    <td>
                      <div class="d-flex">
                        <img
                          class=" ms-3"
                          style="width: 140px; height: 130px;"
                          :src="ad.adsList"
                          alt="ad"
                        />
                        <h6 class="my-auto ms-3">{{ad.}}</h6>
                      </div>
                    </td>
                    <td class="text-sm">{{ad.}}</td>
                    <td class="text-sm description-column" >{{ad.}}</td>
                    <td class="text-sm">
                      <a
                        href="javascript:;"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Preview aduct"
                      >
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <button @click="editAd(ad., ad., ad.,ad.)" data-action="tooltip" class="fas fa-user-edit text-secondary"></button>
                        <button @click="deleteAd(ad.id); console.log('id  : ',ad.id); " data-action="delete" class="fas fa-trash text-secondary"></button>
                    </td>
                  </tr> -->
                </tbody>
                <tfoot>
                  <tr>
                    <th>Ad image</th>
                    <!-- <th>Price</th> -->
                    <th>Description</th>
                    <!-- <th>Quantity</th> -->
                    <!-- <th>Status</th> -->
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
  name: "BibAds",
  created() {
    this.$store.dispatch("adNS/fetchad");
  },
  async mounted() {
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
      if (document.getElementById("aducts-list")) {
          this.dataTableSearch = new DataTable("#aducts-list", {
            searchable: true,
            fixedHeight: false,
            perPage: 5,
          });
          document.getElementById("aducts-list").addEventListener("click", (event) => {
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

<style scoped>
#aducts-list {
  table-layout: fixed;
}

#aducts-list .description-column {
  width: 100px; 
  overflow: auto;
}
</style>