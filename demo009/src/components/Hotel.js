import React from 'react';

const DEFAULT_HOTEL = "assets/images/hotels/2a5bb415_b.jpg"

const Hotel = ({hoteles}) => {
    const image = hoteles.image === "N/A" ? DEFAULT_HOTEL: 'assets/images/hotels/' + hoteles.image;

    return (
        <div className="hotel">
            <h2>{hoteles.name}</h2>
            <div>
                <img
                    width="200"
                    alt="algo"
                    src={image}
                />
            </div>
            <p>{hoteles.price}</p>
        </div>
    );
};

export default Hotel;