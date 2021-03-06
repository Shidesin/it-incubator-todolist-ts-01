import {applyMiddleware, combineReducers, createStore} from 'redux';
import {tasksReducer} from './tasks-reduser';
import {todoListReducer} from './todolist-reduser';
import thunk from 'redux-thunk';
import {appReducer} from './appReducer';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todoListReducer,
    app: appReducer
})

// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunk));

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;