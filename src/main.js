import Vue from 'vue'
import vueResource from 'vue-resource'
import App from './App.vue'
import axios from 'axios';

Vue.config.productionTip = false
Vue.use(vueResource)

 new Vue({
  render: h => h(App),
   el: '#app',
   data () {
    return {
      movies: []
    }
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
}).$mount('#app')
