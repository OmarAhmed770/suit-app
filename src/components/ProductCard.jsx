import React, { useState } from "react";
import { Box, Typography, IconButton, Button, MenuItem, Select, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CardBox = styled(Card)(() => ({
  width: 235,
  minHeight: 385,
  borderRadius: 18,
  boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  background: "#B6B09F",
}));

const ProductImg = styled("img")(({ theme }) => ({
  width: 240,
  height: 300,
  objectFit: "cover",
  borderRadius: 12,
  marginTop: theme.spacing(0),
  display: "block",  // prevents inline whitespace issues
}));


const PriceBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginTop: theme.spacing(1),
}));

export default function ProductCard({ product, onAdd, onWishlist }) {
  const [size, setSize] = useState(product.sizes?.[0] || "");

  return (
    <CardBox>
      <IconButton
        sx={{ position: "absolute", top: 8, right: 8 }}
        onClick={() => onWishlist?.(product)}
      >
        <FavoriteBorderIcon />
      </IconButton>
      <ProductImg src={product.image} alt={product.name} />
      <CardContent sx={{ width: "100%", paddingBottom: "12px !important" }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, minHeight: 45 }}>
          {product.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "#666", minHeight: 22 }}>
          {product.subtitle || "size"}
        </Typography>
        <Select
          size="small"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          displayEmpty
          sx={{
            fontSize: "0.93rem",
            width: "100%",
            my: 1,
            background: "#EAE4D5",
            borderRadius: "8px",
          }}
        >
          <MenuItem value="" disabled>
            Choose an option
          </MenuItem>
          {product.sizes?.map((sz) => (
            <MenuItem key={sz} value={sz}>
              {sz}
            </MenuItem>
          ))}
        </Select>
        <PriceBox>
          <Button
            variant="contained"
            onClick={() => onAdd?.(product, size)}
            sx={{
              background: "#EAE4D5",
              color: "#000",
              borderRadius: "8px",
              textTransform: "none",
              boxShadow: "none",
              padding: "4px 18px",
              fontWeight: 600,
              fontSize: "1rem",
              "&:hover": { background: "#222" },
            }}
          >
            Add to bag
          </Button>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${product.price.toFixed(2)}
          </Typography>
        </PriceBox>
      </CardContent>
    </CardBox>
  );
}