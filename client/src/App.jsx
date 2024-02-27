import SignUp from './components/pages/signUp.jsx';
import Login from './components/pages/login.jsx';
import NavBar from './components/navbar.jsx';
import MyBooking from './components/pages/myBookings.jsx';
import AddListing from './components/pages/addListing.jsx';
import ContactPage from './components/pages/contactUs.jsx';
import './App.css';
const App = () => {
  return (
    <div>
      <NavBar/>
      <Login/>
      <ContactPage/>
      <AddListing/>
      <SignUp />
      <MyBooking />
    </div>
  );
}
export default App;