import React from 'react';
import './Contact.scss';
import formatDate from '../services/Format/Date';

class Contact extends React.Component {
  render() {
    const {data: { admissionDate, avatar, company, country, department, name, phone }} = this.props;
    const date = formatDate(admissionDate);
    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={avatar} alt={name}/>
        </span>
        <span className="contact__data" data-testid="contact-name">{name}</span>
        <span className="contact__data" data-testid="contact-phone">{phone}</span>
        <span className="contact__data" data-testid="contact-country">{country}</span>
        <span className="contact__data" data-testid="contact-date">{date}</span>
        <span className="contact__data" data-testid="contact-company">{company}</span>
        <span className="contact__data" data-testid="contact-department">{department}</span>
      </article>
    );
  }
}




export default Contact;
