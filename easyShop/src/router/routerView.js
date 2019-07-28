import React from "react"
import {Switch,Route,Redirect} from "react-router-dom"
function RouterView(props){
    let {routes} =props
    let RouterArr=routes&&routes.filter(item=>!item.redirect)
    let RedirectArr=routes&&routes.filter(item=>item.redirect).map((item,index)=><Redirect key={index} from={item.path} to={item.redirect}></Redirect>)
    return <Switch>
        {RouterArr.map((item,index)=>{
            return <Route key={index} path={item.path} render={(props)=>{
                return <item.component key={index} {...props} child={item.children}></item.component>
            }}></Route>
        }).concat(RedirectArr)}
    </Switch>
    
}
export default RouterView;