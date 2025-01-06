import styled from 'styled-components'
import profileIcon from '../../assets/profile-icon.png'
// import { Link } from 'react-router'

const CabecalhoEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    background-color: #00000070;
    padding: 0.8em;
`
const Profile = styled.div`
/* styled(Link) */
    display: flex;
    align-items: center;
    gap: 1em;
    img{
        width: 45px;
    }
`
const LinksContainer = styled.ul`
    display: flex;
    gap: 1em;
`


const Cabecalho = ()=>{
    return(
        <CabecalhoEstilizado>
            <Profile to='/'>
                <img src={profileIcon} alt="" />
                <p>Guilherme Rhayan</p>
            </Profile>

            <LinksContainer>
                <li>Home</li>
                <li>About</li>
            </LinksContainer>


        </CabecalhoEstilizado>
    )
}
export default Cabecalho