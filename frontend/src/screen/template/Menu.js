import React from 'react'
import { MenuContainer } from '../../styles/styles.menu'
import { FaHome, FaBook, FaList, FaUserEdit, FaSignOutAlt } from 'react-icons/fa'

export default function Menu(){


    return(

        <MenuContainer>
            <h3>Menu</h3>
            <ul>
                <li>
                    <FaHome color={'#fff'}/>
                </li>
                   
                <li>
                <span>
                    <FaBook color={'#fff'}/>
                </span>
                    <p>Categorias</p>                   
                </li>

                <li>
                    <span>
                        <FaList color={'#fff'}/>
                    </span>
                    <p>Artigos</p>
                </li>

                <li>
                    <span>
                        <FaUserEdit color={'#fff'}/>
                    </span>
                    <p>Usuario</p>
                </li>

                <li>
                    <span>
                        <FaSignOutAlt color={'#fff'}/>
                    </span>
                    <p>Logout</p>
                </li>

            </ul>
        </MenuContainer>
    )
}