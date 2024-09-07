import React, { useEffect, useRef, useState } from 'react';
import * as handpose from '@tensorflow-models/handpose';
import * as tf from '@tensorflow/tfjs';
import Webcam from 'react-webcam';
import { DrawHand } from './Utils';

function HandGesture() {
  const [loadingModel, setLoadingModel] = useState(false);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runHandPose = async () => {
    try {
      setLoadingModel(true);
      const net = await handpose.load();
      setLoadingModel(false);
      console.log("Model loaded");

      setInterval(() => {
        detect(net);
      }, 100);
    } catch (error) {
      setLoadingModel(false);
      console.log("ERROR", error);
    }
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== undefined &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.videoWidth;
      const videoHeight = webcamRef.current.videoHeight;

      // Set video width and height
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas width and height
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make detections
      const hand = await net.estimateHands(video);
      console.log(hand);

      const ctx = canvasRef.current.getContext('2d');
      
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      // Draw hand landmarks
      DrawHand(hand, ctx);
    }
  };

  useEffect(() => {
    runHandPose();
  }, []);

  if (loadingModel) {
    return (
      <div className='flex w-full items-center justify-center'>
        <img src="src/assets/loading.gif" alt="Loading" className='h-7' />
      </div>
    );
  }

  return (
    <div>
      <div className='w-full p-2 bg-blue-100 text-center'>
        <h1 className='font-semibold text-[4ch]'>Hand Pose Recognition</h1>
      </div>
      <div className='w-full flex items-center justify-center bg-blue-100 p-2 relative'>
        <Webcam 
          ref={webcamRef}
          className='h-[480px] w-[600px] z-10'
        />
        <canvas 
          ref={canvasRef}
          className='h-[480px] w-[600px] z-20 absolute'
        ></canvas>
      </div>
    </div>
  );
}

export default HandGesture;
