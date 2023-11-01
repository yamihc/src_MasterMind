import { Box, Button, Text, Flex } from '@radix-ui/themes'
import { useState, useEffect } from 'react'
import { Level, ActivColor } from './contexts/level'
import Pions from './components/pions'
import Reglages from './components/reglages'
import Grille from './components/grille'

import './App.css'



function resetGame() {
  localStorage.removeItem('Yamihc_MasterMind_Progression');
  localStorage.removeItem('Yamihc_MasterMind_Combinaison');
  location.reload();
}




function App() {



const [level,setLevel] = useState(getSetting())

function getSetting() {
  const saveSet = localStorage.getItem('Yamihc_MasterMind_Setting');
  if (saveSet == null) {
    return {
      nbEssais: 7,
      lgSequence: 5,
      nbCouleurs: 6
    }
  }
  return JSON.parse(saveSet);
}


const [activColor, setActivColor] = useState('rgba(0, 0, 0, 0)')

const colorCodes = [
  '#FF0000',  // Rouge
  '#FFFF00',  // Jaune
  '#008000',  // Vert
  '#0000FF',  // Bleu
  '#FFA500',  // Orange
  '#800000',  // Marron

  '#800080',  // Violet
  '#FFC0CB',  // Rose
  '#00FFFF',  // Cyan
  '#008080',  // Teal
  '#FFFFFF',  // Blanc
  '#000000'   // Noir
];


const random = (nb) => {
  return colorCodes[Math.floor(Math.random()*nb)]
}

const newCombinaison = () => {
  const newComb = [];
  while (newComb.length < level.lgSequence) {newComb.push(random(level.nbCouleurs)) }
  localStorage.setItem('Yamihc_MasterMind_Combinaison',JSON.stringify(newComb))
  return newComb;
}

const [combinaison,setCombinaison] = useState(getCombinaison());

function getCombinaison() {
  const saveCombi = localStorage.getItem('Yamihc_MasterMind_Combinaison');
  if (saveCombi == null) {
    return newCombinaison();
  }
  return JSON.parse(saveCombi);
}

const [setDialog,setSetDialog] = useState(false);
const [infoDialog,setInfoDialog] = useState(false);



useEffect( () => {
  setCombinaison(getCombinaison()); 
  setActivColor('rgba(0, 0, 0, 0)');
}, [level]);



const cssModalSetting = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, 50%)',
  zIndex: '1',
  backgroundColor: '#F1F1F1'
}


  return (
    <>
    <dialog open={setDialog}>
    <Box className='rounded-3xl' style={cssModalSetting}>
  <Level.Provider value={[level,setLevel]}>
            <Reglages />
  </Level.Provider>
    </Box>
    </dialog>

   

<ActivColor.Provider value={[activColor, setActivColor]}>
  { !infoDialog ? 
    <Flex gap="9" justify="center" align="center" className='h-[100vh] w-[80%] m-auto'>
        <Flex direction="column" justify="start" height="98%" ml="9" mt="3" className=' rounded-3xl shadow-2xl'>
         
            <Grille nbLignes={level.nbEssais} combinaison={combinaison} />
        </Flex>
       
        <Flex  justify="between" direction="column" >
         
          <Box className=' w-96 h-96 bg-slate-300 rounded-full relative mt-[10vh] shadow-2xl' >
            <Pions colorCodes={colorCodes.slice(0,level.nbCouleurs)} />
          </Box>
          <Flex direction='column' align='center'>
            <Flex width='100%' justify='center' className='my-24'>
              <Button className={` w-24 h-24 mx-4 cursor-pointer ${!setDialog ? 'bg-cyan-200' : 'bg-orange-400' }`}   onClick={() => {setSetDialog(!setDialog)}}>
                <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"/>
                </svg>
              </Button>
              <Button className={` w-24 h-24 mx-4 cursor-pointer ${!infoDialog ? 'bg-cyan-200' : 'bg-orange-400' }`} onClick={() => setInfoDialog(!infoDialog)}>
                <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
              </Button>
              <Button className={` w-24 h-24 mx-4 cursor-pointer bg-red-400`} onClick={resetGame}>
              <svg className=" text-gray-800 dark:text-white" aria-hidden="true"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
              </Button>
            </Flex>
            <Text className=' w-[75%] bg-zinc-500 text-gray-200 text-center text-2xl p-4 rounded-full cursor-pointer' onClick={() => window.history.back()}>Retour à l'accueil</Text>
          </Flex>
        </Flex>
    </Flex>
    :
    <Flex direction='column' align='center' justify='center' className='h-[100vh]' >
    <img src='./src/assets/reglesdujeu.png' alt="illustration des règles du jeu" />
    <Button className={` w-24 h-24 mx-4 cursor-pointer ${!infoDialog ? 'bg-cyan-200' : 'bg-orange-400' }`} onClick={() => setInfoDialog(!infoDialog)}>
              <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
              </svg>
            </Button>
    </Flex>
  }

</ActivColor.Provider>

    </>
  )
}

export default App
