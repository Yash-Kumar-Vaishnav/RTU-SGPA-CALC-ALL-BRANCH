const subjectsData = {
  CSE: {
    "1st Semester": [
      { name: "Engineering Mathematics-I", credit: 4 },
      { name: "Engineering Chemistry", credit: 4 },
      { name: "Human Values", credit: 2 },
      { name: "Programming for Problem Solving", credit: 2 },
      { name: "Basic Civil Engineering", credit: 2 },
      { name: "Engineering Chemistry Lab", credit: 1 },
      { name: "Human Values Activities", credit: 1 },
      { name: "Computer Programming Lab", credit: 1.5 },
      { name: "Basic Civil Engineering Lab", credit: 1 },
      { name: "Computer Aided Engineering Graphics", credit: 1.5 },
      { name: "DECA", credit: 0.5 },
    ],
    "2nd Semester": [
      { name: "Engineering Mathematics-II", credit: 4 },
      { name: "Engineering Physics", credit: 4 },
      { name: "Communication Skills", credit: 2 },
      { name: "Basic Mechanical Engineering", credit: 2 },
      { name: "Basic Electrical Engineering", credit: 2 },
      { name: "Engineering Physics Lab", credit: 1 },
      { name: "Language Lab", credit: 1 },
      { name: "Manufacturing Practices Workshop", credit: 1.5 },
      { name: "Basic Electrical Engineering Lab", credit: 1 },
      { name: "Computer Aided Machine Drawing", credit: 1.5 },
      { name: "DECA", credit: 0.5 },
    ],
    "3rd Semester": [
      { name: "Discrete Mathematics", credit: 4 },
      { name: "Data Structures", credit: 4 },
      { name: "Object Oriented Programming", credit: 3 },
      { name: "Computer Organization", credit: 3 },
      { name: "Technical Communication", credit: 2 },
      { name: "Data Structures Lab", credit: 1 },
      { name: "Object Oriented Programming Lab", credit: 1 },
      { name: "Computer Organization Lab", credit: 1 },
      { name: "Mini Project or Innovation", credit: 1 },
      { name: "Extra-Curricular & Discipline", credit: 1 },
    ],
    "4th Semester": [
      { name: "Theory of Computation", credit: 4 },
      { name: "Design and Analysis of Algorithms", credit: 4 },
      { name: "Database Management Systems", credit: 3 },
      { name: "Operating Systems", credit: 3 },
      { name: "DBMS Lab", credit: 1 },
      { name: "Operating Systems Lab", credit: 1 },
      { name: "Algorithm Lab", credit: 1 },
      { name: "Mini Project or Innovation", credit: 1 },
      { name: "Extra-Curricular & Discipline", credit: 1 },
    ],
    "5th Semester": [
      { name: "Computer Networks", credit: 3 },
      { name: "Compiler Design", credit: 3 },
      { name: "Software Engineering", credit: 3 },
      { name: "Web Technology", credit: 3 },
      { name: "Computer Networks Lab", credit: 1 },
      { name: "Compiler Design Lab", credit: 1 },
      { name: "Web Technology Lab", credit: 1 },
      { name: "Mini Project or Innovation", credit: 1 },
      { name: "Extra-Curricular & Discipline", credit: 1 },
    ],
    "6th Semester": [
      { name: "Artificial Intelligence", credit: 3 },
      { name: "Machine Learning", credit: 3 },
      { name: "Cloud Computing", credit: 3 },
      { name: "Open Elective", credit: 3 },
      { name: "AI Lab", credit: 1 },
      { name: "Machine Learning Lab", credit: 1 },
      { name: "Cloud Computing Lab", credit: 1 },
      { name: "Mini Project or Innovation", credit: 1 },
      { name: "Extra-Curricular & Discipline", credit: 1 },
    ],
    "7th Semester": [
      { name: "Data Science", credit: 3 },
      { name: "Cyber Security", credit: 3 },
      { name: "Professional Elective I", credit: 3 },
      { name: "Professional Elective II", credit: 3 },
      { name: "Open Elective II", credit: 3 },
      { name: "Data Science Lab", credit: 1 },
      { name: "Cyber Security Lab", credit: 1 },
      { name: "Project Phase I", credit: 2 },
      { name: "Seminar", credit: 2 },
      { name: "SODECA", credit: 0.5 },
    ],
    "8th Semester": [
      { name: "Professional Elective III", credit: 3 },
      { name: "Professional Elective IV", credit: 3 },
      { name: "Major Project", credit: 6 },
      { name: "Extra-Curricular & Discipline", credit: 2 },
    ],
  },
  ECE: {
    "1st Semester": "same",
    "2nd Semester": "same",
    "3rd Semester": [
      { name: "Advanced Engineering Mathematics-I", credit: 3 },
      { name: "Digital System Design", credit: 3 },
      { name: "Signals & Systems", credit: 3 },
      { name: "Network Theory", credit: 4 },
      { name: "Electronic Devices", credit: 4 },
      { name: "Electronic Devices Lab", credit: 1 },
      { name: "Digital System Design Lab", credit: 1 },
      { name: "Network Theory Lab", credit: 1 },
      { name: "Signals & Systems Lab", credit: 1 },
      { name: "Mini Project or Innovation", credit: 1 },
      { name: "Extra-Curricular & Discipline", credit: 1 },
    ],
    "4th Semester": [
      { name: "Advanced Engineering Mathematics-II", credit: 3 },
      { name: "Managerial Economics and Financial Accounting", credit: 2 },
      { name: "Technical Communication", credit: 2 },
      { name: "Analog Circuits", credit: 3 },
      { name: "Microcontrollers", credit: 3 },
      { name: "Electronics Measurement and Instrumentation", credit: 3 },
      { name: "Analog Circuits Lab", credit: 1 },
      { name: "Microcontrollers Lab", credit: 1 },
      { name: "Electronics Measurement and Instrumentation Lab", credit: 1 },
      { name: "Mini Project or Innovation", credit: 1 },
      { name: "Extra-Curricular & Discipline", credit: 1 },
    ],
    "5th Semester": [
      { name: "Computer Architecture", credit: 2 },
      { name: "Electromagnetic Waves", credit: 3 },
      { name: "Control Systems", credit: 3 },
      { name: "Digital Signal Processing", credit: 3 },
      { name: "Digital Signal Processing Lab", credit: 1.5 },
      { name: "Microwave Lab", credit: 1 },
      { name: "RF Simulation Lab", credit: 1.5 },
      { name: "Industrial Training", credit: 2.5 },
      { name: "Extra-Curricular & Discipline", credit: 0.5 },
      { name: "Microwave Theory & Techniques", credit: 3 },
      { name: "Satellite Communication", credit: 2 },
    ],
    "6th Semester": [
      { name: "Power Electronics", credit: 2 },
      { name: "Computer Networks", credit: 3 },
      { name: "Fiber Optic Communication", credit: 3 },
      { name: "Antennas and Propagation", credit: 3 },
      { name: "Power Electronics Lab", credit: 1 },
      { name: "Computer Networks Lab", credit: 1 },
      { name: "Fiber Optic Communication Lab", credit: 1 },
      { name: "Antennas and Propagation Lab", credit: 1 },
      { name: "Mini Project or Innovation", credit: 1 },
      { name: "Extra-Curricular & Discipline", credit: 1 },
      { name: "Information Theory and Coding", credit: 3 },
      { name: "Professional Elective II", credit: 3 },
    ],
    "7th Semester": [
      { name: "Microwave Engineering", credit: 3 },
      { name: "Wireless Communication", credit: 3 },
      { name: "Professional Elective III", credit: 3 },
      { name: "Open Elective I", credit: 3 },
      { name: "Microwave Engineering Lab", credit: 1 },
      { name: "Wireless Communication Lab", credit: 1 },
      { name: "Project Phase I", credit: 2 },
      { name: "Seminar", credit: 2 },
      { name: "SODECA", credit: 0.5 },
      { name: "VLSI Design", credit: 3 },
      { name: "Radar Engineering", credit: 3 },
    ],
    "8th Semester": [
      { name: "Professional Elective IV", credit: 3 },
      { name: "Open Elective II", credit: 3 },
      { name: "Project Phase II", credit: 4 },
    ],
  },
  EE: {
    "1st Semester": "same",
    "2nd Semester": "same",
  },
  ME: {
    "1st Semester": "same",
    "2nd Semester": "same",
  },
  CE: {
    "1st Semester": "same",
    "2nd Semester": "same",
  },
  IT: {
    "1st Semester": "same",
    "2nd Semester": "same",
  },
};
const gradePoints = {
  "A++": 10,
  "A+": 9,
  A: 8.5,
  "B+": 8,
  B: 7.5,
  "C+": 7,
  C: 6.5,
  "D+": 6,
  D: 5.5,
  "E+": 5,
  E: 4,
  F: 0,
};

const branchSelect = document.getElementById("branch");
const semesterSelect = document.getElementById("semester");
const subjectsDiv = document.getElementById("subjects");

const gradeOptions = `<option value="">-- Select Grade --</option>` +
  Object.entries(gradePoints)
    .map(([grade, point]) => `<option value="${point}">${grade}</option>`)
    .join("");

branchSelect.addEventListener("change", function () {
  semesterSelect.innerHTML = "<option value=''>-- Select Semester --</option>";
  const selectedBranch = branchSelect.value;

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
  const branch = branchSelect.value;
  const semester = semesterSelect.value;
  const subjects = subjectsData[branch][semester];

  subjectsDiv.innerHTML = "";

  if (subjects === "same") {
    subjectsDiv.innerHTML =
      "<p>Select same subjects and credits as 1st/2nd CSE semester</p>";
    return;
  }

  const fragment = document.createDocumentFragment();
  subjects.forEach((subj) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <label>${subj.name} (${subj.credit} credits)</label>
      <select class="grade-select" data-credit="${subj.credit}">
        ${gradeOptions}
      </select>
    `;
    fragment.appendChild(div);
  });
  subjectsDiv.appendChild(fragment);
});

document.getElementById("calculateBtn").addEventListener("click", function (e) {
  e.preventDefault(); // 🛠️ Fix added here
  const gradeSelects = document.querySelectorAll(".grade-select");
  let totalCredits = 0;
  let totalPoints = 0;
  let allSelected = true;

  gradeSelects.forEach((select) => {
    const credit = parseFloat(select.dataset.credit);
    const point = parseFloat(select.value);

    if (isNaN(point)) {
      allSelected = false;
    }

    totalCredits += credit;
    totalPoints += credit * point;
  });

  if (!allSelected) {
    document.getElementById("result").textContent =
      "Please select all grades before calculating.";
    return;
  }

  const sgpa = totalPoints / totalCredits;
  document.getElementById("result").textContent =
    "Your SGPA is: " + sgpa.toFixed(2);
});


