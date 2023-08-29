const SensitiveImage = ({ selected, handleClick }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      onClick={() => handleClick("sensitive")}
      // style={{ marginTop: "20px" }}
      className={
        selected ? "parts-stroke stroke-6 deselected" : "parts-stroke stroke-6"
      }
    >
      <polyline
        onClick={() => handleClick("sensitive")}
        points="47.88 41.19 71.81 9.59 60.56 49.27 90.33 49.27 75.37 68.69"
      />
      <polyline
        onClick={() => handleClick("sensitive")}
        points="42.04 48.89 27.26 68.41 56.82 68.41 47.88 104.36 69.48 76.33"
      />
      <path
        onClick={() => handleClick("sensitive")}
        d="m22.93,16.25C32.93,7.78,45.87,2.67,60,2.67c31.71,0,57.42,25.71,57.42,57.42,0,14.13-5.1,27.07-13.58,37.07"
      />
      <path
        onClick={() => handleClick("sensitive")}
        d="m16.16,23.01C7.69,33.01,2.58,45.95,2.58,60.08c0,31.71,25.7,57.42,57.42,57.42,14.13,0,27.07-5.1,37.07-13.58"
      />
      <line class="cls-1" x1="14.28" y1="14.37" x2="105.87" y2="105.96" />
    </svg>
  );
};

export default SensitiveImage;
