# Some Questions about Class based component:-

- As we know while handling with class Based components we use a method componentDidMount which is basically called after the component is mounted on a webpage. Also we know we can make API'S calls inside this method but why?

- We can make an API call in Functional component using UseEffect.
- Once we render the component on a webpage then make an API call and then again re-render it. This is the best practise for rendering your UI and make a better UX.

# REACT LIFE CYCLE DIAGRAM

- TWO PHASES - Render Phase,commit phase.

# If we try to creating a mess in our code clean it using componentWillUnmount.

# Single Responsibility Principle states that Each component or different functions we are mounting on a webpage has its own responsibility like Header,Body etc.

# What do you mean by modularity?

- When yu break down your components or code into modules,this becomes code reusable,maintainable and testable.

# Abstracting all the logics from the components,custom hooks comes into picture. Because of custom hooks,code becomes readable and efficient.

- lets make a functionality of online or offline mode using yur web as soon as the user will offline a disclaimer is shown i.e Error! You are offline and soon as user online show the body component. So the better way to create a custom hooks because of creating this hook or logic outside the component makes our code more readable,maintainable and testable. Making a custom hooks is not mandatory,but for better optimization of yur code then use these.

- Chunking

- Code Splitting

- Dynamic Bundling.

- lazy loading.

- on demand loading.

- dynamic importing.

# What did parcel do or what is parcel work?

- Parcel works is to bundle or wrap our code into a single index.js file that makes our app more efficient,optimized or faster.
- If we go towards small applications the parcel generates a single bundle but if we having something a big Application just like as Make my trip. Lots of components to be there working efficiently because of some reasons.These reasons makes our react App faster. As we see if yu create 10-15 components then the handling of parcel bundleres bundles our code into a single file and rendering of app will be faster. But as soon as our App layout,render-cycle,multiple logical operations,api interfaces will increases this single bundle wraps all the code into it but it lowers our App Performance.So the best thing is creating some chunks,code splitting or we can say lazy loading which makes our app faster and highly scaleable.
- Some components or methods to be given by react such as lazy loading,suspense,fallback.
- So what are these methods or components?
  \*\* UNDERSTANDING THIS CONCEPT WITH SOME EXAMPLES:- Just like uber provide service to their consumers such as cabs,eats,grocery etc.Also another app named swiggy which delievers our foods and corresponding another swiggy delievers just like groceries. So as a Senior Developer and My task is to make or develop such UI interface which has both Swiggy and Swiggy mart included i can do but as a senior developer or a good developer my task is to suspend all these files into a single bundles.This makes my app running or mounting slow.
  -- Because of this reason, chunks are build to make my app faster,testable.

# Different CSS libraries

- SAAS,SCSS,styled components,material UI,CHAKRA UI,BOOTSTRAP,ant design.

# Lifting State up

As we see we create multiple number of accordions containing MenuList and the state is to add firstly is to toggle the accordion individually.Every accordion has its own state but if i want to set in some scenerio that if a single accordion is already open then other accordions are closed at that time.Just like if i want to open the second accordion then the remaining accordions were closed only that index of accordion should remain open.
// The Question is how to achieve this?

# There is concept known as lifting state up. As we see when every accordion has its own state they don't interfer with other accordions so this type of situation does not meet depending upon our requirements.Individually accordion don't achieve this type of possibility we need.So the better way to fullfill this is to emphasize lifting state up for achieving this type of possibility we need.

- So give control to MenuList Parent and there state propagation can control each menuList.

-At that time the parent component is said to be a controlled component.

# CONTEXT IN REACT:- Pop drilling may sometimes feels very irrelevant and becomes very hectic while testing.So to avoid this type of scenario use Context.Firstly create the context and use whereever yu needed.

# ReduX ToolKit

-Install @reduxjs/toolkit and react-redux
-Build our store
-Connect our store to our app
-Slice(cartSlice)
-dispatch(action)
-selector(subscribed to the component)

# Note => How our application becomes faster?: The answer is optimizing of data layer over UI which makes our application scaleable and faster.

# Using Redux(STATE MANAGEMENT LIBRARY) is not a mandatory thing && Redux and react are different libraries.

# Using Redux offers easy debugging.

# Vanilla(Older) redux => DON'T MUTATE STATE,returning was mandatory. Immer Library.

- const newState = [...state];
- newState.items.push(action.payload);
- return newState

# In newer=> REDUX TOOLKIT

// We have to mutate the state.

# Note:- If yu make a small change in your application that can introduce bugs impact anywhere in your application.For avoiding this impact,testing is important.

# Types of testing(developer)

- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

- UNIT TESTING:- Testing any specific component of our react Application(component) in isolation.
  -INTEGRATION TESTING:- Multiple components are interacting or talking to each other and the flow of rendering beyond some logical characterstics,needs some intergral testing for smooth behavoiur throught working conditions.

# React testing library uses jest i.e jest is a delightful js framework with a focus on simplicity.Jest in turn,uses babel.

# Setting Up Testing in our App

-Install Testing library.

- Install jest
  -Install babel dependencies.
  -Configure Babel.
  -Config Parcel Config file to disable default babel config.
  -Jest configuration. -- npx jest --init
  -Install JSDOM library.

  \_\_ is known as Dunder Test.
  -Install @babel/preset-react to make JSX work in test cases.
  -Include @babel/preset-react inside my babel config.
  -Install @testing-library/jest-dom
