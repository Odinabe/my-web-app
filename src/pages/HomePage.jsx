import { useState, useEffect } from 'react'

const MESSAGES = [
  "今日もおつかれさま。まずは深呼吸してみましょう 🌿",
  "完璧じゃなくて大丈夫。できていることに目を向けてみてね。",
  "少し温かい飲み物を飲んで、肩の力を抜きましょう ☕",
  "自分のペースで進めば、それで百点満点です 🌸",
  "モヤモヤした気持ちは、言葉にして吐き出しても大丈夫。",
  "今日がんばった自分に、小さなごほうびをあげてください ✨"
]

export default function HomePage({ onNavigate }) {
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % MESSAGES.length)
    }, 30000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div style={{
      maxWidth: '680px',
      margin: '0 auto',
      padding: '24px 16px',
      fontFamily: '"Hiragino Maru Gothic ProN", "Yu Gothic UI", sans-serif',
      color: '#4a3e3d'
    }}>
      
      {/* メインヘッダー（クリニックの看板） */}
      <header style={{
        background: 'linear-gradient(135deg, #fff5f7 0%, #f3e8ff 100%)',
        borderRadius: '24px',
        padding: '36px 24px',
        textAlign: 'center',
        boxShadow: '0 8px 20px rgba(236, 72, 153, 0.08)',
        border: '3px solid #ffffff',
        marginBottom: '28px'
      }}>
        <div style={{ fontSize: '42px', marginBottom: '8px' }}>🍡</div>
        <h1 style={{
          fontSize: '28px',
          color: '#831843',
          margin: '0 0 10px 0',
          letterSpacing: '1px'
        }}>
          マシュマロ解剖クリニック
        </h1>
        <p style={{
          color: '#9d174d',
          fontSize: '14px',
          margin: 0,
          opacity: 0.85
        }}>
          カチコチに固まったココロを、やわらかくほぐす診療所
        </p>
      </header>

      {/* 30秒ごとのメッセージ吹き出し */}
      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        padding: '20px 24px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
        border: '2px solid #fce7f3',
        marginBottom: '32px',
        position: 'relative'
      }}>
        <div style={{
          display: 'inline-block',
          background: '#fbcfe8',
          color: '#9d174d',
          fontSize: '11px',
          fontWeight: 'bold',
          padding: '4px 12px',
          borderRadius: '12px',
          marginBottom: '10px'
        }}>
          ✉️ クリニックからの処方箋（30秒メッセージ）
        </div>
        <p style={{
          fontSize: '15px',
          lineHeight: '1.6',
          margin: 0,
          color: '#374151',
          fontWeight: 'bold'
        }}>
          「 {MESSAGES[messageIndex]} 」
        </p>
      </div>

      {/* 診察室（コンテンツメニュー） */}
      <section>
        <h2 style={{
          fontSize: '18px',
          color: '#831843',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span>🩺</span> 本日の診察メニュー
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          
          {/* カードゲーム */}
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '24px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
            border: '2px solid #f3e8ff',
            display: 'flex',
            flexDirection: 'column',
            justify: 'space-between'
          }}>
            <div>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🧩</div>
              <h3 style={{ fontSize: '18px', color: '#1f2937', margin: '0 0 8px 0' }}>
                価値観の解剖（カードゲーム）
              </h3>
              <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
                あなたが心の奥で大切にしたい本音（自由・安心・成長など）を3つだけ見つけ出します。
              </p>
            </div>
            
            <button
              onClick={() => onNavigate('game')}
              style={{
                width: '100%',
                padding: '12px',
                background: 'linear-gradient(135deg, #ec4899 0%, #d946ef 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '14px',
                fontWeight: 'bold',
                fontSize: '14px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3)'
              }}
            >
              診察をうける ➔
            </button>
          </div>

        </div>
      </section>

    </div>
  )
}