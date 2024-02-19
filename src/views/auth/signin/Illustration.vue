<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
          is-blur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
          btn-background="bg-gradient-success"
          :dark-mode="true"
        />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div
              class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0"
            >
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Sign In</h4>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form role="form"   @submit.prevent="loginclick">
                    <div class="mb-3">
                      <argon-input
                        id="email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        size="lg"
                        :value="user.email"
                        @input="user.email = $event.target.value"
                      />
                    </div>
                    <div class="mb-3">
                      <argon-input
                        id="password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        size="lg"
                        :value="user.password"
                        @input="user.password = $event.target.value"
                      />
                    </div>
                    <!-- <argon-switch id="rememberMe" name="rememberMe">
                      Remember me
                    </argon-switch> -->
                    <div class="text-center">
                      <argon-button
                        class="mt-4"
                        variant="gradient"
                        color="success"
                        full-width
                        size="lg"
                       type="submit"
                        >Sign in</argon-button
                      >
                      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
                    </div>
                  </form>
                </div>
                <!-- <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Don't have an account?
                    <router-link
                      :to="{ name: 'Signup Illustration' }"
                      class="text-success text-gradient font-weight-bold"
                      >Sign up</router-link
                    >
                  </p>
                </div> -->
              </div>
            </div>
            <div
              class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column"
            >
              <div
                class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                :style="{
                  backgroundImage: 'url(' + require('@/assets/img/our-partner.png') + ')',
                  backgroundSize: 'cover'
                }"
              >
                <span class="mask bg-gradient-success opacity-6"></span>

                <h4
                  class="mt-5 text-white font-weight-bolder position-relative"
                >
                  Dopawin
                </h4>
                <p class="text-white position-relative">
                  The Platform That Lets You Win Amazing Products From Top Brands!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapMutations } from "vuex";
import Navbar from "@/examples/PageLayout/Navbar.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";

const body = document.getElementsByTagName("body")[0];

export default {
  name: "SigninIllustration",
  components: {
    Navbar,
    ArgonInput,
    ArgonButton,
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
        errorMessage: "",
      }
    }
  },
 async created() {
    this.$store.state.hideConfigButton = true;
    this.toggleDefaultLayout();
    body.classList.remove("bg-gray-100");
    
   /*  const isAuthenticated = localStorage.getItem("isAuthenticated");
    console.log("isAuthenticated = ",isAuthenticated); */
    },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.toggleDefaultLayout();
    body.classList.add("bg-gray-100");
  },
  methods: {
    /* ...mapState("loginNS", ["isAuthenticated"]), */
    ...mapMutations(["toggleDefaultLayout"]),
    /* ...mapActions("loginNS", ["login"]), */ // only needed to when using : await this.login(this.user);
    async loginclick() {
      try {
        await this.$store.dispatch("loginNS/login", this.user); // or use : await this.login(this.user);
        this.navigateToDashboard();
      } catch (error) {
        console.error(error);
        this.errorMessage = "Email or password are wrong, please try again!";
        this.$forceUpdate();
      }
    },
    navigateToDashboard() {
      this.$router.push({ name: 'Default' });
    },
  },
};
</script>


