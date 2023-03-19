import * as manager from './ScrollManager'

const pathReference: { [name: number]: string } = {
  1: '/aboutme',
  2: '/education',
  3: '/work',
}

const routes: { [name: string]: number } = {
  "404": 404,
  "/": 1,
  "/aboutme": 1,
  "/education": 2,
  "/work": 3,
}

export function updatePath(id: number) {
  window.history.pushState({}, '', pathReference[id])
}

export function getPathId(): number {
  const path = window.location.pathname

  //let result = Object.keys(pathReference).find((key: any) => pathReference[key] === window.location.pathname)
  let result = routes[path] || routes["404"]

  if (result != null) {
    return +result
  }
  return 1;
}

window.onpopstate = (event) => {
  event.preventDefault;

  const path = window.location.pathname
  let result = routes[path] || routes["404"]
  manager.setActive(+result)
};