import React from "react";
import "../Styles/Item.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PageError() {
  const nav = useNavigate();
  const handleBack = () => {
    nav("/item");
  }
  return (
    <div>
      <h1 className="pageerror">Page not found</h1>
      <Button onClick={handleBack} className="backtohome">Back to Home</Button>
    </div>
  );
}

export default PageError;
