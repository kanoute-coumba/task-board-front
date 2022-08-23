<template>
<div>
  <div class="grid-container">
    <div class="grid-x grid-margin-x">
      <div class="cell small-12 medium-6 large-6">
        <div class="droite"> Bienvenue chez</div>
        <img src="../assets/intech.png">
      </div>
      <div class="cell small-12 medium-6 large-6">
        <div class="gauche">
          <p class="inscon"> <span class="tap">Vous avez déja un compte? &nbsp; </span>
            <strong>
              <router-link to="/">Connectez-vous</router-link>
            </strong>
            <strong>
              <router-link v-if="isActive" to="/signup"> Inscrivez-vous</router-link>
            </strong>
          </p>
    <section>
      <form @submit.prevent="signup" method="post">
        <b-field label="Profil">
            <b-select v-model="form.accountType" placeholder="Sélectionner">
                <option value="Admin">Employee</option>
                <option value="Employee">Admin</option>
            </b-select>
        </b-field>
        <b-field label="Prénom">
            <b-input v-model="form.firstname" placeholder="votre prénom"></b-input>
        </b-field>
        <b-field label="Nom">
            <b-input v-model="form.lastname" placeholder="nom"></b-input>
        </b-field>
        <b-field label="Fonction">
            <b-input v-model="form.role" placeholder="votre fonction"></b-input>
        </b-field>
        <b-field label="Email">
            <b-input v-model="form.email" type="email"
                placeholder="john@"
                maxlength="50">
            </b-input>
        </b-field>
        <b-field label="Password">
            <b-input v-model="form.password" type="password" placeholder="mot de passe"
                password-reveal>
            </b-input>
        </b-field>
        <div class="buttons"><strong>
            <b-button rounded native-type="submit"> S'inscrire</b-button>
            </strong>
        </div>
      </form>
    </section>

        </div>
      </div>
    </div>
  </div>
  </div>
</template>


<script>

import axios from 'axios'

export default {
        data () {
           return {
                isActive: false,
                users:[],
                form:{
                    accountType:'',
                    firstname:'',
                    lastname:'',
                    role:'',
                    email: '',
                    password: ''
            }
           } 
        },
        created(){
        // this.getTask();
        this.getUser();
       
            }, 


  methods:{
  
  async getUser() {
    const baseURI = 'http://localhost:3000/user'
    await axios.get(baseURI)
    .then(res => { this.users = res.data })
     //console.log(res)
    .catch( error => {console.log(error) })
  },
    
  async signup() {
    const baseURI = 'http://localhost:3000/user/signup'
   await axios.post(baseURI, this.form)
    .then(res => { 
        this.users = res.data;
        this.$router.push('/')  ;
    console.log(this.users) })
    .catch( error => {
       this.$buefy.toast.open({
                    duration: 5000,
                    message: error.response.data,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
      console.log(error.response.data) })
  }
  }}


// export default {
//   name: 'Inscription',
//   components: {
//   },
//   data(){
//     return {
//       isActive: false,
//       profil:'Employee'
//     }
//   },
//   props: {
//     msg: String,

//   },
//   methods: {
//     clickMe() {
//       this.$buefy.notification.open('Clicked!!')
//     }

//   },
//   signup(){
//     const baseURI = 'http://localhost:3000/task'
//     axios.post(baseURI, {
//     "title": "Faire le menage",
//     "description": "Faire le GRAND menage",
//     "deadline": "2022-08-27",
//     "priority": "Simple",
//     "statut": "Pending",
//     "assignedTo": "62f5a674fefaafb791a4088d",
//     "createdBy": "62f5a674fefaafb791a4088d"
    
//     })
//     .then(res => { this.tasks = res.data 
//     console.log(this.tasks) })
//     .catch( error => {console.log(error) })
//   }

// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
input {
  border-radius: 25px;
  width: 70%;
  margin: auto
}

.droite {
  font-size: large;
  font-style: oblique;
  padding: 18px;
  margin: 21px;
  align-content: left;
}

.gauche {
  padding: 18px;
  margin: -21px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 20px;
}

.bis {
  color: aliceblue;
  border-radius: 30px;
  font-size: large;
  height: 45px;
  width: 55%;
  background-color: rgb(30, 120, 172)
}

.signup {
  padding: 15px;
}

.dim {
  display: flex;
  justify-content:flex-end;
  padding: 5px;
  align-items: center;
  width: auto;
}
.manche{
  text-align: right;
/*  position: relative;
  right: 200px; 
  display:inline-block; width:100px; */
}

.pwd {
  padding: 15px;
}

.submit {
  padding: 25px
}

.inscon {
  display: flex;
  justify-content: space-around;
  padding: 25px;
  align-items: center;
}
.buttons{
    width: 80%;
    padding: 20px;
    margin-left: 50%;
    font-size: x-large;
}

/* .tap{
  font-size: x-small;
} */
</style>
