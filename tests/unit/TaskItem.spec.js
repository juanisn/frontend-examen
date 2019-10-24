import Vue from 'vue';
import Vuetify from 'vuetify';
import TaskItem from "@/components/TaskItem.vue";
import { mount  } from "@vue/test-utils";


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

const pkey = 1;

let task = {
  "id": 2,
  "orden": 0,
  "completado": false,
  "descripcion": "Programar",
  "prioridad": 3
};


describe('Componente TaskItem.vue', () => {

  let wrapper;

   beforeEach(() => {
      Vue.use(Vuetify);

      wrapper = mount(TaskItem, {
        Vue,
        propsData: { pkey, task, prioridades }
      });
  });

  it('Verificar que las propiedades tengan los datos suministrados', () => {

    expect(wrapper.props().pkey).toEqual(pkey);

    expect(wrapper.props().task.id).toEqual(task.id); 

    expect(wrapper.props().prioridades.length).toEqual(prioridades.length);

  });

  it("Darle check a una tarea y emitir el evento", () => {

    let auxCompletado = task.completado;

    let check = wrapper.find('input[type="checkbox"]').setChecked(); 

    /* Verificar que el booleano original efectivamente tuvo un cambio con el evento change que tiene el checkbox */

    expect(wrapper.emitted('checked')).toEqual([[ !auxCompletado ]])

  })

  it('Eliminar una tarea y emitir el evento con la pkey de la tarea', () => {

    const stub = jest.fn() // Función simulada

    wrapper.vm.$on('destroy', stub)
    wrapper.vm.destroy()

    expect(wrapper.emitted('destroy')).toEqual([[ pkey ]])
  })

  it('Obtener el texto de la prioridad de la tarea actual', () => {

    expect(wrapper.vm.prioridad.text).toBe("Importante");

  })


});