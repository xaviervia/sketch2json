import React, {Component} from 'react'
import JSONTree from 'react-json-tree'
import sketch2json from 'sketch2json'

export default class App extends Component {
  constructor () {
    super()

    this.state = {
      dragging: false,
      source: Source('Example', `Drop a Sketch (v43+) file in the header to inspect`)
    }
  }

  render () {
    const {dragging, source} = this.state

    return <main>
      <header
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
        onDrop={handleDrop(this)}
        style={{
          backgroundColor: dragging ? 'black' : 'white',
          color: dragging ? 'white' : 'black',
          fontFamily: 'Lato, sans-serif',
          padding: 20,
          display: 'block',
          width: '100%'
        }}>
        Drop a Sketch file in this header to inspect
      </header>
      <section
        style={{
          padding: 15
        }}>
        <JSONTree data={source} />
      </section>
    </main>
  }
}

const Source = (name, code) => ({[name]: code})

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
      name
    )
    reader.readAsArrayBuffer(files[i])
  }
}

const handleFileRead = (component, reader, name) => () =>
  sketch2json(reader.result).then(data => {
    component.setState({
      source: Source(name, data)
    })
  })
