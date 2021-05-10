<template>
  <v-container>
    <v-container>
      <v-card>
        <v-img
            class="white--text align-end"
            height="500px"
            src="https://img.cdn.gaein.cn/website_used/home/background.webp"
        >
          <v-card-title>Gaein nidb 的小站</v-card-title>
        </v-img>

        <v-card-subtitle class="text-h6">
          记录&分享
        </v-card-subtitle>

        <v-card-text>
          <div>
            <p>Gaein nidb的小站，今天也是精神C#人呢。</p>
          </div>
        </v-card-text>
      </v-card>
    </v-container>

    <v-container
        v-for="(item, key) in content"
        :key="key">
      <v-card>
        <v-card-title>
          {{ item.title }}
        </v-card-title>

        <v-card-text>
          <p
              v-for="(text,key2) in item.content_list"
              :key="key2"
          >
            {{ text }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn
              color="blue"
              text
              href="https://www.gaein.cn/about"
          >
            <v-icon small>mdi-arrow-right</v-icon>
            MORE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import Axios from "axios";

export default {
  name: "Home",
  created() {
    this.getData();
  },
  methods: {
    getData() {
      Axios.get("https://static.cdn.gaein.cn/website_used/home_page_data.home.json")
          .then(response => {
            this.content = response.data.content;
            document.title = response.data.title + " | Gaein nidb 的小站 —— 记录生活";
          })
          .catch(error => {
            console.error(error);
          })
    }
  },
  data: () => ({
    content: [
      {
        title: "GAEIN.CN",
        content_list: [
          "Gaein nidb 的个人网站，搭建于2017年，记录和分享有趣的事情以及编程技术。",
        ],
      },
    ],
  }),
}
</script>
