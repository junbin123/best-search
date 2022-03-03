export const getProductTrends = async ({ keyword }) => {
  if (!keyword) {
    return
  }
  try {
    const response = await fetch(
      'http://3.141.23.218:5000/interview/keyword_search',
      {
        method: 'POST',
        body: JSON.stringify({
          login_token: 'INTERVIEW_SIMPLY2021',
          search_phrase: keyword,
        }),
      }
    ).then((res) => {
      return res.json()
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}
