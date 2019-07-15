<template><div>
  <div id="app" class="navbar"> 
  <movie></movie></div>
  
  <div class="container">
    <li v-for="(movie, index) in this.movies">
      {{ movie.Title }} 
    </li>  
  </div>
  </div>
</template>

<script>

import movie from './components/movie.vue'
import axios from 'axios';



export default {
  name: 'app',
  data: movies = [],
  components: {
    movie,
  },
  mounted () {
    axios
      .get('http://www.omdbapi.com/?s=harry+potter&apikey=e0620bd4')
      .then((response) =>{
        console.log(response);
        this.movies = response.data.Search
      })
      .catch(function (error) {
          console.log(error);
      });
  }
}
</script>

<style>
.container{
  display: flexbox;
  background-color: blueviolet;
  height: 40vh;
  padding: 20px 20px 20px 20px;
}

</style>
