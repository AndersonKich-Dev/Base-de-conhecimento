import React from 'react'
import {Link} from 'react-router-dom';
import { HeaderContainer } from '../../styles/styles.header'
import AvatarMenu from '../../components/avatarMenu'

export default function Header(){


    return(

        <HeaderContainer>
            <Link to='/app/dashboard'><h3>KNOWLEDGE BASE</h3></Link>
            <AvatarMenu/>
        </HeaderContainer>
    )
}