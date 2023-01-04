import {Grid, Box, Button, Typography} from '@mui/material'
import {BsCreditCard2Front} from 'react-icons/bs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Shower from './Shower'
import InfoVenda from './InfoVenda'
import InfoVendedor from './InfoVendedor'

export default function DetalheVenda (props){

    return (
        <Box p={6} width='650px' role='presentation'>
            <Grid container item spacing={4} >
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant='h4' sx={{color:'gray'}}>Detalhe da Venda</Typography>    
                </Grid>
                <Shower titulo={'Valor Venda'} valor={props.valorVenda}/>
                <Shower titulo={'Valor Liquído'} valor={props.valorLiquido}/>
                <Shower titulo={'Taxa da Venda'} valor={props.taxaVenda}/>
                <Shower titulo={'Taxa de Antecipação'} valor={props.taxaAntecipacao}/>
                <Shower titulo={'Tipo Venda'} valor={props.tipo}/>

                <Grid item xs={12} md={12} lg={6}>
                    {props.tipo==='Débito'?<BsCreditCard2Front size={40}/>:<FontAwesomeIcon style={{color:'red'}} icon="fa-brands fa-pix" />}
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant='body1'align={'center'} sx={{color:'gray'}}>ID da Transação</Typography>
                </Grid>
            <Grid container item alignItems={'center'} xs={12} md={12} lg={12}>                
                <Button variant='outlined' sx={{flex:'1 0 0%'}} size='medium'>Estorno Venda</Button>  
            </Grid>
                
                <Grid container item xs={12} md={12} lg={12} >
                    <Grid container alignItems={'center'} item xs={12} md={12} lg={12} >
                        <InfoVenda/> 
                        <InfoVendedor/>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )

}


