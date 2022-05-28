import React from 'react';
import Footer from './pages/Shared/Footer';

const Blogs = () => {
    return (
        <div>
            <p className='font-bold'>How will you improve the performance of a React Application:</p>
            <p>Keeping component state local where necessary.
                Memoizing React components to prevent unnecessary re-renders.
                Code-splitting in React using dynamic import()
                Windowing or list virtualization in React.
                Lazy loading images in React.</p>
            <p className='font-bold'>What are the different ways to manage a state in a React application:</p>
            <p>Local (UI) state – Local state is data we manage in one or another component.

                Local state is most often managed in React using the useState hook.

                For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                Global (UI) state – Global state is data we manage across multiple components.

                Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                Sometimes state we think should be local might become global.

                Server state – Data that comes from an external server that must be integrated with our UI state.

                Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                Fortunately there are tools such as SWR and React Query that make managing server state much easier.

                URL state – Data that exists on our URLs, including the pathname and query parameters.

                URL state is often missing as a category of state, but it is an important one.
                In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build</p>
            <p className='font-bold'>What is a unit test? Why should write unit tests:</p>
            <p>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class. </p>
            <p>To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:

                Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
                Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                It simplifies the debugging process.
                Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
                Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
                Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.
                In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback. </p>
            <Footer></Footer>
        </div>

    );
};

export default Blogs;