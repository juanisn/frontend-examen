<template>
  <v-menu bottom left>
    <template v-slot:activator="{ on }">
      <v-btn icon color="teal" v-on="on">
        <v-icon>mdi-sort</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item-group v-model="sort" mandatory color="teal">
        <v-list-item
          v-for="(item, i) in orders"
          :key="i"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    name: 'MenuOrder',
    props: ['orders'],
    data(){
      return {
        sort: 0
      }
    },
    created(){
      this.sort = this.orders.map(v => v.selected).indexOf(1);
    },
    watch: {
      sort(val){
        this.$emit('selectedOrder', val);
      }
    },
  }

</script>