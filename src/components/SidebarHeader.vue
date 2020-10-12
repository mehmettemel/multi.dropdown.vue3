<template>
  <div id="sidebar-header">
    <div class="logo"></div>
    <div class="name">Mehmet Temel</div>
    <div class="group">Admin</div>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

#sidebar-header{
  height: 250px;

  background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.logo{
  background: url('https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-position: center;
  background-size: cover;
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.name{
  font-size: 1.4rem;
}



</style>