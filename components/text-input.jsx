import { useState } from "react"
import { TextInput as NativeTextInput } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const TextInput = ({ style, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)
  const { styles, theme } = useStyles(stylesheet)

  const focusedStyle = isFocused && {
    borderColor: theme.colors.primary,
  }

  const textInputStyle = [styles.textInput, focusedStyle, style]

  return (
    <NativeTextInput
      style={textInputStyle}
      placeholder="correo@ejemplo.com"
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      autoCapitalize="none"
      placeholderTextColor={theme.colors.textTertiary}
      {...props}
    />
  )
}

const stylesheet = createStyleSheet((theme) => ({
  textInput: {
    backgroundColor: theme.colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: theme.colors.textPrimary,
  },
}))

export default TextInput
