import React from "react";
import Drawer from "./Drawer";
import Container from "@material-ui/core/Container";

export default function Layout() {
  return (
    <Container maxWidth="lg">
      <Drawer />
    </Container>
  );
}
