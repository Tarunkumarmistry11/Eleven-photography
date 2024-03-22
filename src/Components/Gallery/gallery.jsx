import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import './gallaryItems.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// Define your gallery items here
export const galleryItems = [
  {
    Image: require("../gallaryItems/20240101_074807-3.jpg"),
    alt: "Image 1",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20221105_114907561.jpg"),
    alt: "Image 2",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20230521_123756820.jpg"),
    alt: "Image 3",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20211231_094008226.jpg"),
    alt: "Image 4",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20220313_075254.jpg"),
    alt: "Image 5",
    xs: 4,
    className: "Image-5",
  },
  {
    Image: require("../gallaryItems/IMG_20221101_181608928.jpg"),
    alt: "Image 6",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20230103_171228383.jpg"),
    alt: "Image 7",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20221022_202811890.jpg"),
    alt: "Image 8",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20230521_123344436.jpg"),
    alt: "Image 9",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20230121_092102104-2.jpg"),
    alt: "Image 10",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20230129_084902107.jpg"),
    alt: "Image 11",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20351119_044005946.jpg"),
    alt: "Image 12",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20221101_180635998.jpg"),
    alt: "Image 13",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20230722_122738552.jpg"),
    alt: "Image 14",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20230110_175435245.jpg"),
    alt: "Image 15",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20210815_084914-6.jpg"),
    alt: "Image 16",
    xs: 12,
  },
  {
    Image: require("../gallaryItems/IMG_20221101_175457019.jpg"),
    alt: "Image 17",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20240107_163910419.jpg"),
    alt: "Image 18",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20231217_085413375-2.jpg"),
    alt: "Image 19",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20231128_080506200.jpg"),
    alt: "Image 20",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20191208_100544.jpg"),
    alt: "Image 21",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20220101_110204630.jpg"),
    alt: "Image 22",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20220101_124050961-2.jpg"),
    alt: "Image 23",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20220102_160201753.jpg"),
    alt: "Image 24",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20220102_170445592.jpg"),
    alt: "Image 25",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20231129_082735145.jpg"),
    alt: "Image 26",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20240124_132857208-3.jpg"),
    alt: "Image 27",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20240302_193943377-2.jpg"),
    alt: "Image 28",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20221022_205113559.jpg"),
    alt: "Image 29",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20221106_172259559.jpg"),
    alt: "Image 30",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20240124_134345093.jpg"),
    alt: "Image 31",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20240302_195338264.jpg"),
    alt: "Image 32",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20230618_112947254.jpg"),
    alt: "Image 33",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20221106_172217993.jpg"),
    alt: "Image 34",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20230521_123933989.jpg"),
    alt: "Image 35",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20230129_084545984.jpg"),
    alt: "Image 36",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20220102_104737344 (1)-2.jpg"),
    alt: "Image 37",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20221022_212510339-2.jpg"),
    alt: "Image 38",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/20231217_082008.jpg"),
    alt: "Image 39",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20221106_175504874.jpg"),
    alt: "Image 40",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20230110_175435245.jpg"),
    alt: "Image 41",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20221101_175306075 (2).jpg"),
    alt: "Image 42",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20230129_084545984.jpg"),
    alt: "Image 43",
    xs: 4,
  },
  {
    Image: require("../gallaryItems/IMG_20220620_200520705.jpg"),
    alt: "Image 44",
    xs: 12,
  },
];

export default function BasicGrid() {
  return (
    <div>
        <h1 className="header">Professional Gallary</h1>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {galleryItems.map((item, index) => (
          <Grid key={index} item xs={item.xs}>
            <Item>
              <img src={item.Image} alt={item.alt} style={{ width: "100%" }} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
}
