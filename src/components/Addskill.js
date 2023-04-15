import React, { useState } from 'react';
import '../App.js'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
//import DatePicker from '../DatePicker'
import DialogTitle from '@mui/material/DialogTitle';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';


export default function AddData({ open, changeHandler, submitHandler, handleClose, skillName, category, expertise, year, experience, }) {

  const [maxWidth, setMaxWidth] = React.useState('Foundational');
  return (
    <>
      <div style={{ display: 'inline' }}>

        <Dialog open={open} onClose={handleClose} style={{
          background: 'transparent', width: '100%', '& .MuiTextField-root': { m: 1, width: '15ch' },


        }}
          PaperProps={{
            style: {
              backgroundColor: '#fff',
              boxShadow: '0 5px 15px rgba(0,0,0,.5);',
              color: 'white',
            },
          }}
          noValidate
          autoComplete="off"
        >

          <DialogTitle style={{ color: 'Black' }}>Add a Technical Skill</DialogTitle>
          <hr style={{ marginTop: '-10px' }}></hr>
          {/* <div style={{ display: 'flex', flexDirection: 'column' }}> */}
            <DialogContent style={{ color: 'Black' }}>
              {/* <div style={{ display: 'flex', gap: '30px', marginLeft: '10px' }}> */}
                {/* <DialogContentText id="alert-dialog-slide-description" style={{ color: '#000' }}>
                  Skill
                </DialogContentText> */}
                <TextField
                  sx={{ color: 'white', bgcolor: 'white', m: 1, width: '90vh' }}
                  
                  autoFocus
                  margin="dense"
                  variant='outlined'

                  name='skillName'
                  label='Skill Name'
                  type="text"
                  Width='50'
                  value={skillName}
                  onChange={changeHandler}

                />
              {/* </div>
              <div style={{ display: 'flex' }}> */}
                {/* <DialogContentText id="alert-dialog-slide-description" style={{ color: '#000' }}>
                  Skill
                </DialogContentText> */}
                <TextField
                  sx={{ color: 'white', bgcolor: 'white', m: 1, width: '43.5vh' }}
                  autofocus
                  variant='outlined'
                  label='Category'
                  name='category'
                  value={category}
                  onChange={changeHandler}
                  Width='20'

                />
                {/* <TextField
                  sx={{ color: 'white', bgcolor: 'white', m: 1, width: '26vh' }}
                  // type='date'
                  variant='outlined'
                  label='Expertise'
                  name='expertise'
                  value={expertise}
                  onChange={changeHandler}
                  Width='20'

                /> */}
                {/* <FormControl sx={{ mt:  1, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">Expertise</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                // onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value="Foundational">Foundational</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                <MenuItem value="Advances">Advanced</MenuItem>
                <MenuItem value="Expert">Expert</MenuItem>
               
              </Select>
            </FormControl> */}
             <TextField
                sx={{ color: 'white', bgcolor: 'white', m: 1, width: '41.5vh' }}
                type='text'
                variant='outlined'
                name='expertise'
                label='Expertise'
                //name='buisness_year'
                value={expertise}
                onChange={changeHandler}
              />
                
              {/* </div> */}
              <TextField
                sx={{ color: 'white', bgcolor: 'white', m: 1, width: '41.5vh' }}
                type='text'
                variant='outlined'
                name='year'
                label='Year'
                //name='buisness_year'
                value={year}
                onChange={changeHandler}
              />
              <TextField
                sx={{ color: 'white', bgcolor: 'white', m: 1, width: '43vh' }}
                type='text'
                variant='outlined'
                label='Experience'
                name='experience'
                value={experience}
                onChange={changeHandler}
              />


              {/* <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              <Select
                autoFocus
                // value={maxWidth}
                // onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value={false}>false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              sx={{ mt: 1 }}
              // control={
              //   <Switch checked={fullWidth} onChange={handleFullWidthChange} />
              // }
              label="Full width"
            />
          </Box> */}
            </DialogContent>

            <DialogActions>
              <Button variant="outlined" onClick={submitHandler} type="submit" style={{
                 fontSize: 16, color: '#fff',
                backgroundColor: '#337ab7',
                borderColor: '#2e6da4'
              }}>Submit</Button>
              <Button variant="outlined" onClick={handleClose} style={{  fontSize: 16, color: 'black' }}>CANCEL</Button>
            </DialogActions>
          {/* </div> */}
        </Dialog>

      </div>
    </>
  );


};
