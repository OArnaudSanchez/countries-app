<template>
  <v-container>
    <Title :title="title" />
    <v-row no-gutters>
      <v-col cols="10" sm="2" v-for="(region, index) of Regions" :key="index">
        <Card :region="region" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "@/components/Card.vue";
import Title from "../components/Title.vue";
export default {
  name: "Regions",
  components: {
    Card,
    Title,
  },
  data() {
    return {
      title: "Regions",
      Regions: ["Americas", "Asia", "Europe", "Oceania"],
    };
  },
};
</script>
