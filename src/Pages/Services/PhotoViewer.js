import { useState } from "react";
import { PhotoSlider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export const PhotoViewer = ({ img, imgStyles }) => {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const imgArr = [
    {
      src: img,
    },
  ];

  const close = () => {
    setShow(false);
    setIndex(0);
  };

  const open = (index) => {
    setShow(true);
    setIndex(index);
  };

  return (
    <>
      <div className="mt-3 cursor-pointer">
        {imgArr.map((item, index) => {
          return (
            <img
              className={imgStyles}
              alt={`img-${index}`}
              key={index}
              src={item.src}
              onClick={() => open(index)}
            />
          );
        })}
      </div>
      <PhotoSlider
        loop={false}
        pullClosable={false}
        bannerVisible={false}
        photoClosable={false}
        maskOpacity={0.95}
        speed={() => 300}
        images={imgArr}
        visible={show}
        onClose={close}
        index={index}
        onIndexChange={(index) => setIndex(index)}
        loadingElement={<span className="text-white text-2xl">loading...</span>}
        overlayRender={({ onClose }) => {
          return (
            <>
              <div
                className="absolute text-teal-accent-200 text-lg top-5 right-5 p-3 cursor-pointer z-50"
                onClick={onClose}
              >
                Close
              </div>
            </>
          );
        }}
      />
    </>
  );
};
