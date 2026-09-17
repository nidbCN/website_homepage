<template>
  <v-container>
    <v-container
        v-for='(item,key) in this.content'
        :key='key'
    >
      <v-card>
        <v-card-title>{{ item.title }}</v-card-title>

        <v-card-text>
          <div>
            <p v-for='(text,key) in item.content_list' :key='key'>{{ text }}</p>
          </div>

          <v-divider/>
          <p class="text-h6">时间线</p>

          <v-sheet>
            <v-container>
              <v-timeline align-top>
                <v-timeline-item
                    fill-dot
                    v-for='(line_item,key) in item.timeline'
                    :key='key'
                    :icon='line_item.icon'
                    :color='line_item.color'
                >
                  <v-card
                      :color='line_item.color'
                      dark
                  >
                    <v-card-title class="text-h6">
                      {{ line_item.title }}
                    </v-card-title>
                    <v-divider/>
                    <v-card-text class='white'>
                      <p class='text-justify text--primary'>{{ line_item.content }}</p>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-container>
          </v-sheet>
        </v-card-text>
      </v-card>
    </v-container>

    <v-container>
      <v-card>

        <v-card-title>
          {{ this.info.title }}
        </v-card-title>

        <v-card-text>
          <div v-for='(info_item,key) in this.info.content' :key="key">
            <v-divider/>
            <p class="text-h6">{{ info_item.title }}</p>

            <v-expansion-panels>
              <v-expansion-panel
                  v-for='(info_detail,detail_key) in info_item.content'
                  :key='detail_key'
              >
                <v-expansion-panel-header>
                  {{ info_detail.title }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{ info_detail.content }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>

        </v-card-text>

      </v-card>
    </v-container>

  </v-container>
</template>

<script>
import { aboutContent, aboutInfo } from '../config';

export default {
  name: 'About',
  data: () => ({
    info: aboutInfo,
    content: aboutContent,
  }),
  created() {
    document.title = '关于 | Gaein nidb 的小站 —— 记录生活';
  },
}
</script>