import React from 'react'
import './ConverButton.scss';

const ConvertButton = () => {
    const handleConvert=(e)=>{

    }
  return (
    <div>
        <button onClick={handleConvert} className='convertToPdf'>convert to pdf</button>
    </div>
  )
}

export default ConvertButton