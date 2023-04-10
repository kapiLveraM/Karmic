import React, { useState } from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import PageLogo from "../assets/image/png/PageLogo.png";
import nave_side_blur from "../assets/image/png/nave_side_blur.png";
const KarmicLabNav = () => {
  const [nav, setnav] = useState(false);
  if (nav) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div className="position-relative z_index_10">
      <img
        src={nave_side_blur}
        alt="nave_side_blur"
        className=" position-absolute z_index_n_2"
      />
      <Nav className="py-3   ">
        <Container
        // data-aos="zoom-in"
        // data-aos-duration="1200"
        // data-aos-delay="3000"
        >
          <div className="d-flex align-items-center justify-content-between">
            <a href="#" className="d-inline-bloack page-logo">
              <img className="" src={PageLogo} alt="PageLogo" />
            </a>
            <div className=" d-flex align-items-center ">
              <ul className="ps-0 mb-0 list-unstyled d-none d-lg-flex gap-4 align-items-center ms-5 ps-5">
                <li>
                  <a
                    className="d-inline-block fs_xsm text_stroke fw_medium  text-light ff_primary underline position-relative ms-3"
                    href="#Benefits"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-block fs_xsm text_stroke fw_medium  text-light ff_primary underline position-relative ms-3"
                    href="#services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-block fs_xsm text_stroke fw_medium  text-light ff_primary underline position-relative ms-3"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-block fs_xsm text_stroke fw_medium  text-light ff_primary underline position-relative ms-3"
                    href="#About"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            <ul className="ps-0 mb-0 list-unstyled d-none d-lg-flex gap-4 align-items-center ">
              <li className="">
                <a
                  className="d-inline-block fs_xsm Connect_Wallet fw_medium  text-black ff_primary"
                  href="#Benefits"
                >
                  Connect Wallet
                </a>
              </li>
            </ul>
            <button
              onClick={() => setnav(true)}
              className="bg-transparent border-0 d-lg-none menu position-relative"
            >
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </button>
          </div>
          {/* responsive nav */}
          <div className={`${nav ? "show_nav" : "nav_hide"}`}>
            <div className="d-flex align-items-center gap-4 flex-column position-relative min-vh-100 w-100 justify-content-center d-xl-none">
              <button
                onClick={() => setnav(false)}
                className="btn btn-close btn-close-white fs-3 position-absolute top-0 end-0 mt-5 me-5"
              ></button>
              <ul className="ps-0 mb-0 list-unstyled d-flex flex-column gap-4 align-items-center">
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block font-sm fw_medium ff_Montserrat text-light  "
                    href="#Benefits"
                  >
                    HOME
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block font-sm fw_medium ff_Montserrat text-light"
                    href="#Privacy"
                  >
                    Services
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block font-sm fw_medium ff_Montserrat text-light"
                    href="#Products"
                  >
                    Projects
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block font-sm fw_medium ff_Montserrat text-light"
                    href="#App"
                  >
                    About
                  </a>
                </li>
                <li className="Connect_Wallet">
                  <a
                    className="d-inline-block fs_xsm fw-bold text-black ff_primary underline position-relative "
                    href="#Benefits"
                  >
                    Connect Wallet
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Nav>
    </div>
  );
};

export default KarmicLabNav;
