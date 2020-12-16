
import React from 'react';

const CountriesComp = ({ name, code }) => (
    <div className="col-md">
        <h3 className="display-5">{name}</h3>
        <p>
            Contry name is {name} and this code is : {code}
        </p>

    </div>
);

export default CountriesComp;