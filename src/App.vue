<template>
  <div>
    <NavBar />
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  name: "App",

  components: {
    NavBar,
    Footer,
  }
};
</script>

<style >
html{
  font-family: 'Lato', sans-serif, 'raleway';
  background: #f5f5f5;
}
.tarjeta {
  
  margin: 14px 10px;
}
.card-title {
  padding-bottom: 1px;
}
h1 {
  padding-left: 10px;
}
</style>