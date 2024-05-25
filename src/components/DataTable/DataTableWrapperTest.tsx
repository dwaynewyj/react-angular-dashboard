import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    Output,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { DataTable } from './DataTable';

const containerElementName = 'myReactComponentContainer';

@Component({
    selector: 'app-my-component',
    template: `<span #${containerElementName}></span>`,
    styleUrls: ['./DataTable.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DataTableWrapperComponentTest implements OnChanges, OnDestroy, AfterViewInit {
    @ViewChild(containerElementName, { static: false })
    containerRef!: ElementRef;

    @Input() public counter = 10;
    @Output() public componentClick = new EventEmitter<number>();

    private timer: any;
    private webSocketData = [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Jane', age: 25 },
        { id: 3, name: 'Doe', age: 40 }
    ];

    private webSocket: WebSocket | undefined;

    constructor() {
        this.handleDivClicked = this.handleDivClicked.bind(this);
    }

    public handleDivClicked() {
        if (this.componentClick) {
            this.componentClick.emit();
            this.render();
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.render();
    }

    ngAfterViewInit() {
        try {
            this.startWebSocketSimulation();
            this.render();
        } catch (error) {
            console.error('Error in WebSocket simulation:', error);
        }
    }

    ngOnDestroy() {
        try {
            this.stopWebSocketSimulation();
            ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
        } catch (error) {
            console.error('Error in WebSocket simulation:', error);
        }
    }

    private render() {
        const { counter } = this;

        ReactDOM.render(
            <div className={'i-am-classy'}>
                <DataTable data={this.webSocketData} />
            </div>,
            this.containerRef.nativeElement
        );
    }

    private startWebSocketSimulation() {
        // Simulate WebSocket data updates every 3 seconds
        this.timer = setInterval(() => {
            // Update the data with new values for demonstration purposes
            this.webSocketData.forEach((item) => {
                item.age += Math.floor(Math.random() * 5) - 10; // Random age change within +/- 2
            });
            this.render();
        }, 3000);
    }

    private stopWebSocketSimulation() {
        clearInterval(this.timer);
    }

    private closeWebSocket() {
        if (this.webSocket && this.webSocket.readyState === WebSocket.OPEN) {
            this.webSocket.close();
        }
    }
}
