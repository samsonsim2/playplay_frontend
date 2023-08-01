const LookingImage = ({ selected, handleClick }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64.27 28.61"
      onClick={() => handleClick(!selected)}
      className={
        selected ? "parts-stroke stroke-1" : "parts-stroke stroke-1 deselected"
      }
    >
      <path
        onClick={() => handleClick(!selected)}
        d="m63.3,14.31s-13.95,13.33-31.16,13.33S.97,14.31.97,14.31C.97,14.31,14.93.97,32.14.97s31.16,13.33,31.16,13.33Z"
      />
      <circle
        onClick={() => handleClick(!selected)}
        cx="32.14"
        cy="14.31"
        r="10.5"
      />
      <circle
        onClick={() => handleClick(!selected)}
        cx="32.14"
        cy="14.31"
        r="6.17"
      />
    </svg>
  );
};

export default LookingImage;
