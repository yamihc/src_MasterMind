import { Flex } from "@radix-ui/themes"
import Place from "./place"
import Indices from "./indices"


const AffProgression = ({ligne,blEtNo}) => {


return (
    <>
        <Flex mb="3">
            {ligne.map( (couleur,i) => <Place key={i} couleur={couleur} playable={false} />)}
            <Indices nbBlanc={blEtNo.blanc} nbNoir={blEtNo.noir} larg={ligne.length }/>
        </Flex>

    </>
)
}
export default AffProgression