
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
    CS_AI: {
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
    { "name": "Advanced Engineering Mathematics", "credits": 3 },
    { "name": "Technical Communication / Managerial Economics and Financial Accounting", "credits": 2 },
    { "name": "Digital Electronics", "credits": 3 },
    { "name": "Data Structures and Algorithms", "credits": 3 },
    { "name": "Object Oriented Programming", "credits": 3 },
    { "name": "Software Engineering", "credits": 3 },
    { "name": "Data Structures and Algorithms Lab", "credits": 1.5 },
    { "name": "Object Oriented Programming Lab", "credits": 1.5 },
    { "name": "Software Engineering Lab", "credits": 1.5 },
    { "name": "Digital Electronics Lab", "credits": 1.5 },
    { "name": "Industrial Training", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "4th Semester": [
    { "name": "Discrete Mathematics Structure", "credits": 3 },
    { "name": "Managerial Economics and Financial Accounting / Technical Communication", "credits": 2 },
    { "name": "Microprocessor & Interfaces", "credits": 3 },
    { "name": "Database Management System", "credits": 3 },
    { "name": "Theory of Computation", "credits": 3 },
    { "name": "Data Communication and Computer Networks", "credits": 3 },
    { "name": "Microprocessor & Interfaces Lab", "credits": 1 },
    { "name": "Database Management System Lab", "credits": 1.5 },
    { "name": "Network Programming Lab", "credits": 1.5 },
    { "name": "Linux Shell Programming Lab", "credits": 1 },
    { "name": "Java Lab", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "5th Semester": [
    { "name": "Data Mining - Concepts and Techniques", "credits": 2 },
    { "name": "Compiler Design", "credits": 3 },
    { "name": "Operating System", "credits": 3 },
    { "name": "Computer Graphics & Multimedia", "credits": 3 },
    { "name": "Analysis of Algorithm", "credits": 3 },
    { "name": "Professional Elective - I", "credits": 2 },
    { "name": "Computer Graphics & Multimedia Lab", "credits": 1 },
    { "name": "Compiler Design Lab", "credits": 1 },
    { "name": "Analysis of Algorithm Lab", "credits": 1 },
    { "name": "Advanced Java Lab", "credits": 1 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "6th Semester": [
    { "name": "Digital Image Processing", "credits": 2 },
    { "name": "Machine Learning", "credits": 3 },
    { "name": "Information Security Systems", "credits": 2 },
    { "name": "Computer Architecture and Organization", "credits": 3 },
    { "name": "Principles of Artificial Intelligence", "credits": 2 },
    { "name": "Cloud Computing", "credits": 3 },
    { "name": "Professional Elective - II", "credits": 2 },
    { "name": "Digital Image Processing Lab", "credits": 1.5 },
    { "name": "Machine Learning Lab", "credits": 1.5 },
    { "name": "Python Lab", "credits": 1.5 },
    { "name": "Mobile Application Development Lab", "credits": 1.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "7th Semester": [
    { "name": "Deep Learning and Its Applications", "credits": 3 },
    { "name": "Open Elective - I", "credits": 3 },
    { "name": "Deep Learning and Its Application Lab", "credits": 2 },
    { "name": "Computer Vision Lab", "credits": 2 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Seminar", "credits": 2 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "8th Semester": [
    { "name": "Big Data Analytics", "credits": 3 },
    { "name": "Open Elective - II", "credits": 3 },
    { "name": "Big Data Analytics Lab", "credits": 1 },
    { "name": "Robot Programming Lab", "credits": 1 },
    { "name": "Project", "credits": 7 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
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
  },
    EE: {
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
    { "name": "Advance Mathematics", "credits": 3 },
    { "name": "Technical Communication / Managerial Economics and Financial Accounting", "credits": 2 },
    { "name": "Power Generation Process", "credits": 2 },
    { "name": "Electrical Circuit Analysis", "credits": 3 },
    { "name": "Analog Electronics", "credits": 3 },
    { "name": "Electrical Machine - I", "credits": 3 },
    { "name": "Electromagnetic Field", "credits": 2 },
    { "name": "Analog Electronics Lab", "credits": 1 },
    { "name": "Electrical Machine-I Lab", "credits": 2 },
    { "name": "Electrical Circuit Design Lab", "credits": 2 },
    { "name": "Industrial Training", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "4th Semester": [
    { "name": "Biology", "credits": 2 },
    { "name": "Technical Communication / Managerial Economics and Financial Accounting", "credits": 2 },
    { "name": "Electronic Measurement & Instrumentation", "credits": 2 },
    { "name": "Electrical Machine - II", "credits": 3 },
    { "name": "Power Electronics", "credits": 3 },
    { "name": "Signals & Systems", "credits": 3 },
    { "name": "Digital Electronics", "credits": 2 },
    { "name": "Electrical Machine - II Lab", "credits": 2 },
    { "name": "Power Electronics Lab", "credits": 2 },
    { "name": "Digital Electronics Lab", "credits": 1 },
    { "name": "Measurement Lab", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "5th Semester": [
    { "name": "Electrical Materials", "credits": 2 },
    { "name": "Power System - I", "credits": 3 },
    { "name": "Control System", "credits": 3 },
    { "name": "Microprocessor", "credits": 3 },
    { "name": "Electrical Machine Design", "credits": 3 },
    { "name": "Professional Elective - I", "credits": 2 },
    { "name": "Power System - I Lab", "credits": 1 },
    { "name": "Control System Lab", "credits": 1 },
    { "name": "Microprocessor Lab", "credits": 1 },
    { "name": "System Programming Lab", "credits": 1 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "6th Semester": [
    { "name": "Computer Architecture", "credits": 2 },
    { "name": "Power System - II", "credits": 3 },
    { "name": "Power System Protection", "credits": 3 },
    { "name": "Electrical Energy Conversion and Auditing", "credits": 3 },
    { "name": "Electric Drives", "credits": 3 },
    { "name": "Professional Elective - II", "credits": 3 },
    { "name": "Power System - II Lab", "credits": 2 },
    { "name": "Electric Drives Lab", "credits": 2 },
    { "name": "Power System Protection Lab", "credits": 1 },
    { "name": "Modeling and Simulation Lab", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "7th Semester": [
    { "name": "Professional Elective - III", "credits": 3 },
    { "name": "Open Elective - I", "credits": 3 },
    { "name": "Embedded Systems Lab", "credits": 2 },
    { "name": "Advance Control System Lab", "credits": 2 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Seminar", "credits": 2 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "8th Semester": [
    { "name": "Professional Elective - IV", "credits": 3 },
    { "name": "Open Elective - II", "credits": 3 },
    { "name": "Energy Systems Lab", "credits": 2 },
    { "name": "Project", "credits": 7 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ]
},
AIDS: {
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
    { "name": "Advanced Engineering Mathematics", "credits": 3 },
    { "name": "Technical Communication / Managerial Economics and Financial Accounting", "credits": 2 },
    { "name": "Digital Electronics", "credits": 3 },
    { "name": "Data Structures and Algorithms", "credits": 3 },
    { "name": "Object Oriented Programming", "credits": 3 },
    { "name": "Software Engineering", "credits": 3 },
    { "name": "Data Structures and Algorithms Lab", "credits": 1.5 },
    { "name": "Object Oriented Programming Lab", "credits": 1.5 },
    { "name": "Software Engineering Lab", "credits": 1.5 },
    { "name": "Digital Electronics Lab", "credits": 1.5 },
    { "name": "Industrial Training", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "4th Semester": [
    { "name": "Discrete Mathematics Structure", "credits": 3 },
    { "name": "Managerial Economics and Financial Accounting / Technical Communication", "credits": 2 },
    { "name": "Microprocessor & Interfaces", "credits": 3 },
    { "name": "Database Management System", "credits": 3 },
    { "name": "Theory of Computation", "credits": 3 },
    { "name": "Data Communication and Computer Networks", "credits": 3 },
    { "name": "Microprocessor & Interfaces Lab", "credits": 1 },
    { "name": "Database Management System Lab", "credits": 1.5 },
    { "name": "Network Programming Lab", "credits": 1.5 },
    { "name": "Linux Shell Programming Lab", "credits": 1 },
    { "name": "Java Lab", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "5th Semester": [
    { "name": "Data Mining-Concepts and Techniques", "credits": 2 },
    { "name": "Compiler Design", "credits": 3 },
    { "name": "Operating System", "credits": 3 },
    { "name": "Computer Graphics & Multimedia", "credits": 3 },
    { "name": "Analysis of Algorithm", "credits": 3 },
    { "name": "Professional Elective - I", "credits": 2 },
    { "name": "Computer Graphics & Multimedia Lab", "credits": 1 },
    { "name": "Compiler Design Lab", "credits": 1 },
    { "name": "Analysis of Algorithm Lab", "credits": 1 },
    { "name": "Advanced Java Lab", "credits": 1 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "6th Semester": [
    { "name": "Digital Image Processing", "credits": 2 },
    { "name": "Machine Learning", "credits": 3 },
    { "name": "Information Security Systems", "credits": 2 },
    { "name": "Computer Architecture and Organization", "credits": 3 },
    { "name": "Principles of Artificial Intelligence", "credits": 2 },
    { "name": "Cloud Computing", "credits": 3 },
    { "name": "Professional Elective - II", "credits": 2 },
    { "name": "Digital Image Processing Lab", "credits": 1.5 },
    { "name": "Machine Learning Lab", "credits": 1.5 },
    { "name": "Python Lab", "credits": 1.5 },
    { "name": "Mobile Application Development Lab", "credits": 1.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "7th Semester": [
    { "name": "Big Data Analytics", "credits": 3 },
    { "name": "Open Elective - I", "credits": 3 },
    { "name": "Big Data Analytics Lab", "credits": 2 },
    { "name": "R Programming Lab", "credits": 2 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Seminar", "credits": 2 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "8th Semester": [
    { "name": "Deep Learning and Its Applications", "credits": 3 },
    { "name": "Open Elective - II", "credits": 3 },
    { "name": "Deep Learning and Its Application Lab", "credits": 1 },
    { "name": "Robot Programming Lab", "credits": 1 },
    { "name": "Project", "credits": 7 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ]
},
  IT : {
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
    { "name": "Advanced Engineering Mathematics", "credits": 3 },
    { "name": "Technical Communication / MEFA", "credits": 2 },
    { "name": "Digital Electronics", "credits": 3 },
    { "name": "Data Structures and Algorithms", "credits": 3 },
    { "name": "Object Oriented Programming", "credits": 3 },
    { "name": "Software Engineering", "credits": 3 },
    { "name": "Data Structures and Algorithms Lab", "credits": 1.5 },
    { "name": "Object Oriented Programming Lab", "credits": 1.5 },
    { "name": "Software Engineering Lab", "credits": 1.5 },
    { "name": "Digital Electronics Lab", "credits": 1.5 },
    { "name": "Industrial Training", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],

  "4th Semester": [
    { "name": "Discrete Mathematics Structure", "credits": 3 },
    { "name": "Managerial Economics / Technical Communication", "credits": 2 },
    { "name": "Principle of Communication", "credits": 3 },
    { "name": "Database Management System", "credits": 3 },
    { "name": "Theory of Computation", "credits": 3 },
    { "name": "Data Communication and Computer Networks", "credits": 3 },
    { "name": "Linux Shell Programming Lab", "credits": 1 },
    { "name": "Database Management System Lab", "credits": 1.5 },
    { "name": "Network Programming Lab", "credits": 1.5 },
    { "name": "Java Lab", "credits": 1 },
    { "name": "Web Technology Lab", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],

  "5th Semester": [
    { "name": "Microprocessor and Interfaces", "credits": 2 },
    { "name": "Compiler Design", "credits": 3 },
    { "name": "Operating System", "credits": 3 },
    { "name": "Computer Graphics & Multimedia", "credits": 3 },
    { "name": "Analysis of Algorithms", "credits": 3 },
    { "name": "Professional Elective – I", "credits": 2 },
    { "name": "Computer Graphics & Multimedia Lab", "credits": 1 },
    { "name": "Compiler Design Lab", "credits": 1 },
    { "name": "Analysis of Algorithms Lab", "credits": 1 },
    { "name": "Advanced Java Lab", "credits": 1 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],

  "6th Semester": [
    { "name": "Digital Image Processing", "credits": 2 },
    { "name": "Machine Learning", "credits": 3 },
    { "name": "Information Security System", "credits": 2 },
    { "name": "Computer Architecture and Organization", "credits": 3 },
    { "name": "Artificial Intelligence", "credits": 2 },
    { "name": "Distributed System", "credits": 3 },
    { "name": "Professional Elective – II", "credits": 2 },
    { "name": "Digital Image Processing Lab", "credits": 1 },
    { "name": "Machine Learning Lab", "credits": 1.5 },
    { "name": "Python Lab", "credits": 1.5 },
    { "name": "Mobile Application Development Lab", "credits": 1 },
    { "name": "5G Communication Lab", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],

  "7th Semester": [
    { "name": "Big Data Analytics", "credits": 3 },
    { "name": "Open Elective – I", "credits": 3 },
    { "name": "Big Data Analytics Lab", "credits": 2 },
    { "name": "Cyber Security Lab", "credits": 2 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Seminar", "credits": 2 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
  ],

  "8th Semester": [
    { "name": "Internet of Things", "credits": 3 },
    { "name": "Open Elective – II", "credits": 3 },
    { "name": "Internet of Things Lab", "credits": 1 },
    { "name": "Software Testing and Validation Lab", "credits": 1 },
    { "name": "Major Project", "credits": 7 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities", "credits": 0.5 }
   ]
 },
    CIVIL: {
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
    { "name": "Advance Engineering Mathematics - I", "credits": 3 },
    { "name": "Technical Communication / Managerial Economics & Financial Accounting", "credits": 2 },
    { "name": "Engineering Mechanics", "credits": 2 },
    { "name": "Surveying", "credits": 3 },
    { "name": "Fluid Mechanics", "credits": 2 },
    { "name": "Building Materials and Construction", "credits": 3 },
    { "name": "Engineering Geology", "credits": 2 },
    { "name": "Surveying Lab", "credits": 1.5 },
    { "name": "Fluid Mechanics Lab", "credits": 1 },
    { "name": "Computer Aided Civil Engineering Drawing", "credits": 1.5 },
    { "name": "Civil Engineering Materials Lab", "credits": 1 },
    { "name": "Geology Lab", "credits": 1 },
    { "name": "Industrial Training", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "4th Semester": [
    { "name": "Advance Engineering Mathematics - II", "credits": 2 },
    { "name": "Managerial Economics & Financial Accounting / Technical Communication", "credits": 2 },
    { "name": "Basic Electronics for Civil Engineering Applications", "credits": 2 },
    { "name": "Strength of Materials", "credits": 3 },
    { "name": "Hydraulics Engineering", "credits": 3 },
    { "name": "Building Planning", "credits": 2 },
    { "name": "Concrete Technology", "credits": 3 },
    { "name": "Material Testing Lab", "credits": 1 },
    { "name": "Hydraulics Engineering Lab", "credits": 1 },
    { "name": "Building Drawing", "credits": 1.5 },
    { "name": "Advanced Surveying Lab", "credits": 1 },
    { "name": "Concrete Lab", "credits": 1.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "5th Semester": [
    { "name": "Construction Technology & Equipments", "credits": 2 },
    { "name": "Structural Analysis - I", "credits": 2 },
    { "name": "Design of Concrete Structures", "credits": 3 },
    { "name": "Geotechnical Engineering", "credits": 3 },
    { "name": "Water Resource Engineering", "credits": 2 },
    { "name": "Departmental Elective - I", "credits": 2 },
    { "name": "Departmental Elective - II", "credits": 2 },
    { "name": "Concrete Structures Design Lab", "credits": 1.5 },
    { "name": "Geotechnical Engineering Lab", "credits": 1.5 },
    { "name": "Water Resource Engineering Design", "credits": 1 },
    { "name": "Industrial Training", "credits": 2.5 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "6th Semester": [
    { "name": "Wind & Seismic Analysis", "credits": 2 },
    { "name": "Structural Analysis - II", "credits": 3 },
    { "name": "Environmental Engineering", "credits": 3 },
    { "name": "Design of Steel Structures", "credits": 3 },
    { "name": "Estimating & Costing", "credits": 2 },
    { "name": "Departmental Elective - III", "credits": 2 },
    { "name": "Departmental Elective - IV", "credits": 2 },
    { "name": "Environmental Engineering Design and Lab", "credits": 1.5 },
    { "name": "Steel Structure Design Lab", "credits": 1.5 },
    { "name": "Quantity Surveying and Valuation Lab", "credits": 1 },
    { "name": "Water and Earth Retaining Structures Design Lab", "credits": 1 },
    { "name": "Foundation Design Lab", "credits": 1 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "7th Semester": [
    { "name": "Transportation Engineering", "credits": 3 },
    { "name": "Open Elective - I", "credits": 3 },
    { "name": "Road Material Testing Lab", "credits": 1 },
    { "name": "Professional Practices & Field Engineering Lab", "credits": 1 },
    { "name": "Soft Skills Lab", "credits": 1 },
    { "name": "Environmental Monitoring and Design Lab", "credits": 1 },
    { "name": "Practical Training", "credits": 2.5 },
    { "name": "Seminar", "credits": 2 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
  ],
  "8th Semester": [
    { "name": "Project Planning and Construction Management", "credits": 3 },
    { "name": "Open Elective - II", "credits": 3 },
    { "name": "Project Planning and Construction Management Lab", "credits": 1 },
    { "name": "Pavement Design Lab", "credits": 1 },
    { "name": "Project", "credits": 7 },
    { "name": "Social Outreach, Discipline & Extra Curricular Activities (SODECA)", "credits": 0.5 }
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

    function animateSGPA(finalValue) {
        const resultElement = document.getElementById("sgpaResult");
        let current = 0.00;
        const duration = 1000; // total time for animation in ms
        const steps = 60; // number of animation steps
        const increment = finalValue / steps;
        const stepTime = duration / steps;

        resultElement.style.color = "#333";
        resultElement.textContent = "Calculating...";

        let counter = setInterval(() => {
            current += increment;
            if (current >= finalValue) {
                current = finalValue;
                clearInterval(counter);
                resultElement.style.color = "#28a745";
                resultElement.textContent = `Your SGPA: ${current.toFixed(2)} ✅`;
            } else {
                resultElement.textContent = `Your SGPA: ${current.toFixed(2)}`;
            }
        }, stepTime);
    }

    const branchSelect = document.getElementById("branch");
    const semesterSelect = document.getElementById("semester");
    const subjectsDiv = document.getElementById("subjects");
    const resultDiv = document.getElementById("sgpaResult");
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

            if (!grade) {
                allSelected = false;
                return;
            }

            const point = gradePoints[grade];
            totalCredits += credits;
            totalPoints += credits * point;
        });

        if (!allSelected) {
            resultDiv.textContent = "Please select a grade for all subjects.";
            resultDiv.style.color = "red";
            return;
        }

        const sgpa = (totalPoints / totalCredits);
        animateSGPA(sgpa);
        resultDiv.style.color = "green";
    });
});
