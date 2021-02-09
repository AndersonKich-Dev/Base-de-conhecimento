import React, { useState, useEffect } from 'react'
import { AvatarContainer, AvatarBox } from './styles/styles-avatar'
import avatarFake from '../assets/avatar.jpg'
import Menu from './AvatarMenuDropDow'

export default function Avatar(){
    const name = localStorage.getItem('name')

    const [avatarUrl, setAvatarUrl] = useState('')

    useEffect(()=>{
        fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json())
        .then(user => {
            if(user.avatar_url){
                setAvatarUrl(user.avatar_url)
            }else{
                setAvatarUrl(avatarFake)
            }
        });
    },[])

    return(
        <AvatarContainer>
            <AvatarBox>
                <img src={avatarUrl} alt=''/>
            </AvatarBox>
            <p>{name}</p>
            <div>
                <Menu/>
            </div>           
        </AvatarContainer>
    )
    
    
}