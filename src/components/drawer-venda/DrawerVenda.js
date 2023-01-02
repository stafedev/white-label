import { Drawer, Box, Typography, Grid,} from '@mui/material'
import { BsCreditCard2Front } from 'react-icons/bs'

export default function DrawerVenda (props){

    return (
        <>
            <Drawer anchor='right'  open={props.isDrawerOpen} onClose={() => props.setIsDrawerOpen(false)} BackdropProps={{style: {backgroundColor: '#f000'}}}>
                <Box p={2} width='650px' textAlign='center' role='presentation'>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12} >
                            Detalhe da Venda    
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            Valor da Venda    
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            Valor da Liquída
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            Taxa da Venda
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            Taxa de Antecipação
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            Tipo de Venda
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                            <BsCreditCard2Front/>
                        </Grid>
                        <Grid container item xs={12} md={12} lg={12} >
                            <Grid item>Dados da Venda
                            </Grid>
                            <Grid item>
                                <svg height="80" width="300">
                                    <g fill="none" stroke="black">
                                        <path strokeWidth="2" d="M5 20 l215 0" />
                                    </g>
                                </svg> 
                            </Grid>
                        <Grid container alignItems={'center'} item xs={12} md={12} lg={12} >
                            <Grid item xs={'auto'}>Dados do Vendedor</Grid>
                            <Grid item sx={{ flex: '1 0 0%', border: '1px solid #000', }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Drawer>
        </>
    )
}