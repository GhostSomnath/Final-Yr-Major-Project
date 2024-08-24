import React from 'react'
import { useTheme } from '../context/themeContext'

function Updates() {
  const {theme}=useTheme();
  return (
    <div className={theme+"soft"}>Updates</div>
  )
}

export default Updates