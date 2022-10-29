import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
  return (
    <div >
        <Box columns={1}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="User"
          color="secondary"
          variant="filled"
          sx={{ color: 'black', backgroundColor: 'white', borderColor: 'green' }}
        />
        
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          color="secondary"
          variant="filled"
          autoComplete="current-password"
          sx={{ color: 'black', backgroundColor: 'white', borderColor: 'green' }}
        />
        
      </div>
    </Box>
    <div >
        <Button variant="contained" color="secondary" size="large" sx={{ color: 'black', backgroundColor: 'white', borderColor: 'green', marginLeft: '10px'}}>Login</Button>
    </div>
    </div>
  )
}

export default Login