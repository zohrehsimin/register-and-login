<template>
<section>
<div class="dashboard-landing">
  Some Content Here...
</div>
</section>
</template>

<script>
export default {
  name: "DashboardLanding"
}
</script>

<style scoped>
section{
  direction: ltr;
}
.dashboard-landing{
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to left, indianred, darkred);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  color: white;
}
</style>