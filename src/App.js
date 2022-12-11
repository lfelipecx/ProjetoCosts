import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';



function App() {
  return (
    <Router>

      <Navbar />

      <Container customClass='minHeight'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/company' element={<Company/>}></Route>          
          <Route path='/newproject' element={<NewProject/>}></Route>
          <Route path='/project/:id' element={<Project/>}></Route>    
        </Routes>
          
      </Container>

      
      <Footer />

    </Router>
  );
}

export default App;
