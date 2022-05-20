import React from 'react'

import logoImg from '../../assets/logo.svg'
import Repository from '../Repository'

import { Title, Form , Repositories} from './styles'

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form> 

            <input placeholder='Digite o nome do repositório'/>
            <button type = "submit"> Pesquisar </button>
            </Form>

<Repositories>
<a href='test' > 
<img
src="https://avatars.githubusercontent.com/u/84046012?v=4"
alt='John Santos'
/>
</a>
</Repositories>

        </>
    )
}

export default Dashboard