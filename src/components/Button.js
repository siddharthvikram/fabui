export function Button({
    text,
    classes,
    click
  }) 
  {
    console.log(click)
      return(
          <div>
              <button className={classes} onClick={click}>{text}</button>
          </div> 
        )
      }
      export default Button; 