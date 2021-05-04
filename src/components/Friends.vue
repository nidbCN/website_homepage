<template>
  <v-container>
    <v-container>
      <v-card>
        <v-card-title>朋友们</v-card-title>
        <v-card-text>

        </v-card-text>
      </v-card>
    </v-container>
    <v-container>
      <v-card>
        <v-card-title>添加友链</v-card-title>
        <v-card-subtitle>欢迎来互换友链咯</v-card-subtitle>
        <v-card-text></v-card-text>
        <v-card-actions></v-card-actions>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Friends",
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
}
</script>