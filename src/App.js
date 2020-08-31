import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  InputAdornment,
  Avatar,
} from "@material-ui/core";
import { withStyles, makeStyles, createStyles } from "@material-ui/core/styles";
import { FaInstagram, FaSearch } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { FiSend, FiCompass } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";

const styles = () =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
    },
    LogoiconContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      minWidth: 100,
    },
    iconContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      minWidth: 200,
    },
    icons: {
      fontSize: 25,
    },
  });
function App(props) {
  const { classes } = props;
  return (
    <AppBar elevation={1}>
      <Toolbar variant="dense">
        <Box className={classes.root}>
          <Box>
            <Typography>
              <Box className={classes.LogoiconContainer}>
                <FaInstagram alignmentBaseline="hanging" />
                Instagram
              </Box>
            </Typography>
          </Box>
          {/*for search box*/}
          <Box className>
            <InputBase
              placeholder={`Search`}
              startAdornment={
                <InputAdornment>
                  <FaSearch />
                </InputAdornment>
              }
            ></InputBase>
          </Box>
          {/*for the icons*/}
          <Box className={classes.iconContainer}>
            <Box>
              <GoHome fontSize="large" className={classes.icons} />
            </Box>
            <Box>
              <FiSend fontSize="large" className={classes.icons} />
            </Box>
            <Box>
              <FiCompass fontSize="large" className={classes.icons} />
            </Box>
            <Box>
              <BsHeart fontSize="large" className={classes.icons} />
            </Box>
            <Box style={{ width: "24px" }}>
              <Avatar>F</Avatar>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(App);
