function addSemester() {
    const container = document.getElementById("semesterInputs");

    const div = document.createElement("div");
    div.classList.add("input-group");

    div.innerHTML = `
        <input type="number" step="0.01" placeholder="Enter SGPA" class="sgpa">
    `;

    container.appendChild(div);
}

function calculateCGPA() {
    const sgpas = document.querySelectorAll(".sgpa");

    let total = 0;
    let count = 0;

    sgpas.forEach(input => {
        const value = parseFloat(input.value);

        if (!isNaN(value)) {
            total += value;
            count++;
        }
    });

    if (count === 0) {
        document.getElementById("cgpaResult").innerText =
            "Please enter SGPA values";
        return;
    }

    const cgpa = total / count;

    document.getElementById("cgpaResult").innerText =
        `CGPA: ${cgpa.toFixed(2)}`;
}