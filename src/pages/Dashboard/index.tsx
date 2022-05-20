import React, { useState, FormEvent } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'
import logoImg from '../../assets/logo.svg'

interface Repository {
full_name: string;

}

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {

    const [newRepo, setNewRepo] = useState('')
    //temos que tipar todo o estado que nao for padrão, temos que tipar de array e objetos 
    const [repositories, setRepositories] = useState([])

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()
        console.log(newRepo)
        // Adição de um novo repositorio
        // consumir API do Github
        // salvar novo repositorio no estado

        const response = await api.get(`repos/${newRepo}`);
        console.log(response.data)

        const repository = response.data

        setRepositories([...repositories, repository])

    }

    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form onSubmit={handleAddRepository}>

                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder='Digite o nome do repositório'
                />
                <button type="submit"> Pesquisar </button>
            </Form>

            <Repositories>
                <a href='test' >
                    <img
                        src="https://avatars.githubusercontent.com/u/84046012?v=4"
                        alt='John Santos'
                    />
                    <div>
                        <strong> rocketseat/unform </strong>
                        <p> Performance-focused API for React forms 🚀</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories >

            <Repositories>
                <a href='test' >
                    <img
                        src="https://avatars.githubusercontent.com/u/84046012?v=4"
                        alt='John Santos'
                    />
                    <div>
                        <strong> rocketseat/unform </strong>
                        <p> Performance-focused API for React forms 🚀</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories >

            <Repositories>
                <a href='test' >
                    <img
                        src="https://avatars.githubusercontent.com/u/84046012?v=4"
                        alt='John Santos'
                    />
                    <div>
                        <strong> rocketseat/unform </strong>
                        <p> Performance-focused API for React forms 🚀</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories >

        </>
    )
}

export default Dashboard