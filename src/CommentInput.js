import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }

    constructor() {
        super()
        this.state = {
            username: '',
            content: '',
            createdTime: +Date.now()
        }
    }

    componentWillMount() {
        const username = localStorage.getItem('username')
        this.setState({
            username: username
        })
    }

    componentDidMount() {
        this.textarea.focus()
    }

    _saveUserName(username) {
        localStorage.setItem('username', username)
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }

    handleContentChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handleUsernameOnblur(e) {
        this._saveUserName(e.target.value)
    }

    handleSubmit() {
        if(this.props.onSubmit){
            const {username, content, createdTime} = this.state
            this.props.onSubmit({username, content, createdTime})
        }
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input 
                        value={this.state.username}
                        onChange={this.handleUsernameChange.bind(this)}
                        onBlur={this.handleUsernameOnblur.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea 
                        ref={(textarea)=>{this.textarea = textarea}}
                        value={this.state.content}
                        onChange={this.handleContentChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput