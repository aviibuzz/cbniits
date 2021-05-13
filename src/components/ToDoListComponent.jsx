import React ,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ToDoInput from './InputForm';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const ToDoListComponent=(props)=> {
  const classes = useStyles();
  const [displayDelete,setDisplayDelete]=useState(false);
  const[updateField,setUpdateField]=useState(false);
  const {handleToggle,handleDelete,data,handleChange,handleForm}=props;
  const completeToDo = (value) => () => {
    handleToggle(value);
    
  };
  const deleteToDo = (value) => () => {
    // alert('hello');
    handleDelete(value);
    
  };
  const onHover=()=>setDisplayDelete(true);
  const updateToDo=()=>{
    setDisplayDelete(false);
    setUpdateField(!updateField)};

  const DeleteIconBtn=(props)=>{
    if(displayDelete){
return (
   <ListItemSecondaryAction className="onHoverDisplay">
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon onClick={props.handleDelete}/>
              </IconButton>
            </ListItemSecondaryAction>)

  

    }
    return "";
    
  }

  return (
    <List className={classes.root }>
      {data.map((value) => {
        const labelId = `checkbox-list-label-${value.id}`;
        console.log(value);
        return (
          <ListItem key={value} role={undefined} dense button ContainerComponent className="toDoRow" onMouseOver={onHover} >
          {
              value.isUpdateField ? <ToDoInput handleChange={handleChange} value={value.name} handleForm={handleForm}/>
               :
               <>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={value.isComplete}
                onChange={completeToDo(value)}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
                <ListItemText id={labelId} primary={`${value.name}`} className={value.isComplete && "completed"} onClick={updateToDo}/>
           <DeleteIconBtn  handleDelete={deleteToDo(value)} />
       
          </>

            }
               </ListItem>
             
            
        );
      })}
    </List>
  );
}

export default ToDoListComponent;
