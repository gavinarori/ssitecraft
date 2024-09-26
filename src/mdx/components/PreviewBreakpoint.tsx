import ButtonStyle from './ButtonStyle'

export default function PreviewBreakpoint({
  breakpointActive,
  breakpointEmoji,
  handleSetPreviewWidth,
  breakpointWidth,
  breakpointText,
}:any) {
  return (
    <button onClick={() => handleSetPreviewWidth(breakpointWidth)}>
      <ButtonStyle
        buttonEmoji={breakpointEmoji}
        buttonText={breakpointText}
        buttonActive={breakpointActive}
      />
    </button>
  )
}
