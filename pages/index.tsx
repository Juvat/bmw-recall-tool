import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { VinForm } from '../components/vin-form'
import { VinDetails } from '../components/vin-details'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const { vin } = router.query

  useEffect(() => {
    if (Array.isArray(vin) || (vin && vin.length != 17)) {
      router.push('/')
    }
  }, [router, vin])

  if (Array.isArray(vin) || (vin && vin.length != 17)) return (<></>)

  return (
    <div className='container'>
      <Head>
        <title>BMW Recall Details Tool</title>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
              rel='stylesheet'
              integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
              crossOrigin='anonymous' />
      </Head>

      <div className='row'>
        <div className='col-12'>
          <h1>BMW Recall Info Tool</h1>
          {!vin
            ? <VinForm />
            : <VinDetails vin={vin} />}

          <div className='pt-5'>
            <small>Source code of the tool on GitHub: <a href='https://github.com/Alex-Bond/bmw-recall-tool'
                                                         target='_blank'
                                                         rel='noreferrer'
            >https://github.com/Alex-Bond/bmw-recall-tool</a></small>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
