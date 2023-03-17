const basePositions: { [name: number]: number } = {
  1: 0,
  2: 330,
  3: 100,
}
const totalPositions = 3
const standardOffset = 20

const targetOffset = (() => ((360 - basePositions[active]) + standardOffset) % 360)
const selTargetOffset = ((id: number) => ((360 - basePositions[id]) + standardOffset) % 360)
const moveStrengt = (() => Math.min(10, Math.abs(targetOffset() - realOffset), Math.max(5, Math.abs(prevOffset - realOffset))))
let realOffset = 0;
let prevOffset = 0;
let direction = 'left'

let scrolling = 0
let active = 1

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
        console.log(result)
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
  if (targetOffset() !== realOffset) {
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
  direction = 'left'
  if (active > totalPositions) {
    active = 1
  }
}

export function decreaseActive() {
  prevOffset = realOffset
  active -= 1
  direction = 'right'
  if (active < 1) {
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

