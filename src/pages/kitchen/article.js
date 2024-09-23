import KitchenNav from '@/component/kitchen/kitchenNav'
import Layout from '@/component/layout'
import LayoutAdmin from '@/component/layoutAdmin'
import BI from '/public/img/logo.svg'
import React from 'react'
import { Fragment, useEffect, useLayoutEffect, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import {
  MapPinIcon,
  MagnifyingGlassIcon,
  CheckIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

export default function Article() {
  return (
    <>
      <NextSeo
        title='기사'
        openGraph={{
          url: '',
          images: [{ url: '' }],
        }}
      />
      <KitchenNav />
      <section>
        <div className='p-2'>
          <h2 className='text-2xl font-bold'>기타</h2>
        </div>
      </section>
      <article className='m-2'>
        <div className='py-2 prose'>
          <h1>제목 Prose h1</h1>
          #제목
          <h2>제목 h2</h2>
          <h3>제목 h3</h3>
          <h4>제목 h4</h4>
          <p>
            문장 prose 사례 보기
            <code>code</code>
          </p>
          <p>
            `이런 폰트는 어떠세요?` But a recent study shows that the celebrated appetizer may be
            linked to a series of rabies cases springing up around the country.
          </p>
          <ol className=''>
            <li>첫 번째</li>
            <li>두 번째</li>
          </ol>
          <p className='prose-lg'>
            `이런 폰트는 어떠세요?` But a recent study shows that the celebrated appetizer may be
            linked to a series of rabies cases springing up around the country.
          </p>
        </div>
      </article>
    </>
  )
}

Article.getLayout = (page) => <Layout>{page}</Layout>
