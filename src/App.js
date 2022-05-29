import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Purchase from './Pages/Purchase';
import RequireAuth from './Pages/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';
import Blogs from './Pages/Home/Blogs';
import MyPortfolio from './Pages/Home/MyPortfolio';
import Payment from './Pages/Dashboard/Payment';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/RequireAdmin';
import AddProducts from './Pages/Dashboard/AddProducts';

function App() {
  return (
    <div className='px-10' >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/updateProfile' element={<UpdateProfile></UpdateProfile>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}>
        </Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addProducts" element={<RequireAdmin><AddProducts></AddProducts></RequireAdmin>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
