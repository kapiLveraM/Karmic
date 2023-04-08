import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectsCardData from "../components/ProjectsCardData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Projects = () => {
  var slick = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 1,
    cssEase: "linear",
    speed: 4800,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <section className="bg_wight py-5 bg_project_lg_img">
        <Container>
          <div className=" position-relative  py-5">
            <div className=" Projects_boder_top d-none d-sm-inline-block "></div>
            <div className=" Projects_boder_bottom d-none d-sm-inline-block "></div>
            <h2 className=" ff_primary fw-light fs_md text-black text-center mb-4">
              Projects
            </h2>
            <p className=" ff_secondary fw-bold fs_xsm text-center text-black about_pra">
              Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh
              egestas vehicula tellus. Molestie adipiscing diam nibh lectus.
              Magna id nisl quis vestibulum rhoncus.
            </p>
          </div>
          <Row className=" d-none  d-xl-flex">
            {ProjectsCardData.map((value) => {
              return (
                <Col sm="6" md="6" xl="3">
                  <div className=" scale pt-3">
                    <div className="position-relative overflow-hidden overlay_img">
                      <div className="overlay transition d-flex justify-content-center align-items-center cursor_pointer">
                        <h2 className="text-white fw-bold fs_xsm ff_primary">
                          The Tokyo Tem
                        </h2>
                      </div>
                      <img
                        src={value.img}
                        alt="Rare_Art"
                        className=" w-100 cursor_pointer"
                      />
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row className=" d-xl-none">
            <Slider {...slick}>
              {ProjectsCardData.map((value) => {
                return (
                  <Col sm="6" md="6" xl="3" className=" px-3">
                    <div className=" scale pt-3">
                      <div className="position-relative overflow-hidden overlay_img">
                        <div className="overlay transition d-flex justify-content-center align-items-center cursor_pointer">
                          <h2 className="text-white fw-bold fs_xsm ff_primary">
                            The Tokyo Tem
                          </h2>
                        </div>
                        <img
                          src={value.img}
                          alt="Rare_Art"
                          className=" w-100 cursor_pointer"
                        />
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Slider>
          </Row>
          <div className=" text-center mt-5 pb-lg-5 pt-lg-5">
            <button className=" ff_primary fw_medium fs_xsm view_all_btn_tokyo">
              View All
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Projects;
