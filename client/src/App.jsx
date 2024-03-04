//  import SignUp from './components/pages/signUp.jsx';
//  import NavBar from './components/navbar.jsx';
//  import MyBooking from './components/pages/myBookings.jsx';
//  import UserDash from './components/pages/userDash.jsx';
//  import ListingInfo from './components/pages/listingInfo.jsx';
//  import Footer from './components/pages/footer.jsx';
//  import './App.css';
//  const App = () => {
//    return (
//      <div>
//        <NavBar/>
//        <SignUp />
//        <MyBooking />
//        <UserDash />
//        <ListingInfo />
//        <Footer />
//      </div>
//    );
//  }
//  export default App;

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar.jsx";
import MyBookings from "./components/pages/myBookings.jsx";
import UserDash from "./components/pages/userDash.jsx";
import ListingInfo from "./components/pages/listingInfo.jsx";
import Footer from "./components/pages/footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/my-booking" element={<MyBookings />} />
        <Route path="/" element={<UserDash />} />
        <Route path="/listing-info" element={<ListingInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
