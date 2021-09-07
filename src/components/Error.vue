<template>
  <v-container>
    <v-row>
      <v-col cols='12'>
        <v-container>
          <v-card>
            <v-card-title><h2>HTTP {{ status_code }}</h2></v-card-title>
            <v-card-subtitle>{{ message_body.msg }}</v-card-subtitle>
            <v-card-text>{{ message_body.details }}</v-card-text>
          </v-card>
        </v-container>

        <v-container>
          <v-card>
            <v-card-title>其它页面</v-card-title>
            <v-card-subtitle>看看有没有你感兴趣的吧</v-card-subtitle>
            <v-card-text>
              <v-row justify='start'>
                <v-col max-width='300px'>
                  <v-card
                      tile
                      elevation='0'
                      class='d-inline-flex'
                  >
                    <v-list>
                      <v-subheader>链接</v-subheader>
                      <v-list-item-group>
                        <v-list-item
                            v-for='(item, i) in links'
                            :key='i'
                        >
                          <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                          </v-list-item-icon>

                          <v-list-item-content>
                            <v-btn color='primary' plain :href='item.url'>{{ item.title }}</v-btn>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-container>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import Axios from 'axios';
import config from '../config';

export default {
  name: 'Error',
  data: () => ({
    keyword: '',
    status_code: null,
    message_body: {
      msg: '我也不知道发生了什么诶，唔...',
      details: '连错误信息都找不到啦，好像发生了很严重的错误诶，等会再来看看吧！'
    },
    links: []
  }),
  methods: {
    getData() {
      Axios.get(config.dataUrl)
          .then(response => {
            const response_data = response.data;
            this.message_body = response_data['codes'][this.status_code] ?? {
              msg: config.defaultMsg.msg,
              details: `我的存储器中并没有关于 HTTP ${this.status_code} 的记录，看来需要好好学习呢...`
            };
            console.log(this.message_body);
            this.links = response_data.links;
          })
          .catch(error => {
            console.log(error);
          });
    }


  },
  created() {
    this.status_code = this.$route.query['code'];
    document.title = (this.status_code ?? '未知') + '错误 | Gaein nidb 的网站';
    this.getData();
  }
}
</script>
