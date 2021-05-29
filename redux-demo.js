// importing redux from redux and making its instance
const redux = require('redux');

// reducer function which which accepts two parameters the current state and the action to 
// initially at very beginning i.e when at the first time it is executing the currentState is undefined i.e it is its default value and 
const counterReducer = (currentState = {counter: 0}, action) => {
      if (action.type === 'increment') {
        return {
            counter: currentState.counter + 1,
        };
      }

      if (action.type === 'decrement') {
            return {
                  counter: currentState.counter - 1,
            }
      };

      return currentState;
};

// creating the store and passing the reducer function to it to let it know about reducer
const store = redux.createStore(counterReducer);

//console.log(store.getState());

// this is a function which will get the latest changes done in store 
const counterSubscriber = () => {
      const latestState = store.getState(); // this is used to get the latest change and store them 
      console.log(latestState);
}

// creating a subscriber and passing a function
// letting know the store that after changes the changes have to be pass to 
store.subscribe(counterSubscriber);  

// Creating a dispatch method and it is a method which dispatches an action
// Action is a JS object with a type property
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });