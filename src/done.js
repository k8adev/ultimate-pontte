/**
 * @module done uses external @module canvas-confetti
 * @see {@link https://github.com/catdad/canvas-confetti}
 */
import confetti from 'canvas-confetti';

/**
 * @function fireworks
 * @author {@link https://www.kirilv.com/canvas-confetti/}
 */
const fireworks = () => {
  const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
  };

  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  // eslint-disable-next-line consistent-return
  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti({
      ...defaults,
      particleCount,
      origin: {
        x: randomInRange(0.1, 0.3),
        y: Math.random() - 0.2,
      },
    });

    confetti({
      ...defaults,
      particleCount,
      origin: {
        x: randomInRange(0.7, 0.9),
        y: Math.random() - 0.2,
      },
    });
  }, 250);
};

export default fireworks;
