<template>
  <div class="movies">
    <ul>
      <li class="movieBox">
        <img :src="finishedURL" alt="#" />
        <h3>{{ movieSingle.movie.title }} ({{ movieSingle.movie.year }})</h3>
        <p>
          <router-link :to="`/movies/${movieSingle.movie.ids.slug}`"
            >More Details</router-link
          >
        </p>
        <h3 class="hidden" ref="value">{{ movieSingle.movie.ids.imdb }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  props: ["movieSingle"],
  data() {
    return {
      baseURL: "http://img.omdbapi.com/?apikey=a4041903&i=",
      posterURL: "",
      finishedURL: ""
    };
  },
  mounted() {
    this.posterURL = this.baseURL + this.$refs.value.innerText;
    // console.log(this.posterURL);
    this.finishedURL = this.posterURL;
    // console.log(this.finishedURL);
  }
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}

h3 {
  color: #ffffff;
}

.movies {
  display: inline-block;
}

ul {
  margin: 0 auto;
  text-align: center;
}

.movieBox {
  padding: 25px;
  margin: 25px;
  background-color: #f24c27;
  display: inline-block;
  :hover {
    background-color: #fff;
    color: #000;
    // background-color: #fff;
  }
}

img {
  height: 400px;
}
</style>
