
export const toDoAction = {
    addToDo,
    onChangeProps,
    toggleToDo,
    deleteToDo,
};

// handle onchange event
function onChangeProps(props){
    debugger;
    return dispatch =>{
        dispatch(handleOnChangeProps(props));
    }
}
// handle add to do list event
function addToDo(props){
   
    return dispatch =>{
        dispatch(handleAddToDo(props));
    }
}
// handle toogle todo event
function toggleToDo(props){
   
    return dispatch =>{
        dispatch(handleToggleToDo(props));
    }
}
// handle delete todo event
function deleteToDo(props){
   
    return dispatch =>{
        dispatch(handleDeleteToDo(props));
    }
}



// export handle on change props
export function handleOnChangeProps(props){
    debugger
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
    }
}
// add to do 
export function handleAddToDo(props){
    return{
        type: "HANDLE_ADD_TODO",
    }
}

// toogle to do 
export function handleToggleToDo(props){
    return{
        type: "HANDLE_TOGGLE_TODO",
        props:props
    }
}
// delete to do 
export function handleDeleteToDo(props){
    return{
        type: "HANDLE_DELETE_TODO",
        props:props
    }
}


