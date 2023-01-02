import { TableRow, TableCell, TableHead} from '@mui/material'

export default function MaiorNumeroVendas() {

    return (
        <TableHead>
            <TableRow>
                <TableCell>
                    Data           
                </TableCell>
                <TableCell>
                    ID da transações           
                </TableCell>
                <TableCell>
                    Status
                </TableCell>
                <TableCell>
                    Tipo
                </TableCell>
                <TableCell>
                    Valor de venda
                </TableCell>
            </TableRow>
        </TableHead>
    )
};