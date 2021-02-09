import React from 'react'
import { ViewTemplate } from '../../styles/styles.template'
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import Routes from '../../config/routes'
import Content from './Content'

export default function Template(){

    return(
        <ViewTemplate>
            <Header/>
            <Menu/>
            <Content>
               <Routes/>
            </Content>
            <Footer/>
        </ViewTemplate>
    )
}