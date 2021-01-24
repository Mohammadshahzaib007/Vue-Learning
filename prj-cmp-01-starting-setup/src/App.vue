<template>
  <stored-resources :resources="storedResourses"></stored-resources>
</template>

<script>
import StoredResources from './components/StoredResources.vue';

export default {
  components: { StoredResources },
  data() {
    return {
      storedResourses: [
        {
          id: 'official-guide',
          title: 'Official-Guide',
          description: 'Learn Vue from official documentation',
          link: 'https://vue.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn Vue to google...',
          link: 'https://google.com'
        }
      ]
    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
