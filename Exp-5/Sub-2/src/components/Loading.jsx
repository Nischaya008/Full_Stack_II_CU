import React from 'react'

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading component...</p>
      <small>This appears while lazy-loaded components are being fetched</small>
    </div>
  )
}

export default Loading
