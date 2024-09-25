import KitchenNav from '@/component/kitchen/kitchenNav'
import Layout from '@/component/layout'
import React, { Fragment, useRef, useEffect, useLayoutEffect, useState } from 'react'
import {} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
// import { Scanner } from '@yudiel/react-qr-scanner'
import { QrReader } from 'react-qr-reader'

export default function Scan(props) {
  const [data, setData] = useState('No result')
  const handleScan = (result, error) => {
    if (!!result) {
      setData(result?.text)
      setShowModal(true)
      qrRef.current.stop()
    }

    if (!!error) {
      console.info(error)
    }
  }
  return (
    <>
      <KitchenNav />
      <section className='container mx-auto'>
        <div className='card artboard artboard-demo gap-4'>
          <div className='card-title'>스캔하기</div>
          <div className='card-body'>
            {/* <Scanner onScan={(result) => console.log(result)} className='w-96 h-96' /> */}
            {/* {!!ViewFinder && <ViewFinder />} */}
            <QrReader
              delay={1000}
              ViewFinder={function noRefCheck() {}}
              constraints={{
                facingMode: 'environment',
              }}
              // onResult={function noRefCheck() {}}
              onResult={handleScan}
              className='w-80 h-80'
            />
            <p>{data}</p>
          </div>
        </div>
      </section>
    </>
  )
}

Scan.getLayout = (page) => <Layout>{page}</Layout>
