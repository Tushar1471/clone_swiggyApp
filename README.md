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

# Abstracting all the logics from the components,custom hooks comes into picture. Because of custom hooks,code becomes readable and  efficient.


# lets make a functionality of online or offline mode using yur web as soon as the user will offline a disclaimer is shown i.e Error! You are offline and soon as user online show the body component. So the better way to create a custom hooks because of creating this hook or logic outside the component makes our code more readable,maintainable and testable. Making a custom hooks is not mandatory,but for better optimization of yur code then use these.

# Chunking 
# Code Splitting
# Dynamic Bundling.
# lazy loading.
# on demand loading.
# dynamic importing.

# What did parcel do or what is parcel work?
- Parcel works is to bundle or wrap our code into a single index.js file that makes our app more efficient,optimized or faster.
- If we go towards small applications the parcel generates a single bundle but if we having something a big Application just like as Make my trip. Lots of components to be there working efficiently because of some reasons.These reasons makes our react App faster. As we see if yu create 10-15 components then the handling of parcel bundleres bundles our code into a single file and rendering of app will be faster. But as soon as our App layout,render-cycle,multiple logical operations,api interfaces will increases this single bundle wraps all the code into it but it lowers our App Performance.So the best thing is creating some chunks,code splitting or we can say lazy loading which makes our app faster and highly scaleable.
- Some components or methods to be given by react such as lazy loading,suspense,fallback.
- So what are these methods or components?
** UNDERSTANDING THIS CONCEPT WITH SOME EXAMPLES:- Just like uber provide service to their consumers such as cabs,eats,grocery etc.Also another app named swiggy which delievers our foods and corresponding another swiggy delievers just like groceries. So I am a Senior Developer and My task is to make or develop such UI interface which has both Swiggy and Swiggy mart included i can do but as a senior developer or a good developer my task is to suspend all these files into a single bundles.This makes my app running or mounting slow. 
-- Because of this reason, chunks are build to make my app faster,testable. 

# Different CSS libraries

- SAAS,SCSS,styled components,material UI,CHAKRA UI,BOOTSTRAP,ant design.
