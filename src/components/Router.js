import React from "react";
import { Scene, Router} from "react-native-router-flux";
import Objective from './Objective';

import Experience from './Experience';
import Educations from './Educations';

const RouterComponent = () => {
  return (
    <Router>
     
        <Scene key="main">
          <Scene
            key="objective"
            rightTitle="See Education"
           
            component={Objective}
            title="Objective"
          />
          <Scene
            key="Education"
            title="Education"
            component={Educations}
          />
       
        <Scene
            key="experience"
            title="Experience"
            component={Experience}
          /> 
          </Scene>
        
    </Router>
  );
};

export default RouterComponent;
