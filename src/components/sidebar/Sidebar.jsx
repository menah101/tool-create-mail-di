import React from "react";
import { useDispatch } from "react-redux";
import { FcAddImage } from "react-icons/fc";
import { addElement } from "../../redux-toolkit/reducers/email/email.reducer";
import "./Sidebar.scss";

const templateImage = ( anchorLink, imgLink, clickSC, textAlt ) => {
  return (
    `<table width="100%" cellspacing="0" cellpadding="0" role="presentation">
      <tr>
        <td align="center">
          <a href="${anchorLink}" onclick="sc('${clickSC}')" title="" data-linkto="other">
            <img src="${imgLink}" alt="${textAlt}" width="600" style="display: block; padding: 0px; text-align: center; height: auto; width: 100%; border: 0px;">
          </a>
        </td>
      </tr>
    </table>`
  );
} 

const templateImageHref = (imgLink, textAlt) => {
  return (
    `<table width="100%" cellspacing="0" cellpadding="0" role="presentation">
      <tr>
        <td align="center">
          <img src="${imgLink}" alt="${textAlt}" width="600" style="display: block; padding: 0px; text-align: center; height: auto; width: 100%; border: 0px;">
        </td>
      </tr>
    </table>`
  );
} 

function Sidebar() {
  const dispatch = useDispatch();

  const handleAddElement = (key) => {
    if(key === 'img') {
      console.log('img:', templateImage('https://toyota.jp/?utm_campaign=prius_sales_2211_dp&utm_medium=email&utm_source=owned-t&utm_term=all_owned_tk_221116_prius&utm_content=s342_ml_ml_prius_e_h_l1','https://toyota.jp/info/mailmagazine/20221116/images/B.jpg','toyotajp:tjp:all_owned_tk_221116_prius1','TOYOTA Mail Magazine 2022.11.16'));
    }

    if (key === 'imgHref') {
      console.log('imgHref:', templateImageHref('https://toyota.jp/info/mailmagazine/20221116/images/B.jpg','TOYOTA Mail Magazine 2022.11.16'));
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <div className="sidebar__icon" onClick={() => handleAddElement("img")}>
              <FcAddImage size={40} className="sidebar__iconAddImage" />
              <span>Image</span>
            </div>
          </li>
          <li className="sidebar__item">
            <div className="sidebar__icon" onClick={() => handleAddElement("imgHref")}>
              <FcAddImage size={40} className="sidebar__iconAddImage" />
              <span>Image link</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
