<template>
  <v-app>
    <NavBar/>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>

    <FooterBar/>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import FooterBar from "@/components/FooterBar";


export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar
  },
};
</script>
