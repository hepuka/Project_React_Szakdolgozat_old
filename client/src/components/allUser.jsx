import { useState, useEffect } from "react";
import { getUsers, deleteUser } from "../service/api.js";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  styled,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

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

const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let res = await getUsers();
    console.log(res.data);
    setUsers(res.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  return (
    <div>
      <Typ variant="h5">Felhasználó adatainak módosítása</Typ>
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell>Név</TableCell>
            <TableCell>Felhasználónév</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Jogosultság</TableCell>
            <TableCell>Beállítások</TableCell>
          </THead>
        </TableHead>

        <TableBody>
          {users.map((user) => {
            return (
              <TRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button
                    color="primary"
                    variant="outlined"
                    style={{ marginRight: 10 }}
                    component={Link}
                    to={`/edit/${user._id}`}
                  >
                    Szerkeszt
                  </Button>

                  <Button
                    color="error"
                    variant="outlined"
                    onClick={() => deleteUserData(user._id)}
                  >
                    Töröl
                  </Button>
                </TableCell>
              </TRow>
            );
          })}
        </TableBody>
      </StyledTable>
    </div>
  );
};

export default AllUser;
