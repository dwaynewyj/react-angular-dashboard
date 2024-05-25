import {
    AfterViewInit,
    Component,
    ElementRef,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { DataTable } from './DataTable';

const containerElementName = 'DataTableContainer';

@Component({
    selector: 'app-my-component',
    template: `<span #${containerElementName}></span>`,
    styleUrls: ['./DataTable.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DataTableWrapperComponent implements OnChanges, OnDestroy, AfterViewInit {
    @ViewChild(containerElementName, { static: false })
    containerRef!: ElementRef;

    private webSocketData: any[] = [];
    private webSocket: WebSocket | undefined;

    ngOnChanges(changes: SimpleChanges): void {
        this.render();
    }

    ngAfterViewInit() {
        try {
            this.setupWebSocket(); // Set up WebSocket connection after the view is initialized
            this.render();
        } catch (error) {
            console.error('Error in WebSocket setup:', error);
        }
    }

    ngOnDestroy() {
        try {
            this.closeWebSocket(); // Close WebSocket connection before destroying the component
            ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
        } catch (error) {
            console.error('Error in WebSocket cleanup:', error);
        }
    }

    private render() {
        ReactDOM.render(
            <div className={'i-am-classy'}>
                <DataTable data={this.webSocketData} />
            </div>,
            this.containerRef.nativeElement
        );
    }

    private setupWebSocket() {
        this.webSocket = new WebSocket('ws://localhost:8080');
        console.log('WebSocket connection established');
        this.webSocket.onmessage = (event) => {
            // Handle received data here
            const data = JSON.parse(event.data);
            console.log('Received data from WebSocket:', data);
            this.webSocketData = data;
            // Re-render the React component with updated data
            this.render();
        };
        this.webSocket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
        this.webSocket.onclose = () => {
            console.log('WebSocket connection closed');
        };
    }

    private closeWebSocket() {
        if (this.webSocket && this.webSocket.readyState === WebSocket.OPEN) {
            this.webSocket.close();
        }
    }
}
