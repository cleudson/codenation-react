import React from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import './App.scss';
import { ApiUrl } from './services/Api';
import { menuOrder } from './services/Constants/MenuOrder';

class App extends React.Component {
  constructor(){
		super();
    this.state = {
      contacts: [],
      currentList: [],
      isListLoading: false
    };
    this.updateList = this.updateList.bind(this);
  }
  componentDidMount(){
    fetch(ApiUrl)
    .then(response => response.json())
    .then(data => {
      this.setState({
        contacts: data,
        currentList: data,
        isListLoading: false
      })
    });
    this.setState({
      isListLoading: true
    });
  }

  updateList(stateList, newList){
    this.setState({
      [stateList]: newList
    })
  }
  render() {
    const {contacts, currentList, isListLoading} = this.state;
    return (
      <div data-testid="app" className="app">
        <Topbar/>
        <Filters list={contacts} settings={menuOrder} updateList={(newList)=>{this.updateList('currentList', newList)}}/>
        <Contacts list={currentList} loading={isListLoading}/>
      </div>
    )
  }
}

export default App;
