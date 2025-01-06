import styled from "styled-components"
import dataImg from '../../assets/dataSimbol.png'
import frontEndImg from '../../assets/frontEndSimbol.png'
import { useState } from "react"
const DualNavContainer = styled.div`
    max-width: 100vw;
    display: grid;
    grid-template-columns: ${(props) => (props.$hovered? props.$tamanho : "50% 50%")};
    transition: grid-template-columns 0.8s ease;
    height: 250px;
    div{
        img{
            width: ${(props)=>(props.$hovered?'200px':'240px')};
            transition: width 0.3s ease;
        }
        p{
            
            opacity: ${(props)=>(props.$hovered?'1':'0')};
            transition: opacity 0.5s linear;
            font-size: 24px;
            font-weight: bold;
        }
    }

`
const LinkEstili = styled.div`
    text-align: center;
    background-color: ${props => props.$data ? '#9CE37D' :'#007EA7'};
`
const DualNav = ()=>{
    const [hovered,setHovered] = useState(false)
    const [tamanho,setTamanho] = useState('50% 50%')
    return(
        <DualNavContainer $hovered={hovered} $tamanho={tamanho}>
            <LinkEstili
             onMouseEnter={()=>{setHovered(true); setTamanho('80% 20%')}} 
             onMouseLeave={()=>setHovered(false)} 
             $data
            >
                <img src={dataImg} alt="" />
                <p>Data Science</p>
            </LinkEstili>

            <LinkEstili
             onMouseEnter={()=>{setHovered(true); setTamanho('20% 80%')}} 
             onMouseLeave={()=>setHovered(false)}
            >
                <img src={frontEndImg} alt="" />
                <p>Front End</p>
            </LinkEstili>
            
        </DualNavContainer>
    )
}

export default DualNav