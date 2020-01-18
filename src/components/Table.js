import React, { PureComponent } from 'react'

//  filter search function
const isSearched = searchTerm => item => !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase())

class Table extends PureComponent {
    render() {
        const {list,searchTerm, onDismiss}  = this.props
        return (
            <React.Fragment>
                {list.filter(isSearched(searchTerm)).map(item => 
                        <div key={item.id} className="listDiv">
                            <div style={{display:'inline-block',width:'80%'}}>
                                <span>{item.title} </span>
                            </div>
                            <span>
                                <button style={{background:'#0ba6ff',borderRadius:'10px',color:'#eee'}} 
                                 onClick={() => onDismiss(item.id)} type="button">Complete</button>
                            </span>
                        </div>
                        )}
            </React.Fragment>
        )
    }
}

export default Table