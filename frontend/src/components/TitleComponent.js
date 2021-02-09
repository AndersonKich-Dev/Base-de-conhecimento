import React from 'react'
import { TitleContainer } from './styles/styles-title'

export default function Title( {children} ){

    return(
        <TitleContainer>
           { children }
        </TitleContainer>
    )
}