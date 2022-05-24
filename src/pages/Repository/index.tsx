import React, {useEffect} from 'react';
import { Header, Issues, RepositoryInfo } from './styles';
import { FiChevronLeft, FiChevronsRight } from 'react-icons/fi';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { useRouteMatch, Link } from 'react-router-dom';


interface RepositoryParams {
    parametrosrepositorio: string
}

const Repository: React.FC = () => {

    //useRouteMatch para passar paramatros para outra tela
    const { params } = useRouteMatch<RepositoryParams>();

    useEffect (() =>{ 
        // api.get (`repos/${params.parametrosrepositorio}`).then(
        // response => {
        //     console.log('olaaaaa' , response.data)
        // })
        // api.get (`repos/${params.parametrosrepositorio}/issues`).then(
        // response => {
        //     console.log('issuas aiiiii' , response.data)
        // })




    },[params.parametrosrepositorio])

    return (
        <>
            <Header>
                <img src={logoImg} alt='Github Explorer' />

                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar

                </Link>

            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://avatars.githubusercontent.com/u/84046012?v=4" alt="John Santos" />
                    <div>
                        <strong> rocketseat/unform</strong>
                        <p> descrição do repositorio</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>



                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>


                    <li>
                        <strong>67</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>

            </RepositoryInfo>

            <Issues>
                <Link to= 'gxhxfghs'>
             
                    <div>
                    <strong>dfgdg</strong>
                    <p>dfagas</p>
                    </div>

                    <FiChevronsRight size={20} />
                </Link >
            </Issues>
        </>
    )
}

export default Repository