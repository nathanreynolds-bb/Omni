import getInputs from "./getInputs";

function handleSubmit(event) {
    // prevent page reload
    event.preventDefault();

    // define variables
    const { flatRate, rooms, nights, resortFee } = getInputs();

    // define where to print calculation log and total
    const totalElement = document.getElementById("total");
    const logElement = document.getElementById("log");

    // define parking options and find price for selected option
    const parkingOptions = document.getElementById("parkingOptions").children;
    const parkingChoice = [...parkingOptions].find((option) => option.checked);
    let parkingFee = parkingChoice.dataset.price;

    // clear last results
    logElement.innerText = "";
    totalElement.innerText = "";

    // calculate results

    // function rounds numbers to second decimal
    function toSecondDecimal(number) {
        return Math.round(number * 100) / 100;
    }
    // initialize total
    let total;

    // add tax
    logElement.innerText += `${flatRate} x 1.15 = ${toSecondDecimal(
        flatRate * 1.15
    )}\n`;
    total = toSecondDecimal(flatRate * 1.15);

    //add praking fee if needed
    if (parkingChoice.id != "none") {
        parkingFee *= nights;
        logElement.innerText += `${total} + ${parkingFee} = ${toSecondDecimal(
            total + parkingFee
        )}\n`;
        total = toSecondDecimal(total + parkingFee);
    }

    console.log(9.2);

    // do or do not add resort fee
    if (resortFee) {
        logElement.innerText += `${total} + ${toSecondDecimal(
            9.2 * nights
        ).toFixed(2)} = ${toSecondDecimal(total + 9.2 * nights)}\n`;
        total = toSecondDecimal(total + 9.2 * nights);
    }

    // can be removed after multi-room-list feature is added
    if (rooms > 1) {
        logElement.innerText += `${total} x ${rooms} = ${toSecondDecimal(
            total * rooms
        )}\n`;
        total *= rooms;
    }

    // display grand total
    totalElement.innerText = `$${total}`;
}

export default handleSubmit;
