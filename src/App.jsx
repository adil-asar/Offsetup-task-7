import React from 'react'
import Header from './components/Header/Header'
import Layout from './components/Filter/Layout'
import Signin from './components/SignupSignin/Signin';
import Signup from './components/SignupSignin/Signup';
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header/>
   
      <Routes>
        <Route path="/" element={<Layout/>} exact />
        <Route path="/signin" element={<Signin/>} exact />
        <Route path="/signup" element={<Signup/>} exact />
        <Route path="/" element={<Layout/>} exact />
        <Route path="/" element={<Layout/>} exact />
      </Routes>

    </>
  )
}

export default App
