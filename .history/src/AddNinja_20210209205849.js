import React from 'react'

class AddNinja extends Component {
    state = { 
        name: null,
        age: null,
        belt: null,
     }

handleChange = (e) => {
    this.setState({
       [e.target.id]: e.target.value 
    })
} 

    render() { 
        return ( 
            <div>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' onChange={}/>
                    <label htmlFor="name">Age:</label>
                    <input type="text" id='age' onChange={}/>
                    <label htmlFor="name">Belt:</label>
                    <input type="text" id='belt' onChange={}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default AddNinja;