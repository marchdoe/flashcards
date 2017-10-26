export const flashcardData = [
  {
    question: "What is event delegation?",
    answer: "Event delegation is a technique involving adding event listeners to a parent element instead of adding them to the descendant elements. The listener will fire whenever the event is triggered on the descendant elements due to event bubbling up the DOM.",
    source: "Tech Interview Handbook",
    sourceUrl: "https://github.com/yangshun/tech-interview-handbook/blob/master/front-end/interview-questions.md#explain-event-delegation"
  },
  {
    question: "How does prototypal inheritance work?",
    answer: "All JavaScript objects have a prototype property, that is a reference to another object. When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's prototype, and the prototype's prototype and so on, until it finds the property defined on one of the prototypes or until it reaches the end of the prototype chain. This behaviour simulates classical inheritance, but it is really more of delegation than inheritance.",
    source: "Tech Interview Handbook",
    sourceUrl: "https://github.com/yangshun/tech-interview-handbook/blob/master/front-end/interview-questions.md#explain-how-prototypal-inheritance-works"
  },
  {
    question: "Describe AMD vs CommonJS",
    answer: "Both are ways to implement a module system, which was not natively present in JavaScript until ES2015 came along. CommonJS is synchronous while AMD (Asynchronous Module Definition) is obviously asynchronous. CommonJS is designed with server-side development in mind while AMD, with its support for asynchronous loading of modules, is more intended for browsers.",
    source: "Tech Interview Handbook",
    sourceUrl: "https://github.com/yangshun/tech-interview-handbook/blob/master/front-end/interview-questions.md#what-do-you-think-of-amd-vs-commonjs"
  },
  {
    question: "What's the difference between a variable that is: null, undefined or undeclared?",
    answer: "Undeclared variables are created when you assign to a value to an identifier that is not previously created using var, let or const. Undeclared variables will be defined globally, outside of the current scope. In strict mode, a ReferenceError will be thrown when you try to assign to an undeclared variable. Undeclared variables are bad just like how global variables are bad. Avoid them at all cost! To check for them, wrap its usage in a try/catch block.",
    source: "Tech Interview Handbook",
    sourceUrl: "https://github.com/yangshun/tech-interview-handbook/blob/master/front-end/interview-questions.md#whats-the-difference-between-a-variable-that-is-null-undefined-or-undeclared-how-would-you-go-about-checking-for-any-of-these-states"
  },
  {
    question: "What is a closure?",
    answer: "A closure is the combination of a function and the lexical environment within which that function was declared. The word 'lexical' refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Closures are functions that have access to the outer (enclosing) function's variables—scope chain even after the outer function has returned.",
    source: "Tech Interview Handbook",
    sourceUrl: "https://github.com/yangshun/tech-interview-handbook/blob/master/front-end/interview-questions.md#what-is-a-closure-and-howwhy-would-you-use-one"
  },
];
