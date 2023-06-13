import React from "react";
import styles from "../style";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import Subscribe from "./Subscribe";
import { images, footerLinks } from "../constants";

const Footer = () => {
  return (
    <section className={`  flex flex-col justify-center items-center`}>
      <Subscribe />

      <div
        className={`${styles.flexStart} ${styles.paddingX}  flex-col mb-8 w-full`}
      >
        <div className="flex-[1] flex flex-col justify-start ">
          <img
            src={images.logo}
            alt="logo"
            className="sm:w-[200px] w-[180px]"
          />
        </div>

        {/* Bottom section */}
        <div className="flex  md:flex-row flex-col mt-10 ">
          <div className="flex flex-[1.5] my-4  ">
            <img
              src={images.iclo}
              alt="location logo"
              className="w-[30px] h-[30px] mr-5 mt-2"
            />
            <p className=" font-raleway text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          {/* second link */}
          <div className="flex flex-col md:pl-16 my-4   flex-[1.5]">
            <div className="flex items-center mb-3">
              <img
                src={images.icph}
                alt="location logo"
                className="w-[30px] h-[30px] mr-5 mt-2"
              />
              <p className="font-raleway text-[18px] ">+1-543-123-4567</p>
            </div>
            <div className="flex items-center">
              <img
                src={images.icem}
                alt="location logo"
                className="w-[30px] h-[30px] mr-5 mt-2"
              />
              <p className="font-raleway text-[18px] ">example@fylo.com</p>
            </div>
          </div>

          {/* links */}
          <div className="flex-[1] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {footerLinks.map((footerlink) => (
              <div
                key={footerlink.title}
                className={`flex flex-col  my-4 min-w-[150px]`}
              >
                <h4 className="font-raleway font-medium text-[20px] leading-[27px] text-white">
                  {footerlink.title}
                </h4>
                <ul className="list-none mt-4">
                  {footerlink.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`font-raleway  font-normal text-[18px] leading-[24px] cursor-pointer ${
                        index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social media */}
          <div className="flex footer_links-icons my-4 justify-center md:justify-start ">
            <GrFacebookOption className="mr-4" />
            <IoLogoTwitter className="mr-4" />
            <IoLogoInstagram />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
