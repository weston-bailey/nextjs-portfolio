export default function Test({ queryParam }) {
  let name = queryParam
  return (
    <>
      <h1 id="hello">
        Hello { name }
      </h1>
      <style jsx>
        {`
        #hello {
          color: hotpink;
        }
        `}
      </style>
    </>
  )
}

export async function getServerSideProps({ query }) {
  // get query params from url
  let queryParam = query.name

  return {
    props: {
      queryParam
    }
  }
}