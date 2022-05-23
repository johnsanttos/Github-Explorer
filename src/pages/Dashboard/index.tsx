import React, { useState, FormEvent, useEffect } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link} from 'react-router-dom'
import api from '../../services/api'
import logoImg from '../../assets/logo.svg'
import { Title, Form, Repositories, Error } from './styles'
import Repository from '../Repository';



interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string
    }
}



const Dashboard: React.FC = () => {

    const [newRepo, setNewRepo] = useState('')
    //temos que tipar todo o estado que nao for padrão, temos que tipar de array e objetos 
    const [inputError, setInputError] = useState('')

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        const storagedRepositories = localStorage.getItem('GithubExplorer:repositories');
        console.log(storagedRepositories)
        setRepositories(JSON.parse(storagedRepositories || '[]'));
    }, []);

    useEffect(() => {
        localStorage.setItem('GithubExplorer:repositories', JSON.stringify(repositories));

    }, [repositories]);


    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()
        //console.log(newRepo)
        // Adição de um novo repositorio
        // consumir API do Github
        // salvar novo repositorio no estado
        if (!newRepo) {
            setInputError('Digite o ator/nome do repositório');
            return;
        }

        try {
            const response = await api.get<Repository>(`repos/${newRepo}`);
            // console.log(response.data)
            const repository = response.data

            console.log('resultado', repository)

            setRepositories([...repositories, repository])
            setNewRepo('')
            setInputError('')
        }
        catch (err) {
            setInputError('Erro na busca do repositório')
        }

    }

    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form
                hasError={!!inputError}
                onSubmit={handleAddRepository}>

                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder='Digite o nome do repositório'
                />
                <button type="submit"> Pesquisar </button>
            </Form>
            {/* Forma de if simplificada; Utilizamos o && e-comercial porque a segunda parte da função so vai ser executada quando a primeira parte for satisfeita */}
            {inputError && <Error> {inputError} </Error>}

            <Repositories>
                {repositories.map((mapRepo) => {
                    return (
                        <>
                            <Link key={mapRepo.full_name} to={`/repository/${mapRepo.full_name}`}>
                                <img src={mapRepo.owner.avatar_url} alt={mapRepo.owner.login} />
                                <div>
                                    <strong>{mapRepo.full_name}</strong>
                                    <p>{mapRepo.description}</p>
                                </div>

                                <FiChevronRight size={20} />
                            </Link >


                        </>
                    )
                })}
            </Repositories>

        </>
    )
}

export default Dashboard