export function LinkButton({
    text,
    href,
    classes,
  }) 
  {
      return(
          <div>
              <a href={href} className={classes}>{text}</a>
          </div> 
        )
      }
      
export default LinkButton;