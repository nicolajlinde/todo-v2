import {defineStore} from 'pinia'
import {ref, computed} from "vue";

interface State {
    tasks: string[]
}

export const useTodoListStore = defineStore('todo', () => {
    // States
    const tasks = ref(['Need to clean my room', 'Eat a healthy lunch'])

    // Getters


    // Actions
    function addTask(task: String) {
        tasks.value.push(task)
    }

    return {tasks}
})