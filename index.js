const apiKey = 'Cma3xP2f9NFTEG073BMWWw==CUMwKSMQ63LeC80x';

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

async function getPassword() {
    try {
        const response = await fetch(`https://api.api-ninjas.com/v1/passwordgenerator?length=${output.innerHTML}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error("Cannot Fetch Data!");
        }

        const data = await response.json();
        console.log(data);
        passwordDisplay.value = data.random_password;

        document.getElementById("icon").classList.remove("d-none");
        document.getElementById("check").classList.add("d-none");
    } catch (error) {
        console.error(error);
    }
}

document.getElementById("icon").addEventListener("click", function () {
    var textarea = document.getElementById("passwordDisplay");
    textarea.select();
    document.execCommand("copy");

    // Hide copy icon and show checkmark icon
    document.getElementById("icon").classList.add("d-none");
    document.getElementById("check").classList.remove("d-none");
});
