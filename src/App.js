import React, { PureComponent } from 'react'
import './App.css'

const list = [
    {
        title:'First To DO list',
        completed: false,
        id:0
    },
    {
        title:'Second To DO list',
        completed: false,
        id:1
    }, 
    {
        title: 'Fifth To DO list',
        completed: false,
        id: 2
    }
]

const isSearched = searchTerm =>  item =>  !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase())

class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            list,
            searchTerm:''
        }
        this.onClickMe = this.onClickMe.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
    } 
    
    onClickMe(id) {
        const updatedList = this.state.list.filter(item => item.id !== id)
        this.setState({list:updatedList})
    }

    onSearchChange(e) {
        this.setState({searchTerm: e.target.value})
    }
    
    render() {
        return (
            <main>
                <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Search Your Todo"
                        onChange={this.onSearchChange}/>
                </form>
                    {this.state.list.filter(isSearched(this.state.searchTerm)).map(item => 
                        <div key={item.id} className="listDiv">
                            <div style={{display:'inline-block',width:'80%'}}>
                                <span>{item.title} </span>
                            </div>
                            <span>
                                <button style={{background:'#0ba6ff',borderRadius:'10px',color:'#eee'}} 
                                 onClick={() => this.onClickMe(item.id)} type="button">Complete</button>
                            </span>
                        </div>
                        )}
                </div>
            </main>
        )
    }
}

export default App