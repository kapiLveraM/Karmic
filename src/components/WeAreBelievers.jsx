import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArrowVector from "./ArrowVector";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import doll_img from "../assets/image/png/doll_img.png";
import Candle_Queen from "../assets/image/png/Candle_Queen.png";
import Candle_Queen_3 from "../assets/image/png/Candle_Queen_3.png";
import Arrow_1 from "../assets/image/png/Arrow 1.png";
const WeAreBelievers = () => {
  window.onload = () => {
    let sliderImagesBox = document.querySelectorAll(".cards-box");
    sliderImagesBox.forEach((el) => {
      let imageNodes = el.querySelectorAll(".card:not(.hide)");
      let arrIndexes = []; // Index array
      (() => {
        // The loop that added values to the arrIndexes array for the first time
        let start = 0;
        while (imageNodes.length > start) {
          arrIndexes.push(start++);
        }
      })();

      let setIndex = (arr) => {
        for (let i = 0; i < imageNodes.length; i++) {
          imageNodes[i].dataset.slide = arr[i]; // Set indexes
        }
      };
      el.addEventListener("click", () => {
        arrIndexes.unshift(arrIndexes.pop());
        setIndex(arrIndexes);
      });
      setIndex(arrIndexes); // The first indexes addition
    });
  };

  return (
    <>
      <section className=" bg_header_img py-lg-5 flex-grow-1 d-flex justify-content-center align-items-center">
        <Container>
          <Row className=" py-5 flex-column-reverse flex-lg-row align-items-center  justify-content-between">
            <Col lg="5" className=" pt-5 mt-md-5 mt-lg-0">
              <h1 className=" fw-light ff_primary text-center text-lg-start fs_lg text-light">
                We are believers decentralization and{" "}
                <span className=" position-relative web_line_after">Web3.</span>
              </h1>
              <p className=" ff_secondary fw-normal fs_xsm text-light text-center text-lg-start">
                Vulputate tristique habitant neque, accumsan. Vitae ultrices
                nulla erat nibh aliquam, quis tempus volutpat arcu. Leo
                convallis luctus dis malesuada turpis non consequat ac.{" "}
              </p>
              <div className=" mt-5 text-center text-lg-start">
                <button className=" ff_primary  fs_xsm fw-bold Get_Started_bnt">
                  Get Started
                  <span className=" ps-2">
                    <svg
                      className="Arrow_clr_change"
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.495 6.49497C17.7683 6.22161 17.7683 5.77839 17.495 5.50503L13.0402 1.05025C12.7668 0.776886 12.3236 0.776886 12.0503 1.05025C11.7769 1.32362 11.7769 1.76684 12.0503 2.0402L16.01 6L12.0503 9.9598C11.7769 10.2332 11.7769 10.6764 12.0503 10.9497C12.3236 11.2231 12.7668 11.2231 13.0402 10.9497L17.495 6.49497ZM0 6.7H17V5.3H0V6.7Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </button>
                <button className=" ff_primary text-center text-lg-start fs_xsm fw-light Read_More_bnt ms-5">
                  Read More
                </button>
              </div>
            </Col>
            <Col
              lg="6"
              xl="5"
              className=" py-5 py-lg-0 position-relative my-5 my-md-0"
            >
              <div className="boll_stacked_card"></div>
              <div class="cards-box m-auto">
                <div class="card hide">
                  <div class="content-placeholder">
                    <div class="row">
                      <div class="img">
                        <img src={doll_img} alt="doll_img" />
                      </div>
                      <div class="img-text"></div>
                    </div>
                    <div class="text text--l"></div>
                    <div class="text text--m"></div>
                    <div class="text text--s"></div>
                    <div class="btn"></div>
                  </div>
                </div>
                <div class="card">
                  <div class="content-placeholder">
                    <img src={doll_img} alt="doll_img" className=" w-100" />
                    <div className=" d-flex align-items-center justify-content-between pt-3">
                      <p className=" fw_medium fs_sm ff_primary text-light mb-0">
                        Candle Queen
                      </p>
                      <p className=" fw-bold fs_xsm ff_primary text-light mb-0">
                        15 : 54 : 12
                      </p>
                    </div>
                    <p className=" ff_secondary fw-light fs_xsm text-light mb-0">
                      NFT
                    </p>
                  </div>
                </div>
                <div class="card">
                  <div class="content-placeholder">
                    <img
                      src={Candle_Queen}
                      alt="Candle_Queen"
                      className=" w-100"
                    />
                    <div className=" d-flex align-items-center justify-content-between pt-3">
                      <p className=" fw_medium fs_sm ff_primary text-light mb-0">
                        Candle Queen
                      </p>
                      <p className=" fw-bold fs_xsm ff_primary text-light mb-0">
                        15 : 54 : 12
                      </p>
                    </div>
                    <p className=" ff_secondary fw-light fs_xsm text-light mb-0">
                      NFT
                    </p>
                  </div>
                </div>
                <div class="card">
                  <div class="content-placeholder">
                    <img
                      src={Candle_Queen_3}
                      alt="Candle_Queen_3"
                      className=" w-100"
                    />
                    <div className=" d-flex align-items-center justify-content-between pt-3">
                      <p className=" fw_medium fs_sm ff_primary text-light mb-0">
                        Candle Queen
                      </p>
                      <p className=" fw-bold fs_xsm ff_primary text-light mb-0">
                        15 : 54 : 12
                      </p>
                    </div>
                    <p className=" ff_secondary fw-light fs_xsm text-light mb-0">
                      NFT
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className=" text-center ">
            <a href="#fg">
              <img src={Arrow_1} alt="Arrow_1" />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WeAreBelievers;
