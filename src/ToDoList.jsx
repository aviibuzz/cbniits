
import React,{Component} from 'react';
import Header from './components/Header';
import Container from '@material-ui/core/Container';
import ToDoInput from './components/InputForm';
import ToDoListComponent from './components/ToDoListComponent';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import{toDoAction} from "./actions";
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

class ToDoApp extends Component{
    
  
    render(){
        const {dispatch}=this.props;
        const {toDoList,name}=this.props.toDoList;
        const handleChange=(value,event)=>dispatch(toDoAction.onChangeProps(value,event));
        const handleForm=(value,event)=>{
                      dispatch(toDoAction.addToDo(value,event));    
           };
        const handleToggle=(value,event)=>dispatch(toDoAction.toggleToDo(value,event));
        const handleDelete=(value,event)=>dispatch(toDoAction.deleteToDo(value,event));
        return(
           <>
           <Header/>
           <main className="main">
           <Container maxWidth="sm">
          <ToDoInput handleChange={handleChange} value={name} handleForm={handleForm}/>
          <br/>
          <ToDoListComponent data={toDoList} handleToggle={handleToggle} handleDelete={handleDelete}/>
         </Container>
           </main>
           </>
        )
    }

}

const mapStateToProps = (state) =>{
    return {
       toDoList : state.todoReducer
    };
}
const connectedVendorPage = connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(useStyles)(ToDoApp));
export { connectedVendorPage as ToDoApp };