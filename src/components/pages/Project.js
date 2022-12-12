import styles from './Project.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Message from '../layout/Message'
import ProjectForm from '../project/ProjectForm'

function Project() {
    const { id } = useParams()
    
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(()=> {

        setTimeout(() => {
            //rota para buscar os projetos
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json'
                },            
            })
                .then(resp => resp.json())
                .then((data) => {
                    setProject(data)
                })
                .catch((err) => console.log(err))
        },1000)
    },[id])

    function editPost(project){
        setMessage('')
        //budget validaton
        if(project.budget < project.cost){
            setMessage('O orçamentoo não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH', //PATCH atualiza somente o que for mudado diferente do update que atualiza tudo
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(project)//Enviando os dados
        })
            .then(resp => resp.json())
            .then((data) => {
                setProject(data)
                setShowProjectForm(false)
                setMessage('Projeto editado com sucesso!')
                setType('success')
            })
            .catch(err => console.log(err))
    }

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }

    return(
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Categoria:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento:</span> R${project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado:</span> R${project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <ProjectForm 
                                        handleSubmit={editPost}
                                        btnText='Concluir Edição'
                                        projectData={project}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={styles.service_form_container}>
                            <h2>Adicione um serviço:</h2>
                            <button className={styles.btn} onClick={toggleServiceForm}>
                                {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                            </button>
                            <div className={styles.project_info}>
                                {showServiceForm && <div>Formulário do serviço</div>}
                            </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass='start'>
                            <p>Itens de Serviços</p>
                        </Container>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Project