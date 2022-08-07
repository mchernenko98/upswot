<template>
  <Header v-if="this.$route.path !== '/todo'"/>  
  <router-view/>
  <Footer v-if="this.$route.path !== '/todo'" />
</template>
<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


export default {
  components: {Header,Footer}
}
</script>
<style lang="scss">
///css reset
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}
html {
    height: 100%;
    width: 100%;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

//styles

$primary:#0076C0;
$black:#333333;

body *{
  font-family: 'Roboto', sans-serif;
}
.container{
  max-width: 1177px;
  margin:0 auto;
}
.row{
  display: flex;
  margin: 0 -8px;
  @media screen and (max-width:1177px){
    margin: unset;
  }
  @media screen and (max-width:767px){
    flex-wrap: wrap;
    div{
      width: 100% !important;
    }
  }
}
.input{
  margin-bottom: 40px;
  position: relative;
  &.error{
      &::after{
    content: "ⓧ Сheck that the input is correct";
    position: absolute;
    color:#D60000;
    bottom:-20px;
    left: 0;     
  }
  input{
        border-color:#D60000;
  }
  }
}
label{
  display: block;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color:$black;
  margin-bottom: 7px;
}
input[type=text],input[type=password]{
  border: 1px solid #9A9A9A;
  width: 100%;
  padding: 16px 15px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color:$black;
  box-sizing: border-box;
  position: relative;
  &:focus-visible{
    outline: unset;
    border: 1px solid #101010;
  }
  
}
.btn{
  padding: 8px 28px;
  display: flex;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  transition: .2s;
  cursor: pointer;
  &.btn-primary{
    background: $primary;
    color:#fff;
    border: 2px solid $primary;
    &:hover{
      transition: .2s;
      background: transparent;
      color:$primary;
      border: 2px solid $primary;
    }
  }
  &.btn-info{
    background: #F6F6F6;
    color:$black;
    border: 2px solid #F6F6F6;
     &:hover{
      transition: .2s;
      background: #fff;
    }
  }
}
a{
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color:$primary;
  text-decoration: unset;
}

</style>
