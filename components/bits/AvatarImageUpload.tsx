import React from "react";

type Props = {
  displayPhotoSrc?: string;
  onChange?: any;
};

export const AvatarImageUpload = ({displayPhotoSrc, onChange}: Props) => {
  return (
    <label className="avatar">
      <img
        className={`AviUpload`}
        src={
          !displayPhotoSrc
            ? "/images/Default-person.png"
            : displayPhotoSrc
        }
      />
    <input
        type="file"
        onChange={onChange}
        className={`Uploader` }
        accept="image/png, image/jpeg, image/jpg"
      />
      <style>
        {`
        .Uploader{
            display: none;
        }
        .AviUpload{
            border-radius: 1000px;
            border: 1.5px solid #e5e9e8;
            justify-content: center;
            box-sizing: border-box;
            opacity: 1;
            transition: opacity 0.5s;
            object-fit: cover;
            height: 88px;
            width: 88px;
          }
        
          .Uploader::before {
            border-radius: 1000px;
            border: 1.5px solid #e5e9e8;
            justify-content: center;
            box-sizing: border-box;
            opacity: 1;
            transition: opacity 0.5s;
            object-fit: cover;
            content: "\f093";
          }
          .avatar:hover {
            cursor: pointer;
            opacity: .7;
            content: 'Upload'
          }
          .avatar {
            
          }
        `}
      </style>
    </label>
  );
};
