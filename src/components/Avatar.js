export function Avatar({
    alt,
    src,
    classes
  }) {
      return(
          <div>
              <img src={src} alt={alt} className={classes}/>
          </div> 
        )
      }
      export default Avatar;