import * as React from "react"
import './chip.scss'
import Link from "../link/link"
const Chip = (
	{
		size,
		color,
		url,
		label,
		blank,
		disabled,
		children
	}
) =>{
	let styles = 'chip chip-simple'
		+ `${size ? ' chip-'+size : ''}`
		+ `${color ? ' chip-'+color : ''}`
		+ `${disabled ? ' chip-disabled' : ''}`

	// XXX disable all chips "argomento" for alpha release:
	styles = 'chip chip-simple chip-disabled' 
		+ `${size ? ' chip-'+size : ''}`
	//

	if (label) {
		children = label
	}

    let screenReaderText = "Argomento:" 
	// XXX Hardcoded, to be addressed

	return (
		<Link to={url} className={styles} target={blank ? '_blank' : undefined}>
			<span className="chip-label"><span className="visually-hidden">{screenReaderText}</span> {children}</span>
		</Link>
	)
}

export default Chip
