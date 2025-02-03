// import { useEffect } from 'react';
// import { useStore } from '../../store';

// const ToggleButton: React.FC = () => {
//     const { darkMode, isDarkMode, setDarkMode } = useStore((store) => store);

//     useEffect(() => {
//         isDarkMode();
//     }, [isDarkMode]);

//     return (
//         <div
//             className={
//                 `w-[33px] h-[19px] rounded-[41px] flex items-center justify-start p-1 bg-(--white-2) transition duration-300 ` +
//                 (darkMode ? 'bg-white' : '')
//             }
//         >
//             <button
//                 className={
//                     `toggle-button w-[10px] h-[10px] rounded-full bg-(--gray-1) transition duration-300 cursor-pointer ` +
//                     (darkMode ? 'active' : '')
//                 }
//                 onClick={setDarkMode}
//             ></button>
//         </div>
//     );
// };

// export default ToggleButton;
