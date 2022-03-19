import React from 'react'

type Props = {
    displayPhotoSrc?: string;
    size?: string;
}

export const Avatar = (props: Props) => {
    const avatarSize = () => {
        if (props.size == 'small') return '32px'
        if (props.size == 'medium') return '44px'
        if (props.size == 'large') return '56px'
        return '44px';
    }
  return (
    <div className='avatar'>
        <img className={'avatar-img'}src={!props.displayPhotoSrc? '/images/Default-person.png' : props.displayPhotoSrc} />
        <style jsx>{`

            .avatar-img {
                height: ${avatarSize()};
                width: ${avatarSize()};
                border-radius: ${avatarSize()};
                border: 1.5px solid #E5E9E8;
                justify-content: center;
                box-sizing: border-box;
                opacity: 1;
                transition: opacity .5s;
                
            }
            .avatar:hover {
                cursor: pointer;
                opacity: .7;
            }
        `}
    </style>
    </div>
  )
}
