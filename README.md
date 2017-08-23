# lEOS

## SETUP
1. `$ git clone https://github.com/Nemsae/leos`
2. `$ cd leos`
3. `$ npm i`
4. `$ cd client && npm i`
5. `$ cd..`
6. `$ npm start`

### Encrypted messages are persisted on a MongoDB server.

### TODO
1. ~~change post to a get, so we can put in myEther var into the query params~~
1. ~~change name of initial computeWithPercentage3~~
1. ~~add computeWithPercentage3~~
1. ~~Add navigation to display Help/How to Use~~
1. abstract out reusable components
1. add tests for reusable components
1. Local Storage to save settings (like which symbol to load)
1. MOVE from thunk to Saga
1. REMOVE thunk, react toolbox and flux
1. REMOVE AppDispatcher and API.js
1. Add copy to clipboard for currency-rate and benchmark
1. Stream current exchange rate of the symbol
1. Deploy (with an interface) to ElasticBeanstalk
1. Save actual payouts to MongoDB/DynamoDB
1. Look into exploring EOS block

Question 1: Explain your understanding of the React Virtual DOM and how it renders to the actual DOM.
So if we were looking at a text input component with an onChange event handler, and say that this same component will be holding the state of the input (i.e. what text is entered) as well as pinning the onChange function to the component. The virtual dom is only re rendered when the state changes. The huge benefit of this diffing process is that React will only re-render the dom nodes whose state or props are changed (i.e. patching the changes as opposed to restarting the entire app with the new changes).

Question 4: Functional Components
A functional component are components that only require a render. Otherwise known as "dumb" components or a view component, where the only area of concern for the component are the props it is passed and what it will render with those props. There is no state or any other method attached to the component, and can be typically written as a arrow function (ES6). The component can be imported anywhere and rendered in a "smart" or container component that will pass it props (if necessary) and render it as a child.

They should be used anytime there is a layer of abstraction that will allow further readability/maintainability, modularity, and reusability. (i.e. a simple Icon component that will just return some jsx which will take in a prop to choose the icon you want to render: <div className={`fa fa-${props.iconName}`} />.
