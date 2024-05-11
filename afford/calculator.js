function calculateAverage() {
    var numbersInput = document.getElementById("numbers").value;
    var numbers = numbersInput.split(",").map(Number);

    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    var average = sum / numbers.length;
    document.getElementById("result").innerHTML = "Average: " + average.toFixed(2);
}
