import KitchenNav from '@/component/kitchen/kitchenNav'
import Layout from '@/component/layout'
import { Fragment, useRef, useEffect, useLayoutEffect, useState } from 'react'
import {} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
// Html5QrcodeScanner
import { Html5QrcodeScanner } from 'html5-qrcode'
import { useRouter } from 'next/router'
import Html5QrcodePlugin from '@/component/html5qrcodePlugin'

export default function Scan() {
  const onNewScanResult = (decodedText, decodedResult) => {
    // handle decoded results here
  }
  return (
    <>
      <KitchenNav />
      <section className='container mx-auto'>
        <div className='card artboard artboard-demo p-4 gap-4'>
          <div className='card-title'>스캔하기</div>
          <div className='card-body'>
            <Html5QrcodePlugin
              fps={10}
              qrbox={250}
              disableFlip={false}
              qrCodeSuccessCallback={onNewScanResult}
              className='w-96 h-96'
            />
          </div>
        </div>
      </section>
    </>
  )
}

Scan.getLayout = (page) => <Layout>{page}</Layout>
