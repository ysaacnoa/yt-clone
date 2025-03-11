import type { ILayoutView } from '../view/layout-view.types'
import type { ILayoutController } from './layout-controller.types'

export class LayoutController implements ILayoutController {
  layoutView: ILayoutView

  constructor(params: { layoutView: ILayoutView }) {
    this.layoutView = params.layoutView
  }

  toggleSidebar(): void {
    this.layoutView.openSidebar = !this.layoutView.openSidebar
  }
}
