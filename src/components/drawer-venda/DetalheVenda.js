import {Tyṕography, Grid, Box, Button, Typography} from '@mui/material'
import {BsCreditCard2Front} from 'react-icons/bs'
import Shower from '../shower/Shower'


const mockUp = {
    valorVenda: 10,
    valorLiquido: 8,
}


export default function DetalheVenda (mockUp){

    return (
        <Box p={2} width='650px' textAlign='center' role='presentation'>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12} >
                            <Typography variant='h4'>Detalhe da Venda</Typography>    
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <Typography variant='h6' sx={{color:'gray'}}>Valor da Venda</Typography>
                            <Typography>{mockUp.valorVenda}</Typography>    
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <Typography variant='h6' sx={{color:'gray'}}>Valor Liquído</Typography>
                            <Typography>{mockUp.valorLiquido}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <Typography variant='h6' sx={{color:'gray'}}>Taxa da Venda</Typography>
                            <Typography>{mockUp.taxaVenda}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <Typography variant='h6' sx={{color:'gray'}}>Taxa de Antecipação</Typography>
                            <Typography>{mockUp.taxaAntecipacao}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <Typography variant='h6' sx={{color:'gray'}}>Tipo de Venda</Typography>
                            <Typography>{mockUp.tipo}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <BsCreditCard2Front size={40}/>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            ID da Transação
                        </Grid>
                    <Grid container alingItems={'center'} item xs={12} md={12} lg={12}>
                        
                        <Button variant='outlined' sx={{flex:'1 0 0%'}} size='medium'>Estorno Venda</Button>
                        
                    </Grid>
                    
                    <Grid container item xs={12} md={12} lg={12} >
                        <Grid container alignItems={'center'} item xs={12} md={12} lg={12} >
                            <Grid item xs={'auto'}>Dados da Venda</Grid>
                            <Grid item sx={{flex: '1 0 0%', border: '1px solid gray',}}/> 
                        </Grid>
                        <Grid container alignItems={'center'} item xs={12} md={12} lg={12} >
                            <Grid item xs={'auto'}>Dados do Vendedor</Grid>
                            <Grid item sx={{ flex: '1 0 0%', border: '1px solid gray', }} />
                        </Grid>
                    </Grid>
                    </Grid>
                </Box>
    )

}


