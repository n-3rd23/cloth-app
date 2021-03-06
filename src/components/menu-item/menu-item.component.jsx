import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({title,imageUrl,size}) => {
  return (
    <div className={`${size} menu-item`}>
      <div style={{backgroundImage: `url(${imageUrl})`}}  className="background-image"></div>
      <div className="content">
        <h1 className="title capitalize">{title}</h1>
        <span>Span For Button</span>
      </div>
    </div>
  );
};

export default MenuItem;
