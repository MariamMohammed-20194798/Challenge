// LeftNavLayout.tsx
import React, { FC } from "react";
import classes from "./leftNavLayout.module.css";
import { Dashboard } from "../dashbord/dashboard";
import { LeftNav } from "../leftNav/leftNav";

interface LeftNavLayoutProps {
  isLogged: boolean;
}

export const LeftNavLayout: FC<LeftNavLayoutProps> = ({ isLogged }) => {
  return (
    <div className={classes.leftNavLayout}>
      <LeftNav />
      {isLogged && <Dashboard />}
    </div>
  );
};
