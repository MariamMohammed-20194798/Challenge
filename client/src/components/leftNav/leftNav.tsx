import { styled } from "@mui/material/styles";
import { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import classes from "./leftNav.module.css";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import LogoutIcon from "@mui/icons-material/Logout";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import VolumeDownOutlinedIcon from "@mui/icons-material/VolumeDownOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";

const StyledList = styled(List)({
  width: "250px",
  backgroundImage: "linear-gradient(to bottom, #00698f, rgb(134, 170, 184))",
});

const StyledListItem = styled(ListItemButton)<{ selected: boolean }>(
  ({ selected }) => ({
    paddingTop: "16px",
    paddingBottom: "16px",
    "&:hover, &.Mui-selected": {
      backgroundColor: "white",
      "& .MuiListItemIcon-root": {
        color: "#267390",
      },
      "& .MuiListItemText-primary": {
        color: "#267390",
      },
    },
    ...(selected && {
      backgroundColor: "white",
      "& .MuiListItemIcon-root": {
        color: "#267390",
      },
      "& .MuiListItemText-primary": {
        color: "#267390",
      },
    }),
  })
);

const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: "36px",
  color: "white",
});

const StyledListItemText = styled(ListItemText)({
  marginLeft: "10px",
  color: "white",
  fontSize: "1.5rem",
});

export const LeftNav = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <StyledList>
      <p className={classes.p}>Coligo</p>
      <StyledListItem
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(0)}
      >
        <StyledListItemIcon>
          <HomeIcon />
        </StyledListItemIcon>
        <StyledListItemText primary="Dashboard" />
      </StyledListItem>

      <StyledListItem
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(1)}
      >
        <StyledListItemIcon>
          <CalendarMonthIcon />
        </StyledListItemIcon>
        <StyledListItemText primary="Schedule" />
      </StyledListItem>

      <StyledListItem
        selected={selectedIndex === 2}
        onClick={(event) => handleListItemClick(2)}
      >
        <StyledListItemIcon>
          <AutoStoriesIcon />
        </StyledListItemIcon>
        <StyledListItemText primary="Courses" />
      </StyledListItem>

      <StyledListItem
        selected={selectedIndex === 3}
        onClick={(event) => handleListItemClick(3)}
      >
        <StyledListItemIcon>
          <SchoolIcon />
        </StyledListItemIcon>
        <StyledListItemText primary="Gradbook" />
      </StyledListItem>

      <StyledListItem
        selected={selectedIndex === 4}
        onClick={(event) => handleListItemClick(4)}
      >
        <StyledListItemIcon>
          <TrendingUpOutlinedIcon />
        </StyledListItemIcon>
        <StyledListItemText primary="Preformance" />
      </StyledListItem>
      <StyledListItem
        selected={selectedIndex === 5}
        onClick={(event) => handleListItemClick(5)}
      >
        <StyledListItemIcon>
          <VolumeDownOutlinedIcon />
        </StyledListItemIcon>
        <StyledListItemText primary="Announcements" />
      </StyledListItem>

      <StyledListItem selected={selectedIndex === -1} onClick={handleLogout}>
        <StyledListItemIcon>
          <LogoutIcon />
        </StyledListItemIcon>
        <StyledListItemText primary="Logout" />
      </StyledListItem>
    </StyledList>
  );
};
