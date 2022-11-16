import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));

// การสร้าง Function Component
/* function HelloComponent(){
    return <h1>สวัสดี Component ครับผม</h1>
} */

// การสร้าง Class Component
/* class HelloComponent extends React.Component{
    render(){
        return <h1>สวัสดี Component แรกของเราครับผม</h1>
    }
} */

root.render(<App/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
