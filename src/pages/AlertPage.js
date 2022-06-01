import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AlertPage() {
  //dummy message
  const messages = [
    {
      messageTitle: "Message 1",
      messageBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget.",
    },
    {
      messageTitle: "Message  2",
      messageBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget.",
    },
    {
      messageTitle: "Message 3",
      messageBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget.",
    },
    {
      messageTitle: "Message 4",
      messageBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget.",
    },
    {
      messageTitle: "Message 5",
      messageBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget.",
    },
    {
      messageTitle: "Message 6",
      messageBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget.",
    },
    {
      messageTitle: "Message 7",
      messageBody:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortiseget.",
    },
  ];

  return (
    <Grid
      container
      sx={{ displayy: "flex", flexDirection: "row", justifyContent: "center" }}
    >
      <Grid item xs={12} sm={6}>
        <Typography variant="h5" sx={{ marginY: 3, padding: 2 }}>
          Messages
        </Typography>
        <Card sx={{ padding: 3, marginTop: 2 }}>
          <Stack spacing={2}>
            {messages.map((message) => {
              return (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{message.messageTitle}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{message.messageBody}</Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AlertPage;
