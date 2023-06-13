import React from "react";
import styles from "./style";
import {
  Feature,
  Footer,
  Hero,
  Navbar,
  Team,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <div className=" app_bg  bg-DarkBlueEb  w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter}   `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} sm:bg-none`}>
        <div className={`${styles.paddingX} `}>
          <Hero />
        </div>
      </div>

      <div
        className={`${styles.flexCenter} w-full flex-col ${styles.paddingX} ${styles.paddingX}   bg-DarkBlueMb py-32`}
      >
        <Feature />
        <Team />
        <Testimonials />
      </div>

      <div className="w-full bg-DarkBlueFb">
        <Footer />
      </div>
    </div>
  );
};

export default App;
