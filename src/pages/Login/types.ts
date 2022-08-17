export class ILoginForm {
  email = ''
  password = ''
  error = new ILoginError()
}

export class ILoginError {
  email = ''
  password = ''
}
