import SignUp from './components/pages/signUp.jsx';
import NavBar from './components/navbar.jsx';
import MyBooking from './components/pages/myBookings.jsx';
import UserDash from './components/pages/userDash.jsx';
import './App.css';
const App = () => {
  return (
    <div>
      <NavBar/>
      <SignUp />
      <MyBooking />
      <UserDash />
    </div>
  );
}
export default App;