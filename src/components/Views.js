import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Views(props) {

  const handleChange = event =>{
    props.setSortValue(event.target.value)
  }
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Sort by Views</FormLabel>
      <RadioGroup
        onChange={handleChange}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="mosttoleast"
        name="radio-buttons-group"
      >
        <FormControlLabel value="mosttoleast" control={<Radio />} label="Most to Least" />
        <FormControlLabel value="leasttomost" control={<Radio />} label="Least to Most" />
      </RadioGroup>
    </FormControl>
  );
}