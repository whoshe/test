import KitchenHeader from '@/component/kitchen/kitchenHeader'
import Layout from '@/component/layout'
import { Fragment, useRef, useEffect, useLayoutEffect, useState } from 'react'
import {} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

import { Html5QrcodeScanner } from 'html5-qrcode'
import { useRouter } from 'next/router'
import Html5QrcodePlugin from '@/component/html5qrcodePlugin'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
}

function Welcome({ name }) {
  const onNewScanResult = (decodedText, decodedResult) => {
    // handle decoded results here
  }
  return (
    <>
      <section className='artboard artboard-demo p-4 gap-4'>
        <div className='flex gap-2 items-center justify-center'>
          <figure className='avatar'>
            <div className='mask mask-squircle w-12 h-12'>
              <Image
                src={user.imageUrl}
                unoptimized
                alt={'Photo of ' + user.name}
                width={user.imageSize}
                height={user.imageSize}
              />
            </div>
          </figure>
          <h3 className='text-xl'>어서오세요 {name} 님,</h3>
        </div>
        <section className='min-h-screen mx-auto max-w-xl gap-2'>
          <Html5QrcodePlugin
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>상품권 QR 코드를 스캔하세요.</h3>
          </div>
        </section>
        <div className='text-center'>
          <h3 className='text-xl'>QR 코드를 스캔하세요.</h3>
          <div class='mockup-phone'>
            <div className='camera'></div>
            <div className='display'>
              <div className='artboard artboard-demo phone-1'>
                {/* <div id='qr-reader' ref={qrScannerRef} className='w-60 h-60'></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button className='btn' onClick={handleClick}>
      Clicked {count} times
    </button>
  )
}

function MyButton2({ count, onClick }) {
  return (
    <button className='btn' onClick={onClick}>
      Clicked {count} times
    </button>
  )
}

function Square() {
  const [value, setValue] = useState(null)
  function handleClick() {
    setValue('X')
  }
  return (
    <>
      <button className='btn btn-xl btn-square rounded-none btn-outline' onClick={handleClick}>
        {value}
      </button>
    </>
  )
}
function Board() {
  return (
    <>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square value='7' />
        <Square value='8' />
        <Square value='9' />
      </div>
    </>
  )
}

const PRODUCTS = [
  { category: 'Fruits', name: 'Apple', price: '$1', stocked: true },
  { category: 'Fruits', name: 'Dragon', price: '$1', stocked: true },
  { category: 'Fruits', name: 'Passion', price: '$1', stocked: false },
  { category: 'Vegetables', name: 'Spinach', price: '$1', stocked: true },
  { category: 'Vegetables', name: 'Pumpkin', price: '$1', stocked: false },
  { category: 'Vegetables', name: 'Peas', price: '$1', stocked: true },
]

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <>
      <div className='flex flex-col gap-4'>
        <div>
          <SearchBar
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly}
          />
        </div>
        <div>
          <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
        </div>
      </div>
    </>
  )
}

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <>
      <form className='flex flex-col gap-2'>
        <input
          className='input input-lg input-bordered'
          type='search'
          defaultValue={filterText}
          placeholder='Search...'
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
        <label>
          <input
            type='checkbox'
            defaultChecked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />{' '}
          Only show products in stock
        </label>
      </form>
    </>
  )
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = []
  let lastCategory = null

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return
    }
    if (inStockOnly && !product.stocked) {
      return
    }
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
    }
    rows.push(<ProductRow product={product} key={product.name} />)
    lastCategory = product.category
  })
  return (
    <>
      <table className='table table-lg bg-gray-100'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  )
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan='3' className='text-center'>
        {category}
      </th>
    </tr>
  )
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>
  const stocked = product.stocked ? '재고 여유' : <span style={{ color: 'red' }}>재고 부족</span>
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
      <td>{stocked}</td>
    </tr>
  )
}

export default function ReactTest() {
  const router = useRouter()
  const [qrScanner, setQrScanner] = useState(null)
  const qrScannerRef = useRef(null)

  useEffect(() => {
    // Initialize scanner only once
    if (qrScannerRef.current && !qrScanner) {
      const scanner = new Html5QrcodeScanner('qr-reader', { fps: 10, qrbox: 250 }, false)

      const onScanSuccess = (decodedText, decodedResult) => {
        const voucherId = decodedText.substring(decodedText.lastIndexOf('/') + 1)
        router.push(`/admin/voucher/${voucherId}`)
        scanner.clear().catch(console.error)
      }

      const onScanFailure = (error) => {
        console.warn(`QR error = ${error}`)
      }

      scanner.render(onScanSuccess, onScanFailure)
      setQrScanner(scanner)
    }

    // Cleanup function to clear the scanner when the component unmounts
    return () => {
      if (qrScanner) {
        qrScanner.clear().catch(console.error)
      }
    }
  }, [qrScanner])

  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }
  return (
    <>
      <KitchenHeader />
      {/* 리액트 테스트 */}
      <section className='p-4'>
        <h2 className='text-2xl font-bold'>리액트</h2>
        <Welcome name='남반장' />
        <p class='my-2 text-lg text-gray-500'>Counters that update separately.</p>
        <article className='artboard-demo p-4'>
          <ul className='m-4'>
            <li>
              <MyButton />
            </li>
            <li>
              <MyButton />
            </li>
          </ul>

          <ul className='m-4'>
            <li>
              <MyButton2 count={count} onClick={handleClick} />
            </li>
            <li>
              <MyButton2 count={count} onClick={handleClick} />
            </li>
          </ul>
          <div className='m-4'>
            <Board />
          </div>
        </article>
      </section>
      <section className='p-4'>
        <p class='my-2 text-lg text-gray-500'>과일 테이블 만들기</p>
        <article className='artboard-demo p-4'>
          <FilterableProductTable products={PRODUCTS} />
        </article>
      </section>
    </>
  )
}

ReactTest.getLayout = (page) => <Layout>{page}</Layout>
