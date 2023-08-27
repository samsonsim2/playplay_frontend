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
// const LookingImage = ({ selected, handleClick }) => {
//   return (
//     <svg
//       id="Layer_1"
//       data-name="Layer 1"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 64.27 28.61"
//       onClick={() => handleClick(!selected)}
//       className={
//         selected ? "parts-stroke stroke-1" : "parts-stroke stroke-1 deselected"
//       }
//     >
//       <path
//         onClick={() => handleClick(!selected)}
//         d="m63.3,14.31s-13.95,13.33-31.16,13.33S.97,14.31.97,14.31C.97,14.31,14.93.97,32.14.97s31.16,13.33,31.16,13.33Z"
//       />
//       <circle
//         onClick={() => handleClick(!selected)}
//         cx="32.14"
//         cy="14.31"
//         r="10.5"
//       />
//       <circle
//         onClick={() => handleClick(!selected)}
//         cx="32.14"
//         cy="14.31"
//         r="6.17"
//       />
//     </svg>
//   );
// };

export default LookingImage;
