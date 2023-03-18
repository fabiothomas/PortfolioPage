const pathReference: { [name: number]: string } = {
  1: '/aboutme',
  2: '/education',
  3: '/work',
}

export function updatePath(id: number) {
  window.history.pushState(null, '', pathReference[id])
}

export function getPathId(): number {
  console.log(window.location.pathname)

  let result = Object.keys(pathReference).find((key: any) => pathReference[key] === window.location.pathname)

  if (result != null) {
    return +result
  }
  return 1;
}