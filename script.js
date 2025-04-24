document.addEventListener("DOMContentLoaded", function () {
  const subjectsData = {
    CSE: {
      "1st Semester": [
        { name: "Mathematics-I", credits: 5 },
        { name: "Engineering Physics", credits: 2 },
        { name: "Basic Electrical Engineering", credits: 5 },
        { name: "Engineering Graphics", credits: 5 },
        { name: "Communication Skills", credits: 2 }
      ],
      "2nd Semester": [
        { name: "Mathematics-II", credits: 4 },
        { name: "Engineering Chemistry", credits: 4 },
        { name: "Programming for Problem Solving", credits: 3 },
        { name: "Basic Mechanical Engineering", credits: 3 },
        { name: "Environmental Engineering", credits: 2 }
      ],
      "3rd Semester": [
        { name: "Mathematics-III", credits: 4 },
        { name: "Digital Electronics", credits: 3 },
        { name: "Data Structures", credits: 3 },
        { name: "Object Oriented Programming", credits: 3 },
        { name: "Computer Organization & Architecture", credits: 3 }
      ],
      "4th Semester": [
        { name: "Theory of Computation", credits: 3 },
        { name: "Operating Systems", credits: 3 },
        { name: "Database Management Systems", credits: 3 },
        { name: "Software Engineering", credits: 3 },
        { name: "Discrete Mathematics", credits: 4 }
      ],
      "5th Semester": [
        { name: "Compiler Design", credits: 3 },
        { name: "Computer Networks", credits: 3 },
        { name: "Design & Analysis of Algorithms", credits: 3 },
        { name: "Web Technology", credits: 3 },
        { name: "Professional Elective-I", credits: 3 }
      ],
      "6th Semester": [
        { name: "Artificial Intelligence", credits: 3 },
        { name: "Machine Learning", credits: 3 },
        { name: "Cloud Computing", credits: 3 },
        { name: "Open Elective-I", credits: 3 },
        { name: "Professional Elective-II", credits: 3 }
      ],
      "7th Semester": [
        { name: "Major Project-I", credits: 4 },
        { name: "Internet of Things", credits: 3 },
        { name: "Open Elective-II", credits: 3 },
        { name: "Professional Elective-III", credits: 3 },
        { name: "Industrial Training/Internship", credits: 2 }
      ],
      "8th Semester": [
        { name: "Major Project-II", credits: 6 },
        { name: "Seminar & Technical Report Writing", credits: 2 },
        { name: "Professional Elective-IV", credits: 3 }
      ]
    },
    ME: {
      "1st Semester": [
        { name: "Mathematics-I", credits: 5 },
        { name: "Engineering Physics", credits: 2 },
        { name: "Basic Electrical Engineering", credits: 5 },
        { name: "Engineering Graphics", credits: 5 },
        { name: "Communication Skills", credits: 2 }
      ],
      "2nd Semester": [
        { name: "Mathematics-II", credits: 4 },
        { name: "Engineering Chemistry", credits: 4 },
        { name: "Programming for Problem Solving", credits: 3 },
        { name: "Basic Mechanical Engineering", credits: 3 },
        { name: "Environmental Engineering", credits: 2 }
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
      subjectsData[selectedBranch][selectedSemester].forEach((subject) => {
        const label = document.createElement("label");
        label.textContent = `${subject.name} (${subject.credits} credits):`;

        const select = document.createElement("select");
        select.classList.add("grade");
        select.setAttribute("data-credits", subject.credits);

        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "-- Grade --";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        select.appendChild(defaultOption);

        for (const grade in gradePoints) {
          const option = document.createElement("option");
          option.value = grade;
          option.textContent = grade;
          select.appendChild(option);
        }

        subjectsDiv.appendChild(label);
        subjectsDiv.appendChild(select);
        subjectsDiv.appendChild(document.createElement("br"));
      });
    }
  });

  calculateBtn.addEventListener("click", function () {
    const gradeSelects = document.querySelectorAll(".grade");
    let totalCredits = 0;
    let totalPoints = 0;
    let allSelected = true;

    gradeSelects.forEach(select => {
      const grade = select.value;
      const credits = parseInt(select.getAttribute("data-credits"));

      if (grade === "") {
        allSelected = false;
      } else {
        totalCredits += credits;
        totalPoints += credits * gradePoints[grade];
      }
    });

    if (!allSelected) {
      resultDiv.textContent = "Please select a grade for every subject.";
    } else if (totalCredits > 0) {
      const sgpa = (totalPoints / totalCredits).toFixed(2);
      resultDiv.textContent = `Your SGPA is: ${sgpa}`;
    } else {
      resultDiv.textContent = "Something went wrong. Please try again.";
    }
  });
});

