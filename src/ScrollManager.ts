import * as path from './PathManager'

const basePositions: { [name: number]: number } = {
  404: 45,
  1: 0,
  2: 315,
  3: 270,
  4: 225,
  5: 180,
  6: 135,
  7: 90,
}
const totalPositions = 6
const standardOffset = 20

let scrolling = 0 //scrolling cooldown before automatic correction
let active = path.getPathId() //indicates which object is selected
let state = 0 //indicates which object is shown, is '0' when no object is shown

const targetOffset = (() => ((360 - basePositions[active]) + standardOffset) % 360)
const selTargetOffset = ((id: number) => ((360 - basePositions[id]) + standardOffset) % 360)
const moveStrengt = (() => Math.min(10, Math.max(0.1, Math.abs(targetOffset() - realOffset)), Math.max(5, Math.abs(prevOffset - realOffset))))
let realOffset = selTargetOffset(active);
let prevOffset = selTargetOffset(active);
let direction = 'left' //direction in which objects move

// Useful functions
export function update() {

  if (scrolling > 0) {
    scrolling -= 1

    if (scrolling === 0) {
      prevOffset = realOffset

      let targetId = 1
      let record = 180
      let direct = 'right'

      for (let i = 1; i < totalPositions + 1; i++) {
        let result = Math.abs(selTargetOffset(i) - realOffset)
        if (result > 180) {
          result = 360 - result

          if (selTargetOffset(i) - realOffset > 0) {
            direct = 'right'
          }
          else {
            direct = 'left'
          }
        }
        else {
          if (selTargetOffset(i) - realOffset > 0) {
            direct = 'left'
          }
          else {
            direct = 'right'
          }
        }
        if (result < record) {
          record = result
          targetId = i
          direction = direct
        }
      }

      active = targetId
    }

    return
  }
  if (Math.floor(targetOffset()) !== Math.floor(realOffset)) {
    state = 0
    if (direction === 'left') {
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
  else {
    if (state === 0 || state !== active) {
      state = active

      path.updatePath(state)
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

export function getState() {
  return state
}

export function getActive() {
  return active
}

export function setActive(id: number) {
  if (basePositions[active] != null) {
    prevOffset = realOffset

    if (active < id) {
      direction = 'left'
    }
    else {
      direction = 'right'
    }

    active = id
  }
}

export function increaseActive() {
  prevOffset = realOffset
  active += 1
  direction = 'left'
  if (active > totalPositions) {
    active = 1
  }
}

export function decreaseActive() {
  prevOffset = realOffset
  active -= 1
  direction = 'right'
  if (active < 1 || active > totalPositions) {
    active = totalPositions
  }
}

export function smoothIncreaseActive() {
  scrolling = 10
  realOffset += 3
  if (realOffset > 360) {
    realOffset -= 360
  }
}

export function smoothDecreaseActive() {
  scrolling = 10
  realOffset -= 3
  if (realOffset < 0) {
    realOffset += 360
  }
}

// Helpful functions
export function deg(degrees: number) {
  return degrees * (Math.PI / 180)
}