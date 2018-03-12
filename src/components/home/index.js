import React from 'react';
import Welcome from '../welcome';
import Search from './search';

const style = {
  background: 'grey',
  width: '100%',
};
const Home = () => (
  <div style={style}>
    <Welcome />
    <Search />
  </div>
);

export default Home;
