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
    }
]

class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            list,
        }
        this.onClickMe = this.onClickMe.bind(this)
    } 
    
    onClickMe(id) {
        const updatedList = this.state.list.filter(item => item.id !== id)
        this.setState({list:updatedList})
    }
    
    render() {
        return (
            <main>
                <div>
                    {this.state.list.map(item => 
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