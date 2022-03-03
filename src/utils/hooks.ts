import { useEffect, useState } from 'react'
export const useFetch = ({ keyword }: { keyword: string }) => {
  const [result, setResult] = useState('')
  const fetchResult = async () => {
    try {
      const response = await fetch(
        'http://3.141.23.218:5000/interview/keyword_search',
        {
          method: 'POST',
          body: JSON.stringify({
            login_token: 'INTERVIEW_SIMPLY2021',
            search_phrase: 'hat',
          }),
        }
      ).then((res) => {
        return res.json()
      })
      setResult(response)
    } catch (error) {
      setResult('')
    }
  }
  useEffect(() => {
    if (keyword) fetchResult()
  }, [keyword])
  return result
}
