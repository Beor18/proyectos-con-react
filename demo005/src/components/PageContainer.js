import React from 'react'
import { EditorState, RichUtils } from "draft-js"
import Editor from "draft-js-plugins-editor"
import createHighlightPlugin from './plugins/highlightPlugin'

import BlockStyleToolbar, { getBlockStyle } from "./blockStyles/BlockStyleToolbar";

const highlightPlugin = createHighlightPlugin();

class PageContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
        };

        this.plugins = [highlightPlugin];
    }

    onChange = (editorState) => {
        this.setState({
            editorState
        });
    };

    // Manejo de comando de teclado para poner un texto en negrita o subrayado
    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'no handled';
    }

    onUnderlineClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    }

    onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
    }
    
    onItalicClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
    }

    onHighlight = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'HIGHLIGHT'))
    }

    toggleBlockType = (blockType) => {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
    }

    render() {
        return (
            <div className="editorContainer">
                <BlockStyleToolbar
                    editorState={this.state.editorState}
                    onToggle={this.toggleBlockType}
                />
				<button className="underline" onClick={this.onUnderlineClick}>
					U
				</button>
				<button className="bold" onClick={this.onBoldClick}>
					<b>B</b>
				</button>
				<button className="italic" onClick={this.onItalicClick}>
					<em>I</em>
				</button>
				<button className="strikethrough" onClick={this.onStrikeThroughClick}>
					abc
				</button>
				<button className="highlight" onClick={this.onHighlight}>
					<span style={{ background: "yellow", padding: "0.3em" }}>H</span>
				</button>
				<div className="editors">
					<Editor
                        blockStyleFn={getBlockStyle}
						editorState={this.state.editorState}
						handleKeyCommand={this.handleKeyCommand}
						plugins={this.plugins}
						onChange={this.onChange}
					/>
				</div>
			</div>
        )
    }
}

export default PageContainer