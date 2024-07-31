import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './Contact.scss';

library.add(faHome, faPhone, faEnvelope);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      message: ''
    })
  };

  return (
    <div className='Contact'>
      <div className="row">
        <div className="col">
          <h2 className='text-center'>Contact Us</h2>
        </div>
      </div>
      <div className=" container  contact-container">
        <div className='row'>
          <div className=' col col-6 col1 p-4 '>
            <h4>Get In Touch</h4>
            <Form onSubmit={handleSubmit} className='text-center'>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formName">
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Control
                    
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={6}>
                  <Form.Group controlId="formPhone">
                    <Form.Control
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formCity">
                    <Form.Control
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formMessage" className="mt-3">
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Message..."
                  required
                />
              </Form.Group>
              <Button variant="dark" type="submit" className="mt-4">
                Send Now
              </Button>
            </Form>
          </div>

          <div className='col col-6 ps-5'>
            <div className="contact-info">
              <div className="info-item">
                <FontAwesomeIcon icon="home" className="info-icon" />
                <div>
                  <h5>Registered Office</h5>
                  <p>505 2th Floor Tower-A  Sector 53, Noida 122102</p>
                </div>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon="home" className="info-icon" />
                <div>
                  <h5>Marketing Office</h5>
                  <p>505 2th Floor Tower-A  Sector 53, Noida 122102</p>
                </div>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon="phone" className="info-icon" />
                <div>
                  <h5>Call us Now</h5>
                  <p>Tel: +91 8766325423</p>
                </div>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon="envelope" className="info-icon" />
                <div>
                  <h5>Email us</h5>
                  <p>MindedCoder@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
