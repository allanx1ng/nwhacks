import { useState, useEffect } from "react"

export default function () {
  //   const data = []

  //   const getCourses = async (event, callback) => {
  //     await fetch("https://ubcexplorer.io/getAllCourses", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Success:", data)
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error)
  //       })
  //   }

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)

      try {
        const response = await fetch("https://ubcexplorer.io/getAllCourses")
        const json = await response.json()
        setData(json)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  if (!data) {
    return null
  }

  return (
    <div>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  )

}
