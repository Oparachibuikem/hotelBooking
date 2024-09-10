import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const ListGroup = () => {
  const item = ["nigeria", "zimbabwe", "egypt", "malawi", "usa"];

  return (
    <div>
      <ul className="list-group">
        {item.map((i) => (
          <li key={item}>{i}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
