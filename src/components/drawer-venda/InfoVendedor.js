import { Grid, Typography } from '@mui/material'
import Shower from "./Shower"

export default function InfoVendedor (props){

    return (
        <>
            <Grid container item xs={12} md={12} lg={12}>
                <Grid item xs={'auto'}>
                    <Typography sx={{color:'gray', fontWeight:'bold'}}>Dados do Vendedor</Typography>
                </Grid>
                <Grid item sx={{ height:'0px', marginY:'auto', marginLeft: '8px', flex: '1 0 0%', border: '1px solid #0003' }} />
                <Grid container item spacing={3} m={1}>
                    <Shower titulo={'Nome do Vendedor'} valor={props.portador}/>
                    <Shower titulo={'CNPJ'} valor={props.captura}/>
                    <Shower titulo={'ID do Vendedor'} valor={props.numero}/>
                </Grid>
            </Grid>    
        </>
    )
}