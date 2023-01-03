import { Drawer,} from '@mui/material'
import DetalheVenda from './DetalheVenda'


export default function DrawerVenda (props){

    return (
        <>
            <Drawer anchor='right'  open={props.isDrawerOpen} onClose={() => props.setIsDrawerOpen(false)} BackdropProps={{style: {backgroundColor: '#f000'}}}>
                <DetalheVenda/>
            </Drawer>
        </>
    )
}