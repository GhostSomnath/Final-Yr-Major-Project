import { useTheme } from '../context/themeContext'

function ContactUs() {
  const {theme}=useTheme();
  return (
    <div className={'soft '+theme}>
      ContactUs
    </div>
  )
}

export default ContactUs