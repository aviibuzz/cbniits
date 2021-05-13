const initialState = { 
    toDoList: [{
    id: 0,
    name: 'Write To Do Application',
    isActive:true,
    status:true,
    isComplete:true,
    isDeleteButton:true,
    isUpdateField:false
    }],
    id: '',
    name: '',
    isActive:true,
    status:true,
   
};
export default function todoReducer(state = initialState, action){

    switch (action.type) {
            case "HANDLE_ON_CHANGE":
                return {
                    ...state,
                    name: action.props
                };
                 case "HANDLE_ADD_TODO":
                
                     let tempToDo=true;
                     if(state.toDoList.length>0)
                     for(let i=0;i<state.toDoList.length;i++){
                         if(state.name && state.name===state.toDoList[i].name){
                            
                             tempToDo=false;
                              alert("please check to do list before add..");
                     }else{
                         tempToDo=true;
                     }
                    }
                 
                    if(state.name && tempToDo){
return {
                    ...state,
                    toDoList:state.toDoList.concat({
                        id:state.toDoList.length+1,
                        name: state.name,
                        isActive:true,
                        status:false,
                        isComplete:false,
                        isDeleteButton:false,
                        isUpdateField:false
                    }),
                        id:"",
                        name:"",
                        isActive:false,
                        status:false
            };
                    }else{
                        return state
                    };
                     case "HANDLE_UPDATE_TODO":
                
                     let tempUpdateToDo=true;
                     if(state.toDoList.length>0)
                     for(let i=0;i<state.toDoList.length;i++){
                         if(state.id && state.id===state.toDoList[i].id){
                            
                             tempUpdateToDo=false;
                              alert("please check to do list before add..");
                     }else{
                         tempUpdateToDo=true;
                     }
                    }
                 
                    if(state.name && tempUpdateToDo){
return {
                    ...state,
                    toDoList:state.toDoList.concat({
                        id:state.toDoList.length+1,
                        name: state.name,
                        isActive:true,
                        status:false,
                        isComplete:false,
                        isDeleteButton:false,
                        isUpdateField:false
                    }),
                        id:"",
                        name:"",
                        isActive:false,
                        status:false
            };
                    }else{
                        return state
                    }
                
                case "HANDLE_TOGGLE_TODO":
                return {
                    ...state,
                    toDoList:state.toDoList.map((x,i)=>{
                        if(action.props.id==x.id){
                        return{
                      ...x,
                        status:!x.status
                        }
                    }else{
                        return x
                    }
                    }),
                };
                // handle toogle hover
                 case "HANDLE_TOGGLE_HOVER":
                return {
                    ...state,
                    toDoList:state.toDoList.map((x,i)=>{
                        if(action.props.id==x.id){
                        return{
                      ...x,
                        isDeleteButton:!x.isDeleteButton,
                        }
                    }else{
                        return x
                    }
                    }),
                };
                 // handle toogle hover
                 case "HANDLE_TOGGLE_EDIT":
                return {
                    ...state,
                    toDoList:state.toDoList.map((x,i)=>{
                        if(action.props.id==x.id){
                        return{
                      ...x,
                        isUpdateField:!x.isUpdateField,
                        }
                    }else{
                        return x
                    }
                    }),
                };
                case "HANDLE_DELETE_TODO":
                return {
                    ...state,
                    toDoList:state.toDoList.filter((x,i)=>{
                    if(action.props.id==x.id){
                    return false;
                }
                return true;
                    }),
                       
                };
            default:
                return state
            }
    }