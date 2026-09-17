<template>
  <v-app-bar
      app
      color='primary'
      dark
  >
    Gaein nidb
    <v-spacer/>
    <div class='d-none d-sm-flex'>
      <v-btn-toggle tile group>
      <v-btn v-for='(item,i) in links'
             text
             :href='item.url'
             :key='i'
      >
        <v-icon>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
      </v-btn-toggle>
    </div>
  </v-app-bar>

</template>

<script>
import { navigationLinks } from '../config';

export default {
  name: 'NavBar',
  data: () => ({
    links: navigationLinks,
  }),
}
</script>