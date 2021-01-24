const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
      fullName: "",
    };
  },
  watch: {
    name(value) {
      if (value === "") {
        this.fullName = "";
      } else {
        this.fullName = vlaue + " " + "Khan";
      }
    },
  },
  computed: {
    // fullName() {
    //   console.log('rendring...');
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "Khan";
    // },
  },
  methods: {
    outputFullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Khan";
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      // this is built in javaScript function for doing that kind of things
      // vue provide event modifier
      // event.preventDefault();
      alert("form submitted!");
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
