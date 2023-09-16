import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";


const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat header */}
      <Header />
      {/* Message Area */}
      <Box width={"100%"} sx={{ flexGrow: 1 }}>
        <Message />
      </Box>
      {/* Footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
