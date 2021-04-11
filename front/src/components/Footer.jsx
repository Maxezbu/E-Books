import React from "react";
import { Container, Toolbar, Typography, AppBar } from "@material-ui/core";

export default function Footer() {
  return (
    <div className="footer">
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit" align="center">
              © 2021 Plataforma 5
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
