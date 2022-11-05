import { useContext } from "react";
import InputBase from "@mui/material";
import {Box, useTheme, IconButton } from "@mui/material";
import { ColorModeContext } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsModeOutlinedIcon from "@mui/icons-material/NotificationsModeOutlined";
import SettingsModeOutlinedIcon from "@mui/icons-material/SettingsModeOutlined";
import PersonModeOutlinedIcon from "@mui/icons-material/PersonModeOutlined";
import SearchIcon from "@mui/icons-material/Search";


const Topbar  = () => {
    const theme = useTheme();
    const coloring = colors(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);  
    return <Box display = "flex" justifyContent="space-between" p={2}></Box>
}

export default Topbar;
