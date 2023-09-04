import { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import { MinusIcon, HomeIcon, UserIcon, PhotoIcon, AcademicCapIcon, CommandLineIcon, ShareIcon } from '@heroicons/react/24/solid'

import * as manager from './ScrollManager'

import './App.css'

function Navigation(props: {active: number}) {
  const basePos = 6;
  const clamp = (x: number) => x < 1 ? basePos : (x > basePos ? 1 : x)

  const stylesOver = useSpring({
    x: -(clamp(props.active) - 1) * 56 + 56 * (basePos - 1),
    opacity: props.active <= basePos ? 0.2 : 0,
  })

  const stylesUnder = useSpring({
    x: -(clamp(props.active) - 1) * 56 + 56 * (basePos - 1),
    opacity: props.active <= basePos ? 1 : 0,
  })

  return (
    <div className="svg-container">
      <animated.div style={stylesUnder} className="svg-selector svg-selector-underlay" />
      <animated.div style={stylesOver} className="svg-selector svg-selector-overlay" />

      <ShareIcon className="svg svg-clickable" onClick={() => manager.setActive(6)} />
      <MinusIcon className="svg" />
      <CommandLineIcon className="svg svg-clickable" onClick={() => manager.setActive(5)} />
      <MinusIcon className="svg" />
      <AcademicCapIcon className="svg svg-clickable" onClick={() => manager.setActive(4)} />
      <MinusIcon className="svg" />
      <PhotoIcon className="svg svg-clickable" onClick={() => manager.setActive(3)} />
      <MinusIcon className="svg" />
      <UserIcon className="svg svg-clickable" onClick={() => manager.setActive(2)} />
      <MinusIcon className="svg" />
      <HomeIcon className="svg svg-clickable" onClick={() => manager.setActive(1)} />
      
    </div>
  )
}

export default Navigation;