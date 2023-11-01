import { useContext } from 'react';
import { Level } from '../contexts/level';
import { Button, Text, Flex } from '@radix-ui/themes';

import styles from './css/nbcouleur.module.css'

const Reglages = () => {

    const [level,setLevel] = useContext(Level);

    const setNbEssaisInc = () => {
        let nextLevel = {...level};
        if (nextLevel.nbEssais < 16 ) {nextLevel.nbEssais++;}
        saveSetting(nextLevel);
    }

    const setNbEssaisDec = () => {
        let nextLevel = {...level};
        if (nextLevel.nbEssais > 5 ) {nextLevel.nbEssais--;}
        saveSetting(nextLevel);
    }

    const setLgSequenceInc = () => {
        let nextLevel = {...level};
        if (nextLevel.lgSequence < 9 ) {nextLevel.lgSequence++;}
        saveSetting(nextLevel);
    }

    const setLgSequenceDec = () => {
        let nextLevel = {...level};
        if (nextLevel.lgSequence > 4 ) {nextLevel.lgSequence--;}
        saveSetting(nextLevel);
    }

    const setNbCouleursInc = () => {
        let nextLevel = {...level};
        if (nextLevel.nbCouleurs < 12 ) {nextLevel.nbCouleurs++;}
        saveSetting(nextLevel);
    }

    const setNbCouleursDec = () => {
        let nextLevel = {...level};
        if (nextLevel.nbCouleurs > 5 ) {nextLevel.nbCouleurs--;}
        saveSetting(nextLevel);
    }

    function saveSetting(nextLevel) {
        localStorage.removeItem('Yamihc_MasterMind_Setting');
        localStorage.removeItem('Yamihc_MasterMind_Progression');
        localStorage.removeItem('Yamihc_MasterMind_Combinaison');
        setLevel(nextLevel);
        localStorage.setItem('Yamihc_MasterMind_Setting',JSON.stringify(level));
    }

 

    return(


        <Flex className='justify-around'>
            <Flex align="center" className='border-4 p-3 rounded-xl' >
                <Flex direction="column" >
                    <Button  variant='surface' disabled={(level.nbEssais > 15 )} className='rounded-b-none mt-3 w-16 h-16 text-4xl' onClick={setNbEssaisInc}>+</Button>
                    <Text className=' bg-neutral-200 py-4' size="8" align="center" as="div" weight="bold">{level.nbEssais}</Text>
                    <Button  variant='surface' disabled={(level.nbEssais < 6 )} className='mb-3 rounded-t-none w-16 h-16 text-6xl' onClick={setNbEssaisDec}>-</Button>
                </Flex>
                <Flex mt="3" ml="3" >
                    <Button size="4" variant='surface' disabled={(level.lgSequence < 5)} className='rounded-r-none h-16 text-6xl' onClick={setLgSequenceDec}>-</Button>
                    <Text className=' bg-neutral-200 py-4 h-16 w-16' size="8" align="center" as="div" weight="bold">{level.lgSequence}</Text>
                    <Button size="4" variant='surface' disabled={(level.lgSequence > 8)} className='rounded-l-none h-16 text-4xl' onClick={setLgSequenceInc}>+</Button>
                </Flex>
            </Flex>

            <Flex direction="column" className={styles.chColor} >
                <Button variant='surface' disabled={(level.nbCouleurs > 11)} className=' p-8 mt-3 text-4xl rounded-full ' onClick={setNbCouleursInc}>+</Button>
                <Text className='p-6  h-18 w-18 text-4xl' align="center" as="div" weight="bold">{level.nbCouleurs}</Text>
                <Button variant='surface' disabled={(level.nbCouleurs < 6)} className=' p-8 mb-3 text-4xl rounded-full ' onClick={setNbCouleursDec}>-</Button>
            </Flex>
               
        </Flex>

    )
}

export default Reglages