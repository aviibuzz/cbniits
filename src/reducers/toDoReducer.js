const initialState = { 
    toDoList: [{
    id: 1,
    name: 'Write To Do Application',
    isActive:true,
    status:true,
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
                
                     let tempToDo=false;
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
                        status:false
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