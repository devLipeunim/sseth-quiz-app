const quizData = [
  {
    question:
      "The Components of Computer System are the following except _____",
    options: ["Software", "Peopleware", "Hardware", "Computerware"],
    correctAnswer: "Computerware",
  },
  {
    question: "Tables are made up of ______ and ______",
    options: [
      "Leg & Hand",
      "Wood & Glass",
      "Rows & Columns",
      "Header & Footer",
    ],
    correctAnswer: "Rows & Columns",
  },
  {
    question: "The following are input devices except _______",
    options: ["Printer", "Game Pad", "Keyboard", "Mouse"],
    correctAnswer: "Printer",
  },
  {
    question: "The shortcut key to select or highlight all is _____",
    options: ["Ctrl+A", "Ctrl+X", "Ctrl+E", "Ctrl+J"],
    correctAnswer: "Ctrl+A",
  },
  {
    question: "To center a selected text, the shortcut is",
    options: ["Ctrl+C", "Ctrl+E", "Ctrl+U", "Ctrl+O"],
    correctAnswer: "Ctrl+E",
  },
  {
    question: "MS Word is software of ______",
    options: ["Apple", "Android", "Google", "Microsoft"],
    correctAnswer: "Microsoft",
  },
  {
    question: "Which option is NOT found on the Menu bar of MS Word?",
    options: ["Insert", "Home", "Page Layout", "Print"],
    correctAnswer: "Print",
  },
  {
    question: "The boxes in MS Excel is called",
    options: ["Prison", "Cell", "Table", "Worksheet"],
    correctAnswer: "Cell",
  },
  {
    question: "The operator for Multiplication in MS Excel is",
    options: ["+", "-", "/", "*"],
    correctAnswer: "*",
  },
  {
    question: "In MS Excel, the operator ^ represent ______",
    options: ["Division", "Exponent", "Multiplication", "Addition"],
    correctAnswer: "Exponent",
  },
  {
    question: "Ctrl+Y is used to",
    options: ["Undo", "Redo", "Cut", "Save"],
    correctAnswer: "Redo",
  },
  {
    question: "Flash Drive is an example of",
    options: ["Software", "External Memory", "Internal Memory", "Input device"],
    correctAnswer: "External Memory",
  },
  {
    question: "________ can corrupt the computer system",
    options: ["Music", "Videos", "Virus", "Internet"],
    correctAnswer: "Virus",
  },
  {
    question: "In  MS Excel, Rows are identified with ______",
    options: ["Letters", "Numbers", "Cells", "Symbols"],
    correctAnswer: "Numbers",
  },
  {
    question: "In  MS Excel, Columns are identified with ______",
    options: ["Letters", "Numbers", "Cells", "Symbols"],
    correctAnswer: "Letters",
  },
  {
    question: "The name of a document on MS Word is found where?",
    options: ["Menu bar", "Tool bar", "Title bar", "Standard menu bar"],
    correctAnswer: "Title bar",
  },
  {
    question: "Mouse contains two button, _____ & ______",
    options: [
      "up click & down click",
      "Left click & Right click",
      "Point click & Drag click",
      "Cursor & Button",
    ],
    correctAnswer: "Left click & Right click",
  },
  {
    question: "Deleted items on a computer goes into",
    options: ["New Folder", "Music Folder", "Recycle Bin", "PC Folder"],
    correctAnswer: "Recycle Bin",
  },
  {
    question: "The following are examples of Hardware components except",
    options: ["Input unit", "Output unit", "Application unit", "System unit"],
    correctAnswer: "Application unit",
  },
  {
    question: "Which of the following is NOT on the home keys on a keyboard",
    options: ["A", "B", "D", "L"],
    correctAnswer: "B",
  },
  {
    question: "RAM means",
    options: [
      "Read Access Memory",
      "Random Access Memory",
      "Random Allocated Memory",
      "Read Allocated Memory",
    ],
    correctAnswer: "Random Access Memory",
  },
  {
    question: "Which shortcut key is used to paste?",
    options: ["Ctrl+P", "Ctrl+V", "Ctrl+A", "Ctrl+J"],
    correctAnswer: "Ctrl+V",
  },
  {
    question: "When typing, to delete a character, you use ______ key",
    options: ["Enter", "Shift", "Tab", "Backspace"],
    correctAnswer: "Backspace",
  },
  {
    question: "Excel Worksheet can also be called",
    options: ["Document", "Spreadsheet", "Workbook", "Notepad"],
    correctAnswer: "Spreadsheet",
  },
  {
    question: "The number of Rows in Excel worksheet is",
    options: ["256", "65536", "1002", "349"],
    correctAnswer: "256",
  },
  {
    question: "The number of Columns in Excel worksheet is",
    options: ["256", "65536", "1002", "349"],
    correctAnswer: "65536",
  },
  {
    question: "To begin a formula in Excel, it must start with ____ sign",
    options: ["+", ">", "?", "="],
    correctAnswer: "=",
  },
  {
    question: "In Excel, cell A3 is located where",
    options: [
      "Row A column 3",
      "Row 3 Column A",
      "Row 1 Column 3",
      "Row 3 Coulmn 1",
    ],
    correctAnswer: "Row 3 Column A",
  },
  {
    question: "The best way to shut down a computer system is to ____",
    options: [
      "Remove the battery",
      "Use the power button",
      "Use the Start option",
      "I do not know",
    ],
    correctAnswer: "Use the Start option",
  },
  {
    question: "Which of the following is NOT a computer device",
    options: ["Calculator", "Laptop", "Mobile Phone", "Exercise Book"],
    correctAnswer: "Exercise Book",
  },
  {
    question: "When typing, which key takes the cursor to the next line?",
    options: ["Enter", "Shift", "Tab", "Caps lock"],
    correctAnswer: "Enter",
  },
  {
    question: "Which of the following is not a reason for using a computer?",
    options: ["Accuracy", "Speed", "Reliability", "Time wasting"],
    correctAnswer: "Time wasting",
  },
  {
    question:
      "Which of the follwing operation will give 10 when type in MS Excel?",
    options: ["=2*5", "2*5", "5+5", "20/2"],
    correctAnswer: "=2*5",
  },
  {
    question: "The follwing are Fonts except",
    options: ["Calibri", "Times New Roman", "Hand writing", "Arial Black"],
    correctAnswer: "Hand writing",
  },
  {
    question: "Upper Case means",
    options: [
      "Typing in small letters",
      "Typing in capital letters",
      "Typing in toggle case",
      "Typing in numbers",
    ],
    correctAnswer: "Typing in capital letters",
  },
  {
    question: "Lower Case means",
    options: [
      "Typing in small letters",
      "Typing in capital letters",
      "Typing in toggle case",
      "Typing in numbers",
    ],
    correctAnswer: "Typing in small letters",
  },
  {
    question: "Which menu on MS Word can the Shape tool be found?",
    options: ["Home", "Insert", "Design", "Page Layout"],
    correctAnswer: "Insert",
  },
  {
    question: "The file extension for MS Word document is",
    options: ["docx", "xls", "html", "ppt"],
    correctAnswer: "docx",
  },
  {
    question: "Which Microsoft office package can act as a Calculator",
    options: ["MS Word", "MS Excel", "MS Powerpoint", "MS Access"],
    correctAnswer: "MS Excel",
  },
  {
    question:
      "To change the screen saver or wall paper, right click on the desktop view and go to _____",
    options: ["Display setting", "Personalise", "New", "I do not know"],
    correctAnswer: "Personalise",
  },
];
export default quizData;
