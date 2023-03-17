const basePositions: { [name: number]: number } = {
  1: 0,
  2: 330,
}
const totalPositions = 2
const standardOffset = 20

let active = 1

// Useful functions
export function getPosition(id: number) {
  if (basePositions[id] == null) {
    id = 1
  }
  if (basePositions[active] == null) {
    active = 1
  }
  
  return basePositions[id] + (360 - basePositions[active]) + standardOffset;
}

export function setActive(id: number) {
  if (basePositions[active] != null) {
    active = id
  }
}

export function increaseActive() {
  active += 1
  if (active > totalPositions) {
    active = 1
  }
}

export function decreaseActive() {
  active -= 1
  if (active < 1) {
    active = totalPositions
  }
}

// Helpful functions
export function deg(degrees: number) {
  return degrees * (Math.PI / 180)
}

