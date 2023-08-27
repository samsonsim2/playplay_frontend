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
// const SpeakingImage = ({ selected, handleClick }) => {
//   return (
//     <svg
//       id="Layer_1"
//       data-name="Layer 1"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 54.57 64.54"
//       onClick={() => handleClick(!selected)}
//       className={
//         selected ? "parts-stroke stroke-2" : "parts-stroke stroke-2 deselected"
//       }
//     >
//       <path
//         onClick={() => handleClick(!selected)}
//         d="m44.42,47.09c5.54-4.8,9.05-11.89,9.05-19.8,0-14.46-11.72-26.19-26.19-26.19S1.1,12.82,1.1,27.29s11.72,26.19,26.19,26.19c1.81,0,3.57-.18,5.28-.53l16.17,10.5-4.32-16.35Z"
//       />
//     </svg>
//   );
// };

export default SpeakingImage;
