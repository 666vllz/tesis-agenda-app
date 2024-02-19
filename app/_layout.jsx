import { Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import "@/style/unistyles"

const RootLayout = () => {
  const { styles } = useStyles(stylesheet)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Unistyles example</Text>
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  text: {
    color: theme.colors.typography,
  },
}))

export default RootLayout
