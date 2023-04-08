import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServicesCardData from "./ServicesCardData";
const Services = () => {
  return (
    <>
      <section className=" py-5">
        <Container>
          <div className=" position-relative">
            <div className="Services_line_top d-none d-sm-inline-block "></div>
            <div className="Services_line_bottom d-none d-sm-inline-block "></div>
            <h2 className=" ff_primary fw-light fs_md text-white text-center mb-4">
              Services
            </h2>
          </div>
          <Row className=" pt-md-5">
            {ServicesCardData.map((value) => {
              return (
                <Col md="6" lg="3" className=" pt-4">
                  <div className="position-relative card_hover">
                    <div className="cricle_boll"></div>
                    <div className=" position-relative services_card p-4 p-lg-2 p-xl-4">
                      <img src={value.Img} alt="page_pen" className=" pt-2" />
                      <h2 className=" ff_secondary fs_sm fw-bold text-light pt-4">
                        {value.heading_1}
                      </h2>
                      <p className=" fw-normal fs_xsm ff_secondary text-light opacity_0_7 pt-2">
                        {value.paragraph}
                      </p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
