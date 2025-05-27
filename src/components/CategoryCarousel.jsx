import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  overflowX: "auto",
  gap: theme.spacing(4),
  padding: theme.spacing(2, 0),
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": { display: "none" },
}));

const CategoryItem = styled(Box)(({  selected }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  opacity: selected ? 1 : 0.65,
}));

const CategoryCircle = styled("div")(({ theme, selected }) => ({
  width: 90,
  height: 90,
  borderRadius: "50%",
  background: "#f2f2f2",
  border: selected ? "3px solid #061739" : "2px solid #e0e0e0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(1),
  boxSizing: "border-box",
  overflow: "hidden",
}));

export default function CategoryCarousel({
  categories,
  selected,
  onSelect,
  onPrev,
  onNext,
  showArrows = true,
}) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
      {showArrows && (
        <IconButton onClick={onPrev}>
          <ArrowBackIosNewIcon />
        </IconButton>
      )}
      <ScrollContainer>
        {categories.map((cat, idx) => (
          <CategoryItem
            key={cat.label}
            selected={selected === idx}
            onClick={() => onSelect(idx)}
          >
            <CategoryCircle selected={selected === idx}>
              <img
                src={cat.image}
                alt={cat.label}
                style={{ width: 56, height: 56, objectFit: "contain" }}
              />
            </CategoryCircle>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                color: selected === idx ? "#061739" : "#444",
                textAlign: "center",
                width: 90,
              }}
            >
              {cat.label}
            </Typography>
          </CategoryItem>
        ))}
      </ScrollContainer>
      {showArrows && (
        <IconButton onClick={onNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      )}
    </Box>
  );
}