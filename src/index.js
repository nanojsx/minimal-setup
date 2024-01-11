import { renderSSR } from 'nano-jsx'

const test = renderSSR(() => <p>lorem ipsum</p>)

console.log(test)
