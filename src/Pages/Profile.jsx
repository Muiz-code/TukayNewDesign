import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import MyForm from "../Components/MyForm";
import cancel from "../assets/Cancel.svg";
import Buttons from "../Components/Buttons";
import verify from "../assets/CircleMark.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Backdrop from "@mui/material/Backdrop";
import BVNCard from "../Components/BVNCard";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{
          fontSize: "2rem",
          bgcolor: "#4BF0A5",
          p: 1,
          color: "black",
          borderRadius: 10,
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Profile = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [file, setFile] = useState();
  function handleChanger(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="flex place-items-center  justify-center w-full h-screen gap-5 p-10">
      <div className="flex flex-col place-items-center gap-5 bg-[#0A221C] h-[85vh] w-[65%] p-5 rounded-2xl">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{
            bgcolor: "#113A2F",
            color: "white",
            borderRadius: 2,
            p: 1,
            minWidth: 600,
          }}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <div className="flex flex-col">
              <h1>Security</h1>
              <p className="text-[12px] text-[#adababc7]">
                Password and Transaction Pin
              </p>
            </div>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              px: 5,
            }}
          >
            <div className="flex flex-col gap-5">
              <Navbar
                bg="dark"
                className="flex w-[69.1%] bg-[#0A221C] navbarr2 py-[13px] rounded-lg"
                data-bs-theme="dark"
              >
                <Container>
                  <Nav className="me-auto">
                    <Nav.Link
                      href="#home"
                      className="px-[41px] py-[15px] rounded-lg   hover:bg-[#4BF0A5] hover:text-[black]"
                    >
                      Password
                    </Nav.Link>
                    <Nav.Link
                      href="#features"
                      className="px-[41px] py-[15px] rounded-lg hover:bg-[#4BF0A5] hover:text-[black]"
                    >
                      Transtions Pin
                    </Nav.Link>
                  </Nav>
                </Container>
              </Navbar>

              <div className="w-full h-[1px] bg-[#4BF0A5]"></div>
              <div>
                <MyForm
                  label="Current Password"
                  type="password"
                  placeholder="Enter Current Password"
                />
                <MyForm
                  label="New Password"
                  type="password"
                  placeholder="Enter New Password"
                />
                <button className="px-[30px] py-[10px] mt-5 rounded-lg bg-[#4BF0A5] hover:bg-[#4bf0a6a2] hover:text-[white] text-[black]">
                  Save
                </button>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{
            bgcolor: "#113A2F",
            color: "white",
            borderRadius: 2,
            p: 1,
            minWidth: 600,
          }}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <div className="flex flex-col">
              <h1>Account Verification</h1>
              <p className="text-[12px] text-[#adababc7]">
                Verify BVN and Phone Number
              </p>
            </div>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              px: 5,
            }}
          >
            <div className="flex flex-col gap-5">
              <div className="w-full h-[1px] bg-[#4BF0A5]"></div>

              <div>
                <Buttons
                  img={cancel}
                  heading="BVN"
                  sub="Verify BVN"
                  style="bg-[#F6B1B3]"
                  click={handleOpen}
                />

                <Backdrop
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    bgcolor: "#113a2f84",
                    opacity: 1,
                  }}
                  open={open}
                  onClick={handleClose}
                >
                  <BVNCard
                    heading="BVN Verification"
                    sub=" Please input your BVN to be able to acess the full functionality on the this app"
                  />
                  <button className="px-[30px] py-[10px] mt-5 rounded-lg bg-[#4BF0A5] hover:bg-[#4bf0a6a2] hover:text-[white] text-[black]">
                    Save
                  </button>
                </Backdrop>
              </div>

              <Buttons
                img={verify}
                heading="Phone Number"
                sub="Phone Number Verified"
                style="bg-[#113A2F]"
              />
              <Buttons
                img={verify}
                heading="Email Address"
                sub="Email Verified"
                style="bg-[#113A2F]"
              />
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={{
            bgcolor: "#113A2F",
            color: "white",
            borderRadius: 2,
            p: 1,
            maxWidth: 600,
          }}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <div className="flex flex-col">
              <h1>Set Amount</h1>
              <p className="text-[12px] text-[#adababc7]">
                Set amount from N2000 upward.
              </p>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="flex flex-col place-items-center just gap-5 bg-[#0A221C] h-[85vh] w-[35%] p-5 rounded-2xl">
        <div className="flex flex-col place-items-center gap-3">
          <Stack direction="row" spacing={2}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Muiz Owolabi"
                src={file}
                sx={{ width: 100, height: 100 }}
              />
            </StyledBadge>
          </Stack>
          <h1 className="text-[white] text-3xl">Muiz Owolabi</h1>
        </div>
        <div className="flex flex-col place-items-center justify-center gap-3 border">
          <input
            type="file"
            accept="image/*"
            multiple="false"
            onChange={handleChanger}
            className="w-[30%]"
          />
        </div>
      </div>
    </div>
  );
};
export default Profile;
