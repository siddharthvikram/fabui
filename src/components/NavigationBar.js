export function NavigationBar({position, children, classes}) {
  if(position===undefined){position= null}
  if(classes===undefined){classes= null}
  return(
      <nav className={`${position} ${classes} navBar`}>
        {children}
      </nav>
    )
  }
export default NavigationBar;