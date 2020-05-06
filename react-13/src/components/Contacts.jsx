import React from "react";
import Contact from './Contact';
import './Contacts.scss';

class Contacts extends React.Component {
	render() {
		const {list, loading} = this.props;
		return (	
			<div className="container" data-testid="contacts">
				<section className="contacts">
					<article className="contact">
						<span className="contact__avatar" />
						<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
					</article>
					{
						loading ?
						'Carregando...' :
						list?.map((contact) => (
							<Contact data={contact} key={contact.id}/>
						))
					}
				</section>
			</div>
		);
	}
}

export default Contacts;
