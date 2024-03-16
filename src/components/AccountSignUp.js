import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { PAGES } from "../constants/pages";

export function AccountSignUp({ props }) {
  const { setUserAccountData, setUserAccountCompleted, setCurrentPage } = props;

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userRoleId: 1,
  });

  return (
    <>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ padding: "15px" }}
        gutterBottom
      >
        New Athlete Account
      </Typography>
      <TextField
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        label="First Name"
        variant="outlined"
        sx={{ m: "10px" }}
      />
      <TextField
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        label="Last Name"
        variant="outlined"
        sx={{ m: "10px" }}
      />
      <TextField
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        label="Email"
        variant="outlined"
        sx={{ m: "10px" }}
      />
      <TextField
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        label="Password"
        variant="outlined"
        sx={{ m: "10px" }}
      />
      <Button
        onClick={() => {
          setUserAccountData(user);
          setUserAccountCompleted(true);
        }}
        variant="contained"
        color="fitFeedBlue"
        sx={{ width: "250px", m: "10px", borderRadius: "15px" }}
      >
        Next
      </Button>
      <Button
        onClick={() => setCurrentPage(PAGES.HOME)}
        variant="contained"
        color="fitFeedBlue"
        sx={{ width: "250px", m: "10px", borderRadius: "15px" }}
      >
        Back
      </Button>
    </>
  );
}
