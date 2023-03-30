import useFetch from "./useFetch/useFetch"

const App = () => {
  const res = useFetch('https://dog.ceo/api/breeds/image/random')  // Fetching Data from Custom Hook
  console.log(res)
  return (
    <div>
      <h1>Hello World</h1>

    </div>
  )
}

export default App