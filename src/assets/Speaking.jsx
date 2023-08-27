const SpeakingImage = ({ selected, handleClick }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 78.89 111.21"
      onClick={() => handleClick(!selected)}
      className={
        selected ? "parts-stroke stroke-1" : "parts-stroke stroke-1 deselected"
      }
    >
      <path
        onClick={() => handleClick(!selected)}
        d="m63.84,76.96c7.86-6.81,12.83-16.86,12.83-28.07,0-20.51-16.62-37.13-37.13-37.13S2.41,28.38,2.41,48.89s16.62,37.13,37.13,37.13c2.56,0,5.07-.26,7.48-.75l22.93,14.88-6.12-23.18Z"
      />
    </svg>
  );
};

export default SpeakingImage;
