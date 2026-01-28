import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProfileCard } from './components';

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Card System Demo</h1>
      <ProfileCard
        avatarSrc="https://i.pravatar.cc/150?img=32"
        name="Jane Developer"
        role="Senior Engineer"
        tag="Pro"
        tagVariant="primary"
        location="Portland, OR"
        joinDate={new Date('2023-06-15')}
        postCount={142}
        bio="Building design systems and teaching others to do the same."
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);