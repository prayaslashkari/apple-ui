import React from 'react';
import styles from './App.module.css'

import {Navbar, Hero} from './components/index';

const App = () => {
  return ( 
    <div className={styles.container}>
        <Navbar/>
        <Hero/>
    </div>
   );
}
 
export default App;