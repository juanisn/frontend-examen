import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount } from "@vue/test-utils";
import TaskItem from "@/components/TaskItem.vue";

Vue.use(Vuetify);

const prioridades = [
    {
      "id": 1,
      "text": "Normal",
      "colorbadge": "amber lighten-4"
    },
    {
      "id": 2,
      "text": "Urgente",
      "colorbadge": "light-green accent-1"
    },
    {
      "id": 3,
      "text": "Importante",
      "colorbadge": "blue-grey lighten-3"
    }
];

describe('Componente TaskItem.vue', () => {

  it('Recibir las propiedades del componente', () => {

    let pkey = 1;

    let task = {
      "id": 1,
      "orden": 0,
      "completado": false,
      "descripcion": "Programar",
      "prioridad": 3
    };

    const wrapper = mount(TaskItem, {
      propsData: { pkey, task, prioridades }
    });

    expect(wrapper.props().pkey).toEqual(1);

  });

});