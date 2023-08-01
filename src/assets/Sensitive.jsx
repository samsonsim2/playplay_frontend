const SensitiveImage = ({ selected, handleClick }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28.69 60.43"
      onClick={() => handleClick("sensitive")}
      style={{ maxHeight: "90%" }}
      className={
        selected ? "parts-stroke stroke-2 deselected" : "parts-stroke stroke-2"
      }
    >
      <polyline
        onClick={() => handleClick("sensitive")}
        points="7.68 59.29 27.56 31.36 1.13 31.36 22.36 1.13"
      />
    </svg>
  );
};

export default SensitiveImage;
