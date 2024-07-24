function validateSyntax() {
    let input = document.getElementById('petInput').value; //here we fetch the input result
    // using a regular expression to define what the format should be of the input field when it is valid
    let sequence = /^pet_\d{4}[a-zA-Z]+$/; // the only problem here is that the d{4} takes any 4 digits and not strickly dates

    let validation; // here a new variable is defined so we can display the results in the innertext
    // if statement to test if input follows the sequence defined in the regular expression above
    if (sequence.test(input)) {
        validation = "Valid Syntax \ud83d\udfe2" //using unicode to add emojis
    } else {
        validation = "Invalid Syntax \ud83d\udd34"
    }
    document.getElementById('result').innerText = `${validation}`; //here we inject the result into the DOM to display for users
}


