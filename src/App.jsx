import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./components/Navbar";
import Elonimage from "./assets/resim/elon.jpg";
import Teslaimage from "./assets/resim/tesla.jpg";
import Paypalimage from "./assets/resim/paypal.png";
import Teslamlem from "./assets/resim/tesla-ablem.jpg";
import Theboroimage from "./assets/resim/theboroing.png";
import Twitterimage from "./assets/resim/twitter.png";
import Spaceximage from "./assets/resim/spacex.jpg";
import Openİmage from "./assets/resim/open.png";
import React from "react";
import MySlider from "./components/MySlider";

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
    <div className="h-[100vh] w-[100vw] overflow-x-hidden">
      <div className="bg-[#eee]">
        <NavBar className=" " />

        <div className="container mt-5 ">
          <div className="row d-flex justify-content-center">
            <div className="col-md-7">
              <div className="card p-3 py-4">
                {/*Resim*/}

                <div className="flex justify-center w-[100vw]">
                  <img
                    className="h-64  mt-16 border-solid mb-32 border-sky-500 rounded-md border-4"
                    src={Elonimage}
                    alt="elon.jpg"
                  />
                </div>

                <div className="">
                  <div className="  justify-center w-[90vw] ml-[5%] bg-[#0369a1]  border-solid border-[4px 250px 8px 250px] text-center border-[#0369a1] rounded-[50px] border-4 text-white ">
                    PROFİLE
                  </div>
                  <h5 className="justify-center w-[50vw] ml-[30%] mt-[30px] bg-[#0369a1] border-solid border-[4px 250px 8px 250px] text-center border-[#0369a1] rounded-[50px] border-4 text-white ">
                    Elon Musk
                  </h5>
                  <h1 className="justify-center w-[50vw] ml-[30%] mt-[30px] mb-[30px] bg-[#0369a1]   border-solid border-[4px 250px 8px 250px] text-center border-[#0369a1] rounded-[50px] border-4 text-white ">
                    COMPANIES
                  </h1>
                </div>
                <MySlider />
                <div>
                  <div className="content mt-[80px]  bg-[#1680c2] mb-[100px] text-center justify-center ml-[25.8%] text-[black]  h-[2200px]">
                    <div>
                      <span className="mt-32 font-[serif] text-[50px]  ">
                        Companies
                      </span>
                      <div className="mt-[40px] text-[#eee]">
                        <a
                          className="link-tesla"
                          href="https://www.tesla.com/tr_tr"
                          target="_blank"
                        >
                          <ul className="font-[serif] text-[35px] mb-[30px] hover:text-[black]">
                            <li className="one">Tesla</li>
                          </ul>
                        </a>
                        <a
                          className="link-tesla"
                          href="https://www.paypal.com/tr/home"
                          target="_blank"
                        >
                          <ul className="font-[serif] text-[35px] mb-[30px] hover:text-[black] ">
                            <li className="one">Paypal</li>
                          </ul>
                        </a>

                        <a
                          className="link-tesla"
                          href="https://twitter.com/"
                          target="_blank"
                        >
                          <ul className="font-[serif] text-[35px] mb-[30px] hover:text-[black]">
                            <li className="one">Twitter</li>
                          </ul>
                        </a>
                        <a
                          className="link-tesla"
                          href="https://openai.com/"
                          target="_blank"
                        >
                          <ul className="font-[serif] text-[35px] mb-[30px] hover:text-[black]  ease-in-out ">
                            <li className="one">OpenAI</li>
                          </ul>
                        </a>
                        <a
                          className="link-tesla"
                          href="https://www.spacex.com/"
                          target="_blank"
                        >
                          <ul className="font-[serif] text-[35px] mb-[30px] hover:text-[black]">
                            <li className="one">SpaceX</li>
                          </ul>
                        </a>
                        <a
                          className="link-tesla"
                          href="https://www.boringcompany.com/"
                          target="_blank"
                        >
                          <ul className="font-[serif] text-[35px] mb-[30px] hover:text-[black]">
                            <li className="two">The Boring Company</li>
                          </ul>
                        </a>
                      </div>
                    </div>
                    <div>
                      <span className="font-[serif] text-[35px] mb-[30px] ">
                        Career
                      </span>
                    </div>

                    <div>
                      <p className="text-[20.5px] px-[200px] mt-[30px]">
                        Musk, 1995'te Stanford’da uygulamalı fizik ve malzeme
                        bilimi alanında doktoraya başladı. Ancak iki gün sonra
                        kardeşi Kimbal Musk’la beraber yeni organizasyonlar için
                        bir çevrim içi içerik yayımlama yazılımı olan Zip2
                        projesine başlamak için okulu bıraktı.i 1999’da,
                        Compaq'ın AltaVista birimi Zip2’yu 307 milyon dolar
                        nakit ve 34 milyon dolarlık hisse senedi vererek satın
                        aldı.
                      </p>
                      <p className="text-[20.5px] px-[200px] ">
                        <a
                          className="link-tesla"
                          href="https://www.paypal.com/tr/home"
                          target="_blank"
                        >
                          <h3 className="font-[serif] text-[35px] mt-[20px] mb-[20px]">
                            PayPal
                          </h3>
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
                          <h3 className="font-[serif] text-[35px] mt-[20px] mb-[20px]">
                            SpaceX
                          </h3>
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
                          <h3 className="font-[serif] text-[35px] mt-[20px] mb-[20px]">
                            Tesla Motors
                          </h3>
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
                          <h3 className="font-[serif] text-[35px] mt-[20px] mb-[20px]">
                            {" "}
                            The Boring Company
                          </h3>
                        </a>
                        Musk, 2016 yılında tüneller inşa etmek için The Boring
                        Company'yi TBC kurdu.{" "}
                        <a
                          className="link-tesla"
                          href="https://www.twitter.com/"
                          target="_blank"
                        >
                          <h3 className="font-[serif] text-[35px] mt-[20px] mb-[20px]">
                            Twitter
                          </h3>
                        </a>
                        Musk , 2022 yılında büyük Amerikan sosyal ağ hizmeti
                        Twitter'ı 44 milyar dolara satın almayı kabul etti.{" "}
                        <a
                          className="link-tesla font-[serif] text-[35px] mt-[20px] mb-[20px]"
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

                  <div className="sidebar bg-[#114363] mt-[80px]   mb-[100px] text-center justify-center ml-[25.8%] text-[black]  h-[2200px]">
                    <img
                      className="img-musk h-[250px] mx-[370px] "
                      src={Teslaimage}
                      alt="tesla.jpg"
                    />

                    <a href="https://www.paypal.com/tr/home" target="_blank">
                      <img
                        className="  h-[250px]"
                        src={Paypalimage}
                        alt="paypal.png"
                      />
                    </a>

                    <a href="https://www.tesla.com/tr_tr" target="_blank">
                      <img
                        className="img-teslamblem h-[250px]"
                        src={Teslamlem}
                        alt="tesla-ablem.jpg"
                      />
                    </a>

                    <a href="https://www.boringcompany.com/" target="_blank">
                      <img
                        className="img-theb h-[100px]"
                        src={Theboroimage}
                        alt="theboroing.png"
                      />
                    </a>

                    <a href="https://www.twitter.com/" target="_blank">
                      <img
                        className="img-twitter h-[250px]"
                        src={Twitterimage}
                        alt="twitter.png"
                      />
                    </a>

                    <a href="https://www.spacex.com/" target="_blank">
                      <img
                        className="img-spacex h-[250px]"
                        src={Spaceximage}
                        alt="spacex.jpg"
                      />
                    </a>

                    <a href="https://openai.com/" target="_blank">
                      <img
                        className="img-open h-[250px]"
                        src={Openİmage}
                        alt="open.png"
                      />
                    </a>
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
      </div>
    </div>
  );
}

export default App;
