
function calculateSGPA() {
    var totalCredits = 0;
    var totalGradePoints = 0;

    var grades = document.querySelectorAll('.subject');
    var credits = [4, 4, 2, 2, 2, 1, 1, 1.5, 1, 1.5]; // Example credits for the first semester

    for (var i = 0; i < grades.length; i++) {
        var gradePoint = parseFloat(grades[i].value);
        if (gradePoint > 0) {
            totalGradePoints += gradePoint * credits[i];
            totalCredits += credits[i];
        }
    }

    var sgpa = totalGradePoints / totalCredits;
    document.getElementById('result').textContent = "Your SGPA: " + sgpa.toFixed(2);
}
