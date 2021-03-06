import React, { Component ,useState} from 'react'

const Search  {

        state = {
                text: '',
        }
        onChange = (e) => {
                this.setState({text: e.target.value});
        }

        onSubmit = (e) => {
                e.preventDefault();
                if(this.state.text === ''){
                    this.props.setAlert('Please enter something','danger')
                }else{
                this.props.searchUser(this.state.text);
                this.setState({text: ''});
        }
    }
    render() {

            const  {showClear,clearUsers} = this.props;

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
}

export default Search

