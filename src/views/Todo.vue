<template>
<div class="plein">
    <div class="grid-container">
    <section>
         <form   @submit.prevent="postTask">
        <b-field label="Titre">
            <b-input required v-model="form.title" placeholder="titre de la tache"></b-input>
        </b-field>
        <b-field label="Description">
            <b-input v-model="form.description" type="textarea" placeholder="Détail la tache"></b-input>
        </b-field>

        <b-field label="Date Limite">
            <b-input v-model="form.deadline" type="date" >
            </b-input>
        </b-field>

        <b-field label="Priorité">
    
            <b-select v-model="form.priority" placeholder="Sélectionner">
                <option value="SIMPLE">Simple</option>
                <option value="URGENT">Urgent</option>
            </b-select>
        </b-field>

        <!-- <b-field label="statut">
             :label-position="labelPosition"> 
            <b-select v-model="form.statut" placeholder="Sélectionner">
                <option value="Pending">En cours</option>
                <option value="Complete">Complète</option>
                <option value="Cancelled">Annulé</option>
            </b-select>
        </b-field> -->

        <b-field label="Assigné à">
            <b-select v-model="form.assignedTo" placeholder="Sélectionner">
                <option v-for="(user, index) in users" :value="user._id">{{user.firstname}}</option>
              
            </b-select>
        </b-field>
        <div class="buttons"><strong>
            <b-button  rounded native-type="submit">Ajouter la tache</b-button>
            </strong>
        </div>
       </form>
    </section>
    <br>

    </div>

</div>
</template>

<script>
import router from '@/router';
import axios from 'axios';

    export default {
        data () {
           return {
                tasks:[],
                users: [],
                form:{
                    title: '',
                    description: '',
                    deadline: '',
                    priority:'',
                    // statut:'',
                    assignedTo:''
            }
           } 
        },
        created(){
        this.getTask();
        this.getUsers();
            }, 


  methods:{
  
  async getTask() {
    const baseURI = 'http://localhost:3000/task'
    await axios.get(baseURI)
    .then(res => { this.tasks = res.data })
     //console.log(res)
    .catch( error => {console.log(error) })
  },
    
  async getUsers() {
    const baseURI = 'http://localhost:3000/user'
    await axios.get(baseURI)
    .then(res => { this.users = res.data })
     //console.log(res)
    .catch( error => {console.log(error) })
  },
  postTask() {
    const baseURI = 'http://localhost:3000/task'
    axios.post(baseURI, this.form)
    .then(res => { 
        alert('Tache enrregistrée!')
        this.tasks = res.data;
        this.$router.push('/task')  ;
    console.log(this.tasks) })
    .catch( error => {console.log(error) })
  }
  }}

</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.buttons{
    width: 80%;
    padding: 20px;
    margin-left: 50%;
    font-size: x-large;
}
.plein {
    font-size: 66%;
}

</style>

