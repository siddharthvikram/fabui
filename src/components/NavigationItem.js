export function NavigationItem({href, navItems,children,color}) {
    return(
      <li className={`navItem ${navItems}`}><a href={href} className={`navItemLink ${color}`}>{children}</a></li>
    )
    }
export default NavigationItem;