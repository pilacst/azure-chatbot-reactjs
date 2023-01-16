import { useMemo, useState, useEffect } from "react"
import ReactWebChat, { createDirectLine } from "botframework-webchat"


export const ChatBot = () => {
  const [token, setToken] = useState("")
  const directLine = useMemo(() => createDirectLine({ token }), [token])

const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
};

const fetchData = async () => {
    const response = await fetch("https://localhost/api/chatbot", requestOptions)
    const data = await response.json()
    setToken(data.data.token)
  }

  useEffect(() => {
    fetchData()
  }, [])



  return (
    <>
      <div className="azure-chatbot">
        {<ReactWebChat directLine={directLine} />}
      </div>
    </>
  )
}
export default ChatBot