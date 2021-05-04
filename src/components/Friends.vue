<template>
  <v-container>
    <v-container>
      <v-card>
        <v-card-title>朋友们</v-card-title>
        <v-card-subtitle>小伙伴的网站</v-card-subtitle>
        <v-card-text>
          <v-container>
            <v-row align="start">
              <v-col class="col-auto" v-for="(item,i) in links" :key="i">
                <v-card shaped width="300px">
                  <v-card-title>
                    <v-avatar>
                      <v-img :src="item.avatar"/>
                    </v-avatar>
                    <v-spacer/>
                    {{ item.title }}
                  </v-card-title>
                  <v-card-text>{{ item.description }}</v-card-text>
                  <v-card-actions>
                    <v-btn :href="item.url" color="blue" text>
                      去看看<v-icon>mdi-arrow-right-circle-outline</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-container>
    <v-container>
      <v-card>
        <v-card-title>添加友链</v-card-title>
        <v-card-subtitle>欢迎来互换友链咯</v-card-subtitle>
        <v-card-text>

        </v-card-text>
        <v-card-actions></v-card-actions>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import Axios from "axios";

export default {
  name: "Friends",
  created() {
    this.getLinks();
  },
  data: () => ({
    title: "",
    links: [
      {
        avatar: "",
        title: "",
        description: "",
        url: ""
      }
    ]
  }),
  methods: {
    getLinks() {
      Axios.get("https://static.cdn.gaein.cn/website_used/home_page_data.friends.json")
          .then(response => {
            this.links = response.data.links;
            document.title = response.data.title + " | Gaein nidb 的网站";
          })
          .catch(error => {
            console.error(error);
          })
    }
  }
}
</script>