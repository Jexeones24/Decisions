// import React, { Component } from 'react'
//
// export default class Login extends Component {
//   constructor(){
//     super();
//
//     this.state = {
//       username: "",
//       password: ""
//     }
//   }
//
//
//
//   render() {
//     return (
//       <div className="ui middle aligned center aligned grid">
//         <div className="column">
//           <h2 className="ui image header">
//             <div className="content">
//               Log-in to your account
//             </div>
//           </h2>
//           <form className="ui large form">
//             <div className="ui stacked secondary  segment">
//               <div className="field">
//                 <div className="ui left icon input">
//                   <i className="user icon"></i>
//                   <input type="text" name="username" placeholder="Username" onChange={this.handleChange}></input>
//                 </div>
//               </div>
//               <div className="field">
//                 <div className="ui left icon input">
//                   <i className="lock icon"></i>
//                   <input type="password" name="password" placeholder="Password" onChange={this.handleChange}></input>
//                 </div>
//               </div>
//               <div className="ui fluid large black submit button" onSubmit={this.handleSubmit}>Login</div>
//             </div>
//
//             <div className="ui error message"></div>
//
//           </form>
//
//           <div className="ui message">
//             New to us? <a href="#">Sign-up</a>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
