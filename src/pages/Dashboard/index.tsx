import React, { useState, FormEvent } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'
import logoImg from '../../assets/logo.svg'
import { Title, Form, Repositories,Error } from './styles'
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
    const [repositories, setRepositories] = useState <Repository []>([])

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()
        //console.log(newRepo)
        // Adição de um novo repositorio
        // consumir API do Github
        // salvar novo repositorio no estado
        if (!newRepo) {
            setInputError ('Digite o ator/nome do repositório');
            return;
        }

      try {
        const response = await api.get <Repository>(`repos/${newRepo}`);
        // console.log(response.data)
        const repository = response.data

        console.log ( 'resultado' , repository)

        setRepositories([...repositories, repository])
        setNewRepo ('')
        setInputError('')
      }
      catch (err) {
        setInputError ('Erro na busca do repositório')
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

           {inputError && <Error> {inputError} </Error> }

            <Repositories>
               {repositories.map (repository =>(
                    <a key={repository.full_name} href='test' >
                    <img
                        src={repository.owner.avatar_url}
                        alt= {repository.owner.login}
                    />
                    <div>
                        <strong> {repository.full_name}</strong>
                        <p> {repository.description}</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
               ))}
            </Repositories >


        </>
    )
}

export default Dashboard