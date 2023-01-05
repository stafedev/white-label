import { Grid, Typography } from '@mui/material'
import Shower from "./Shower"

export default function InfoVenda (props){

    return (
        <>
            <Grid container item xs={12} md={12} lg={12} mb={3}>
                <Grid item xs={'auto'}>
                    <Typography sx={{color:'gray', fontWeight:'bold'}}>Dados do Venda</Typography>
                </Grid>
                <Grid item sx={{ height:'0px', marginY:'auto', marginLeft: '8px', flex: '1 0 0%', border: '1px solid #0003' }} />
                <Grid container item spacing={3} m={1}>
                    <Shower titulo={'Portador do Cartao'} valor={props.portador}/>
                    <Shower titulo={'Modo Captura'} valor={props.captura}/>
                    <Shower titulo={'Número do Cartão'} valor={props.numero}/>
                    <Shower titulo={'Validade do cartão'} valor={props.validade}/>
                    <Shower titulo={'Código de Autorização:'} valor={props.codAutorizacao}/>
                </Grid>
            </Grid>    
        </>
    )
}