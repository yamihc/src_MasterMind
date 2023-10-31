import { Flex } from "@radix-ui/themes"
import Place from "./place"

const AffLignesVides = ({ligne}) => {

    return (
        <>
            <Flex mb="3">
                {ligne.map( (couleur,i) => <Place key={i} couleur={couleur} playable={false} />) }
            </Flex>
        </>
    )
}

export default AffLignesVides