import React from 'react';
import './Filters.scss';
import filterList from '../services/Format/List/Filter';
import orderList from '../services/Format/List/Order';

class Filters extends React.Component {
	constructor(props) {
		super(props);
		this.defaultOrder = 'id';
		this.state = {
		  order: this.defaultOrder,
		  filter: ''
		};
		this.updateList = this.updateList.bind(this);
	  }
	updateList({order = this.state.order, filter=this.state.filter}){
		const {list, updateList} = this.props;
		order = (order === this.state.order && filter === this.state.filter) ? this.defaultOrder : order;
		const filteredList = filterList({list, filter});
		const orderedList = orderList({list: filteredList, order});
		this.setState({
			order,
			filter
		});
		updateList(orderedList);
	}
	render() {
		const {settings} = this.props;
		const {state, updateList} = this;
		return (
		<div className="container" data-testid="filters">
			<section className="filters">
				<div className="filters__search">
				<input type="text" value={state.filter} onChange={(evt) => {updateList({filter: evt.target.value})}} className="filters__search__input" placeholder="Pesquisar" />
				{/* <button className="filters__search__icon">
					<i className="fa fa-search"/>
				</button> */}
				</div>
				{
					settings?.map(({type:order, title}) => (
					<button key={order} onClick={() => {updateList({order})}} className={`filters__item${state.order === order ? ' is-selected' : ''}`}>
						{title} <i className="fas fa-sort-down" />
					</button>
					))
				}
			</section>
		  </div>
		);
	}
}

export default Filters;
