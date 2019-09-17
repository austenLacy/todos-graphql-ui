import React from 'react'

const FullWidthBox = ({ style }) => {
  return (
    <div style={style} className="skeleton-shine skeleton-fullwidth-box" />
  )
}

const SmallBox = ({ style }) => {
  return (
    <div style={style} className="skeleton-shine skeleton-small-box" />
  )
}

const HorizontalLine = ({ style }) => {
  return (
    <div style={style} className="skeleton-shine skeleton-horizontal-line" />
  )
}

const VerticalLine = ({ style }) => {
  return (
    <div style={style} className="skeleton-shine skeleton-vertical-line" />
  )
}

const ThreeHorizontalLines = ({ style, lineStyle }) => {
  return (
    <div style={style} className="skeleton-three-lines">
      <HorizontalLine style={{ width: '90%', ...lineStyle }} />
      <HorizontalLine style={{ width: '75%', ...lineStyle }} />
      <HorizontalLine style={{ width: '60%', ...lineStyle }} />
    </div>
  )
}

const Headline = ({ style, boxStyle, linesStyle, lineStyle }) => {
  return (
    <div style={style} className="skeleton-headline">
      <SmallBox style={boxStyle} />
      <ThreeHorizontalLines style={linesStyle} lineStyle={lineStyle} />
    </div>
  )
}

const Circle = ({ style }) => {
  return (
    <div style={style} className="skeleton-shine skeleton-circle" />
  )
}

export {
  FullWidthBox,
  SmallBox,
  ThreeHorizontalLines,
  Headline,
  Circle,
  VerticalLine,
  HorizontalLine
}
