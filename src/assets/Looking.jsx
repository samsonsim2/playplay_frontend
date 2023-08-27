const LookingImage = ({ selected, handleClick }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 104.09 111.21"
      onClick={() => handleClick(!selected)}
      className={
        selected ? "parts-stroke stroke-1" : "parts-stroke stroke-1 deselected"
      }
    >
      <path
        onClick={() => handleClick(!selected)}
        d="m101.01,55.6s-21.92,20.95-48.96,20.95S3.08,55.6,3.08,55.6c0,0,21.92-20.95,48.96-20.95s48.96,20.95,48.96,20.95Z"
      />
      <circle
        onClick={() => handleClick(!selected)}
        cx="52.05"
        cy="55.6"
        r="16.5"
      />
      <circle
        onClick={() => handleClick(!selected)}
        cx="52.05"
        cy="55.6"
        r="9.69"
      />
    </svg>
  );
};

export default LookingImage;
