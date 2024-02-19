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
            <ul class="list-group d-flex flex-row">
              <li
                v-for="(action, index) in actions"
                :key="index"
                class="list-group-item border-0 d-flex p-4 mb-0 bg-white-100 border-radius-lg me-2"
              >
                <div class="ms-">
                  <a
                    class="btn btn-link px-3 mb-0"
                    :class="action.class"
                    @click="handleAction(action)"
                  >
                    <i :class="action.icon + ' me-2'" aria-hidden="true"></i>
                    {{ action.label }}
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
      default: () => [],
      validator: (actions) => {
        return actions.every(action => {
          return Object.prototype.hasOwnProperty.call(action, 'label') && 
                Object.prototype.hasOwnProperty.call(action, 'route');
          });
        },
    },
  },
  data() {
      return {
        showMenu: false,
      };
    },
    methods: {
    handleAction(action) {
      if (action.label === 'Supprimer') {
        this.$emit('delete-card');
      } else {
        action.action();
      }
    },
  },
};
</script>
  