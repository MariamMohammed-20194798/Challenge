import { FC } from "react";
import classes from "./dashboard.module.css";
import SearchBar from "../searchBar/searchBar";
import Announcements from "../annc/annc";
import ExamsTips from "../examTips/examTips";
import WhatsDue from "../whatsDue/whatsDue";
export interface DashboardProps {}

export const Dashboard: FC<DashboardProps> = (props) => {
  return (
    <div className={classes.container}>
      <SearchBar />
      <ExamsTips />
      <div className={classes.twoContainers}>
        <Announcements />
        <div>
          <WhatsDue />
        </div>
      </div>
    </div>
  );
};
