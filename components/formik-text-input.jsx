import { StyleSheet, Text, View } from "react-native"
import { useField } from "formik"
import { useStyles } from "react-native-unistyles"
import TextInput from "./text-input"

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const { theme } = useStyles()

  const showError = meta.touched && meta.error

  const inputStyles = showError && {
    borderColor: theme.colors.borderWarning,
    backgroundColor: theme.colors.backgroundWarning,
  }

  const textOpacity = showError && {
    opacity: 1,
    color: theme.colors.textWarning,
    textAlign: "right",
  }

  const textErrorStyle = [styles.errorText, textOpacity]

  return (
    <View>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={inputStyles}
        {...props}
      />
      <Text style={textErrorStyle}>{meta.error}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  errorText: {
    opacity: 0,
    height: 20,
  },
})

export default FormikTextInput
