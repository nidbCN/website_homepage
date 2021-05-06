<template>
  <v-container>
    <v-container>
      <v-card>
        <v-card-title>朋友们</v-card-title>
        <v-card-subtitle>小伙伴的网站</v-card-subtitle>
        <v-card-text>
          <v-container>
            <v-row justify="space-between" align="start">
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
                    <v-btn target="_blank" :href="item.url" color="blue" text>
                      去看看
                      <v-icon>mdi-arrow-right-circle-outline</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <v-container>
            <v-alert
                border="top"
                colored-border
                type="warning"
                elevation="1"
            >
              <div>以“好耶，”开头的说明为我自行添加，部分网站的说明由于排版原因进行了缩减。</div>
              <div>出于访问速度考虑，所有的头图均使用了原图在我服务器上的128x128副本。</div>
              <div>如有更新或其它请发邮件
                <v-btn small text color="primary">MAIL@GAEIN.CN</v-btn>
              </div>
            </v-alert>
          </v-container>
        </v-card-text>
      </v-card>
    </v-container>
    <v-container>
      <v-card>
        <v-card-title>添加友链</v-card-title>
        <v-card-subtitle>欢迎巨佬们来互换友链哦</v-card-subtitle>
        <v-card-text>
          <v-container>
            <v-alert
                border="top"
                colored-border
                type="error"
                elevation="1"
            >
              <div>表单暂不可用，还请烦劳发邮件到
                <v-btn small text color="primary">MAIL@GAEIN.CN</v-btn>
              </div>
            </v-alert>
          </v-container>

          <v-container>
            <v-alert
                border="top"
                colored-border
                type="info"
                elevation="1"
            >
              <div>

                <v-list>
                  本站信息：
                  <v-list-group>

                    <v-list-item-title>test</v-list-item-title>
                  </v-list-group>
                </v-list>
              </div>
            </v-alert>
          </v-container>

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
                        提交
                      </v-btn>
                      <v-btn color="error" class="mr-4">
                        <v-icon>mdi-refresh</v-icon>
                        重置
                      </v-btn>
                      <v-btn href="mailto:mail@gaein.cn" text color="primary">
                        <v-icon>mdi-email-send</v-icon>
                        其它情况请发送邮件
                      </v-btn>
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
      Axios.get(this.user_link.url)
          .then(response => {
            const html = response.data;

            let handler = new HtmlParser.DefaultHandler((error) => {
              if (error) {
                console.error(error);
              }
            });
            const parser = new HtmlParser.Parser(handler);
            parser.parseComplete(html);

            const block_tags = handler.dom;
            for (let i = 0; i < block_tags.length; i++) {
              if (block_tags[i]["name"] === "html") {
                const head_tags = block_tags[i]["children"];

                for (let j = 0; j < head_tags.length; j++) {
                  if (head_tags[j]["name"] === "head") {
                    const attr_tags = head_tags[j]["children"];

                    for (let k = 0; k < attr_tags.length; k++) {

                      if (attr_tags[k]["name"] === "title") {
                        console.log(attr_tags[k]["children"]);
                        this.user_link.title = attr_tags[k]["children"][0]["data"];
                      }
                    }
                  }
                }
              }
            }
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