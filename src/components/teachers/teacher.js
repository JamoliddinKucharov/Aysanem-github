import React from "react";
import styles from "./teachers.module.css";

const Teacher = React.memo(({ item }) => {
  return (
    <header className={styles.teacher}>
      <img src={item.image} alt="" />
      <h4 dangerouslySetInnerHTML={{ __html: item.name }} />
      <p>
        {item?.descs?.map((desc, index) => (
          <span key={index}>{desc}</span>
        ))}
      </p>
    </header>
  );
});

export default Teacher;
