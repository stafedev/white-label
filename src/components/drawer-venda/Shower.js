import {Grid, Typography} from '@mui/material'

export default function Shower(props){

    return (
        <>
            <Grid container item alignItems={'left'} xs={12} md={12} lg={6}>
                <Grid item>
                    <Typography variant='body2' sx={{color:'gray'}} textAlign='center'>{props.titulo}</Typography>
                    <Typography variant='body1' sx={{color:'#696969' }}>{props.valor}</Typography>    
                </Grid>
            </Grid>
        </>
    )
}