import React from 'react'
import { Editor, EditorState, RichUtils } from "draft-js";

class PageContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
        };
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

    render() {
        return (
            <div className="editorContainer">
                <div className="editors">
                    <Editor
                        editorState={this.state.editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.onChange}
                    />
                </div>
            </div>
        )
    }
}

export default PageContainer