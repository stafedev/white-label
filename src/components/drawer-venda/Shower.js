import {Grid, Typography} from '@mui/material'

export default function Shower(props){

    return (
        <>
            <Grid container item alignItems={'left'} xs={12} md={12} lg={6}>
                <Grid item>
                    <Typography variant='body1'  textAlign='center'>{props.titulo}</Typography>
                    <Typography>{props.valor}</Typography>    
                </Grid>
            </Grid>
        </>
    )
}