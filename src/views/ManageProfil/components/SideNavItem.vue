<template>
  <div id="profile" class="card card-body mt-4">
    <div class="row justify-content-center align-items-center">
      <div class="col-sm-auto col-4">
        <argon-avatar
          :img="img"
          alt="team-3"
          size="xl"
          shadow="sm"
          border-radius="lg"
        />
      </div>
      <div class="row justify-content-center align-items-center">
        <div
          class="h-100 d-flex flex-column justify-content-center align-items-center"
        >
          <h5 class="mb-1 font-weight-bolder text-center">Artfin</h5>
          <p class="mb-0 font-weight-bold text-sm text-center">Parfum brand</p>
        </div>
        <div class="mt-4 col mt-md-0">
          <profile-info-card
            title="Profile Information"
            description="Where decisions are scentsational. Opt for the fragrance that paints your moments with aromatic brilliance. In the world of Artfin, the choice is the essence of luxury."
            :info="{
              mobile: '+216 35 234 123',
              email: 'artfin@mail.com',
              location: 'Tunis',
            }"
            :social="[
              {
                link: 'https://www.facebook.com/dopawinapp',
                icon: 'fab fa-facebook fa-lg',
              },
              {
                link: 'https://twitter.com/Dopawin_App',
                icon: 'fab fa-twitter fa-lg',
              },
              {
                link: 'https://www.instagram.com/dopawin_/',
                icon: 'fab fa-instagram fa-lg',
              },
            ]"
            :action="{
              route: '/manageprofil/manage-profil#basic-info',
              tooltip: 'Edit Profile',
            }"
          />
        </div>
      </div>
      <!-- <div class="col-sm-auto ms-sm-auto mt-sm-0 mt-3 d-flex">
        <label class="form-check-label mb-0 me-2">
          <small id="profileVisibility">Switch to invisible</small>
        </label>
        <argon-switch
          id="switch-invisible"
          name="Switch to Invisible"
          checked
        />
      </div> -->
    </div>
  </div>
  <div id="basic-info" class="card mt-4">
    <div class="card-header">
      <h5>Info de base</h5>
    </div>
    <div class="card-body pt-0">
      <div class="row">
        <div class="col-6">
          <label class="form-label">Nom de l'entreprise</label>
          <argon-input id="firstname" type="text" placeholder="Dopawin" />
        </div>
        <div class="col-6">
          <label class="form-label mt-2">Votre emplacement</label>
          <argon-input id="location" type="text" placeholder="Tunis" />
        </div>
        <!-- <div class="col-6">
          <label class="form-label">Last Name</label>
          <argon-input id="lastname" type="text" placeholder="Thompson" />
        </div> -->
      </div>
      <div class="row">
        <!-- <div class="col-sm-4 col-6">
          <label class="form-label mt-2">I'm</label>
          <select
            id="choices-gender"
            class="form-control"
            name="choices-gender"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div> -->
        <!-- <div class="col-sm-8">
          <div class="row">
            <div class="col-sm-5 col-5">
              <label class="form-label mt-2">Date de fondation</label>
              <select
                id="choices-month"
                class="form-control"
                name="choices-month"
              ></select>
            </div>
            <div class="col-sm-4 col-3">
              <label class="form-label mt-2">&nbsp;</label>
              <select
                id="choices-day"
                class="form-control"
                name="choices-day"
              ></select>
            </div>
            <div class="col-sm-3 col-4">
              <label class="form-label mt-2">&nbsp;</label>
              <select
                id="choices-year"
                class="form-control"
                name="choices-year"
              ></select>
            </div>
          </div>
        </div> -->
      </div>
      <!-- <div class="row">
        <div class="col-6">
          <label class="form-label mt-2">Email</label>
          <argon-input
            id="email"
            type="email"
            placeholder="example@email.com"
          />
        </div>
        <div class="col-6">
          <label class="form-label mt-2">Confirmation Email</label>
          <argon-input
            id="confirm-email"
            type="email"
            placeholder="example@email.com"
          />
        </div>
      </div> -->
      <div class="row">
        
        <div class="col-6">
          <label class="form-label mt-2">Numéro de téléphone</label>
          <argon-input id="phone" type="text" placeholder="+216 35 765 439" />
        </div>
        <div class="col-6">
          <label class="form-label mt-2">Votre site web</label>
          <argon-input
            id="location"
            type="text"
            placeholder="https://www.dopawin.tn/"
          />
        </div>
      </div>
      <div class="row">
        
          <!-- <div class="col-md-6 align-self-center">
            <label class="form-label mt-2">Langue</label>
            <select
              id="choices-language"
              class="form-control"
              name="choices-language"
            >
              <option value="French">Français</option>
              <option value="English">English</option>
              <option value="Spanish">العربية</option>
            </select>
          </div> -->
        <div class="col-6">
          <label class="form-label mt-2">Réseaux sociaux</label>
          <argon-input
            id="phone"
            type="text"
            placeholder="https://www.facebook.com/dopawinapp"
          />
          <label class="form-label mt-2"></label>
          <argon-input
            id="phone"
            type="text"
            placeholder="https://www.instagram.com/dopawin_/"
          />
          <label class="form-label mt-2"></label>
          <argon-input
            id="phone"
            type="text"
            placeholder="https://twitter.com/Dopawin_App"
          />
        </div>
      </div>
      <div class="row">
        <!-- <div class="col-md-6">
          <label class="form-label mt-2">Skills</label>
          <input
            id="choices-skills"
            class="form-control"
            type="text"
            value="vuejs, angular, react"
            placeholder="Enter something"
            onfocus="focused(this)"
            onfocusout="defocused(this)"
          />
        </div> -->
      </div>
    </div>
  </div>
  <div id="password" class="card mt-4">
    <div class="card-header">
      <h5>Changer de mot de passe</h5>
    </div>
    <div class="card-body pt-0">
      <label class="form-label">Mot de passe actuel</label>
      <argon-input
        id="password"
        type="password"
        placeholder="Current Password"
      />
      <label class="form-label">Nouveau mot de passe</label>
      <argon-input
        id="new-password"
        type="password"
        placeholder="New Password"
      />
      <label class="form-label">Confirmer le nouveau mot de passe</label>
      <argon-input
        id="confirm-password"
        type="password"
        placeholder="Confirm password"
      />
      <h5 class="mt-5">Exigences de mot de passe</h5>
      <p class="text-muted mb-2">
        Veuillez suivre ce guide pour un mot de passe fort:
      </p>
      <ul class="text-muted ps-4 mb-0 float-start">
        <li>
          <span class="text-sm">Un caractère spécial</span>
        </li>
        <li>
          <span class="text-sm">6 caractères minimum</span>
        </li>
        <li>
          <span class="text-sm">Un numéro (2 sont recommandés)</span>
        </li>
        <li>
          <span class="text-sm">Changez-le souvent</span>
        </li>
      </ul>
      <argon-button
        class="float-end mt-6 mb-0"
        color="dark"
        variant="gradient"
        size="sm"
        >Mettre à jour le mot de passe</argon-button
      >
    </div>
  </div>
  <div id="2fa" class="card mt-4">
    <div class="card-header d-flex">
      <h5 class="mb-0">Choisir mon abonnement</h5>
      <argon-badge color="success" class="ms-auto">Abonnement actuel : Standard</argon-badge>
    </div>
    <div class="card-body">
      <div class="d-flex">
        <p class="my-auto">Standard</p>
        <p class="text-secondary text-sm ms-auto my-auto me-3">
          Vous pouvez juste créer une campagne
        </p>
        <argon-button
          color="dark"
          variant="outline"
          size="sm"
          class="mb-0"
          type="button"
          >Choisir</argon-button
        >
      </div>
      <hr class="horizontal dark" />
      <div class="d-flex">
        <p class="my-auto">Pro</p>
        <p class="text-secondary text-sm ms-auto my-auto me-3">Vous pouvez ajouter les éléments graphiques ainsi que vos propres video ads</p>
        <argon-button
          color="dark"
          variant="outline"
          size="sm"
          class="mb-0"
          type="button"
          >Choisir</argon-button
        >
      </div>
      <hr class="horizontal dark" />
      <div class="d-flex">
        <p class="my-auto">Ultimate</p>
        <p class="text-secondary text-sm ms-auto my-auto me-3">
          vous pouvez ...
        </p>
        <argon-button
          color="dark"
          variant="outline"
          size="sm"
          class="mb-0"
          type="button"
          >Choisir</argon-button
        >
      </div>
    </div>
  </div>
  <!-- <div id="accounts" class="card mt-4">
    <div class="card-header">
      <h5>Accounts</h5>
      <p class="text-sm">
        Here you can setup and manage your integration settings.
      </p>
    </div>
    <div class="card-body pt-0">
      <div class="d-flex">
        <argon-avatar class="width-48-px" :img="img1" alt="logo_slack" />
        <div class="my-auto ms-3">
          <div class="h-100">
            <h5 class="mb-0">Slack</h5>
            <a class="text-sm text-body" href="javascript:;">
              Show less
              <i class="fas fa-chevron-up text-xs ms-1" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <p class="text-sm text-secondary ms-auto me-3 my-auto">Enabled</p>
        <div class="my-auto">
          <argon-switch id="enable-slack" name="Enabled" checked />
        </div>
      </div>
      <div class="ps-5 pt-3 ms-3">
        <p class="mb-0 text-sm">
          You haven't added your Slack yet or you aren't authorized. Please add
          our Slack Bot to your account by clicking on
          <a href="javascript">here</a>. When you've added the bot, send your
          verification code that you have received.
        </p>
        <div
          class="d-sm-flex align-items-center bg-gray-100 border-radius-lg p-2 my-4"
        >
          <p class="text-sm font-weight-bold my-auto ps-sm-2">
            Verification Code
          </p>
          <argon-input
            id="verification-code"
            type="text"
            value="1172913"
            class="my-auto w-20 ms-sm-auto"
          />
        </div>
        <div class="d-sm-flex bg-gray-100 border-radius-lg p-2 my-4">
          <p class="text-sm font-weight-bold my-auto ps-sm-2">
            Connected account
          </p>
          <h6 class="text-sm ms-auto me-3 my-auto">hello@creative-tim.com</h6>
          <argon-button
            color="danger"
            variant="gradient"
            size="sm"
            class="my-sm-auto mt-2 mb-0"
            type="button"
            name="button"
            >Delete</argon-button
          >
        </div>
      </div>
      <hr class="horizontal dark" />
      <div class="d-flex">
        <argon-avatar class="width-48-px" :img="img2" alt="logo_spotify" />
        <div class="my-auto ms-3">
          <div class="h-100">
            <h5 class="mb-0">Spotify</h5>
            <p class="mb-0 text-sm">Music</p>
          </div>
        </div>
        <p class="text-sm text-secondary ms-auto me-3 my-auto">Enabled</p>
        <div class="my-auto">
          <argon-switch id="enable-spotify" name="Spotify" checked />
        </div>
      </div>
      <hr class="horizontal dark" />
      <div class="d-flex">
        <argon-avatar class="width-48-px" :img="img3" alt="logo_atlassian" />
        <div class="my-auto ms-3">
          <div class="h-100">
            <h5 class="mb-0">Atlassian</h5>
            <p class="mb-0 text-sm">Payment vendor</p>
          </div>
        </div>
        <p class="text-sm text-secondary ms-auto me-3 my-auto">Enabled</p>
        <div class="my-auto">
          <argon-switch id="enable-atlassian" name="Atlassian" checked />
        </div>
      </div>
      <hr class="horizontal dark" />
      <div class="d-flex">
        <argon-avatar class="width-48-px" :img="img4" alt="logo_asana" />
        <div class="my-auto ms-3">
          <div class="h-100">
            <h5 class="mb-0">Asana</h5>
            <p class="mb-0 text-sm">Organize your team</p>
          </div>
        </div>
        <div class="my-auto ms-auto">
          <argon-switch id="enable-asana" name="Asana" />
        </div>
      </div>
    </div>
  </div> -->
  <!-- <div id="notifications" class="card mt-4">
    <div class="card-header">
      <h5>Notifications</h5>
      <p class="text-sm">
        Choose how you receive notifications. These notification settings apply
        to the things you’re watching.
      </p>
    </div>
    <div class="card-body pt-0">
      <div class="table-responsive">
        <table class="table mb-0">
          <thead>
            <tr>
              <th class="ps-1" colspan="4">
                <p class="mb-0">Activity</p>
              </th>
              <th class="text-center">
                <p class="mb-0">Email</p>
              </th>
              <th class="text-center">
                <p class="mb-0">Push</p>
              </th>
              <th class="text-center">
                <p class="mb-0">SMS</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="ps-1" colspan="4">
                <div class="my-auto">
                  <span class="text-dark d-block text-sm">Mentions</span>
                  <span class="text-xs font-weight-normal"
                    >Notify when another user mentions you in a comment</span
                  >
                </div>
              </td>
              <td>
                <argon-switch
                  id="notify-email"
                  name="Email"
                  class="form-check form-switch mb-0 d-flex align-items-center justify-content-center"
                  checked
                />
              </td>
              <td>
                <argon-switch
                  id="notify-push"
                  name="Push"
                  class="form-check form-switch mb-0 d-flex align-items-center justify-content-center"
                />
              </td>
              <td>
                <argon-switch
                  id="notify-sms"
                  name="Sms"
                  class="form-check form-switch mb-0 d-flex align-items-center justify-content-center"
                />
              </td>
            </tr>
            <tr>
              <td class="ps-1" colspan="4">
                <div class="my-auto">
                  <span class="text-dark d-block text-sm">Comments</span>
                  <span class="text-xs font-weight-normal"
                    >Notify when another user comments your item.</span
                  >
                </div>
              </td>
              <td>
                <argon-switch
                  id="notify-comment-email"
                  name="Email"
                  class="form-check form-switch mb-0 d-flex align-items-center justify-content-center"
                  checked
                />
              </td>
              <td>
                <argon-switch
                  id="notify-comment-push"
                  name="Push"
                  class="form-check form-switch mb-0 d-flex align-items-center justify-content-center"
                  checked
                />
              </td>
              <td>
                <argon-switch
                  id="notify-comment-sms"
                  name="SMS"
                  class="form-check form-switch mb-0 d-flex align-items-center justify-content-center"
                />
              </td>
            </tr>
            <tr>
              <td class="ps-1" colspan="4">
                <div class="my-auto">
                  <span class="text-dark d-block text-sm">Follows</span>
                  <span class="text-xs font-weight-normal"
                    >Notify when another user follows you.</span
                  >
                </div>
              </td>
              <td>
                <argon-switch
                  id="notify-follow-email"
                  name="Email"
                  class="mb-0 d-flex align-items-center justify-content-center"
                  checked
                />
              </td>
              <td>
                <argon-switch
                  id="notify-follow-push"
                  name="Push"
                  class="mb-0 d-flex align-items-center justify-content-center"
                  checked
                />
              </td>
              <td>
                <argon-switch
                  id="notify-follow-sms"
                  name="SMS"
                  class="mb-0 d-flex align-items-center justify-content-center"
                  checked
                />
              </td>
            </tr>
            <tr>
              <td class="ps-1" colspan="4">
                <div class="my-auto">
                  <p class="text-sm mb-0">Log in from a new device</p>
                </div>
              </td>
              <td>
                <argon-switch
                  id="notify-login-email"
                  name="Email"
                  class="mb-0 d-flex align-items-center justify-content-center"
                  checked
                />
              </td>
              <td>
                <argon-switch
                  id="notify-login-push"
                  name="Push"
                  class="mb-0 d-flex align-items-center justify-content-center"
                  checked
                />
              </td>
              <td>
                <argon-switch
                  id="notify-login-sms"
                  name="SMS"
                  class="mb-0 d-flex align-items-center justify-content-center"
                  checked
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div> -->
  <!-- <div id="sessions" class="card mt-4">
    <div class="card-header pb-3">
      <h5>Sessions</h5>
      <p class="text-sm">
        This is a list of devices that have logged into your account. Remove
        those that you do not recognize.
      </p>
    </div>
    <div class="card-body pt-0">
      <div class="d-flex align-items-center">
        <div class="text-center w-5">
          <i class="fas fa-desktop text-lg opacity-6"></i>
        </div>
        <div class="my-auto ms-3">
          <div class="h-100">
            <p class="text-sm mb-1">Bucharest 68.133.163.201</p>
            <p class="mb-0 text-xs">Your current session</p>
          </div>
        </div>
        <argon-badge color="success" size="sm" class="my-auto ms-auto me-3"
          >Active</argon-badge
        >
        <p class="text-secondary text-sm my-auto me-3">EU</p>
        <a
          href="javascript:;"
          class="text-primary text-sm icon-move-right my-auto"
        >
          See more
          <i class="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
        </a>
      </div>
      <hr class="horizontal dark" />
      <div class="d-flex align-items-center">
        <div class="text-center w-5">
          <i class="fas fa-desktop text-lg opacity-6"></i>
        </div>
        <p class="my-auto ms-3">Chrome on macOS</p>
        <p class="text-secondary text-sm ms-auto my-auto me-3">US</p>
        <a
          href="javascript:;"
          class="text-primary text-sm icon-move-right my-auto"
        >
          See more
          <i class="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
        </a>
      </div>
      <hr class="horizontal dark" />
      <div class="d-flex align-items-center">
        <div class="text-center w-5">
          <i class="fas fa-mobile text-lg opacity-6"></i>
        </div>
        <p class="my-auto ms-3">Safari on iPhone</p>
        <p class="text-secondary text-sm ms-auto my-auto me-3">US</p>
        <a
          href="javascript:;"
          class="text-primary text-sm icon-move-right my-auto"
        >
          See more
          <i class="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div> -->
 <!--  <div id="delete" class="card mt-4">
    <div class="card-header">
      <h5>Delete Account</h5>
      <p class="text-sm mb-0">
        Once you delete your account, there is no going back. Please be certain.
      </p>
    </div>
    <div class="card-body d-sm-flex pt-0">
      <div class="d-flex align-items-center mb-sm-0 mb-4">
        <div>
          <argon-switch id="delete-account" name="Delete Account" />
        </div>
        <div class="ms-2">
          <span class="text-dark font-weight-bold d-block text-sm"
            >Confirm</span
          >
          <span class="text-xs d-block">I want to delete my account.</span>
        </div>
      </div>
      <argon-button
        color="secondary"
        variant="outline"
        class="mb-0 ms-auto"
        type="button"
        name="button"
        >Deactivate</argon-button
      >
      <argon-button
        color="danger"
        variant="gradient"
        class="mb-0 ms-2"
        type="button"
        name="button"
        >Delete Account</argon-button
      >
    </div>
  </div> -->
</template>

<script>
import * as Choices from "choices.js";
import ArgonButton from "@/components/ArgonButton.vue";
/* import ArgonSwitch from "@/components/ArgonSwitch.vue"; */
import ArgonBadge from "@/components/ArgonBadge.vue";
import ArgonAvatar from "@/components/ArgonAvatar.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import img from "../../../assets/img/team-3.jpg";
import img1 from "../../../assets/img/small-logos/logo-slack.svg";
import img2 from "../../../assets/img/small-logos/logo-spotify.svg";
import img3 from "../../../assets/img/small-logos/logo-atlassian.svg";
import img4 from "../../../assets/img/small-logos/logo-asana.svg";
import ProfileInfoCard from "@/views/pages/profile/components/ProfileInfoCard.vue";

export default {
  name: "SideNavItem",
  components: {
    ProfileInfoCard,
    ArgonButton,
  /*   ArgonSwitch, */
    ArgonBadge,
    ArgonAvatar,
    ArgonInput,
  },
  data() {
    return {
      img,
      img1,
      img2,
      img3,
      img4,
    };
  },
  mounted() {
    if (document.getElementById("choices-gender")) {
      var gender = document.getElementById("choices-gender");
      new Choices(gender, { allowHTML: true });
    }

    if (document.getElementById("choices-language")) {
      var language = document.getElementById("choices-language");
      new Choices(language, { allowHTML: true });
    }

    if (document.getElementById("choices-month")) {
      var month = document.getElementById("choices-month");
      setTimeout(function () {
        new Choices(month, { allowHTML: true });
      }, 1);

      // eslint-disable-next-line no-unused-vars
      var d = new Date();
      var monthArray = new Array();
      monthArray[0] = "January";
      monthArray[1] = "February";
      monthArray[2] = "March";
      monthArray[3] = "April";
      monthArray[4] = "May";
      monthArray[5] = "June";
      monthArray[6] = "July";
      monthArray[7] = "August";
      monthArray[8] = "September";
      monthArray[9] = "October";
      monthArray[10] = "November";
      monthArray[11] = "December";
      for (let m = 0; m <= 11; m++) {
        var optn = document.createElement("OPTION");
        optn.text = monthArray[m];
        // server side month start from one\
        optn.value = m + 1;
        // if june selected
        if (m == 1) {
          optn.selected = true;
        }
        month.options.add(optn);
      }
    }

    if (document.getElementById("choices-day")) {
      var day = document.getElementById("choices-day");
      setTimeout(function () {
        new Choices(day, { allowHTML: true });
      }, 1);

      for (let y = 1; y <= 31; y++) {
        var optn1 = document.createElement("OPTION");
        optn1.text = y;
        optn1.value = y;

        if (y == 1) {
          optn1.selected = true;
        }

        day.options.add(optn1);
      }
    }

    if (document.getElementById("choices-year")) {
      var year = document.getElementById("choices-year");
      setTimeout(function () {
        new Choices(year, { allowHTML: true });
      }, 1);

      for (let y = 1900; y <= 2024; y++) {
        var optn2 = document.createElement("OPTION");
        optn2.text = y;
        optn2.value = y;

        if (y == 2024) {
          optn.selected = true;
        }

        year.options.add(optn2);
      }
    }

    if (document.getElementById("choices-skills")) {
      var skills = document.getElementById("choices-skills");
      new Choices(skills, {
        delimiter: ",",
        editItems: true,
        maxItemCount: 5,
        removeItemButton: true,
        addItems: true,
        allowHTML: true,
      });
    }
  },
};
</script>
