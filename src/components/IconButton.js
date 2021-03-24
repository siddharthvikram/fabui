export function IconButton({
    text,
    btnType,
    classes,
    click
  }) 
  {
    const button = `fa fa-${btnType}`
    text=== undefined? text= null: text = ` ${text}`
    
      return(
        <div>
          <button className={classes} onClick={click}><i class={button}></i>{text}</button>
        </div> 
        )
      }
      export default IconButton;