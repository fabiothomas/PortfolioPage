const basePositions: { [name: number]: number } = {
  1: 0,
  2: 330,
}
const totalPositions = 2
const standardOffset = 20

const targetOffset = (() => ((360 - basePositions[active]) + standardOffset) % 360)
const moveStrengt = (() => Math.min(10, Math.abs(targetOffset() - realOffset), Math.max(5, Math.abs(prevOffset - realOffset))))
let realOffset = 0;
let prevOffset = 0;
let direction = 'right'

let active = 1

// Useful functions
export function update() {
  if (targetOffset() !== realOffset) {
    if (direction === 'right') {
      realOffset += moveStrengt() / 5
      if (realOffset > 360) {
        realOffset -= 360
      }
    }
    else {
      realOffset -= moveStrengt() / 5
      if (realOffset < 0) {
        realOffset += 360
      }
    }
  }
}

export function getPosition(id: number) {
  if (basePositions[id] == null) {
    id = 1
  }
  if (basePositions[active] == null) {
    active = 1
  }
  
  return basePositions[id] + realOffset;
}

export function setActive(id: number) {
  if (basePositions[active] != null) {
    prevOffset = realOffset
    active = id
    direction = 'right'
  }
}

export function increaseActive() {
  prevOffset = realOffset
  active += 1
  direction = 'right'
  if (active > totalPositions) {
    active = 1
  }
}

export function decreaseActive() {
  prevOffset = realOffset
  active -= 1
  direction = 'left'
  if (active < 1) {
    active = totalPositions
  }
}

// Helpful functions
export function deg(degrees: number) {
  return degrees * (Math.PI / 180)
}

