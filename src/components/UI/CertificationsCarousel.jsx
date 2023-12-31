import React from "react";
import MUICarousel from "react-material-ui-carousel";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import {
  Box,
  useTheme,
  useMediaQuery,
  Grid,
  Card,
  Typography
} from "@mui/material";

function CertificationsCard({ certificationsData }) {
  const theme = useTheme();

  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const itemsPerRow = isMdScreen || isSmScreen ? 4 : 2;
  const groupedCertificationsData = [];
  for (let i = 0; i < certificationsData.length; i += itemsPerRow) {
    groupedCertificationsData.push(
      certificationsData.slice(i, i + itemsPerRow)
    );
  }

  return (
    <MUICarousel
      navButtonsProps={{
        style: {
          display: "none"
        }
      }}
      indicatorIconButtonProps={{
        style: {
          color: theme.components.MuiCarousel.styleOverrides.dot.backgroundColor
        }
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color:
            theme.components.MuiCarousel.styleOverrides.dotActive
              .backgroundColor
        }
      }}
    >
      {groupedCertificationsData.map((row, rowIndex) => (
        <Grid key={rowIndex} container spacing={2}>
          {row.map((item, itemIndex) => (
            <Grid key={item.id} item xs={6} md={3} sm={3}>
              <Card
                id="parentCard"
                variant="outlined"
                sx={{
                  boxShadow: 0,
                  height: "100%",
                  minHeight: { xs: "230px", md: "100%" },
                  position: "relative"
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    key={`${rowIndex}-${itemIndex}`}
                    item
                    xs={12}
                    md={12}
                    sm={12}
                  >
                    <Card
                      id="nestedCard"
                      sx={{
                        backgroundColor: "#ffffff",
                        boxShadow: 0,
                        borderRadius: 0,
                        height: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        position: "relative"
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          display: "block",
                          margin: "0 auto",
                          width: "75px"
                        }}
                      />
                    </Card>
                  </Grid>
                  <Grid key={item.id} item xs={12} md={12} sm={12}>
                    <Box sx={{ px: "20px", direction: "ltr" }}>
                      <Typography
                        sx={{ color: "#ffff", fontWeight: 600 }}
                        variant="body1"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{ color: "#ffff", pb: "20px" }}
                        variant="body2"
                        gutterBottom
                      >
                        {item.IssuingORG}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px"
                  }}
                >
                  <a
                    href={item.credentialURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: theme.typography.allVariants.color
                    }}
                  >
                    <InsertLinkOutlinedIcon
                      style={{
                        display: "none",
                        fontSize: "1.2rem",
                        marginLeft: "1.5rem"
                      }}
                    />
                  </a>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      ))}
    </MUICarousel>
  );
}

export default CertificationsCard;
