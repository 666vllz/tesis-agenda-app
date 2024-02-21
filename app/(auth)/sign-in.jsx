import { Text, View } from "react-native"
import { createStyleSheet, useStyles } from "react-native-unistyles"
import { Formik } from "formik/dist"
import SignInForm from "@/components/sign-in-form"
import * as Yup from "yup"

const initialValues = {
  email: "",
  password: "",
}

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password requires 8-64 characters long.")
    .max(64, "Password requires 8-64 characters long.")
    .required("Required"),
})

const SignInScreen = () => {
  const { styles } = useStyles(stylesheet)

  const onSubmit = async (values) => {
    const email = values.email
    const password = values.password

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.text}>Sign in to your account</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SignInSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: theme.colors.textPrimary,
  },
  text: {
    color: theme.colors.textSecondary,
  },
}))

export default SignInScreen
