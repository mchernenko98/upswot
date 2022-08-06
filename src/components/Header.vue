<template>
    <header class="header">
        <div class="header-top"></div>
        <div class="header-bottom">
             <div class="container">
                 <div class="row">
                     <div class="header-bottom__content">
                          <img src="../assets/logo.svg"/>
                     </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .header{
        &-top{
            background: #333333;
            height: 53px;
            width: 100%s;
        }
        &-bottom{
            background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);
            &__content{
                padding: 15px 8px;
            }
        }
    }
</style>