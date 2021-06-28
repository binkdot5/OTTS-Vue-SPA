<template>
  <div class="movie-list">
    <h5 class="nav-heading">{{ theTitle }}</h5>
    <div class="list-container">
      <ul class="layout">
        <movie-list-item
          v-bind:movieSingle="movie"
          v-for="movie in movies"
          v-bind:key="movie.title"
        />
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import movieListItem from "./movie-list-item.vue";
export default {
  props: ["theTitle", "movies"],
  components: {
    "movie-list-item": movieListItem
  }
};
</script>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

.nav-heading {
  text-transform: lowercase;
  font-size: 45px;
  color: #fff;
  position: absolute;
  top: -35px;
  right: 50px;
}

.list-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 100%;
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
  .layout {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    //max-width: 375px;
    margin: 0 auto;
  }
  .nav-heading {
    font-size: 26px;
    position: absolute;
    top: 10px;
  }
}

// Medium devices (tablets, less than 992px)
@media (min-width: 768px) and (max-width: 991.98px) {
  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    //max-width: 750px;
    margin: 0 auto;
  }
  .nav-heading {
    font-size: 26px;
    position: absolute;
    top: 0px;
  }
}

// Large devices (desktops, less than 1200px)
@media (min-width: 992px) and (max-width: 1199.98px) {
  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    //max-width: 900px;
    margin: 0;
    padding: 0;
  }
  .nav-heading {
    font-size: 26px;
    position: absolute;
    top: 0px;
  }
}
</style>
