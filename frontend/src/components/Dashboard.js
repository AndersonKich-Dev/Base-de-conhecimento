import React, { useState, useEffect } from 'react'
import { DashboardContainer } from './styles/styles-dashboard'
import Title from '../components/TitleComponent'
import TitleIcon from '../components/TitleIconComponents'
import { FaHome, FaFolder, FaFile, FaUser } from 'react-icons/fa'
import api from '../services/api'

export default function Dashboard(){

    const token = localStorage.getItem('token')

    const [articles, setArticles] = useState([])
    const [categories, setCategories] = useState([])
    const [users, setUsers] = useState([])

    const handleGetCategories=()=>{
        api.get('/categories',{
            headers: {
                Authorization: token,
            },
        })
        .then(response =>{
            const aux = acountFormat(response.data.length)
            setCategories(aux)
        })
    }

    const handleGetArticles=()=>{
        api.get('/articles',{
            headers: {
                Authorization: token,
            },
        })
        .then(response => {
            const aux = acountFormat(response.data.count)
            setArticles(aux)
        })
    }

    const handlegetUsers=()=>{
        api.get('/users',{
            headers: {
                Authorization: token,
            },
        })
        .then(response => {
            const aux = acountFormat(response.data.length)
            setUsers(aux)
        })
    }

    const acountFormat=(value)=>{
        if(value < 1){
            return '00'
        }else if(value >= 1 && value < 10){
            return `0${value}`
        }else{
            return value
        }
    }

    useEffect(()=>{
        handlegetUsers()
        handleGetArticles()
        handleGetCategories()
    },[])

    return(
        <DashboardContainer>
            <Title>
                <TitleIcon>
                    <FaHome/>
                    <p>Dashboard</p>
                </TitleIcon>
            </Title>

            <ul>
               <li>
                    <FaFolder color={'#FFB948'}/> 
                    <p>{articles}</p>
                    <p>Artigos</p>  
                </li> 
               <li>
                   <FaFile color={'#FD7268'}/>
                   <p>{categories}</p>
                   <p>Categorias</p>  
                </li> 
               <li>
                   <FaUser color={'#7C9CE5'}/>
                   <p>{users}</p>
                   <p>Usuarios</p>  
                </li> 
            </ul>

        </DashboardContainer>
    )
}