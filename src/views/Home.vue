<template>
  <div class="home">
    <div class="container">
      <div class="row">
      <div class="home-content">
        <h1 class="home-content__title">Welcome to <br/>Business Analytics Online</h1>
        <div class="home-content__desc"><b>Business Analytics</b> — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's</div>
        <ul class="home-content__benefits">
          <li class="home-content__benefits-item" v-for="(item,idx) in benefits" :key="idx">
              <div class="home-content__benefits-title">{{item.title}}</div>
              <div class="home-content__benefits-desc">{{item.desc}}</div>
          </li>
        </ul>
      </div>
      <div class="home-form"><LoginForm /></div>
      </div>
    </div>

    
    
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
  components: {LoginForm},
  data(){
    return{
      benefits:[
        {
          title:'Interactive Reporting',
          desc:'In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.',
        },
        {
          title:'Automated data updates',
          desc:'The application automatically updates and structures the data in just 60 seconds, saving you time and money.',
        },
        {
          title:'Data Security',
          desc:'The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.',
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
  $black:#333;
  .home{
    background: url('../assets/home_bg.png');
    min-height: calc(100vh - 325px);
    background-repeat: no-repeat;
    padding:215px 0 40px 0;
    @media screen and (max-width:991px){
      padding:100px 0 40px 0;
      background-size: 100% 400px;

    }
    @media screen and (max-width:767px){
      padding:50px 0 40px 0;
      background-size: 100% 250px;
    }
      &-content{
        width: 58%;
        padding: 0 8px;
        
        &__title{
          width: 100%;
          font-weight: 400;
          font-size: 55px;
          line-height: 156.69%;
          color:#fff;
          margin-bottom: 110px;
          @media screen and (max-width:767px){
            font-size: 40px;   
            }
        }
        &__desc{
          font-weight: 400;
          font-size: 16px;
          line-height: 156.69%;
          color:$black;
          margin-bottom: 15px;
          b{
            font-weight: 500;
          }
        }
        &__benefits{
          list-style-image: url('../assets/check.svg');
          padding-left: 30px;
          &-item{
            padding-left:15px;
          }
          &-title{
            font-weight: 500;
            font-size: 16px;
            line-height: 156.69%;
            margin-bottom: 10px;
          }
          &-desc{
            margin-bottom:15px;
            font-weight: 400;
            font-size: 14px;
            line-height: 156.69%;
          }
        }
      }
      &-form{
        padding: 0 8px;
        width: calc(100% - 58%);
        margin-top: 60px;
      }
  }

</style>
