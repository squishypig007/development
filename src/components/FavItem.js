import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FavItem(props) {

  const handleChange = event =>{
    props.setfavoriteValue(event.target.value)
  }
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">My Choices</FormLabel>
      <RadioGroup
        onChange={handleChange}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
      >
        <FormControlLabel value="all" control={<Radio />} label="All Movies" />
        <FormControlLabel value="favorites" control={<Radio />} label="Favorites" />
      </RadioGroup>
    </FormControl>
  );
}