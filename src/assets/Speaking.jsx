const SpeakingImage = ({ selected, handleClick }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 54.57 64.54"
      onClick={() => handleClick(!selected)}
      className={
        selected ? "parts-stroke stroke-2" : "parts-stroke stroke-2 deselected"
      }
    >
      <path
        onClick={() => handleClick(!selected)}
        d="m44.42,47.09c5.54-4.8,9.05-11.89,9.05-19.8,0-14.46-11.72-26.19-26.19-26.19S1.1,12.82,1.1,27.29s11.72,26.19,26.19,26.19c1.81,0,3.57-.18,5.28-.53l16.17,10.5-4.32-16.35Z"
      />
    </svg>
  );
};

export default SpeakingImage;
