document.addEventListener("DOMContentLoaded", function () {
  const subjectsData = {
  CSE: {
   "1st Semester": [
    { name: "Mathematics-I", credits: 4 },
    { name: "Engineering Physics", credits: 4 },
    { name: "Engineering Chemistry", credits: 4 },
    { name: "Basic Electrical Engineering", credits: 3 },
    { name: "Fundamentals of Mechanical Engineering", credits: 3 },
    { name: "Programming for Problem Solving", credits: 3 },
    { name: "Engineering Physics Lab", credits: 1 },
    { name: "Engineering Chemistry Lab", credits: 1 },
    { name: "Basic Electrical Engineering Lab", credits: 1 },
    { name: "Programming Lab", credits: 1 },
    { name: "Communication Skills Lab", credits: 1 }
  ],
  "2nd Semester": [
    { name: "Mathematics-II", credits: 4 },
    { name: "Engineering Mechanics", credits: 3 },
    { name: "Engineering Graphics", credits: 3 },
    { name: "Basic Civil Engineering", credits: 3 },
    { name: "Environment and Ecology", credits: 2 },
    { name: "Data Structures using C", credits: 3 },
    { name: "Engineering Mechanics Lab", credits: 1 },
    { name: "Engineering Graphics Lab", credits: 1 },
    { name: "Civil Engineering Lab", credits: 1 },
    { name: "Data Structures Lab", credits: 1 },
    { name: "Soft Skills Lab", credits: 1 }
  ],
  "3rd Semester": [
    { name: "Discrete Mathematics", credits: 4 },
    { name: "Digital Electronics", credits: 4 },
    { name: "Data Structures and Algorithms", credits: 4 },
    { name: "Object Oriented Programming using C++", credits: 4 },
    { name: "Computer Organization and Architecture", credits: 4 },
    { name: "Digital Electronics Lab", credits: 1 },
    { name: "DSA Lab", credits: 1 },
    { name: "OOPs Lab", credits: 1 },
    { name: "Mini Project / Seminar / Internship", credits: 1 }
  ],
  "4th Semester": [
    { name: "Operating Systems", credits: 4 },
    { name: "Database Management Systems", credits: 4 },
    { name: "Theory of Computation", credits: 4 },
    { name: "Software Engineering", credits: 3 },
    { name: "Microprocessor & Interfacing", credits: 3 },
    { name: "DBMS Lab", credits: 1 },
    { name: "Operating Systems Lab", credits: 1 },
    { name: "Microprocessor Lab", credits: 1 },
    { name: "Seminar / Workshop", credits: 1 }
  ],
  "5th Semester": [
    { name: "Design and Analysis of Algorithms", credits: 4 },
    { name: "Web Technology", credits: 3 },
    { name: "Computer Networks", credits: 4 },
    { name: "Compiler Design", credits: 4 },
    { name: "Artificial Intelligence", credits: 3 },
    { name: "DAA Lab", credits: 1 },
    { name: "Web Tech Lab", credits: 1 },
    { name: "CN Lab", credits: 1 },
    { name: "Internship / Mini Project", credits: 1 }
  ],
  "6th Semester": [
    { name: "Machine Learning", credits: 4 },
    { name: "Cloud Computing", credits: 3 },
    { name: "Internet of Things (IoT)", credits: 3 },
    { name: "Cryptography & Network Security", credits: 4 },
    { name: "Elective - I", credits: 3 },
    { name: "ML Lab", credits: 1 },
    { name: "IoT Lab", credits: 1 },
    { name: "CNS Lab", credits: 1 },
    { name: "Project Phase - I", credits: 2 }
  ],
  "7th Semester": [
    { name: "Data Science", credits: 3 },
    { name: "Blockchain Technology", credits: 3 },
    { name: "DevOps", credits: 3 },
    { name: "Elective - II", credits: 3 },
    { name: "Project Phase - II", credits: 4 },
    { name: "Seminar / Internship", credits: 2 }
  ],
  "8th Semester": [
    { name: "Major Project", credits: 10 },
    { name: "Internship / Industrial Training", credits: 4 }
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

