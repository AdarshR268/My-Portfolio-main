import React, { useRef } from 'react';

function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    formData.append("access_key", "your_web3forms_access_key");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Message sent successfully!");
        form.current.reset();
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending your message.");
    }
  };

  const toggleMenu = () => {
    document.getElementById("menu").classList.toggle("hidden");
  };

  return (
    <section id="Contact">
      <button id="hamburger-button" onClick={toggleMenu} className="hamburger">☰</button>
      <nav id="menu" className="hidden"> {/* Hidden by default */}
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className='Contact-Content'>
        <h1>Contact Me!!</h1>
        <div className='Contact-Form'>
          <p>Feel free to connect with me!😊</p>
          <p>Personal Email: <a href='mailto:adarshofficial268@gmail.com'>adarshofficial268@gmail.com</a></p>
          <form ref={form} onSubmit={sendEmail} id="contactForm">
            <label>Name</label>
            <input type="text" name="name" required />
            <label>Email</label>
            <input type="email" name="email" required />
            <label>Message</label>
            <textarea name="message" required></textarea>
            <br />
            <input className='send-btn' type="submit" value="Send" />
          </form>
        </div>
        <div className='Footer-Cont'>
          <p>&#169;All Rights Reserved💙Adarsh R</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
