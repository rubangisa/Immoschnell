import SignUp from './components/pages/signUp.jsx';
import NavBar from './components/navbar.jsx';
import MyBooking from './components/pages/myBookings.jsx';
import './App.css';
const App = () => {
  return (
    <div>
      <NavBar/>
      <SignUp />
      <MyBooking />
    </div>
  );
}
export default App;