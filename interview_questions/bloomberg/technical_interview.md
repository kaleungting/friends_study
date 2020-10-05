What is a call stack?
    - a mechanism for an interpreter like JavaScript, to add functions to be executed (function invocation call). Functions are added to the call stack and is carried out, functions within functions are carried out first, and then it'll return to where it
    left off to complete the rest of the function.
    - if the stack takes up more space than it had assigned, it'll result in a stack overflow
    - call stack is synchronous (happening at the same time)
    - LIFO, the last function that gets added to the stack is the first to be popped out, when the function returns

asynchronous -
    - you do not have to wait for the program/function to finish running to start something up
    - promises allow you to set an operation running and then wait until the result has returned before running another operation
    - this means, you can register functions that should not be executed synchronously and should instead be invoked asyncrhronously when some kind of events
    occur, such as mouseclick, fetch data, passage of time. this means you can let your code do several things at the same time without stopping main thread

    EXAMPLE: if you are loading restaurants onto a webpage like yelp, you want the header footer, and the rest of the page to load up already, since fetching restaurants from the database will take up time. you dont want to have to wait for the database in order to render stuff you already have.
    so you would put that in an asynchronous function, so that the mainthread does not wait up for the fetching before rendering.

javascript is single-threaded 
    - meaning you could only run tasks one at a time on the Main Thread (sequentially)
    - web workers have allowed people to work  JavaScript on another Worker thread, DOESN'T ALLOW ACCESS TO DOM

callback - 
    - a function that waits asynchronously and is executed when the time comes 
    - allows you to control the order in which functions are run and what data is passed between them

promises - style of async code
    - fetch is a good example
    - promise is an object that represents the completion or failure of the async operation
      - .then to chain operations so they can be made to run in order
      - .catch to run if any .then operation fails
      - they are placed in an event queue
    - avoid callback hell, cuz you need a failurecallback for each nested function
- pending (when a promise is not in success or failure state)
- resolved
  - fulfilled - returns a value which can be accessed by chaining a .then()
  - rejected - returns a reason, which can be access by chaining a .catch()
- .finally() can be run after both .then() and .catch()

async/await - 
    - syntatic sugar on top of promises, making it easier to write and read (they make async cold looks like sync code)
- ASYNC: added to the function to tell it to return a promise rather than directly returning the value
  - ex. 
    - let hello = async() => {return "HELLO"}
- AWAIT: works inside async functions, can be put in front of any async promise=based function to pause code on that line until promise fulfills, then return resulting value

async function myFetch() { <====== ADDING ASYNC TURNS THIS INTO AN ASYNC FUNCTION
  let response = await fetch('coffee.jpg'); <====== ADDING AWAIT MAKES IT SO THAT NOTHING RUNS UNTIL THIS IS DONE

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return await response.blob();
  }
}

