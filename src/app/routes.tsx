import { createBrowserRouter } from 'react-router'
import LandingPage from '../pages/LandingPage'
import {
  AdministratorWorkspace,
  ContestantWorkspace,
  ExpertReviewWorkspace,
} from '../pages/WorkspacePages'

export const router = createBrowserRouter([
  { path: '/', Component: LandingPage },
  { path: '/contestant', Component: ContestantWorkspace },
  { path: '/expert-review', Component: ExpertReviewWorkspace },
  { path: '/administrator', Component: AdministratorWorkspace },
  { path: '*', Component: LandingPage },
])
