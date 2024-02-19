import { Link } from "expo-router"
import { Pressable, Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const AuthScreen = () => {
  const { styles } = useStyles(stylesheet)
  return (
    <View style={styles.container}>
      <Link href="/sign-in" asChild>
        <Pressable style={styles.pressable}>
          <Text style={styles.text}>Iniciar Sesión</Text>
        </Pressable>
      </Link>
      <Link href="/sign-up" asChild>
        <Pressable style={styles.pressable}>
          <Text style={styles.text}>Registrarse</Text>
        </Pressable>
      </Link>
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  pressable: {
    backgroundColor: theme.colors.primary,
    width: 200,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    color: theme.colors.textPrimary,
  },
}))

export default AuthScreen
