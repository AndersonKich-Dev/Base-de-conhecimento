import React from 'react'
import { ContentContainer } from '../../styles/styles.content'

export default function Content({children}){


    return(

        <ContentContainer>
            {children}
        </ContentContainer>
    )
}