import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Cost(props) {

  const handleChange = event =>{
    props.setCostValue(event.target.value)
  }
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
      <RadioGroup
        onChange={handleChange}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
      >
        <FormControlLabel value="all" control={<Radio />} label="All Prices" />
        <FormControlLabel value="free" control={<Radio />} label="Free" />
        <FormControlLabel value="paid" control={<Radio />} label="Paid" />
      </RadioGroup>
    </FormControl>
  );
}