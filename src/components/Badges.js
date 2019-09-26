import React from 'react';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render () { 
       return (
       <div className='Badge'>
           <div className='Badge_header'>
               <img src={confLogo} alt="Logo de la conferencia"/>
           </div>
           <div className='Badge_section-name'>
               <img  className='Badge_avatar' src="https://s.gravatar.com/avatar/27adda5031568fc3ff93bc257f04110b?s=80" alt="Avatar"/>
               <h1>Pamela <br/>Torres <br/></h1>
           </div>
           <div className='Badge_section-info'>
               <h3>FronEnd Developer</h3>
               <div>@pamelatgtz</div>
           </div>
           <div className='Badge_footer'>
               #Platziconf
           </div>
        </div>
       );
    }
}
export default Badge;