<template v-slot:default="{ active, toggle }">
   <v-list-item color="primary">
     
    <v-list-item-action>
      <v-checkbox class="v-checkbox" color="teal" v-model="task.completado" @change="checked"></v-checkbox>
    </v-list-item-action>

    <v-list-item-content>
      <v-list-item-title>

        {{ task.descripcion }} 

        <v-chip :color="prioridad.colorbadge" x-small>{{ prioridad.text }}</v-chip>

      </v-list-item-title>
    </v-list-item-content>

    <v-list-item-icon>
      <v-icon color="red" @click="destroy">mdi-close</v-icon>
    </v-list-item-icon>

   </v-list-item>

</template>

<script>
export default {
	name: 'TaskItem',
  props: {
    pkey: {
      type: Number,
    },
    task: {
      type: Object,
      required: true,
    },
    prioridades:{
      type: Array,
      required: true,
    }
  },
  data(){
    return {}
  },
  methods: {
    destroy(){
      this.$emit('destroy', this.pkey)
    },
    checked(val){
      this.$emit('checked', val)
    }
  },
  computed: {
    prioridad(){
      return this.prioridades.find( p => p.id == this.task.prioridad );
    }
  }
}

</script>
