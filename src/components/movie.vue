<template>
  <div class="container">
    
      <h1>
        Movie Collection
      </h1>
        <hr>
        <div v-for="(movie, index) in movies" :key=index class="flex-container">
            <div class="image"><img :src="movie.Poster" /></div>
            <br/>
            <div class="description"> {{  movie.Title }} 
              <br> {{movie.Year}}
            </div>
        </div> 
        <addmovie v-on:addmovie="updateList" />
  </div>     
</template>

<script>

import axios from 'axios';
import addmovie from '../components/addmovie'
export default {
  name: 'movies',
  components: {
    addmovie,
  },
  data(){ return {
    movies : []
  }},
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
  },
  methods: {
    updateList (value) {
      console.log(this.movies)
      this.movies.push(value)
      console.log(this.movies)
    },
    getDescription(id, index){
      console.log(id)
      axios
      .get('http://www.omdbapi.com/?i='+id+'&apikey=e0620bd4')
      .then((response) =>{
        console.log(response);
        this.movies[index].Plot = response.data.Plot
        console.log(this.movies);
      })
      .catch(function (error) {
          console.log(error);
      });
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=DM+Serif+Display&display=swap');
body{
    margin: 0 auto;
}
.container {
 background-color: white;
 padding: 10px 10px 10px 20px; 
}
h1 {
  color: red;
  font-size: 2.3em;
  padding-left: 20px;
}

.flex-container{
  display: flex;
  padding: 10px;
  margin: 10px;
  border: 5px solid black;
  font-family: 'DM Serif Display', serif;
}
.flex-container + img {
  padding-bottom: 10px;
}
 img {
   height: 40vh;
   object-fit: fill;
   padding-right: 10px;
}
.description {
  float: right;
  font-size: 1.5em;
  //background-color: azure;//
}

</style>
