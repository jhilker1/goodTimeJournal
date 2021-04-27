import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PersistentNav from "../comps/partials/PersistentNav";
import ResponsiveNav from "../comps/partials/ResponsiveNav"

export default function Index() {
  return (
    <div>
      <PersistentNav>
        {/* <ResponsiveNav> */}
        <h1>Hello World</h1>
        <p>This page contains the persistent navigation.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        {/* </ResponsiveNav>  */}
      </PersistentNav>
    </div> 
  );
}
