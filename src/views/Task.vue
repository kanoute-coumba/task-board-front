<template>
  <div >
<!-- <ul> <li> <strong> <router-link to="/Todo"> Créer une nouvelle tâche </router-link> </strong>
    </li> <strong> <router-link @click="getTask" to="/Task"> Afficher la liste des tâches </router-link> </strong>
</ul> -->
    <strong> <router-link to="/Todo"> Créer une nouvelle tâche </router-link> </strong> <br/>
    <br/>
    <!-- <button v-on:click="postTask">Click me!</button> -->


    <table class="table table-hover">
            <thead>
            <tr>
                <td>Nom</td>
                <td>Deadline</td>
                <td>Assignée à</td>
                <td>Actions</td>
            </tr>
            </thead>
      <tbody>

        
                <tr v-for="task in tasks" :key="task._id">
                    <td>{{ task.title }}</td>
                    <td>{{ task.deadline }}</td>
                    <td>{{ task.assignedTo.firstname }}</td>
                    <td><router-link :to="'/task/' +task._id " class="btn btn-primary">Modifier</router-link></td>
                    <td><button class="btn btn-danger" @click="deleteTask(task._id)">Supprimer</button></td>
                </tr>
            </tbody>
        </table>


    <!-- <ul>
    <li v-for="task in tasks">{{ task.title }} <router-link :to="{name: 'Edit', params: { id: item._id }}" class="btn btn-primary">Modifier</router-link> </li>  
    </ul> -->
    <!-- <button>Click me!</button> -->
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tasks: []
  }
  },
created(){
 this.getTasks();
},
  methods:{  
  
  async getTasks() {
    // const config = {
    //   headers:{
    //         Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmZlNTFlYWY0MTYwMjlmOGFmZGQ0OGYiLCJpYXQiOjE2NjA4MzQ5NzAsImV4cCI6MTY2MDkyMTM3MH0.jQOpDVek2bhJQu5dR-Cj0UkrY5OpXQAgSRObfHCyzV8"

    //   }
    // }

    const baseURI = 'http://localhost:3000/task'
    await axios.get(
      baseURI,
  //  config,
   )

    .then(res => { this.tasks = res.data } )
     
    .catch( error => {console.log(error) 
    this.$buefy.toast.open({
                    duration: 5000,
                    message: error.response.data,
                    position: 'is-bottom',
                    type: 'is-danger'
                })})
  },
  deleteTask(id)
            {
              let uri = 'http://localhost:3000/task/'+id;
              // this.tasks.splice(id, 1);
             axios.delete(uri)
              .then(() => {
                this.getTasks()
              })
              .catch( error => {console.log(error) 
    this.$buefy.toast.open({
                    duration: 5000,
                    message: error.response.data,
                    position: 'is-bottom',
                    type: 'is-danger'
                })})
              
            }
  }
  }

</script>
  
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  width: 640px;
  margin: 0 auto;
  color: #2c3e50;
  margin-top: 60px;
}
</style>