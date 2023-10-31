import { Box, Flex } from "@radix-ui/themes"
import { useContext, useEffect, useRef } from "react"
import Pion from "./pion"
import { ActivColor } from "../contexts/level"

const Pions = ({colorCodes}) => {

    const [activColor,setActivColor] = useContext(ActivColor);

    const refTopPion = useRef();
    const refBottomPion = useRef();

    const alphaRot = (ind) => {

        const alpha = 0 + (360/colorCodes.length) * ind;

        return `rotate(${alpha}deg)`
    }

    useEffect( () => {
        refTopPion.current.style.backgroundColor = activColor;
        refBottomPion.current.style.backgroundColor = activColor;
    }, [activColor])

    
    return (
        <>

            <Flex justify="center" align="center" className="w-auto h-full rotate-45 -z-10">
            
                <Box ref={refTopPion} width="6" height="9" className="rounded-tl-full rounded-bl-full border-solid border-4 border-slate-950"></Box>
                <Box ref={refBottomPion} width="8" height="6" className="rounded-tr-full rounded-br-full border-l-0 border-solid border-4 border-slate-950"></Box>

            </Flex>
            {colorCodes.map( (couleur,i) => <Pion key={i} couleur={couleur} angleRot={alphaRot(i)} /> )}

        </>
    )
}

export default Pions