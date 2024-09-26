import ButtonStyle from './ButtonStyle'

export default function PreviewDark({ isDarkMode, handleSetIsDarkMode }:any) {
  return (
    <button onClick={() => handleSetIsDarkMode(!isDarkMode)}>
      <ButtonStyle
        buttonEmoji={isDarkMode ? '🌕' : '🌞'}
        buttonText={isDarkMode ? 'Dark' : 'Light'}
        buttonActive={isDarkMode}
      />
    </button>
  )
}
