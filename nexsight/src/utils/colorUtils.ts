const hexToRGBA = (hex: string, alpha: number): string => {
  // Remove the # if it exists
  const cleanedHex = hex.replace("#", "");

  // Parse r, g, b values (assumes 6-digit hex)
  const r = parseInt(cleanedHex.substring(0, 2), 16);
  const g = parseInt(cleanedHex.substring(2, 4), 16);
  const b = parseInt(cleanedHex.substring(4, 6), 16);

  // Clamp alpha between 0 and 1
  const safeAlpha = Math.max(0, Math.min(1, alpha));

  return `rgba(${r}, ${g}, ${b}, ${safeAlpha})`;
};

export { hexToRGBA };
