import {
  Box,
  Button,
  Checkbox,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function PlanCheckerDetail({ setAdd, setEdit, setDel }) {
  return (
    <>
      <Box>
        <TableContainer
          component={Paper}
          sx={{
            width: "100%",
            overflowX: "scroll",
            "&::-webkit-scrollbar": {
              height: "5px",
              width: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#50505040",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
          }}
        >
          <Table
            sx={{ minWidth: "650px", p: 6, boxSizing: "border-box" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Stack direction="row" gap={1}>
                    <Checkbox
                      sx={{
                        fontSize: { xs: "12px", sm: "10px" },
                        p: 0,
                        mr: { xs: 1, sm: 1.5 },
                        color: "#ADA7A7",
                        "&.Mui-checked": {
                          color: "#ADA7A7",
                        },
                      }}
                    />
                    Name
                  </Stack>
                </TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Documents</TableCell>
                <TableCell align="left">Public Agency</TableCell>
                <TableCell align="left">State</TableCell>
                <TableCell align="left">City</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Stack direction="row" gap={1}>
                      <Checkbox
                        sx={{
                          fontSize: { xs: "12px", sm: "10px" },
                          p: 0,
                          mr: { xs: 1, sm: 1.5 },
                          color: "#ADA7A7",
                          "&.Mui-checked": {
                            color: "#ADA7A7",
                          },
                        }}
                      />
                      Lorem Ipsum
                    </Stack>
                  </TableCell>
                  <TableCell align="left">Email@gmail.com</TableCell>
                  <TableCell align="left" sx={{ textDecoration: "underline" }}>
                    File Name
                  </TableCell>
                  <TableCell align="left">Lorem Ipsum</TableCell>
                  <TableCell align="left">Lorem </TableCell>
                  <TableCell align="left">Lorem </TableCell>
                  <TableCell align="left">
                    {i % 2 === 0 ? "Waiting for approval" : "Lorem"}{" "}
                  </TableCell>
                  <TableCell align="left">
                    <Stack direction="row" gap={1}>
                      <Button
                        size="small"
                        sx={{
                          bgcolor: "#4CECB2",
                          border: "1px solid #4CECB2",
                          color: "#000",
                          "&:hover": {
                            border: "1px solid #4CECB2",
                            color: "#4CECB2",
                          },
                        }}
                        onClick={() => setEdit(true)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="small"
                        sx={{
                          bgcolor: "#3821A5",
                          border: "1px solid #3821A5",
                          color: "#fff",
                          "&:hover": {
                            border: "1px solid #3821A5",
                            color: "#3821A5",
                          },
                        }}
                        onClick={() => setDel(true)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Button
        sx={{
          display: "flex",
          mr: { xs: 2, sm: 3, md: 4 },
          ml: "auto",
          mt: 3,
          p: "10px 35px",
          color: "#fff",
          borderRadius: "15px",
          background: "#3B17AD",
          boxShadow: "0px 15px 25px 0px rgba(59, 23, 173, 0.25)",
          border: "1px solid #3821A5",
          "&:hover": {
            border: "1px solid #3821A5",
            color: "#3821A5",
          },
        }}
        onClick={() => setAdd(true)}
      >
        Add
      </Button>
    </>
  );
}
