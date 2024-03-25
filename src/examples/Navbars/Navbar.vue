<template>
  <nav
    id="navbarBlur"
    :class="`${
      !isNavFixed
        ? 'navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none'
        : `navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none position-sticky ${
            darkMode ? 'bg-default' : 'bg-white'
          } left-auto top-2 z-index-sticky`
    } ${isRTL ? 'top-0 position-sticky z-index-sticky' : ''}`"
    v-bind="$attrs"
    data-scroll="true"
  >
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs
        :current-page="currentRouteName"
        :current-directory="currentDirectory"
      />
      <div
        class="sidenav-toggler sidenav-toggler-inner d-xl-block d-none"
        :class="isRTL ? 'me-3' : ''"
      >
        <a
          href="#"
          class="p-0 nav-link text-body"
          @click.prevent="navbarMinimize" 
        >
          <div class="sidenav-toggler-inner">
            <i
              class="sidenav-toggler-line"
              :class="
                isNavFixed && !darkMode ? ' opacity-8 bg-dark' : 'bg-white'
              "
            ></i>
            <i
              class="sidenav-toggler-line"
              :class="
                isNavFixed && !darkMode ? ' opacity-8 bg-dark' : 'bg-white'
              "
            ></i>
            <i
              class="sidenav-toggler-line"
              :class="
                isNavFixed && !darkMode ? ' opacity-8 bg-dark' : 'bg-white'
              "
            ></i>
          </div>
        </a>
      </div>
      <div
        id="navbar"
        class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        :class="isRTL ? 'px-0' : 'me-sm-4'"
      >
        <div
          class="pe-md-3 d-flex align-items-center"
          :class="isRTL ? 'me-md-auto' : 'ms-md-auto'"
        >
        </div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item d-flex align-items-center">
            
              <span v-if="!isLoggedIn" class="d-sm-inline d-none">Tu n'es pas connecté, connecte toi pour continuer à utiliser votre Dashboard</span>
           
              <button class="logout-button" @click="logoutclick" v-if="isLoggedIn"> <i class="fa-solid fa-power-off"></i> Déconnexion</button>
           
          </li>
          <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
            <a
              id="iconNavbarSidenav"
              href="#"
              class="p-0 nav-link text-white"
              @click.prevent="navbarMinimize"
            >
              <div class="sidenav-toggler-inner">
                <i
                  :class="`sidenav-toggler-line ${
                    isNavFixed && !darkMode ? ' opacity-8 bg-dark' : 'bg-white'
                  }`"
                ></i>
                <i
                  :class="`sidenav-toggler-line ${
                    isNavFixed && !darkMode ? ' opacity-8 bg-dark' : 'bg-white'
                  }`"
                ></i>
                <i
                  :class="`sidenav-toggler-line ${
                    isNavFixed && !darkMode ? ' opacity-8 bg-dark' : 'bg-white'
                  }`"
                ></i>
              </div>
            </a>
          </li>
          <li class="px-3 nav-item d-flex align-items-center">
            <a class="p-0 nav-link" @click="toggleConfigurator">
              <i
                :class="`cursor-pointer fa fa-cog fixed-plugin-button-nav ${
                  !isNavFixed || darkMode ? 'text-white' : 'opacity-8 text-dark'
                }`"
              ></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import Breadcrumbs from "../Breadcrumbs.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "Navbar",
  components: {
    Breadcrumbs
  },
  data() {
    return {
      showMenu: false
    };
  },
  computed: {
    isAuthenticated() { // returns the authentication state from the store and is used to conditionally render the logout button by the isLoggedIn method just below
      return this.$store.state.loginNS.isAuthenticated;
    },
    isLoggedIn() {
      return this.isAuthenticated;
    },
    ...mapState(["isRTL", "isNavFixed", "darkMode"]),
    currentRouteName() {
      return this.$route.name;
    },
    currentDirectory() {
      let dir = this.$route.path.split("/")[1];
      return dir.charAt(0).toUpperCase() + dir.slice(1);
    }
  },
  methods: {
    async logoutclick() {
    /* try { */
     /*  await this.$store.dispatch("loginNS/logout", this.$router); */
      this.$store.dispatch("loginNS/logout", this.$router);
    /* } catch (error) {
      console.error(error);
    } */
  },
  created() {
    this.minNav;
  },
  beforeUpdate() {
    /* this.toggleNavigationOnMobile();  */
  },
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),
    ...mapActions(["toggleSidebarColor"]),
    toggleNavigationOnMobile() {
      if (window.innerWidth < 1200) {
        this.navbarMinimize();
      }
    },
  }
};
</script>

<style scoped>
.logout-button {
  background-color: rgb(233, 80, 80);
  color: #ffffff;
  padding: 6px 12px; 
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  outline: none;
}

.logout-button:hover {
  background-color: red;
}

.logout-button:active {
  transform: translateY(1px);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

@media (max-width: 600px) {
  .logout-button {
    padding: 6px; 
    font-size: 10px; 
  }
}
</style>