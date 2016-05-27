// Type definitions for ag-grid v4.2.4
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { BorderLayout } from "../layout/borderLayout";
import { LoggerFactory } from "../logger";
import { ColumnChangeEvent } from "../columnChangeEvent";
export declare class GridPanel {
    private masterSlaveService;
    private gridOptionsWrapper;
    private columnController;
    private rowRenderer;
    private floatingRowModel;
    private eventService;
    private rowModel;
    private rangeController;
    private dragService;
    private selectionController;
    private clipboardService;
    private csvCreator;
    private mouseEventService;
    private focusedCellController;
    private layout;
    private logger;
    private forPrint;
    private scrollWidth;
    private scrollLagCounter;
    private eBodyViewport;
    private eRoot;
    private eBody;
    private eBodyContainer;
    private ePinnedLeftColsContainer;
    private ePinnedRightColsContainer;
    private eHeaderContainer;
    private eHeaderOverlay;
    private ePinnedLeftHeader;
    private ePinnedRightHeader;
    private eHeader;
    private eBodyViewportWrapper;
    private ePinnedLeftColsViewport;
    private ePinnedRightColsViewport;
    private eHeaderViewport;
    private eFloatingTop;
    private ePinnedLeftFloatingTop;
    private ePinnedRightFloatingTop;
    private eFloatingTopContainer;
    private eFloatingTopViewport;
    private eFloatingBottom;
    private ePinnedLeftFloatingBottom;
    private ePinnedRightFloatingBottom;
    private eFloatingBottomContainer;
    private eFloatingBottomViewport;
    private eAllCellContainers;
    private lastLeftPosition;
    private lastTopPosition;
    private animationThreadCount;
    agWire(loggerFactory: LoggerFactory): void;
    private onRowDataChanged();
    getLayout(): BorderLayout;
    private init();
    private disableBrowserDragging();
    private addEventListeners();
    private addDragListeners();
    private addCellListeners();
    private processMouseEvent(eventName, mouseEvent, eventSource);
    private addShortcutKeyListeners();
    private onCtrlAndA(event);
    private onCtrlAndC(event);
    private onCtrlAndV(event);
    private onCtrlAndD(event);
    getPinnedLeftFloatingTop(): HTMLElement;
    getPinnedRightFloatingTop(): HTMLElement;
    getFloatingTopContainer(): HTMLElement;
    getPinnedLeftFloatingBottom(): HTMLElement;
    getPinnedRightFloatingBottom(): HTMLElement;
    getFloatingBottomContainer(): HTMLElement;
    private createOverlayTemplate(name, defaultTemplate, userProvidedTemplate);
    private createLoadingOverlayTemplate();
    private createNoRowsOverlayTemplate();
    ensureIndexVisible(index: any): void;
    getCenterWidth(): number;
    isHorizontalScrollShowing(): boolean;
    isVerticalScrollShowing(): boolean;
    periodicallyCheck(): void;
    ensureColumnVisible(key: any): void;
    showLoadingOverlay(): void;
    showNoRowsOverlay(): void;
    hideOverlay(): void;
    private getWidthForSizeColsToFit();
    sizeColumnsToFit(nextTimeout?: number): void;
    getBodyContainer(): HTMLElement;
    getDropTargetBodyContainers(): HTMLElement[];
    getBodyViewport(): HTMLElement;
    getPinnedLeftColsContainer(): HTMLElement;
    getDropTargetLeftContainers(): HTMLElement[];
    getPinnedRightColsContainer(): HTMLElement;
    getDropTargetPinnedRightContainers(): HTMLElement[];
    getHeaderContainer(): HTMLElement;
    getHeaderOverlay(): HTMLElement;
    getRoot(): HTMLElement;
    getPinnedLeftHeader(): HTMLElement;
    getPinnedRightHeader(): HTMLElement;
    private queryHtmlElement(selector);
    private findElements();
    getHeaderViewport(): HTMLElement;
    private centerMouseWheelListener(event);
    private pinnedLeftMouseWheelListener(event);
    private generalMouseWheelListener(event, targetPanel);
    onColumnsChanged(event: ColumnChangeEvent): void;
    private setWidthsOfContainers();
    private showPinnedColContainersIfNeeded();
    private sizeHeaderAndBody();
    setHorizontalScrollPosition(hScrollPosition: number): void;
    scrollHorizontally(pixels: number): number;
    getHorizontalScrollPosition(): number;
    turnOnAnimationForABit(): void;
    private addScrollListener();
    private requestDrawVirtualRows();
    horizontallyScrollHeaderCenterAndFloatingCenter(): void;
    private verticallyScrollLeftPinned(bodyTopPosition);
    private verticallyScrollBody(position);
    getVerticalScrollPosition(): number;
    getBodyViewportClientRect(): ClientRect;
    getFloatingTopClientRect(): ClientRect;
    getFloatingBottomClientRect(): ClientRect;
    getPinnedLeftColsViewportClientRect(): ClientRect;
    getPinnedRightColsViewportClientRect(): ClientRect;
    addScrollEventListener(listener: () => void): void;
    removeScrollEventListener(listener: () => void): void;
}
