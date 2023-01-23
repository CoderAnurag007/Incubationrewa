import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import MenueItems from "../Components/MenueItems";
import styles from "../styles/Home.module.css";
import { MenuChat, MenuChinese, MenuPakoda, MenuSnacks } from "../Menu";

export default function Home() {
  const [scrollTarget, setScrollTarget] = useState();

  const handleNav = (e) => {
    e.preventDefault();
    setScrollTarget(e.target.getAttribute("href"));
    scrollToTarget();
  };
  const scrollToTarget = () => {
    const target = document.querySelector(scrollTarget && scrollTarget);
    target && target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Land PAge */}
      <div className={styles.maincontainer}>
        <div className={styles.backimg}>
          <Image
            className={styles.choleimg}
            width={470}
            height={320}
            src="/chole.png"
            alt=""
          />
          <Image
            className={styles.logoimg}
            width={150}
            height={150}
            src="/magadha.png"
            alt=""
          />
        </div>
        <div className={styles.navlinks}>
          <div>
            <a href="#aboutus">About Us</a>
          </div>
          <div>
            <a href="#services">Our Services</a>
          </div>
          <div>
            <a href="#foodmenu">Food Menu</a>
          </div>
        </div>
      </div>
      <div className={styles.welcomebox}>
        <h1>Welcome To Magadha Foods & Snacks</h1>
        <div>
          Welcome to our sweet haven! Indulge in our heavenly desserts and
          scrumptious snacks. <br /> Classic to creative, we have something for
          everyone. Come satisfy your cravings with us.
        </div>
      </div>

      {/* Our Special  */}
      <div className={styles.ourspecial}>
        <h2>Our Special</h2>
        <div className={styles.cardsbox}>
          <div className={styles.specialcard}>
            <div style={{ height: "90%" }}>
              <Image alt=" itmes" src={"/ladoo.png"} width={220} height={200} />
            </div>
            <span>Desi Ghee Bundi Laddu</span>
          </div>
          <div className={styles.specialcard}>
            <div style={{ height: "90%", paddingTop: "20px" }}>
              <Image
                alt=" itmes"
                src={"/cocoladoo.png"}
                width={220}
                height={150}
              />
            </div>
            <span>Nariyal Laddu</span>
          </div>
          <div className={styles.specialcard}>
            <div style={{ height: "90%" }}>
              <Image
                alt=" itmes"
                src={"/gulabjamun.png"}
                width={200}
                height={200}
              />
            </div>
            <span>Gulab Jamun</span>
          </div>
          <div className={styles.specialcard}>
            <div style={{ height: "90%", paddingTop: "20px" }}>
              <Image
                alt=" itmes"
                src={"/samosa.png"}
                width={220}
                height={150}
              />
            </div>
            <span>Special Samosa</span>
          </div>
          <div className={styles.specialcard}>
            <div style={{ height: "90%", paddingTop: "20px" }}>
              <Image alt=" itmes" src={"/bemi.png"} width={200} height={150} />
            </div>
            <span>Bedmi Poori</span>
          </div>
          <div className={styles.specialcard}>
            <div style={{ height: "90%" }}>
              <Image
                alt=" itmes"
                src={"/paneer.png"}
                width={230}
                height={180}
              />
            </div>
            <span>Paneer Jalebi</span>
          </div>
          <div className={styles.specialcard}>
            <div style={{ height: "90%" }}>
              <Image
                alt=" itmes"
                src={"/chilli.png"}
                width={230}
                height={180}
              />
            </div>
            <span> Chilli Paneer</span>
          </div>
          <div className={styles.specialcard}>
            <div style={{ height: "90%" }}>
              <Image alt=" itmes" src={"/chow.png"} width={230} height={180} />
            </div>
            <span> Singapuri Chowmein</span>
          </div>
          <div className={styles.specialcard}>
            <div style={{ height: "90%", marginTop: "20px" }}>
              <Image
                alt=" itmes"
                src={"/breadpakora.png"}
                width={230}
                height={160}
              />
            </div>
            <span> Bread Pakora</span>
          </div>
        </div>
      </div>

      {/* Order Now */}
      <div className={`${styles.ordernow}`}>
        <div style={{ marginTop: "3rem", fontWeight: "500" }}>
          Order Now to Get Delicious Experience Now{" "}
        </div>
        <div className={`${styles.btngrad}`}>Order Now</div>
        <div style={{ fontWeight: "500" }}>
          Or Call - 9871788245 / 8002040789 / 8929106647
        </div>
      </div>

      {/* Our Services */}
      <div id="services" className={`${styles.ourservices}`}>
        <h2>Our Services</h2>
        <div>
          <Image alt=" itmes" src={"/deliver.png"} width={100} height={100} />
          <span>
            We Provide Free! Delivery of your Mesmerizing and Delicious Food at
            your Door Step for Min. Order-150rs upto 3Km
          </span>
        </div>
        <div>
          <Image alt=" itmes" src={"/burger.png"} width={100} height={100} />
          <span>
            Delicious Food made with quality materials and Cooked with hygine
          </span>
        </div>
      </div>
      {/* About Us */}
      <div id="aboutus" className={`${styles.aboutus}`}>
        <h2>About Us</h2>
        <div>
          Magadha Restaurant is the sweetest spot in town! We serve up delicious
          sweets and snacks that will make your taste buds jump for joy. Our
          menu is full of traditional and contemporary treats that will tickle
          your fancy. We only use the freshest and finest ingredients, so you
          can trust that our food is as good for you as it is delicious. Our
          team of skilled chefs are like Willy Wonka, but with less hair and
          more spice. Whether you are in the mood for something sweet or savory,
          Magadha Restaurant is the place to be! Come on down and taste the
          magic of India!.
        </div>
      </div>

      {/* Food Menu */}
      <div className={`${styles.menucontainer}`}>
        <h2 id="foodmenu" style={{ textAlign: "center" }}>
          Our Food Menu
        </h2>

        <div className={`${styles.menubox}`}>
          <div className={`${styles.menucate}`}>
            <h3>Snacks</h3>
            {MenuSnacks.map((item) => {
              return (
                <MenueItems
                  key={item.name}
                  name={item.name}
                  price={item.price}
                />
              );
            })}
          </div>
          <div className={`${styles.menucate}`}>
            <h3>Chatori Chat</h3>
            {MenuChat.map((item) => {
              return (
                <MenueItems
                  key={item.name}
                  name={item.name}
                  price={item.price}
                />
              );
            })}
          </div>
          <div className={`${styles.menucate}`}>
            <h3>Chinese</h3>
            {MenuChinese.map((item) => {
              return (
                <MenueItems
                  key={item.name}
                  name={item.name}
                  price={item.price}
                />
              );
            })}
          </div>
          <div className={`${styles.menucate}`}>
            <h3>Pakoda</h3>
            {MenuPakoda.map((item) => {
              return (
                <MenueItems
                  key={item.name}
                  name={item.name}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className={`${styles.footer}`}>
        <div>Thankyou For Visiting Magadha Restaurant Website 💖</div>
      </div>
    </>
  );
}
