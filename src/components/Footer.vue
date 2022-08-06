<template>
  <footer class="footer">
      <div class="container">
      <div class="footer-top ">
          <div class="footer-logo">
              <img src="../assets/logo.svg"/>
          </div>
          <div class="footer-menu">
              <a href="link.alias" class="footer-menu__item" v-for="link in menuData" :key="link.alias">{{link.title}}</a>
          </div>
      </div>
      <div class="footer-copyright">
            Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.
            </div>
            </div>
  </footer>
</template>

<script>
export default {
    data(){
        return{
            menuData:[
                {
                    alias:'',
                    title:'Terms & Conditions'
                },
                {
                    alias:'',
                    title:'Privacy'
                },
                {
                    alias:'',
                    title:'Notice at Collection'
                },
                {
                    alias:'',
                    title:'CA Privacy Hub'
                },
                {
                    alias:'',
                    title:'Contact Us'
                },
                {
                    alias:'',
                    title:'Sitemap'
                },
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
$primary:#0076C0;
$black:#333333;
    .footer{
        background:$black;
        &-top{
            padding:  30px 0;
            border-bottom: 1px solid #FFFFFF;
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media screen and (max-width:1200px){
                padding:30px 8px;
            }
            @media screen and (max-width:767px){
                justify-content: flex-start;
                flex-direction: column;
                align-items: flex-start;
            }
        }
        &-logo{
            width: 55px;
            height: 35px;
             @media screen and (max-width:767px){
                margin-bottom: 20px;
             }
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        &-menu{
            display: flex;
            align-items: baseline;
            @media screen and (max-width:767px){
                display: flex;
                flex-direction: column;
            }
            &__item{
                font-weight: 500;
                font-size: 16px;
                line-height: 156.69%;
                color:#fff;
                margin-left: 20px;
                &:first-child{
                    margin-left: unset;
                }
                @media screen and (max-width:767px){
                margin-left: unset;
                margin-bottom: 10px;
                &:last-child{
                    margin-bottom: unset;
                }
            }
            }
        }
        &-copyright{
            padding: 30px 0;
            color:#fff;
            font-weight: 500;
            font-size: 12px;
            line-height: 156.69%;
            @media screen and (max-width:1200px){
                padding:30px 8px;
            }
        }
    }

</style>