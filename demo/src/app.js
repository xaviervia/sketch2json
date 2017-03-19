import React, {Component} from 'react'
import sketch2json from 'sketch2json'

export default class App extends Component {
  constructor () {
    super()

    this.state = {
      dragging: false,
      sources: [
        Source('Example', `<h1 class='hello'>Drag HTML/SVG file(s) from your computer in here</h1>`)
      ]
    }
  }

  render () {
    const {dragging, sources} = this.state

    return <main
      className={dragging ? 'dragging' : ''}
      onDragEnter={(e) => {
        e.preventDefault()
        this.setState({ dragging: true })
      }}
      onDragLeave={(e) => {
        e.preventDefault()
        this.setState({ dragging: false })
      }}
      onDragOver={(e) => {
        e.preventDefault()
        return false
      }}
      onDrop={handleDrop(this)}>
      <pre className='text light-green'>
        {sources.map(section)}
      </pre>
    </main>
  }
}

const Source = (name, code) => ({name, code})

const section = ({name, code}, index) => <section key={index}>
  <h2>{name}</h2>
  {JSON.stringify(code)}
</section>

const handleDrop = (component) => (e) => {
  e.preventDefault()
  e.stopPropagation()

  component.setState({dragging: false})

  const {files} = e.dataTransfer

  for (let i = 0; i < files.length; i++) {
    const {name} = files[i]
    const reader = new window.FileReader()
    reader.onload = handleFileRead(
      component,
      reader,
      name.split('.')[0]
    )
    reader.readAsArrayBuffer(files[i])
  }
}

const handleFileRead = (component, reader, name) => () =>
  sketch2json(reader.result).then(data => {
    component.setState({
      sources: [
        ...component.state.sources,
        Source(name, data)
      ]
    })
  })
