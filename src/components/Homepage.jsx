import { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Box,
  Modal,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import bg1 from "./images/acre-1.webp";
import bg2 from "./images/acre-2.webp";
import bg3 from "./images/acre-3.webp";
import bg4 from "./images/acre-4.webp";
import bg5 from "./images/acre-5.webp";
import bg6 from "./images/acre-6.webp";
import selectedWorkImage from "./images/selected-work.jpg";

const StyledContainer = styled("div")(({ backgroundImage, showInfo }) => ({
  display: "flex",
  flexDirection: "column",
  height: "94vh",
  backgroundImage: showInfo ? "none" : `url(${backgroundImage})`,
  backgroundColor: showInfo ? "#444444" : "transparent",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  transition: "all 0.5s ease-in-out",
  padding: "30px",
  justifyContent: "space-between",
}));

const InfoBox = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: "20px",
  margin: "10px 0",
  borderRadius: "5px",
  width: "400px",
}));

const PopupContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  backgroundColor: "white",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

function Homepage() {
  const [backgroundImage, setBackgroundImage] = useState(bg1);
  const [activeSection, setActiveSection] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const backgroundImages = [bg1, bg2, bg3, bg4, bg5, bg6];

  const handleChangeBackground = (index) => {
    setBackgroundImage(backgroundImages[index]);
    setActiveSection(null);
  };

  const handleSectionToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const ElementRow = ({ elements }) => (
    <Grid container justifyContent="space-between">
      {elements.map((element, index) => (
        <Grid item key={index} xs={4}>
          <Button onClick={() => handleChangeBackground(index)}>
            <Typography variant="h3" align="center" color="white">
              {element}
            </Typography>
          </Button>
        </Grid>
      ))}
    </Grid>
  );

  const infoContent = {
    information: [
      "Acre is a landscape architecture practice with a focus on distinct environments tailored for individuals. Collaborative and inquisitive, Acre creates spaces that carefully combine monolithic, clean detailing with stylised wildness, placing equal emphasis on architecture and landscaping. Projects vary in scale and sentiment, each embodying a painterly approach that unifies thoughtful, enduring materials with an emotive and tactile flora palette. Acre environments are designed to evolve across time and seasons.",
      "3/4 Brown St. Collingwood, VIC 3066 Aus@acre.landscapeinfo@acre.com.au 03 7018 3135",
    ],
    services: [
      "Acre takes a multidisciplinary approach to design. Following consultation with the client, the team collaborate on ideation to ensure that concepts are explored rigorously and from a diverse range of perspectives. Touching on all aspects of a project, from architecture to interior design to landscaping, Acre transforms spaces into emotive environments that resonate with their occupants and feel authentic within their local context.",
      "Schematic Design & Idea Generation Landscape & Lighting Plans Planting Palettes & Schedules Material & Accessory Specifications Construction Detailing Plant Sourcing Town Planning Documentation Construction Tendering & Contract Administration Interior Design & Furniture Procurement",
    ],
  };

  return (
    <StyledContainer
      backgroundImage={backgroundImage}
      showInfo={!!activeSection}
    >
      <ElementRow elements={["Ana", "Ana", "Ana"]} />

      {activeSection && (
        <InfoBox>
          <Typography variant="body1">
            {infoContent[activeSection][0]}
          </Typography>
        </InfoBox>
      )}

      <ElementRow elements={["Ana", "Ana", "Ana"]} />

      {activeSection && (
        <InfoBox>
          <Typography variant="body1">
            {infoContent[activeSection][1]}
          </Typography>
        </InfoBox>
      )}

      <Grid container justifyContent="space-between">
        <Grid item xs={4}>
          <Button onClick={() => handleSectionToggle("information")}>
            <Typography variant="h6" align="center" color="white">
              Information
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={() => handleSectionToggle("services")}>
            <Typography variant="h6" align="center" color="white">
              Services
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handleOpenModal}>
            <Typography variant="h6" align="center" color="white">
              Selected Work
            </Typography>
          </Button>
        </Grid>
      </Grid>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="selected-work-modal"
        aria-describedby="selected-work-description"
      >
        <PopupContent>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <img
              src={selectedWorkImage}
              alt="Selected Work"
              style={{ width: "50%", height: "auto", marginLeft: "400px" }}
            />
            <Typography variant="h4" sx={{ mt: 2 }}>
              Project Title
            </Typography>
          </Box>
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </PopupContent>
      </Modal>
    </StyledContainer>
  );
}

export default Homepage;
