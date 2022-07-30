import { Types } from './actions';

export const initialState = {
  toEdit: '',
  tasks: [],
};

export const reducerTodo = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_TASKS: {
      return {
        toEdit: '',
        tasks: action.payload,
      };
    }
    case Types.ADD_TASK: {
      let newState;
      const existingTask = state.tasks.find((task) => task.id === action.payload.id);
      if (existingTask) {
        newState = {
          toEdit: '',
          tasks: state.tasks.map((task) => {
            if (task.id === action.payload.id) {
              return { ...task, title: action.payload.title };
            }
            return task;
          }),
        };
      } else {
        newState = { ...state, tasks: [action.payload, ...state.tasks] };
      }
      localStorage.setItem('tasks', JSON.stringify(newState.tasks));
      return newState;
    }
    case Types.DELETE_TASK: {
      localStorage.setItem(
        'tasks',
        JSON.stringify(state.tasks.filter((task) => task.id !== action.payload))
      );
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    }
    case Types.DELETE_TODO: {
      localStorage.removeItem('tasks');
      return initialState;
    }
    case Types.EDIT_TASK:
      return { ...state, toEdit: action.payload };

    default:
      return state;
  }
};
