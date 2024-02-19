import { Stack } from "expo-router"
import { createStyleSheet, useStyles } from "react-native-unistyles"

const AuthLayout = () => {
  const { styles, theme } = useStyles(stylesheet)

  return (
    <Stack
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: theme.colors.textPrimary,
        headerBackTitleVisible: false,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="sign-in"
        options={{ headerTitle: "Iniciar Sesíon" }}
      />
      <Stack.Screen name="sign-up" options={{ headerTitle: "Registrarse" }} />
    </Stack>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  header: {
    backgroundColor: theme.colors.backgroundPrimary,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
}))

export default AuthLayout
