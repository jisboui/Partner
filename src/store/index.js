import { createStore } from "vuex";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";

import loginModule from './modules/login.module';
import gamesModule from './modules/games.module';
import dvModule from './modules/dv.module';
import prodModule from './modules/prod.module';
import adModule from './modules/ad.module';
import langModule from './modules/lang.module';
import fileUpload from './modules/fileUpload.module';
import historicModule from './modules/historic.module';
import requestModule from './modules/request.module';

export default createStore({
  state: {
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    isRTL: false,
    color: "",
    sidebarType: "bg-white",
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: "default",
    bootstrap,
  },
  modules: {
    loginNS: loginModule,
    gameNS: gamesModule,
    dvNS: dvModule,
    prodNS : prodModule,
    adNS : adModule,
    langNS : langModule,
    fileUploadNS : fileUpload,
    historicNS : historicModule,
    requestNS : requestModule,
  },
  mutations: {
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state) {
      const sidenav_show = document.querySelector("#app");

      if (sidenav_show.classList.contains("g-sidenav-show") && sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.add("g-sidenav-pinned");
        sidenav_show.classList.remove("g-sidenav-hidden");
        state.isPinned = true;
      } else if (sidenav_show.classList.contains("g-sidenav-show") && sidenav_show.classList.contains("g-sidenav-pinned")) {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      } else if (sidenav_show.classList.contains("g-sidenav-show") && window.innerWidth < 1200 ) {
        sidenav_show.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-hidden");
        state.isPinned = true;
      }
    },
    setSidebarType(state, payload) {
      state.sidebarType = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
    toggleDefaultLayout(state) {
      state.showNavbar = !state.showNavbar;
      state.showSidenav = !state.showSidenav;
      state.showFooter = !state.showFooter;
    },
  },
  actions: {
    toggleSidebarColor({ commit }, payload) {
      commit("setSidebarType", payload);
    },
  },
  getters: {},
});
