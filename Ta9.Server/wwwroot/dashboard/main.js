(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-clients-panel></app-clients-panel>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ta9-client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _playground_playground_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playground/playground.component */ "./src/app/playground/playground.component.ts");
/* harmony import */ var _dashboard_client_management_client_client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-client-management/client/client.component */ "./src/app/dashboard-client-management/client/client.component.ts");
/* harmony import */ var _dashboard_client_management_clients_panel_clients_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-client-management/clients-panel/clients-panel.component */ "./src/app/dashboard-client-management/clients-panel/clients-panel.component.ts");
/* harmony import */ var _shared_signalr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/signalr.service */ "./src/app/shared/signalr.service.ts");
/* harmony import */ var _dashboard_client_management_store_clients_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard-client-management/store/clients.reducers */ "./src/app/dashboard-client-management/store/clients.reducers.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _playground_playground_component__WEBPACK_IMPORTED_MODULE_6__["PlaygroundComponent"],
                _dashboard_client_management_client_client_component__WEBPACK_IMPORTED_MODULE_7__["ClientComponent"],
                _dashboard_client_management_clients_panel_clients_panel_component__WEBPACK_IMPORTED_MODULE_8__["ClientsPanelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({ clientsR: _dashboard_client_management_store_clients_reducers__WEBPACK_IMPORTED_MODULE_10__["clientsReducer"] })
            ],
            providers: [_shared_signalr_service__WEBPACK_IMPORTED_MODULE_9__["SignalrService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard-client-management/client.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard-client-management/client.service.ts ***!
  \***************************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var ClientService = /** @class */ (function () {
    function ClientService() {
        this.clientsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.clients = [];
    }
    ClientService.prototype.setClients = function (clients) {
        this.clients = clients;
        this.clientsChanged.next(this.clients.slice());
    };
    ClientService.prototype.getClients = function () {
        return this.clients.slice();
    };
    ClientService.prototype.addClient = function (client) {
        this.clients.push(client);
        this.clientsChanged.next(this.clients.slice());
    };
    return ClientService;
}());



/***/ }),

/***/ "./src/app/dashboard-client-management/client/client.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard-client-management/client/client.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".client{\n    margin: 10px;\n    border: 1px solid #5cb85c;\n    border-radius: 4px\n}\n\n.client-details{\n    padding: 20px;\n    text-align: left;\n    font-size: 18px;\n}\n\nh3{\n    margin:0px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    background-color: #5cb85c;\n    color: #fff;\n    text-align: center;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkLWNsaWVudC1tYW5hZ2VtZW50L2NsaWVudC9jbGllbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkLWNsaWVudC1tYW5hZ2VtZW50L2NsaWVudC9jbGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGllbnR7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1Y2I4NWM7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4XG59XG5cbi5jbGllbnQtZGV0YWlsc3tcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5oM3tcbiAgICBtYXJnaW46MHB4O1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard-client-management/client/client.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard-client-management/client/client.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-4 col-md-3\"  >\n    <div class=\"client\" [ngStyle]=\"{borderColor: client.isOnline ? '#5cb85c' : '#d9534f'}\">\n        <h3 [ngStyle]=\"{backgroundColor: client.isOnline ? '#5cb85c' : '#d9534f'}\">{{client.ip}}</h3>\n        <div class=\"client-details\" >\n            <span><strong>Os:</strong>{{client.os}}</span><br/>\n            <span><strong>Browser:</strong>{{client.browser}}</span><br/>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard-client-management/client/client.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dashboard-client-management/client/client.component.ts ***!
  \************************************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClientComponent = /** @class */ (function () {
    function ClientComponent() {
    }
    ClientComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClientComponent.prototype, "client", void 0);
    ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/dashboard-client-management/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.css */ "./src/app/dashboard-client-management/client/client.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-client-management/clients-panel/clients-panel.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard-client-management/clients-panel/clients-panel.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC1jbGllbnQtbWFuYWdlbWVudC9jbGllbnRzLXBhbmVsL2NsaWVudHMtcGFuZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard-client-management/clients-panel/clients-panel.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard-client-management/clients-panel/clients-panel.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-client *ngFor=\"let clientElement of (clientsState | async).clients\"\n    [client]=\"clientElement\">\n  </app-client>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard-client-management/clients-panel/clients-panel.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/dashboard-client-management/clients-panel/clients-panel.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ClientsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsPanelComponent", function() { return ClientsPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client.service */ "./src/app/dashboard-client-management/client.service.ts");
/* harmony import */ var _shared_signalr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/signalr.service */ "./src/app/shared/signalr.service.ts");
/* harmony import */ var _store_clients_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/clients.actions */ "./src/app/dashboard-client-management/store/clients.actions.ts");






var ClientsPanelComponent = /** @class */ (function () {
    function ClientsPanelComponent(clientService, signalrService, store) {
        this.clientService = clientService;
        this.signalrService = signalrService;
        this.store = store;
    }
    ClientsPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.subscription = this.clientService.clientsChanged
        //   .subscribe(
        //     (clients: IAppClient[]) => {
        //       this.clients = clients;
        //     }
        //   );
        this.clientsState = this.store.select('clientsR');
        this.signalrService.setlistener("ReceiveMessage", function (method, appClient) {
            _this.store.dispatch(new _store_clients_actions__WEBPACK_IMPORTED_MODULE_5__["setClients"](appClient));
            //this.clientService.setClients(appClient);
        });
    };
    ClientsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients-panel',
            template: __webpack_require__(/*! ./clients-panel.component.html */ "./src/app/dashboard-client-management/clients-panel/clients-panel.component.html"),
            providers: [_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"]],
            styles: [__webpack_require__(/*! ./clients-panel.component.css */ "./src/app/dashboard-client-management/clients-panel/clients-panel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"], _shared_signalr_service__WEBPACK_IMPORTED_MODULE_4__["SignalrService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ClientsPanelComponent);
    return ClientsPanelComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-client-management/store/clients.actions.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard-client-management/store/clients.actions.ts ***!
  \**********************************************************************/
/*! exports provided: SET_CLIENTS, setClients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CLIENTS", function() { return SET_CLIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClients", function() { return setClients; });
var SET_CLIENTS = 'SET_CLIENTS';
var setClients = /** @class */ (function () {
    function setClients(payload) {
        this.payload = payload;
        this.type = SET_CLIENTS;
    }
    return setClients;
}());



/***/ }),

/***/ "./src/app/dashboard-client-management/store/clients.reducers.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard-client-management/store/clients.reducers.ts ***!
  \***********************************************************************/
/*! exports provided: clientsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientsReducer", function() { return clientsReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clients_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients.actions */ "./src/app/dashboard-client-management/store/clients.actions.ts");


var initialState = {
    clients: []
};
function clientsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _clients_actions__WEBPACK_IMPORTED_MODULE_1__["SET_CLIENTS"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { clients: action.payload.slice() });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/playground/playground.component.css":
/*!*****************************************************!*\
  !*** ./src/app/playground/playground.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXlncm91bmQvcGxheWdyb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/playground/playground.component.html":
/*!******************************************************!*\
  !*** ./src/app/playground/playground.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"onClick()\">press</button>\n"

/***/ }),

/***/ "./src/app/playground/playground.component.ts":
/*!****************************************************!*\
  !*** ./src/app/playground/playground.component.ts ***!
  \****************************************************/
/*! exports provided: PlaygroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundComponent", function() { return PlaygroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_signalr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/signalr.service */ "./src/app/shared/signalr.service.ts");



var PlaygroundComponent = /** @class */ (function () {
    function PlaygroundComponent(sinalrService) {
        this.sinalrService = sinalrService;
    }
    PlaygroundComponent.prototype.ngOnInit = function () {
        // this.sinalrService.initConnection("http://localhost:5000/hub");
        // this.sinalrService.setlistener("ReceiveMessage",(method:string, appClient:any ) => {
        //     console.log(appClient);
        // });
        // this.sinalrService.setlistener("ReceiveMessage2",(method:string, appClient:any ) => {
        //   console.log(appClient);
        //});
        //  this.connection  = new signalR.HubConnectionBuilder()
        // .withUrl("http://localhost:5000/hub")
        // .build();
        // this.connection.start().catch(err => document.write(err));
        // this.connection.on("ReceiveMessage", (method:string, appClient:any ) => {
        //     console.log(appClient);
        // });
    };
    PlaygroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-playground',
            template: __webpack_require__(/*! ./playground.component.html */ "./src/app/playground/playground.component.html"),
            styles: [__webpack_require__(/*! ./playground.component.css */ "./src/app/playground/playground.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_signalr_service__WEBPACK_IMPORTED_MODULE_2__["SignalrService"]])
    ], PlaygroundComponent);
    return PlaygroundComponent;
}());



/***/ }),

/***/ "./src/app/shared/signalr.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/signalr.service.ts ***!
  \*******************************************/
/*! exports provided: SignalrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalrService", function() { return SignalrService; });
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");


var SignalrService = /** @class */ (function () {
    function SignalrService() {
        this.initConnection();
    }
    SignalrService.prototype.initConnection = function () {
        this.connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_0__["HubConnectionBuilder"]()
            .withUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].signalrHub + "?clientid=" + this.getSessionId())
            .build();
        this.connection.start().catch(function (err) { return document.write(err); });
    };
    SignalrService.prototype.setlistener = function (eventName, eventHandler) {
        this.connection.on(eventName, eventHandler);
    };
    SignalrService.prototype.setInvoke = function (eventName, Invo) {
        return this.connection.invoke(eventName);
    };
    SignalrService.prototype.getSessionId = function () {
        var sessionId = window.sessionStorage.sessionId;
        if (!sessionId) {
            sessionId = window.sessionStorage.sessionId = Math.floor((Math.random() * 10000000000) + 1).toString();
        }
        console.log("sessionId:" + sessionId);
        return sessionId;
    };
    return SignalrService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    signalrHub: "http://localhost:5000/hub"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kaplanhadar/work/dotnet/ta9/ta9-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map