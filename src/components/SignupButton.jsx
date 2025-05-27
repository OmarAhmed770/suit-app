import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';



const SignupButton = ({ children, ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup');
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children || 'Sign up'}
    </Button>
  );
};

export default SignupButton;
