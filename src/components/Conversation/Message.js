import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { MediaMsg, TextMsg, Timeline } from "./MsgTypes";

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((item) => {
          switch (item.type) {
            case "divider":
              return <Timeline time={item} />;
            case "msg":
              switch (item.subtype) {
                case "img":
                  return <MediaMsg media={item} />;
                case "doc":
                  return <></>;
                case "link":
                  return <></>;
                case "reply":
                  return <></>;
                default:
                  return <TextMsg msg={item} />;
                // text msg`
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
