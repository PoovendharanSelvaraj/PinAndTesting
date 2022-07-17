import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react'
import styles from "./Container1.module.css"

const Container1 = () => {
  return (
    <div style={{width:'100%'}}>
        <h1>Container1</h1>
        <Grid
  height={'500px'}
  border={"1px solid red"}
  templateColu={'25% 50% 25%'}
  className={styles.grids}
 
  gap={4}
  
>
 
  <GridItem colSpan={1} bg='blue' area={'nav'}/>
  <GridItem colSpan={1} bg='orange' area={'content'} />
  <GridItem colSpan={1} bg='red' area={'widget'} />
 
</Grid>
    </div>
  )
}

export default Container1