const btn = document.getElementById('button');
const birthInput = document.getElementById('birthday');
const resultOutput = document.getElementById('result');

function calculateAge() {
    const birthdayValue = birthInput.value;
    const age = getAge(birthdayValue);
    resultOutput.innerText = `Your age is ${age} ${age > 1 ? "years" : "years"}`;
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    const age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(
        month < 0 || 
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
        age--;
    }

    return age;
}

btn.addEventListener("click", calculateAge);



