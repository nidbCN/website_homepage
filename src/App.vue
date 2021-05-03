<template>
  <v-app>
    <NavBar/>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: 'App',

  components: {
    NavBar,
  },
};
</script>
