// import redux from 'redux'
var redux = require('redux')

console.log('redux starting up.............')


const stateDefault= {
    name : 'Anonymous',
    todos :[],
    day : Date().toLocaleString().slice(16, 24),
    movies : []
}

var newTodoId = 1;

const oldReducer = ( state = stateDefault, action) => {
    
    // console.log('New action ', action)
    switch(action.type){
        case 'CHANGE_NAME':
           return{
               ...state,
               name: action.name
           };
        case "CHANGE_SEARCH_TEXT":
            return {
                ...state,
                searchText : action.searchText
            }
        case "ADD_TODOS" :
            return {
                ...state,
                todos :[
                    ...state.todos,
                   { 
                        id: newTodoId++,
                        todo : action.todo
                    }
                ],
            } 
        case 'REMOVE_TODOS':
            return {
                ...state,
                todos : state.todos.filter((todo) => todo.id !== action.id)
            }    
        case 'ADD_MOVIES':
            return{
                ...state,
                movies :[
                   ...state.movies,
                   {
                    id: newTodoId++,
                    title: action.title,
                    genre: action.genre
                   }
                ]
            }       
        default:  
            return state; 
    }  
}

//name reducer
var nameReducer = (state = 'Anonymous', action) => {
    switch(action.type){
        case 'CHANGE_NAME':
           return action.name
        default :
           return state 
    }  
}
//combined reducer
const reducer = redux.combineReducers({
    name : nameReducer
})

const store = redux.createStore(reducer, redux.compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
));

// const currentState = store.getState();

// const action = {
//     type :'CHANGE_NAME',
//     name : "Dave"
// }
// store.dispatch(action)

const unsubscribe = store.subscribe( () => {
    let state = store.getState();

    // console.log('state is ', state);
    document.querySelector('.container').innerHTML = state.name;
    document.querySelector('.container2').innerHTML = state.searchText;
})
// unsubscribe();

setTimeout(() => {
    store.dispatch({
    type :'CHANGE_NAME',
    name : "Dave"   
})
console.log( store.getState())}, 2000)


setTimeout(() => {
    store.dispatch({
        type :'CHANGE_SEARCH_TEXT',
        searchText : "What is preact?"
})
console.log( store.getState())}, 4000)


setTimeout(() => {
    store.dispatch({
        type :'CHANGE_SEARCH_TEXT',
        searchText : "What is redux?"
    })
console.log( store.getState())}, 6000)
 

setTimeout(() => {
store.dispatch({
    type :'CHANGE_SEARCH_TEXT',
    searchText : "What is state?"
})
console.log( store.getState())}, 8000)


setTimeout(() => {
store.dispatch({
    type :'ADD_TODOS',
    todo : "learn"
});
console.log( store.getState())}, 10000)


setTimeout(() => {
store.dispatch({
    type :'ADD_TODOS',
    todo : "learn more"
})
console.log( store.getState())}, 12000)


setTimeout(() => {
store.dispatch({
    type :'ADD_TODOS',
    todo : "learn more dont stop"
});
console.log( store.getState())}, 14000)


//remove item action
setTimeout(() => {
    store.dispatch({
        type :'REMOVE_TODOS',
        id: 2
    })
console.log( store.getState())}, 24000)



setTimeout(() => {
store.dispatch({
    type :'ADD_MOVIES',
    title : "Madmax",
    genre:  'Action triller'
});
console.log( store.getState())}, 16000)


setTimeout(() => {
store.dispatch({
    type :'ADD_MOVIES',
    title : "Continum",
    genre:  'Action'
});
console.log( store.getState())}, 18000)



setTimeout(() => {
store.dispatch({
    type :'ADD_MOVIES',
    title : "Bright",
    genre:  'Action Scifi thriller'
});
console.log( store.getState())}, 20000)


