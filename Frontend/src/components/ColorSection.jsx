import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/themeContext'; // Import your theme context

const ColorSection = () => {
  const { theme } = useTheme(); // Get the current theme from context
  const isLightTheme = theme === 'light'; // Determine if it's light theme

  const [background1Color, setBackground1Color] = useState('');
  const [background2Color, setBackground2Color] = useState('');
  const [background3Color, setBackground3Color] = useState('');
  const [heading1Color, setHeading1Color] = useState('');
  const [heading2Color, setHeading2Color] = useState('');
  const [heading3Color, setHeading3Color] = useState('');
  const [paragraphColor, setParagraphColor] = useState('');
  const [hover1Color, setHover1Color] = useState('');
  const [hover2Color, setHover2Color] = useState('');
  const [hover3Color, setHover3Color] = useState('');

  // Fetch CSS variables from :root and update state
  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    if (isLightTheme) {
      setBackground1Color(rootStyles.getPropertyValue('--background1Color').trim());
      setBackground2Color(rootStyles.getPropertyValue('--background2Color').trim());
      setBackground3Color(rootStyles.getPropertyValue('--background3Color').trim());
      setHeading1Color(rootStyles.getPropertyValue('--heading1Color').trim());
      setHeading2Color(rootStyles.getPropertyValue('--heading2Color').trim());
      setHeading3Color(rootStyles.getPropertyValue('--heading3Color').trim());
      setParagraphColor(rootStyles.getPropertyValue('--paragraphColor').trim());
      setHover1Color(rootStyles.getPropertyValue('--hover1Color').trim());
      setHover2Color(rootStyles.getPropertyValue('--hover2Color').trim());
      setHover3Color(rootStyles.getPropertyValue('--hover3Color').trim());
    } else {
      // Fetch dark theme colors from CSS variables
      setBackground1Color(rootStyles.getPropertyValue('--background1Color').trim());
      setBackground2Color(rootStyles.getPropertyValue('--background2Color').trim());
      setBackground3Color(rootStyles.getPropertyValue('--background3Color').trim());
      setHeading1Color(rootStyles.getPropertyValue('--heading1Color').trim());
      setHeading2Color(rootStyles.getPropertyValue('--heading2Color').trim());
      setHeading3Color(rootStyles.getPropertyValue('--heading3Color').trim());
      setParagraphColor(rootStyles.getPropertyValue('--paragraphColor').trim());
      setHover1Color(rootStyles.getPropertyValue('--hover1Color').trim());
      setHover2Color(rootStyles.getPropertyValue('--hover2Color').trim());
      setHover3Color(rootStyles.getPropertyValue('--hover3Color').trim());
    }
  }, [theme]); // Re-run if the theme changes

  const updateColors = () => {
    document.documentElement.style.setProperty('--background1Color', background1Color);
    document.documentElement.style.setProperty('--background2Color', background2Color);
    document.documentElement.style.setProperty('--background3Color', background3Color);
    document.documentElement.style.setProperty('--heading1Color', heading1Color);
    document.documentElement.style.setProperty('--heading2Color', heading2Color);
    document.documentElement.style.setProperty('--heading3Color', heading3Color);
    document.documentElement.style.setProperty('--paragraphColor', paragraphColor);
    document.documentElement.style.setProperty('--hover1Color', hover1Color);
    document.documentElement.style.setProperty('--hover2Color', hover2Color);
    document.documentElement.style.setProperty('--hover3Color', hover3Color);
  };

  return (
    <div className={`p-6 rounded-lg shadow-md ${isLightTheme ? 'bg-gray-100' : 'bg-gray-800'}`}>
      <h2 className="text-2xl font-bold mb-4">Change Website Colors</h2>
      {isLightTheme ? (
        <div className="flex flex-col space-y-4">
          <ColorInput label="Background 1 Color:" color={background1Color} setColor={setBackground1Color} />
          <ColorInput label="Background 2 Color:" color={background2Color} setColor={setBackground2Color} />
          <ColorInput label="Background 3 Color:" color={background3Color} setColor={setBackground3Color} />
          <ColorInput label="Heading 1 Color:" color={heading1Color} setColor={setHeading1Color} />
          <ColorInput label="Heading 2 Color:" color={heading2Color} setColor={setHeading2Color} />
          <ColorInput label="Heading 3 Color:" color={heading3Color} setColor={setHeading3Color} />
          <ColorInput label="Paragraph Color:" color={paragraphColor} setColor={setParagraphColor} />
          <ColorInput label="Hover 1 Color:" color={hover1Color} setColor={setHover1Color} />
          <ColorInput label="Hover 2 Color:" color={hover2Color} setColor={setHover2Color} />
          <ColorInput label="Hover 3 Color:" color={hover3Color} setColor={setHover3Color} />

          <button 
            onClick={updateColors} 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Apply Colors
          </button>
        </div>
      ) : (
        <p className="text-gray-400">Color customization is not available in dark theme.</p>
      )}
    </div>
  );
};

const ColorInput = ({ label, color, setColor }) => (
  <div>
    <label className="block mb-2 text-gray-700">{label}</label>
    <input 
      type="color" 
      value={color} 
      onChange={(e) => setColor(e.target.value)} 
      className="cursor-pointer border border-gray-300 rounded-md"
      disabled={!color} // Disable input if dark theme color is being used
    />
  </div>
);

export default ColorSection;
