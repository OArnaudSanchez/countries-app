<template>
  <div>
    <v-card outlined tile class="p-2">
      <v-skeleton-loader
        class="mx-auto"
        max-width="300"
        type="card"
      ></v-skeleton-loader>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>
