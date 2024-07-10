import React, { useCallback, useState, useEffect } from "react";
import CustomButton from "../components/CustomButton";
import { categoriesData } from "../data/categories";
import { CategoriesTypes } from "../types/pet";
import { useSpring, animated } from "@react-spring/web";

const Categories: React.FC = () => {
  const [content, setContent] = useState(categoriesData[0]);
  const [flip, setFlip] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true); // Track initial load

  const handleClick = useCallback((obj: CategoriesTypes) => {
    if (content.heading !== obj.heading) {
      setContent(obj);
      setFlip(!flip); // Toggle flip state
    }
  }, [content, flip]);

  const { transform } = useSpring({
    transform: flip
      ? "rotate(0deg) translate(0, 0)"
      : "rotate(-90deg) translate(200px, 0)",  // Adjust translation as needed
    from: { transform: "rotate(-90deg) translate(200px, 0)" },
    onRest: () => setInitialLoad(false), // Update initialLoad once animation is complete
    config: { duration: 1000 },
  });

  // Simulate initial load
  useEffect(() => {
    setTimeout(() => {
      setInitialLoad(false);
    }, 1000); // Adjust delay as needed
  }, []);

  return (
    <section className="categories-section">
      <h1>Categories</h1>
      <div className="categories-container">
        <div className="category-content">
          <div className="category-details">
            <h4>{content.heading}</h4>
            <p>{content.content}</p>
            <CustomButton
              text="Get Started"
              color="white"
              backgroundColor="#00A8E8"
            />
          </div>
          <div className="category-buttons">
            {categoriesData.length > 0 &&
              categoriesData.map(({ heading, content, iconImg, img }, i) => (
                <CustomButton
                  key={i}
                  text={heading}
                  IconComponent={iconImg}
                  onClick={() =>
                    handleClick({ heading, content, iconImg, img })
                  }
                />
              ))}
          </div>
        </div>
        <div className="category-image">
          <animated.img
            style={{
              transform,
              transformOrigin: 'top left',
              opacity: initialLoad ? 1 : undefined, // Show image on initial load
            }}
            src={content.img}
            alt={content.heading}
          />
        </div>
      </div>
    </section>
  );
};

export default Categories;
