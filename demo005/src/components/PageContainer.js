import React from 'react'
import { EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js"
import Editor from "draft-js-plugins-editor"
import createHighlightPlugin from './plugins/highlightPlugin'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'

import BlockStyleToolbar, { getBlockStyle } from "./blockStyles/BlockStyleToolbar";
import Button from '@material-ui/core/Button';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

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

    componentDidMount() {
        let displayedNote = this.props.nota.p
        if (typeof displayedNote == "object") {
          //let rawContentFromFile = displayedNote
          this.setState({
            displayedNote: this.props.nota._id,
            editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.displayedNote.content)), this.decorator())
          })
        } else {
          this.setState({
            noteTitle: "",
            
          })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.nota == null && !!this.props.nota) {
         this.setState({
          displayedNote: this.props.nota._id,
          editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(this.props.nota.content)))
         })
        }
    }

    submitEditor = () => {
        let displayedNote = this.props.nota
        let contentState = this.state.editorState.getCurrentContent()
        let note = {title: this.state.noteTitle, content: convertToRaw(contentState)}
        if (this.state.noteTitle === "" || (note.content.blocks.length <= 1 && note.content.blocks[0].depth === 0 && note.content.blocks[0].text === "")) {
          alert("El titulo o el cuerpo no tiene que estar en blanco!")
        } else {
          note["content"] = JSON.stringify(note.content)
          this.setState({
            noteTitle: "",
            editorState: EditorState.createEmpty()
          }, () => displayedNote === this.props.crearNota(note.title, note.content));
        }
    }

    captureTitle = (event) => {
        event.preventDefault()
        let value = event.target.value
        this.setState({
          noteTitle: value
        })
    }

    render() {
        return (
            <div className="editorContainer">

            <div className="aboveEditor">

                <FormControl className="formulario">
                    <InputLabel htmlFor="component-simple">Título</InputLabel>
                    <Input id="component-simple" name="noteTitle" value={this.state.noteTitle} onChange={this.captureTitle} />
                </FormControl>
                <Button variant="contained" color="secondary" className="submitNote" onClick={this.submitEditor}>
                        Guardar
                </Button>
            </div>

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

function mapStateToProps(state, props) {
    return {
      nota: state.nota.hotels,
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)