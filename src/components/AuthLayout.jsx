import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import background from "../img/background.jpg";
import logo from "../img/logo.svg";

const AuthLayout = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        minHeight: "100vh",
        backdropFilter: "blur(4px)",
        alignItems: "center",
        justifyContent: "center",
        px: 1,
        pt: 2,
        pb: 4,
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box component="img" src={logo} alt="logo" sx={{ width: 320 }} />
        </Box>
        <Box
          sx={{
            maxWidth: 430,
            background: "rgba(14, 14, 14, 0.7)",
            boxShadow: 3,
            borderRadius: 2.5,
            p: 4,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;
