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
  ECE : {
    "1st Semester": [
      { "name": "Engineering Mathematics-I", "credits": 4 },
      { "name": "Engineering Physics", "credits": 4 },
      { "name": "Communication Skills", "credits": 2 },
      { "name": "Programming for Problem Solving", "credits": 2 },
      { "name": "Basic Mechanical Engineering", "credits": 2 },
      { "name": "Basic Electrical Engineering", "credits": 2 },
      { "name": "Engineering Physics Lab", "credits": 1 },
      { "name": "Language Lab", "credits": 1 },
      { "name": "Computer Programming Lab", "credits": 1.5 },
      { "name": "Basic Electrical Engineering Lab", "credits": 1 },
      { "name": "Computer Aided Engineering Graphics", "credits": 1.5 }
    ],
    "2nd Semester": [
      { "name": "Engineering Mathematics-II", "credits": 4 },
      { "name": "Engineering Chemistry", "credits": 4 },
      { "name": "Human Values", "credits": 2 },
      { "name": "Environmental Engineering & Disaster Management", "credits": 2 },
      { "name": "Basic Civil Engineering", "credits": 2 },
      { "name": "Engineering Chemistry Lab", "credits": 1 },
      { "name": "Human Values Activities and Sports", "credits": 1 },
      { "name": "Manufacturing Practices Workshop", "credits": 1.5 },
      { "name": "Basic Civil Engineering Lab", "credits": 1 },
      { "name": "Computer Aided Machine Drawing", "credits": 1.5 }
    ],
    "3rd Semester": [
      { "name": "Mathematics-III", "credits": 4 },
      { "name": "Electronic Devices & Circuits", "credits": 4 },
      { "name": "Circuit Analysis & Synthesis", "credits": 4 },
      { "name": "Electronic Measurements & Instrumentation", "credits": 4 },
      { "name": "Electronic Materials & Processes", "credits": 4 },
      { "name": "Data Structures & Algorithms", "credits": 4 },
      { "name": "Electronics Workshop", "credits": 1 },
      { "name": "Computer Programming Lab-I", "credits": 1 },
      { "name": "Electronics Lab I", "credits": 1 },
      { "name": "Electronic Measurement & Instrumentation Lab", "credits": 1 }
    ],
    "4th Semester": [
      { "name": "Mathematics-IV", "credits": 4 },
      { "name": "Analog Electronics", "credits": 4 },
      { "name": "Digital Electronics", "credits": 4 },
      { "name": "Electromagnetic Field Theory", "credits": 4 },
      { "name": "Random Variables & Stochastic Processes", "credits": 4 },
      { "name": "Object Oriented Programming", "credits": 4 },
      { "name": "Computer Programming Lab-II", "credits": 1 },
      { "name": "Electronics Lab II", "credits": 1 },
      { "name": "Digital Electronics Lab", "credits": 1 },
      { "name": "Humanities", "credits": 1 }
    ],
    "5th Semester": [
      { "name": "Signals and Systems", "credits": 4 },
      { "name": "Linear Integrated Circuits", "credits": 4 },
      { "name": "Telecommunication Engineering", "credits": 4 },
      { "name": "Analog Communication", "credits": 4 },
      { "name": "Microwave Engineering-I", "credits": 4 },
      { "name": "Biomedical Instrumentation", "credits": 4 },
      { "name": "Electronic Engineering Design Lab", "credits": 1 },
      { "name": "Microwave Engineering Lab", "credits": 1 },
      { "name": "Communication Lab-I", "credits": 1 },
      { "name": "Signal Processing Lab-I", "credits": 1 }
    ],
    "6th Semester": [
      { "name": "Microwave Engineering-II", "credits": 4 },
      { "name": "Microprocessor and Microcontroller", "credits": 4 },
      { "name": "Industrial Electronics", "credits": 4 },
      { "name": "Digital Communication", "credits": 4 },
      { "name": "Control Systems", "credits": 4 },
      { "name": "Neural Networks", "credits": 4 },
      { "name": "Communication Lab-II", "credits": 1 },
      { "name": "Microprocessor Lab", "credits": 1 },
      { "name": "Unix Shell Programming Lab", "credits": 1 },
      { "name": "Industrial Electronics Lab", "credits": 1 }
    ],
    "7th Semester": [
      { "name": "Antenna & Wave Propagation", "credits": 4 },
      { "name": "Digital Signal Processing", "credits": 4 },
      { "name": "Wireless Communication", "credits": 4 },
      { "name": "IC Technology", "credits": 4 },
      { "name": "VLSI Design", "credits": 4 },
      { "name": "Advanced Microprocessors", "credits": 4 },
      { "name": "Signal Processing Lab-II", "credits": 1 },
      { "name": "Wireless Communication Lab", "credits": 1 }
    ],
    "8th Semester": [
      { "name": "Computer Networks", "credits": 4 },
      { "name": "Radar & TV Engineering", "credits": 4 },
      { "name": "Optical Communication", "credits": 4 },
      { "name": "Image Processing and Pattern Recognition", "credits": 4 },
      { "name": "Computer Network Programming Lab", "credits": 1 },
      { "name": "Industrial Economics & Management", "credits": 1 },
      { "name": "VLSI & Optical Fiber Lab", "credits": 1 }
    ]
  }
};

  const gradePoints = {
  "A++": 10,
  "A+": 9,
  "A": 8.5,
  "B+": 8,
  "B": 7.5,
  "C+": 7,
  "C": 6.5,
  "D+": 6,
  "D": 5.5,
  "E+": 5,
  "E": 4,
  "F": 0
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

