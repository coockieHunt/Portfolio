import * as Project from './style'

import * as CardComponent from "../../components/card/CardComponent"


function ProjectPage(){
    let thumbnail = {
        'src' : `https://picsum.photos/id/${Math.floor(Math.random() * 500) + 1}/200`,
        'alt' : 'lorem ipsum'
    }

    let Text = "Consequat qui cupidatat officia voluptate eiusmod aute."
    
    return(
        <Project.Container>
            <Project.CardContainer>
                <CardComponent.Card title="Projet 1" thumbnail={thumbnail} text={Text}/>
                <CardComponent.Card title="Projet 2" thumbnail={thumbnail} text={Text}/>
                <CardComponent.Card title="Projet 3" thumbnail={thumbnail} text={Text}/>
                <CardComponent.Card title="Projet 4" thumbnail={thumbnail} text={Text}/>
                <CardComponent.Card title="Projet 5" thumbnail={thumbnail} text={Text}/>
                <CardComponent.Card title="Projet 6" thumbnail={thumbnail} text={Text}/>
            </Project.CardContainer>
        </Project.Container>
    )
}

export default ProjectPage