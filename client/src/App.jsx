import SignUp from './components/pages/signUp.jsx';
import NavBar from './components/navbar';
import MyBooking from './components/pages/myBookings';
import './App.css';
const App = () => {
  return (
    <div>
      <NavBar />
      <SignUp />
      <MyBooking />
    </div>
  );
}
export default App;