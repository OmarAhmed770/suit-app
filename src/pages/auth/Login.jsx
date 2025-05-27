import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
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
  useMediaQuery,
} from '@mui/material';
import CustomButton from '../../components/CustomButton';
import PromoImage from '../../assets/1.png';
import { useNavigate } from 'react-router-dom';

// Icons used in the form and social login buttons
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

// Styled container for the whole page, centers content vertically and horizontally
const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f4f6f8',
  padding: theme.spacing(3),
  boxSizing: 'border-box',
}));

// Main card that holds the promo panel and the login form side-by-side
const MainCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  borderRadius: '28px',
  overflow: 'hidden',
  maxWidth: '950px',
  width: '100%',
  boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
  // On medium and smaller screens stack panels vertically
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    maxWidth: '90vw', // narrower width on smaller devices
    borderRadius: '20px',
  },
}));

// Promo panel container with white background and vertical centering
const PromoPanel = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  padding: 0,
  background: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  minHeight: 600,
  // Smaller height and padding on smaller devices
  [theme.breakpoints.down('md')]: {
    minHeight: 300,
    padding: theme.spacing(3),
  },
}));

// Inner box within promo panel that provides a gradient background and positioning
const PromoImageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  background: 'linear-gradient(90deg,hsl(0, 0.00%, 100.00%) 55%, #ededed 100%)',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  minHeight: 600,
  alignItems: 'stretch',
  justifyContent: 'center',
  // Responsive height adjustments
  [theme.breakpoints.down('md')]: {
    minHeight: 300,
  },
  [theme.breakpoints.down('sm')]: {
    // Change gradient direction for better mobile appearance
    background: 'linear-gradient(180deg,hsl(0, 0.00%, 100.00%) 55%, #ededed 100%)',
  },
}));

// Container for the login form, vertically centered with padding
const LoginFormPanel = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  padding: theme.spacing(5, 4),
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 600,
  justifyContent: 'center',
  // Adjust padding and height for smaller screens
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
    minHeight: 'auto',
  },
}));

// Container for the login/signup toggle buttons at the top right of the form
const TopNavButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: theme.spacing(4),
  // Stack buttons vertically on very small screens
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    marginBottom: theme.spacing(3),
    '& > *': {
      marginBottom: theme.spacing(1),
      width: '100%',
    },
  },
}));

// Main form title style with responsive font size
const FormTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2rem',
  marginBottom: theme.spacing(1),
  color: '#222',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem',
  },
}));

// Subtitle text under the form title with smaller font
const FormSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '0.98rem',
  color: '#555',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    marginBottom: theme.spacing(3),
  },
}));

// Customized TextField with rounded corners and background color
const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2.5),
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: '#ede6d8',
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
  '& .MuiInputLabel-root': {
    color: theme.palette.grey[600],
  },
}));

// Row container for the "Remember me" checkbox and "Forgot Password" link
const RememberForgotRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  // Stack vertically on small screens with spacing
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

// Label for the "Remember me" checkbox
const RememberMeLabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.93rem',
  color: theme.palette.grey[700],
}));

// Link style for the "Forgot Password?" text
const ForgotPasswordLink = styled(Link)(({ theme }) => ({
  fontSize: '0.92rem',
  color: theme.palette.grey[600],
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
  [theme.breakpoints.down('sm')]: {
    alignSelf: 'flex-start',
  },
}));

// Container for social login section with centered text
const SocialLoginContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(3),
}));

// Text above social login buttons
const SocialLoginText = styled(Typography)(({ theme }) => ({
  fontSize: '0.93rem',
  color: theme.palette.grey[600],
  marginBottom: theme.spacing(2),
}));

// IconButton style for social login icons with hover effect and spacing
const SocialIconButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  border: `1px solid ${theme.palette.grey[300]}`,
  color: theme.palette.grey[700],
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
  // Smaller size and spacing on mobile
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(0, 0.5),
    padding: 6,
  },
}));

export default function EvooSignInPage() {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = React.useState(false);

  // React Router navigate hook for page changes
  const navigate = useNavigate();

  // Theme and media query hooks for responsive adjustments
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <PageContainer>
      <MainCard>
        {/* Left panel with promotional image and branding */}
        <PromoPanel>
          <PromoImageBox>
            {/* Promo image styled responsively */}
            <img
              src={PromoImage}
              alt="Promo"
              style={{
                width: isMobile ? '100%' : '80%',
                height: isMobile ? 'auto' : '80%',
                objectFit: 'cover',
                position: 'absolute',
                top: isMobile ? 20 : 70,
                left: isMobile ? 0 : 40,
                right: isMobile ? 0 : undefined,
                margin: isMobile ? '0 auto' : undefined,
                zIndex: 1,
                borderRadius: isMobile ? '24px' : '48px',
              }}
            />
            {/* Branding text positioned on top of promo image */}
            <div
              style={{
                position: 'absolute',
                top: isMobile ? 10 : 20,
                left: isMobile ? '50%' : 20,
                transform: isMobile ? 'translateX(-50%)' : 'none',
                display: 'flex',
                alignItems: 'center',
                zIndex: 2,
              }}
            >
              <h2 style={{ fontSize: isMobile ? '16px' : '20px', margin: 0 }}>
                <span style={{ color: '#000', fontWeight: 'bold' }}>EVOO </span>
                <span style={{ color: '#B6B09F', fontWeight: 'bold' }}>STORE</span>
              </h2>
            </div>
          </PromoImageBox>
        </PromoPanel>

        {/* Right panel containing the login form */}
        <LoginFormPanel>
          {/* Top buttons for toggling between login and sign up */}
          <TopNavButtons>
            <CustomButton
              variantType="contained"
              style={{ marginRight: isMobile ? 0 : '12px', marginBottom: isMobile ? 8 : 0, width: isMobile ? '100%' : 'auto' }}
            >
              Log in
            </CustomButton>
            <CustomButton
              variantType="outlined"
              onClick={() => navigate('/signup')}
              style={{ width: isMobile ? '100%' : 'auto' }}
            >
              Sign up
            </CustomButton>
          </TopNavButtons>

          {/* Form header and description */}
          <FormTitle>Welcome Back</FormTitle>
          <FormSubtitle>
            To keep connected with us please login with your personal information by email address and password
          </FormSubtitle>

          {/* Email input with icon */}
          <StyledTextField
            fullWidth
            label="Email"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon color="action" />
                </InputAdornment>
              ),
            }}
          />

          {/* Password input with visibility toggle */}
          <StyledTextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon color="action" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <VisibilityOutlinedIcon color="action" />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          {/* Row with "Remember me" checkbox and "Forgot Password?" link */}
          <RememberForgotRow>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Checkbox size="small" sx={{ paddingLeft: 0 }} />
              <RememberMeLabel>Remember me</RememberMeLabel>
            </Stack>
            <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
          </RememberForgotRow>

          {/* Login and create account buttons */}
          <Stack direction={isMobile ? "column" : "row"} spacing={isMobile ? 1 : 2} alignItems="center" sx={{ marginBottom: 3 }}>
            <CustomButton
              variantType="contained"
              fullWidth={isMobile}
              onClick={() => navigate("/MenClothing")}
            >
              Log in
            </CustomButton>
            <Link
              component="button"
              variant="body2"
              sx={{
                whiteSpace: 'nowrap',
                color: 'black',
                fontWeight: 500,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
                width: isMobile ? '100%' : 'auto',
                textAlign: isMobile ? 'center' : 'left',
              }}
              onClick={() => navigate('/signup')}
            >
              Create account
            </Link>
          </Stack>

          {/* Social login buttons */}
          <SocialLoginContainer>
            <SocialLoginText>or you can join with</SocialLoginText>
            <Stack direction="row" justifyContent="center" spacing={2}>
              <SocialIconButton aria-label="login with facebook">
                <FacebookIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="login with google">
                <GoogleIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="login with x/twitter">
                <TwitterIcon />
              </SocialIconButton>
            </Stack>
          </SocialLoginContainer>
        </LoginFormPanel>
      </MainCard>
    </PageContainer>
  );
}
