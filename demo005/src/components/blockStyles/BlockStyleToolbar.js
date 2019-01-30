import React from "react";
import { EditorState, Editor, RichUtils, AtomicBlockUtils } from "draft-js";
import BlockStyleButton from "./BlockStyleButton";
import HeaderStyleDropdown from "./HeaderStyleDropdown";

// Componente contenedor con definiciones de estilo del bloque lógico

export const BLOCK_TYPES = [
	{ label: " “ ” ", style: "blockquote" },
	{ label: "UL", style: "unordered-list-item" },
	{ label: "OL", style: "ordered-list-item" },
	{ label: "{ }", style: "code-block" }
];

export const HEADER_TYPES = [
	{ label: "(None)", style: "unstyled" },
	{ label: "H1", style: "header-one" },
	{ label: "H2", style: "header-two" },
	{ label: "H3", style: "header-three" },
	{ label: "H4", style: "header-four" },
	{ label: "H5", style: "header-five" },
	{ label: "H6", style: "header-six" }
];

export function getBlockStyle(block) {
	switch (block.getType()) {
		case "blockquote":
			return "RichEditor-blockquote";
		default:
			return null;
	}
}

class BlockStyleToolbar extends React.Component {
	render() {
		const { editorState } = this.props;
		const selection = editorState.getSelection();
		const blockType = editorState
			.getCurrentContent()
			.getBlockForKey(selection.getStartKey())
			.getType();

		return (
			<span className="RichEditor-controls">
				<HeaderStyleDropdown
					headerOptions={HEADER_TYPES}
					active={blockType}
					onToggle={this.props.onToggle}
				/>

				{BLOCK_TYPES.map(type => {
					return (
						<BlockStyleButton
							active={type.style === blockType}
							label={type.label}
							onToggle={this.props.onToggle}
							style={type.style}
							key={type.label}
							type={type}
						/>
					);
				})}
			</span>
		);
	}
}

export default BlockStyleToolbar;
