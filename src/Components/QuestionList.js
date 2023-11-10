import React, { useState } from 'react';
import Question from './Question';

const QuestionList = () => {
  const questions = [
    { id: 1, title: 'How to design a Stack Overflow-like frontend with responsive layout and interactive features for optimal user engagement?', content: "I'm working on a project and need help designing the frontend. Any tips or best practices to create an intuitive and engaging user interface? I want to ensure a seamless user experience and incorporate elements similar to Stack Overflow's frontend design.", votes: 10, answers: 5, views: 100, tags: ['frontend', 'design'] },
    { id: 2, title: 'What is the best way to learn web development?', content: "I'm a beginner and want to learn web development. Where should I start?", votes: 15, answers: 8, views: 120, tags: ['web development', 'learning', 'mern', 'react'] },
    { id: 3, title: 'React vs Angular: Which one to choose?', content: "I'm confused between React and Angular. What are the pros and cons of each?", votes: 20, answers: 12, views: 150, tags: ['React', 'Angular'] },
    { id: 4, title: 'How to deploy a Node.js application to Heroku?', content: "I've built a Node.js app and want to deploy it. Any step-by-step guide for Heroku deployment?", votes: 8, answers: 3, views: 80, tags: ['Node.js', 'Heroku'] },
    { id: 5, title: 'CSS Grid vs Flexbox: When to use which?', content: "I'm a bit confused about when to use CSS Grid and when to use Flexbox. Can someone clarify?", votes: 12, answers: 6, views: 110, tags: ['CSS', 'Flexbox', 'Grid'] },
    { id: 6, title: 'Best practices for responsive web design', content: "What are some best practices to follow for creating responsive web designs?", votes: 18, answers: 9, views: 130, tags: ['responsive design', 'web development'] },
    { id: 7, title: 'How to handle state in a functional component in React?', content: "I'm new to React functional components and need guidance on managing state. Any examples or hooks I should use?", votes: 14, answers: 6, views: 120, tags: ['React', 'state', 'functional components'] },
    { id: 8, title: 'Getting started with Python: Tips for beginners', content: "I'm a beginner in Python and would appreciate some tips and resources to get started. Any recommendations?", votes: 16, answers: 9, views: 130, tags: ['Python', 'beginners'] },
    { id: 9, title: 'How to implement authentication in a Node.js app?', content: "I'm building a Node.js app and need to add user authentication. What's the best way to implement it?", votes: 11, answers: 5, views: 100, tags: ['Node.js', 'authentication'] },
    { id: 10, title: 'Advantages of using a CSS framework like Bootstrap', content: "Considering using Bootstrap for my project. What are the advantages, and are there any drawbacks I should be aware of?", votes: 19, answers: 10, views: 140, tags: ['CSS', 'Bootstrap'] },
    { id: 11, title: 'How to create a RESTful API with Express in Node.js', content: "Looking for a guide on creating a RESTful API using Express in Node.js. Any recommended tutorials or examples?", votes: 13, answers: 8, views: 110, tags: ['Node.js', 'Express', 'RESTful API'] },
    { id: 12, title: 'JavaScript ES6 features every developer should know', content: "Interested in learning more about ES6 features in JavaScript. What are some key features and how can they improve my code?", votes: 17, answers: 7, views: 125, tags: ['JavaScript', 'ES6'] },
    { id: 13, title: 'Best practices for securing a web application', content: "What are the best practices for ensuring the security of a web application? Any tips on preventing common vulnerabilities?", votes: 21, answers: 12, views: 160, tags: ['security', 'web development'] },
    { id: 14, title: 'Choosing the right frontend framework: React, Angular, or Vue?', content: "Comparing React, Angular, and Vue for a new project. What factors should I consider in choosing the right frontend framework?", votes: 15, answers: 9, views: 130, tags: ['React', 'Angular', 'Vue', 'frontend'] },
    { id: 15, title: 'Tips for effective debugging in VS Code', content: "Struggling with debugging in VS Code. Any tips, extensions, or techniques for effective debugging in Visual Studio Code?", votes: 18, answers: 11, views: 140, tags: ['VS Code', 'debugging'] },
    
    { id: 16, title: 'How to create a responsive navigation menu with CSS', content: "Looking for a tutorial on building a responsive navigation menu using only CSS. Any recommended resources or examples?", votes: 14, answers: 6, views: 115, tags: ['CSS', 'responsive design'] },
    { id: 17, title: 'Introduction to GraphQL: Key concepts and benefits', content: "Interested in learning more about GraphQL. What are the key concepts, and how can it benefit my API development?", votes: 20, answers: 12, views: 150, tags: ['GraphQL', 'API development'] },
    { id: 18, title: 'Best practices for code version control with Git', content: "Seeking best practices for using Git for version control. What workflows and strategies should I follow for effective code collaboration?", votes: 16, answers: 8, views: 125, tags: ['Git', 'version control'] },
    
    { id: 19, title: 'How to implement dark mode in a web application', content: "Considering adding dark mode to my web app. What are the steps to implement it, and are there any design considerations?", votes: 22, answers: 14, views: 170, tags: ['dark mode', 'web development'] },
    { id: 20, title: 'Benefits of using TypeScript in a JavaScript project', content: "Curious about TypeScript and its benefits. How can it enhance a JavaScript project, and are there any drawbacks to be aware of?", votes: 17, answers: 10, views: 135, tags: ['TypeScript', 'JavaScript'] },
    { id: 21, title: 'Effective strategies for learning a new programming language', content: "Planning to learn a new programming language. What are some effective strategies, resources, and tips for a smooth learning experience?", votes: 19, answers: 11, views: 145, tags: ['programming', 'learning'] },
    { id: 22, title: 'How to set up a continuous integration (CI) pipeline for a project', content: "Seeking guidance on implementing continuous integration for my project. What tools and practices should I consider for an efficient CI pipeline?", votes: 15, answers: 8, views: 120, tags: ['CI/CD', 'continuous integration'] },
    { id: 23, title: 'Overview of the latest features in JavaScript', content: "Interested in the latest features of JavaScript. What's new in recent ECMAScript versions, and how can I leverage these features in my projects?", votes: 18, answers: 9, views: 130, tags: ['JavaScript', 'ECMAScript'] },
    { id: 24, title: 'How to optimize website performance in 2023?', content: "Looking for the latest tips and techniques to optimize website performance in 2023. Any recommendations?", votes: 22, answers: 15, views: 180, tags: ['performance', 'web development'] },
    { id: 25, title: 'Choosing the right database for a new project', content: "Starting a new project and unsure about the database choice. What factors should I consider in making this decision?", votes: 14, answers: 7, views: 120, tags: ['database', 'project management'] },
    { id: 26, title: 'Best practices for responsive web design with CSS Grid', content: "What are the best practices for creating responsive layouts using CSS Grid? Any examples or common pitfalls to avoid?", votes: 16, answers: 9, views: 140, tags: ['CSS', 'CSS Grid', 'responsive design'] },
    { id: 27, title: 'Introduction to serverless architecture and its advantages', content: "Curious about serverless architecture. What are the key concepts, advantages, and potential use cases for serverless applications?", votes: 20, answers: 11, views: 155, tags: ['serverless', 'architecture'] },
    { id: 28, title: 'Tips for writing clean and maintainable code in Python', content: "Seeking tips and best practices for writing clean and maintainable Python code. How can I improve the readability and maintainability of my codebase?", votes: 18, answers: 10, views: 130, tags: ['Python', 'clean code'] },
    { id: 29, title: 'Exploring the features of the latest React version', content: "Interested in the latest features and improvements in the most recent React version. What's new, and how can I upgrade my existing projects?", votes: 22, answers: 13, views: 165, tags: ['React', 'React Hooks'] },
    { id: 30, title: 'Choosing between monolithic and microservices architecture', content: "Facing a decision between monolithic and microservices architecture. What are the factors to consider, and how can I make an informed choice for my project?", votes: 15, answers: 8, views: 125, tags: ['architecture', 'microservices'] },{ id: 24, title: 'How to optimize website performance in 2023?', content: "Looking for the latest tips and techniques to optimize website performance in 2023. Any recommendations?", votes: 22, answers: 15, views: 180, tags: ['performance', 'web development'] },
    { id: 31, title: 'Choosing the right frontend styling library: Styled Components vs. SCSS', content: "Trying to decide between Styled Components and SCSS for styling my React components. What are the advantages and use cases for each?", votes: 15, answers: 8, views: 120, tags: ['React', 'Styled Components', 'SCSS', 'frontend'] },
    { id: 32, title: 'Optimizing images for web performance: Tips and tools', content: "Looking for ways to optimize images for better web performance. Any recommended tips, techniques, or tools for image optimization?", votes: 19, answers: 11, views: 140, tags: ['performance', 'web development', 'image optimization'] },
    { id: 33, title: 'Best practices for handling asynchronous code in JavaScript', content: "Dealing with asynchronous code in JavaScript and want to follow best practices. Any tips on handling promises, async/await, and avoiding callback hell?", votes: 22, answers: 14, views: 160, tags: ['JavaScript', 'asynchronous programming'] },
    { id: 34, title: 'Exploring the world of data visualization with D3.js', content: "Interested in creating interactive and dynamic data visualizations. What are the basics of D3.js, and how can I get started with data visualization?", votes: 17, answers: 9, views: 130, tags: ['D3.js', 'data visualization'] },
    { id: 35, title: 'How to conduct effective code reviews in a development team', content: "Part of a development team and want to improve code review processes. What are the key aspects of effective code reviews, and how can they benefit the team?", votes: 18, answers: 10, views: 135, tags: ['code review', 'collaboration'] },
    { id: 36, title: 'Mastering the art of responsive typography in web design', content: "Looking to enhance the typography in my web designs for different screen sizes. What are the principles and best practices for responsive typography?", votes: 16, answers: 8, views: 120, tags: ['responsive design', 'typography', 'web development'] },
    { id: 37, title: 'Choosing the right cloud service for hosting web applications', content: "Considering cloud hosting for my web applications. What factors should I consider when choosing a cloud service provider, and are there any recommendations?", votes: 20, answers: 12, views: 150, tags: ['cloud hosting', 'web development'] },
    { id: 38, title: 'Introduction to machine learning for web developers', content: "Interested in exploring machine learning as a web developer. What are the basics of machine learning, and how can it be integrated into web applications?", votes: 21, answers: 13, views: 155, tags: ['machine learning', 'web development'] },
    { id: 39, title: 'Building real-time chat applications with Socket.io', content: "Want to implement real-time chat functionality in my web application. How can Socket.io be used to build real-time features, and are there any examples or tutorials?", votes: 15, answers: 7, views: 110, tags: ['Socket.io', 'real-time chat', 'web development'] },
    { id: 40, title: 'Tips for optimizing SEO in React-based single-page applications', content: "Optimizing SEO for my React single-page application. What are the best practices and tips for ensuring good search engine visibility in SPAs?", votes: 14, answers: 6, views: 105, tags: ['SEO', 'React', 'single-page application'] },
    { id: 41, title: 'Common pitfalls to avoid in responsive web design', content: "Working on a responsive web design project and want to avoid common mistakes. What are the typical pitfalls in responsive design, and how can they be prevented?", votes: 16, answers: 9, views: 125, tags: ['responsive design', 'web development'] },
    { id: 42, title: 'Securing APIs with JSON Web Tokens (JWT) in Node.js', content: "Building a Node.js application with APIs and need to secure them using JSON Web Tokens. What is the process of implementing JWT-based authentication for APIs?", votes: 19, answers: 11, views: 140, tags: ['Node.js', 'API security', 'JWT'] },
    { id: 43, title: 'Best practices for organizing project structure in React', content: "Structuring my React projects and want to follow best practices. What is the recommended project structure for a scalable and maintainable React application?", votes: 18, answers: 10, views: 130, tags: ['React', 'project structure', 'best practices'] },
    { id: 44, title: 'Getting started with containerization using Docker', content: "New to Docker and containerization. How can I get started with Docker, and what are the benefits of using containers in the development and deployment process?", votes: 22, answers: 14, views: 165, tags: ['Docker', 'containerization'] },
    { id: 45, title: 'Exploring the world of Progressive Web Apps (PWAs)', content: "Interested in creating Progressive Web Apps for improved user experiences. What are the key features of PWAs, and how can I build and deploy them?", votes: 17, answers: 9, views: 135, tags: ['PWA', 'web development'] },
    { id: 46, title: 'Tips for effective collaboration in remote development teams', content: "Working in a remote development team and want to enhance collaboration. What are the tips and tools for effective remote collaboration in software development?", votes: 20, answers: 12, views: 150, tags: ['remote work', 'collaboration', 'software development'] },
    { id: 47, title: 'Common mistakes to avoid in React Native app development', content: "Developing mobile apps with React Native and want to avoid common pitfalls. What are the typical mistakes in React Native app development, and how can they be mitigated?", votes: 21, answers: 13, views: 155, tags: ['React Native', 'mobile app development'] },
    { id: 48, title: 'Best practices for error handling in Node.js applications', content: "Building Node.js applications and need robust error handling. What are the best practices for error handling in Node.js, and how can errors be effectively managed?", votes: 15, answers: 8, views: 125, tags: ['Node.js', 'error handling', 'best practices'] },
    { id: 49, title: 'Choosing the right JavaScript framework for building SPAs', content: "Considering different JavaScript frameworks for building Single Page Applications (SPAs). What factors should I consider in choosing the right framework, and are there any comparisons available?", votes: 18, answers: 10, views: 130, tags: ['JavaScript', 'frameworks', 'SPA'] }, 
   
  ];

  const questionsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToEnd = () => {
    setCurrentPage(totalPages);
  };

  const goToStart = () => {
    setCurrentPage(1);
  };

  return (
    <div className="question-list">
      {currentQuestions.map(question => (
        <Question key={question.id} {...question} />
      ))}
      <div className="pagination">
        <button onClick={goToStart} disabled={currentPage === 1}>Start</button>
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
        <button onClick={goToEnd} disabled={currentPage === totalPages}>End</button>
      </div>
    </div>
  );
};

export default QuestionList;
