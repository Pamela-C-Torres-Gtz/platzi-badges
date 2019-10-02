import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import './styles/BadgesNew.css';
import Badge from '../components/Badges';
import BadgeForm from '../components/BadgesForm';

class BadgeNew extends React.Component {
   state = {form: {
     firstName:'',
     lastName:'',
     email:'',
     jobTitle:'',
     twitter:'',
   }};

   handleChange = e => {
     //realizar una copia para no sobre escribir en el estado.   
     this.setState({
       form: {
         ...this.state.form,
         [e.target.name]: e.target.value,
       }
     });
   };

    render () {
        return (
          <div>
            <Navbar />
            <div className="BadgesNew_hero">
              <img className="img-fluid" src={header} alt="Logo" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <Badge
                    firstName={this.state.form.firstName}
                    lastName={this.state.form.lastName}
                    twitter={this.state.form.twitter}
                    jobTitle={this.state.form.jobTitle}
                    email={this.state.form.email}
                    avatarUrl="https://s.gravatar.com/avatar/27adda5031568fc3ff93bc257f04110b?s=80"
                  />
                </div>
                <div className="col-6">
                      <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default BadgeNew;