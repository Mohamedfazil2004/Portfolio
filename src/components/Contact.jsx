import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || serviceId === 'your_service_id') {
      alert('Please configure your EmailJS keys in the .env file and restart the server.');
      setFormStatus('error');
      return;
    }

    // Initialize EmailJS
    emailjs.init(publicKey);

    const templateParams = {
      name: formData.name,           // Matches {{name}}
      from_name: formData.name,      // Matches {{from_name}}
      from_email: formData.email,    // Matches {{from_email}}
      from_message: formData.message, // Matches {{from_message}}
      reply_to: formData.email,
    };

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      if (result.status === 200) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Detailed Error:', error);
      alert(`EmailJS Error: ${error?.text || 'Unknown error'}. Please check your Service ID and Template ID.`);
      setFormStatus('error');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <span className="text-cyan monospace">What's Next?</span>
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-desc">
          I'm currently looking for internship opportunities to grow my skills and contribute to exciting projects. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="contact-grid">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="info-item">
            <Mail className="text-cyan" />
            <div>
              <h4>Email</h4>
              <p>fazilmohamed2004@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <Phone className="text-cyan" />
            <div>
              <h4>Phone</h4>
              <p>+91 9944226490</p>
            </div>
          </div>
          <div className="info-item">
            <MapPin className="text-cyan" />
            <div>
              <h4>Location</h4>
              <p>Madurai, India</p>
            </div>
          </div>
          <div className="info-item resume-btn-container">
            <a 
              href="/Mohamed_Fazil_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-premium"
              aria-label="View Resume"
            >
              View Full Resume <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form glass"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required 
            ></textarea>
          </div>
          <button 
            type="submit" 
            className={`btn btn-primary w-full ${formStatus === 'sending' ? 'disabled' : ''}`}
            disabled={formStatus === 'sending'}
          >
            {formStatus === 'idle' && (
              <>Send Message <Send size={18} /></>
            )}
            {formStatus === 'sending' && 'Sending...'}
            {formStatus === 'success' && (
              <>Sent Successfully! <CheckCircle size={18} /></>
            )}
            {formStatus === 'error' && 'Error. Try again?'}
          </button>
          
          {formStatus === 'success' && (
            <motion.div 
              className="success-message-box"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <CheckCircle size={32} className="text-cyan" />
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out, Mohamed Fazil. I have received your details and will get back to you as soon as possible!</p>
              <button className="btn btn-outline btn-sm" onClick={() => setFormStatus('idle')} style={{marginTop: '15px'}}>
                Send Another Message
              </button>
            </motion.div>
          )}
          {formStatus === 'error' && (
            <motion.div 
              className="error-message-box"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p>Oops! Something went wrong. Please check your internet connection or try again later.</p>
              <button className="btn btn-outline btn-sm" onClick={() => setFormStatus('idle')} style={{marginTop: '10px', color: '#ff4d4d', borderColor: '#ff4d4d'}}>
                Try Again
              </button>
            </motion.div>
          )}
        </motion.form>
      </div>

    </div>
  );
};

export default Contact;
