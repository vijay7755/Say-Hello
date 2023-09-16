import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";


const SideBar = () => {
  const theme = useTheme();

  const [selected, setSelected] = useState(0);

  const { onToggleMode } = useSettings();
  return (
    <>
      <Box
        p={2}
        sx={{
          width: 100,
          height: "100vh",
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack
          direction="column"
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: "100%" }}
        >
          <Stack alignItems={"center"} spacing={4}>
            <Box
              sx={{
                width: 64,
                height: 64,
                backgroundColor: theme.palette.primary.main,
                borderRadius: 1.5,
              }}
            >
              <img src={logo} alt="chat app logo" />
            </Box>
            <Stack
              spacing={3}
              sx={{ width: "max-content" }}
              direction={"column"}
              alignItems="center"
            >
              {Nav_Buttons.map((el) => {
                return el.index === selected ? (
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton sx={{ width: "max-content", color: "#fff" }}>
                      {el.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => {
                      setSelected(el.index);
                    }}
                    sx={{
                      width: "max-content",
                      color:
                        theme.palette.mode === "light"
                          ? "#000"
                          : theme.palette.text.primary,
                    }}
                  >
                    {el.icon}
                  </IconButton>
                );
              })}
              <Divider />
              {selected === 3 ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(3);
                  }}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>
          <Stack spacing={4} alignItems="center">
            <AntSwitch
              onChange={() => {
                onToggleMode();
              }}
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
            />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default SideBar;
