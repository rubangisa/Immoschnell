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

// import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import MyBookings from './components/pages/myBookings.jsx';
// import UserDash from './components/pages/userDash.jsx';
// import ListingInfo from './components/pages/listingInfo.jsx';
// import Footer from './components/pages/footer.jsx';
// import './App.css';

// function App () {
//   return (
//     <BrowserRouter>
//       <Routes>
//           <Route path="/my-booking" component={MyBookings} />
//           <Route path="*" component={UserDash} />
//           <Route path="/listing-info" component={ListingInfo} />
//         <Footer />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
