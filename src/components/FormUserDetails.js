import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    width: "300px",
    margin: "10px auto"
  }
};

class FormUserDetails extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography
                variant="h6"
                color="inherit"
                className={classes.input}
              >
                Please get your name and email
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div className={classes.root}>
          <TextField
            id="name"
            label="Name"
            margin="normal"
            className={classes.input}
          />
          <TextField
            id="surname"
            label="Surname"
            margin="normal"
            className={classes.input}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            className={classes.input}
          />
          <Button variant="contained" color="primary" className={classes.input}>
            Continue
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FormUserDetails);
