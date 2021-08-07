<script>
export default {};
</script>

<template>
  <div class="main-container">
       <div class="forms"><slot name="forms"></slot></div>
    <div class="maps"><slot name="maps"></slot></div>
   
  </div>
</template>



<style  scoped>
.main-container {
  width: 85%;
  height: 85vh;
  margin: auto;
  margin-top:3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
}

.maps{
    width: 35rem;
    height: 35rem;
    background-color:#6a4bd4;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: "Yekan";
}

.forms{
    width: 17rem;
    height: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

}
</style>