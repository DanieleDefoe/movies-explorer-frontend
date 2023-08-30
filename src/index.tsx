import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { App, Preloader } from './components'

const rootNode = document.getElementById('root')!
const root = createRoot(rootNode)

root.render(
  <StrictMode>
    <Suspense fallback={<Preloader />}>
      <App />
    </Suspense>
  </StrictMode>,
)
