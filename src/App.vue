<template>
  <div id="app">
    <sidebar />
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Sidebar from '@/containers/Sidebar';

export default {
  name: 'app',
  components: {
    Sidebar,
  },
};
</script>

<style>
#app {
  display: flex;
  align-items: stretch;

  width: 100%;
  min-width: 560px; /* temp */
  height: 100vh;
  overflow: hidden;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  @media only screen and (max-width: 560px) {
    overflow-x: scroll; /* temp */
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
}

a {
  outline: none;
  color: inherit;
  text-decoration: none;
}

.content {
  flex: 1 1 auto;
  background-color: rgba(0, 0, 0, .1);
}
</style>
