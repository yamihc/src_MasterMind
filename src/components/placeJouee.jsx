import { Box } from "@radix-ui/themes"
const PlaceJouee = ({couleur}) => {

return (
    <Box width="7" height="7" className=" rounded-full" style={{backgroundColor: `${couleur}`}}></Box> 
)
}
export default PlaceJouee