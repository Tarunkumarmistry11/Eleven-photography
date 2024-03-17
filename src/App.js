// App.js

import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import BackgroundVideo from "./Components/Background/Appbg.jsx";
import { ImageAccordion } from "./Components/ImageAccordian/Accordian.jsx";

function App() {
  // Define items array with image data
  const items = [
    {
      image: require("./Components/assests/20240101_074807-3.jpg"),
      alt: "Description of image 1",
      header: "Header text 1",
      text: "Content text 1"
    },
    {
      image: require("./Components/assests/IMG_20210806_130348749 (1).jpg"),
      alt: "image 2",
      header: "Header text 2",
      text: "Content text 2"
    },
    {
      image: require("./Components/assests/IMG_20210815_084914-4.jpg"),
      alt: "image 3",
      header: "Header text 3",
      text: "Content text 3"
    },
    {
      image: require("./Components/assests/IMG_20211231_094008226.jpg"),
      alt: "image 4",
      header: "Header text 4",
      text: "Content text 4"
    },
    {
      image: require("./Components/assests/IMG_20220313_075254.jpg"),
      alt: "image 5",
      header: "Header text 5",
      text: "Content text 5"
    },
    {
      image: require("./Components/assests/IMG_20220415_200201499.jpg"),
      alt: "image 6",
      header: "Header text 6",
      text: "Content text 6"
    },
    {
      image: require("./Components/assests/IMG_20221022_202811890.jpg"),
      alt: "image 7",
      header: "Header text 7",
      text: "Content text 7"
    },
    {
      image: require("./Components/assests/IMG_20221101_175457019.jpg"),
      alt: "image 8",
      header: "Header text 8",
      text: "Content text 8"
    },
    {
      image: require("./Components/assests/IMG_20221101_181608928.jpg"),
      alt: "image 9",
      header: "Header text 9",
      text: "Content text 9"
    },
    {
      image: require("./Components/assests/IMG_20221106_172217993.jpg"),
      alt: "image 10",
      header: "Header text 10",
      text: "Content text 10"
    },
    {
      image: require("./Components/assests/IMG_20221106_172259559.jpg"),
      alt: "image 11",
      header: "Header text 11",
      text: "Content text 11"
    },
    {
      image: require("./Components/assests/IMG_20230103_171228383.jpg"),
      alt: "image 12",
      header: "Header text 12",
      text: "Content text 12"
    },
    {
      image: require("./Components/assests/IMG_20230110_175435245.jpg"),
      alt: "image 13",
      header: "Header text 13",
      text: "Content text 13"
    },
    {
      image: require("./Components/assests/IMG_20230121_092102104-2.jpg"),
      alt: "image 14",
      header: "Header text 14",
      text: "Content text 14"
    },
    {
      image: require("./Components/assests/IMG_20230129_084902107.jpg"),
      alt: "image 15",
      header: "Header text 15",
      text: "Content text 15"
    },
    {
      image: require("./Components/assests/IMG_20230521_123756820.jpg"),
      alt: "image 16",
      header: "Header text 16",
      text: "Content text 16"
    },
    {
      image: require("./Components/assests/IMG_20230617_171010345.jpg"),
      alt: "image 17",
      header: "Header text 17",
      text: "Content text 17"
    },
    {
      image: require("./Components/assests//IMG_20230521_123956936.jpg"),
      alt: "image 18",
      header: "Header text 18",
      text: "Content text 18"
    },
    {
      image: require("./Components/assests/IMG_20230521_123344436.jpg"),
      alt: "image 20",
      header: "Header text 20",
      text: "Content text 20"
    },
    {
      image: require("./Components/assests/IMG_20230722_122738552.jpg"),
      alt: "image 21",
      header: "Header text 21",
      text: "Content text 21"
    },
    {
      image: require("./Components/assests/IMG_20231129_082735145.jpg"),
      alt: "image 22",
      header: "Header text 22",
      text: "Content text 22"
    },
    
  ];

  return (
    <div>
      <Navbar />
      <BackgroundVideo />
      <ImageAccordion items={items} /> 
    </div>
  );
}

export default App;
