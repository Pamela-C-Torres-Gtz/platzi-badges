import React from 'react';
import './styles/BadgessList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

//crear una clase que llame a todos los Items que utilizaremos
class BadgessListItem extends React.Component {
    render() {
        return (
            <div className="BadgessListItem">
                <img className="BadgessListItem__avatar" 
                src={this.props.badge.avatarUrl}
                alt={`${this.props.badge.firstName}
                ${this.props.badge.lastName}`}/>
                <div>
                    <strong>
                        {this.props.badge.firstName}
                        {this.props.badge.lastName}
                    </strong>
                    <br /> <span style={{ color: "#00acee" }}>
                    <FontAwesomeIcon icon={faTwitter} /> @{this.props.badge.twitter}
                    </span>
                    <br />
                    {this.props.badge.jobTitle}
                </div>
            </div>
        );
    }
}

//pintar en nuestro componente los datos de nuestra data
class BadgessList extends React.Component {
    render() {
       return (
           <div className="BadgessList">
        <ul className="list-unstyled">                      
        {this.props.badgess.map((badge) => {
           return (
               <li key={badge.id}>
                  <BadgessListItem badge={badge} />
               </li>
           );
        })}
    </ul>
    </div>
       );
    }
}

export default BadgessList;