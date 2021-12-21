/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/my-photo.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                            Art House
                          </h6>
                          <p className="description mt-3">
                            We created this website to help art freelancers who
                            have no stands to show their work, which is
                            basically an E-commerce website that provides them a
                            place to display their collections.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Javascript
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              HTML5
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              CSS3
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            href="https://merge-confilicts.github.io/art-house/"
                          >
                            Live URL
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-success text-uppercase">
                            Comics
                          </h6>
                          <p className="description mt-3">
                            In this project we created a CRUD full stack React
                            app that deals with two different APIs to retrieve
                            data for movies, comics and cartoon's characters to
                            show to the user where he can add, delete or update
                            any movie, comic or character to his favorite list
                            after logging in to his account in the webpage.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              React
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              APIs
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              HTML5
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              CSS3
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              MongoDB
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Reactstrap
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            href="https://comic-pixels.netlify.app/"
                          >
                            Live URL
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-warning text-uppercase">
                            Fashionable
                          </h6>
                          <p className="description mt-3">
                            In this project we dealt with React, Redux, NodeJS
                            and SQL database to create this webpage, where it is
                            basically a complete E-commerce webpage that allows
                            the user to create his own account and purchase
                            clothes from the online store.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              React
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              NodeJS
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              HTML5
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CSS3
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              SQl
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            href='https://fashionable-store.netlify.app/'
                          >
                            Live URL
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <SimpleFooter/>
        </main>
      </>
    );
  }
}

export default Landing;
