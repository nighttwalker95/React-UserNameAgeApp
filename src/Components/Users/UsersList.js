import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UserLists = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} Years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserLists;
