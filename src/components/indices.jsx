import { Box, Flex } from "@radix-ui/themes"

const Indices = ({nbBlanc,nbNoir,larg}) => {

   
    return (
        <Flex direction="column" justify="center" className=" rounded-lg bg-amber-600 h-[48]" style={{width: `${20 * larg}px`}} >
            <Flex align="center" ml="2" mb="2">
                {(new Array(nbBlanc)).fill(0).map( (rien,i) => <Box key={i} width="4" height="4" mr="1" className="rounded-full bg-gray-100" ></Box>)}
            </Flex>
            <Flex align="center" ml="2">
                {(new Array(nbNoir)).fill(0).map( (rien,i) => <Box key={i} width="4" height="4" mr="1" className="rounded-full bg-gray-900" ></Box>)}
            </Flex>
        </Flex>

    )
}

export default Indices