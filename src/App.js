
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Login from './pages/Authonication/Login/Login';
import Register from './pages/Authonication/Register/Register';
import RequireAuth from './pages/Authonication/RequireAuth/RequireAuth';
import Blog from './pages/Blog/Blog';
import BookDetails from './pages/BookDetails/BookDetails';
import Contact from './pages/Contact/Contact';
import Categories from './pages/Home/Categories/Categories';
import Home from './pages/Home/Home/Home';
import Manage from './pages/Manage/Manage';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';





function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/book/:bookId' element={<BookDetails></BookDetails>}></Route>
        <Route path='/categories' element={<Categories></Categories>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Manage></Manage>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
