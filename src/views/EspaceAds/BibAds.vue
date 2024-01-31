<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <!-- Card header -->
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
                  <a
                    href="./ajouter-ad"
                    class="mb-0 btn bg-gradient-success btn-sm"
                    target="_blank"
                    >+&nbsp; Nouvelle vidéo Ad</a
                  >
                  <button
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
                  </div>
                  <button
                    class="mt-1 mb-0 btn btn-outline-success btn-sm export mt-sm-0"
                    data-type="csv"
                    type="button"
                    name="button"
                  >
                    Export
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="px-0 pb-0 card-body">
            <div class="table-responsive">
              <table id="products-list" class="table table-flush">
                <thead class="thead-light">
                  <tr>
                    <th>Titre et logo de l'Ad</th>
                    <!-- <th>Category</th> -->
                    <!-- <th>Price</th> -->
                    <th>ID</th>
                    <!-- <th>Quantity</th> -->
                    <!-- <th>Status</th> -->
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
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
                          class="w-10 ms-3"
                          src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Ooredoo_logo_2017.svg"
                          alt="hoodie"
                        />
                        <h6 class="my-auto ms-3">Publicité offre Ooredoo</h6>
                      </div>
                    </td>
                   <!--  <td class="text-sm">Clothing</td>
   -->                  <!--            <td class="text-sm">$1,321</td> -->
                    <td class="text-sm">243598234</td>
                    <!--       <td class="text-sm">0</td>
       -->
                    <td>
                      <!-- <span class="badge badge-danger badge-sm"
                        >Out of Stock</span
                      > -->
                    </td>
                    <td class="text-sm">
                      <a
                        href="javascript:;"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Preview product"
                      >
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <!-- <a
                        href="/produits/edit-prod"
                        class="mx-3"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Edit product"
                      >
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a> -->
                      <a
                        href="javascript:;"
                        class="mx-3"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Delete product"
                      >
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <!-- <div class="my-auto form-check">
                          <input
                            id="customCheck2"
                            class="form-check-input"
                            type="checkbox"
                            checked
                          />
                        </div> -->
                        <img
                          class="w-10 ms-3"
                          src="https://upload.wikimedia.org/wikipedia/fr/f/ff/Logo-delice-Holding.png"
                          alt="mac"
                        />
                        <h6 class="my-auto ms-3">Pub yahourt délice</h6>
                      </div>
                    </td>
                    <!--  <td class="text-sm">Electronics</td>
   -->                  <!--            <td class="text-sm">$1,869</td> -->
                    <td class="text-sm">877712</td>
                    <!--       <td class="text-sm">0</td>
       -->
                    <td>
                      <!-- <span class="badge badge-danger badge-sm"
                        >Out of Stock</span
                      > -->
                    </td>
                    <td class="text-sm">
                      <a
                        href="javascript:;"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Preview product"
                      >
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <!-- <a
                        href="/produits/edit-prod"
                        class="mx-3"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Edit product"
                      >
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a> -->
                      <a
                        href="javascript:;"
                        class="mx-3"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Delete product"
                      >
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <!-- <div class="my-auto form-check">
                          <input
                            id="customCheck3"
                            class="form-check-input"
                            type="checkbox"
                          />
                        </div>-->
                        <img
                          class="w-10 ms-3"
                          src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg"
                          alt="metro-chair"
                        />
                        <h6 class="my-auto ms-3">Pub pour chaussures Zara</h6>
                      </div>
                    </td>
                    <!-- <td class="text-sm">Furniture</td>
   -->                  <!--            <td class="text-sm">$99</td>
 -->
                    <td class="text-sm">0134729</td>
                    <!--       <td class="text-sm">978</td>
     -->
                    <td>
                      <!-- <span class="badge badge-success badge-sm">in Stock</span> -->
                    </td>
                    <td class="text-sm">
                      <a
                        href="javascript:;"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Preview product"
                      >
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <!-- <a
                        href="/produits/edit-prod"
                        class="mx-3"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Edit product"
                      >
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a> -->
                      <a
                        href="javascript:;"
                        class="mx-3"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Delete product"
                      >
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <!-- <div class="my-auto form-check">
                          <input
                            id="customCheck10"
                            class="form-check-input"
                            type="checkbox"
                          />
                        </div>-->
                        <img
                          class="w-10 ms-3"
                          src="https://upload.wikimedia.org/wikipedia/commons/e/ed/LG_Electronics_logo_2015_%28english%29.svg"
                          alt="alchimia"
                        />
                        <h6 class="my-auto ms-3">Publicité pour les frigidaires LG</h6>
                      </div>
                    </td>
                    <!-- <td class="text-sm">Furniture</td>
   -->                  <!--            <td class="text-sm">$2,999</td> -->
                    <td class="text-sm">113213</td>
                    <!--       <td class="text-sm">0</td>
       -->
                    <td>
                      <!-- <span class="badge badge-danger badge-sm"
                        >Out of Stock</span
                      > -->
                    </td>
                    <td class="text-sm">
                      <a
                        href="javascript:;"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Preview product"
                      >
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <!-- <a
                        href="/produits/edit-prod"
                        class="mx-3"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Edit product"
                      >
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a> -->
                      <a
                        href="javascript:;"
                        class="mx-3"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Delete product"
                      >
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="d-flex">
                        <!-- <div class="my-auto form-check">
                          <input
                            id="customCheck5"
                            class="form-check-input"
                            type="checkbox"
                          />
                        </div> -->
                        <img
                          class="w-10 ms-3"
                          src="https://upload.wikimedia.org/wikipedia/en/9/99/Tunisie_Telecom_Logo.png"
                          alt="fendi"
                        />
                        <h6 class="my-auto ms-3">Pub forfait internet TT</h6>
                      </div>
                    </td>
                   <!--  <td class="text-sm">Clothing</td>
   -->                  <!--            <td class="text-sm">$869</td>
-->
                    <td class="text-sm">634729</td>
                    <!--       <td class="text-sm">725</td>
     -->
                    <td>
                      <!-- <span class="badge badge-success badge-sm">in Stock</span> -->
                    </td>
                    <td class="text-sm">
                      <a
                        href="javascript:;"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Preview product"
                      >
                        <i class="fas fa-eye text-secondary"></i>
                      </a>
                      <!-- <a
                        href="/produits/edit-prod"
                        class="mx-3"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Edit product"
                      >
                        <i class="fas fa-user-edit text-secondary"></i>
                      </a> -->
                      <a
                        href="javascript:;"
                        class="mx-3"
                        data-bs-toggle="tooltip"
                        data-bs-original-title="Delete product"
                      >
                        <i class="fas fa-trash text-secondary"></i>
                      </a>
                    </td>
                  </tr>
                  <!--  -->
                </tbody>
                <tfoot>
                  <tr>
                    <th>Titre et logo de l'Ad</th>
                    <!-- <th>Category</th> -->
                    <!-- <th>Price</th> -->
                    <th>ID</th>
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
  data() {
    return {
      dataTableSearch: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => vm.setupDataTable());
  },
  beforeRouteUpdate(to, from, next) {
    this.setupDataTable();
    next();
  },
  beforeRouteLeave(to, from, next) {
    if (this.dataTableSearch) {
      this.dataTableSearch.destroy();
    }
    next();
  },
  methods: {
    setupDataTable() {
      if (document.getElementById("products-list")) {
        this.dataTableSearch = new DataTable("#products-list", {
          searchable: true,
          fixedHeight: false,
          perPage: 7,
        });

        document.querySelectorAll(".export").forEach((el) => {
          el.addEventListener("click", () => {
            var type = el.dataset.type;

            var data = {
              type: type,
              filename: "soft-ui-" + type,
            };

            if (type === "csv") {
              data.columnDelimiter = "|";
            }

            this.dataTableSearch.export(data);
          });
        });
      }
      setTooltip(this.$store.state.bootstrap);
    },
  },
};
</script>
