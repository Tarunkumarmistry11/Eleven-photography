// Home.jsx
import React from 'react';
import BackgroundVideo from '../Background/Appbg';
import { ImageAccordion } from '../ImageAccordian/Accordian';
export  const items = [
  {
    image: require("../assests/20240101_074807-3.webp"),
    alt: "Description of image 1",
    header: "Beach house",
    text: "2024",
  },
  {
    image: require("../assests/IMG_20210806_130348749 (1).webp"),
    alt: "image 2",
    header: "Suicide point",
    text: "2022",
  },
  {
    image: require("../assests/IMG_20210815_084914-6.webp"),
    alt: "image 3",
    header: "Unknown planet",
    text: "Earth",
  },
  {
    image: require("../assests/IMG_20211231_094008226.webp"),
    alt: "image 4",
    header: "Embrace nature",
    text: "Ooty",
  },
  {
    image: require("../assests/IMG_20220313_075254.webp"),
    alt: "image 5",
    header: "Trek to the top",
    text: "Content text 5",
  },
  {
    image: require("../assests/IMG_20220415_200201499.webp"),
    alt: "image 6",
    header: "Firebender",
    text: "Content text 6",
  },
  {
    image: require("../assests/IMG_20221022_202811890.webp"),
    alt: "image 7",
    header: "Warm welcome",
    text: "Content text 7",
  },
  {
    image: require("../assests/IMG_20221101_175457019.webp"),
    alt: "image 8",
    header: "Yellow city",
    text: "Content text 8",
  },
  {
    image: require("../assests/IMG_20221105_114907561.webp"),
    alt: "image 9",
    header: "Survived",
    text: "Content text 9",
  },
  {
    image: require("../assests/IMG_20221106_172217993.webp"),
    alt: "image 10",
    header: "Men at work",
    text: "Content text 10",
  },
  {
    image: require("../assests/IMG_20230103_171228383.webp"),
    alt: "image 11",
    header: "Time Captured",
    text: "Content text 11",
  },
  {
    image: require("../assests/IMG_20230121_092102104-2.webp"),
    alt: "image 12",
    header: "Moon and the city",
    text: "Content text 12",
  },
  {
    image: require("../assests/IMG_20230129_084902107.webp"),
    alt: "image 13",
    header: "Dawn",
    text: "Content text 13",
  },
  {
    image: require("../assests/IMG_20210815_084914-6.webp"),
    alt: "image 14",
    header: "Green patterns",
    text: "Content text 14",
  },
  {
    image: require("../assests/IMG_20230521_123756820.jpg"),
    alt: "image 15",
    header: "Miles away",
    text: "Content text 15",
  },
  {
    image: require("../assests/IMG_20221101_181608928.webp"),
    alt: "image 16",
    header: "Abandoned ship",
    text: "Content text 16",
  },
  {
    image: require("../assests/IMG_20240107_163910419.webp"),
    alt: "image 17",
    header: "Middle of nowhere",
    text: "Content text 17",
  },
  {
    image: require("../assests/IMG_20240124_132857208-3.webp"),
    alt: "image 18",
    header: "Reached Destination",
    text: "Content text 18",
  },
  {
    image: require("../assests/IMG_20230521_123344436.webp"),
    alt: "image 20",
    header: "Corals",
    text: "Content text 20",
  },
  {
    image: require("../assests/IMG_20351119_044005946.webp"),
    alt: "image 21",
    header: "The Beach",
    text: "Content text 21",
  },
  {
    image: require("../assests/IMG_20240302_193943377.webp"),
    alt: "image 22",
    header: "Village",
    text: "Content text 22",
  },
];
const Home = () => {
  return(
    <div>
      <BackgroundVideo />
      <ImageAccordion items={items} />
    </div>)
};

export default Home;