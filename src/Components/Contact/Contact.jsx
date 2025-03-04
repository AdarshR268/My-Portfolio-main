import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
 // emailjs setup(from example in emailjs site)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6vutma7', 'template_z6hew1k', form.current, {
        publicKey: 'b9oVg10ghHGelbmma',
      })
      .then(
        () => {
          alert("Email sent successfully!😊")
          window.location.reload(true);
        },
        (error) => {
          alert("Error in sending email \n Inconvenience Regretted!😓");
          //console.log(error)
        },
      );
  };
  return (
    <section id="Contact">
        <div className='Contact-Content'>
          <h1>Contact Me!!</h1>

          <div className='Contact-Form'>
            <p>Feel free to connect with me!😊</p>
            <p>Personal Email : <a href='mailto:hari0709venkatesan@gmail.com'>hari0709venkatesan@gmail.com</a></p>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" required/>
              <label>Email</label>
              <input type="email" name="user_email"  required/>
              <label>Message</label>
              <textarea type='text' name="message" required/>
              <br/>
              <input className='send-btn' type="submit" value="Send" />
            </form>
        </div>
        <div className='Footer-Cont'>
          <p>&#169;All Rights Reserved💙Adarsh R</p>
        </div>
      </div>
    </section>
  )
}

export default Contact;