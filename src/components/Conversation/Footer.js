import React from "react";
import { Box, IconButton, InputAdornment, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";
import StyledInput from "../StyledInput";

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <StyledInput
            fullWidth
            placeholder="Message..."
            variant="filled"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <LinkSimple />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <Smiley />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{
              height: 48,
              width: 48,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5,
            }}
          >
            <Stack
              width="100%"
              height="100%"
              alignItems="center"
              justifyContent="center"
            >
              <IconButton>
                <PaperPlaneTilt color="#fff" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
