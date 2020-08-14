import React from 'react';
import SideMenu from '../templates/SideMenu';
import Pulls from '../components/Pulls';

function Home() {
  return <SideMenu menu={null} content={<Pulls />} />;
}

export default Home;
