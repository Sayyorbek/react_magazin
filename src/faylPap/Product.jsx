import React from "react";
import { useNavigate } from "react-router-dom";


const Product = ({ cart, addtoCartFunc, deleteHandler }) => {
  let totalPrice = cart.reduce(
    (total, item) => total + item.narxi * item.count,
    0
  );
  let navigate = useNavigate();
  return (
    <div className="dad">
      {/* <button className="x">x</button> */}
      <button
        className="but"
        onClick={() => {
          navigate(-1);
        }}
      >
        go back
      </button>
      {cart.map((item) => {
        return (
          <div>

            <div className="bachesh">
              <img src={item.rasm} alt="" />
              <h2>{item.nomi}</h2>
              <h3>Narxi:{item.narxi}$</h3>
              <h4>Xotirasi:{item.xotirasi}</h4>
              <h4>Maden in:{item.madenIn}</h4>
              <h4>Kampaniya:{item.firma}</h4>
              <div className="plasminas">
                <button onClick={() => addtoCartFunc(item, "+")}>+</button>
                <h4>{item.count}</h4>
                <button
                  disabled={item.count === 1 ? true : false}
                  onClick={() => addtoCartFunc(item, "-")}
                >
                  -
                </button>
              </div>

              <h3>
                Narxi: {item.narxi} x {item.count} = {item.subtotal} . $
              </h3>
              <br />
              <button className="delete" onClick={() => deleteHandler(item.id)}>
                delete
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <h1>Total:{totalPrice}</h1>
      </div>
    </div>
  );
};

export default Product;
