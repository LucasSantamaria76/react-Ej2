import { Types } from './actions';

export const initialState = {
  toEdit: '',
  tasks: [],
};

export const reducerTodo = (state = initialState, action) => {
  switch (action.type) {
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
      return newState;
    }
    case Types.DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    case Types.DELETE_TODO:
      return initialState;
    case Types.EDIT_TASK:
      return { ...state, toEdit: action.payload };

    default:
      return state;
  }
};
