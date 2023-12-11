import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FormSelect({name,val1,val2}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{marginTop:'20px' }}>
      <FormControl variant="outlined" fullWidth>
        <InputLabel  sx={{bgcolor:'white'}} id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          sx={{bgcolor:'white',textAlign:'left'}}
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem  value={10}>{val1}</MenuItem>
          <MenuItem value={20}> {val2} </MenuItem>
        
        </Select>
      </FormControl>
    </Box>
  );
}
