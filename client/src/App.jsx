import SignUp from './components/pages/signUp';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'

const App = () => {
  return (
    <div>
      <NavBar />
      <SignUp />
    </div>
  );
}







export default App;
