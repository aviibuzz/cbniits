import React ,{useState} from 'react';
import { Card } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import RemoveIcon from '@material-ui/icons/Remove';
import {Add} from '@material-ui/icons';
import {Button,FormControl,InputLabel,Input,FormHelperText, ButtonGroup} from '@material-ui/core';

const Calculator =()=>{
 const [inputField, setInputField] = useState(9);
  const inputFieldFunc = (e) => {
    setInputField(e.target.value);
  };
  return (
    <div>
    <Grid  container sm={12} direction="row"
  justify="center"
  alignItems="center" >
    <Card variant="outlined" >

<FormControl>
  <InputLabel htmlFor="my-input">Enter Number</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" type="number" name="number" value={inputField} onChange={inputFieldFunc}/>
  <FormHelperText id="my-helper-text">Please Input a number to Calculate</FormHelperText>
</FormControl>
<br/>
<ButtonGroup variant="contained" color="primary" 
// orientation="vertical"
 aria-label="contained primary button group">
<Button
        variant="contained"
        color="secondary"
        onClick={() => setInputField(inputField + 1)}
      >
      <Add />
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setInputField(inputField - 1)}
      >
      <RemoveIcon/>
      </Button>
      </ButtonGroup>
      </Card>
      </Grid>
    </div>
  );
};

export default Calculator;
