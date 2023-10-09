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
        <div
          style={{ width: "100%", overflow: "hidden" }}
          className={styles.backimg}
        >
          <Image
            className={styles.rocketmeet}
            width={120}
            height={120}
            src="/rocketmeet.png"
            alt=""
          />
          <Image
            className={styles.rocketcartoon}
            width={120}
            height={120}
            src="/rocketcartoon.png"
            alt=""
          />
          <Image
            className={styles.logoimg}
            width={140}
            height={140}
            src="/apslogo.png"
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
        <h1>Welcome To APSU Rewa Incubation Center</h1>
        <div>
          Welcome to APSU Rewa incubation center, where innovation meets
          inspiration! <br />
          We are thrilled to embark on this transformative journey with you,
          nurturing your ideas and dreams into reality. Here, we believe that
          every idea has the potential to change the world, and we're here to
          provide the support and guidance you need to make it happen. Together,
          we'll ignite your entrepreneurial spirit and watch your vision take
          flight. Welcome to a place where innovation knows no bounds, and
          success knows no limits. Let's build the future together!
        </div>
      </div>

      {/* Our Special  */}
      <div className={styles.ourspecial}>
        <h2>Our Mentors</h2>
        <div className={styles.cardsbox}>
          <div className={styles.specialcard}>
            <div style={{ height: "90%", paddingTop: "20px" }}>
              <Image alt=" itmes" src={"/atul.jpg"} width={220} height={180} />
            </div>
            <span>Prof. Atul Pandey</span>
          </div>
          <div className={styles.specialcard}>
            <div style={{ height: "90%" }}>
              <Image alt=" itmes" src={"/vcaps.jpg"} width={200} height={200} />
            </div>
            <span>Prof. Raj Kumar Acharya</span>
          </div>
        </div>
      </div>
      <div className={styles.ourspecial}>
        <h2>Our Starups</h2>
        <div className={styles.cardsbox}>
          <div className={styles.specialcard}>
            <div style={{ height: "90%", paddingTop: "20px" }}>
              <Image
                alt=" itmes"
                src={"/ayumlogo.PNG"}
                width={220}
                height={180}
                style={{ borderRadius: "8px" }}
              />
            </div>
            <span>Ayum - Digitalizing Healthcare</span>
          </div>
          {/* <div className={styles.specialcard}>
            <div style={{ height: "90%" }}>
              <Image alt=" itmes" src={"/vcaps.jpg"} width={200} height={200} />
            </div>
            <span>Prof. Raj Kumar Acharya</span>
          </div> */}
        </div>
      </div>

      {/* Order Now */}
      <div className={`${styles.ordernow}`}>
        <div style={{ marginTop: "3rem", fontWeight: "500" }}>
          Get in touch with us and Fuel Your Ideas
        </div>
        <div className={`${styles.btngrad}`}>Contact Us</div>
        <div style={{ fontWeight: "500" }}>
          {/* 9871788245 / 8002040789 / 8929106647 */}
          +91-7000566036
        </div>
      </div>

      {/* Our Services */}
      <div id="services" className={`${styles.ourservices}`}>
        <h2>Our Services</h2>
        <div>
          <b>Mentoring</b>
          <span>
            Right guidance at the right time saves an entrepreneur precious time
            otherwise spent in re-inventing the wheel! Realizing this, we
            connect you with experienced mentors who help you think
            strategically and grow exponentially
          </span>
        </div>
        <div>
          <b>Launchpad</b>
          <span>
            Right environment can make all the difference in the early days of
            your venture when the foundation is being laid. We provide you an
            inspiring co-working environment with the right mix of creativity,
            expert guidance, practical advice and interaction with peers.
          </span>
        </div>
        <div>
          <b>Incubation</b>
          <span>
            We incubate early-stage companies that demonstrate the potential to
            innovate, implement and create social/financial impact.
          </span>
        </div>
        <div>
          <b>Workshops</b>
          <span>
            Right guidance at the right time saves an entrepreneur precious time
            otherwise spent in re-inventing the wheel! Realizing this, we
            connect you with experienced mentors who help you think
            strategically and grow exponentially. Right guidance at the right
            time saves an entrepreneur precious time otherwise spent in
            re-inventing the wheel! Realising this, we connect you with
            experienced mentors who help you think strategically and grow
            exponentially.
          </span>
        </div>
        <div>
          <b>Women Startups</b>
          <span>
            The Women Startup Program aims to support ambitious and innovative
            women entrepreneurs by enabling them to transform their idea into a
            business venture. The Program is designed to focus on enhancement of
            the entrepreneurial and managerial skills of women leading early and
            ideation stage ventures.
          </span>
        </div>
      </div>
      {/* About Us */}
      <div id="aboutus" className={`${styles.aboutus}`}>
        <h2>About Us</h2>
        <div>
          Welcome to APSU Rewa Incubation Center, where innovation and
          entrepreneurship thrive. Our mission is to provide aspiring startups
          with the resources and guidance needed to turn their ideas into
          successful ventures. We offer expert mentorship, state-of-the-art
          facilities, networking opportunities, and access to funding, all
          within a vibrant community of like-minded entrepreneurs. Since our
          inception, we've catalyzed the growth of numerous startups, making a
          positive impact on our local economy. Join us on this exciting
          journey, and together, we'll shape the future of business.
        </div>
      </div>

      {/* Food Menu */}
      {/* <div className={`${styles.menucontainer}`}>
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
      </div> */}
      {/* Footer */}
      <div className={`${styles.footer}`}>
        <div>Thankyou For Visiting APSU Rewa Incubation Center Website 💖</div>
      </div>
    </>
  );
}
