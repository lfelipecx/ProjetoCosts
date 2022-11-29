import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'


import Container from './components/layout/Container';


import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';



function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/company'>Company</Link>
        <Link to='/newproject'>New Project</Link>
      </div>

      <Container customClass='minHeight'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/company' element={<Company/>}></Route>          
          <Route path='/newproject' element={<NewProject/>}></Route>  
        </Routes>
          
      </Container>

      <p>Footer</p>

    </Router>
  );
}

export default App;
