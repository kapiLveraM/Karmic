import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutDataCard from "../components/AboutDataCard";
import Traced_logo from "../assets/image/png/Traced_logo.png";
import instgram from "../assets/image/svg/Instagram.svg";
import twitter from "../assets/image/svg/Twitter.svg";
import Facebook from "../assets/image/svg/Facebook.svg";
import YouTube from "../assets/image/svg/YouTube.svg";
import blur_end from "../assets/image/png/blur_end.png";
const About = () => {
  return (
    <>
      <section id="About" className=" pt-5 pb-2 position-relative">
        <img
          src={blur_end}
          alt="blur_end"
          className=" position-absolute d-none d-xl-inline-block end-0 z_index_n_2 bottom-50"
        />
        <Container>
          <div className=" position-relative">
            <div className="Services_line_top d-none d-sm-inline-block "></div>
            <div className="Services_line_bottom d-none d-sm-inline-block "></div>
            <h2 className=" ff_primary fw-light fs_md text-white text-center mb-4">
              About
            </h2>
            <p className=" ff_secondary fw-semibold fs_xsm text-center text-light about_pra">
              Eros, amet, feugiat sit nec duis. Tellus in faucibus consectetur
              dapibus. Eget sem eget nec tincidunt. Urna nulla scelerisque
              pretium diam aliquam montes, interdum malesuada.{" "}
            </p>
          </div>
          <Row className=" justify-content-center pt-3 pt-xl-5">
            {AboutDataCard.map((value) => {
              return (
                <Col md="6" lg="4">
                  <img
                    src={value.img}
                    alt="Digital_Art"
                    className=" w-100 hover_img"
                  />
                </Col>
              );
            })}
          </Row>
          <div className=" text-center mt-5 pt-5">
            <img src={Traced_logo} alt="Traced_logo" />
          </div>
          <div className=" gap-4 d-flex justify-content-center align-items-center mt-5">
            <a href="#" className="scale">
              <img src={instgram} alt="instgram" />
            </a>
            <a href="#" className="scale">
              {" "}
              <img src={twitter} alt="twitter" />
            </a>
            <a href="#" className="scale">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="#" className="scale">
              {" "}
              <img src={YouTube} alt="YouTube" />
            </a>
          </div>
        </Container>
        <div className="futtor_line mt-3">
          <p className=" ff_secondary fw-normal fs_xsm text-light opacity_0_7 text-center pt-3">
            © Karmic labs 2022
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
