import React, {useState} from 'react'

const Search = ({searchUser,showClear,clearUsers}) => {

    
        const {text,setText}  = useState('');

      const  onChange = (e) => {
                setText( e.target.value});
        }

        const onSubmit = (e) => {
                e.preventDefault();
                if(this.state.text === ''){
                    this.props.setAlert('Please enter something','danger')
                }else{
                this.props.searchUser(this.state.text);
                this.setState({text: ''});
        }
    }



        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                <input type="text" name="text" placeholder="Search users..." value={this.state.text} onChange={this.onChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
            </div>

        )
    
}

export default Search

 