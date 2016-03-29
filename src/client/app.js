import {Observable} from 'rx'
import {renderHeader} from './header/header'
import {renderFooter} from './footer/footer'
import {div} from '@cycle/dom'
import Home from './pages/home'
import Articles from './pages/articles'
import Admin from './admin'

const routes = {
  '/': Home,
  '/home': Home,
  '/articles': Articles,
  '/admin': Admin
}

function view(children) {
  return div('.app-view', [
    renderHeader(),
    children,
    renderFooter()
  ])
}

export function App(sources) {
  // routing
  const mainRouter$ = sources.router.define(routes)
  const children$ = mainRouter$.map(
    ({path, value}) => value({...sources, router: sources.router.path(path)})
  )
  const vtree$ = children$.map(x => x.DOM).map(view)
  const http$ = Observable.just({})

  // http$.subscribe((request) => {
  //   console.log(request)
  // })

  return {
    DOM: vtree$,
    HTTP: http$
  }
}
