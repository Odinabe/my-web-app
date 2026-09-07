import { useState } from 'react'
import HomePage from './pages/HomePage'
import GamePage from './pages/GamePage'
import './App.css'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <nav style={{ display: 'flex', gap: '12px', padding: '16px' }}>
        <button onClick={() => setCurrentPage('home')}>🏠 ホーム</button>
        <button onClick={() => setCurrentPage('game')}>🧩 カードゲーム</button>
      </nav>

      <main>
        {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === 'game' && <GamePage />}
      </main>
    </div>
  )
}