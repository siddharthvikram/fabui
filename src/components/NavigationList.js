export function NavigationList({children, classes}) {
    return(
      <ul className={`navList ${classes}`}>
          {children}
      </ul>
    )
    }
export default NavigationList;