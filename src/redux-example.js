// import redux from 'redux'
var redux = require('redux')

console.log('redux starting up...')


// const stateDefault= {
//     name : 'Anonymous',
//     todos :[],
//     day : Date().toLocaleString().slice(16, 24),
//     movies : []
// }

let newTodoId = 1;
let newMovieId = 1;

// const oldReducer = ( state = stateDefault, action) => {
    
    // console.log('New action ', action)
//     switch(action.type){
//         case 'CHANGE_NAME':
//            return{
//                ...state,
//                name: action.name
//            };
//         case "CHANGE_SEARCH_TEXT":
//             return {
//                 ...state,
//                 searchText : action.searchText
//             }
//         case "ADD_TODOS" :
//             return {
//                 ...state,
//                 todos :[
//                     ...state.todos,
//                    { 
//                         id: newTodoId++,
//                         todo : action.todo
//                     }
//                 ],
//             } 
//         case 'REMOVE_TODOS':
//             return {
//                 ...state,
//                 todos : state.todos.filter((todo) => todo.id !== action.id)
//             }    
//         case 'ADD_MOVIES':
//             return{
//                 ...state,
//                 movies :[
//                    ...state.movies,
//                    {
//                     id: newTodoId++,
//                     title: action.title,
//                     genre: action.genre
//                    }
//                 ]
//             }       
//         default:  
//             return state; 
//     }  
// }

//name reducer
var nameReducer = (state = 'Anonymous', action) => {
    switch(action.type){
        case 'CHANGE_NAME':
           return action.name
        default :
           return state 
    }  
}
//name action generator
const nameAction = (value) => {
    return {
        type : 'CHANGE_NAME',
        name : value
    }
}

//ChangeText reducer
var searchTextReducer = (state = '', action) => {
    switch(action.type){
        case 'CHANGE_SEARCH_TEXT':
           return action.searchText
        default :
           return state 
    }  
}
//change searchtext action generator
const changeSearchAction = (value) => {
    return {
        type : 'CHANGE_SEARCH_TEXT',
        searchText : value
    }
}

// Todo reducer
var todoReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_TODOS" :
            return  [
                ...state,
                { 
                    id: newTodoId++,
                    todo : action.todo
                }
            ]
        case 'REMOVE_TODOS':
            return state.filter((todo) => todo.id !== action.id)   
        default :
           return state 
    }   
}
//addtodo action generator
const addTodoAction = (value) => {
    return {
        type : 'ADD_TODOS',
        todo : value
    }
}
//removetodo action generator
const removeTodoAction = (value) => {
    return {
        type : 'REMOVE_TODOS',
        id : value
    }
}



// Movie reducer
var movieReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_MOVIES" :
            return  [
                ...state,
                { 
                    id: newMovieId++,
                    title : action.title,
                    genre: action.genre
                }
            ]
        case 'REMOVE_MOVIE':
            return state.filter((movie) => movie.id !== action.id)   
        default :
           return state     
    }   
}
//addtodo action generator
const addMovieAction = (value) => {
    return {
        type : 'ADD_MOVIES',
        title : value.title,
        genre : value.genre
    }
}
//removetodo action generator
const removeMovieAction = (value) => {
    return {
        type : 'REMOVE_MOVIE',
        id : value
    }
}



//combined reducer
const reducer = redux.combineReducers({
    name : nameReducer,
    todos: todoReducer,
    searchText : searchTextReducer,
    movies : movieReducer
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
    // store.dispatch({
    //     type :'CHANGE_NAME',
    //     name : "Dave"   
    // })
    store.dispatch(nameAction('Dave'))
    console.log( store.getState())
}, 2000)


setTimeout(() => {
    // store.dispatch({
    //     type :'CHANGE_SEARCH_TEXT',
    //     searchText : "What is preact?"
    // })
    store.dispatch(changeSearchAction('What is redux?'))
    console.log( store.getState())
}, 4000)


// setTimeout(() => {
//     store.dispatch({
//         type :'CHANGE_SEARCH_TEXT',
//         searchText : "What is redux?"
//     })
// console.log( store.getState())}, 6000)
 

// setTimeout(() => {
// store.dispatch({
//     type :'CHANGE_SEARCH_TEXT',
//     searchText : "What is state?"
// })
// console.log( store.getState())}, 8000)


setTimeout(() => {
    // store.dispatch({
    //     type :'ADD_TODOS',
    //     todo : "learn"
    // })
    store.dispatch(addTodoAction('Learn redux'))
    console.log( store.getState())
}, 6000)

//remove item action
setTimeout(() => {
    // store.dispatch({
    //     type :'REMOVE_TODOS',
    //     id: 2
    // })
    store.dispatch(removeTodoAction(2))
    console.log( store.getState())
}, 8000)




// setTimeout(() => {
// store.dispatch({
//     type :'ADD_TODOS',
//     todo : "learn more"
// })
// console.log( store.getState())}, 12000)


// setTimeout(() => {
// store.dispatch({
//     type :'ADD_TODOS',
//     todo : "learn more dont stop"
// });
// console.log( store.getState())}, 14000)





setTimeout(() => {
    // store.dispatch({
    //     type :'ADD_MOVIES',
    //     title : "Madmax",
    //     genre:  'Action triller'
    // });
    store.dispatch(addMovieAction({ title : "mad max", genre: 'Action thriller'}))
    console.log( store.getState())
}, 10000)

setTimeout(() => {
    // store.dispatch({
    //     type :'ADD_MOVIES',
    //     title : "Madmax",
    //     genre:  'Action triller'
    // });
    store.dispatch(removeMovieAction(2))
    console.log( store.getState())
}, 12000)



// setTimeout(() => {
// store.dispatch({
//     type :'ADD_MOVIES',
//     title : "Continum",
//     genre:  'Action'
// });
// console.log( store.getState())}, 18000)



// setTimeout(() => {
// store.dispatch({
//     type :'ADD_MOVIES',
//     title : "Bright",
//     genre:  'Action Scifi thriller'
// });
// console.log( store.getState())}, 20000)


// //remove item action
// setTimeout(() => {
//     store.dispatch({
//         type :'REMOVE_MOVIE',
//         id: 2
//     })
// console.log( store.getState())}, 26000)


