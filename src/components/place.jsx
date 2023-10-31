import { Flex } from "@radix-ui/themes"
import PlaceJouee from "./placeJouee"
import PlaceVide from "./placeVide"

const Place = ({couleur, playable, useCallback, ind}) => {

    const backInd = () => {
        if (playable) {useCallback(ind)};
    }

    return (
        <Flex width="8" height="8" mx="4" justify="center" align="center" style={{backgroundColor: 'grey'}} className=" rounded-lg cursor-pointer" onClick={backInd}>
            {couleur == 'NaC' ? <PlaceVide /> : <PlaceJouee couleur={couleur} />}  
        </Flex> 
    )

}

export default Place
