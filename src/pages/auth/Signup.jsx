import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  Link,
  IconButton,
  Paper,
  InputAdornment,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CustomButton from '../../components/CustomButton';
import PromoImage from '../../assets/2.png';

// Import icons for form inputs and social buttons
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

// Container for the entire page, centers content vertically and horizontally
const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f4f6f8',
  padding: theme.spacing(3),
  boxSizing: 'border-box',
}));

// Main card that holds the promo panel and the signup form side by side
// Stacks vertically on medium and smaller screens for responsiveness
const MainCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  borderRadius: '20px',
  overflow: 'hidden',
  maxWidth: '1200px',
  width: '100%',
  boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    maxWidth: '90vw',
  },
}));

// Left promo panel showing logo and promo image
const PromoPanel = styled(Box)(({ theme }) => ({
  flex: 1.2, // Slightly bigger than form panel
  backgroundColor: '#fff',
  padding: theme.spacing(5),
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 600,
  [theme.breakpoints.down('md')]: {
    minHeight: 350,
    padding: theme.spacing(3),
  },
}));

// Promo image styling with absolute positioning on larger screens,
// switching to relative on smaller screens for better responsiveness
const PromoImageStyled = styled('img')(({ theme }) => ({
  width: '90%',
  height: '80%',
  objectFit: 'cover',
  borderRadius: '91px',
  position: 'absolute',
  top: 70,
  left: 40,
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    top: 0,
    left: 0,
    borderRadius: '40px',
    width: '100%',
    height: 'auto',
  },
}));

// Logo text positioned on top left of promo panel
const LogoText = styled('h2')(({ theme }) => ({
  position: 'absolute',
  top: 20,
  left: 20,
  margin: 0,
  fontSize: 20,
  display: 'flex',
  alignItems: 'center',
  zIndex: 2, // Ensure logo is above promo image
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    top: 0,
    left: 0,
    marginBottom: theme.spacing(2),
  },
}));

// Right panel containing the signup form
const LoginFormPanel = styled(Box)(({ theme }) => ({
  flex: 1, // Takes remaining space beside promo panel
  backgroundColor: '#fff',
  padding: theme.spacing(5, 6),
  display: 'flex',
  flexDirection: 'column',
  minHeight: 600,
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
    minHeight: 'auto',
  },
}));

// Container for the top navigation buttons (Log in / Sign up)
// Arranged horizontally on larger screens, stacked on small screens
const TopNavButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    '& > *': {
      width: '100%',
      marginBottom: theme.spacing(1),
    },
  },
}));

// Title text for the form
const FormTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '2rem',
  marginBottom: theme.spacing(1),
  color: '#000',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem',
  },
}));

// Subtitle text under the form title
const FormSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  color: '#555',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
    marginBottom: theme.spacing(3),
  },
}));

// Custom styled TextField with rounded corners and background color
const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2.5),
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: '#e5e0d8',
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.grey[400],
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

// Row holding "Remember me" checkbox and "Forgot Password" link
// Stacks vertically on small screens for better layout
const RememberForgotRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
  },
}));

// Container for social login section at the bottom of form
const SocialLoginContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(3),
}));

// Text above social login icons
const SocialLoginText = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.grey[600],
  marginBottom: theme.spacing(2),
}));

// Individual social icon buttons with border and hover effect
const SocialIconButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  border: `1px solid ${theme.palette.grey[300]}`,
  color: theme.palette.grey[700],
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));

export default function EvooSignUpPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

  return (
    <PageContainer>
      <MainCard>

        {/* Left side: Promo panel with logo and image */}
        <PromoPanel>
          <LogoText>
            <span style={{ color: '#000', fontWeight: 'bold' }}>EVOO </span>
            <span style={{ color: '#B6B09F', fontWeight: 'bold' }}>STORE</span>
          </LogoText>
          <PromoImageStyled src={PromoImage} alt="Promo" />
        </PromoPanel>

        {/* Right side: Signup form panel */}
        <LoginFormPanel>
          {/* Top navigation buttons */}
          <TopNavButtons>
            <CustomButton
              variantType="contained"
              style={{ marginRight: 8 }}
              onClick={() => navigate("/login")}
            >
              Log in
            </CustomButton>
            <CustomButton variantType="outlined" onClick={() => navigate("/signup")}>
              Sign up
            </CustomButton>
          </TopNavButtons>

          {/* Form title and subtitle */}
          <FormTitle>Welcome to EVOO</FormTitle>
          <FormSubtitle>
            To keep connected with us please login with your personal information by email address and password
          </FormSubtitle>

          {/* Input fields */}
          <StyledTextField
            fullWidth
            label="Full Name"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon />
                </InputAdornment>
              ),
            }}
          />

          <StyledTextField
            fullWidth
            label="Email"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />

          <StyledTextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {/* Toggle password visibility */}
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    <VisibilityOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <StyledTextField
            fullWidth
            label="Mobile Number"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIphoneIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Remember me checkbox and forgot password link */}
          <RememberForgotRow>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Checkbox size="small" sx={{ paddingLeft: 0 }} />
              <Typography fontSize="0.875rem">Remember me</Typography>
            </Stack>
            <Link href="#" underline="hover" fontSize="0.875rem" color="text.secondary">
              Forgot Password?
            </Link>
          </RememberForgotRow>

          {/* Submit button */}
          <CustomButton variantType="contained" fullWidth onClick={() => navigate("/MenClothing")}>
            Create account
          </CustomButton>

          {/* Social login section */}
          <SocialLoginContainer>
            <SocialLoginText>or you can join with</SocialLoginText>
            <Stack direction="row" justifyContent="center">
              <SocialIconButton><FacebookIcon /></SocialIconButton>
              <SocialIconButton><GoogleIcon /></SocialIconButton>
              <SocialIconButton><TwitterIcon /></SocialIconButton>
            </Stack>
          </SocialLoginContainer>
        </LoginFormPanel>

      </MainCard>
    </PageContainer>
  );
}
