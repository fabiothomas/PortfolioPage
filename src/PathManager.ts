import * as manager from './ScrollManager'

const routes: { [name: string]: number } = {
  "/aboutme": 1,
  "/education": 2,
  "/work": 3,
  "/comingsoon": 4,

  "/": 1,
  "404": 404
}

export function updatePath(id: number) {
  const path = Object.keys(routes).find((key: any) => routes[key] === id)

  if (path !== "404") {
    window.history.pushState({}, '', path)
  }
}

export function getPathId(): number {
  const path = window.location.pathname

  //let result = Object.keys(pathReference).find((key: any) => pathReference[key] === window.location.pathname)
  let result = routes[path] || routes["404"]

  return +result;
}

window.onpopstate = (event) => {
  event.preventDefault;

  const path = window.location.pathname
  let result = routes[path] || routes["404"]
  manager.setActive(+result)
};