## 1. What is the difference between Component and PureComponent? give an example where it might break my app.

PureComponent implements a shouldComponentUpdate method that performs a shallow comparison of props and state to decide whether to re-render, while Component always re-renders by default. It might break your app if you pass objects or arrays that are mutated directly as props to PureComponent.


## 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

Context + ShouldComponentUpdate can be dangerous because when the context value changes, all components consuming that context will re-render, even if they don't actually depend on the new value. To avoid this, you can use memoization techniques such as memo or useMemo.


## 3. Describe 3 ways to pass information from a component to its PARENT.

Three ways to pass information from a component to its parent are: pass a callback function as a prop, use the context API, or create a custom event system using EventEmitter.

## 4. Give 2 ways to prevent components from re-rendering.

Two ways to prevent components from re-rendering are to use memo to memoize the component and only re-render it when its props change or use shouldComponentUpdate to manually control when a component should re-render based on changes to its props or state.

## 5. What is a fragment and why do we need it? Give an example where it might break my app.

A fragment is a syntax feature in React that allows you to group multiple elements together without creating an additional DOM node. It might break your app if you forget to close a fragment properly or are using a version of React that does not support fragments. 

## 6. Give 3 examples of the HOC pattern.

Three examples of the HOC pattern are withRouter, withStyles, and connect.

## 7. what's the difference in handling exceptions in promises, callbacks and async...await.

Promises handle errors using .catch, callbacks pass errors as the first argument, and async/await uses a try-catch block.

## 8. How many arguments does setState take and why is it async.

setState takes two arguments: an object representing the new state and an optional callback function that you have the previous state to work. It is async because React batches multiple state updates together for performance reasons.

## 9. List the steps needed to migrate a Class to Function Component.

To migrate a Class to Function Component, replace the class declaration with a function declaration, remove the render method, convert any stateful logic to use hooks, and remove lifecycle methods that could be used inside of an useEffect.

## 10. List a few ways styles can be used with components.

Styles can be used with components by using inline styles, creating a separate stylesheet and importing it, or using libraries like styled-components and etc. 

## 11. How to render an HTML string coming from the server.

To render an HTML string from the server, you can use the NextJS framework (SSR) this way it is safe and you be able to configure SEO
