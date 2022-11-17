import React, {useState} from 'react';
import Card from '../../../components/card/Card';

const DummyData = [
  {
    id: 1,
    text: `
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
        <tr>
          <td align="center">
            <a href="https://toyota.jp/?utm_campaign=prius_sales_2211_dp&utm_medium=email&utm_source=owned-t&utm_term=all_owned_tk_221116_prius&utm_content=s342_ml_ml_prius_e_h_l1" onclick="sc('toyotajp:tjp:all_owned_tk_221116_prius1')" title="" data-linkto="other">
              <img src="https://toyota.jp/info/mailmagazine/20221116/images/B.jpg" alt="TOYOTA Mail Magazine 2022.11.16" width="600" style="display: block; padding: 0px; text-align: center; height: auto; width: 100%; border: 0px;">
            </a>
          </td>
        </tr>
      </table>
    `,
  },
  {
    id: 2,
    text: `
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
        <tr>
          <td align="center">
            <img src="https://toyota.jp/info/mailmagazine/20221116/images/C1.jpg" alt="Hybrid Reborn 誕生から25年間、車名が意味する「先駆け」の言葉の通り、HEVの普及を牽引し続けたプリウス。" width="600" style="display: block; padding: 0px; text-align: center; height: auto; width: 100%; border: 0px;">
          </td>
        </tr>
      </table>
    `,
  },
  {
    id: 3,
    text: `
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
        <tr>
          <td align="center">
            <img src="https://toyota.jp/info/mailmagazine/20221116/images/C2.jpg" alt="HEVが普及したことで、HEVの牽引役という役割が1つの節目を迎えた今、「次の25年もお客様に愛され続けるために、プリウスはどうあるべきか。」開発チームはプリウスのあり方をゼロから考えました。" width="600" style="display: block; padding: 0px; text-align: center; height: auto; width: 100%; border: 0px;">
          </td>
        </tr>
      </table>
    `,
  },
  {
    id: 4,
    text: `
    <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
      <tr>
        <td align="center">
          <a href="https://toyota.jp/info/prius_special/?utm_campaign=prius_sales_2211_dp&utm_medium=email&utm_source=owned-t&utm_term=all_owned_tk_221116_prius&utm_content=s342_ml_ml_prius_e_h_l2" onclick="sc('toyotajp:tjp:all_owned_tk_221116_prius2')" title="" data-linkto="other">
            <img src="https://toyota.jp/info/mailmagazine/20221116/images/C3.jpg" alt="特設サイトはこちら" width="600" style="display: block; padding: 0px; text-align: center; height: auto; width: 100%; border: 0px;">
          </a>
        </td>
      </tr>
    </table>
    `,
  },
  {
    id: 5,
    text: `
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
        <tr>
          <td align="center">
            <img src="https://toyota.jp/info/mailmagazine/20221116/images/D1.jpg" alt="DESIGN 一目惚れするデザイン HYBRID REBORN 新たな時代の先駆けに 虜にさせるはしり DRIVE" width="600" style="display: block; padding: 0px; text-align: center; height: auto; width: 100%; border: 0px;">
          </td>
        </tr>
      </table>
    `,
  },
  {
    id: 6,
    text: `
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
        <tr>
          <td align="center">
            <img src="https://toyota.jp/info/mailmagazine/20221116/images/D2.jpg" alt="" width="600" style="display: block; padding: 0px; text-align: center; height: auto; width: 100%; border: 0px;">
          </td>
        </tr>
      </table>
    `,
  },
  {
    id: 7,
    text: `
      <table width="100%" cellspacing="0" cellpadding="0" role="presentation">
        <tr>
          <td align="center">
            <img src="https://toyota.jp/info/mailmagazine/20221116/images/D3.jpg" alt="DESIGN 一目惚れするデザイン『感性に響く』スタイリッシュな外形デザイン" width="600" style="display: block; padding: 0px; text-align: center; height: auto; width: 100%; border: 0px;">
          </td>
        </tr>
      </table>
    `,
  },
]

const ContentMail = () => {
  const [cards, setCards] = useState(DummyData);

  const handleDrag = (dragIndex, hoverIndex) => {
    setCards((prev) => {
      const copy = [...prev];
      const card = copy[dragIndex];
      // remove origin
      copy.splice(dragIndex, 1);
      // add to target
      copy.splice(hoverIndex, 0, card);
      return copy;
    });
  };

  return (
    <div>
      {cards.map((item, index) => (
        <Card
          key={item.id}
          index={index}
          text={item.text}
          handleDrag={handleDrag}
          state={cards}
        />
      ))}
    </div>
  );
}

export default ContentMail;
