import React from "react";

const ParkingInput = () => {
    return (
        <div id="parkingOptions">
            <input
                type="radio"
                name="parking"
                id="self"
                value="self"
                data-price="16.23"
                required
            />
            <label htmlFor="self">Self Parking</label>
            <input
                type="radio"
                name="parking"
                id="valet"
                value="valet"
                data-price="34.64"
                required
            />
            <label htmlFor="valet">Valet Parking</label>
            <input
                type="radio"
                name="parking"
                id="none"
                value="none"
                data-value="0.00"
                required
            />
            <label htmlFor="none">None</label>
        </div>
    );
};

export default ParkingInput;
