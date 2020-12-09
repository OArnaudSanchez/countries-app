<template>
  <div>
    <v-hover close-delay="87">
      <v-card elevation="24" shaped class="tarjeta" width="291">
        <v-card-title>{{ region.toUpperCase() }}</v-card-title>

        <v-card-text> See more Information about {{ region }} </v-card-text>

        <v-btn
          color="red lighten-2"
          style="margin: 10px;"
          dark
          @click="GoPage(region)"
        >
          <span class="v-btn__content"> See More </span>
        </v-btn>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import router from "@/router/index.js";
export default {
  name: "Card",
  props: ["region"],
  methods: {
    GoPage(page) {
      if (page === "All Countries") {
        router.push({ name: "Countries", params: { code: "All" } });
      } else {
        router.push({ name: "Countries", params: { code: page } });
      }
    },
  },
};
</script>