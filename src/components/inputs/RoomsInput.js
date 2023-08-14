import React from "react";

const RoomsInput = () => {
    return (
        <div id="rooms-container">
            <label htmlFor="rooms">Rooms</label>
            <input
                type="number"
                name="rooms"
                placeholder="(optional)"
                id="rooms"
                min="1"
            />
        </div>
    );
};

export default RoomsInput;