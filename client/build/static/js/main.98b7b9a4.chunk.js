(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(58)},31:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/TTCommons-Regular.64f3f998.ttf"},34:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(24),l=a.n(s),r=(a(31),a(33),a(4)),c=a(5),i=a(7),d=a(6),m=a(8),u=a(62),p=a(61),h=(a(34),a(10)),g=a.n(h),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).isShow=!1,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"loginUSer",value:function(){var e=this,t=document.getElementsByClassName("roleSelect")[0],a={email:this.refs.email.value,password:this.refs.password.value,role:t.options[t.selectedIndex].value};console.log("userOject",a),a.email&&a.password?g.a.post("http://localhost:1234/loginUser",{userObject:a}).then(function(t){console.log("data obtained",t.data);var a=t.data;1==t.data.isUserAdded?(console.log("inside main if..."),document.getElementById("hidden").setAttribute("id","show")):a.content[0]&&"admin"==a.content[0].role?(localStorage.sessionId=a.sessionID,localStorage.email=a.content[0].email,e.props.history.push("/admin/dashboard")):a.content[0]&&"customer"==a.content[0].role?(console.log("response.sessionId",a.sessionID),console.log("inside cusstomer if login"),localStorage.sessionId=a.sessionID,localStorage.email=a.content[0].email,e.props.history.push("/customer/dashboard")):a.content[0]&&"lender"==a.content[0].role&&(console.log("response.sessionId",a.sessionID),console.log("inside lender if login"),localStorage.sessionId=a.sessionID,localStorage.email=a.content[0].email,e.props.history.push("/lender/dashboard"))}).catch(function(e){return console.log("err occured",e)}):alert("kindly fill all the credentials to login")}},{key:"render",value:function(){return o.a.createElement("div",{className:"container "},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4 col-md-offset-4"},o.a.createElement("div",{className:"panel panel-default"},o.a.createElement("div",{className:"panel-heading"},o.a.createElement("h3",{className:"panel-title"},"Please sign in")),o.a.createElement("div",{className:"panel-body"},o.a.createElement("form",{role:"form"},o.a.createElement("fieldset",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{className:"form-control",placeholder:"E-mail",name:"email",type:"text",ref:"email"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{className:"form-control",placeholder:"Password",ref:"password",name:"password",type:"password"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("select",{className:"custom-select roleSelect"},o.a.createElement("option",{value:"admin"},"admin"),o.a.createElement("option",{value:"lender"},"lender"),o.a.createElement("option",{value:"customer"},"customer"))),o.a.createElement("a",{className:"btn btn-lg btn-success btn-block",onClick:this.loginUSer.bind(this)},"Login"))))))),o.a.createElement("div",{className:"bg bg-warning text-red mt-4",id:"hidden"},"We couldnt find you so you were registered...Login again to continue !"))}}]),t}(o.a.Component),f=a(59),E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"header-name"},o.a.createElement("h2",null,"Loanpay")),o.a.createElement("div",{className:"header-links"},o.a.createElement(f.a,{to:"/login"},o.a.createElement("button",{className:"signin-button"},"Sign In"))))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"section"},o.a.createElement("p",{className:"home-section"},"Get Started With Loanpay"),o.a.createElement(f.a,{to:"/login"},o.a.createElement("button",{className:"button-section"},"Get Started")))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"home"},o.a.createElement(E,null),o.a.createElement(v,null))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).loanData=[],a.loans=[],a.items=[],a.state={loanData:a.loanData,loans:a.loans,items:a.items},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;g.a.get("http://localhost:1234/getLoans",{params:{sessionId:localStorage.getItem("sessionId"),withCredentials:!0}}).then(function(t){if(console.log("data obtained in lender componentWillMount is",t),!1===t.data.isAuth)console.log("sessionChecker returned isAtug.."),e.props.history.push("/"),localStorage.clear();else{var a=t.data.content;console.log("response got",a),e.loanData=a,e.setState({loanData:e.loanData,loans:e.loans,items:e.items},function(){e.setState({loanData:e.loanData,loans:e.loans,items:e.items}),e.state.loanData.forEach(function(t){e.loans.push(t.loans)}),console.log("this.loans",e.loans),e.setState({loanData:e.loanData,loans:e.loans,items:e.items},function(){e.setState({loanData:e.loanData,loans:e.loans,items:e.items}),e.state.loans.forEach(function(t){t.forEach(function(t){e.items.push(t)})}),console.log("this.items",e.items),e.setState({loanData:e.loanData,loans:e.loans,items:e.items},function(){e.setState({loanData:e.loanData,loans:e.loans,items:e.items})})})})}})}},{key:"approveLoan",value:function(e){var t=this,a=e.target.getAttribute("amount");console.log("amount",a),console.log("event",e.target.parentNode.parentNode.getAttribute("id"));var n=e.target.parentNode.parentNode;g.a.post("http://localhost:1234/approveLoan",{loanid:e.target.parentNode.parentNode.getAttribute("id"),sessionId:localStorage.getItem("sessionId"),amount:document.getElementById(e.target.parentNode.parentNode.getAttribute("id")).getAttribute("amount")},{withCredentials:!0}).then(function(e){console.log("data for approve",e),!1===e.data.isAuth?(console.log("sessionChecker returned isAtug.."),t.props.history.push("/"),localStorage.clear()):1==e.data.isApproved&&(console.log("inside else if of approve loan"),t.items.forEach(function(e){e.loanid==n.getAttribute("id")&&(e.status="approved")}),t.setState({loanData:t.loanData,loans:t.loans,items:t.items},function(){t.setState({loanData:t.loanData,loans:t.loans,items:t.items})}))})}},{key:"rejectLoan",value:function(e){var t=this,a=e.target.parentNode.parentNode;console.log("event",e.target.parentNode.parentNode.getAttribute("id")),g.a.post("http://localhost:1234/rejectLoan",{loanid:e.target.parentNode.parentNode.getAttribute("id"),sessionId:localStorage.getItem("sessionId")},{withCredentials:!0}).then(function(e){console.log("data for reject",e),!1===e.data.isAuth?(console.log("sessionChecker returned isAtug.."),t.props.history.push("/"),localStorage.clear()):1==e.data.isRejected&&(console.log("inside else if of reject loan"),t.items.forEach(function(e){e.loanid==a.getAttribute("id")&&(e.status="rejected")}),t.setState({loanData:t.loanData,loans:t.loans,items:t.items},function(){t.setState({loanData:t.loanData,loans:t.loans,items:t.items})}))})}},{key:"logOut",value:function(){this.props.history.push("/"),localStorage.clear()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h1",{className:"text-danger"},"Admin Dashboard"),o.a.createElement("div",{className:"mb-3 mt-3"},o.a.createElement("a",{href:"#",className:"p-2 bg-primary text-white",onClick:this.logOut.bind(this)},"LOGOUT")),o.a.createElement("table",{className:"table"},o.a.createElement("thead",{className:"thead-dark"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"loanid"),o.a.createElement("th",{scope:"col"},"amount"),o.a.createElement("th",{scope:"col"},"status"),o.a.createElement("th",{scope:"col"},"description"),o.a.createElement("th",{scope:"col"},"operation"),o.a.createElement("th",{scope:"col"},"operation"))),o.a.createElement("tbody",null,localStorage.getItem("sessionId")?this.state.items.map(function(t){return o.a.createElement("tr",{key:e.rowCount,amount:t.amount,id:t.loanid,className:"rejected"==t.status?"bg-danger":"approved"==t.status?"bg-success":"bg-secondary"},o.a.createElement("td",null,t.loanid),o.a.createElement("td",{id:t.amount},t.amount),o.a.createElement("td",null,t.status),o.a.createElement("td",null,t.description),o.a.createElement("td",null,o.a.createElement("button",{className:"btn btn-success",onClick:e.approveLoan.bind(e),disabled:"pending"!=t.status},"approve")),o.a.createElement("td",null,o.a.createElement("button",{className:"btn btn-danger",onClick:e.rejectLoan.bind(e),disabled:"pending"!=t.status},"reject")))}):this.props.history.push("/"))))}}]),t}(o.a.Component),D=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).userData=[],a.rowCount=0,a.state={userData:a.userData},a.isDataPresent=!1,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;console.log("state initial is",this.state),console.log("compinent will mount of CustomerDashboar called"),g.a.get("http://localhost:1234/newLoan",{params:{email:localStorage.getItem("email"),sessionId:localStorage.getItem("sessionId"),withCredentials:!0}}).then(function(t){if(!1===t.data.isAuth)console.log("sessionChecker returned isAtug.."),e.props.history.push("/"),localStorage.clear();else{var a=t.data.data;console.log("gg data",a),e.userData=a,console.log("userData",e.userData[0].loans),e.setState({userData:e.userData},function(){e.isDataPresent=!0,console.log("state is now",e.state),e.setState({userData:e.userData})})}})}},{key:"requestNewLoan",value:function(){var e=this;console.log("requestNewLoan called.."),this.refs.amount.value&&this.refs.description.value?(console.log("inside if.."),g.a.post("http://localhost:1234/requestNewLoan",{email:localStorage.getItem("email"),amount:this.refs.amount.value,description:this.refs.description.value,sessionId:localStorage.getItem("sessionId")},{withCredentials:!0}).then(function(t){if(console.log("data",t),0==t.data.isAuth)console.log("sessionChecker returned isAtug.."),e.props.history.push("/"),localStorage.clear();else if(1==t.data.isAdded){console.log("data.data",t.data);var a=t.data.loanObject;console.log("data.data.aloanObject",a),e.userData[0].loans.push(a),console.log("new userData",e.userData),e.setState({userData:e.userData},function(){console.log("updated the userData")})}else alert("oops !loan could not be added")})):alert("kindly fill all the credentials properly..")}},{key:"logOut",value:function(){this.props.history.push("/"),localStorage.clear()}},{key:"render",value:function(){var e=this;return console.log("render called..."),1==this.isDataPresent?o.a.createElement("div",null,o.a.createElement("h1",{className:"text-danger"},"Customer Dashboard"),o.a.createElement("div",null,o.a.createElement("h1",null,"YOUR VALLET: ",this.state.userData[0].vallet)),o.a.createElement("div",{className:"mb-3 mt-3"},o.a.createElement("a",{href:"#",className:"p-2 bg-primary text-white",onClick:this.logOut.bind(this)},"LOGOUT")),o.a.createElement("table",{className:"table table-bordered"},o.a.createElement("thead",{className:"thead-dark"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Loan id"),o.a.createElement("th",{scope:"col"},"Amount"),o.a.createElement("th",{scope:"col"},"description"),o.a.createElement("th",{scope:"col"},"status"))),o.a.createElement("tbody",null,localStorage.getItem("sessionId")?this.state.userData[0].loans.map(function(t){return o.a.createElement("tr",{key:e.rowCount},o.a.createElement("td",null,t.loanid),o.a.createElement("td",null,t.amount),o.a.createElement("td",null,t.description),o.a.createElement("td",null,t.status))}):this.props.history.push("/"))),o.a.createElement("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#exampleModal"},"Register for new loan"),o.a.createElement("div",{class:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},o.a.createElement("div",{class:"modal-dialog",role:"document"},o.a.createElement("div",{class:"modal-content"},o.a.createElement("div",{class:"modal-header"},o.a.createElement("h5",{class:"modal-title",id:"exampleModalLabel"},"Register New Loan"),o.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement("div",{class:"modal-body"},o.a.createElement("div",{className:"pb-3"},o.a.createElement("input",{type:"text",className:"form-control",name:"",placeholder:"enter amount",ref:"amount"})),o.a.createElement("div",{className:"pb-3"},o.a.createElement("input",{type:"text",className:"form-control",name:"",placeholder:"enter description",ref:"description"}))),o.a.createElement("div",{class:"modal-footer"},o.a.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close"),o.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:this.requestNewLoan.bind(this)},"Request Loan")))))):o.a.createElement("div",null,"retreiving data...please wait")}}]),t}(o.a.Component),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).loanData=[],a.loans=[],a.items=[],a.state={loanData:a.loanData,loans:a.loans,items:a.items},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;g.a.get("http://localhost:1234/getLoans",{params:{sessionId:localStorage.getItem("sessionId"),withCredentials:!0}}).then(function(t){if(console.log("data obtained in lender componentWillMount is",t),!1===t.data.isAuth)console.log("sessionChecker returned isAtug.."),e.props.history.push("/"),localStorage.clear();else{var a=t.data.content;console.log("response got",a),e.loanData=a,e.setState({loanData:e.loanData,loans:e.loans,items:e.items},function(){e.setState({loanData:e.loanData,loans:e.loans,items:e.items}),e.state.loanData.forEach(function(t){e.loans.push(t.loans)}),console.log("this.loans",e.loans),e.setState({loanData:e.loanData,loans:e.loans,items:e.items},function(){e.setState({loanData:e.loanData,loans:e.loans,items:e.items}),e.state.loans.forEach(function(t){t.forEach(function(t){e.items.push(t)})}),console.log("this.items",e.items),e.setState({loanData:e.loanData,loans:e.loans,items:e.items},function(){e.setState({loanData:e.loanData,loans:e.loans,items:e.items})})})})}})}},{key:"approveLoan",value:function(e){var t=this,a=e.target.getAttribute("amount");console.log("amount",a),console.log("event",e.target.parentNode.parentNode.getAttribute("id"));var n=e.target.parentNode.parentNode;g.a.post("http://localhost:1234/approveLoan",{loanid:e.target.parentNode.parentNode.getAttribute("id"),sessionId:localStorage.getItem("sessionId"),amount:document.getElementById(e.target.parentNode.parentNode.getAttribute("id")).getAttribute("amount")},{withCredentials:!0}).then(function(e){console.log("data for approve",e),!1===e.data.isAuth?(console.log("sessionChecker returned isAtug.."),t.props.history.push("/"),localStorage.clear()):1==e.data.isApproved&&(console.log("inside else if of approve loan"),t.items.forEach(function(e){e.loanid==n.getAttribute("id")&&(e.status="approved")}),t.setState({loanData:t.loanData,loans:t.loans,items:t.items},function(){t.setState({loanData:t.loanData,loans:t.loans,items:t.items})}))})}},{key:"rejectLoan",value:function(e){var t=this,a=e.target.parentNode.parentNode;console.log("event",e.target.parentNode.parentNode.getAttribute("id")),g.a.post("http://localhost:1234/rejectLoan",{loanid:e.target.parentNode.parentNode.getAttribute("id"),sessionId:localStorage.getItem("sessionId")},{withCredentials:!0}).then(function(e){console.log("data for reject",e),!1===e.data.isAuth?(console.log("sessionChecker returned isAtug.."),t.props.history.push("/"),localStorage.clear()):1==e.data.isRejected&&(console.log("inside else if of reject loan"),t.items.forEach(function(e){e.loanid==a.getAttribute("id")&&(e.status="rejected")}),t.setState({loanData:t.loanData,loans:t.loans,items:t.items},function(){t.setState({loanData:t.loanData,loans:t.loans,items:t.items})}))})}},{key:"logOut",value:function(){this.props.history.push("/"),localStorage.clear()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h1",{className:"text-danger"},"Lender Dashboard"),o.a.createElement("div",{className:"mb-3 mt-3"},o.a.createElement("a",{href:"#",className:"p-2 bg-primary text-white",onClick:this.logOut.bind(this)},"LOGOUT")),o.a.createElement("table",{className:"table"},o.a.createElement("thead",{className:"thead-dark"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"loanid"),o.a.createElement("th",{scope:"col"},"amount"),o.a.createElement("th",{scope:"col"},"status"),o.a.createElement("th",{scope:"col"},"description"),o.a.createElement("th",{scope:"col"},"operation"),o.a.createElement("th",{scope:"col"},"operation"))),o.a.createElement("tbody",null,localStorage.getItem("sessionId")?this.state.items.map(function(t){return o.a.createElement("tr",{key:e.rowCount,amount:t.amount,id:t.loanid,className:"rejected"==t.status?"bg-danger":"approved"==t.status?"bg-success":"bg-secondary"},o.a.createElement("td",null,t.loanid),o.a.createElement("td",{id:t.amount},t.amount),o.a.createElement("td",null,t.status),o.a.createElement("td",null,t.description),o.a.createElement("td",null,o.a.createElement("button",{className:"btn btn-success",onClick:e.approveLoan.bind(e),disabled:"pending"!=t.status},"approve")),o.a.createElement("td",null,o.a.createElement("button",{className:"btn btn-danger",onClick:e.rejectLoan.bind(e),disabled:"pending"!=t.status},"reject")))}):this.props.history.push("/"))))}}]),t}(o.a.Component),S=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(u.a,null,o.a.createElement(p.a,{path:"/",exact:!0,component:N}),o.a.createElement(p.a,{path:"/login",exact:!0,component:b}),o.a.createElement(p.a,{path:"/admin/dashboard",exact:!0,component:y}),o.a.createElement(p.a,{path:"/customer/dashboard",exact:!0,component:D}),o.a.createElement(p.a,{path:"/lender/dashboard",exact:!0,component:j})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(60);l.a.render(o.a.createElement(O.a,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.98b7b9a4.chunk.js.map