import ButtonStyle from './ButtonStyle'

export default function PreviewRtl({ isRtl, handleSetIsRtl }:any) {
  return (
    <button onClick={() => handleSetIsRtl(!isRtl)}>
      <ButtonStyle
        buttonEmoji={isRtl ? '👈' : '👉'}
        buttonText={isRtl ? 'RTL' : 'LTR'}
        buttonActive={isRtl}
      />
    </button>
  )
}
