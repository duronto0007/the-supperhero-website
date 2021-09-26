import React from 'react';
import './PeopleCard.css';

const PeopleCard = (props) => {
    // console.log(props.people)
    const {id, name, age, img, country, company, salary}=props.people;
    return (
        <div className="border main-people">
            
            <img width="50%" src= {img} alt=""/>
            <h4>ID: {id}</h4>
            <h3>Name: {name}</h3>
            <h5>Company: {company}</h5>
            <h6>Age:{age}</h6>
            <h6>Salary:$ {salary}</h6>
            <h6>Country: {country}</h6>
            <button onClick={()=>props.peopleHandler(props.people)}>
            <i className="fas fa-user"></i> &nbsp;
                Donation</button>
            

        </div>
    );
};

export default PeopleCard;