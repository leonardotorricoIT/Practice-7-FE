import React from "react";
import "./UserCard.css";
type UserCardProps = {
  name: string;
  age: number;
  onClick: (name: string) => void;
};

const UserCard: React.FC<UserCardProps> = ({ name, age, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(name)}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
