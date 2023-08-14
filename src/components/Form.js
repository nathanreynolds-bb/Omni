import React from "react";
import FlatRateInput from "./inputs/FlatRateInput";
import NightsInput from "./inputs/NightsInput";
import RoomsInput from "./inputs/RoomsInput";
import ParkingInput from "./inputs/ParkingInput";
import ResortFeeInput from "./inputs/ResortFeeInput";
import handleSubmit from "../functions/handleSubmit";

const Form = () => {
    return (
        <div>
            <form id="form" onSubmit={handleSubmit}>
                <FlatRateInput />
                <NightsInput />
                <RoomsInput />
                <ParkingInput />
                <ResortFeeInput />
                <br />
                <button type="submit">Submit</button>
            </form>
            <div id="results">
                <p id="log"></p>
                <p id="total"></p>
            </div>
        </div>
    );
};

export default Form;
