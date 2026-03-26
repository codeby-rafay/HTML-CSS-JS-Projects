function convertToFahrenheit() {
    let celsius = document.getElementById("celsiusInput").value;

    celsius = parseFloat(celsius);

    if(isNaN(celsius)) {
        document.getElementById("result").innerHTML = alert("Please enter valid numbers")
    }
    
    let farenheit = (celsius * 9/5) + 32;

    document.getElementById("result").innerHTML = `${celsius} C = ${farenheit.toFixed(2)} F`
}