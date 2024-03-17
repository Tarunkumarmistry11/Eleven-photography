import { useState } from "react";
import "./Accordian.css";

export const ImageAccordion = ({ items }) => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    setActive(prevActive => prevActive === index ? null : index);
  };

  return (
    <section className="image-accordion">
      {items.map((item, index) => {
        const isActive = active === index ? "active" : "";
        return (
          <div
            key={index} 
            className={`image-accordion-item ${isActive}`}
            onClick={() => handleToggle(index)}
          >
            <img src={item.image} alt={item.alt} /> 
            <div className="content">
              <span className="material-symbols-outlined">photo_camera</span>
              <div>
                <h2>{item.header}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
