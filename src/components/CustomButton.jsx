import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// Styled MUI Button using Emotion
const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "variantType",
})(({ variantType }) => ({
  borderRadius: "999px",
  padding: "8px 32px",
  fontWeight: "bold",
  fontSize: "1rem",
  textTransform: "none",
  boxShadow: variantType === "outlined" ? "0 2px 6px 0 rgba(0,0,0,0.1)" : "none",
  backgroundColor: variantType === "contained" ? "#000" : "#fff",
  color: variantType === "contained" ? "#fff" : "#000",
  border: variantType === "outlined" ? "1.5px solid #e0e0e0" : "none",
  "&:hover": {
    backgroundColor: variantType === "contained" ? "#222" : "#f5f5f5",
    boxShadow: "0 4px 12px 0 rgba(0,0,0,0.12)",
    border: variantType === "outlined" ? "1.5px solid #bdbdbd" : "none",
  },
}));

/**
 * CustomButton component
 * @param {object} props
 * @param {"contained" | "outlined"} props.variantType
 * @param {string} props.children
 * @param {function} [props.onClick]
 */
export default function CustomButton({ variantType = "contained", children, ...props }) {
  return (
    <StyledButton variant="contained" disableElevation variantType={variantType} {...props}>
      {children}
    </StyledButton>
  );
}