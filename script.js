
document.addEventListener("DOMContentLoaded", function () {
  const subjectsData = {
    CSE: {
      "1st Semester": [
        { name: "Maths", credits: 4 },
        { name: "Physics", credits: 4 },
        { name: "BEE", credits: 3 }
      ],
      "2nd Semester": [
        { name: "Maths-II", credits: 4 },
        { name: "Chemistry", credits: 4 },
        { name: "Engineering Mechanics", credits: 3 }
      ]
    },
    ECE: {
      "1st Semester": [
        { name: "Basic Electronics", credits: 4 },
        { name: "Maths", credits: 4 },
        { name: "BEE", credits: 3 }
      ],
      "2nd Semester": [
        { name: "Digital Logic", credits: 4 },
        { name: "Signals & Systems", credits: 4 },
        { name: "Maths-II", credits: 4 }
      ]
    }
  };

  const gradePoints = {
    A: 10,
    B: 9,
    C: 8,
    D: 7,
    E: 6,
    F: 0
  };

  const branchSelect = document.getElementById("branch");
  const semesterSelect = document.getElementById("semester");
  const subjectsDiv = document.getElementById("subjects");
  const resultDiv = document.getElementById("result");
  const calculateBtn = document.getElementById("calculateBtn");

  branchSelect.addEventListener("change", function () {
    const selectedBranch = branchSelect.value;
    semesterSelect.innerHTML = "<option value=''>-- Select Semester --</option>";
    subjectsDiv.innerHTML = "";
    resultDiv.textContent = "";

    if (subjectsData[selectedBranch]) {
      for (const sem in subjectsData[selectedBranch]) {
        const option = document.createElement("option");
        option.value = sem;
        option.textContent = sem;
        semesterSelect.appendChild(option);
      }
    }
  });

  semesterSelect.addEventListener("change", function () {
    const selectedBranch = branchSelect.value;
    const selectedSemester = semesterSelect.value;
    subjectsDiv.innerHTML = "";
    resultDiv.textContent = "";

    if (subjectsData[selectedBranch] && subjectsData[selectedBranch][selectedSemester]) {
      subjectsData[selectedBranch][selectedSemester].forEach((subject, index) => {
        const label = document.createElement("label");
        label.textContent = `${subject.name} (${subject.credits} credits):`;

        const select = document.createElement("select");
        select.classList.add("grade");
        select.setAttribute("data-credits", subject.credits);

        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "-- Grade --";
        select.appendChild(defaultOption);

        for (const grade in gradePoints) {
          const option = document.createElement("option");
          option.value = grade;
          option.textContent = grade;
          select.appendChild(option);
        }

        subjectsDiv.appendChild(label);
        subjectsDiv.appendChild(select);
      });
    }
  });

  calculateBtn.addEventListener("click", function () {
    const gradeSelects = document.querySelectorAll(".grade");
    let totalCredits = 0;
    let totalPoints = 0;

    gradeSelects.forEach(select => {
      const grade = select.value;
      const credits = parseInt(select.getAttribute("data-credits"));

      if (grade in gradePoints) {
        totalCredits += credits;
        totalPoints += credits * gradePoints[grade];
      }
    });

    if (totalCredits > 0) {
      const sgpa = (totalPoints / totalCredits).toFixed(2);
      resultDiv.textContent = `Your SGPA is: ${sgpa}`;
    } else {
      resultDiv.textContent = "Please select valid grades.";
    }
  });
});
