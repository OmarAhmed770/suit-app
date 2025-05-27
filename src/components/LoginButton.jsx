import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';



const LoginButton = ({ children, ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Login'); // Navigate to Login page
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children || 'Log in'}
    </Button>
  );
};

export default LoginButton;
