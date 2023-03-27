import { useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { MinusIcon, UserIcon, CubeTransparentIcon, FireIcon, CommandLineIcon } from '@heroicons/react/24/solid'

import * as manager from './ScrollManager'

import './App.css'

function Navigation(props: {active: number}) {
  
  const styles = useSpring({
    x: (props.active - 1) * 56
  })

  return (
    <div className="svg-container">
      <animated.div style={styles} className="svg-selector svg-selector-underlay" />
      <animated.div style={styles} className="svg-selector svg-selector-overlay" />

      <UserIcon className="svg svg-clickable" onClick={() => manager.setActive(1)} />
      <MinusIcon className="svg" />
      <CubeTransparentIcon className="svg svg-clickable" onClick={() => manager.setActive(2)} />
      <MinusIcon className="svg" />
      <FireIcon className="svg svg-clickable" onClick={() => manager.setActive(3)} />
      <MinusIcon className="svg" />
      <CommandLineIcon className="svg svg-clickable" onClick={() => manager.setActive(4)} />
      {/* <MinusIcon className="svg" />
      <CubeTransparentIcon className="svg svg-clickable" />
      <MinusIcon className="svg" />
      <FireIcon className="svg svg-clickable" />
      <MinusIcon className="svg" />
      <CommandLineIcon className="svg svg-clickable" /> */}

      
    </div>
  )
}

export default Navigation;