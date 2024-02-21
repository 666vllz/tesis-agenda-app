import { Pressable, Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import FormikTextInput from "./formik-text-input"

const SignUpForm = ({ onSubmit }) => {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email</Text>
      <FormikTextInput name="email" placeholder="example@example.com" />
      <Text style={styles.text}>Password</Text>
      <FormikTextInput name="password" placeholder="••••••••" secureTextEntry />
      <Pressable style={styles.pressable} onPress={onSubmit}>
        <Text style={styles.text}>Sign Up</Text>
      </Pressable>
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    marginTop: 20,
    gap: 10,
  },
  pressable: {
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 5,
  },
  text: {
    color: theme.colors.textPrimary,
  },
}))

export default SignUpForm
