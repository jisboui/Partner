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
  <main class="main-content mt-0">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div
              class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto"
            >
              <div class="card card-plain">
                <div class="card-header pb-0 text-left">
                  <h4 class="font-weight-bolder">Sign Up</h4>
                  <p class="mb-0">Enter your email and password to register</p>
                </div>
                <div class="card-body pb-3">
                  <form role="form">
                    <label>Name</label>
                    <argon-input
                      id="name"
                      type="text"
                      placeholder="Name"
                      aria-label="Name"
                    />
                    <label>Email</label>
                    <argon-input
                      id="email"
                      type="email"
                      placeholder="Email"
                      aria-label="Email"
                    />
                    <label>Password</label>
                    <argon-input
                      id="password"
                      type="password"
                      placeholder="Password"
                      aria-label="Password"
                    />
                    <argon-checkbox>
                      <label
                        class="form-check-label"
                        for="flexCheckDefault"
                        checked
                      >
                        I agree the
                        <a
                          href="../../../pages/privacy.html"
                          class="text-dark font-weight-bolder"
                          >Terms and Conditions</a
                        >
                      </label>
                    </argon-checkbox>
                    <div class="text-center">
                      <argon-button
                        color="success"
                        variant="gradient"
                        full-width
                        class="mt-4 mb-0"
                        >Sign up</argon-button
                      >
                    </div>
                  </form>
                </div>
                <div class="card-footer text-center pt-0 px-sm-4 px-1">
                  <p class="mb-4 mx-auto">
                    Already have an account?
                    <router-link
                      :to="{ name: 'Signin Illustration' }"
                      class="text-success font-weight-bolder"
                    >
                      Sign in
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column"
            >
              <div
                class="position-relative bg-gradient-success h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                :style="{
    backgroundImage: 'url(' + require('@/assets/img/section-1.png') + ')',
    backgroundSize: 'inherit'
  }"
              >
                <span class="mask bg-success opacity-4"></span>
                <h4
                  class="mt-5 text-white font-weight-bolder position-relative"
                >
                  Dopawin
                </h4>
                <p class="text-white position-relative">
                  It's Fun, Easy and for Everyone! So Join Dopawin Today and Start Winning!
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
import Navbar from "@/examples/PageLayout/Navbar.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
import ArgonButton from "@/components/ArgonButton.vue";
const body = document.getElementsByTagName("body")[0];
import { mapMutations } from "vuex";

export default {
  name: "SigninIllustration",
  components: {
    Navbar,
    ArgonInput,
    ArgonCheckbox,
    ArgonButton,
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.toggleDefaultLayout();
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.toggleDefaultLayout();
    body.classList.add("bg-gray-100");
  },
  methods: {
    ...mapMutations(["toggleDefaultLayout"]),
  },
};
</script>
