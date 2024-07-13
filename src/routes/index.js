import About from "../pages/About"
import Home from "../pages/Home"
import Members from "../pages/Members"
import NotFound from "../pages/NotFound"
import Partners from "../pages/Partners"
import Services from "../pages/Services"

const appRoutes =[
{
    path:"/",
    element: Home,
    exaxct:true
},
{
    path:"/about",
    element: About,
    exaxct:true
},
{
    path:"/services",
    element: Services,
    exaxct:true
},
{
    path:"/members",
    element: Members,
    exaxct:true
},
{
    path:"/partners",
    element: Partners,
    exaxct:true
},
{
    path:"*",
    element: NotFound,
    exaxct:true
}
  
]



export {appRoutes}