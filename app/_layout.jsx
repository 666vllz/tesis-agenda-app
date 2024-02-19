import { Stack } from "expo-router"
import "@/style/unistyles"

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout
