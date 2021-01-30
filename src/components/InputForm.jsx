import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
      color:"red",
    },
  },
}));

const InputAddToDo=(props)=> {
  const classes = useStyles();
const {handleChange,value,handleForm} =props;
  const handleInput = (e) => {
    handleChange(e.target.value);
  };
  const handleSubmit=(e)=>{
    handleForm();
    e.preventDefault();
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" fullWidth onSubmit={handleSubmit}>
      <div>
        <TextField id="addToDo" label="" value={value}  onChange={handleInput} placeholder="Add to list..." className="inputColor"
         InputProps={{
            startAdornment: <InputAdornment position="start"><AddIcon/></InputAdornment>,
          }}
        
        />
        </div>
    </form>
  );
}



export default InputAddToDo;
