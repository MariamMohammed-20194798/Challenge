import React from "react";
import { useState, useEffect } from "react";
import defaultImg from "../../default.jpeg";
import classes from "./annc.module.css";
import instance from "../../instance";
interface ItemProp {
  user: string;
  title: string;
  content: string;
}
const Announcements: React.FC = () => {
  const [data, setData] = useState<ItemProp[]>([]);
  useEffect(() => {
    const fetchUserHandler = async () => {
      try {
        const res = await instance.get("/annc/");
        const data = res.data.data.anncs;
        console.log(data);
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserHandler();
  }, []);

  return (
    <div className={classes.announcementsContainer}>
      <h2>Announcements</h2>
      {data.map((item, index) => (
        <div key={index} className={classes.announcementCard}>
          <img className={classes.img} alt="user" src={defaultImg} />
          <div>
            <p className={classes.announcementName}>{item.user}</p>
            <p className={classes.announcementTitle}>{item.title}</p>
          </div>
          <p className={classes.announcementContent}>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Announcements;
