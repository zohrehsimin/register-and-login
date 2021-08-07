<template>
  <router-view></router-view>
  <router-view name="homePage"></router-view>
  <!-- <router-view name="dashboardLanding"></router-view> -->
</template>

<script>

export default {
  data(){
    return{
      users: []
    }
  },
  provide(){
    return{
      getUser : this.getUser
    }
  },
  methods : {
    getUser(user){
      this.users.push(user)
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
}
</script>

<style>
@font-face {
  font-family: "Yekan";
  src: url("/fonts/Yekan.eot");
  src: url("/fonts/Yekan.eot?#iefix") format("embedded-opentype"),
  url("/fonts/Yekan.woff2") format("woff2"),
  url("/fonts/Yekan.woff") format("woff"),
  url("/fonts/Yekan.otf") format("opentype"),
  url("/fonts/Yekan.ttf") format("truetype"),
  url("/fonts/Yekan.svg#Yekan") format("svg");
  font-weight: normal;
  font-style: normal;
}
* {
  box-sizing: inherit;
  direction: rtl;
  padding: 0;
  margin: 0;
  font-family: inherit;
}
html {
  font-size: 16px;
  font-family: "Yekan";
}
body {
  box-sizing: border-box;
}
</style>
