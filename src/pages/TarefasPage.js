import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import {Alert} from 'reactstrap';


const TAREFAS = [
    {
        id: 1,
        titulo: 'Aprendendo React',
        descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Manduma pindureta quium dia nois paga. A ordem dos tratores não altera o pão duris. Detraxit consequat et quo num tendi nada. '
    },
    {
        id: 2,
        titulo: 'Aprendendo JavaScript',
        descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Manduma pindureta quium dia nois paga. A ordem dos tratores não altera o pão duris. Detraxit consequat et quo num tendi nada. '
    },
    {
        id: 3,
        titulo: 'Aprendendo Programação',
        descricao: 'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent. Manduma pindureta quium dia nois paga. A ordem dos tratores não altera o pão duris. Detraxit consequat et quo num tendi nada. '
    },
]

class TarefasPage extends Component {

    render() {
        const tarefasLink = TAREFAS.map((tarefa,index)=> {
            return(
                <li>
                    <Link to={'/tarefas/' + tarefa.id}>{tarefa.titulo}</Link>
                </li>
            )
        })
        return (
            <div>
                <Alert color="primary">Lista de Tarefas</Alert>
                <ul>
                    {tarefasLink}
                </ul>
                <Route path="/tarefas/:tarefaId"
                       render={props => {
                           const tarefaId = Number(props.match.params.tarefaId);
                           const tarefa = TAREFAS.find(tar => tar.id === tarefaId);
                           return (
                               <div>
                                   {tarefa.descricao}
                               </div>
                           )
                       }}
                />
            </div>
        )
    }
}

export default TarefasPage;