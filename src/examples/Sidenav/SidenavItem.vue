<template>
  <li class="nav-item">
    <router-link class="nav-link" :to="to">
      <slot name="icon"></slot>  <!-- to make the icon possible to be passed as a slot in the parent component -->
      <span class="sidenav-mini-icon"> {{ miniIcon }} </span>
      <span class="sidenav-normal"> {{ text }} </span>
    </router-link>
  </li>
</template>
<script>
  export default {
    name: "SidenavItem",
    props: {
      to: {
        type: [Object, String],
        required: true,
      },
      miniIcon: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  };
</script>
