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
                                <button onClick={this.onClickMe} type="button">Complete</button>
                            </span>
                        </div>
                        )}
                </div>
            </main>
        )
    }
}

export default App