const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "monis",
          name: "Mohammad Monis",
          phone: "022-4451-455",
          email: "monis@localhost.com",
        },
        {
          id: "mohib",
          name: "Mohib Arshi",
          phone: "022-4901-479",
          email: "mohib@localhost.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
    <li v-for="friend in friends" :key="friend.id">
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">
      {{detailsAreVisibile ? 'Hide Details' : 'Show Details'}}
    </button>
    <ul v-if="detailsAreVisibile">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>
    `,
  data() {
    return {
      detailsAreVisibile: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisibile = !this.detailsAreVisibile;
    },
  },
});

app.mount("#app");
