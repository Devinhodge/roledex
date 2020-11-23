import React, {Component} from 'react';
import Contacts from './Contacts';

class FetchContacts extends Component {
  state = {
    contacts: [],
    amountOfContacts: ''
  }

  SearchInput = (e) => {
    this.setState({amountOfContacts: e.target.value})

  }

  clearQuery = (e) => {
    this.setState({amountOfContacts: ''});
  }

    fetchContacts = (e) => {
      e.preventDefault();
      fetch("https://randomuser.me/api/?results=25")
        .then(res => res.json())
        .then(response => {
          this.setState ({contacts: response.results})
        })
        .catch(error => console.log('parsing fail', error))
        this.clearQuery(e)
    }

    render() {
      console.log(this.state.contacts);
      return (
        <div>
          <h1 style={{ marginLeft: "20px"}}>Company Clients Contact</h1>
          <form>
            <button style={{ marginLeft: "95px", width: "200px", height: "40px", fontSize: "20px"}} onClick={this.fetchContacts}> Get Contacts</button>
          </form>
          <div className="wrapper">
            {
              this.state.contacts.map(contacts => {
                return <Contacts contacts={contacts}/>
              })
            }
          </div>
        </div>
      );
    }
}

export default FetchContacts;