import React from 'react'
import { Editor, EditorState } from "draft-js";

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

    render() {
        return (
            <div className="editorContainer">
                <div className="editors">
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                    />
                </div>
            </div>
        )
    }
}

export default PageContainer