import { Divider, Stack, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

const TextMsg = ({ msg }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={msg.incoming ? "start" : "end"}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: msg.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Typography
          variant="body2"
          color={msg.incoming ? theme.palette.test : "#fff"}
        >
          {msg.message}
        </Typography>
      </Box>
    </Stack>
  );
};

const ReplyMsg = ({reply}) => {
    const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={reply.incoming ? "start" : "end"}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: reply.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Typography
          variant="body2"
          color={reply.incoming ? theme.palette.test : "#fff"}
        >
          {reply.message}
        </Typography>
      </Box>
    </Stack>
  );
};

const MediaMsg = ({ media }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={media.incoming ? "start" : "end"}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: media.incoming
            ? theme.palette.background.default
            : theme.palette.primary.main,
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack spacing={1}>
          <img
            src={media.img}
            alt={media.message}
            style={{ maxHeight: 210, borderRadius: "10px" }}
          />
          <Typography
            variant="body2"
            color={media.incoming ? theme.palette.test : "#fff"}
          >
            {media.message}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

const Timeline = ({ time }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Divider width={"46%"} />
      <Typography variant="caption" sx={{ color: theme.palette.text }}>
        {time.text}
      </Typography>
      <Divider width={"46%"} />
    </Stack>
  );
};

export { Timeline, TextMsg, MediaMsg, ReplyMsg };
