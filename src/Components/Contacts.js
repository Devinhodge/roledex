import React from 'react';

const Contacts = (props) => {
  const { name } = props.contacts

  return (

    <div className='contactClass'>
      <p style={{marginLeft: "130px"}}><img src={props.contacts.picture.large} atl='User'></img></p>
      <ul style={{marginLeft: "100px", listStyleType: "none"}}>
        <li style={{fontSize: "22px", fontWeight: "bold"}}>{name.first} {name.last}</li>
        <li>{props.contacts.email}</li>
        <li>{props.contacts.cell}</li>
      </ul>
    </div>
  );
};



export default Contacts;