import {useState} from 'react'
import './menuStyles.css'
import  * as Comp  from '../components/index' 
import  * as Docs  from '../docComponents/index' 
export function DocsComp() {
    const [showComp, setShowComp] = useState("gettingStart")
    return(
      <div className="mainContainer">
        <div className="docNavBar">
          <div className="docNavList">
            <ul className="navUl">
              <li><Comp.Button classes="btn navListBtn" click={()=>setShowComp("gettingStart")}>Getting Started</Comp.Button></li>
              <li><Comp.Button classes="btn navListBtn" click={()=>setShowComp("alert")}>Alert</Comp.Button></li>
              <li><Comp.Button classes="btn navListBtn" click={()=>setShowComp("avatar")}>Avatar</Comp.Button></li>
              <li><Comp.Button classes="btn navListBtn" click={()=>setShowComp("badge")}>Badge</Comp.Button></li>
              <li><Comp.Button classes="btn navListBtn" click={()=>setShowComp("button")}>Button</Comp.Button></li>
              <li><Comp.Button classes="btn navListBtn" click={()=>setShowComp("modal")}>Modal</Comp.Button></li>
              <li><Comp.Button classes="btn navListBtn" click={()=>setShowComp("navigation")}>Navigation</Comp.Button></li>
              <li><Comp.Button classes="btn navListBtn" click={()=>setShowComp("rating")}>Rating</Comp.Button></li>
            </ul>
          </div>
        </div>
        <div className="docMainDiv">
          {showComp === "gettingStart" && <Docs.GettingStartedDoc />}
          {showComp === "alert" && <Docs.AlertDoc />}
          {showComp === "avatar" && <Docs.AvatarDoc />}
          {showComp === "badge" && <Docs.BadgeDoc />}
          {showComp === "button" && <Docs.ButtonDoc />}
          {showComp === "modal" && <Docs.ModalDoc />}
          {showComp === "navigation" && <Docs.NavigationDoc />}
          {showComp === "rating" && <Docs.RatingDoc />}
        </div>
      </div> 
      )
    }
    export default DocsComp;