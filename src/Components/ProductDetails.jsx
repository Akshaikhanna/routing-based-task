import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  CircularProgress,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

function ProductDetail() {
  const { productId } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  // Fetch the product details using the productId
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details", error));
  }, [productId]);

  // Render the product details
  return (
    <Container maxWidth="lg" sx={{ my: 14 }}>
      {product ? (
        <Card elevation={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia
                  component="img"
                  alt={product.title}
                  sx={{ height: "480px", width: "100%", objectFit: "contain" }}
                  image={product.image}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.title}
                </Typography>
                <Typography variant="h6"sx={{ my: 6 }} >
                  <h4 > Description:</h4>
                  {product.description}
                </Typography>
                <Typography variant="h6"sx={{ my: 6 }} >Price: ${product.price}</Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
}

export default ProductDetail;
