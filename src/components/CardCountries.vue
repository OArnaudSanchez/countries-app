<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="3" v-for="country of Countries" :key="country.id">
        <v-card class="tarjeta" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img width="265" height="200" :src="country.flag"></v-img>

          <v-card-title
            ><strong>{{ country.name }}</strong></v-card-title
          >

          <v-divider></v-divider>

          <v-card-title class="card-title"
            >Capital: {{ country.capital }}</v-card-title
          >
          <v-card-title class="card-title"
            >Region: {{ country.region }}</v-card-title
          >
          <v-card-title class="card-title"
            >Population:
            {{ country.population | PopulationFilter }}</v-card-title
          >

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text>
              <Dialog data-app :Data="country" />
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Dialog from "@/components/Dialog";
export default {
  name: "CardCountries",
  props: ["Countries"],
  components: {
    Dialog,
  },
  filters: {
    PopulationFilter(population) {
      return new Intl.NumberFormat("de-DE").format(population);
    },
  },
};
</script>
