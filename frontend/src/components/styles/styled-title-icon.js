import styled from 'styled-components'

export const TitleIconContainer = styled.div`
    position: absolute;
    top: 0;
    left:0;
    min-width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    

    p {
        font-size: 2rem;
        margin-left: 20px;
        font-weight: bold;
       
    }

    svg{
        font-size: 2rem;
        color: #E3E4E4;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px){
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;