import React from "react";
import classes from "./examTips.module.css";

const ExamsTips = () => {
  return (
    <div className={classes.examsTipsContainer}>
      <p className={classes.examsTipsTitle}>EXAMS TIME</p>
      <div className={classes.examsTipsTip}>
        <p className={classes.examsTipsTip}>
          Here we are, Are you ready to fight?
        </p>
        <p className={classes.examsTipsTip}>
          Don't worry, we prepared some tips to be ready for your exams.
        </p>
        <p className={classes.examsTipsQuote}>
          "Nothing happens until something moves- <br />
          Albert Einsten"
        </p>
        <button className={classes.examsTipsBtn}>View exams tips</button>
      </div>
    </div>
  );
};

export default ExamsTips;
