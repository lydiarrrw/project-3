import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import cityData from '../data/cityData'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'


export default function JobForm({ formData, handleSubmit, handleChange, handleTypeChange, updateFormData }) {

  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const rawContentState = convertToRaw(editorState.getCurrentContent())


  const markup = draftToHtml(
    rawContentState
    // hashtagConfig, 
    // directional, 
    // customEntityTransform
  )

  //console.log(markup)

  useEffect(() => {
    updateFormData({ ...formData, description: markup })
  }, [markup])

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
    //const contentState = editorState.getCurrentContent()
    //console.log('content state', convertToRaw(contentState))
    //console.log(editorState)
  }

  return <div className="container">

    <form onSubmit={handleSubmit}>

      <div className="field">
        <label className="label">Job Title</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="title"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Location</label>
        <div className="control">
          <Select
            isMulti
            defaultValue={[]}
            options={cityData}
            className="basic-multi-select"
            classNamePrefix="select"
            name="location"
            onChange={handleTypeChange}
            value={formData.types}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <div className="inputoutline">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
            toolbar={{
              options: ['inline', 'link', 'list'],
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true }
            }}
          />
</div>
        </div>
      </div>

      <div className="field">
        <label className="label">Salary</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="salary"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </div>
    </form>
  </div>


}
