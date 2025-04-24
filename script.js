
document.addEventListener("DOMContentLoaded", function () {
  const subjectsData = {
  CSE : {
  "1st Semester": [
    { name: "Engineering Mathematics-I", credits: 4 },
    { name: "Engineering Chemistry", credits: 4 },
    { name: "Human Values", credits: 2 },
    { name: "Programming for Problem Solving", credits: 2 },
    { name: "Basic Civil Engineering", credits: 2 },
    { name: "Engineering Chemistry Lab", credits: 1 },
    { name: "Human Values Activities", credits: 1 },
    { name: "Computer Programming Lab", credits: 1.5 },
    { name: "Basic Civil Engineering Lab", credits: 1 },
    { name: "Computer Aided Engineering Graphics", credits: 1.5 },
    { name: "DECA", credits: 0.5 }
  ],
  "2nd Semester": [
    { name: "Engineering Mathematics-II", credits: 4 },
    { name: "Engineering Physics", credits: 4 },
    { name: "Communication Skills", credits: 2 },
    { name: "Basic Mechanical Engineering", credits: 2 },
    { name: "Basic Electrical Engineering", credits: 2 },
    { name: "Engineering Physics Lab", credits: 1 },
    { name: "Language Lab", credits: 1 },
    { name: "Manufacturing Practices Workshop", credits: 1.5 },
    { name: "Basic Electrical Engineering Lab", credits: 1 },
    { name: "Computer Aided Machine Drawing", credits: 1.5 },
    { name: "DECA", credits: 0.5 }
  ],
  "3rd Semester": [
    { name: "Advanced Engineering Mathematics", credits: 3 },
    { name: "Managerial Economics & Financial Accounting", credits: 2 },
    { name: "Digital Electronics", credits: 3 },
    { name: "Data Structures and Algorithms", credits: 3 },
    { name: "Object Oriented Programming", credits: 3 },
    { name: "Software Engineering", credits: 3 },
    { name: "Data Structures and Algorithms Lab", credits: 1.5 },
    { name: "Object Oriented Programming Lab", credits: 1.5 },
    { name: "Software Engineering Lab", credits: 1.5 },
    { name: "Digital Electronics Lab", credits: 1.5 },
    { name: "Industrial Training", credits: 1 },
    { name: "Social Outreach, Discipline & Extracurricular Activities", credits: 0.5 }
  ],
  "4th Semester": [
    { name: "Discrete Mathematics Structure", credits: 3 },
    { name: "Technical Communication", credits: 2 },
    { name: "Microprocessor & Interfaces", credits: 3 },
    { name: "Database Management System", credits: 3 },
    { name: "Theory of Computation", credits: 3 },
    { name: "Data Communication and Computer Networks", credits: 3 },
    { name: "Microprocessor & Interfaces Lab", credits: 1 },
    { name: "Database Management System Lab", credits: 1.5 },
    { name: "Network Programming Lab", credits: 1.5 },
    { name: "Linux Shell Programming Lab", credits: 1 },
    { name: "Java Lab", credits: 1 },
    { name: "Social Outreach, Discipline & Extracurricular Activities", credits: 0.5 }
  ],
  "5th Semester": [
    { name: "Information Theory & Coding", credits: 2 },
    { name: "Compiler Design", credits: 3 },
    { name: "Operating System", credits: 3 },
    { name: "Computer Graphics & Multimedia", credits: 3 },
    { name: "Analysis of Algorithms", credits: 3 },
    { name: "Human-Computer Interaction", credits: 2 },
    { name: "Computer Graphics & Multimedia Lab", credits: 1 },
    { name: "Compiler Design Lab", credits: 1 },
    { name: "Analysis of Algorithms Lab", credits: 1 },
    { name: "Advance Java Lab", credits: 1 },
    { name: "Industrial Training", credits: 2.5 },
    { name: "Social Outreach, Discipline & Extracurricular Activities", credits: 0.5 }
  ],
  "6th Semester": [
    { name: "Digital Image Processing", credits: 2 },
    { name: "Machine Learning", credits: 3 },
    { name: "Information Security Systems", credits: 2 },
    { name: "Computer Architecture and Organization", credits: 3 },
    { name: "Artificial Intelligence", credits: 2 },
    { name: "Cloud Computing", credits: 3 },
    { name: "Distributed Systems", credits: 2 },
    { name: "Digital Image Processing Lab", credits: 1.5 },
    { name: "Machine Learning Lab", credits: 1.5 },
    { name: "Python Lab", credits: 1.5 },
    { name: "Mobile App Development Lab", credits: 1.5 },
    { name: "Social Outreach, Discipline & Extracurricular Activities", credits: 0.5 }
  ],
  "7th Semester": [
    { name: "Environmental Engineering & Disaster Management", credits: 3 },
    { name: "Internet Of Things", credits: 3 },
    { name: "Internet Of Things Lab", credits: 2 },
    { name: "Cyber Security Lab", credits: 2 },
    { name: "Industrial Training", credits: 2.5 },
    { name: "Seminar", credits: 2 },
    { name: "Social Outreach, Discipline & Extracurricular Activities", credits: 0.5 }
  ],
  "8th Semester": [
    { name: "Big Data Analytics", credits: 3 },
    { name: "Big Data Analytics Lab", credits: 2 },
    { name: "Software Testing & Validation Lab", credits: 1 },
    { name: "Project", credits: 7 },
    { name: "Social Outreach, Discipline & Extracurricular Activities", credits: 0.5 },
    { name: "Disaster Management", credits: 3 }
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
    { "name": "Advanced Engineering Mathematics-I", "credits": 3 },
    { "name": "Electronic Devices", "credits": 3 },
    { "name": "Digital System Design", "credits": 3 },
    { "name": "Signals and Systems", "credits": 3 },
    { "name": "Network Theory", "credits": 3 },
    { "name": "Electronic Devices Lab", "credits": 1.5 },
    { "name": "Digital System Design Lab", "credits": 1.5 },
    { "name": "Signals and Systems Lab / Simulation Lab", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],
  "4th Semester": [
    { "name": "Advanced Engineering Mathematics-II", "credits": 3 },
    { "name": "Managerial Economics and Financial Accounting / Technical Communication", "credits": 2 },
    { "name": "Analog Circuits", "credits": 3 },
    { "name": "Microcontrollers", "credits": 3 },
    { "name": "Electronics Measurement & Instrumentation", "credits": 3 },
    { "name": "Analog and Digital Communication", "credits": 3 },
    { "name": "Analog and Digital Communication Lab", "credits": 1.5 },
    { "name": "Analog Circuits Lab", "credits": 1.5 },
    { "name": "Microcontrollers Lab", "credits": 1.5 },
    { "name": "Electronics Measurement & Instrumentation Lab", "credits": 1.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],
  "5th Semester": [
    { "name": "Computer Architecture", "credits": 2 },
    { "name": "Electromagnetic Waves", "credits": 3 },
    { "name": "Control System", "credits": 3 },
    { "name": "Digital Signal Processing", "credits": 3 },
    { "name": "Microwave Theory & Techniques", "credits": 3 },
    { "name": "Professional Elective I", "credits": 2 },
    { "name": "RF Simulation Lab", "credits": 1.5 },
    { "name": "Digital Signal Processing Lab", "credits": 1.5 },
    { "name": "Microwave Lab", "credits": 1 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],
  "6th Semester": [
    { "name": "Power Electronics", "credits": 2 },
    { "name": "Computer Network", "credits": 3 },
    { "name": "Fiber Optics Communications", "credits": 3 },
    { "name": "Antennas and Propagation", "credits": 3 },
    { "name": "5G Communication Technology", "credits": 3 },
    { "name": "Professional Elective II", "credits": 3 },
    { "name": "Computer Network Lab", "credits": 2 },
    { "name": "Antenna and Wave Propagation Lab", "credits": 1 },
    { "name": "Electronics Design Lab", "credits": 2 },
    { "name": "Power Electronics Lab", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],
  "7th Semester": [
    { "name": "Program Elective III", "credits": 3 },
    { "name": "Open Elective I", "credits": 3 },
    { "name": "VLSI Design Lab", "credits": 2 },
    { "name": "5G Communication Lab", "credits": 1 },
    { "name": "Optical Communication Lab", "credits": 1 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Seminar", "credits": 2 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],
  "8th Semester": [
    { "name": "Program Elective IV", "credits": 3 },
    { "name": "Open Elective II", "credits": 3 },
    { "name": "Internet of Things (IOT) Lab", "credits": 1 },
    { "name": "Skill Development Lab", "credits": 1 },
    { "name": "Major Project", "credits": 7 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
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
      const credits = parseFloat(select.getAttribute("data-credits"));

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
