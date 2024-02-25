<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <h4 class="text-white"><!-- Make the changes below --></h4>
        <p class="text-white">
          <!--  We’re constantly trying to express ourselves and actualize our dreams.
          If you have the opportunity to play. -->
        </p>
      </div>
      <div
        class="text-right col-lg-6 d-flex flex-column justify-content-center"
      >
        <router-link
          to="/produits/product-list"
          type="button"
          class="mt-2 mb-0 btn btn-outline-white ms-lg-auto me-lg-0 me-auto mt-lg-0"
        >
        <span @click="save()">Save</span>
        </router-link>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-lg-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="font-weight-bolder">Image du produit</h5>
            <div class="row">
              <div class="col-12">
                <img
                  class="mt-3 shadow-lg w-100 border-radius-lg"
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/macbook-pro.jpg"
                  alt="product_image"
                />
              </div>
              <div class="mt-5 col-12">
                <div class="d-flex">
                  <button
                    class="mb-0 btn bg-gradient-success btn-sm me-2"
                    type="button"
                    name="button"
                  >
                    Modifier
                  </button>
                  <button
                    class="mb-0 btn btn-outline-dark btn-sm"
                    type="button"
                    name="button"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 col-lg-8 mt-lg-0">
        <div class="card" style="height: 460px;">
          <div class="card-body">
            <h5 class="font-weight-bolder">Product Information</h5>
            <div class="row">
              <div class="col-12 col-sm-6">
              <br>
                <label>Name</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="ex : Laptop Victus HP"
                  v-model="prod.productName.EN"
                />
                
              </div>
              <div class=" col-sm-6">
                <label class="mt-4">Tier</label>
                <select
                  id="choices-tier"
                  class="form-control"
                  name="choices-tier"
                >
                  <option value="T1" >T1</option>
                  <option value="T2">T2</option>
                  <option value="T3">T3</option>
                  <option value="T4">T4</option>
                </select>
              </div>
            </div>
            <!-- <div class="row">
              <div class="col-3">
                <label class="mt-4">Collection</label>
                <input class="form-control" type="text" value="Summer" />
              </div>
              <div class="col-3">
                <label class="mt-4">Price</label>
                <input class="form-control" type="text" value="$90" />
              </div>
              <div class="col-3">
                <label class="mt-4">Quantity</label>
                <input class="form-control" type="number" value="50" />
              </div>
            </div> -->
              <div class="row">
                <div class="col-12 col-sm-6">
                  <br>
                  <label>Description</label>
                  <input type="text" 
                  class="multisteps-form__input form-control "
                  placeholder="Ecrire la description de votre produit ici!"
                  style="height: 115px;"
                  v-model="prod.description.EN"
                  />
                </div>
                <div class="col-sm-6">
                  <label class="mt-4">Category</label>
                  <select
                    id="choices-category-edit"
                    class="form-control"
                    name="choices-category"
                    v-model="prod.category"
                  >
                    <option value="Furniture" >Furniture</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Others">Others</option>
                  </select>
                  <!-- <label>Color</label>
                  <select
                    id="choices-color-edit"
                    class="form-control"
                    name="choices-color"
                  >
                    <option value="Choice 1" selected>Black</option>
                    <option value="Choice 2">White</option>
                    <option value="Choice 3">Blue</option>
                    <option value="Choice 4">Orange</option>
                    <option value="Choice 5">Green</option>
                  </select> -->
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <h5 class="font-weight-bolder">Socials</h5>
            <label>Shoppify Handle</label>
            <input class="form-control" type="text" value="@argon" />
            <label class="mt-4">Facebook Account</label>
            <input class="form-control" type="text" value="https://" />
            <label class="mt-4">Instagram Account</label>
            <input class="form-control" type="text" value="https://" />
          </div>
        </div>
      </div>
      <!-- <div class="mt-4 col-sm-8 mt-sm-0">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <h5 class="font-weight-bolder">Pricing</h5>
                <div class="col-3">
                  <label>Price</label>
                  <input class="form-control" type="number" value="99.00" />
                </div>
                <div class="col-4">
                  <label>Currency</label>
                  <select
                    id="choices-currency-edit"
                    class="form-control"
                    name="choices-sizes"
                  >
                    <option value="Choice 1" selected>USD</option>
                    <option value="Choice 2">EUR</option>
                    <option value="Choice 3">GBP</option>
                    <option value="Choice 4">CNY</option>
                    <option value="Choice 5">INR</option>
                    <option value="Choice 6">BTC</option>
                  </select>
                </div>
                <div class="col-5">
                  <label>SKU</label>
                  <input class="form-control" type="text" value="71283476591" />
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <label class="mt-4">Tags</label>
                  <select
                    id="choices-tags-edit"
                    class="form-control"
                    name="choices-tags"
                    multiple
                  >
                    <option value="Choice 1" selected>In Stock</option>
                    <option value="Choice 2">Out of Stock</option>
                    <option value="Choice 3">Sale</option>
                    <option value="Choice 4">Black Friday</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div> -->
    </div>
  </div>
</template>

<script>
import Quill from "quill";
/* import Choices from "choices.js"; */

export default {
  name: "EditProduct",
 data() {
    return {
      prod :  {
  "productName":  {
     "EN": this.$route.params.productName,
    "FR": "fr",
    "AR": "ar" 
  },
  "description":  {
    "EN": this.$route.params.description,
    "FR": "fr",
    "AR": "ar"
  },
  "itemImage": "https://firebasestorage.googleapis.com/v0/b/dopawinapi.appspot.com/o/petit-dej.png?alt=media",
  "category": this.$route.params.category,
  "idPartner": "65ce1b13f7da5b1fc0987383",
  "productTier": "T1"
},
    };
  },
  methods: {
    save() {
      const id= this.$route.params.id;
      console.log("id in edition:", id);
      this.$store.dispatch('prodNS/updateProd', {id ,prodPU : this.prod})
    },
  },
  mounted() {
    if (document.getElementById("edit-description-edit")) {
      new Quill("#edit-description-edit", {
        theme: "snow", // Specify theme in configuration
      });
    }
    /* this.getChoices("choices-category-edit");
    this.getChoices("choices-color-edit");
    this.getChoices("choices-currency-edit"); */

    /* if (document.getElementById("choices-tags-edit")) {
      var tags = document.getElementById("choices-tags-edit");
      const examples = new Choices(tags, {
        removeItemButton: true,
        allowHTML: true,
      });

      examples.setChoices(
        [
          {
            value: "One",
            label: "Expired",
            disabled: true,
          },
          {
            value: "Two",
            label: "Out of Stock",
            selected: true,
          },
        ],
        "value",
        "label",
        false
      );
    } */
  },
  /* methods: {
    getChoices(id) {
      if (document.getElementById(id)) {
        var element = document.getElementById(id);
        return new Choices(element, {
          searchEnabled: false,
          allowHTML: true,
        });
      }
    },
  }, */
};
</script>
