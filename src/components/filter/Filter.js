import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import { Grid, TextField, FormControl, Typography, Button } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { borderRadius } from '@mui/system';

export default function Filter(props){

   const ButtonStyled = styled(Button)(({ theme }) => {
    console.log(theme)
    return ({
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.getContrastText(theme.palette.grey[300]),
    '&:hover': {
        backgroundColor: theme.palette.grey[600],
        color: theme.palette.getContrastText(theme.palette.grey[600]),
    }
   })});
       

    const [filters, setFilters] = useState({
        startDate: dayjs('2022-1-1')
    })

    const handleStartDataChange = e => setFilters({
        ...filters,
        startDate: e
    });

    return (
        <Grid container item spacing={3} alignItems={'center'}>
            <Grid item>
                <Typography>
                   {(() => { 
                        const hoje = new Date();
                        const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
                        return `Hoje, ${hoje.getDate()} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`;
                    })()}
                </Typography>
            </Grid>
            <Grid item>
                <ButtonStyled variant='contained'>Ontem</ButtonStyled>
            </Grid>
            <Grid item>
                <Button variant='contained'>Semana</Button>
            </Grid>
            <Grid item>
                <Button variant='contained'>Mês</Button>
            </Grid>
            <Grid item>
                <Button variant='contained'>Ano</Button>
            </Grid>
            <Grid item>
                <Typography>OU</Typography>
            </Grid>
            <Grid item>
            <LocalizationProvider dateAdapter={AdapterDayjs} locale={'pt-br'}>
                
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="Data Inicial"
                        value={filters.startDate}
                        onChange={handleStartDataChange}
                    />
            </LocalizationProvider>
            </Grid>
            <Grid item>
            <LocalizationProvider dateAdapter={AdapterDayjs} locale={'pt-br'}>
                
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="Data Inicial"
                        value={filters.startDate}
                        onChange={handleStartDataChange}
                    />
            </LocalizationProvider>
            </Grid>
        </Grid>     
    )
}