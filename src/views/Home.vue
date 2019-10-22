<template>
  <v-container>
    <v-row>
      <v-col md="6" offset-md="3">

        <Card :title="appName" :subtitle="subtitle">

          <v-list two-line subheader>

            <v-list-item>
              <v-list-item-content>

                <v-text-field
                  label="Descripción"
                  dense
                ></v-text-field>

              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>

                <v-select
                  :items="items"
                  v-model="defaultSelected"
                  label="Prioridad"
                  dense
                ></v-select>

              </v-list-item-content>
            </v-list-item>

          </v-list>

         <v-divider></v-divider>

          <v-list subheader two-line flat>

            <v-subheader>Lista de tareas</v-subheader>

            <v-list-item-group multiple>
              
                <task-item></task-item>

            </v-list-item-group>

          </v-list>
        </Card>

      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import Card from '@/components/Card.vue';
import TaskItem from '@/components/TaskItem.vue';
import axios from 'axios';

const baseURL = "http://localhost:3000/todos"

const options = ['Normal', 'Urgente', 'Importante'];

export default {
  name: 'Home',
  components: {
    Card, TaskItem
  },
  data(){
    return {
      subtitle: 'Describa la tarea y eliga la prioridad',
      items: options,
      defaultSelected: options[0],
      tasks: [],
    }
  },
  async created() {
    try {

      const res = await axios.get(baseURL)

      this.tasks = res.data;

    } catch(e) {
      console.error('El servidor no ha respondido')
    }
  },
  methods: {
    destroyTask(){

    } 
  }
};

</script>
