import React from 'react';
import emailjs from 'emailjs-com';

 const ContactForm = () => {
 

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('Ashu@7860', 'first-template', e.target,'user_fr25UNJ1aT7hN7zZCygJQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <form  onSubmit={sendEmail}>
        <div>
      <label>Name</label>
      <input type="text" name="name" placeholder="name" />
      </div>
      <div>
      <label>Email</label>
      <input type="email" name="user_email" placeholder="email"/>
      </div>
      <div>
      <label>Message</label>
      <textarea name="message"  placeholder="meassge"/>
      </div>
      <input type="submit" value="Send" />
    </form>
  );
};
export default ContactForm;