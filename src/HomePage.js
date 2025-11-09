import React from 'react';
import { Container, Carousel, Card, Row, Col } from 'react-bootstrap';


const HomePage = () => {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #e0f7ff, #f8fcff)', minHeight: '100vh' }}>
      <Container className="pt-5">
        <h2 className="text-center mb-4 signup-heading">Welcome to VAT Portal</h2>

        {/* Image Slider */}
        <Carousel className="mb-5 shadow-sm rounded">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://vat.gov.bd/sap/public/bc/ui2/zmcf_pub/public_info/img/carousel1.jpg"
              alt="VAT Registration"
            />
            <Carousel.Caption>
              <h3>Easy VAT Registration</h3>
              <p>Register your business quickly and securely.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://vat.gov.bd/sap/public/bc/ui2/zmcf_pub/public_info/img/carousel2.jpg"
              alt="Return Filing"
            />
            <Carousel.Caption>
              <h3>Online Return Filing</h3>
              <p>Submit your VAT returns from anywhere.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://vat.gov.bd/sap/public/bc/ui2/zmcf_pub/public_info/img/carousel3.jpg"
              alt="Refund Services"
            />
            <Carousel.Caption>
              <h3>Fast Refund Processing</h3>
              <p>Track and receive your VAT refunds easily.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://vat.gov.bd/sap/public/bc/ui2/zmcf_pub/public_info/img/bg_nov2022_notice_clear_cache.png"
              alt="Refund Services"
            />
            <Carousel.Caption>
              <h3>Fast Refund Processing</h3>
              <p>Track and receive your VAT refunds easily.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://vat.gov.bd/sap/public/bc/ui2/zmcf_pub/public_info/img/notice_reset_pass.jpg"
              alt="Refund Services"
            />
            <Carousel.Caption>
              <h3>Fast Refund Processing</h3>
              <p>Track and receive your VAT refunds easily.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Welcome Card */}
          <Row className="g-4">
  <Col md={4}>
  <Card className="text-center shadow-sm border-0 service-card vat-panel">
    <Card.Body>
      <div className="card-header-box">
        <h5 className="mb-0">Acts & Rules</h5>
      </div>
      <Card.Text className="mt-3">Register your business quickly and securely.</Card.Text>
      <button className="btn btn-light mt-2">Get Started</button>
    </Card.Body>
  </Card>
</Col>
  <Col md={4}>
  <Card className="text-center shadow-sm border-0 service-card vat-panel">
    <Card.Body>
      <div className="card-header-box">
        <h5 className="mb-0">Forms</h5>
      </div>
      <Card.Text className="mt-3">Register your business quickly and securely.</Card.Text>
      <button className="btn btn-light mt-2">Get Started</button>
    </Card.Body>
  </Card>
</Col>
  <Col md={4}>
  <Card className="text-center shadow-sm border-0 service-card vat-panel">
    <Card.Body>
      <div className="card-header-box">
        <h5 className="mb-0">Learn VAT Online</h5>
      </div>
      <Card.Text className="mt-3">Register your business quickly and securely.</Card.Text>
      <button className="btn btn-light mt-2">Get Started</button>
    </Card.Body>
  </Card>
</Col>
</Row>

      </Container>
    </div>
  );
};

export default HomePage;
