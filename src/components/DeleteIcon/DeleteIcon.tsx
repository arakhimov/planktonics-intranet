import React from 'react';
import './DeleteIcon.css';

// type DeleteIconProps = {
//   messageId: string,
//   deleteMessage: (idMessage: string) => void,
// };

export const DeleteIcon: React.FC = () => {

  // const handleClickDelete = (event: React.MouseEvent<HTMLOrSVGElement>) => {
  //   deleteMessage(messageId);
  // }

  return(
    <svg className="DeleteIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 47.9">
      <rect x="12" y="14.9" width="3" height="24"/>
      <rect x="18" y="14.9" width="3" height="24"/>
      <rect x="24" y="14.9" width="3" height="24"/>
      <path d="M51.5,13.9H39.4V12.4A4.44,4.44,0,0,0,35,8H29a4.44,4.44,0,0,0-4.4,4.4v1.5H12.5v3h3.11L18.3,51.5A4.85,4.85,0,0,0,23,55.9H41a4.77,4.77,0,0,0,4.7-4.4l2.69-34.6H51.5ZM27.4,12.4A1.58,1.58,0,0,1,29,10.8h6a1.58,1.58,0,0,1,1.6,1.6v1.5H27.4ZM42.7,51.3A1.74,1.74,0,0,1,41,52.9H23a1.81,1.81,0,0,1-1.7-1.6L18.62,16.9H45.38Z" transform="translate(-12.5 -8)"/>
    </svg>
  );
}