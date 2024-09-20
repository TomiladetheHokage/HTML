const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input
}

function ClearDisplay() {
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
    }
    catch(e) {
        display.value = "ode";
    }

}

// const fetch_Data = (url) => {
//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data)
//         })
// }
// fetch_Data(movie_url)