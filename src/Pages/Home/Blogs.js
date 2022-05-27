import React from 'react';

const Blogs = () => {
    return (
        <>
            <h2 className='text-xl font-semibold divider'>Q&A</h2>
            <div className='mt-12'>
                <div className="flex flex-col w-full">
                    <div className="grid h-20 card bg-base-300 rounded ">
                        <h2>1. How will you improve the performance of a React Application?</h2>
                        <p>To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.</p>
                    </div>
                    <div className="divider"></div>
                    <div className="grid h-20 card bg-base-300 rounded ">
                        <h2>2. What are the different ways to manage a state in a React application?</h2>
                        <p>React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly. For example, if we update the state of any component like the following the webpage will not re-render itself because React State will not be able to detect the changes made.</p>
                    </div>
                </div>
                <div className="flex flex-col w-full mt-5">
                    <div className="grid h-20 card bg-base-300 rounded ">
                        <h2>3. How does prototypical inheritance work?</h2>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                    <div className="divider"></div>
                    <div className="grid h-20 card bg-base-300 rounded ">
                        <h2>4. Why you do not set the state directly in React</h2>
                        <p>Mutating state directly can lead to odd bugs, and components that are hard to optimize. Here's an example. As you may already know, a common way to tune a React component for performance is to make it “pure,” which causes it to only re-render when its props change (instead of every time its parent re-renders)</p>
                    </div>
                </div>
                <div className="flex flex-col w-full mt-5">
                    <div className="grid h-20 card bg-base-300 rounded ">
                        <h2>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                        <p>Firstly, we import useState from react . Then, we import the Scroll and SearchList components. Next, in the Search function, we use the useState hook to initialise the value of the searchField state with useState("") (an empty string). After this, we use the filter function on the details list received from the parent.</p>
                    </div>
                    <div className="divider"></div>
                    <div className="grid h-20 card bg-base-300 rounded ">
                        <h2>6. What is a unit test? Why should write unit tests?</h2>
                        <p>Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;