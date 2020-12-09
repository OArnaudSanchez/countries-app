<template>
  <div>
    <v-footer class="footer" dark padless>
      <v-card
        flat
        tile
        height="80"
        class="indigo lighten-1 white--text text-center"
      >
        <v-card-text class="white--text pt-0">
          <span>This app is powered by the <a class="enlace" href="https://restcountries.eu/" target="_alt"
            >Rest Countries API</a
          >
          Created by</span> 
          
          <span
            ><a href="https://github.com/OArnaudSanchez" target="_alt"
              ><i class="fa fa-github-square fa-2x" aria-hidden="true"></i
            ></a>
          </span>
          <span
            ><a href="https://www.linkedin.com/in/OArnaudSanchez" target="_alt"
              ><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a
          ></span>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.white--text {
  width: 100%;
  height: 100%;
}

.white--text .enlace, span, i{
  color: #f5f5f5;
}

span i {
  padding-left: 5px;
  padding-top: 10px;
} 

.footer {
  position: fixed;
  bottom: 0;
  height: 80px;
  width: 100%;
}
</style>