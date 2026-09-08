import TextType from './text-type.tsx';
const TextTypeUsage = () => {
  <TextType 
  text={["Text typing effect", "for your websites", "Happy coding!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor
  cursorCharacter="_"
  deletingSpeed={50}
  cursorBlinkDuration={0.5}
/>
}

export default TextTypeUsage;