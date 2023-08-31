const quizData = [
  {
    question:
      "Which HTML tag is used to link an external JavaScript file?",
    options: ["<js>", "<link>", "<src>", "<srcipt>"],
    correctAnswer: "<srcipt>",
  },
  {
    question: "Which of the following is not a string method in javaScript",
    options: [
      "charAt()",
      "fill()",
      "toUpperCase()",
      "trim()",
    ],
    correctAnswer: "fill()",
  },

  {
    question: "Which JavaScript function is used to change the content of an HTML element?",
    options: [
      "changeContent()",
      "innerHTML()",
      "contentChange()",
      "textContentChange()",
    ],
    correctAnswer: "innerHTML()",
  },
  {
    question:
      "Which attribute must have a unique value each time it is used in an HTML document?",
    options: ["title", "class", "style", "id"],
    correctAnswer: "id",
  },
  {
    question: "Which CSS property will not trigger layout recalculation?",
    options: ["top", "opacity", "width", "height"],
    correctAnswer: "opacity",
  },
  {
    question:
      "What will be the value of selected? \n let pocket = ['turnip', 'stone', 'log', 'apple'];\n let selected = pocket[1];",
    options: ["log", "apple", "stone", "turnip"],
    correctAnswer: "stone",
  },
  {
    question: "What does the `===` comparison operator do?",
    options: [
      "It sets one variable equal to another in both value and type",
      "It tests for equality of type only",
      "It tests for equality of value only",
      "It tests for equality of value and type",
    ],
    correctAnswer: "It tests for equality of value and type",
  },
  {
    question:
      "In the following code, the variable `fruit` has been assigned a value of apple. How would you change the value to plum? \n let fruit = 'apple';",
    options: [
      "let fruit = 'plum'",
      "var fruit = 'plum'",
      "const fruit = 'plum'",
      "fruit = 'plum'",
    ],
    correctAnswer: "fruit = 'plum'",
  },
  {
    question: "What is the `<label>` element used for?",
    options: [
      "to identify the difference parts of a figure",
      "to explain what needs to be entered into a form field",
      "as a caption for images",
      "as a heading for tables",
    ],
    correctAnswer: "to explain what needs to be entered into a form field",
  },
  {
    question:
      "When the browser finds some CSS that it does not understand. What is likely happen?",
    options: [
      "The page will not display",
      "An error message will be displayed",
      "The browser will not load the stylesheet",
      "The browser will ignore the unknown CSS",
    ],
    correctAnswer: "The browser will ignore the unknown CSS",
  },
  {
    question:
      "Which choice is not a value of the type attribute of the `<input>` element?",
    options: ["range", "address", "date", "password"],
    correctAnswer: "address",
  },
  {
    question:
      "You have used `display: none` in your stylesheet. Which users will be able to see or hear this content?",
    options: [
      "all users",
      "users who can see the content on screen",
      "no users",
      "screen reader users",
    ],
    correctAnswer: "no users",
  },
  {
    question: "Which choice is not part of CSS box model?",
    options: ["margin", "border", "padding", "paragraph"],
    correctAnswer: "paragraph",
  },
  {
    question:
      "Which part of the URL `https://app.ssethub.com/quiz` specifies the domain name?",
    options: ["https", "org", "ssethub.com", "app.ssethub"],
    correctAnswer: "ssethub.com",
  },
  {
    question: "Which HTML element is not considered a landmark element?",
    options: ["<aside>", "<ul>", "<main>", "<nav>"],
    correctAnswer: "<ul>",
  },
  {
    question: "Which statement is true when an HTML tag has been deprecated?",
    options: [
      "It employs code that can be viewed only on a desktop computer",
      "It is obsolete and is not recommended for use in marking web content",
      "It employs code that will require users to update their browsers",
      "It employs incorrect syntax that will cause the browser to crash",
    ],
    correctAnswer:
      "It is obsolete and is not recommended for use in marking web content",
  },
  {
    question: "How does the `rem` unit represent a font size?",
    options: [
      "Font sizes are expressed relative to the font size of the containing div element",
      "Font sizes are expressed relative to the font size of the parent elements",
      "Font sizes are relative to the base font size of the operating system",
      "Font sizes are relative to the root `em` unit used in the HTML element",
    ],
    correctAnswer:
      "Font sizes are relative to the root `em` unit used in the HTML element",
  },
  {
    question:
      "What is the correct way to initialize an array of galaxies in JavaScript?",
    options: [
      'String[] galaxies = new Array("Milky Way", "Whirlpool", "Andromeda");',
      "let galaxies = {Milky Way, Whirlpool, Andromeda};",
      'galaxies = ["Milky Way", "Whirlpool", "Andromeda"];',
      'var galaxies = {"Milky Way", "Whirlpool", "Andromeda"};',
    ],
    correctAnswer: 'galaxies = ["Milky Way", "Whirlpool", "Andromeda"];',
  },
  {
    question:
      "A video on your webpage does not display and the console shows an error about mixed content. What is happening?",
    options: [
      "The webapge is using a DOCTYPE, which renders it incapable of displayed video in addition to other web content",
      "Your browser does not support HTML5 video",
      "The video is from a source that cannot be displayed in your location for legal reasons",
      "The page is loaded via HTTPS, but the video is being served insecurely as HTTP and the browser is blocking it",
    ],
    correctAnswer:
      "The page is loaded via HTTPS, but the video is being served insecurely as HTTP and the browser is blocking it",
  },
  {
    question:
      "You have placed an image in a directory named images and want to reference it from a page located in the root of your site. Which choice would correctly display the image on the page?",
    options: [
      '<img src="image.jpg">',
      '<a href="images/image.jpg"></a>',
      '<img src="images/image.jpg">',
      '<img href="image.jpg">',
    ],
    correctAnswer: '<img src="images/image.jpg">',
  },
  {
    question:
      "Which choice is a correct use of the parseInt() function in Javascript that parses a string and return an integer?",
    options: [
      'parseInt("six");',
      "parse_int('6');",
      'parseInt("6");',
      'parseint("6");',
    ],
    correctAnswer: 'parseInt("6");',
  },
  {
    question:
      "In the context of this code, how would you describe user?  const user = { given_name: 'Joe', family_name: 'Bloggs', age: 40, }",
    options: ["function", "array", "variable", "object"],
    correctAnswer: "object",
  },
  {
    question:
      "You have a set of images that are slightly different sizes and aspect ratios. You don't mind if you crop off some of the image, but you want each image to completely fill a square box without being distorted. Which property and value would achieve this?",
    options: [
      "object-fit: contain",
      "object-fit: stretch",
      "object-fit: all",
      "object-fit: cover",
    ],
    correctAnswer: "object-fit: cover",
  },
  {
    question: 'what does the CSS selector a[href$="org"] select?',
    options: [
      'all <a> tags whose href attribute begins with "org"',
      'all <a> tags whose href attribute equals "org"',
      'all <a> tags whose href attribute ends with "org"',
      'all <a> tags whose href attribute contains "org"',
    ],
    correctAnswer: 'all <a> tags whose href attribute ends with "org"',
  },
  {
    question:
      "Which line would you add to this code to add \"Cosmos\" to the list of currencies using JavaScript?\n var currencies = ['Bitcoin', 'Ethereum'];",
    options: [
      'currencies.push("Cosmos");',
      'Array.append("Cosmos", currencies);',
      'currencies.add("Cosmos");',
      'currencies(2) = "Cosmos";',
    ],
    correctAnswer: 'currencies.push("Cosmos");',
  },
  {
    question:
      "You are designing a site and creating a navigation bar linking to the main sections. Which HTML element should you use to indicate that this is the main navigation?",
    options: ["<nav>", "<navigation>", "<main>", "<ul>"],
    correctAnswer: "<nav>",
  },
  {
    question: "What is WebP?",
    options: [
      "a method of auditing performance that gives your site a score, which is then used for Google ranking",
      "a next-generation image format offering a smaller file size than equivalent PNG or JPEG images",
      "a new font format that allows a single font to display at different styles and weights",
      "a next-generation PDF format that offers a smaller file size and better accessibility than standard PDF documents",
    ],
    correctAnswer:
      "a next-generation image format offering a smaller file size than equivalent PNG or JPEG images",
  },
  {
    question: "What is the name of the event that occurs when the mouse pointer hovers over an element?",
    options: [
      "load",
      "mouseover",
      "hover",
      "focus",
    ],
    correctAnswer:
      "mouseover",
  },
  {
    question: "Which choice is not a JavaScript framework?",
    options: [
      "Angular",
      "Laravel",
      "Vue",
      "React",
    ],
    correctAnswer:
      "Laravel",
  },
  {
    question: "Which CSS property and value would correctly remove the bullets from a list item?",
    options: [
      "list-tem: none",
      "bullets: hidden",
      "list-style-type: none",
      "list-bullet: none",
    ],
    correctAnswer:
      "list-style-type: none",
  },
  {
    question: "You are creating a responsive design, but when you view your site on a smaller screen, you notice that images are causing a horizontal scroll bar. How can you solve this problem without stretching any images out of shape?",
    options: [
      "Set `object-fit: contain` on the images",
      "Set `max-width: 100%` on the images",
      "Set `width: 100%` on the images",
      "Set `resize: true` on the images",
    ],
    correctAnswer:
      "Set `max-width: 100%` on the images",
  },
  {
    question: "How would you round the value 11.354 to the nearest full integer?",
    options: [
      "round(11.354);",
      "Math.round(11.354);",
      "Math.rnd(11.354);",
      "Maths.round(11.354);",
    ],
    correctAnswer:
      "Math.round(11.354);",
  },
  {
    question: "What is the correct way to link to an external stylesheet from the head of an HTML document?",
    options: [
      "<link rel=\"stylesheet\" href=\"styles.css\">",
      "<script type=\"text/css\" href=\"styles.css\"></scrip>",
      "<script type=\"text/css\" src=\"styles.css\">",
      "<link rel=\"css\" href=\"styles.css\">",
    ],
    correctAnswer:
      "<link rel=\"stylesheet\" href=\"styles.css\">",
  },
  {
    question: "On a page with many images, what would be the effect of adding loading=\"lazy\" to the <img> tag?",
    options: [
      "it will speed up loading of the image when used with a JavaScript library",
      "in supporting browsers, images will be higly compressed, therefore loading more quickly",
      "In supporting browsers, images will load only when they are in or near the visible viewport",
      "In supporting browsers, images will not oad unless the user explicitly requests image loading",
    ],
    correctAnswer:
      "In supporting browsers, images will load only when they are in or near the visible viewport",
  },
  {
    question: "Which attribute is used to add text to an image that will be displayed if the image does not load and read out to screen reader users?",
    options: [
      "title",
      "data",
      "src",
      "alt",
    ],
    correctAnswer:
      "alt",
  },
  {
    question: "To create a collection of radio buttons associated with the same field, each <input> tag must",
    options: [
      "have the same value of the id attribute",
      "have the same value of the name attribute",
      "belong to the same field set",
      "have the same value of the class attribute",
    ],
    correctAnswer:
      "have the same value of the name attribute",
  },
  {
    question: "Which statement about HTML syntax is false?",
    options: [
      "The value of a class attribute should be unique in an HTML document",
      "The `<img>` element does not have a closing `</img>` tag",
      "The `<h1>` element is the most important heading on the page",
      "The value of an id attribute should be unique in an HTML document",
    ],
    correctAnswer:
      "The value of a class attribute should be unique in an HTML document",
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    options: [
      "font-color",
      "text-color",
      "color",
      "text-style",
    ],
    correctAnswer:
      "color",
  },
  {
    question: "What does the acronym \"CSS\" stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Complete Style Sheets",
    ],
    correctAnswer:
      "Cascading Style Sheets",
  },
  {
    question: "which array method is used to add an element to the end of an array?",
    options: [
      "append()",
      "push()",
      "add()",
      "insert()",
    ],
    correctAnswer:
      "push()",
  },
  {
    question: "What does the acronym \"API\" stand for in the context of web development?",
    options: [
      "Application Integration Plan",
      "Advanced Programming Interface",
      "Application Programming Interface",
      "Automated Protocol Interface",
    ],
    correctAnswer:
      "Application Programming Interface",
  },
  {
    question: "Which CSS property is used to control the spacing between individual letters in a text?",
    options: [
      "line-spacing",
      "letter-spacing",
      "word-spacing",
      "text-spacing",
    ],
    correctAnswer:
      "letter-spacing",
  },
  {
    question: "Which of the following is NOT a valid way to declare a variable in JavaScript?",
    options: [
      "let",
      "const",
      "variable",
      "var",
    ],
    correctAnswer:
      "variable",
  },
  {
    question: "Which HTML tag is used to create an unordered list?",
    options: [
      "<ol>",
      "<list>",
      "<ul>",
      "<unordered-list>",
    ],
    correctAnswer:
      "<ul>",
  },
  {
    question: "In CSS, what property is used to create a border around an element?",
    options: [
      "border-style",
      "outline",
      "border-color",
      "border",
    ],
    correctAnswer:
      "border",
  },
  {
    question: "What does the \"DOM\" stand for in web development?",
    options: [
      "Document Object Model",
      "Display Order Manager",
      "Data Output Mechanism",
      "Digital Object Module",
    ],
    correctAnswer:
      "Document Object Model",
  },
  {
    question: "In JavaScript, how do you comment out a single line of code?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "<!-- This is a comment -->",
      "# This is a comment",
    ],
    correctAnswer:
      "// This is a comment",
  },
  {
    question: "What is the purpose of the `<meta>` tag in HTML?",
    options: [
      "Define a new section in the document",
      "Link an external stylesheet",
      "Embed external scripts",
      "Provide metadata about the document",
    ],
    correctAnswer:
      "Provide metadata about the document",
  },
  {
    question: "What is the purpose of CSS media queries?",
    options: [
      "To apply different styles based on user interactions",
      "To create animations and transitions",
      "To optimize images for different screen sizes",
      "To apply styles based on the device's characteristics",
    ],
    correctAnswer:
      "To apply styles based on the device's characteristics",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
      "<link>",
      "<a>",
      "<hyperlink>",
      "<url>",
    ],
    correctAnswer:
      "<a>",
  },
  {
    question: "In JavaScript, which method is used to remove the last element from an array?",
    options: [
      "remove()",
      "last()",
      "pop()",
      "delete()",
    ],
    correctAnswer:
      "pop()",
  },
  {
    question: "What is the role of the `viewport` meta tag in a web page?",
    options: [
      "It sets the initial zoom level of the page",
      "It defines the maximum width of the page",
      "It adjusts the page's layout for different screen sizes",
      "It specifies the background color of the page",
    ],
    correctAnswer:
      "It adjusts the page's layout for different screen sizes",
  },
  {
    question: "In JavaScript, what is the purpose of the `addEventListener` method?",
    options: [
      "To define a new variable",
      "To create a new element in the DOM",
      "To add a new event handler to an element",
      "To modify the styling of an element",
    ],
    correctAnswer:
      "To add a new event handler to an element",
  },
  {
    question: "What does the term \"responsive design\" refer to?",
    options: [
      "Designing websites with visually appealing graphics",
      "Designing websites that load quickly",
      "Designing websites that adapt to different devices and screen sizes",
      "Designing websites with a lot of interactive animations",
    ],
    correctAnswer:
      "Designing websites that adapt to different devices and screen sizes",
  },
  {
    question: "In HTML, which tag is used to create an ordered list?",
    options: [
      "<ol>",
      "<order>",
      "<ul>",
      "<list>",
    ],
    correctAnswer:
      "<ol>",
  },
  {
    question: "Which HTML tag is used to define a table row?",
    options: [
      "<td>",
      "<tr>",
      "<table-row>",
      "<th>",
    ],
    correctAnswer:
      "<tr>",
  },
  {
    question: "In JavaScript, how do you access the value of an input element with the id \"username\"?",
    options: [
      "input.value(\"username\")",
      "getElementById(\"username\").value",
      "document.input.value(\"username\")",
      "document.getElementById(\"username\").value",
    ],
    correctAnswer:
      "document.getElementById(\"username\").value",
  },
  {
    question: "Which CSS property is used to adjust the spacing between an element's border and its content?",
    options: [
      "padding",
      "spacing",
      "margin",
      "border-spacing",
    ],
    correctAnswer:
      "padding",
  },
  {
    question: "What is the purpose of the `<iframe>` element in HTML?",
    options: [
      "It displays a highlighted text fragment",
      "It creates an interactive form",
      "It embeds an external webpage within the current webpage",
      "It is used to format inline text",
    ],
    correctAnswer:
      "It embeds an external webpage within the current webpage",
  },
  {
    question: "In JavaScript, how do you convert a string to all lowercase letters?",
    options: [
      "string.toLower()",
      "string.lowerCase()",
      "string.toLowerCase()",
      "string.convertToLower()",
    ],
    correctAnswer:
      "string.toLowerCase()",
  },
  {
    question: "What does the acronym \"HTTP\" stand for in the context of web development?",
    options: [
      "HyperText Transfer Protocol",
      "High-Technology Text Processor",
      "Hyperlink and Text Transport",
      "Hypertext Terminal Protocol",
    ],
    correctAnswer:
      "HyperText Transfer Protocol",
  },

  
];
export default quizData;


