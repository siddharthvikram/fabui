import {FloatingButton } from './FloatingButton'
export function Modal({
    mainText,
    subText,
  }) 
  {
      return(
        <div>
         <div className="modalOutBox">
           <div className="modalInBox">
             <FloatingButton btnType="close" classes="modalClose"/>
             <div className="modalMain">{mainText}</div>
             <div className="modalSub">{subText}</div>
           </div>
         </div>
        </div> 
        )
      }
      export default Modal; 