import React from 'react'

import { HorizontalLine } from 'components/shared/loadingSkeletons/skeleton'

const LoadingTranscript = (/* props */) => {
  const commonBarStyles = { height: 12, marginBottom: 8 }
  const section = (
    <div style={{ marginBottom: 20 }}>
      <HorizontalLine style={{ width: '100%', ...commonBarStyles }} />
      <HorizontalLine style={{ width: '95%', ...commonBarStyles }} />
      <HorizontalLine style={{ width: '90%', ...commonBarStyles }} />
      <HorizontalLine style={{ width: '80%', ...commonBarStyles }} />
      <HorizontalLine style={{ width: '60%', ...commonBarStyles }} />
    </div>
  )

  return (
    <div style={{ flex: 1 }}>
      {section}
      {section}
      {section}
    </div>
  )
}

export default LoadingTranscript
