<template>
  <v-app-bar
      app
      color="primary"
      dark
  >
    <v-icon>Gaein nidb</v-icon>
    <v-spacer/>
    <v-btn v-for="(item,i) in links"
           text
           :href="item.url"
           :key="i">

      <v-icon>{{ item.icon }}</v-icon>
      {{ item.title }}
    </v-btn>
  </v-app-bar>

</template>

<script>
import Axios from "axios";

export default {
  name: "NavBar",
  data: () => ({
    title: "",
    links: [],
  }),
  methods:{
    getLinks() {
      Axios.get("https://static.cdn.gaein.cn/website_used/home_page_data.json")
      .then(response => {
        this.links = response.data.links;
        this.title = response.data.title;
      })
      .catch(error => {
        console.error(error);
      })
    }
  },
  created() {
    this.getLinks();
  }
}
</script>