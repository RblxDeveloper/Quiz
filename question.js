// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  numb: 1,
  question: "What does HTML stand for?",
  answer: "Hyper Text Markup Language",
  options: [
    "Hyper Text Preprocessor",
    "Hyper Text Markup Language",
    "Hyper Text Multiple Language",
    "Hyper Tool Multi Language"
  ]
},
  {
  numb: 2,
  question: "Choose the correct HTML element for the largest heading",
  answer: "<h1>",
  options: [
    "&lt;h1&gt;",
    "&lt;h2&gt;",
    "&lt;head&gt;",
    "&lt;h6&gt;"
  ]
},
  {
  numb: 3,
  question: "What is the correct HTML element for inserting a line break?",
  answer: "<br>",
  options: [
    "&lt;hr&gt;",
    "&lt;break&gt;",
    "&lt;br&gt;",
    "&lt;break_line&gt;"
  ]
},
  {
  numb: 4,
  question: "What is the correct HTML for adding a background color?",
  answer: "background-color: yellow;",
  options: [
    "background-color: yellow;",
    "&lt;background>yellow&lt;/background&gt;",
    "&lt;body bg: yellow;&gt;",
    "&lt;background yellow&gt;"
  ]
},
  {
  numb: 5,
  question: "What is the correct HTML for creating a hyperlink?",
  answer: "<a href=url>name of the website</a>&gt;",
  options: [
    "&lt;a&gt;url&lt;/a&gt;",
    "&lt;a url=url&gt;name of the website&lt;/a&gt;",
    "&lt;a href=url&gt;name of the website&lt;/a&gt;",
    "&lt;a name=url&gt;name of the website&lt;/a&gt;"
  ]
},
  {
  numb: 6,
  question: "Which character is used to indicate an end tag?",
  answer: "/",
  options: [
    "^",
    "*",
    "/",
    "&gt;"
  ]
},
  {
  numb: 7,
  question: "How can you open a link in a new tab/browser window?",
  answer: "<a href=url target=_blank></a>",
  options: [
    "&lt;a href=url target=_blank>&lt;/a&gt;",
    "&lt;a href=url new&gt;",
    "&lt;a href=url target=new&gt;",
    "&lt;a href=url target=new_tab>&lt;/a&gt;"
  ]
},
  {
  numb: 8,
  question: "Which of these elements are all <table> elements?",
  answer: "<table> <tr> <td>",
  options: [
    "&lt;table&gt; &lt;tr&gt; &lt;tt>",
    "&lt;table&gt; &lt;head&gt; &lt;tfoot&gt;",
    "&lt;table&gt; &lt;tr&gt; &lt;td&gt;",
    "&lt;thead&gt; &lt;body&gt; &lt;tr&gt;"
  ]
},
  {
  numb: 9,
  question: "How can you make a numbered list?",
  answer: "<ol>",
  options: [
    "&lt;ol&gt;",
    "&lt;ul&gt;",
    "&lt;li&gt;",
    "&lt;list&gt;"
  ]
},
  {
  numb: 10,
  question: "What is the correct HTML for inserting an image?",
  answer: "<img src=MyImage alt=name of image>",
  options: [
    "&lt;img alt=MyImage&gt;name of image&lt;/img&gt;",
    "&lt;img href=name of image&gt;MyImage",
    "&lt;img src=MyImage alt=name of image&gt;",
    "&lt;img src=name of image&gt;MyImage&lt;/img&gt;"
  ]
},
// you can uncomment the below codes and make duplicate as more as you want to add question
// but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

//   {
//   numb: 6,
//   question: "Your Question is Here",
//   answer: "Correct answer of the question is here",
//   options: [
//     "Option 1",
//     "option 2",
//     "option 3",
//     "option 4"
//   ]
// },
];