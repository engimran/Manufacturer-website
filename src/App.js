
import { Route, Routes } from 'react-router';
import './App.css';
import Blogs from './Blogs';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrder from './pages/Dashboard/MyOrder';
import MyReview from './pages/Dashboard/MyReview';
import UserProfile from './pages/Dashboard/UserProfile';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import SignUp from './pages/Login/SignUp';
import Navbar from './pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import AllUsers from './pages/Dashboard/AllUsers';
import AddProduct from './pages/Dashboard/AddProduct';
import PageNotFound from './pages/PageNotFound';
import Payment from './pages/Dashboard/Payment';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>} ></Route>
          <Route path='userprofile' element={<UserProfile></UserProfile>} ></Route>
          <Route path='users' element={<AllUsers></AllUsers>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
        </Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
