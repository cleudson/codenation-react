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
        <span className="contact__data">{name}</span>
        <span className="contact__data">{phone}</span>
        <span className="contact__data">{country}</span>
        <span className="contact__data">{date}</span>
        <span className="contact__data">{company}</span>
        <span className="contact__data">{department}</span>
      </article>
    );
  }
}




export default Contact;
