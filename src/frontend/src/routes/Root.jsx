import { React, Component } from 'react';
import { Box, Button } from '@mui/material';

// eslint-disable-next-line react/prefer-stateless-function
export default class Root extends Component {
  render() {
    return (
      <Box margin="normal" sx={{ m: 1 }}>
        <Button variant="contained" onClick={() => alert('Hello world')}>Hello world</Button>
      </Box>
    );
  }
}
