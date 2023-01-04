import {Grid, Typography} from '@mui/material'

export default function Shower(props){

    return (
        <>
        <Grid item xs={12} md={12} lg={6}>
            <Typography variant='body1' sx={{color:'gray'}} textAlign='center'>{props.titulo}</Typography>
            <Typography>{props.valor}</Typography>    
        </Grid>
        </>
    )
}