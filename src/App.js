

import { Route, Routes } from 'react-router-dom';

import About from './Pages/About/About';
import Login from './Pages/Authonication/Login/Login';
import Register from './Pages/Authonication/Register/Register';
import RequireAuth from './Pages/Authonication/RequereAuth/RequereAuth';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Checkout from './Pages/Checkout/Checkout';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
