import { Route, Routes } from 'react-router-dom'

export default function Index() {
  return (
    <>
      <h1>Starblast</h1>
      <div>
        <Routes>
          <Route index path='/' element={<h1>Gello</h1>} />
        </Routes>
      </div>
    </>
  )
}