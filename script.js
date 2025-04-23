""const subjectsData = {
  CSE: {
    1: [
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
      { name: "DECA", credits: 0.5 },
    ],
    // ... other CSE semesters
  },
  ECE: {
    1: [
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
      { name: "DECA", credits: 0.5 },
    ],
    3: [
      { name: "Advanced Engineering Mathematics-I", credits: 3 },
      { name: "Digital System Design", credits: 3 },
      { name: "Signals & Systems", credits: 3 },
      { name: "Network Theory", credits: 4 },
      { name: "Electronic Devices", credits: 4 },
      { name: "Electronic Devices Lab", credits: 1 },
      { name: "Digital System Design Lab", credits: 1 },
      { name: "Network Theory Lab", credits: 1 },
      { name: "Signals & Systems Lab", credits: 1 },
      { name: "Mini Project or Innovation", credits: 1 },
      { name: "Extra-Curricular & Discipline", credits: 1 },
    ],
    // ... remaining ECE semesters
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

document.getElementById("semester").addEventListener("change", () => {
  const branch = document.getElementById("branch").value;
  const semester = document.getElementById("semester").value;
  const subjectsContainer = document.getElementById("subjects");

  subjectsContainer.innerHTML = "";

  if (branch && semester && subjectsData[branch][semester]) {
    subjectsData[branch][semester].forEach((subject, index) => {
      const div = document.createElement("div");
      div.classList.add("subject");

      div.innerHTML = `
        <label>${subject.name} (${subject.credits} credits)</label>
        <select id="grade-${index}">
          ${Object.keys(gradePoints)
            .map(grade => `<option value="${grade}">${grade}</option>`) 
            .join("")}
        </select>
      `;
      subjectsContainer.appendChild(div);
    });
  }
});

document.getElementById("calculateBtn").addEventListener("click", () => {
  const branch = document.getElementById("branch").value;
  const semester = document.getElementById("semester").value;

  if (!branch || !semester || !subjectsData[branch][semester]) {
    alert("Please select a valid branch and semester.");
    return;
  }

  let totalCredits = 0;
  let totalPoints = 0;

  subjectsData[branch][semester].forEach((subject, index) => {
    const grade = document.getElementById(`grade-${index}`).value;
    const point = gradePoints[grade];
    const credits = subject.credits;

    totalCredits += credits;
    totalPoints += point * credits;
  });

  const sgpa = (totalPoints / totalCredits).toFixed(2);
  document.getElementById("result").textContent = `Your SGPA is: ${sgpa}`;
});




