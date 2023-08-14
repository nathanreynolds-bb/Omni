function logInputs() {
    console.log("running logInputs function");
    console.log(document.getElementById("flatRate").value);
    console.log(document.getElementById("nights").value);
    console.log(document.getElementById("rooms").value);
    console.log(document.getElementById("resort-fee").checked);
}

function getInputs() {
    return {
        flatRate: document.getElementById("flatRate").value,
        rooms: document.getElementById("rooms").value,
        nights: document.getElementById("nights").value,
        resortFee: document.getElementById("resort-fee").checked,
    };
}

export default getInputs;
