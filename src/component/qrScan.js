import Html5QrcodePlugin from '@/component/html5qrcodePlugin'

export default function QRScan() {
  const onNewScanResult = (decodedText, decodedResult) => {
    // handle decoded results here
  }
  return (
    <>
      <Html5QrcodePlugin
        fps={10}
        qrbox={540}
        disableFlip={true}
        qrCodeSuccessCallback={onNewScanResult}
      />
    </>
  )
}
