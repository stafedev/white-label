import { Drawer,} from '@mui/material'
import DetalheVenda from './DetalheVenda'


export default function DrawerVenda (props){

const mockUpVenda = {
    valorVenda:10,
    valorLiquido: 8,
    taxaVenda: 1,
    taxaAntecipacao: 1,
    tipo: 'Débito'
}

    return (
        <>
            <Drawer anchor='right'  open={props.isDrawerOpen} onClose={() => props.setIsDrawerOpen(false)} BackdropProps={{style: {backgroundColor: '#f000'}}}>
                <DetalheVenda {...mockUpVenda}/>
            </Drawer>
        </>
       )
    }