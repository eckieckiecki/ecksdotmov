declare module './winbox.min.jsx' {
    interface WinBoxOptions {
      setBackground(arg0: string): unknown;
      title?: string
  /** 
   * Icon supports both native image urls and React package resources:
   *
   * Example:
   * ```
   * import icon from './icon.jpg';
   * 
   * <WinBox icon={icon} {...otherProps} />
   * ```
   */
  icon?: string
  id?: string
  children?: ReactElement | ReactElement[] | null
  url?: string // When you use this, the children elements will be ignored.

  noAnimation?: boolean,
  noShadow?: boolean,
  noHeader?: boolean,
  noMin?: boolean,
  noMax?: boolean,
  noFull?: boolean,
  noClose?: boolean,
  noResize?: boolean,
  noMove?: boolean,
  modal?: boolean,
  hide?: boolean,
  mount?: HTMLElement,

  index?: number,
  border?: string,
  background?: string,

  max?: boolean,
  min?: boolean,
  fullscreen?: boolean,

  x?: string | number | 'center' | 'right',
  y?: string | number | 'center' | 'bottom',
  top?: string | number,
  bottom?: string | number,
  left?: string | number,
  right?: string | number,
  height?: string | number,
  width?: string | number,

  /**
   * This callback is called BEFORE the winbox goes to close process. So if you want to destroy the React WinBox component while it is triggered, be sure to wrap destroying actions within `setTimeout` so that they occur after the winbox.js DOM is truly closed，e.g. `setTimeout(() => setState({showWindow: false}))`
   *
   * see the following document for more detail about the argument and the return value.
   * @see https://github.com/nextapps-de/winbox
   * @param force Whether you should not abort the winbox to close. If this is true, you MUST return false, or some problems will happen.
   * @return noDefaultClose - true if the winbox does not need the default close process, for example, when it needs a confirmation to close instead of being closed suddenly.
   */
  onClose?: (force: boolean) => boolean | undefined | void,
  onMove?: (x: number, y: number) => any,
  onResize?: (width: number, height: number) => any,
  onBlur?: () => any,
  onFocus?: () => any,

  /** Used for themeing. The `no-xxx` classes that winbox.js already appointed can not assign here, use special props instead, e.g. class `no-resize` to prop `noResize={true}` */
  className?: string | number,

  minWidth?: number | string,
  minHeight?: number | string,
  maxWidth?: number | string,
  maxHeight?: number | string,

  onCreate?: (options: any) => any,
  onFullscreen?: () => any,
  onMinimize?: () => any,
  onMaximize?: () => any,
  onRestore?: () => any,
  onHide?: () => any,
  onShow?: () => any,

  /**
   * an array of WinBoxControlInfo
   * @see https://github.com/nextapps-de/winbox#custom-controls
   */
  customControls?: WinBoxControlInfo[],
}

type WinBoxControlInfo = {
  /** Index to jump into native controls. If no index assigned, custum controls will be arranged side-by-side automatically on the left of native controls*/
  index?: number
  /** a name to identify the button, can also style it by using css, may starts with `wb-` */
  class?: string
  /** an image resource same like icon prop */
  image: string
  click?: () => void,
}
}
    export default class WinBox {
      window: any;
      focus() {
        throw new Error('Method not implemented.');
      }
      closed: any;
      constructor(options: WinBoxOptions);
      setBackground(color: string): void;
    }