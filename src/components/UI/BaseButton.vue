<script>
    export default {
        props : ["activeBtn","theQuestion", "deactiveBtn"]
    }
</script>

<template>
    <div class="button-container">
         <router-link to="/login" class="active-btn">{{activeBtn}}</router-link>
         <div class="check-account">
               <hr>
               <div class="question">{{theQuestion}}</div>
         </div>
         <router-link to="/signup" class="deactive-btn">{{deactiveBtn}}</router-link>
     </div>
</template>



<style  scoped>
.button-container{
    margin-top: 2rem;
    width:17rem;
    height: 10rem;
    align-self: center;
    display: flex;
   flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.active-btn{
    width:  8rem;
    height: 2.5rem;
    color: white;
    background-color:#6a4bb4;
    font-family: "Yekan";
    outline-style: none;
    border-radius:20px;
    border: none;
}
.check-account{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top:2rem;
    margin-bottom: .2rem
}
.question{ 
    width:  6rem;
    height: 2rem;
    color: #aaa9ac;
    background-color:white;
    font-family: "Yekan";
    outline-style: none;
    border-radius:20px;
    border: none;
    font-size: .5rem;
    margin-top:-1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.deactive-btn{
    width:  8rem;
    height: 2.5rem;
    color: #f3f1f9;
    background-color:#d1cae9;
    font-family: "Yekan";
    outline-style: none;
    border-radius:20px;
    border: none;
}
.deactive-btn:hover{
      color: white;
    background-color:#6a4bb4;

}

hr{ 
    color: rgb(168, 166, 166);
    width: 17rem;
}
</style>