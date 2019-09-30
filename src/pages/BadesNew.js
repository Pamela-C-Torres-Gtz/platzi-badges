import React from 'react';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import './styles/BadgesNew.css';
import Badge from '../components/Badges';
import BadgeForm from '../components/BadgesForm';

class BadgeNew extends React.Component {
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
                    firstName="Richard"
                    lastName="Kaufman"
                    twitter="sparragus"
                    jobTitle="Frontend Engineer"
                    avatarUrl="https://s.gravatar.com/avatar/27adda5031568fc3ff93bc257f04110b?s=80"
                  />
                </div>
                <div className="col-6">
                      <BadgeForm />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default BadgeNew;