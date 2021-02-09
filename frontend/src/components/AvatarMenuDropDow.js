import React from 'react'
import { useHistory } from 'react-router-dom'
import { MenuDropDow } from './styles/styles-avatarMenuDropDow'
import { FaUserCog, FaUserEdit, FaFile, FaFileAlt, FaSignOutAlt, FaUsers } from 'react-icons/fa'


export default function AvatarMenuDropDow(){

    const admin = localStorage.getItem('admin')
    const history = useHistory()

    const logout=()=>{
        localStorage.clear();
        history.push('/');
    }

    if(admin === '1'){
        return(
            <MenuDropDow>
                <li>
                    <FaUserCog/>
                    <p>Administrador</p>
                    <ul>
                        <li>
                            <FaUsers/>
                            <p>Usuarios</p>
                        </li>
                        <li>
                            <FaFile/>
                            <p>Artigos</p>
                        </li>
                        <li>
                            <FaFileAlt/>
                            <p>Categotias</p>
                        </li>
                    </ul>
                </li>
    
                <li>
                    <FaUserEdit/>
                    <p>Usuario</p>
                </li>
    
                <li onClick={logout}>
                    <FaSignOutAlt/>
                    <p>Logout</p>
                </li>
            </MenuDropDow>
        )
    }else{
        return(
            <MenuDropDow>   
                <li>
                    <FaUserEdit/>
                    <p>Usuario</p>
                </li>
    
                <li onClick={logout}>
                    <FaSignOutAlt/>
                    <p>Logout</p>
                </li>
                <li style={{visibility:'hidden'}}>

                </li>
            </MenuDropDow>
        )
    }

   
       
    
}