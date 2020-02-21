<template>
  <div class="movies">
    <ul>
      <li class="movieBox">
        <img :src="poster" alt="#" />
        <h3>{{ movieSingle.movie.title }}</h3>
        <h3>{{ movieSingle.movie.ids.imdb }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  props: ["movieSingle"],
  computed: {
    poster: function() {
      return `http://img.omdbapi.com/?apikey=a4041903&i=tt2584384`;
    }
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
  position: relative;
  left: 5%;
  display: inline-block;
}

ul {
  margin: 0 auto;
  text-align: center;
}

.movieBox {
  padding: 50px;
  margin: 25px;
  background-color: #f24c27;
  display: inline-block;
}

.movieBox:hover {
  color: #000;
  background-color: #fff;
}

img {
  height: 400px;
}
</style>
