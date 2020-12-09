<template>
  <v-container>
    <Title :title="title" />

    <template v-if="isLoading">
      <Loader />
    </template>
    <template v-else>
      <CardCountries :Countries="Countries" />
    </template>
  </v-container>
</template>

<script>
import Title from "@/components/Title.vue";
import CountriesServices from "@/services/CountriesServices.js";
import CardCountries from "@/components/CardCountries.vue";
import Loader from "@/components/Loader.vue";
export default {
  name: "Countries",
  components: {
    Title,
    CardCountries,
    Loader,
  },
  data() {
    return {
      title: "Top Country Population",
      Countries: [],
      countryCodeRequest: this.$route.params.code,
      isLoading: false,
    };
  },
  created() {
    if (this.countryCodeRequest === "All") {

      this.isLoading = true;
      CountriesServices.GetAllCountries()
        .then( (response) => {
          this.Countries = response.data.filter(
            (country) =>
              country.alpha2Code === "DO" || country.population > 100000000
          );

          this.isLoading = false;
        })
        .catch((error) => console.log(error));

    } else {
      this.isLoading = true;
      CountriesServices.GetAllCountriesByRegion(this.countryCodeRequest)
        .then((response) => {
          this.Countries = response.data;
          this.isLoading = false;
        })
        .catch((error) => console.log(error));
    }
  },
};
</script>