import React, { PureComponent } from 'react'
import Search from './components/Search'
import Table from './components/Table'
import './App.css'

const list = [
    {
        title:'Create React App',
        completed: false,
        id:0
    },
    {
        title:'Add To do Item',
        completed: false,
        id:1
    }, 
    {
        title: 'Add Delete Button',
        completed: false,
        id: 2
    }, 
    {
        title: 'Add New to do Item functionality',
        completed: false,
        id: 3
    }
]

class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            list,
            searchTerm:''
        }
        this.onDismiss = this.onDismiss.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
    } 
    
    onDismiss(id) {
        const updatedList = this.state.list.filter(item => item.id !== id)
        this.setState({list:updatedList})
    }

    onSearchChange(e) {
        this.setState({searchTerm: e.target.value})
    }
    
    render() {
        const {searchTerm, list} = this.state
        return (
            <main>
                <div>
                    <Search 
                        value={searchTerm}
                        onChange={this.onSearchChange}
                    />
                    <Table 
                        list={list}
                        searchTerm={searchTerm}
                        onDismiss={this.onDismiss}
                    />
                </div>
            </main>
        )
    }
}

export default App