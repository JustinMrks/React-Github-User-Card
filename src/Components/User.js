import React from 'react'

const User = (props) => {
    return (
        <div className='userCard'>
            <div className='leftCard'>
                <img src={props.user.avatar_url} alt={props.user.login}/>
                <div className='name'>
                    <h2>{props.user.name}</h2>
                    <h3>{props.user.login}</h3>
                </div>
            </div>
            <div className='rightCard'>
                <h2>{props.user.location}</h2>
                <p>{props.user.bio}</p>
                <a href={props.user.html_url}>{props.user.login}'s GitHub</a>    
            </div>
        </div>
    )
}

export default User