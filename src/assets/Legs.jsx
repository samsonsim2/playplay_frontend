const LegsImage = ({ selected, handleClick }) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 47.95 111.21"
      onClick={() => handleClick(!selected)}
      className={
        selected ? "parts-stroke stroke-2" : "parts-stroke stroke-2 deselected"
      }
    >
      <path
        onClick={() => handleClick(!selected)}
        d="m11.02,3.65h-6.64c-.11.74-.22,1.46-.32,2.18-3.04,20.69,3.61,33.44,1.41,45.61-2.26,12.49,1.3,22.94,5.01,35.19.79,2.61,1.69,5.45.58,7.96-.69,1.56-2.07,2.73-3.27,3.99s-2.3,2.78-2.22,4.47c.08,1.69,3.69,3.67,5.36,3.05l.57-.4c-.88.34-.87,1.66-.14,2.24.73.58,1.8.56,2.72.31,3.94-1.06,5.88-5.38,5.93-9.25.05-3.87-1.24-7.66-1.29-11.53-.06-4.75,1.73-9.38,1.77-14.13.03-4.2-1.31-8.29-1.94-12.46-1.95-12.89,3-25.69,4.73-38.63h.46c1.73,12.94,6.68,25.74,4.73,38.63-.63,4.16-1.97,8.25-1.94,12.46.03,4.75,1.83,9.38,1.77,14.13-.05,3.87-1.33,7.66-1.29,11.53s1.99,8.19,5.93,9.25c.91.25,1.99.27,2.72-.31.73-.58.74-1.9-.14-2.24l.57.4c1.67.62,5.27-1.36,5.36-3.05.08-1.69-1.02-3.22-2.22-4.47s-2.57-2.43-3.27-3.99c-1.11-2.5-.21-5.35.58-7.96,3.7-12.26,7.27-22.7,5.01-35.19-2.2-12.18,4.44-24.92,1.41-45.61-.11-.72-.21-1.44-.32-2.18h-1.36s-4.61,0-4.61,0"
      />
      <line
        onClick={() => handleClick(!selected)}
        x1="18.94"
        y1="3.65"
        x2="28.53"
        y2="3.65"
      />
    </svg>
  );
};
// const LegsImage = ({ selected, handleClick }) => {
//   return (
//     <svg
//       id="Layer_1"
//       data-name="Layer 1"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 45.15 113.22"
//       onClick={() => handleClick(!selected)}
//       className={
//         selected ? "parts-stroke stroke-2" : "parts-stroke stroke-2 deselected"
//       }
//     >
//       <path
//         onClick={() => handleClick(!selected)}
//         d="m9.35,1.12H2.32c-.12.78-.23,1.55-.34,2.31-3.22,21.92,3.83,35.42,1.49,48.32-2.39,13.23,1.38,24.3,5.3,37.28.84,2.77,1.79,5.78.62,8.43-.73,1.65-2.19,2.89-3.46,4.22-1.27,1.33-2.44,2.95-2.35,4.74.09,1.79,3.91,3.89,5.68,3.23l.6-.42c-.93.36-.92,1.76-.15,2.37.77.61,1.91.59,2.88.33,4.17-1.13,6.23-5.7,6.28-9.8.05-4.1-1.31-8.11-1.36-12.21-.07-5.03,1.84-9.94,1.87-14.97.03-4.45-1.39-8.79-2.06-13.19-2.06-13.65,3.17-27.22,5.01-40.92h.49c1.84,13.7,7.07,27.27,5.01,40.92-.67,4.41-2.09,8.74-2.06,13.19.04,5.03,1.94,9.94,1.87,14.97-.05,4.1-1.41,8.11-1.36,12.21s2.11,8.67,6.28,9.8c.97.26,2.11.28,2.88-.33.77-.61.78-2.01-.15-2.37l.6.42c1.76.65,5.59-1.44,5.68-3.23.09-1.79-1.08-3.41-2.35-4.74s-2.73-2.57-3.46-4.22c-1.18-2.65-.22-5.66.62-8.43,3.92-12.98,7.7-24.05,5.3-37.28-2.33-12.9,4.71-26.4,1.49-48.32-.11-.76-.23-1.53-.34-2.31h-1.44s-4.88,0-4.88,0"
//       />
//       <line
//         onClick={() => handleClick(!selected)}
//         x1="17.75"
//         y1="1.12"
//         x2="27.9"
//         y2="1.12"
//       />
//     </svg>
//   );
// };

export default LegsImage;
