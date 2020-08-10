import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import Projects from './views/Projects';
import FavoriteThings from './views/FavoriteThings';
import Connect from './views/Connect';

import nerv from './assets/nerv-logo-png-transparent.png';

const App = () => {
  console.log(nerv);
  return ( 
    <div>
      <div style={styles.headerStyle}>
        <ul style={styles.navContainer}>
          <li style={styles.navItemStyle}><Link to="/"><img style={{width: 100, height: 80}} src={nerv} alt="nerv"/></Link></li>
          <li style={styles.navItemStyle}><Link to="/"> Intro </Link></li>
          <li style={styles.navItemStyle}><Link to="/Projects">Projects</Link></li>
          <li style={styles.navItemStyle}><Link to="/FavoriteThings">Favorite Things</Link></li>
          <li style={styles.navItemStyle}><Link to="Connect">Connect</Link></li>
        </ul>
      </div>
      {/* ROUTES */}
      <div> 
        <Route exact={true} path="/" component={Home} /> 
        <Route path="/projects" component={Projects} /> 
        <Route path="/FavoriteThings" component={FavoriteThings} /> 
        <Route path="/Connect" component={Connect} />
      </div>
    </div>
   );
}
 
const styles = {
  navContainer: {
    backgroundColor: "cyan",
    display: "flex",
    flexDirection:"row",
    alignItems: "center",
    listStyle: "none",
    borderColor: "black",
    borderWidth: 5,
  },
  navItemStyle: {
    margin: 20,
    borderColor: "black",
    borderWidth: 1,
    fontSize: 24,
    fontWeight: "bold",
  },
  headerStyle: {
    alignItems: 'center',
  }
}
export default App;
