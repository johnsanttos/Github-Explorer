import React, { useEffect, useState } from 'react';
import { Header, Issues, RepositoryInfo } from './styles';
import { FiChevronLeft, FiChevronsRight } from 'react-icons/fi';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { useRouteMatch, Link } from 'react-router-dom';


interface RepositoryParams {
    parametrosrepositorio: string
}

interface RepositoryReq {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number
    owner: {
        login: string;
        avatar_url: string
    }
}

interface Issue {
    id: string
    title: string;
    html_url: string;
    user: {
        login: string
    }
}

const Repository: React.FC = () => {

    const [repository, setRepository] = useState<RepositoryReq | null>(null);
    const [issues, setIssues] = useState<Issue[]>([])


    //useRouteMatch para passar paramatros para outra tela
    const { params } = useRouteMatch<RepositoryParams>();

    useEffect(() => {
        api.get(`repos/${params.parametrosrepositorio}`).then(
            response => {
                setRepository(response.data)
            })
        api.get(`repos/${params.parametrosrepositorio}/issues`).then(
            response => {
                setIssues (response.data)
            })


        // Outra forma de fazer a requisição por promisse
        // async function loadData (): Promise <void> {

        //     const [repository, issues] = await Promise.all ([
        //     api.get (`repos/${params.parametrosrepositorio}`),
        //     api.get (`repos/${params.parametrosrepositorio}/issues`),
        // ])
        // console.log ('olhaaaa' , repository)
        // console.log ('bouaaaa' , issues)

        // }

        // loadData ();

    }, [params.parametrosrepositorio])

    return (
        <>
            <Header>
                <img src={logoImg} alt='Github Explorer' />

                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar

                </Link>

            </Header>

            {repository && (

                <RepositoryInfo>
                    <header>
                        <img src= {repository.owner.avatar_url} alt={repository.owner.login} />
                        <div>
                            <strong> {repository.full_name}</strong>
                            <p> { repository.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span> Stars </span>
                        </li>



                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>


                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues abertas</span>
                        </li>
                    </ul>

                </RepositoryInfo>



            )}
    
            <Issues>
                { issues.map( issue =>(
                    <a  key={issue.id} href={issue.html_url}>

                    <div>
                        <strong>{issue.title}</strong>
                        <p> {issue.user.login} </p>
                    </div>

                    <FiChevronsRight size={20} />
                </a>
                ))

                }
            </Issues>
        </>
    )
}

export default Repository