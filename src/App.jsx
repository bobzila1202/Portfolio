import React from 'react';
import { useState } from 'react';
import { NavBar } from './components';
import { HomePage, AboutPage, SkillsPage, ProjectsPage} from './pages'
import {PopUp} from './components'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(fas)


const App = () => {
    const [openPopUp, SetOpenPopUp] = useState(false); 


    return(
    <div>
      <NavBar  SetOpenPopUp={SetOpenPopUp} />
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      {openPopUp && <PopUp SetOpenPopUp={SetOpenPopUp}/>}
    </div>
    )
}

export default App