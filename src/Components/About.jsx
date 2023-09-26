import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Navbar, Nav } from "react-bootstrap";

function About() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/item">
          ShopNow
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/item">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        <div style={{ marginTop: "2rem" }}>
          <Typography variant="h4" gutterBottom>
            About ShopNow
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to ShopNow, your one-stop online shopping destination!
          </Typography>
          <Typography variant="body1" paragraph>
            At ShopNow, we are dedicated to providing you with a seamless and
            enjoyable shopping experience. Our mission is to offer a wide range
            of high-quality products at competitive prices, all while ensuring
            exceptional customer service.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether you're looking for the latest fashion trends, electronic
            gadgets, home decor, or anything in between, ShopNow has you
            covered. Explore our vast selection of products, and discover
            amazing deals and discounts that will make your shopping experience
            even more delightful.
          </Typography>
          <Typography variant="body1" paragraph>
            Our user-friendly website and mobile app make it easy to browse,
            search, and purchase products. We also offer secure payment options
            and fast, reliable shipping to ensure that your orders arrive on
            time.
          </Typography>
          <Typography variant="body1" paragraph>
            Thank you for choosing ShopNow for all your shopping needs. If you
            have any questions or need assistance, please don't hesitate to
            contact our customer support team. We look forward to serving you
            and making your shopping journey with us exceptional!
          </Typography>
        </div>
        <Button
          component={Link}
          to="/item"
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
          style={{ marginTop: "1rem" }}
        >
          Back to Home
        </Button>
      </Container>
    </>
  );
}

export default About;
