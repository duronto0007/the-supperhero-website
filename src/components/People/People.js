import React, { useEffect, useState } from 'react';
import PeopleCard from '../PeopleCard/PeopleCard';
import './People.css'

const People = () => {
    const [info, setInfo] = useState([]);
    const [peoples, setPeoples] = useState([])
    useEffect(() =>{
        fetch("./info.json")
        .then(res =>res.json())
        .then(data => setInfo(data))
    },[])
// let newCart =[];
 const peopleHandler= (people) => {
     

     if(!peoples.includes(people)){
        const newCart = [...peoples, people];
        setPeoples(newCart);
    }
    else{
        alert('already added in the cart!!!')
    }
     
 }

 let names = '';
let total = 0;
for(const people of peoples){
total = total + people.salary;
if(!names){
names = people.name;
}
else{
names = names + ', ' + people.name;
}
}




    return (
        <div className="people-container">
        
        <div>
              <div className="boxes">
              {
                  info.map(people => <PeopleCard key={people.id} people={people} peopleHandler={peopleHandler}/>)
              }
              
          
              </div>
        </div>
      
        <div>
            <h3>People Added:{peoples.length}</h3>
            <h5>Total Donation:{total}</h5>
            <h5>Names:{names}</h5>
            <button className="btn">Withdraw</button>
        </div>
      </div>
    );
};

export default People;