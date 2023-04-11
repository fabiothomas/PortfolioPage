import { animated, useSpring, useTransition } from '@react-spring/web'
import { createNoise2D } from 'simplex-noise';

const noise2D = createNoise2D();
let count = 0;
let noise = 0;
;
export function Fade(isVisible: boolean, children: JSX.Element, className?: string, data:number[] = [1, 2, 3]) {  
  const styles = useSpring({
    opacity: isVisible ? 1 : 0
  })

  return <animated.div style={styles}>{children}</animated.div>
}

export function Size(isVisible: boolean, children: JSX.Element, size: number, className?: string) {
  count += 1
  noise = (Math.abs(noise2D(count, 1)) + 0.5) * size

  // const styles = useSpring({
  //   from: { scale: isVisible ? size : 0 },
  //   to: { scale: isVisible ? noise : 0 },
  //   loop: true
  // })
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? size : 0
  })

  return <animated.div className={className} style={styles}>{children}</animated.div>
}

export function Scroll(children: JSX.Element, position: number, className?: string) {
  const styles = useSpring({
    top: position
  })

  return <animated.div className={className} style={styles}>{children}</animated.div>
}