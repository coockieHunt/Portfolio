import * as Project from './style'

import * as CardComponent from "../../components/card/card"


function ProjectPage(){
    return(
        <Project.Container>
            <Project.CardContainer>
                <CardComponent.Card title="Projet 1"/>
                <CardComponent.Card title="Projet 2"/>
                <CardComponent.Card title="Projet 3"/>
                <CardComponent.Card title="Projet 4"/>
                <CardComponent.Card title="Projet 5"/>
                <CardComponent.Card title="Projet 6"/>
            </Project.CardContainer>
        </Project.Container>
    )
}

export default ProjectPage