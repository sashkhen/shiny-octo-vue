<template>
  <div id="gallery">
    <h1>Get a Free Chuck Norris Quote!</h1>
    <button v-on:click="getProjects()">Get some projects</button>
<!--     <div v-if="projects[0]">
    </div> -->
  </div>
</template>

<script>
const API_URL = 'http://api.behance.net/v2/users/mr_lucky/projects?client_id=cThQ8I71tjkVrL56Z9MKxTuh0P3yjehV';

export default {
  name: 'gallery',
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    // getProjects() {
    //   this.$http
    //     // .get(API_URL, (data) => {
    //     //   this.projects = data.projects;
    //     // })
    //     // .error(err => console.log(err));
    //     // .get(API_URL).then((response) => { console.log(response); });
    //     .get(API_URL).success((response) => { console.log(response); });
    // },
    getProjects() {
      // GET /someUrl
      this.$http.get(API_URL).then((response) => {
        // get body data
        this.projects = response.projects;
        console.log('succeed', response);
      }, (response) => {
        // error callback
        console.log('failed', response);
      });
    },
  },
};
</script>
