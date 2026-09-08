import BlurText from "./blur-text";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const BlurTextUsage = () => {
    <BlurText
    text="Isn't this so cool?!"
    delay={200}
    animateBy="words"
    direction="top"
    onAnimationComplete={handleAnimationComplete}
    className="text-2xl mb-8"
    />
}

export default BlurTextUsage;