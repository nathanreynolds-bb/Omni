import React from "react";

const NightsInput = () => {
    return (
        <div id="nights-container">
            <label htmlFor="nights">Nights</label>
            <input type="number" name="nights" id="nights" required />
        </div>
    );
};

export default NightsInput;