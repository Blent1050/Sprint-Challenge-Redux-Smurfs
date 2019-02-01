1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
### map, filter, reduce will all return a new array.  Object.assign will create a new object.
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
### Actions are where you will assign specific methods that will have a type and a payload. When these are fired your reducers will receive the data. The reducer is where you will do your logic and re-assign the state. The store is where your data is and the values it has.
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
### Application state is just that - the state of the entire application. Component state is the state (data) of the component.
1.  What is middleware?
### Middleware is an extension point for redux. This allows us to add new functionality to redux such as async. 
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
### Redux thunk is a package that allows us to implement async javascript into our redux apps. This allows us to make API calls from our action creators.
1.  Which `react-redux` method links up our `components` with our `redux store`?
### connect()
