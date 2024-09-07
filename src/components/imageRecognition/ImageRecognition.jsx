import React from 'react'
import { useRef,useEffect,useState } from 'react'
import * as mobilenet from '@tensorflow-models/mobilenet'
import * as tf from '@tensorflow/tfjs'

function ImageRecognition() {

  const [isModelLoading,setIsModelLoading] = useState(false)
  const [model,setModel] = useState(null)
  const [imageUrl,setImageUrl] = useState(null)
  const [results,setResults] = useState([])


  const imageRef = useRef(null)
  const textInputRef = useRef(null)

  const loadModel = async ()=>{
    setIsModelLoading(true)
    try {
        const model = await mobilenet.load()
        setModel(model)
        setIsModelLoading(false)
    } catch (error) {
      console.log('ERROR',error)
      setIsModelLoading(false)
    }
  }

  const uploadImage = (e)=>{
    const files = e.target.files
    if(files.length > 0){
      const url = URL.createObjectURL(files[0])
      setImageUrl(url)
    }else{
      setImageUrl(null)
    }
  }

  const identifier = async ()=>{
    textInputRef.current.value = ''
    const results = await model.classify(imageRef.current)
    setResults(results)
    
  }

  const handleOnChange = (e)=>{
    setImageUrl(e.target.value)
    setResults([])
  }

  useEffect(()=>{
    loadModel()
  },[])

  if(isModelLoading){
    return (
      <div className='flex items-center justify-center p-2'><img src="src\assets\loading.gif" alt="" className='h-7 '/></div>
    )
  }

  console.log('Image URL:',imageUrl)
  return (
    <>
      <div className='p-2'>
        <div className='w-full flex gap-2 flex-col p-2 '>
        <h1 className='font-semibold md:text-[6ch] text-[3ch]'>Image Recognition</h1>
        <div className='p-2 flex flex-col gap-1'>
          <input type="file" accept='image/*'  capture='camera' className='bg-blue-500 outline-none font-light text-white rounded-3xl' onChange={uploadImage} />
          <span className='font-mono font-semibold text-lg'>OR</span>
          <input type="text" placeholder='Paste Image Url' ref={textInputRef} onChange={handleOnChange} className='border-2 border-blue-100 p-2 shadow'/>
        </div>
        </div>
        <div className='w-full flex bg-blue-100 p-2'>
          <div className='flex flex-col items-center justify-center  gap-2 w-full'>
            <div className='w-full flex items-center justify-center'>
              {
                imageUrl && (
                  <img src={imageUrl} alt="uploadPreview" crossOrigin='anonymous' ref={imageRef} className='w-1/3'/>
                )
              }
            </div>
            <div className='w-1/3'>
              {
                imageUrl && (
                <button className='p-2 bg-blue-500 md:text-base text-sm text-white rounded-3xl mt-3 w-full' onClick={identifier}>Submit</button>
                )
              }
            </div>
          </div>
        </div>
      </div>
      <div className='shadow-md p-2  bg-blue-100 text-center'>
        {
          results && results.length > 0 && (
            results.map((prediction,index)=>{
              return(
              <ul className='flex flex-col gap-3'>
                {
                  <li key={index} className=' '>
                    <span className='font-semibold text-lg'>Name:</span>
                    <span className='capitalized'>{prediction.className} </span><br />
                    <span className='font-semibold'>{(prediction.probability * 100).toFixed(2)}% Correct</span>
                    
                  </li>
                }
              </ul>
              )
            })
          )
        }
      </div>
    </>
  )
}

export default ImageRecognition
