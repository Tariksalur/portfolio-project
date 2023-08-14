import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./Navbar";
import resim from "../resim/elon.jpg";
import resim2 from "../resim2/tesla.jpg";
import resim3 from "../resim3/paypal.png";
import resim4 from "../resim4/tesla-ablem.jpg";
import resim5 from "../resim5/theboroing.png";
import resim6 from "../resim6/twitter.png";
import resim7 from "../resim7/spacex.jpg";
import resim8 from "../resim8/open.png";
import React from "react";
import MySlider from "./MySlider";

function App() {
  const [count, setCount] = useState(0);
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("enter an item");
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldItems) => [...oldItems, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <> <div className="bg-[#eee]">

    
      <NavBar />
      <br />

      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4">
              {/*tarık salur resim   */}

              <div>
                <img className="img-re" src={resim} alt="elon.jpg" />
              </div>

              <div className="text-center mt-3">
                <span className="bg-secondary p-1 px-4 rounded text-white">
                  PROFİLE
                </span>
                <h5 className="mt-2 mb-0">Elon Musk</h5>
                <div>
                  <h1 className="slider-companys">COMPANIES</h1>
                  
                  <MySlider />
                </div>
                <br />
                <br />
                <div>
                  <div className="content">
                    <div>
                      <br />
                      <br />
                      <span className="sirketler">Companies</span>
                      <br />
                      <br />
                      <a
                        className="link-tesla"
                        href="https://www.tesla.com/tr_tr"
                        target="_blank"
                      >
                        <ul className="ul-one">
                          <li className="one">Tesla</li>
                        </ul>
                      </a>
                      <a
                        className="link-tesla"
                        href="https://www.paypal.com/tr/home"
                        target="_blank"
                      >
                        <ul className="ul-one">
                          <li className="one">Paypal</li>
                        </ul>
                      </a>
                      <a
                        className="link-tesla"
                        href="https://twitter.com/"
                        target="_blank"
                      >
                        <ul className="ul-one">
                          <li className="one">Twitter</li>
                        </ul>
                      </a>
                      <a
                        className="link-tesla"
                        href="https://openai.com/"
                        target="_blank"
                      >
                        <ul className="ul-one">
                          <li className="one">OpenAI</li>
                        </ul>
                      </a>
                      <a
                        className="link-tesla"
                        href="https://www.spacex.com/"
                        target="_blank"
                      >
                        <ul className="ul-one">
                          <li className="one">SpaceX</li>
                        </ul>
                      </a>
                      <a
                        className="link-tesla"
                        href="https://www.boringcompany.com/"
                        target="_blank"
                      >
                        <ul className="ul-one">
                          <li className="two">The Boring Company</li>
                        </ul>
                      </a>
                    </div>
                    <div>
                      <span className="kariyer">Career</span>
                    </div>

                    <div>
                      <p className="text">
                        Musk, 1995'te Stanford’da uygulamalı fizik ve malzeme
                        bilimi alanında doktoraya başladı. Ancak iki gün sonra
                        kardeşi Kimbal Musk’la beraber yeni organizasyonlar için
                        bir çevrim içi içerik yayımlama yazılımı olan Zip2
                        projesine başlamak için okulu bıraktı.i 1999’da,
                        Compaq'ın AltaVista birimi Zip2’yu 307 milyon dolar
                        nakit ve 34 milyon dolarlık hisse senedi vererek satın
                        aldı.
                      </p>
                      <p className="text">
                        <a
                          className="link-tesla"
                          href="https://www.paypal.com/tr/home"
                          target="_blank"
                        >
                          <h3>PayPal</h3>
                        </a>
                        PayPal Musk, 1999 yılının mart ayında bir çevrimiçi
                        finans ve ödeme servisi olan X.com’un ortak kuruculuğunu
                        yaptı. Ertesi yıl X.com bir 50/50 birleşme anlaşmasıyla
                        X.com ile aynı büyüklükte bir açık artırma sistemi olan
                        Confinity’yi bünyesine katarak PayPal’ı oluşturdu.
                        <a
                          className="link-tesla"
                          href="https://www.spacex.com/"
                          target="_blank"
                        >
                          <h3>SpaceX</h3>
                        </a>
                        SpaceX Musk, eski ABD başkanı Barack Obama ile Falcon 9
                        fırlatma tesisinde, 2010 Musk, üçüncü şirketi Space
                        Exploration Technologies’i SpaceX, Haziran 2002’de
                        kurdu.
                        <a
                          className="link-tesla"
                          href="https://www.tesla.com/tr_tr"
                          target="_blank"
                        >
                          <h3>Tesla Motors</h3>
                        </a>
                        Tesla Motors ilk olarak elektrikli bir spor araba olan
                        Tesla Roadster’ı üretti ve otuz bir ülkede yaklaşık
                        2.500 adet sattı. Tesla, ilk dört kapılı sedanı Model
                        S’i 22 Haziran 2012’de teslim etti ve SUV/minivan
                        pazarını hedefleyen üçüncü ürünü Model X 9 Şubat 2012’de
                        duyurdu. Model X’in üretimine 2014’te başlanması
                        planlanıyor. Kendi araçlarına ek olarak Tesla, Daimler’e
                        Smart EV ve Mercedes A serisi ve Toyota’ya gelecekte
                        çıkaracağı RAV4 için elektrik motorları ve güç aktarım
                        organları satmaktadır. Ayrıca Musk, bu iki şirketi de
                        Tesla’ya uzun vadeli yatırımcı olarak kazandırmayı
                        başarmıştır.
                        <a
                          className="link-tesla"
                          href="https://www.boringcompany.com/"
                          target="_blank"
                        >
                          <h3> The Boring Company</h3>
                        </a>
                        Musk, 2016 yılında tüneller inşa etmek için The Boring
                        Company'yi TBC kurdu.{" "}
                        <a
                          className="link-tesla"
                          href="https://www.twitter.com/"
                          target="_blank"
                        >
                          <h3>Twitter</h3>
                        </a>
                        Musk , 2022 yılında büyük Amerikan sosyal ağ hizmeti
                        Twitter'ı 44 milyar dolara satın almayı kabul etti.{" "}
                        <a
                          className="link-tesla"
                          href="https://openai.com/"
                          target="_blank"
                        >
                          <h3>OpenAI</h3>
                        </a>
                        ABD merkezli yapay zekâ araştırma şirketi. Şirketin
                        genel amacı insanlığa fayda sağlayabilecek yapay zekâ
                        hakkında araştırma yapmaktır. 2015 yılının sonlarında
                        San Francisco'da kurulan şirket, patentlerini ve
                        araştırmalarını halka açık hale getirerek diğer kurum ve
                        araştırmacılarla “serbest iş birliği yapmayı”
                        amaçlamaktadır. Elon Musk ve Sam Altman, yapay genel
                        zekâdan kaynaklanan varoluşsal risk endişelerinden
                        dolayı bu şirketi kurduklarını açıklamıştır.
                      </p>
                    </div>
                  </div>

                  <div className="sidebar">
                    <img className="img-tesla" src={resim2} alt="tesla.jpg" />
                    <br />
                    <br />
                    <a
                      className="link-tesla"
                      href="https://www.paypal.com/tr/home"
                      target="_blank"
                    >
                      <img className="img-paypal" src={resim3} alt="paypal.png" />
                    </a>
                    <br />
                    <br />
                    <a
                      className="link-tesla"
                      href="https://www.tesla.com/tr_tr"
                      target="_blank"
                    >
                      <img
                        className="img-teslamblem"
                        src={resim4}
                        alt="tesla-ablem.jpg"
                      />
                    </a>
                    <br />
                    <br />
                    <a
                      className="link-tesla"
                      href="https://www.boringcompany.com/"
                      target="_blank"
                    >
                      <img className="img-theb" src={resim5} alt="theboroing.png" />
                    </a>
                    <br />
                    <br />
                    <a
                      className="link-tesla"
                      href="https://www.twitter.com/"
                      target="_blank"
                    >
                      <img className="img-twitter" src={resim6} alt="twitter.png" />
                    </a>
                    <br />
                    <br />
                    <a
                      className="link-tesla"
                      href="https://www.spacex.com/"
                      target="_blank"
                    >
                      <img className="img-spacex" src={resim7} alt="spacex.jpg" />
                    </a>
                    <br />
                    <br />
                    <a
                      className="link-tesla"
                      href="https://openai.com/"
                      target="_blank"
                    >
                      <img className="img-open" src={resim8} alt="open.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div classNameName="App">
        <h1>Todo List </h1>

        <input
          type="text"
          placeholder="add an item.."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />

        <button onClick={() => addItem()}>Add</button>

        <ul className="ul-list">
          {items.map((item) => {
            return (
              <li className="li-list" key={item.id}>
                {item.value}{" "}
                <button
                  className="btn-delete"
                  onClick={() => deleteItem(item.id)}
                ></button>
              </li>
            );
          })}
        </ul>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      </div>
    </>
  );
}

export default App;
