import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProductCard from "../components/ProductCard";

const GridContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(3),
  flexWrap: "wrap",
  marginTop: theme.spacing(2),
}));

export default function ProductGrid({ title, products, onAdd, onWishlist, onShopAll }) {
  return (
    <Box sx={{ width: "100%", marginTop: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        {onShopAll && (
          <Button
            variant="contained"
            onClick={onShopAll}
            sx={{
              background: "#000",
              color: "#fff",
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 600,
              boxShadow: "none",
              "&:hover": { background: "#222" },
            }}
          >
            Shop All
          </Button>
        )}
      </Box>
      <GridContainer>
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
            onAdd={onAdd}
            onWishlist={onWishlist}
          />
        ))}
      </GridContainer>
    </Box>
  );
}