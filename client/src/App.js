import {Route,BrowserRouter,Routes} from 'react-router-dom'
import './App.css';
import {Login}  from './components/login';
import {Home} from './components/home'
import {ContentDetail} from './components/ContentDetail'
import {CreateContent} from './components/CreateContent'
import {UpdateContent} from './components/UpdateContent'
import {Inexistente} from './components/Inexistente'


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Login/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/content/:id' element={<ContentDetail/>} />
    <Route path='/createContent' element={<CreateContent/>} />
    <Route path='/updateContent/:id' element={<UpdateContent/>} />
    <Route path="*" element={<Inexistente />} />    
    </Routes>    
    </BrowserRouter>
  );
}

export default App;
