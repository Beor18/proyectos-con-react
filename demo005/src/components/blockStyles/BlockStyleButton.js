// Componente que representará un botón  para cada una de las opciones de estilo de bloque que no son encabezados

import React from "react";

class BlockStyleButton extends React.Component {
	onToggle = e => {
		e.preventDefault();
		this.props.onToggle(this.props.style);
	};

	render() {
		let className = "RichEditor-styleButton";
		if (this.props.active) {
			className += " RichEditor-activeButton";
		}

		return (
			<span className={className} onClick={this.onToggle}>
				{this.props.label}
			</span>
		);
	}
}

export default BlockStyleButton;