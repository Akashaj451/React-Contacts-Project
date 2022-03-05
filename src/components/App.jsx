import React from "react";
import contacts from "../contacts.js";
import Card from "./Card";

function createContact(contact){  //mapping method...contact is equal to contacts array each object 
return  (<Card
  key={contact.id} //special id not visible in console.Used for loop iteration case for ensuring correct data used.
  value={contact.id}
  name={contact.name} 
  img={contact.imgURL}
  tel={contact.phone}
  email={contact.email}
  />
  );
}

 function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* iterating data from contacts array and passing to function cretaeContact */}
    {contacts.map(createContact)} 
      {/* <Card 
      name={contacts[0].name }
      img={contacts[0].imgURL}
      tel={contacts[0].phone}
      email={contacts[0].email}/>

       <Card 
      name={contacts[1].name }
      img={contacts[1].imgURL}
      tel={contacts[1].phone}
      email={contacts[1].email}/>

       <Card 
      name={contacts[2].name }
      img={contacts[2].imgURL}
      tel={contacts[2].phone}
      email={contacts[2].email}/> */}
    </div>
  );

}

export default App;
