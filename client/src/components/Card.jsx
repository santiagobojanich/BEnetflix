import { NavLink } from "react-router-dom";
import style from "../styles/Card.module.css"

export const Card = ({ name, image, id }) => {
  return (
    
      <div className={style.card_box}>
      <NavLink to={`/content/${id}`}>
      <h2> {name} </h2>
      <img src={image}  alt=""/>
      </NavLink>
      </div>

  );
};
 