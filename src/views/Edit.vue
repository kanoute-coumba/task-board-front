<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Editer tâche</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateTask">
        <b-field label="Titre">
            <b-input required v-model="task.title" placeholder="titre de la tache"></b-input>
        </b-field>
        <b-field label="Description">
            <b-input v-model="task.description" type="textarea" placeholder="Détail la tache"></b-input>
        </b-field>

        <b-field label="Date Limite">
            <b-input v-model="task.deadline" type="date" >
            </b-input>
        </b-field>

        <b-field label="Priorité">
    
            <b-select v-model="task.priority" placeholder="Sélectionner">
                <option value="SIMPLE">Simple</option>
                <option value="URGENT">Urgent</option>
            </b-select>
        </b-field>

        <b-field label="statut">
             <!-- :label-position="labelPosition">  -->
            <b-select v-model="task.statut" placeholder="Sélectionner">
                <option value="Pending">En cours</option>
                <option value="Complete">Complète</option>
                <option value="Cancelled">Annulé</option>
            </b-select>
        </b-field>

        <b-field label="Assigné à">
            <b-select v-model="task.assignedTo" placeholder="Sélectionner">
                <option v-for="(user, index) in users" :value="user._id">{{task.firstname}}</option>
              
            </b-select>
        </b-field>
        <div class="buttons"><strong>
            <b-button  rounded native-type="submit">Mettre à jour</b-button>
            </strong>
        </div>
       </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default{
        data () {
           return {
                task:{},
                users: [],
                form:{
                    title: '',
                    description: '',
                    deadline: '',
                    priority:'',
                    statut:'',
                    assignedTo:''
            }
           } 
        },
        created(){
        // this.getTask();
        // this.getUsers();
            }, 

        methods: {
           async getTask()
            {
              let uri = 'http://localhost:3000/task/' + this.$route.params.id;
                await this.axios.get(uri).then((response) => {
                    this.task = response.data;
                });
            
        },
//         async getUsers() {
//     const baseURI = 'http://localhost:3000/user'
//     await axios.get(baseURI)
//     .then(res => { this.users = res.data })
//      //console.log(res)
//     .catch( error => {console.log(error) })
//   },

            updateTask()
            {
              let uri = 'http://localhost:3000/task' + this.$route.params.id;
                this.axios.post(uri, this.task).then((response) => {
                  this.$router.push('/task');
                });
            }
        }
    }
</script>
