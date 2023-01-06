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
        <Grid container item spacing={3} mx={2} alignItems={'center'}>
            <Grid item>
                <Typography>
                   {(() => { 
                        const hoje = new Date();
                        const mes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
                        return <div><b>Hoje</b> {hoje.getDate()} de {mes[hoje.getMonth()]} de {hoje.getFullYear()}</div>;
                    })()}
                </Typography>
            </Grid>
            <Grid item>
                <ButtonStyled variant='contained'>Ontem</ButtonStyled>
            </Grid>
            <Grid item>
                <ButtonStyled variant='contained'>Semana</ButtonStyled>
            </Grid>
            <Grid item>
                <ButtonStyled variant='contained'>Mês</ButtonStyled>
            </Grid>
            <Grid item>
                <ButtonStyled variant='contained'>Ano</ButtonStyled>
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