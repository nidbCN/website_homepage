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
import NavBar from '@/components/NavBar';
import FooterBar from '@/components/FooterBar';


export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar
  },
};
</script>

<style scoped>
@font-face {
  font-family: 'GlowSansSC';
  src: url('https://static.cdn.gaein.cn/fonts/GlowSansSC-Normal-Regular.otf');
}

.v-application {
  font-family: 'GlowSansSC',sans-serif !important;
}


</style>