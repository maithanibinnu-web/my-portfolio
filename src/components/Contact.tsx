import React from 'react';
import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';

function Contact() {

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <div className='contact-info'>
            <div className='info-card'>
              <PersonIcon className='contact-icon' />
              <div className='info-content'>
                <h3>Name</h3>
                <p>Priyanshu Maithani</p>
              </div>
            </div>
            <div className='info-card'>
              <PhoneIcon className='contact-icon' />
              <div className='info-content'>
                <h3>WhatsApp / Call</h3>
                <a href="https://wa.me/918394058356" target="_blank" rel="noreferrer">+91 8394058356</a>
              </div>
            </div>
            <div className='info-card'>
              <EmailIcon className='contact-icon' />
              <div className='info-content'>
                <h3>Email</h3>
                <a href="mailto:priyanshumaithani02@gmail.com">priyanshumaithani02@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;