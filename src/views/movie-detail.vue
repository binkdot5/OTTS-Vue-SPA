<template>
  <div id="movieDetail">
    <h2 class="hidden">Movie Details</h2>
    <img :src="prcsdURL" alt="movie-poster" />
    <h2>{{ moviedetails.title }}</h2>
    <h3>Movie Year: {{ moviedetails.year }}</h3>
    <p>Description:</p>
    <p>{{ moviedetails.overview }}</p>
    <h3>Ratings: {{ moviedetails.rating }}</h3>
    <h4>Genres: {{ moviedetails.genres }}</h4>
    <p class="hidden" ref="value">{{ moviedetails.ids.imdb }}</p>
    <p>
      <router-link to="/movies"> Back to Movies </router-link>
    </p>
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
  limit: 12
};
export default {
  data() {
    return {
      baseURL: "http://img.omdbapi.com/?apikey=a4041903&i=",
      imdbID: "",
      prcsdURL: "",
      moviedetails: {}
    };
  },
  created() {
    let vm = this;
    let id = this.$route.params.id;
    axios
      .get(`https://api.trakt.tv/movies/${id}?extended=full`, {
        params,
        headers
      })
      .then(function(response) {
        vm.moviedetails = response.data;
        // console.log(vm.moviedetails);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  updated() {
    {
      this.imdbID = this.baseURL + this.$refs.value.innerText;
      //   console.log(this.imdbID);
      this.prcsdURL = this.imdbID;
      //   console.log(this.prcsdURL);
    }
  }
};
</script>

<style lang="scss" scoped>
#movieDetail {
  position: relative;
  top: 20px;
  background-color: #ededed;
  width: 400px;
  height: auto;
  padding: 25px;
  margin: 0 auto;
}
</style>
