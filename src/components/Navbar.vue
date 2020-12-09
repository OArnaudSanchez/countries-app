<template>
  <div>
    <v-toolbar dark flat>
      <v-tabs dark height="65">
        <v-tab class="tab">
          <router-link
            class="v-btn v-btn--contained v-btn--router theme--dark v-size--default transparent"
            :to="{ name: 'Home' }"
            >Countries App</router-link
          >
        </v-tab>
        <v-tab>
          <router-link
            class="item-tab v-btn--active v-btn v-btn--contained v-btn--router theme--dark v-size--default transparent"
            :to="{ name: 'Countries', params: { code: 'All' } }"
            >Countries</router-link
          >
        </v-tab>
        <v-tab>
          <router-link
            class="item-tab v-btn--active v-btn v-btn--contained v-btn--router theme--dark v-size--default transparent"
            :to="{ name: 'Regions' }"
            >Regions</router-link
          >
        </v-tab>
      </v-tabs>
    </v-toolbar>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.tab {
  margin-left: 42px;
}
.item-tab {
  color: #fff;
  text-decoration: none;
}
</style>