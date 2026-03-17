import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/tools/chat-pdf" element={<ChatPdfPage />} /> */}
    </Routes>
  )
}
