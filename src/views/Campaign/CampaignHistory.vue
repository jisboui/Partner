<template>
  <br />
  <br />
  <div class="card shadow-lg mx-4 card-profile-bottom">
  </div>
  <div class="py-4 container-fluid">
    <section class="py-3">
      <div class="row">
        <div id="currentCampaign" class="text-left col-md-8">
          <h4>Consulter mes campagnes</h4>
          <br>
          <p>Consulter vos campagnes en cours.</p>
        </div>
        <div
          class="mt-4 col-md-4 mt-md-0 ml-auto d-flex justify-content-center"
        >
          <div class="text-center card-body">
            <a href="#beingvalidated">
              <button class="mb-0 btn bg-gradient-success">
                Consulter mes campagnes en cours de validation
              </button>
            </a>
          </div>
          <div class="text-center card-body">
            <a href="#pastCampaign">
              <button class="mb-0 btn bg-gradient-success">
                Consulter mes campagnes précédentes
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-2 row mt-lg-4">
        <div v-if="rooms && rooms.data && rooms.data.roomList.length > 0">
        <div class="mb-4 col-lg-4 col-md-6"  v-for="room in rooms.data.roomList" :key="room.id">
          <complex-project-card
            :logo="room.product.itemImage"
            :title="room.product.productName.EN" 
            :game="room.game.nameGame"
            :date-time="formatDateTime(room.finishDate)"
            terminated="en cours, terminera le"
            :members="room.registerFeeCoin"
            :dropdown="[
              {
                label: 'campagne en cours, aucune option disponible', //mais bizarrement jai api delete et update qui devraient exister que pour campagnes en cours de validation
                route: 'javascript:;',
              },
            ]"
            :actions="[
              { label: 'Supprimer', route: 'javascript:;', class: 'text-danger text-gradient px-3 mb-0', icon: 'far fa-trash-alt' },
              { label: 'Modifier', route: 'edit-campaign', class: 'btn btn-link text-dark px-3 mb-0', icon: 'fas fa-pencil-alt text-dark' , action: () => editCampaign(room.id,room.product.productName.EN, room.game.nameGame, room.finishDate)  },
            ]"
            @delete-cardForValidation="deletecardForValidation(room.id)"
          />
        </div>
      </div>
        <div class="mb-4 col-lg-4 col-md-6">
          <router-link to="/campaign/add-campaign">
            <placeholder-card
              :title="{ text: 'Nouvelle campagne', variant: 'h5' }"
            />
          </router-link>
        </div>
      </div>
    </section>
  </div>

  <div class="py-4 container-fluid">
    <section class="py-3">
      <div class="row">
        <div id="beingvalidated" class="text-left col-md-8">
          <br />
          <p>Consulter les campagnes en cours de validation</p>
        </div>
        <div
          class="mt-4 col-md-4 mt-md-0 ml-auto d-flex justify-content-center"
        >
          <div class="text-center card-body">
            <a href="#pastCampaign">
              <button class="mb-0 btn bg-gradient-success">
                Consulter mes campagnes précédentes
              </button>
            </a>
          </div>
          <div class="text-center card-body">
            <a href="#currentCampaign">
              <button class="mb-0 btn bg-gradient-success">
                Revenir vers mes campagnes en cours
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-2 row mt-lg-4">
          <div v-if="rooms && rooms.data && rooms.data.partnerRequestList.length > 0">
            <div  class="mb-4 col-lg-4 col-md-6" v-for="room in rooms.data.partnerRequestList" :key="room.id">
              <div v-if="room.requestType=='ROOM'"  >
                <ComplexCardForValidation 
                  :logo="room.logo"
                  :title="room.systemDescription"
                  :game="room.partnerDescription"
                  :date-time="room.dateTime"
                  :terminated="room.terminated"
                  :actions="[
              { label: 'Supprimer', route: 'javascript:;', class: 'text-danger text-gradient px-3 mb-0', icon: 'far fa-trash-alt' },
              { label: 'Modifier', route: 'edit-campaign', class: 'btn btn-link text-dark px-3 mb-0', icon: 'fas fa-pencil-alt text-dark' , action: () => editCampaign('Hp Omen', 'HitSoumek', '02.03.22')  },
            ]"
                  @delete-card="deleteCard(room.id)" 
                />
              </div>
            </div>
          </div>
        <div class="mb-4 col-lg-4 col-md-6">
          <router-link to="/campaign/add-campaign">
            <placeholder-card
              :title="{ text: 'Nouvelle campagne', variant: 'h5' }"
            />
          </router-link>
        </div>
      </div>
    </section>
  </div>

  <div class="py container-fluid">
    <section class="py-3">
      <div class="row">
        <div div id="pastCampaign" class="text-left col-md-8">
          <br />
          <p>
            Consulter l'historique et les données de vos campagnes précédentes.
          </p>
        </div>
        <div
          class="mt-4 col-md-4 mt-md-0 ml-auto d-flex justify-content-center"
        >
          <div class="text-center card-body">
            <a href="#beingvalidated">
              <button class="mb-0 btn bg-gradient-success">
                Revenir vers mes campagnes en cours de validation
              </button>
            </a>
          </div>
          <div class="text-center card-body">
            <a href="#currentCampaign">
              <button class="mb-0 btn bg-gradient-success">
                Revenir vers mes campagnes en cours
              </button>
            </a>
          </div>
        </div>
        <div class="mt-4 col-md-4 mt-md-0 ml-auto"></div>
      </div>

      <div class="mt-2 row mt-lg-4">
        <!-- <div class="mb-4 col-lg-4 col-md-6">
          <complex-project-card
            :logo="slackLogo"
            title="Laptop Victus HP"
            game="GoBowi"
            date-time="02.03.22"
            terminated="terminé le"
            :members="[team3, team4, team2, team3, team4]"
            :dropdown="[
              {
                label: 'Comparer',
                route: 'javascript:;',
              },
              
              {
                label: 'plus de données (pro +)',
                route: 'javascript:;',
              },
            ]"
          />
        </div>
        <div class="mb-4 col-lg-4 col-md-6">
          <complex-project-card
            :logo="spotifyLogo"
            title="Msi Gaming Laptop"
            game="DimaWin"
            date-time="22.11.21"
            terminated="terminé le"
            :members="[team4, team3, team2]"
            :dropdown="[
              {
                label: 'Comparer',
                route: 'javascript:;',
              },
              
              {
                label: 'plus de données (pro +)',
                route: 'javascript:;',
              },
            ]"
          />
        </div>
        <div class="mb-4 col-lg-4 col-md-6">
          <complex-project-card
            :logo="xdLogo"
            title="Lenovo Legion"
            game="QuizUp"
            date-time="06.03.20"
            terminated="terminé le"
            :members="[team4, team2, team3, team4]"
            :dropdown="[
              {
                label: 'Comparer',
                route: 'javascript:;',
              },
              
              {
                label: 'plus de données (pro +)',
                route: 'javascript:;',
              },
            ]"
          />
        </div>
        <div class="mb-4 col-lg-4 col-md-6">
          <complex-project-card
            :logo="asanaLogo"
            title="Hp Omen"
            game="HitSoumek"
            date-time="14.03.24"
            terminated="terminé le"
            :members="[team3, team4, team2, team3, team4, team2]"
            :dropdown="[
              {
                label: 'Comparer',
                route: 'javascript:;',
              },
              
              {
                label: 'plus de données (pro +)',
                route: 'javascript:;',
              },
            ]"
          />
        </div>
        <div class="mb-4 col-lg-4 col-md-6">
          <complex-project-card
            :logo="invisionLogo"
            title="Nvidea Geforce"
            game="QuizUp"
            date-time="16.01.22"
            terminated="terminé le"
            :members="[team4, team3, team2, team4]"
            :dropdown="[
              {
                label: 'Comparer',
                route: 'javascript:;',
              },
              
              {
                label: 'plus de données (pro +)',
                route: 'javascript:;',
              },
            ]"
          />
        </div> -->
        <div class="mb-4 col-lg-4 col-md-6">
          <router-link to="/campaign/add-campaign">
            <placeholder-card
              :title="{ text: 'Nouvelle campagne', variant: 'h5' }"
            />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import team4 from "@/assets/img/team-4.jpg";
import team5 from "@/assets/img/team-5.jpg";
import slackLogo from "@/assets/img/small-logos/hp.png";
import invisionLogo from "@/assets/img/small-logos/geforce.jpg";
import spotifyLogo from "@/assets/img/small-logos/msi.jpg";
import xdLogo from "@/assets/img/small-logos/lenovo.jpg";
import asanaLogo from "@/assets/img/small-logos/dell.jpg";

import ComplexProjectCard from "./components/ComplexProjectCard.vue";
import PlaceholderCard from "@/examples/Cards/PlaceholderCard.vue";
/* import setNavPills from "@/assets/js/nav-pills.js"; */
import ComplexCardForValidation from "./components/ComplexCardForValidation.vue";

export default {
  name: "CampaignHistory",
  components: {
    ComplexProjectCard,
    ComplexCardForValidation,
    PlaceholderCard,
  },
  data() {
    return {
      /* cards: [
        {
          logo: spotifyLogo,
          title: 'Msi Gaming Laptop',
          game: 'DimaWin',
          dateTime: '22.11.21',
          terminated: 'en cours de validation, prévu pour débuter le',
          actions: [
            { label: 'Supprimer', route: 'javascript:;', class: 'text-danger text-gradient px-3 mb-0', icon: 'far fa-trash-alt' },
            { label: 'Modifier', route: 'edit-campaign', class: 'btn btn-link text-dark px-3 mb-0', icon: 'fas fa-pencil-alt text-dark', action: () => this.editCampaign('Msi Gaming Laptop', 'DimaWin', '02.03.22') },
          ],
        },
        // Repeat the structure for other cards...
      ], */
      showMenu: false,
      team1,
      team2,
      team3,
      team4,
      team5,
      slackLogo,
      invisionLogo,
      spotifyLogo,
      xdLogo,
      asanaLogo,
    };
  },
  computed: {
    rooms() {
      return this.$store.state.roomNS.room;    
    },
  },
  methods: {
    formatDateTime(dateTimeString) {
      return new Date(dateTimeString).toLocaleString("fr-FR");
    },
    deleteCard(id) {
      this.$store.dispatch("requestNS/deleteRequest", { id })
      .then(() => {
          this.$store.dispatch("roomNS/selectRoom");
        });
    },
    deletecardForValidation(id) {
      this.$store.dispatch("roomNS/deleteroom", { id })
      .then(() => {
          this.$store.dispatch("roomNS/selectRoom");
        });
    },
    editCampaign(id,product, game, dateTime) {
    this.$router.push({ name: 'editCampaign', params: {id, product, 
    game, 
    dateTime } });
  },
    /* callShowSwal() {
      this.$refs.sweetAlertsRef.showSwal("auto-close");
    }, */
  },
  created() {
    this.$store.dispatch('roomNS/selectRoom')
    /* this.$store.dispatch('roomNS/selectRoomCalendar') */
   /*  const id="65e1b1d91fc1e501dbdc4487"
    this.$store.dispatch('roomNS/selectRoomById', {id}) */

  },
  mounted() {
    this.$store.state.isAbsolute = true;
    /* setNavPills(); */
  },
  beforeMount() {
    
    this.$store.state.layout = "custom";
    this.$store.state.showFooter = true;
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
    this.$store.state.layout = "default";
    this.$store.state.showNavbar = true;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = false;
  },
};
</script>
