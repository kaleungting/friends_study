/* 1472. Design Browser History
You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

Implement the BrowserHistory class:

BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
void visit(string url) Visits url from the current page. It clears up all the forward history.
string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.
  */

/*
pseudocode,

use two stacks to move from one stack to another, when you go back, that will be pushed into the future
when you move to the future, that will be added to the back stack

make sure never to pop back stack passed your homepage, because you want to return that at the end

*/



class BrowserHistory {
  constructor(homepage) {
    this.history = [homepage];
    this.future = [];
  }

  visit(url) {
    this.history.push(url); //add it to the history
    this.future = []; //throw out all of the future
  }

  back(steps) {
    //up until 1 because you don't want to throw out homepage from history stack
    while (steps && this.history.length > 1) {
      this.future.push(this.history.pop()); //moving history to the future stack
      steps--;
    }

    return this.history[this.history.length - 1]; //return what is last on the stack
  }

  forward(steps) {
    while (steps && this.future.length) {
      this.history.push(this.future.pop());
      steps--;
    }

    return this.history[this.history.length - 1];
  }
}
