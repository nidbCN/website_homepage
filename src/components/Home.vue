<template>
  <v-container>
    <v-container>
      <v-card>
        <v-img class="align-end" :aspect-ratio="3 / 2" width='inherit'
               src='https://img.cdn.gaein.cn/website_used/home/background.webp'>
          <v-card-title class="black" style="opacity: 0.6;">
            <span class="white--text">Gaein nidb 的小站</span>
          </v-card-title>
        </v-img>

        <v-card-subtitle class='text-h6'>
          记录&分享
        </v-card-subtitle>

        <v-card-text>
          <p>Gaein nidb的小站，今天也是精神C#人呢。</p>
        </v-card-text>
      </v-card>
    </v-container>

    <v-container v-for='(item, key) in content' :key='key'>
      <v-card>
        <v-card-title>
          {{ item.title }}
        </v-card-title>

        <v-card-text>
          <p v-for='(text, key2) in item.content_list' :key='key2' class="body-1">
            {{ text }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn color='blue' text href='https://www.gaein.cn/about'>
            <v-icon small>mdi-arrow-right</v-icon>
            MORE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
import { homeContent } from '../config';

export default {
  name: 'Home',
  created() {
    document.title = '首页 | Gaein nidb 的小站 —— 记录生活';
  },
  data: () => ({
    content: homeContent,
  }),
}
</script>
