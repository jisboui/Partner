<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="pb-0 card-header">
            <div class="d-lg-flex">
              <div>
                <h5 class="mb-0">Bibliothèque produits</h5>
                <p class="mb-0 text-sm">
                  C'est ici que vous trouveriez tous vos produits pour les
                  utiliser dans vos campagnes.
                </p>
              </div>
              <div class="my-auto mt-4 ms-auto mt-lg-0">
                <div class="my-auto ms-auto">
                  <router-link
                    to="./new-prod"
                    class="mb-0 btn bg-gradient-success btn-sm"
                    >+&nbsp; Nouveau produit
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="px-0 pb-0 card-body">
            <div class="table-responsive">
              <table id="products-list" class="table table-flush" > 
                <colgroup>
                  <col style="width: 500px; overflow: auto;"> 
                  <col style="width: 400px; overflow: auto;"> 
                  <col style="width: 500px; overflow: auto;"> 
                  <col style="width: 120px; overflow: auto;"> 
                </colgroup>
                <thead class="thead-light">
                  <tr>
                    <th>Produit</th>
                    <th>Catégorie</th>
                    <!-- <th>Tier</th> -->
                    <th>Description</th>
                    <!-- <th>Quantity</th> -->
                    <!-- <th>Status</th> -->
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody >
                  <tr v-for="(prod) in prods.data" :key="prod.id" :value="prod.id">
                    <td>
                      <div class="d-flex">
                        <!-- <div class="my-auto form-check">
                            <input
                              id="customCheck1"
                              class="form-check-input"
                              type="checkbox"
                              checked
                            />
                          </div> -->
                        <img
                          class=" ms-3"
                          style="width: 140px; height: 130px;"
                          :src="prod.itemImage"
                          alt="product image"
                        />
                        <div>
                          <div v-for="lang in langs.data" :key="lang.id">
                            <h6 class="my-auto ms-3">{{ lang.languageCode }}: {{ prod.productName[lang.languageCode] }}</h6>
                          </div>
                      </div>
                      </div>
                    </td>
                    <td class="text-sm">{{prod.category}}</td>
                    <!-- <td class="text-sm">{{ prod.productTier }}</td> -->
                    <div>
                      <div v-for="lang in langs.data" :key="lang.id">
                        {{ lang.languageCode }}: {{ prod.description[lang.languageCode] }}
                      </div>
                  </div>
                    <!--       <td class="text-sm">0</td>-->
                    <td class="text-sm">
                      <!-- <a
                        href="javascript:;"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Preview product"
                      >
                        <i class="fas fa-eye text-secondary"></i>
                      </a> -->
                      <br><br>
                      <button @click="editProduct(prod.productName, prod.category, prod.description, prod.id, prod.itemImage)" data-action="tooltip" class="fas fa-user-edit text-secondary"></button>
                      <button @click="deleteProd(prod.id); console.log('id  : ',prod.id); " data-action="delete" class="fas fa-trash text-secondary"></button>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>Produit</th>
                    <th>Catégorie</th>
                    <!-- <th>Tier</th> -->
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
  name: "ProductList",
    created() {
     this.$store.dispatch("langNS/fetchLangs");
  },
    mounted() {
    this.$store.dispatch("prodNS/fetchprod")
      /* this.setupDataTable(); */
  },
  computed: {
    langs() {
      return this.$store.state.langNS.langs;
    },
    prods() {
      const prods = this.$store.state.prodNS.prod;
      return prods;
    },
  },
 /*  beforeRouteLeave(to, from, next) {
    if (this.dataTableSearch) {
      this.dataTableSearch.destroy();
    }
    next();
  }, */
  methods: {
    editProduct(productName, category, description, id, image) {
      const productNameObj = {};
      const descriptionObj = {};

      this.langs.data.forEach((lang) => {  // here i'm creating an object for the productName and description properties of the prod object for each language to be able to pass it to the EditProd route
        productNameObj[lang.languageCode] = productName[lang.languageCode];
        descriptionObj[lang.languageCode] = description[lang.languageCode];
      });
    

      const encodedProductName = encodeURIComponent(JSON.stringify(productNameObj)); // this encoding is done to avoid the error of "URI malformed" when passing the object as a parameter in the URL to the EditProd route
      const encodedDescription = encodeURIComponent(JSON.stringify(descriptionObj)); 

      this.$router.push({  
        name: 'EditProd',
        params: {                          // this is to pass the data to the EditProd route and use it there to fill the form with the old data before the partner edits it
          productName: encodedProductName,
          category,
          description: encodedDescription,
          id,
          image,
        },
      });
    },
    deleteProd(id) {
    this.$store.dispatch('prodNS/deleteProd', { id })
    .then(() => {
      return this.$store.dispatch('prodNS/fetchprod');
    })/* 
    .then(() => {
      this.$nextTick(() => {
        if (this.dataTableSearch) {
          this.dataTableSearch.refresh();
        }
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    }); */
},
    setupDataTable() {  // this is not being used unless i uncomment : /* this.setupDataTable(); */ in mounted (has some problems)
      if (document.getElementById("products-list")) {
          this.dataTableSearch = new DataTable("#products-list", {
            searchable: true,
            fixedHeight: false,
            perPage: 5,
          });
          document.getElementById("products-list").addEventListener("click", (event) => {
          const target = event.target;
          if (target.tagName.toLowerCase() === "button" && target.dataset.action === "delete") {
          const id = target.closest("tr").getAttribute("value");
          console.log("target closest tr wala chnia : ",id);
          this.deleteProd(id);
            }
            else if (target.tagName.toLowerCase() === "button" && target.dataset.action === "tooltip") {
              console.log("inside tooltip");
              this.editProduct();
            }
          });
      }
      setTooltip(this.$store.state.bootstrap);
    },
  },
};
</script>