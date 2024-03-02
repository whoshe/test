function Error({ statusCode }) {
    return (
        <>
        <main className='flex flex-col-1 h-screen justify-center items-center'>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
      </main>
      </>
    )
  }
   
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
   
  export default Error