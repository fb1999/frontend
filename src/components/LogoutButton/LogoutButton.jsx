import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';

const LogoutButton = () => {

    const { getLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    async function logOut() {
        await axios.get("http://localhost:5000/auth/logout");
        await getLoggedIn();
        navigate("/");
    }
  return (
    <Button variant="contained" onClick={logOut}>Logout</Button>
  )
};

export default LogoutButton;