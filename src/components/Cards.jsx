import React from 'react';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <>
        <div className='w-full flex gap-3 items-center p-3 mt-6'>
            <div className='flex-row flex items-center justify-evenly w-full md:gap-2 flex-wrap gap-4'>
                <div className='shadow-md flex flex-col md:min-h-[40vh] items-center justify-between gap-3 rounded-3xl md:w-[70%] w-4/5 lg:w-[30%]'> 
                   <div className='flex flex-col items-center justify-center mt-10 gap-4'>
                   <h2 className='md:text-[3ch] font-semibold border-b-blue-500 border-b-2 text-wrap'>Image Recognition</h2>
                    <p className='w-full p-2 text-center md:text-sm text-xs lg:text-base font-light'> Commonly used in security systems, smartphones, and surveillance, facial recognition has become increasingly accurate with advancements in AI and machine learning.It offers enhanced security, privacy and data security.</p>
                    <button className='bg-blue-500 text-white  p-2 rounded-3xl font-semibold w-1/3  hover:transtion duration-150  hover:bg-blue-500 hover:text-white shadowmd'><Link to='imagerecognition'>Try It Out!</Link></button>
                    </div>
                    <div className='w-full h-4 bg-blue-500 rounded-b-3xl'></div>
                </div>
                <div className='shadow-md flex flex-col min-h-[40vh] items-center justify-between gap-3 rounded-3xl md:w-[70%] w-4/5 lg:w-[30%]'>
                <div className='flex flex-col items-center justify-center mt-10 gap-4'>
                   <h2 className='md:text-[3ch] font-semibold border-b-blue-500 border-b-2 text-wrap'>Gesture Recognition</h2>
                    <p className='w-full p-2 text-center text-xs md:text-sm lg:text-base font-light'> . By analyzing patterns of motion, computers can understand commands or actions, making interaction with devices more intuitive. This technology is widely used in gaming, virtual reality, and even in vehicles, allowing users to control systems</p>
                    <button className='bg-blue-500 text-white  p-2 rounded-3xl font-semibold w-1/3  hover:transtion duration-150  hover:bg-blue-500 hover:text-white shadowmd'><Link to='handpose'>Try It Out!</Link></button>
                    </div>
                    <div className='w-full h-4 bg-blue-500 rounded-b-3xl'></div>
                </div>
                <div className='shadow-md flex flex-col min-h-[40vh] items-center justify-between gap-3 rounded-3xl md:w-[70%] w-4/5  lg:w-[30%]'>
                <div className='flex flex-col items-center justify-center mt-10 gap-4'>
                   <h2 className='md:text-[3ch] font-semibold border-b-blue-500 border-b-2 text-wrap'>Object Recognition</h2>
                    <p className='w-full p-2 text-center text-xs md:text-sm lg:text-base font-light'>Object recognition is a technology that identifies and classifies objects within an image or video. It relies on deep learning models to analyze visual data, recognizing specific items like cars or household objects.</p>
                    <button className='bg-blue-500 text-white  p-2 rounded-3xl font-semibold w-1/3  hover:transtion duration-150  hover:bg-blue-500 hover:text-white shadowmd'>Try It Out!</button>
                    </div>
                    <div className='w-full h-4 bg-blue-500 rounded-b-3xl'></div>
                </div>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-10 bg-[#f5f5e5] h-fit w-full p-10 mt-12">
            <div class="flex flex-col gap-4 lg:w-1/2 w-full">
                <img src="src\assets\facial-recognition.jpeg" alt="" className='w-full float-left'/>
            </div>
            <div class="flex flex-col gap-4 lg:w-1/2 w-full">
                <h2 class="md:text-3xl text-xl font-semibold">Tensorflow for Facial Recognition</h2>
                <p className='md:text-base text-sm'>TensorFlow can recognize faces in real-time using deep learning models, typically through a process called face detection and facial recognition. To achieve this, TensorFlow models, such as those based on convolutional neural networks (CNNs), analyze video frames from a camera feed and identify human faces in the images.To maintain real-time performance, TensorFlow uses optimized deep learning models that are lightweight and can run efficiently in browsers (using TensorFlow.js) or on devices with limited resources (using TensorFlow Lite for mobile). This ensures that face detection and recognition happen quickly without noticeable lag.
                <h3 className='font-semibold underline'>Use Cases</h3>
                <ul>
                    <li><span className='font-semibold'>Security and Authentication:</span> Real-time face recognition is used in systems like facial unlock on smartphones and access control for secure areas.</li>
                    <li><span className='font-semibold'>Augmented Reality (AR):</span> Face recognition powers AR applications like Snapchat filters or Instagram face effects by detecting faces in real time and applying effects.</li>
                    <li><span className='font-semibold'>Surveillance:</span> Cameras equipped with real-time face recognition can identify individuals in crowds for law enforcement or security purposes.</li>
                </ul>
                </p>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-10 bg-[#f5f5e5] h-fit w-full p-10 ">
           
            <div class="flex flex-col gap-4  lg:w-1/2 w-full">
                <h2 class="md:text-3xl text-xl font-semibold">Image Recognition with Tensorflow</h2>
                <p className='md:text-base text-sm'>Before TensorFlow can detect objects in images, it needs a trained model. This model learns to recognize objects by looking at thousands of labeled images (for example, pictures of cats and dogs). The model figures out patterns, like the shape of a cat's ears or the fur pattern on a dog, and it learns to associate these patterns with the correct label.
                When TensorFlow is given a new image to analyze, it breaks the image into smaller parts, like tiny squares (called pixels). Each pixel has a color value, and TensorFlow looks at these values to understand the image better.

                <h3 className='font-semibold underline'>Use Cases</h3>
                <ul>
                    <li><span className='font-semibold'>Health Care:</span> TensorFlow can analyze medical images like X-rays, MRIs, or CT scans to help detect anomalies such as tumors or fractures..</li>
                    <li><span className='font-semibold'>Autonomous Vehicles:</span> TensorFlow is used in self-driving cars to recognize and interpret road signs, pedestrians, other vehicles, and obstacles, helping the vehicle navigate safely..</li>
                    <li><span className='font-semibold'>Product Search:</span>TensorFlow enables visual search capabilities, allowing customers to search for products by uploading pictures. The system identifies and matches products from a catalog.</li>
                </ul>
                </p>
            </div>
            <div class="flex flex-col md:gap-4 gap-3 lg:w-1/2 w-full float-right">
                <img src="src\assets\image-recognition-using-ai.webp" alt="" className='w-full float-right'/>
            </div>
        </div>
    </>
  );
}

export default Cards;
