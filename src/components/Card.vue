<template>
  <v-card elevation="5">

    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    <v-card-text>
        <slot></slot>
    </v-card-text>

  </v-card>
</template>

<script>
  
export default {
  name: 'Card',
  props: {
    title: { 
      type: String, 
      default: '',  
    },
    subtitle: { 
      type: String, 
      default: '',  
    },
  },
}

</script>