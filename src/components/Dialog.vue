<template>
  <div>
    <div>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
            Know More
          </v-btn>
        </template>

        <v-card>
          <h4 class="title">
            {{ Data.name }}
          </h4>

          <v-avatar size="128">
            <img :src="Data.flag" :alt="Data.name" class="rounded-circle" />
          </v-avatar>

          <v-divider></v-divider>

          <v-subheader class="header">Basic Information</v-subheader>
          <v-subheader class="item">
            <p><strong>Country Code:</strong> {{ Data.alpha2Code }}</p>
          </v-subheader>
          <v-subheader class="item">
            <p><strong>Capital:</strong> {{ Data.capital }}</p>
          </v-subheader>
          <v-subheader class="item">
            <p>
              <strong> Currency:</strong> {{ Data.currencies[0].symbol }}
              {{ Data.currencies[0].code }} -
              {{ Data.currencies[0].name }}
            </p>
          </v-subheader>
          <v-subheader class="item">
            <p>
              <strong> Languages:</strong> {{ Data.languages[0].name }} -
              {{ Data.languages[0].nativeName }}
            </p>
          </v-subheader>

          <v-subheader class="calling header">Calling Codes</v-subheader>
          <v-card-text>
            <v-chip-group>
              <v-chip
                class="chip"
                v-for="(code, index) in Data.callingCodes"
                :key="index"
                >{{ code }}</v-chip
              >
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark @click="dialog = false">
              <span class="v-btn__content">Close</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: ["Data"],
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="scss" scoped>
template{
  background-color: #f5f5f5;
}
img {
  padding-bottom: 12px;
}
.title {
  padding-top: 15px;
  padding-bottom: 5px;
  font-size: 1.2rem;
}

.item p {
  font-size: 1rem;
  margin-top: -28px;
  padding-left: 12px;
}
.calling {
  margin-top: -10px;
}
.header {
  font-weight: bold;
  color: #353c42;
  font-size: 1.1rem;
}
</style>