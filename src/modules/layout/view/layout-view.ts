import type { ILayoutView } from './layout-view.types'

export class LayoutView implements ILayoutView {
  openSidebar: boolean

  constructor() {
    this.openSidebar = false
  }
}
