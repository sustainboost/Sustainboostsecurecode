import{W as c,r as p,j as e,Y as x,a as g}from"./app-vmJwtK30.js";import{G as f}from"./GuestLayout-CUdtiCqi.js";import{T as l,I as o}from"./TextInput-Cl1M_Rnw.js";import{I as i}from"./InputLabel-Ch65lI7E.js";import{P as j}from"./PrimaryButton-H4VKHB5e.js";/* empty css                 */import"./Logo1-C0ibpix3.js";function _(){const{data:a,setData:r,post:m,processing:n,errors:t,reset:u}=c({name:"",email:"",password:"",password_confirmation:"",role:""});p.useEffect(()=>()=>{u("password","password_confirmation")},[]);const d=s=>{s.preventDefault(),m(route("register"))};return e.jsxs(f,{isAuthenticated:!1,userName:"",changeLanguage:()=>{},children:[e.jsx(x,{title:"Register"}),e.jsx("div",{className:"registercontainer",children:e.jsxs("form",{onSubmit:d,className:"registerform",children:[e.jsxs("div",{className:"registerinput",children:[e.jsx(i,{htmlFor:"name",value:"Name"}),e.jsx(l,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:s=>r("name",s.target.value),required:!0}),e.jsx(o,{message:t.name,className:"mt-2"})]}),e.jsxs("div",{className:"registerinput",children:[e.jsx(i,{htmlFor:"email",value:"Email"}),e.jsx(l,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",onChange:s=>r("email",s.target.value),required:!0}),e.jsx(o,{message:t.email,className:"mt-2"})]}),e.jsxs("div",{className:"registerinput",children:[e.jsx(i,{htmlFor:"password",value:"Password"}),e.jsx(l,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password",s.target.value),required:!0}),e.jsx(o,{message:t.password,className:"mt-2"})]}),e.jsxs("div",{className:"registerinput",children:[e.jsx(i,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(l,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password_confirmation",s.target.value),required:!0}),e.jsx(o,{message:t.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"registerinput",children:[e.jsx(i,{htmlFor:"role",value:"choisir TYpe de compte"}),e.jsxs("select",{id:"role",name:"role",value:a.role,className:"mt-1 block w-full",onChange:s=>r("role",s.target.value),required:!0,children:[e.jsx("option",{value:"",children:"--"}),e.jsx("option",{value:"buyer",children:"Buyer"}),e.jsx("option",{value:"startup",children:"Startup"})]}),e.jsx(o,{message:t.role,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(g,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Already registered?"}),e.jsx(j,{className:"ms-4",disabled:n,children:"Register"})]})]})})]})}export{_ as default};
