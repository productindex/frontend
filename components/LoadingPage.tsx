import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../public/lottie/loading-animation.json'

type Props = {}

function LoadingPage({}: Props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <div className='wrapper'>
        <div className="lottie">
            <Lottie 
                options={defaultOptions}
                height={100}
                width={100}
            />
        </div>


    <style>{`
        .lottie {
            position: absolute;
            top: 40%;
            left: 0;
            right: 0;
            margin: 0 auto;
        }

        .wrapper {
            position: absolute;
            background-color: white;
            width: 100%;
            height: 100%;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 1000;
        }

    
    
    `}
    </style>
    </div>
  )
}

export default LoadingPage