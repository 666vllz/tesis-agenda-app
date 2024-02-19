import { Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const SignUpScreen = () => {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: theme.colors.textPrimary,
  },
}))

export default SignUpScreen
