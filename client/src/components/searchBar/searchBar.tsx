import React from "react";
import classes from "./searchBar.module.css";
import defaultImg from "../../default.jpeg";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "2rem",
  backgroundColor: "#f8f9fa",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  border: "1px solid #ccc",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  color: "black",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchBar: React.FC = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "white", padding: "1rem" }}>
          <Typography
            style={{
              fontSize: "1.5rem",
              color: "black",
              marginLeft: "1rem",
              fontWeight: "800",
              fontFamily: "sans-serif",
            }}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Welcome To Dashboard..
          </Typography>
          <div className={classes.searchContainer}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <img className={classes.img} alt="user" src={defaultImg} />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default SearchBar;
