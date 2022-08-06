<template>
  <div class="login">
      <form ref="login" class="login-form">
        <div class="input">
        <label>Name</label>
        <input id='username' v-model="login.username" type="text"/>
        </div>
        <div class="input">
        <label>Password</label>
        <input id='password' v-model="login.password" type="password"/>
        </div>
        <button class="btn btn-primary" @click.prevent="submit"> Login</button>
        <div class="login-link">
          <a href="">Forgot Password</a>
        </div>
      </form>
      <button class="btn btn-info"> Register now</button>
  </div>
</template>

<script>
export default {
  
  data(){
    return{
      login:{
        username:null,
        password:null,
      },
      userData:{
        username:'Admin',
        password:'12345'
      }
    }
  },
  methods:{
    submit(){
      if(this.login?.username === this.userData?.username && this.login?.password === this.userData?.password){
          window.localStorage.setItem('authorization', true);
          window.localStorage.setItem('username', this?.userData?.username);
          this.$router.push('/todo');
      }
      else{
          let iLogin = document.getElementById("username").parentElement;
          let iPassword = document.getElementById("password").parentElement;
          iLogin.classList.remove('error');
          iPassword.classList.remove('error');
        if(this.login?.username !== this.userData?.username ){
          debugger
           iLogin.classList.add('error');
           iPassword.classList.add('error');
        }
        else if( this.userData?.password === null){
          iPassword.classList.add('error');
        } else{
           iPassword.classList.add('error');
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.login{
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
  &-form{
    padding: 40px 30px 23px;
    background: #fff;
  }
  .btn{
    font-weight: 400;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 25px;
    line-height: 29px;
    &.btn-primary{
      text-transform: uppercase;
      margin-bottom: 20px;
    }
  }
  &-link{
    display: flex;
    justify-content: center;
  }
}
</style>