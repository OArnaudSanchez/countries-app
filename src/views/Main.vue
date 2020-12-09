<template>
  <div>
    <v-container class="grey lighten-5">
      <Title :title="title" />
      <div>
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="4"
            v-for="(region, index) of RegionsOrderedByName"
            :key="index"
          >
            <Card :region="region" />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Title from "@/components/Title.vue";
export default {
  name: "Main",
  components: {
    Card,
    Title,
  },
  data() {
    return {
      title: "The World Countries App",
      regions: ["Americas", "Asia", "Europe", "Oceania", "All Countries"],
    };
  },

  computed: {
    RegionsOrderedByName() {
      return this.regions.sort();
    },
  },
};
</script>
