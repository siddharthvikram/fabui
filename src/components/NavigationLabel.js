export function NavigationLabel({brandIcon, classes}) {
  return(
      <div className={`brandIconDiv ${classes}`}>
        <img src={brandIcon} alt="Brand" className="brandIcon"/>
      </div>
    )
  }
export default NavigationLabel;