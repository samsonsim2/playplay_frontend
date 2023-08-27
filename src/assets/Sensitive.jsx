const SensitiveImage = ({ selected, handleClick }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48.87 111.21"
      onClick={() => handleClick("sensitive")}
      style={{ maxHeight: "90%" }}
      className={
        selected ? "parts-stroke stroke-4 deselected" : "parts-stroke stroke-4"
      }
    >
      <polyline
        onClick={() => handleClick("sensitive")}
        points="14.31 101.84 44.5 59.42 4.37 59.42 36.61 13.53"
      />
    </svg>
  );
};

export default SensitiveImage;
