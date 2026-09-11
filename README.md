# Development Stack Builder

## Description

A modern and responsive web application built with **React, Vite, Tailwind CSS, and DaisyUI** for software development stack.


## Technologies Used

- **React**
- **JavaScript**
- **Vite**
- **Tailwind CSS**
- **DaisyUI**
- **React Toastify**
- **Google Fonts - Plus Jakarta Sans**


## Features

- **Explore Technologies** - Browse curated frontend, backend, database, and tooling options.
- **Stack Management** - Add or remove technologies to build and customize your ideal development stack.
- **Smart Validation** - Automatically disables buttons for already selected technologies to prevent duplication.
- **Toast Notifications** - Provides feedback using React Toastify.
- **Responsive Design** - Optimized for mobile, tablet, and desktop devices with a custom mobile hamburger menu.
- **Modern UI Aesthetics** - Styled with custom gradients, clean typography (Plus Jakarta Sans), and modern card layouts.

**GitHub Repo:** [https://github.com/mrrakib5007/dev-stack-builder.git](https://github.com/mrrakib5007/dev-stack-builder.git) 

**Live Preview:** [https://dev-stack-builder1.netlify.app](https://dev-stack-builder1.netlify.app)

## Questions and answers

**i) What is JSX, and why is it used in React?** <br />
Ans: JSX (JavaScript XML) is a syntax extension in react for Javascript that allows to write html code inside javascript. JSX is much easier to understand and maintain. That's way JSX used in React.  

**ii) What is the difference between props and state?** <br />
Ans: Props use for Data passed from parent to child and state use for Data managed inside a component. 


**iii) What does the useState hook do, and where did you use it in this project?** <br />
Ans: useState is a React Hook that allows to store and manage data that can change over time. When the state changes using its setter function, React re-renders the component so the updated value appears in the ui.

**iv) What does the useEffect hook do, and why did you need it to load the JSON data?** <br />
Ans: useEffect is a React Hook used to perform side effects in a component. Like fetching data from an API or JSON file.

**v) Why does every item in a .map() list need a unique key prop?** <br />
Ans: Every item rendered with map() in React needs a unique key prop so React can identify each item efficiently between renders.

**vi) What is conditional rendering? Show one place you used it (example: the empty stack message).** <br />
Ans: Conditional rendering means displaying different UI elements based on a certain condition. Like if/else, ternary operator etc. 
Example: I had a selected players section. When no player was selected, I wanted to show: "No Player Selected" message. So My code is like: 

```
{selectedPlayers.length === 0 ? (
  <div>
    No Player Selected
  </div>
) : (
  selectedPlayers.map((player) => (
    <PlayerCard
      key={player.id}
      player={player}
    />
  ))
)}
```

**vii) How do you pass data from a parent component to a child component, and how does a child send something back to the parent?** <br />
Ans: Data usually flows from parent to child through props. If the child needs to send data or trigger an action in the parent, the parent passes a callback function as a prop.

