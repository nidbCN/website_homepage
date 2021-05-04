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
                      去看看
                      <v-icon>mdi-arrow-right-circle-outline</v-icon>
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
        <v-card-subtitle>欢迎巨佬们来互换友链哦</v-card-subtitle>
        <v-card-text>
          <v-form>
            <v-container>
              <v-card
                  max-width="800"
                  class="mx-auto"
              >
                <v-card-text>
                  <v-container>
                    <v-text-field v-model="user_link.url" prepend-icon="mdi-link" @blur="autoInputTitle" label="网站链接"/>
                    <v-text-field v-model="user_link.title" prepend-icon="mdi-pen" label="网站标题"/>
                    <v-text-field v-model="user_link.description" prepend-icon="mdi-card-text" label="网站简介"/>
                    <v-text-field v-model="user_link.avatar" prepend-icon="mdi-account-edit" label="头像链接"/>
                    <v-text-field v-model="user_link.mail" prepend-icon="mdi-mail" label="邮箱地址"/>
                  </v-container>

                </v-card-text>

                <v-card-actions>
                  <v-container>
                    <v-btn class="mr-4" color="success">
                      <v-icon>mdi-send</v-icon>
                      提交网站信息
                    </v-btn>
                    <v-btn color="error" class="mr-4">
                      <v-icon>mdi-refresh</v-icon>
                      重置表单
                    </v-btn>
                    <v-btn text color="primary">其它请发邮件到 mail@gaein.cn</v-btn>
                  </v-container>
                </v-card-actions>

              </v-card>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import Axios from "axios";
import HtmlParser from "htmlparser";

export default {
  name: "Friends",
  created() {
    this.getLinks();
  },
  data: () => ({
    user_link: {
      avatar: "",
      title: "",
      description: "",
      url: "",
      mail: ""
    },
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
    autoInputTitle() {
      console.log("HERE");
      Axios.get(this.user_link.url)
          .then(response => {
            const html = response.data;

            let handler = new HtmlParser.DefaultHandler((error,dom)=>{
              if(error){
                console.error(error);
              } else {
                console.log(dom);
              }
            });

            let parser = new HtmlParser.Parser(handler);
            parser.parseComplete(html);

            console.log(handler.dom);
          })
          .catch(error => {
            console.error(error);
          })
    },
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