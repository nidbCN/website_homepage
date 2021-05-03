<template>
  <v-container>
    <v-container
        v-for="(item,key) in this.content"
        :key="key">
      <v-card>
        <v-card-title>{{ item.title }}</v-card-title>

        <v-card-text>
          <div>
            <p v-for="(text,key) in item.content_list" :key="key">{{ text }}</p>
          </div>

          <v-divider/>

          <p class="text-h5">时间线</p>

          <v-card
              elevation="0"
              class="mx-auto"
              max-width="800"
          >
            <v-container>
              <v-timeline align-top>
                <v-timeline-item
                    fill-dot
                    v-for="(line_item,key) in item.timeline"
                    :key="key"
                    :icon="line_item.icon"
                    :color="line_item.color"
                >
                  <v-card
                      :color="line_item.color"
                      dark
                  >
                    <v-card-title class="text-h5">
                      {{ line_item.title }}
                    </v-card-title>
                    <v-divider/>
                    <v-card-text class="white">
                      <p class="text-justify text--primary">{{ line_item.content }}</p>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-container>
          </v-card>
        </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import Axios from "axios";

export default {
  name: "About",
  data: () => ({
    title: "",
    content: [
      {
        title: "关于我",
        content_list: [
          "河北唐山人，中北大学大一学生，学习计算机专业。",
        ],
        timeline: [
          {
            icon: "mdi-flag",
            color: "red",
            title: "ERROR NO DATA",
            content: ""
          }
        ]
      },
    ],
  }),
  created() {
    this.getData();
  },
  methods: {
    getData() {
      Axios.get("https://static.cdn.gaein.cn/website_used/home_page_data.about.json")
          .then(response => {
            this.content = response.data.content;
            document.title = response.data.title + " | Gaein nidb 的网站";
          })
          .catch(error => {
            console.error(error);
          })
    }
  },
}
</script>