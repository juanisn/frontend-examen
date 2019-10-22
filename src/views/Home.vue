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
                  v-model="newTask" 
                  @keyup.enter="addTask"
                ></v-text-field>

              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>

                <v-select
                  :items="prioridades"
                  v-model="defaultSelected"
                  item-text="text"
                  item-value="id"
                  label="Prioridad"
                  dense
                ></v-select>

              </v-list-item-content>
            </v-list-item>

          </v-list>

         <v-divider></v-divider>

          <v-list subheader two-line>

          <v-row>
            <v-col md="6">
              <v-subheader>
                Lista de tareas

              </v-subheader>
            </v-col>

          </v-row>

               <v-row align="center" justify="center">
                  <v-btn-toggle v-model="filter" tile color="teal" group>

                    <v-btn value="todos">Todos</v-btn>
                    <v-btn value="pendientes">Pendientes</v-btn>
                    <v-btn value="completados">Completados</v-btn>


                   </v-btn-toggle>
                </v-row>

                 <task-item 
                    v-for="(task, index) in tasksFilter" 
                    :key="index" 
                    :pkey="index" 
                    :task="task" 
                    :prioridades="prioridades"
                    @destroy="destroyTask"
                    ></task-item>

            <v-subheader>Quedan {{ remaining }} tareas pendientes</v-subheader>

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

const baseTareas = "http://localhost:3000/todos"
const basePriori = "http://localhost:3000/prioridades"

export default {
  name: 'Home',
  components: {
    Card, TaskItem
  },
  data(){
    return {
      subtitle: 'Describa la tarea y eliga la prioridad',
      defaultSelected: 1,
      autoincrement_id: 4,
      newTask: '',
      filter: 'todos',
      tasks: [],
      prioridades: [],
      orders: ['Alfabéticamente', 'Por prioridad'],
      orderSelected: 0
    }
  },
  methods: {
    addTask(){
      if (this.newTask.trim().length == 0) return;

      this.tasks.push({
        id: this.autoincrement_id,
        descripcion: this.newTask,
        prioridad: this.defaultSelected,
        orden: 4,
        completado: false,
      })

      this.autoincrement_id++;
      this.newTask = ''; 
    },
    destroyTask(id){
      this.tasks.splice(id, 1)
    }
  },
  computed: {
    remaining(){
      return this.tasks.filter( t => !t.completado ).length;
    },
    tasksFilter(){

      if(this.filter == 'todos')       return this.tasks;
      if(this.filter == 'pendientes')  return this.tasks.filter( t => !t.completado );
      if(this.filter == 'completados') return this.tasks.filter( t => t.completado );

    },
  },
  async created() {
    try {

      const tasks  = await axios.get(baseTareas)
      const priori = await axios.get(basePriori)

      this.tasks = tasks.data;
      this.prioridades = priori.data;

    } catch(e) {
      console.error('El servidor no ha respondido')
    }
  },
};

</script>
