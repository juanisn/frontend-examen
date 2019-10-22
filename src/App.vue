<template>
  <v-app>
    <v-app-bar app color="teal" dark>{{ appName }}</v-app-bar>
    <v-content>
      <home />
    </v-content>
  </v-app>
</template>

<script>
import Home from '@/views/Home.vue';


export default {
  name: 'App',
  components: { 
    Home
  },
  data: () => ({
    //
  }),
};
</script>
