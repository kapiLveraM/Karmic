import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import UpcomingProjectsData from "./UpcomingProjectsData";
const UpcomingProjects = () => {
  return (
    <>
      <section className=" py-5">
        <Container>
          <div className=" position-relative">
            <div className="boder_line_upcomming d-none d-md-inline-block"></div>
            <div className="boder_line_upcomming_2 d-none d-md-inline-block"></div>
            <p
              id="fg"
              className=" text-center text-light fw-light ff_primary fs_md"
            >
              Upcoming Projects{" "}
            </p>
          </div>
          <Row className=" pt-lg-5">
            {UpcomingProjectsData.map((value) => {
              return (
                <Col sm="6" lg="3" className="mt-4 mt-xl-0">
                  <div className="upcoming_card">
                    <img
                      src={value.Img}
                      alt="up_comping_1"
                      className=" w-100"
                    />
                    <div className=" d-flex align-items-center justify-content-between pt-3">
                      <p className=" fw_medium fs_sm ff_primary text-light mb-0">
                        {value.data_1}
                      </p>
                      <p className=" fw-bold fs_xsm ff_primary text-light mb-0">
                        {value.secondaryHeading}
                      </p>
                    </div>
                    <p className=" ff_secondary fs_xsm fw-light text-light mb-0">
                      {value.paragraph}
                    </p>
                  </div>
                </Col>
              );
            })}
          </Row>
          <div className=" text-center mt-5">
            <button className=" ff_primary text-light rounded-5 view_all_btn">
              View All
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default UpcomingProjects;
