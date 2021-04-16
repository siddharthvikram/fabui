export function Button({
    children,
    classes,
    click
  }) 
  {
      return(
          <button className={classes} onClick={click}>{children}</button>
        )
      }
      export default Button;