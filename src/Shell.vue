<template>
  <main id="app mainCon">
    <h1 class="hidden">VUE SPA App with Trakt API</h1>
    <nav>
      <h2 class="hidden">Navigation</h2>
      <img id="logo" alt="OTST logo" src="./assets/otst-logo.png" />
    </nav>
    <router-view v-bind:movies="theMovies" the-title="box office" />
    <footer>
      <h4>
        OTST is powered by Trakt API. <br />
        Images are fetched by OMDB
      </h4>
    </footer>
  </main>
</template>

<script>
import axios from "axios";
const headers = {
  "Content-Type": "application/json",
  "Trakt-Api-Version": "2",
  "Trakt-Api-Key": process.env.TRAKT_KEY
};
const params = {
  limit: 120 // api/movies/boxoffice will only return 10 items.
};
export default {
  data() {
    return {
      theMovies: []
    };
  },
  created() {
    var vm = this;
    axios
      .get("https://api.trakt.tv/movies/recommended/weekly", {
        params,
        headers
      })
      .then(function(response) {
        vm.theMovies = response.data;
        console.log(vm.theMovies);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style lang="scss">
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  border: 1rem solid;
  background-color: #040404;
}

#mainCon {
  max-width: 100%;
}

#logo {
  width: 100px;
}

nav {
  background-color: #040404;
  color: #fff;
  padding: 20px;
  display: flex;
  grid-auto-columns: 1fr 1fr;
}

footer {
  color: #fff;
  background-color: #f24c27;
  height: 100px;
  text-align: center;

  h4 {
    padding-top: 40px;
  }
}
</style>
