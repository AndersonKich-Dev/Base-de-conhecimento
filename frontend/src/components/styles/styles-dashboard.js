import styled from 'styled-components'

export const DashboardContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #201F25;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;


    ul {
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        li {
            width: 30%;
            height: 100%;
            list-style-type: none;
            border-radius: 8px;
            box-shadow: 2px 3px 11px 0px rgba(0,0,0,0.75);
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            svg {
                font-size: 2rem;
                color: #fff;
            }

            p {
                font-size: 1.5rem;
            }
        }

    }

    @media screen and (min-width: 768px) and (max-width: 1024px){
        ul{
            flex-direction: column;
            height: 300px;

            li{
                width: 60%;
                height: 60px;
            }
        }
    }
`;