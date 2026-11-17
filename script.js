function volume_sphere() {
    // Get radius input
    let radius = parseFloat(document.getElementById("radius").value);

    // Get volume input field
    let volume = document.getElementById("volume");

    // Validate input
    if (isNaN(radius) || radius < 0) {
        volume.value = "NaN";
        return false;
    }

    // Calculate volume
    let result = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display result rounded to 4 decimal places
    volume.value = result.toFixed(4);

    // Prevent form submission
    return false;
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;