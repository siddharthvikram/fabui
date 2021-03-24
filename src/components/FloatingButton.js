export function FloatingButton({
    text,
    btnType,
    classes,
    position,
    click
  }) 
  {
    const button = `fa fa-${btnType}`
    text=== undefined? text= null: text = ` ${text}`
    
      return(
        <div className={position}>
          <button className={classes} onClick={click}><i class={button}></i>{text}</button>
        </div> 
        )
      }
      export default FloatingButton;