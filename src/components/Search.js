import React, { PureComponent } from 'react'

class Search extends PureComponent {
    render() {
        const {value,onChange} = this.props
        return (
            <form>
                    <input 
                        type="text" 
                        value={value}
                        placeholder="Search Your Todo"
                        onChange={onChange}/>
            </form>
        )
    }
}

export default Search