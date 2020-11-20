//_____Higher Order Components____________
//Its a component(HOC) that renders another component(regular component)

/*
Reasons to use a higher order component:
reuse code
render hijacking
prop manipulation
abstract state
*/

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

// const withAdminWarning = (WrappedComponent) => {   //a regular function called with the component we want to wrap  
//     return (props) => (
//         <div>
//            {props.isAdmin && <p>This is private info. Please do not share!</p>} 
//             <WrappedComponent {...props}/> 
//         </div>
//     )
//     //destructuring props object on 27 gives us props.info
//     //all props are passed in on line 23
// }

const requireAuthentication = (WrappedComponent) => {   //a regular function called with the component we want to wrap  
    return (props) => (
        <div>
           {props.isAuthenticated ? (
               <WrappedComponent {...props}/>
           ) : <p>Please login to view this info</p>}
        </div>
    )
    //destructuring props object on 27 gives us props.info
    //all props are passed in on line 23
}

//const AdminInfo = withAdminWarning(Info) // A component with a regular function called with the component we want to wrap
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(
//     <AdminInfo isAdmin = {true} info="These are the details" />,
//     document.getElementById('app')
// )

ReactDOM.render(
    <AuthInfo isAuthenticated = {true} info="You are authenticated!" />,
    document.getElementById('app')
)
