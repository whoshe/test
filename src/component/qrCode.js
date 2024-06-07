import QRCode from 'qrcode.react'

const BookshopQRCode = ({
  voucherId,
  size = 240,
  level = 'H',
  imageSettings = {
    src: 'https://bookshopmap.s3.ap-northeast-2.amazonaws.com/document/20240524/9e246b94bc9bfd7e581e1f44fe0cd78b8524416887d57ce6540d2e262568f9ae.png?ver=1716507954',
    x: undefined,
    y: undefined,
    height: 30,
    width: 40,
    excavate: true,
  },
}) => {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/voucher/'
      : 'https://search.bookshopmap.com/voucher/'

  const voucherUrl = `${baseUrl}${voucherId}`

  return <QRCode value={voucherUrl} size={size} level={level} imageSettings={imageSettings} />
}

export default BookshopQRCode
