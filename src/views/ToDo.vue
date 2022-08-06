<template>
  <div class="todo">
      <div class="container">
          <div class="todo-logo">
              <img src="../assets/logo.svg"/>
          </div>
          <div class="todo-content">
              <h1 class="todo-title">Thank you, {{username}}</h1>
                <div class="todo-list">
                <div class="todo-list__add">
                    <input placeholder="Add new to do.." @click="this.edit = null" type="text" v-model="newToDo"/>
                    <button @click="addToDo" class="btn btn-primary">Add</button>
                </div>
                <div class="todo-list_inner">
                <div v-for="(item,idx) in toDoData" :key="idx" class="todo-list__item">
                    <template v-if="this.edit === idx ">
                    <input class="todo-list__item-edit"  :key="idx" type="text" v-model="toDoData[idx]" @change="this.edit = null"/>
                    <button class="btn btn-primary" @click="this.edit = null">save</button>
                    </template>
                    <template v-else >
                          <span class="todo-list__item-title">{{item}}</span>
                          <button class="btn btn-primary" @click="this.edit = idx">Edit</button>
                    </template>
                    <button class="btn btn-primary" @click="removeToDo(idx)">Remove</button>
                </div>
                </div>
            </div>
      </div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            newToDo:null,
            toDoData:[],
            edit:null,
            username:null,
        }
    },
    mounted(){
        let login = JSON.parse(localStorage.getItem('authorization'));
        if(!login){
            this.$router.push('/');
        }
        this.username = localStorage.getItem('username');
    },
    methods:{
        addToDo(){
            if(this.newToDo != null ){
                this.toDoData.push(this.newToDo);
                this.newToDo = null;
            }
        },
        removeToDo(idx){
            this.edit = null;
            this.toDoData.splice(idx, 1);
        }
    }

}
</script>

<style lang="scss" scoped>
.todo{
    min-height: 100vh;
    padding:65px 0;
    background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);
    background-color: #E5E5E5;
    background-size: 100% 70%;
    background-repeat: no-repeat;
    &-logo{
        display: flex;
        justify-content: center;
        margin-bottom: 66px;
        img{
            width: 186px;
            height: 119px;
            object-fit: contain;
        }
    }
    &-content{
        padding:32px;
        background: #fff;
    }
    &-title{
        font-weight: 700;
        font-size: 60px;
        line-height: 156.69%;
        display: flex;
        justify-content: center;
        @media screen and (max-width:767px){
            font-size: 35px;
        }
        }
    &-list{
        &__add{
            display: flex;
            justify-content: space-between;
             margin-bottom: 10px;
            input{
                margin-right: 10px;
            }
            .btn{
                display: flex;
                align-items: center;
            }
        }
        &__item{
            display: flex;
            align-items: center;
            width: 100%;
            height: 55px;
            padding: 0 15px;
           
            border-bottom: 1px solid #d0d0d0;
            &:last-child{
                border-bottom: unset;
            }
            &-title{
                width: 100%;
                margin-right: 10px;
                word-break:break-all;
            }
            &-edit{
                margin-left: -15px;
                margin-right: 10px;
            }
            .btn{
                min-width: 100px;
                align-items: center;
                justify-content: center;
                margin-right:15px;
            }
        }
    }
}


</style>