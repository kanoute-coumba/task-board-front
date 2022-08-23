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
        <p class="inscon"> <span class="tap">Vous n'avez pas encore de compte? &nbsp; </span>
          <strong> <router-link v-if="isActive" to="/">Connexion</router-link> </strong>
        <strong> <router-link to="/signup"> Inscrivez-vous</router-link> </strong></p>

        <form @submit.prevent="login" method="post">
        <b-field label="Email">
            <b-input v-model="form.email" type="email"
                placeholder="john@"
                maxlength="50">
            </b-input>
        </b-field>

        <b-field label="Mot de passe">
            <b-input v-model="form.password" type="password"
                placeholder="mot de passe"
                password-reveal>
            </b-input>
        </b-field>
        <div class="buttons"><strong>
            <b-button rounded native-type="submit"> Se connecter</b-button>
            </strong>
        </div>
        
        </form>

        
        
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
                tasks:[],
                users:[],
                form:{
                    email: '',
                    password: ''
            }
           } 
        },
        created(){
        this.getTask();
        // this.getUser();
        // this.login();
            },

        // mounted(){},


  methods:{
  
  async getTask() {
    const baseURI = 'http://localhost:3000/task'
    await axios.get(baseURI)
    .then(res => { this.tasks = res.data })
     //console.log(res)
    .catch( error => {console.log(error) })
  },
    
  async login() {
    
    const baseURI = 'http://localhost:3000/user/login'
   await axios.post(
    baseURI,
    this.form,

    )
    .then(res => { 
        // this.users = res.data;
              this.$buefy.toast.open({
                    duration: 5000,
                    message: "success",
                    position: 'is-bottom',
                    type: 'is-success'
                })
        this.$router.push('/task')  ;
    console.log(this.tasks) })
    .catch( error => {
      this.$buefy.toast.open({
                    duration: 5000,
                    message: error.response.data,
                    position: 'is-bottom',
                    type: 'is-danger'
                });
                console.log(error); }
    )
  }
  }}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
input{
border-radius: 25px;
width: 70%;
margin: auto
}
.droite {
  font-size: large;
  font-style: oblique;
  padding: 18px;
  margin: 21px;
  /* align-content: left; */
}
.gauche {
  padding: 18px;
  margin: -11px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 20px;
}

.bis {
  color:aliceblue;
  border-radius: 30px;
  font-size: large;
  height: 45px;
  width: 55%;
  background-color:rgb(30, 120, 172)
}
.login {
  padding: 15px;
}
.pwd {
  padding: 15px;
}
.submit{
  padding: 25px 
}
.inscon{
  display: flex;
  /* justify-content: space-around; */
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
