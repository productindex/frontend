import React from 'react'
import Lottie from 'lottie-react'
import animationData from '@productindex/public/lottie/loading-animation.json'

type Props = {}

function LoadingPage({}: Props) {
  return (
    <div className='wrapper'>
        <div className="lottie">
            <Lottie 
                loop
                autoPlay
                animationData={animationData}
                style ={{
                    height: 100,
                    width: 100,
                    margin: '0 auto'
                }} 

            />
        </div>


    <style>{`
        .lottie {
            position: fixed;
            top: 40%;
            left: 0;
            right: 0;
            margin: 0 auto;
        }

        .wrapper {
            position: fixed;
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