import type { ILayoutView } from '../view/layout-view.types'

export interface ILayoutController {
  layoutView: ILayoutView
  toggleSidebar(): void
}
