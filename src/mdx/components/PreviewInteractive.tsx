import ButtonStyle from './ButtonStyle'

export default function PreviewInteractive({ isInteractive, handleSetIsInteractive }:any) {
  return (
    <button onClick={() => handleSetIsInteractive(!isInteractive)}>
      <ButtonStyle
        buttonEmoji={isInteractive ? '🙋‍♀️' : '🙅‍♀️'}
        buttonText="Alpine JS"
        buttonActive={isInteractive}
      />
    </button>
  )
}
