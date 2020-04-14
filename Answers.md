1. What problem does the context API help solve?

Provides a way to share values between components without having to explicitly pass a prop through every level of the app.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Each action has a type property that informs the reducer what the action did in the app.
Actions contain properties related to an action that happens in the app. Each action has a type property that informs the reducer what the action did in the app.
Reducers take in the current state and action as arguments and returns them as a new, updated state object with both arguments.
Store carries the current state and contains the changes within the app. Store is known as a single source of truth because it allows your components to be controllable. Changes can only be made inside the store.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and component state is local. You use application state with redux and component state with React.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

React-thunk is a node package that makes the flow asynchronous so we can make API call from our action creators. We change our action creators by knowing that Redux middleware can intercept the normal Redux flow and do something before actions make it to the reducer.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

I like using Redux because it is easy to understand once you get the hang of it. It has a predictable outcome that is fairly easy to manage.
