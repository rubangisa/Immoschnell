import SignUp from './components/pages/signUp.jsx';
import NavBar from './components/navbar.jsx';
import MyBooking from './components/pages/myBookings.jsx';
import UserDash from './components/pages/userDash.jsx';
import ListingInfo from './components/pages/listingInfo.jsx';
import Footer from './components/pages/footer.jsx';
import './App.css';
const App = () => {
  return (
    <div>
      <NavBar/>
      <SignUp />
      <MyBooking />
      <UserDash />
      <ListingInfo />
      <Footer />
    </div>
  );
}
export default App;

// <BrowserRouter>
//     <NavBar />
//     <Routes>
//       <NavBar/>
//       <Route path="/home" element={<HomePage/>} />
//       <Route path="/signup" element={<SignUp/>} />
//       <Route path="/mybooking" element={<MyBooking/>} />
//       <Route path="/*" element={<UserDash/>} />
//       <UserDash />
//       </Routes>
//     </BrowserRouter>