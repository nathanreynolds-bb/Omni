import React from "react";

const FlatRateInput = () => {
    return (
        <div>
            <label htmlFor="flatRate">Flat Rate</label>
            <input
                type="number"
                step="0.01"
                name="flatRate"
                id="flatRate"
                required
            />
        </div>
    );
};

export default FlatRateInput;