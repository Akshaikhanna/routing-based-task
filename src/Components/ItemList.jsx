import React, { useEffect, useState } from "react";
import {
  Navigate,
  useNavigate,
  NavLink,
  useLocation,
  Link,
} from "react-router-dom";
import "../Styles/Item.css";
import { Button } from "react-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Card, CardContent, Grid, Typography, CardMedia } from "@mui/material";

function ItemList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParams = queryParams.get("category");
  const [items, setItems] = useState([]);
  const [user, setUser] = useState("Check");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [product, setProduct] = useState([]);
  const nav = useNavigate();

  //check whether user is logged or not and display the products.
  useEffect(() => {
    const Userlogged = localStorage.getItem("Login");
    if (Userlogged) {
      setUser(JSON.parse(Userlogged));
    } else {
      setUser(null);
    }
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.log("error", error));
  }, []);

  // fiter the product list
  useEffect(() => {
    if (selectedCategory === "all") {
      setProduct(items);
    } else if (selectedCategory === "men's clothing") {
      const menClothesProducts = items.filter(
        (item) => item.category === "men's clothing"
      );
      setProduct(menClothesProducts);
    } else if (selectedCategory === "electronics") {
      const electronicsProducts = items.filter(
        (item) => item.category === "electronics"
      );
      setProduct(electronicsProducts);
    } else if (selectedCategory === "women's clothing") {
      const womensclothingProduct = items.filter(
        (item) => item.category === "women's clothing"
      );
      setProduct(womensclothingProduct);
    } else {
      const filteredProducts = items.filter(
        (item) => item.category === selectedCategory
      );
      setProduct(filteredProducts);
    }
  }, [selectedCategory, items]);

  // initially set the selectcategory based on the route parameters
  useEffect(() => {
    if (categoryParams) {
      setSelectedCategory(categoryParams);
    }
  }, [categoryParams]);

  //function for category button and query parameter
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    queryParams.set("category", category);
    nav(`?${queryParams.toString()}`);
  };

  // redirect
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  // logout function for logout button.
  const handleSignout = () => {
    localStorage.removeItem("Login");
    nav("/");
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>ShopNow</Navbar.Brand>
          <Nav class="nav nav-tabs navbar-right">
            <Nav.Link as={NavLink} to="/item" activeClassName="active-link">
              Home
            </Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="More"
              menuVariant="dark"
            >
              <NavDropdown.Item as={Link} to="/about">About us</NavDropdown.Item>
              <NavDropdown.Item onClick={handleSignout}>
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <div className="content">
        <div>
          <Button
            onClick={() => handleCategoryChange("all")}
            className="mx-2 mt-2"
          >
            All
          </Button>
          <Button onClick={() => handleCategoryChange("jewelery")}>
            Jewelery
          </Button>
          <Button
            onClick={() => handleCategoryChange("men's clothing")}
            className=" mx-2"
          >
            Men's Clothing
          </Button>
          <Button onClick={() => handleCategoryChange("electronics")}>
            Electronics
          </Button>
          <Button
            onClick={() => handleCategoryChange("women's clothing")}
            className=" mx-2"
          >
            Women's Clothings
          </Button>
        </div>
        <ul>
          <Grid container spacing={2}>
            {product?.map((key) => (
              <Grid xs={12} sm={6} md={4} lg={3} item>
                <Card
                  sx={{
                    maxWidth: 345,
                    height: "95%",
                    boxShadow: 5,
                    marginTop: "3%",
                    borderRadius: "2%",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: "250px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    image={key.image}
                    title="Image"
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "calc(100% - 250px)",
                      alignItems: "flex-start",
                    }}
                  >
                    <CardContent>
                      <Link
                        variant="h2"
                        component="div"
                        className="link"
                        to={`/item/${key.id}`}
                      >
                        {key.title}
                      </Link>
                    </CardContent>
                    <Typography variant="h6">Price:${key.price}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </ul>
      </div>
    </>
  );
}

export default ItemList;
