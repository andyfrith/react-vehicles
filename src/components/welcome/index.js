import React from 'react';
import Typography from 'material-ui/Typography';

const style = {
  width: '100%',
};
const Welcome = () => (
  <div style={style}>
    <Typography variant="display3" gutterBottom>
      Welcome!
    </Typography>
    <Typography variant="display1" gutterBottom>
      Let's find a car!
    </Typography>
  </div>
);

export default Welcome;
