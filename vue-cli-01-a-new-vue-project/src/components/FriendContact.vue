<template>
  <li>
    <h2>{{ name }} {{ isFavorit ? "(Favorit)" : "" }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorit">
      Toggle Favorit
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone Number:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    isFavorit: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["toggle-favorit", "delete"],
  data() {
    return {
      detailsAreVisible: false,
    };
  },

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorit() {
      this.$emit("toggle-favorit", this.id);
    },
  },
};
</script>
