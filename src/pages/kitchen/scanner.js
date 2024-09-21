import React, { useState } from 'react'
import QrReader from '@yudiel/react-qr-scanner'
// import QrReader from 'react-qr-reader'

export default function Scanner() {
  const [result, setResult] = useState('No result')
  let handleScan = (data) => {
    if (data) {
      setResult(data)
    }
  }

  let handleError = (err) => {
    // alert(err);
  }
  return (
    <>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
        facingMode='environment'
      />
      <p>{result}</p>
    </>
  )
}
