import info from '../assets/alertIcons/info.png'
import alert from '../assets/alertIcons/alert.png'
import error from '../assets/alertIcons/error.png'
import success from '../assets/alertIcons/success.png'

export function Alert({
    severity,
    alertMsg
    }) 
    { switch (severity) {
        case "success":
            return(
                <div >
                    <div className="alertBox sColorBg sColor">
                        <div className="alertImgDiv">
                            <img src={success} alt="" className="alertImg"/>
                        </div>
                        <div className="alertMsgDiv">
                            <div className="alertText">
                            Success! 
                            </div>
                            <div className="alertMsg">
                            {alertMsg}    
                            </div>                 
    
                        </div>
                        <div className="alertClose">
                            <button className="alertCloseBtn sColor"><i class="fa fa-close"></i></button>
                            
                        </div>
                    </div>
                </div> 
              )
        case "error":
            return(
                <div >
                    <div className="alertBox eColorBg eColor">
                        <div className="alertImgDiv">
                            <img src={error} alt="" className="alertImg"/>
                        </div>
                        <div className="alertMsgDiv">
                            <div className="alertText">
                            Error!
                            </div>
                            <div className="alertMsg">
                            {alertMsg}    
                            </div>                 
    
                        </div>
                        <div className="alertClose">
                            <button className="alertCloseBtn eColor"><i class="fa fa-close"></i></button>
                            
                        </div>
                    </div>
                </div> 
              )
        case "alert":
            return(
                <div >
                    <div className="alertBox aColorBg aColor">
                        <div className="alertImgDiv">
                            <img src={alert} alt="" className="alertImg"/>
                        </div>
                        <div className="alertMsgDiv">
                            <div className="alertText">
                            Alert! 
                            </div>
                            <div className="alertMsg">
                            {alertMsg}    
                            </div>                 
    
                        </div>
                        <div className="alertClose">
                            <button className="alertCloseBtn aColor"><i class="fa fa-close"></i></button>
                            
                        </div>
                    </div>
                </div> 
              )
        case "info":
            return(
                <div >
                    <div className="alertBox iColorBg iColor">
                        <div className="alertImgDiv">
                            <img src={info} alt="" className="alertImg"/>
                        </div>
                        <div className="alertMsgDiv">
                            <div className="alertText">
                            Info! 
                            </div>
                            <div className="alertMsg">
                            {alertMsg}    
                            </div>                 
    
                        </div>
                        <div className="alertClose">
                            <button className="alertCloseBtn iColor"><i class="fa fa-close"></i></button>
                            
                        </div>
                    </div>
                </div> 
              )
        default:
            break;
        }
    }
        export default Alert;