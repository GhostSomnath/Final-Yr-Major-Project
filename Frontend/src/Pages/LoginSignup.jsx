import React from 'react'
import { useTheme } from '../context/themeContext'

function LoginSignup() {
  const {theme}=useTheme();
  return (
    <div className={theme+"soft"}>LoginSignup</div>
  )
}

export default LoginSignup