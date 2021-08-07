
<script>
import BaseCard from "../UI/BaseCard";
// import BaseButton from "../UI/BaseButton";
export default {
  components: { BaseCard },
  data() {
    return {
      userAuthenticated: true,
      user: {
        userName: "",
        password: "",
      },
      active: "ورود به سامانه",
      account: "آیا حساب کاربری ندارید؟",
      deactive: "ساخت حساب کاربری",
    };
  },
  mounted() {},
  methods: {
    submitForm() {
      if (
        JSON.parse(localStorage.getItem("users")).find(
          (user) =>
            user.userName === this.user.userName &&
            user.password === this.user.password
        )
      ) {
        this.$router.push("/dashboard");
      } else {
        this.userAuthenticated = false;
      }
    },
  },
};
</script>




<template>
  <base-card>
    <template #forms>
      <form class="form" @submit.prevent="submitForm">
        <header class="form__header">
          <p>کندا ایده</p>
          <h4>تجربه مهندسی خلاق</h4>

        </header>

        <div class="form__field">
          <label for="user-name"></label>
          <input
            type="text"
            id="user-name"
            v-model.trim="user.userName"
            placeholder="نام کاربری"
          />
        </div>
        <div class="form__field">
          <label for="password"></label>
          <input
            type="password"
            id="password"
            v-model="user.password"
            placeholder="رمز عبور"
          />
        </div>

        <div class="forget-pass">آیا نام کاربری یا کلمه عبور را فراموش کرده اید؟</div>

        <div v-if="!userAuthenticated" class="failed-authentication">
          رمز عبور یا نام کاربری اشتباه است
        </div>
        <div class="form__submit-btn">
                <div class="button-container">
         <router-link to="/dashboard" class="active-btn btn">{{active}}</router-link>
         <div class="check-account">
               <hr>
               <div class="question">{{account}}</div>
         </div>
         <router-link to="/signup" class="deactive-btn btn">{{deactive}}</router-link>
     </div>
          <!-- <base-button
            :active-btn="active"
            :the-question="account"
            :deactive-btn="deactive"
            @click="submitForm"
          ></base-button> -->
        </div>
      </form>
    </template>

    <template #maps>
        <div class="header-map">
             <h3>حضور در مگا پراجکت ها</h3>
             <h5>فعال در تمامی ایران</h5>
        </div>


      <div>
        <svg
          class="iran-map"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="21.477px"
          height="21.478px"
          viewBox="0 0 21.477 21.478"
          style="enable-background: new 0 0 21.477 21.478"
          xml:space="preserve"
        >
          <g>
            <path
              style="fill: #f2ecec"
              d="M17.782,4.736c-2.172-1.708-4.248-1.705-6.36-0.141C9.248,6.203,5.35,4.935,4.904,2.339
		C4.702,1.158,4.373,1.303,3.708,1.802C2.775,2.503,1.91,2.79,1.095,1.652C0.871,1.342,0.623,1.396,0.317,1.618
		c-0.295,0.218-0.37,0.427-0.284,0.771C0.407,3.899,0.62,5.485,1.877,6.6c0.31,0.272,0.466,0.64,0.255,0.893
		C0.765,9.143,2.157,9.903,3.18,10.72c0.579,0.46,0.972,0.84,1.054,1.683c0.05,0.508,0.223,1.724,1.038,1.555
		c1.742-0.364,2.017,0.871,2.751,1.876c0.984,1.351,2.489,2.471,4.113,2.386c1.329-0.066,2.246-0.939,3.266,0.938
		c0.546,1.011,2.75,0.57,4.194,0.867c0.934,0.191,0.398-1.01,0.926-1.305c0.088-0.051,0.171-0.115,0.253-0.174
		c0.402-0.287,0.763-1.446,0.693-1.911c-0.064-0.415-0.307-0.552-0.61-0.773c-0.93-0.668-2.031-1.346-0.711-2.661
		c0.259-0.259,0.379-0.816-0.034-0.912c-1.441-0.326-0.783-1.525-1.035-2.321c-0.365-1.154,0.618-2.102,0.661-3.535
		C20.003,5.2,18.499,5.3,17.782,4.736z"
            />
          </g>
        </svg>
      </div>

      <div>
        <svg
          class="pagination"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 100 125"
          enable-background="new 0 0 100 100"
          xml:space="preserve"
        >
          <path
            d="M80.682,39.725c-5.675,0-10.274,4.601-10.274,10.275c0,5.675,4.6,10.275,10.274,10.275S90.957,55.675,90.957,50  C90.957,44.326,86.356,39.725,80.682,39.725z M56.293,39.725c-5.675,0-10.275,4.601-10.275,10.275  c0,5.675,4.601,10.275,10.275,10.275S66.568,55.675,66.568,50C66.568,44.326,61.968,39.725,56.293,39.725z M32.156,39.726H19.18  c-5.599,0-10.137,4.539-10.137,10.137C9.043,55.461,13.581,60,19.18,60h12.977c5.599,0,10.137-4.539,10.137-10.137  C42.293,44.265,37.755,39.726,32.156,39.726z"
          />
        </svg>
      </div>
    </template>
  </base-card>
</template>


<style scoped>
.form__header {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: .5rem;
  padding: 1rem 0;

}
p{
    font-size:2.5rem;
    font-weight: bold;
}
h4{
    color: gray;
    font-weight: 100;
}

.failed-authentication {
  font-size: 1.4rem;
  color: red;
  margin-bottom: 1rem;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.iran-map {
  fill: #f2ecec;
  width: 20rem;
  height: 20rem;
}
.pagination {
  fill: #f2ecec;
  width: 12rem;
  height: 6rem;
}
.form-field {
  position: relative;
  margin-bottom: 45px;
}
input {
  font-size: 1rem;
  padding: 0.5rem 0.1rem 0.5rem 0.2rem;
  width: 100%;
  border: none;
  border-bottom: 1px solid rgb(168, 166, 166);
  margin-top: .5rem;
}
input::placeholder {
  color: lightgray;
  font-size: 1rem;
  font-family: "Yekan";
}
input:focus {
  outline: none;
}

.header-map{
    margin-top: 3rem;
}
.forget-pass{
    margin-top: 1rem;
    color: lightgray;
    font-size:.6rem;
    text-align: left;
}



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
.btn{
    
     font-size: .9rem;

    text-align: center;
  padding-top: 0.5rem;
   border: none;
   text-decoration: none;
}
</style>
