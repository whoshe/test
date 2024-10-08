import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader'
import Link from 'next/link'
import ScanHighlight from '/public/img/svg/scanhighlight.svg'

const ScanOverlay = () => (
  <ScanHighlight className='absolute w-full h-full top-0 left-0 z-10 text-primary border-[50px] border-neutral-900/20' />
)

export default function Scan() {
  const [selected, setSelected] = useState('environment')
  const [startScan, setStartScan] = useState(false)
  const [data, setData] = useState('결과 값 없음')

  // 여러 QR코드를 스캔할 수 있도록 초기화 추가 필요
  const handleScan = (result, error) => {
    if (result?.text) {
      // result가 null인지 먼저 확인
      setData(result.text)
      setStartScan(false) // 스캔 완료 후 스캔 종료
    }

    if (error) {
      console.info(error)
    }
  }

  return (
    <section className='container mx-auto'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='text-4xl font-bold mb-4'>QR Scanner for Nextjs</h1>
        <h2>현재 카메라: {selected}</h2>
        <div>
          {startScan && (
            <>
              <select onChange={(e) => setSelected(e.target.value)}>
                <option value='environment'>후면 카메라</option>
                <option value='user'>전면 카메라</option>
              </select>
              <QrReader
                className='w-96 h-96'
                onResult={handleScan}
                constraints={{ facingMode: selected }}
                ViewFinder={ScanOverlay}
              />
            </>
          )}
        </div>

        <button
          onClick={() => setStartScan(!startScan)}
          className={'btn text-lg ' + (startScan ? 'btn-primary' : 'btn-neutral')}
        >
          {startScan ? '스캔하는 중..' : '스캔하기'}
        </button>
        {data !== '' && <p>{data}</p>}
        <Link href='/' className='btn btn-ghost text-lg mt-8'>
          돌아가기
        </Link>
      </div>
    </section>
  )
}
