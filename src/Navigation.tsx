import { useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { MinusIcon, HomeIcon, UserIcon, PhotoIcon, AcademicCapIcon, CommandLineIcon, ShareIcon } from '@heroicons/react/24/solid'

import * as manager from './ScrollManager'

import './App.css'

function Navigation(props: {active: number}) {
  
  const styles = useSpring({
    x: (props.active - 1) * 56,
  })

  return (
    <div className="svg-container">
      <animated.div style={styles} className="svg-selector svg-selector-underlay" />
      <animated.div style={styles} className="svg-selector svg-selector-overlay" />

      <HomeIcon className="svg svg-clickable" onClick={() => manager.setActive(1)} />
      <MinusIcon className="svg" />
      <UserIcon className="svg svg-clickable" onClick={() => manager.setActive(2)} />
      <MinusIcon className="svg" />
      <PhotoIcon className="svg svg-clickable" onClick={() => manager.setActive(3)} />
      <MinusIcon className="svg" />
      <AcademicCapIcon className="svg svg-clickable" onClick={() => manager.setActive(4)} />
      <MinusIcon className="svg" />
      <CommandLineIcon className="svg svg-clickable" onClick={() => manager.setActive(5)} />
      <MinusIcon className="svg" />
      <ShareIcon className="svg svg-clickable" onClick={() => manager.setActive(6)} />

      
    </div>
  )
}

export default Navigation;