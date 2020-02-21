<template>
  <div id="mainCon">
    <nav>
      <img id="logo" alt="OTST logo" src="./assets/otst-logo.png" />
    </nav>
    <router-view v-bind:movies="theMovies" the-title="Movies" />
    <footer>
      <h2 class="hidden">OTST Footer</h2>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
const headers = {
  "Content-Type": "application/json",
  "Trakt-Api-Version": "2",
  "Trakt-Api-Key":
    "0424499b3bbaf949c7fbd2c493612e8248b789a0f64361264d5d931dd00673ec"
};
const params = {
  limit: 9
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
      .get("https://api.trakt.tv/movies/trending", {
        params,
        headers
      })
      .then(function(response) {
        vm.theMovies = response.data;
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
  border-color: #f24c27;
}
#logo {
  width: 100px;
}

nav {
  background-color: #fff;
  padding: 20px;
  display: flex;
  grid-auto-columns: 1fr 1fr;
}

footer {
  color: #fff;
  background-color: #191919;
  height: 100px;
  margin-top: 40px;
}
</style>
