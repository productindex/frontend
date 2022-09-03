import React from "react";

type Props = {
  displayPhotoSrc?: string;
  size?: string;
};

export const Avatar = (props: Props) => {
  return (
    <div className="avatar">
      <img
        className={`avatar-img ${props.size? props.size : 'medium'}-avi`}
        src={
          !props.displayPhotoSrc
            ? "/images/Default-person.png"
            : props.displayPhotoSrc
        }
      />
      <style>
        {`
          .avatar-img {
            border-radius: 100px;
            border: 1.5px solid #e5e9e8;
            justify-content: center;
            box-sizing: border-box;
            opacity: 1;
            transition: opacity 0.5s;
            object-fit: cover;
          }
          .large-avi {
            height: 88px;
            width: 88px;
          }
          .medium-avi {
            height: 44px;
            width: 44px;
          }
          .small-avi {
            height: 32px;
            width: 32px;
          }
          .avatar:hover {
            cursor: pointer;
            opacity: 0.7;
          }
        `}
      </style>
    </div>
  );
};
