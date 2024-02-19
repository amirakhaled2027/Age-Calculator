const btnEl = document.getElementById('button');
const birthInput = document.getElementById('birthday');
const resultOutput = document.getElementById('result');

function calculateAge() {
    const birthdayValue = birthInput.value;
    if (birthdayValue === "") {
        alert('Please enter your birthday');
    } else {
        const age = getAge(birthdayValue); 
        resultOutput.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"}`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (
        month < 0 || 
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
        age--;
    }

    return age;
}

btnEl.addEventListener("click", calculateAge);

