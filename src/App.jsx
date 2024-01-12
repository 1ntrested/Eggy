import Signup  from './components/Signup'
import Navbar from './components/Navbar'
import Login from './components/Login';
//import ReactDOM from "react-dom/client";
import Posts from './components/Create';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Showpost from './components/Showpost';
import Getimages from './components/Getimages';
import Newpage from './components/Newpage';
function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/createpost' element={<Posts />} />
        <Route path='/showpost' element={<Showpost />} />
        <Route path='/newpage' element={<Newpage />} /> 
        <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
