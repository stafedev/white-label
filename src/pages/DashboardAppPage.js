import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { 
  Grid, 
  Container, 
  Typography, 
  Divider, 
  TableContainer, 
  Table, 
  TableBody,
  TableRow,
  TableCell,
  Card,
} from '@mui/material';
// components
import UltimasVendas from '../components/ultimas-vendas/UltimasVendas';
import MaiorNumeroVendas from '../components/maior-numero-vendas/MaiorNumeroVendas'
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';


// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          DASHBOARD
        </Typography>

        <Divider variant='middle'/>

        <Grid container spacing={3} m={1}>
        
        <Grid item xs={12} md={6} lg={3}>
            <AppConversionRates
              title="Historico por Tipo de Pagamento"
              subheader="???"
              chartData={[
                { label: 'Jul', value: 400 },
                { label: 'Ago', value: 430 },
                { label: 'Set', value: 448 },
                { label: 'Out', value: 470 },
                { label: 'Nov', value: 540 },
                { label: 'Dez', value: 580 },
              ]}
            />
          </Grid>
        
        <Grid item xs={12} md={6} lg={3} >
            <AppWebsiteVisits
              title="Progressao Geral de Vendas"
              subheader="???"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
              ]}
            />
          </Grid>
        <Grid item xs={12} md={6} lg={3}>
            <AppCurrentVisits
              title="Historico por Tipo de Pagamento"
              chartData={[
                { label: 'Débito', value: 4344 },
                { label: 'Crédito à Vista', value: 5435 },
                { label: 'Pix', value: 1443 },
                { label: 'Cred Parcelado', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <AppCurrentVisits
              title="Vendas Falhadas"
              chartData={[
                { label: 'Débito', value: 4344 },
                { label: 'Crédito à Vista', value: 5435 },
                { label: 'Pix', value: 1443 },
                { label: 'Cred Parcelado', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          {/* 
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="New Users" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Item Orders" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Bug Reports" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>
          */
          }

          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <Typography variant="h6" sx={2}>ÚLTIMAS VENDAS</Typography>
              <TableContainer sx={{minWidth: 400}}>
                <Table>
                  <UltimasVendas/>
                </Table>
              </TableContainer>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <Typography variant="h6" sx={2}>EMPRESA COM MAIOR NUMERO DE VENDAS</Typography>
              <TableContainer sx={{minWidth: 200}}>
                <Table>
                  <MaiorNumeroVendas/>
                </Table>
              </TableContainer>
            </Card>
          </Grid>

          <Grid  item xs={12} md={6} lg={4}>
            <Card>
              <Typography variant="h6" sx={2}>MAIOR VOLUME DE VENDAS POR BANDEIRA</Typography>
                <TableContainer sx={{minWidth: 200}}>
                  <Table>
                    <MaiorNumeroVendas/>
                  </Table>
                </TableContainer>
            </Card>
          </Grid>


        </Grid>
      </Container>
    </>
  );
}
