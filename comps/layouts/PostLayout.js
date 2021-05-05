import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PersistentNav from "../partials/PersistentNav";
import Button from "@material-ui/core/Button";

export default function PostLayout(props) {
  return (
    <main>
      <PersistentNav>
      <Container maxWidth="md">
        <Box my={4}>
          <Typography>{props.children}</Typography>
        </Box>
        <Button variant="contained" color="primary">
          Download PDF
        </Button>
      </Container>
      </PersistentNav>
    </main>
  );
}
