import React from "react";
import { useParams } from "react-router-dom";

const Viu = ({ phone }) => {
  let { id } = useParams();
  return (
    <div className="tavarDiv">

      {phone.map((item) => {
        if (id == item.id) {
          return (
            
            <>
              <img src={item.rasm} alt="" />
              <h2>{item.nomi}</h2>
              <h3>Narxi:{item.narxi}sum</h3>
              <h4>Xotirasi:{item.xotirasi}</h4>
              <h4>Maden:{item.madenIn}</h4>
              <h4>Kampaniya:{item.firma}</h4>
            </>
          );
        }
      })}
    </div>
  );
};

export default Viu;
