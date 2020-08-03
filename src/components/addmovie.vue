<template>
  <div>
    <div class="flex-container">
      <div class="image"><img :src="this.url" /></div>
      <br />
      <div class="description">
        {{ movieTitle }} <br />
        {{ year }}
      </div>
    </div>
    <div class="button-copy">
      Add New Movie<br />
      <input
        placeholder="New Movie Poster (URL)"
        class="textbox"
        v-model="url"
        type="text"
      />
      <br />
      <input
        placeholder="New Movie Title"
        class="textbox"
        v-model="movieTitle"
        type="text"
      />
      <br />
      <input
        placeholder="New Movie Year"
        class="textbox"
        v-model="year"
        type="number"
      />
      <br />
      <button @click="addmovie()">Add movie</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "addmovie",
  data() {
    return {
      movieTitle: "",
      year: "",
      //plot: "",
      url: ""
    };
  },
  methods: {
    addmovie() {
      if (this.url != "" && this.movieTitle != "") {
        let newMovie = {
          Title: this.movieTitle,
          Year: this.year,
          //Plot: this.plot,
          Poster: this.url
        };
        this.$emit("addmovie", newMovie);
        this.movieTitle = "";
        //this.plot="";
        this.year = "";
        this.url = "";
      } else {
        alert("Insufficient Data!");
      }
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=DM+Serif+Display&display=swap");
body {
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

.flex-container {
  display: flex;
  padding: 10px;
  margin: 10px;
  border: 5px solid black;
  font-family: "DM Serif Display", serif;
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
.button-copy {
  float: right;
  padding: 0px 30px 30px 0px;
  font-size: 1.8em;
}
.textbox {
  padding: 10px;
}
</style>
