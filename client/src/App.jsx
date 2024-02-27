import SignUp from './components/pages/signUp.jsx';
import NavBar from './components/navbar.jsx';
import MyBooking from './components/pages/myBookings.jsx';
import Login from './components/pages/login.jsx';
import AddListing from './components/pages/addListing.jsx';
import ContactPage from './components/pages/contactUs.jsx';
import './App.css';
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/bookings" element={<MyBooking />} exact />
        <Route path="/login" element={<SignUp />} />
        {/* Add more routes as needed */}
        {/* 404 Page Not Found */}
        <Route render={() => <h2>Page not found</h2>} />
      </Routes>
    </div>
  );
};
export default App;
