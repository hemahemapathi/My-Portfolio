import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';


import { ThemeContext } from '../../context/ThemeContext';
import './Contact.css';


const Contact = () => {


  const { isDarkMode } = React.useContext(ThemeContext);
  const formRef = useRef();
  const isInView = useInView(formRef, { once: true });
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
 
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });


  const [focused, setFocused] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });


  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending...' });


    emailjs.sendForm(
      'service_ouhih5z',
      'template_dliw589',
      formRef.current,
      'n9HYR9xUGpzvgxTvY'
    )
    .then(() => {
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus({ type: '', message: '' }), 3000);
    })
    .catch((error) => {
      setStatus({ type: 'error', message: 'Failed to send message.' });
    });
  };


  const handleFocus = (field) => {
    setFocused(prev => ({ ...prev, [field]: true }));
  };


  return (
    <section id="contact" className={`contact-section ${isDarkMode ? 'dark' : ''}`}>
      <Container className="py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-content"
        >
          <div className="contact-header mb-3">
            <h2 className="section-title h4">Get In Touch</h2>
            <p className="section-subtitle small"></p>
          </div>
          <Row className="contact-row justify-content-center">
            <Col lg={4} md={6}>
              <div className="form-wrapper" style={{ borderRadius: '8px', padding: '20px' }}>
                <motion.form
                  ref={formRef}
                  className="contact-form"
                  onSubmit={sendEmail}
                  initial={{ opacity: 0, x: 100 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <div className="form-group text-center input-wrapper mb-2" style={{ borderRadius: '4px', padding: '8px' }}>
                    <input
                      type="text"
                      className={`form-input text-center form-control-sm ${focused.name ? 'focused' : ''}`}
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      onFocus={() => handleFocus('name')}
                      required
                    />
                  </div>
                  <div className="form-group text-center input-wrapper mb-2" style={{ borderRadius: '4px', padding: '8px' }}>
                    <input
                      type="email"
                      className={`form-input text-center form-control-sm ${focused.email ? 'focused' : ''}`}
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      onFocus={() => handleFocus('email')}
                      required
                    />
                  </div>
                  <div className="form-group text-center input-wrapper mb-2" style={{ borderRadius: '4px', padding: '8px' }}>
                    <input
                      type="text"
                      className={`form-input text-center form-control-sm ${focused.subject ? 'focused' : ''}`}
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      onFocus={() => handleFocus('subject')}
                      required
                    />
                  </div>
                  <div className="form-group text-center input-wrapper mb-2" style={{ borderRadius: '4px', padding: '8px' }}>
                    <textarea
                      className={`form-textarea text-center form-control-sm ${focused.message ? 'focused' : ''}`}
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      onFocus={() => handleFocus('message')}
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <div className="button-wrapper" style={{ borderRadius: '4px', padding: '8px' }}>
                    <motion.button
                      type="submit"
                      className={`submit-btn btn-sm ${status.type}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={status.type === 'loading'}
                    >
                      {status.message || 'Send Message'}
                    </motion.button>
                  </div>
                </motion.form>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};


export default Contact;
