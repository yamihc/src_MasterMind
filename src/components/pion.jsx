import { Box } from "@radix-ui/themes";
import { ActivColor } from "../contexts/level";
import { useContext } from "react";

const Pion = ({couleur, angleRot}) => {

    const [_,setActivColor] = useContext(ActivColor);

    const updActivColor = () => {
        setActivColor(couleur);
    }

    return (
        
        <Box  className=" absolute top-[4%] left-[42%] translate-x-[-50%] h-44" style={{transform: `${angleRot}`, transformOrigin: 'bottom center' }}  >
            <Box className=" w-[100%] h-[100%] ">
                <Box width="9" height="9" className="rounded-full cursor-pointer" style={{backgroundColor: `${couleur}`}} onClick={updActivColor}></Box>
            </Box>
        </Box>

    )
    
}

export default Pion