import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import logo from "../../assets/logo_uzum.png";
import { VscFileSubmodule } from "react-icons/vsc";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { GiBrazilFlag } from "react-icons/gi";
import nextlog from "../../assets/har_kungi.png"
import "./Header.css";
const Header = ({ cart }) => {
  let [ms, setms] = useState(false);
  return (
    <div className="divHeader">
      <div className="display bac">
        <div className="maxw">
          <div className="display dis top">
          <li>Toshkent</li>
            <li>Sotuvchi bo`lish | Topshirish punktini ochish</li>
            <li>Savol javob buyurtmalarim</li>
            <li className="display min">
              <GiBrazilFlag />
              Ozbekcha
            </li>
          </div>
        </div>
      </div>
      <div className="container">
        <header>
          <div className="display">
            <img src={logo} alt="#" />
            <h4>uzum market</h4>
            <button>
              <VscFileSubmodule />
              katalog
            </button>
          </div>
          <ul>
            <li>
              <input
                type="text"
                placeholder="Mahsulotlar va turkumlar izlash"
              />
            </li>
          </ul>

          <div className="hd2">
            <div className="baskendiv">
              <NavLink to="product">
                {/* <i class="bx bx-cart-alt"></i> */}
                <div className="button_bar">
                  <button>
                    <HiOutlineUser />
                    kirish
                  </button>
                  <button>
                    {" "}
                    <IoMdHeartEmpty />
                    saralangan
                  </button>
                  <button>
                    <MdOutlineShoppingBag />
                    savat{" "}
                  </button>
                </div>
              </NavLink>
              <p className="ph">{cart.length}</p>
            </div>
          </div>
        </header>
          <div className="display nex_header">
            <div className="display min">
            <img src={nextlog} alt="" />
              <b> Harkun foyda</b>
            </div>
            <p>
              Elektronika 
            </p>
            <p>
              Maishiy texmika
            </p>
            <p>
              kiyim
            </p>
            <p>
              poyavzallar
            </p>
            <p>
              aksesuarlar
            </p>
            <p>
              Go`zallik va parvarish
            </p>
            <p>
              salomatlik
            </p>
            <p>
              uy ro`zg`or buyumlari
            </p>
            <p>
              qorolish va tamirlash
            </p>
            <p>
              yana\/
            </p>
          </div>
      </div>
    </div>
  );
};

export default Header;
