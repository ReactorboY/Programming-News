import React, { PureComponent } from 'react'
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
            searchTerm:'',
            newItem:''
        }
        this.onDismiss = this.onDismiss.bind(this)
        this.addNewItem = this.addNewItem.bind(this)
        this.addItem = this.addItem.bind(this)
    } 
    
    onDismiss(id) {
        const updatedList = this.state.list.filter(item => item.id !== id)
        this.setState({list:updatedList})
    }

    addNewItem = e => {
        this.setState({newItem:e.target.value})
    }

    addItem = e => {
        e.preventDefault()
        const updatedList = {
            title: this.state.newItem,
            id: this.state.list.length,
            completed: false
        }
        this.setState({list: [...this.state.list,updatedList], newItem:''})

    }
    
    render() {
        const {list,newItem} = this.state
        return (
            <main>
                <div>
                    <form onSubmit={this.addItem}>
                        <input type="text" value={newItem} onChange={this.addNewItem} 
                        placeholder="Add New Todo Item"/>
                    </form>
                    {list.map(item => 
                        <div key={item.id} className="listDiv">
                            <div style={{display:'inline-block',width:'90%'}}>
                                <span>{item.title} </span>
                            </div>
                            <span>
                                <button style={{background:'#0ba6ff',borderRadius:'10px',color:'#fff'}} 
                                 onClick={() => this.onDismiss(item.id)} type="button">DONE</button>
                            </span>
                        </div>
                        )}
                </div>
            </main>
        )
    }
}

export default App