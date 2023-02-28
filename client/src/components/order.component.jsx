import { useState, useEffect } from "react";
import { getOrders } from "../service/api.js";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  styled,
  Typography,
} from "@mui/material";

const StyledTable = styled(Table)`
  width: 70%;
  margin: 100px 0 0 250px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 17px;
    font-weight: bold;
    text-align: center;
    color: #000000;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 15px;
    text-align: center;
  }
`;

const Typ = styled(Typography)`

    font-size: 20x;
    text-align: center;
    margin-top:100px;
  }
`;

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = async () => {
    let res = await getOrders();
    setOrders(res.data);
  };

  return (
    <div>
      <Typ variant="h5">Megrendelés összesítő</Typ>
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>Megrendelés azonosító</TableCell>
            <TableCell>Végösszeg (Ft)</TableCell>
            <TableCell>Rendelés ideje</TableCell>
            <TableCell>Művelet</TableCell>
          </THead>
        </TableHead>

        <TableBody>
          {orders.map((order) => {
            return (
              <TRow key={order._id}>
                <TableCell>{order.orderid}</TableCell>
                <TableCell>{order.vegosszeg}</TableCell>
                <TableCell>{order.time}</TableCell>
                <TableCell>Sikeres tranzakció</TableCell>
              </TRow>
            );
          })}
        </TableBody>
      </StyledTable>
    </div>
  );
};

export default Orders;
