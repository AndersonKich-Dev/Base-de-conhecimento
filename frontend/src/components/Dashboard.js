import React from 'react'
import { DashboardContainer } from './styles/styles-dashboard'
import Title from '../components/TitleComponent'
import TitleIcon from '../components/TitleIconComponents'
import { FaTachometerAlt } from 'react-icons/fa'


export default function Dashboard(){

    return(
        <DashboardContainer>
            <Title>
                <TitleIcon>
                    <FaTachometerAlt/>
                    <p>Dashboard</p>
                </TitleIcon>
            </Title>
        </DashboardContainer>
    )
}