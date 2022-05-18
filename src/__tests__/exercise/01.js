// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import {act} from 'react-dom/test-utils'
import {createRoot} from 'react-dom/client'
import Counter from '../../components/counter'

// NOTE: this is a new requirement in React 18
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
// Luckily, it's handled for you by React Testing Library :)
global.IS_REACT_ACT_ENVIRONMENT = true

beforeEach(() => {
  document.body.innerHTML = ''
})

test('counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div')
  document.body.append(div)

  act(() => {
    const root = createRoot(div)
    root.render(<Counter />)
  })

  // console.log(document.body.innerHTML)
  const message = div.firstChild.querySelector('div')
  // console.log(message.textContent)
  expect(message.textContent).toBe('Current count: 0')

  const [decrement, increment] = document.body.querySelectorAll('button')

  const incrementClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })
  act(() => increment.dispatchEvent(incrementClickEvent))
  expect(message.textContent).toBe('Current count: 1')

  const decrementClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })
  act(() => decrement.dispatchEvent(decrementClickEvent))
  expect(message.textContent).toBe('Current count: 0')
})

test('counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div')
  document.body.append(div)

  act(() => {
    const root = createRoot(div)
    root.render(<Counter />)
  })

  // console.log(document.body.innerHTML)
  const message = div.firstChild.querySelector('div')
  // console.log(message.textContent)
  expect(message.textContent).toBe('Current count: 0')

  const [decrement, increment] = document.body.querySelectorAll('button')
  const incrementClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })
  act(() => increment.dispatchEvent(incrementClickEvent))
  expect(message.textContent).toBe('Current count: 1')

  const decrementClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })
  act(() => decrement.dispatchEvent(decrementClickEvent))
  expect(message.textContent).toBe('Current count: 0')
})

/* eslint no-unused-vars:0 */
