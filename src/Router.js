import React, {useContext, useState} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthContext from './context/AuthContext';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AddArticle from './pages/AddArticle/AddArticle';
import JoinUs from './pages/JoinUs/JoinUs';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import News from './pages/News/News';
import SingleArticle from './pages/SingleArticle/SingleArticle';
import League from './pages/League/League';
import Sponsorship from './pages/Sponsorship/Sponsorship';
import Articles from './pages/Articles/Articles';
import EditArticle from './pages/EditArticle/EditArticle';
import ResetPassword from './pages/ResetPassword/ResetPassword';

const Router = () => {
  const {loggedIn} = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BrowserRouter>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/join-us" element={<JoinUs/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/article/:id" element={<SingleArticle/>}/>
        <Route path="/wihl" element={<League/>}/>
        <Route path="/sponzorstvo" element={<Sponsorship/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
        {loggedIn === false && (
          <>
          <Route path="/register" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          </>
        )}
        {loggedIn === true && (
          <>
          <Route path="/write" element={<AddArticle />}/>
          <Route path="/articles" element={<Articles/>}/>
          <Route path="/edit-article/:id" element={<EditArticle/>}/>
          </>
        )}
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
};

export default Router;