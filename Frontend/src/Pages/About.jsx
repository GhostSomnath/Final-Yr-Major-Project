import React from 'react'
import { useTheme } from '../context/themeContext'

function About() {
  const {theme}=useTheme();
  return (
    <div className={theme+"soft"}>About</div>
  )
}

export default About