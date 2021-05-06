<template>
  <v-footer
      color="primary"
      padless
  >
    <v-row
        justify="center"
        no-gutters
    >
      <v-btn
          v-for="(link,i) in links"
          :key="i"
          color="white"
          text
          rounded
          class="my-2"
          :href="link.url"
      >
        {{ link.title }}
      </v-btn>
      <v-col
          class="py-4 text-center white--text"
          cols="12"
      >
        <p>Powered by
          <v-icon color="green">mdi-vuejs</v-icon>
          &
          <span style="background-color: #512BD4; padding: 5px">.NET</span> | Made with
          <v-icon color="red"> mdi-heart</v-icon>
        </p>
        <p>2017 - {{ new Date().getFullYear() }} <strong>Gaein nidb | Gaein.cn</strong></p>
        <v-btn target="_blank" color="white" text href="https://beian.miit.gov.cn/">
          <v-icon color="green">mdi-shield-star</v-icon>
          冀ICP备17015375-1号
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import Axios from "axios";

export default {
  name: "FooterBar",
  methods: {
    getLinks() {
      Axios.get("https://static.cdn.gaein.cn/website_used/home_page_data.json")
          .then(response => {
            this.links = response.data.links;
          })
          .catch(error => {
            console.error(error);
          })
    }
  },
  data: () => ({
    links: []
  }),
  created() {
    this.getLinks();
  },
}
</script>