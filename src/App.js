import React from 'react';
import AdSense from 'react-adsense';

const App = () => {
  return (
    // responsive and native ads
<AdSense.Google
  client='ca-pub-3784293912731233'
  slot='7179069138'
  style={{ display: 'block' }}
  layout='in-article'
  format='fluid'
/>
  )
}

export default App
