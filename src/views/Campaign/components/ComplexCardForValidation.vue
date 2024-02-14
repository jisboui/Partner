<template>
    <div class="card">
      <div class="p-3 card-body">
        <div class="d-flex flex-column justify-content-center align-items-center">
          <div class="p-2 avatar avatar-xl bg-gradient-dark border-radius-md">
            <img :src="logo" :alt="title" />
          </div>
          <div class="my-2 ms-3">
                <h6>{{ title }}</h6>
                <!-- <div class="avatar-group">
                    <a
                        v-for="(member, index) of members"
                        :key="index"
                        href="#"
                        class="avatar avatar-xs rounded-circle"
                        data-bs-toggle="tooltip"
                        data-original-title=""
                    >
                        <img alt="Image placeholder" :src="member" />
                    </a>
                </div> -->
          </div>
          <div class="ms-2">
              <ul class="list-group">
                <li
                  v-for="({ action }, index) of actions"
                  :key="index"
                  class="list-group-item border-0 d-flex p-4 mb-0 bg-white-100 border-radius-lg"
                >
                    <div class="ms-auto">
                        <a
                        class="btn btn-link text-danger text-gradient px-3 mb-0"
                        :href="action[0].route"
                        >
                        <i class="far fa-trash-alt me-2" aria-hidden="true"></i>
                        {{ action[0].label }}
                        </a>
                        <a
                        class="btn btn-link text-dark px-3 mb-0"
                        :href="action[1].route"
                        >
                        <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true" ></i>
                        {{ action[1].label }}
                        </a>
                    </div>
                </li>
              </ul>
          </div>
        </div>
        <p class="mt-3 text-sm">
          {{ "Jeu : " + description }}
        </p>
        <hr class="horizontal dark" />
        <div class="row">
          <!-- <div class="col-6">
            <h6 class="mb-0 text-sm">{{ members.length }}</h6>
            <p class="mb-0 text-sm text-secondary font-weight-bold">
              Participants
            </p>
          </div> -->
          <div class="col-6">
            <h6 class="mb-0 text-sm">{{ dateTime }}</h6>
            <p class="mb-0 text-sm text-secondary font-weight-bold">
              {{ terminated }}
            </p>
          </div>
        </div>
      </div>
    </div>
</template>
  
  <script>
  export default {
    name: "ComplexProjectCard",
    props: {
      logo: {
        type: String,
        default: "",
      },
      title: {
        type: String,
        default: "",
      },
      description: {
        type: String,
        default: "",
      },
      dateTime: {
        type: String,
        default: "",
      },
      terminated: {
        type: String,
        default: "",
      },
      /* members: {
        type: Array,
        default: () => [],
      }, */
      actions: {
        type: Array,
        action: {
          type: Array,
          route: String,
          label: String,
        },
      },
    },
    data() {
      return {
        showMenu: false,
      };
    },
  };
  </script>
  