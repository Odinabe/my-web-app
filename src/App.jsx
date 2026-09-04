import { useState } from 'react'
import './App.css'

function App() {
  // イイネ（いいね！）のカウント機能
  const [likes, setLikes] = useState(0)

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      
      {/* プロフィールヘッダー */}
      <div style={{ textAlign: 'center' }}>
        <img 
          src="https://via.placeholder.com/120" 
          alt="プロフィール画像" 
          style={{ borderRadius: '50%', marginBottom: '16px' }}
        />
        <h1 style={{ fontSize: '28px', margin: '8px 0' }}>soma</h1>
        <p style={{ color: '#666', fontSize: '14px' }}>Web Developer / 学習中</p>
      </div>

      {/* 自己紹介本文 */}
      <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', margin: '24px 0' }}>
        <h2 style={{ fontSize: '18px', marginTop: 0 }}>About Me</h2>
        <p style={{ lineHeight: '1.6', color: '#333' }}>
          はじめまして！現在 React と Vite を使って Web アプリケーションの開発を学んでいます。
          趣味はプログラミングと新しい技術のキャッチアップです。
        </p>
      </div>

      {/* スキル・興味のあること */}
      <div style={{ margin: '24px 0' }}>
        <h2 style={{ fontSize: '18px' }}>Skills & Interests</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li>JavaScript / React</li>
          <li>HTML / CSS</li>
          <li>GitHub Codespaces</li>
        </ul>
      </div>

      {/* インタラクティブな「いいね」ボタン */}
      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        <button 
          onClick={() => setLikes(likes + 1)}
          style={{
            padding: '10px 24px',
            fontSize: '16px',
            borderRadius: '20px',
            border: 'none',
            background: '#0070f3',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          👍 いいね！ {likes}
        </button>
      </div>

    </div>
  )
}

export default App