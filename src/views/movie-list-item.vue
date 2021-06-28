<template>
  <div class="row">
    <div class="col">
      <h2 class="hidden">Movie List</h2>
      <li class="movieBox">
        <img
          :src="finishedURL"
          onerror="if (this.src != 'error.jpg') this.src = 'https://popcornusa.s3.amazonaws.com/gallery/1576022750-nobody.png';"
          alt="movie-poster"
        />
        <h5>{{ movieSingle.movie.title }} ({{ movieSingle.movie.year }})</h5>
        <p>
          <router-link :to="`/movies/${movieSingle.movie.ids.slug}`"
            >Details</router-link
          >
        </p>
        <h3 class="hidden" ref="value">{{ movieSingle.movie.ids.imdb }}</h3>
      </li>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["movieSingle"],
  data() {
    return {
      baseURL: "http://img.omdbapi.com/?apikey=a4041903&i=",
      apiKey: "?api_key=7694c061ed8da9f133ccea4323e7ce26",
      imdbID: "",
      finishedURL: "",
      fanArt: "",
      fallBack:
        "https://popcornusa.s3.amazonaws.com/gallery/1576022750-nobody.png"
    };
  },
  mounted() {
    this.imdbID = this.$refs.value.innerText;
    // console.log(this.imdbID);
    if (this.posterURL == "") {
      null;
    } else {
      this.finishedURL = this.baseURL + this.imdbID;
    }
    // function urlCall(finishedURL) {
    //   var httpreq = new XMLHttpRequest();
    //   httpreq.open("GET", finishedURL, false);
    //   httpreq.send(null)
    // }
  },
  created() {
    var vm = this;
    axios
      .get(this.finishedURL)
      .then(function(response) {
        vm.fanArt = response;
        console.log(vm.fanArt);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
h3 {
  color: #ffffff;
}

.movieBox {
  list-style: none;
  max-width: 14rem;
  padding: 25px;
  margin: 20px;
  background-color: #000;
  min-height: auto;
  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h5 {
    color: #f24c27;
  }

  a {
    color: #000;
    padding: 1rem;
    font-size: 0.6rem;
    text-decoration: none;
    background-color: #fff;
  }

  a:hover {
    background-color: #f24c27;
    color: #fff;
  }
}

img {
  height: 20.5rem;
}

/* iPhone 6/7/8 Screen Size */
@media only screen and (max-width: 375px) {
  img {
    height: 400px;
  }
  .movieBox {
    position: relative;
    left: -30px;
  }
  .movies {
    padding-left: 0px;
  }
}
</style>
