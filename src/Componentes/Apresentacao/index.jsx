import FotoPerfil from '../../assets/FotoPerfil.png'
import styled from "styled-components"

const ApresentacaoEstilizada = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: 1em;
    h2{
        color: #FFBD38 ;
        font-size: 65px;
        font-weight: bold;
        padding: 0.5em;
    }
    p{
        color: white;
    }
    div{
        width: 100%;
        max-width: 1300px;

        display: flex;
        align-items: center;
        gap: 10em;
        img{
            width: 330px;
        }
        div{
            display: flex;
            flex-direction: column;
            gap: 2em;
            width: 700px;
            max-width: 100%;
            p{
                font-size: 24px;
                width: 100%;
            }
        }
    }
`

const Apresentacao = () => {
    return (
        <ApresentacaoEstilizada>
            <h2>Hello There</h2>
            <div>
                <img src={FotoPerfil} alt="Foto de perfil do Guilherme" />
                <div>
                    
                    <p>Meu nome é Guilherme Rhayan,prazer em conhece-lo(a)!</p>
                    <p>Tenho 24 e estou finalizando meu bacharel em Adiministração pela Universidade Federal do Para(UFPA).</p>
                    <p>Durante a minha jornada já atuei em diversas áreas , desde professor particular de música até Gerente de Negócios e Serviços em um Banco de prestígio internacional.</p>
                    <p>Entretanto foi na área do desenvolvimento e programação que achei uma grande paixão profissional e acadêmica, atualmente estou nesta transição de carreira enquanto finalizo minha graduação para logo em seguida começar ou outra graduação na tecnologia ou uma pós-graduação na mesma área.</p>
                </div>

            </div>
        </ApresentacaoEstilizada>
    )
}
export default Apresentacao