

import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// date-fns
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// or for dayjs
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import { TextField } from '@mui/material';
import './Calender.css';

const Cal = () => {
  const [value, setValue] = React.useState(new Date());
  return (
    <div className='App'>
    <div className='container'>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        orientation='portrait'
        openTo='day' 
        value={value}
        onChange={(newValue) => {     
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {... params}/>}
      />
      
    </LocalizationProvider>
    </div>
    </div>
  )
}

export default Cal;

