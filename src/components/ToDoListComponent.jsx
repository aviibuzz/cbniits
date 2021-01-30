import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const ToDoListComponent=(props)=> {
  const classes = useStyles();
  
  const {handleToggle,handleDelete,data}=props;
  const completeToDo = (value) => () => {
    handleToggle(value);
    
  };
  const deleteToDo = (value) => () => {
    handleDelete(value);
    
  };

  return (
    <List className={classes.root}>
      {data.map((value) => {
        const labelId = `checkbox-list-label-${value.id}`;
        console.log(value);
        return (
          <ListItem key={value} role={undefined} dense button onClick={completeToDo(value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={value.status}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`${value.name}`} className={value.status && "completed"}/>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon onClick={deleteToDo(value)}/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

export default ToDoListComponent;
