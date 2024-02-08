import React from "react";
import { useEffect, useState } from "react";
import instance from "../../instance";
import styles from "./whatsDue.module.css";

interface ItemProp {
  course: string;
  topic: string;
  date: string;
}

const WhatsDue: React.FC = () => {
  const [data, setData] = useState<ItemProp[]>([]);
  useEffect(() => {
    const fetchUserHandler = async () => {
      try {
        const res = await instance.get("/quiz/");
        const data = res.data.data.quizzes;
        console.log(data);
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserHandler();
  }, []);
  const convertToTime = (date: string) => {
    const time = new Date(date);
    const group1 = time.toLocaleTimeString().slice(0, 4);
    const group2 = time.toLocaleTimeString().slice(7, 11);
    const result = group1 + group2;
    return result;
  };
  return (
    <div className={styles.whatsDue}>
      <h2>What's Due</h2>
      <div className={styles.list}>
        {data.map((item, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.course}>Course : {item.course} </span>
            <span className={styles.topic}>Topic : {item.topic}</span>
            <span className={styles.dueDate}>
              Time : {convertToTime(item.date)}
            </span>
            <button className={styles.examsTipsBtn}>Start Quiz</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsDue;
