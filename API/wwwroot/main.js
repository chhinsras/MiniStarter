"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_components_access_denial_access_denial_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/access-denial/access-denial.component */ 77099);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/not-found/not-found.component */ 59442);
/* harmony import */ var _shared_components_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/server-error/server-error.component */ 70195);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guards/auth.guard */ 27574);
/* harmony import */ var _core_guards_role_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/guards/role.guard */ 64565);
/* harmony import */ var _layouts_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/account-layout/account-layout.component */ 64288);
/* harmony import */ var _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/home-layout/home-layout.component */ 82754);
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ 94026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);











const routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '',
        component: _layouts_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_5__.AccountLayoutComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/account/account.module */ 42588)).then(mod => mod.AccountModule),
    },
    {
        path: 'home',
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
        component: _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_6__.HomeLayoutComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/home/home.module */ 44882)).then(mod => mod.HomeModule),
    },
    {
        path: 'admin',
        canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard, _core_guards_role_guard__WEBPACK_IMPORTED_MODULE_4__.RoleGuard],
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_7__.AdminLayoutComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/admin/admin.module */ 27442)).then(mod => mod.AdminModule),
        data: {
            allowedRoles: ['SuperAdmin']
        }
    },
    {
        path: 'access-denial', component: _shared_components_access_denial_access_denial_component__WEBPACK_IMPORTED_MODULE_0__.AccessDenialComponent
    },
    {
        path: 'not-found', component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent
    },
    {
        path: 'server-error', component: _shared_components_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_2__.ServerErrorComponent
    },
    {
        path: '**', redirectTo: 'not-found', pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/services/account.service */ 1146);
/* harmony import */ var _core_services_multilingual_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/multilingual.service */ 64149);
/* harmony import */ var _core_services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/theme.service */ 6074);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 25895);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);






class AppComponent {
    constructor(accountService, translationService, themeService, overlay) {
        this.accountService = accountService;
        this.translationService = translationService;
        this.themeService = themeService;
        this.overlay = overlay;
        this.themeVariant = '';
        this.darkModeIcon = '';
    }
    ngOnInit() {
        this.loadCurrentUser();
        this.loadDefaults();
    }
    loadDefaults() {
        this.translationService.loadDefaultLanguage();
        this.themeService.setThemeFromLocalStorage();
    }
    loadCurrentUser() {
        this.accountService.loadCurrentUser()
            .subscribe(() => {
        }, error => {
            console.log(error);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_multilingual_service__WEBPACK_IMPORTED_MODULE_1__.MultilingualService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_theme_service__WEBPACK_IMPORTED_MODULE_2__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayContainer)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: [".mat-row[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: red;\n}\n\n.mat-row[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcm93Om50aC1jaGlsZChldmVuKXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ubWF0LXJvdzpudGgtY2hpbGQob2RkKXtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG4iXX0= */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "rootLoaderFactory": () => (/* binding */ rootLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32202);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ 40294);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guards/auth.guard */ 27574);
/* harmony import */ var _core_guards_permission_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/guards/permission.guard */ 84221);
/* harmony import */ var _core_guards_role_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/guards/role.guard */ 64565);
/* harmony import */ var _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/interceptors/error.interceptor */ 50422);
/* harmony import */ var _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/interceptors/jwt.interceptor */ 83743);
/* harmony import */ var _core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/interceptors/loading.interceptor */ 11295);
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/material/material.module */ 793);
/* harmony import */ var _core_services_account_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/services/account.service */ 1146);
/* harmony import */ var _core_services_busy_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/services/busy.service */ 9978);
/* harmony import */ var _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/services/local-storage.service */ 64617);
/* harmony import */ var _core_services_multilingual_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/services/multilingual.service */ 64149);
/* harmony import */ var _layouts_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layouts/account-layout/account-layout.component */ 64288);
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ 94026);
/* harmony import */ var _layouts_admin_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layouts/admin-layout/footer/footer.component */ 83831);
/* harmony import */ var _layouts_admin_layout_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layouts/admin-layout/toolbar/toolbar.component */ 41458);
/* harmony import */ var _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layouts/home-layout/home-layout.component */ 82754);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 22560);




























function rootLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ providers: [
        _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard,
        _core_guards_permission_guard__WEBPACK_IMPORTED_MODULE_4__.PermissionGuard,
        _core_guards_role_guard__WEBPACK_IMPORTED_MODULE_5__.RoleGuard,
        _core_services_account_service__WEBPACK_IMPORTED_MODULE_10__.AccountService,
        _core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_12__.LocalStorageService,
        _core_services_multilingual_service__WEBPACK_IMPORTED_MODULE_13__.MultilingualService,
        _core_services_busy_service__WEBPACK_IMPORTED_MODULE_11__.BusyService,
        _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HTTP_INTERCEPTORS, useClass: _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_6__.ErrorInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HTTP_INTERCEPTORS, useClass: _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__.JwtInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HTTP_INTERCEPTORS, useClass: _core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_8__.LoadingInterceptor, multi: true }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule,
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_9__.MaterialModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__.SharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule.forRoot({
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateLoader,
                useFactory: rootLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClient]
            }
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _layouts_account_layout_account_layout_component__WEBPACK_IMPORTED_MODULE_14__.AccountLayoutComponent,
        _layouts_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_18__.HomeLayoutComponent,
        _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_15__.AdminLayoutComponent,
        _layouts_admin_layout_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_17__.ToolbarComponent,
        _layouts_admin_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__.FooterComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule,
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_9__.MaterialModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__.SharedModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_26__.TranslateModule] }); })();


/***/ }),

/***/ 26311:
/*!***********************************!*\
  !*** ./src/app/core/api/agent.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Agent": () => (/* binding */ Agent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _helpers_pagination_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/pagination-helper */ 29721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);




class Agent {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        // Auditing
        this.getAudits = () => this.http.get(this.baseUrl + 'auditlogs');
        // Account
        this.loginUser = (login) => this.http.post(this.baseUrl + 'account/login', login);
        this.refreshToken = (request) => this.http.post(this.baseUrl + 'account/refresh-token', request);
        this.registerUser = (user) => this.http.post(this.baseUrl + 'account/register', user);
        // confirmEmail = (params: HttpParams) => this.http.get(this.baseUrl + 'account/confirm-email', {params: params});
        // confirmPhoneNumber =(params: HttpParams) => this.http.get(this.baseUrl + 'account/confirm-phone-number', {params: params});
        // forgotPassword = (email: string) => this.http.post(this.baseUrl + 'account/forgot-password', email);
        // resetPassword = (resetPassword: ResetPassword) => this.http.post(this.baseUrl + 'account/reset-password', resetPassword);
        // User
        this.getUsers = (params) => (0,_helpers_pagination_helper__WEBPACK_IMPORTED_MODULE_1__.getPaginatedResponse)(this.baseUrl + 'users', params, this.http);
        this.getUser = (id) => this.http.get(this.baseUrl + 'users/' + id);
        this.createUser = (user) => this.http.post(this.baseUrl + 'users', user);
        this.updateUser = (user) => this.http.put(this.baseUrl + 'users', user);
        this.deleteUser = (id) => this.http.delete(this.baseUrl + 'users/' + id);
        this.getUserRoles = (id) => this.http.get(this.baseUrl + `users/${id}/roles`);
        this.assignUserRoles = (id, request) => this.http.post(this.baseUrl + `users/${id}/roles`, { userRoles: request });
        // Role
        this.getRoles = (params) => this.http.get(this.baseUrl + 'roles', { params: params });
        this.getRole = (id) => this.http.get(this.baseUrl + `roles/${id}`);
        this.createRole = (role) => this.http.post(this.baseUrl + 'roles', role);
        this.updateRole = (role) => this.http.post(this.baseUrl + 'roles', role);
        this.deleteRole = (id) => this.http.delete(this.baseUrl + `roles/${id}`);
        this.getRolePermissions = (roleId) => this.http.get(this.baseUrl + `roles/permissions/byrole/${roleId}`);
        this.updateRolePermissions = (request) => this.http.put(this.baseUrl + 'roles/permissions/update', request);
        this.getAllClaims = () => this.http.get(this.baseUrl + `roles/permissions`);
        this.getClaim = (id) => this.http.get(this.baseUrl + `roles/permissions/${id}`);
        this.deleteClaim = (id) => this.http.delete(this.baseUrl + `roles/permissions/${id}`);
        // Gazetteer
        this.getAllProvinces = () => this.http.get(this.baseUrl + 'gazetteers/provinces');
        this.getProvince = (code) => this.http.get(this.baseUrl + `gazetteers/provinces/${code}`);
        this.createProvince = (province) => this.http.post(this.baseUrl + 'gazetteers/provinces', province);
        this.updateProvince = (province) => this.http.put(this.baseUrl + 'gazetteers/provinces', province);
        this.deleteProvince = (code) => this.http.delete(this.baseUrl + `gazetteers/provinces/${code}`);
        this.getAllDistricts = () => this.http.get(this.baseUrl + 'gazetteers/districts');
        this.getDistrictsByProvince = (provinceCode) => this.http.get(this.baseUrl + `gazetteers/districts/byProvince/${provinceCode}`);
        this.getDistrict = (code) => this.http.get(this.baseUrl + `gazetteers/districts/${code}`);
        this.createDistrict = (district) => this.http.post(this.baseUrl + 'gazetteers/districts', district);
        this.updateDistrict = (district) => this.http.put(this.baseUrl + 'gazetteers/districts', district);
        this.deleteDistrict = (code) => this.http.delete(this.baseUrl + `gazetteers/districts/${code}`);
        this.getAllCommunes = () => this.http.get(this.baseUrl + 'gazetteers/communes');
        this.getCommunesByDistrict = (provinceCode) => this.http.get(this.baseUrl + `gazetteers/communes/byDistrict/${provinceCode}`);
        this.getCommune = (code) => this.http.get(this.baseUrl + `gazetteers/communes/${code}`);
        this.createCommune = (commune) => this.http.post(this.baseUrl + 'gazetteers/communes', commune);
        this.updateCommune = (commune) => this.http.put(this.baseUrl + 'gazetteers/communes', commune);
        this.deleteCommune = (code) => this.http.delete(this.baseUrl + `gazetteers/communes/${code}`);
        this.getAllVillages = () => this.http.get(this.baseUrl + 'gazetteers/villages');
        this.getVillagesByCommune = (provinceCode) => this.http.get(this.baseUrl + `gazetteers/villages/byCommune/${provinceCode}`);
        this.getVillage = (code) => this.http.get(this.baseUrl + `gazetteers/villages/${code}`);
        this.createVillage = (village) => this.http.post(this.baseUrl + 'gazetteers/villages', village);
        this.updateVillage = (village) => this.http.put(this.baseUrl + 'gazetteers/villages', village);
        this.deleteVillage = (code) => this.http.delete(this.baseUrl + `gazetteers/villages/${code}`);
    }
}
Agent.ɵfac = function Agent_Factory(t) { return new (t || Agent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
Agent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Agent, factory: Agent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 40294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _api_agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/agent */ 26311);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ 88386);
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/role.service */ 25111);
/* harmony import */ var _services_gazetteer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/gazetteer.service */ 17838);
/* harmony import */ var _services_audit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/audit.service */ 18342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);








class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _api_agent__WEBPACK_IMPORTED_MODULE_0__.Agent,
        _services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService,
        _services_role_service__WEBPACK_IMPORTED_MODULE_2__.RoleService,
        _services_audit_service__WEBPACK_IMPORTED_MODULE_4__.AuditService,
        _services_gazetteer_service__WEBPACK_IMPORTED_MODULE_3__.GazetteerService,
    ], imports: [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrModule.forRoot({
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CoreModule, { imports: [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrModule] }); })();


/***/ }),

/***/ 27574:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 1146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);



class AuthGuard {
    constructor(accountService, router) {
        this.accountService = accountService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.accountService.isAuthenticated) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ 84221:
/*!*************************************************!*\
  !*** ./src/app/core/guards/permission.guard.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionGuard": () => (/* binding */ PermissionGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 1146);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);




class PermissionGuard {
    constructor(accountService, toastrService, router) {
        this.accountService = accountService;
        this.toastrService = toastrService;
        this.router = router;
    }
    canActivate(route, state) {
        const allowedPermissions = route.data.allowedPermissions;
        const isAuthorized = this.accountService.isAuthorized('Permission', allowedPermissions);
        if (!isAuthorized) {
            this.toastrService.warning("You are not authoroized to access the resource");
            this.router.navigateByUrl('access-denial');
        }
        return isAuthorized;
    }
}
PermissionGuard.ɵfac = function PermissionGuard_Factory(t) { return new (t || PermissionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
PermissionGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PermissionGuard, factory: PermissionGuard.ɵfac });


/***/ }),

/***/ 64565:
/*!*******************************************!*\
  !*** ./src/app/core/guards/role.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleGuard": () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 1146);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);




class RoleGuard {
    constructor(accountService, toastrService, router) {
        this.accountService = accountService;
        this.toastrService = toastrService;
        this.router = router;
    }
    canActivate(route, state) {
        const allowedRoles = route.data.allowedRoles;
        const isAuthorized = this.accountService.isAuthorized('Role', allowedRoles);
        if (!isAuthorized) {
            this.toastrService.warning("You are not authoroized to access the resource");
            this.router.navigateByUrl('access-denial');
        }
        return isAuthorized;
    }
}
RoleGuard.ɵfac = function RoleGuard_Factory(t) { return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
RoleGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoleGuard, factory: RoleGuard.ɵfac });


/***/ }),

/***/ 29721:
/*!***************************************************!*\
  !*** ./src/app/core/helpers/pagination-helper.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPaginatedResponse": () => (/* binding */ getPaginatedResponse),
/* harmony export */   "getPaginationHeaders": () => (/* binding */ getPaginationHeaders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _shared_models_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/models/pagination */ 1118);



function getPaginatedResponse(url, params, http) {
    var paginatedResponse = new _shared_models_pagination__WEBPACK_IMPORTED_MODULE_0__.PaginatedResponse();
    return http.get(url, { observe: 'response', params }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
        paginatedResponse.items = response.body;
        const pagination = response.headers.get('Pagination');
        if (pagination) {
            paginatedResponse.metaData = JSON.parse(pagination);
        }
        return paginatedResponse;
    }));
}
function getPaginationHeaders(pageNumber, pageSize) {
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
    params = params.append('pageNumber', pageNumber.toString());
    params = params.append('pageSize', pageSize.toString());
    return params;
}


/***/ }),

/***/ 50422:
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 1146);






class ErrorInterceptor {
    constructor(router, toastr, accountService) {
        this.router = router;
        this.toastr = toastr;
        this.accountService = accountService;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((response) => {
            console.log(response);
            switch (response.status) {
                case 400:
                    if (response.error.errors) {
                        const modalStateErrors = [];
                        for (const key in response.error.errors) {
                            if (response.error.errors[key]) {
                                modalStateErrors.push(response.error.errors[key]);
                            }
                        }
                        console.log(modalStateErrors);
                        throw modalStateErrors.flat();
                    }
                    this.toastr.error(response.error.title);
                    break;
                case 401:
                    this.toastr.error('Authentication Failure', response.error.title);
                    this.accountService.logout();
                    break;
                case 403:
                    this.toastr.error(response.error.title);
                    break;
                case 404:
                    this.toastr.error('Not Found!', response.error.title);
                    //this.router.navigateByUrl('/not-found');
                    break;
                case 500:
                    // this.toastr.error('Something Went Wrong', response.error.title);
                    const navigationExtras = { state: { error: response.error } };
                    this.router.navigateByUrl('/server-error', navigationExtras);
                    break;
                default:
                    if (response.status === 0) {
                        this.toastr.error('Unable to Connect to Server.', response.error.title);
                        break;
                    }
                    this.toastr.error('Something Went Wrong', response.error.title);
                    break;
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(response.error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService)); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 83743:
/*!******************************************************!*\
  !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ 64198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 1146);



class JwtInterceptor {
    constructor(accountService) {
        this.accountService = accountService;
    }
    intercept(request, next) {
        request = this.addToken(request);
        this.refreshToken(request);
        return next.handle(request);
    }
    addToken(request) {
        if (this.accountService.isAuthenticated) {
            const localToken = this.accountService.getToken;
            request = request.clone({ setHeaders: { 'Authorization': `Bearer ${localToken}` } });
        }
        return request;
    }
    refreshToken(request) {
        if (!request.url.includes('account')) {
            const localToken = this.accountService.getToken;
            // if token is null
            if (!(localToken)) {
                return;
            }
            const jwtService = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__.JwtHelperService();
            const willExpireSoon = !jwtService.isTokenExpired(localToken) &&
                jwtService.isTokenExpired(localToken, 10 * 60);
            if (willExpireSoon) {
                this.accountService.tryRefreshingToken();
            }
        }
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ 11295:
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/loading.interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingInterceptor": () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 21339);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/busy.service */ 9978);



class LoadingInterceptor {
    constructor(busyService) {
        this.busyService = busyService;
    }
    intercept(request, next) {
        var isFiltering = request.params.get('searchString');
        if (isFiltering === '' || isFiltering === undefined || isFiltering === null) {
            this.busyService.isOverlay.next(true);
        }
        else {
            this.busyService.isOverlay.next(false);
        }
        this.busyService.isLoading.next(true);
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
            this.busyService.isLoading.next(false);
        }));
    }
}
LoadingInterceptor.ɵfac = function LoadingInterceptor_Factory(t) { return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_busy_service__WEBPACK_IMPORTED_MODULE_0__.BusyService)); };
LoadingInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LoadingInterceptor, factory: LoadingInterceptor.ɵfac });


/***/ }),

/***/ 1146:
/*!**************************************************!*\
  !*** ./src/app/core/services/account.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ 64198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/agent */ 26311);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 64617);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 94817);








class AccountService {
    constructor(agent, localStorage, router, toastr) {
        this.agent = agent;
        this.localStorage = localStorage;
        this.router = router;
        this.toastr = toastr;
        this.currentUserTokenSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.getStorageToken);
        this.currentUserToken$ = this.currentUserTokenSource.asObservable();
    }
    get getToken() {
        return this.currentUserTokenSource.getValue();
    }
    get getStorageToken() {
        return localStorage.getItem('token') ?? null;
    }
    get getFullName() {
        const decodedToken = this.getDecodedToken();
        return decodedToken?.fullName ?? '';
    }
    get getEmail() {
        const decodedToken = this.getDecodedToken();
        return !!(decodedToken) ? decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'] : '';
    }
    get isAuthenticated() {
        const token = localStorage.getItem('token');
        if (!!(token)) {
            const jwtService = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtHelperService();
            return !jwtService.isTokenExpired(token);
        }
        return false;
    }
    isAuthorized(authorizationType, allowedData) {
        if (allowedData == null || allowedData.length === 0) {
            return true;
        }
        const decodeToken = this.getDecodedToken();
        if (!decodeToken) {
            console.log('Invalid token');
            return false;
        }
        if (authorizationType === 'Role') {
            const roles = decodeToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            if (roles === undefined || roles.length === 0)
                return false;
            return allowedData.some(a => roles.includes(a));
        }
        else if (authorizationType === 'Permission') {
            const permissions = decodeToken['Permission'];
            if (permissions === undefined || permissions.length === 0)
                return false;
            return allowedData.some(a => permissions.includes(a));
        }
        return false;
    }
    get getStorageRefreshToken() {
        return this.localStorage.getItem('refreshToken');
    }
    loadCurrentUser() {
        const token = this.getStorageToken;
        const currentUserToken = !!(token) ? token : null;
        this.setToken(currentUserToken);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(currentUserToken);
    }
    login(login) {
        console.log(login);
        return this.agent.loginUser(login)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((result) => {
            if (result) {
                this.setStorageToken(result);
                this.toastr.clear();
                this.toastr.info('User Logged In');
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((result) => result ?? undefined));
    }
    logout() {
        this.setStorageToken(null);
        this.toastr.clear();
        this.toastr.info('User Logged Out');
        this.router.navigateByUrl('/login');
    }
    tryRefreshingToken() {
        const jwtToken = this.getStorageToken ?? '';
        const refreshToken = this.getStorageRefreshToken ?? '';
        const request = {
            'refreshToken': refreshToken,
            'token': jwtToken
        };
        this.agent.refreshToken(request)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((result) => {
            if (result) {
                this.setStorageToken(result);
                this.toastr.clear();
                this.toastr.info('Refreshed Token');
            }
            else {
                this.logout();
                this.toastr.error('Something went wrong!');
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
            console.error(error);
            this.logout();
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
        }))
            .subscribe();
    }
    setToken(token) {
        this.currentUserTokenSource.next(token);
    }
    setStorageToken(data) {
        if (data != null && data?.token?.length > 0) {
            this.localStorage.setItem('token', data.token);
            this.localStorage.setItem('refreshToken', data.refreshToken);
            this.setToken(data.token);
        }
        else {
            this.localStorage.removeItem('token');
            this.localStorage.removeItem('refreshToken');
            this.setToken(null);
        }
    }
    getDecodedToken() {
        let token = this.getStorageToken;
        // if token is undefined, avoid exception
        if (!(token)) {
            return null;
        }
        const jwtService = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtHelperService();
        const decodedToken = jwtService.decodeToken(token);
        return decodedToken;
    }
    registerUser(user) {
        return this.agent
            .registerUser(user)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((response) => response));
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_api_agent__WEBPACK_IMPORTED_MODULE_0__.Agent), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService)); };
AccountService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac });


/***/ }),

/***/ 18342:
/*!************************************************!*\
  !*** ./src/app/core/services/audit.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuditService": () => (/* binding */ AuditService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/agent */ 26311);



class AuditService {
    constructor(agent) {
        this.agent = agent;
        this.getAudits = () => this.agent.getAudits().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => response));
    }
}
AuditService.ɵfac = function AuditService_Factory(t) { return new (t || AuditService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_agent__WEBPACK_IMPORTED_MODULE_0__.Agent)); };
AuditService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuditService, factory: AuditService.ɵfac });


/***/ }),

/***/ 9978:
/*!***********************************************!*\
  !*** ./src/app/core/services/busy.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusyService": () => (/* binding */ BusyService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class BusyService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
        this.isOverlay = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
    }
}
BusyService.ɵfac = function BusyService_Factory(t) { return new (t || BusyService)(); };
BusyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BusyService, factory: BusyService.ɵfac });


/***/ }),

/***/ 17838:
/*!****************************************************!*\
  !*** ./src/app/core/services/gazetteer.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GazetteerService": () => (/* binding */ GazetteerService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/agent */ 26311);



class GazetteerService {
    constructor(agent) {
        this.agent = agent;
    }
    getAllProvinces() {
        return this.agent
            .getAllProvinces()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => response));
    }
    getProvinceByCode(code) {
        return this.agent.getProvince(code).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => response));
    }
    createProvince(province) {
        return this.agent
            .createProvince(province)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => response));
    }
    updateProvince(province) {
        return this.agent
            .updateProvince(province)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => response));
    }
    deleteProvince(code) {
        return this.agent
            .deleteProvince(code)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => response));
    }
}
GazetteerService.ɵfac = function GazetteerService_Factory(t) { return new (t || GazetteerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_agent__WEBPACK_IMPORTED_MODULE_0__.Agent)); };
GazetteerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GazetteerService, factory: GazetteerService.ɵfac });


/***/ }),

/***/ 64617:
/*!********************************************************!*\
  !*** ./src/app/core/services/local-storage.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class LocalStorageService {
    constructor() {
    }
    setItem(key, value) {
        localStorage.setItem(key, value);
    }
    getItem(key) {
        return localStorage.getItem(key);
    }
    removeItem(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac });


/***/ }),

/***/ 64149:
/*!*******************************************************!*\
  !*** ./src/app/core/services/multilingual.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultilingualService": () => (/* binding */ MultilingualService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.service */ 64617);



class MultilingualService {
    constructor(translateService, localStorage) {
        this.translateService = translateService;
        this.localStorage = localStorage;
        this.translateService.use('en');
    }
    changeLanguage(languageCode) {
        this.localStorage.setItem('locale', languageCode);
        this.translateService.use(languageCode);
    }
    currentLanguage() {
        return this.localStorage.getItem('locale') ?? 'en';
    }
    loadDefaultLanguage() {
        let defaultLanguage = this.localStorage.getItem('locale') ?? 'en';
        this.translateService.use(defaultLanguage);
    }
}
MultilingualService.ɵfac = function MultilingualService_Factory(t) { return new (t || MultilingualService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService)); };
MultilingualService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MultilingualService, factory: MultilingualService.ɵfac });


/***/ }),

/***/ 25111:
/*!***********************************************!*\
  !*** ./src/app/core/services/role.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleService": () => (/* binding */ RoleService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _helpers_pagination_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/pagination-helper */ 29721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_agent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/agent */ 26311);







class RoleService {
    constructor(http, agent) {
        this.http = http;
        this.agent = agent;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    getRoles(roleParams) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        if (roleParams.searchString)
            params = params.append('searchString', roleParams.searchString);
        if (roleParams.orderBy)
            params = params.append('orderBy', roleParams.orderBy.toString());
        params = (0,_helpers_pagination_helper__WEBPACK_IMPORTED_MODULE_1__.getPaginationHeaders)(roleParams.pageNumber, roleParams.pageSize);
        return (0,_helpers_pagination_helper__WEBPACK_IMPORTED_MODULE_1__.getPaginatedResponse)(this.baseUrl + 'roles', params, this.http)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
            return response;
        }));
    }
    getRoleById(id) {
        return this.agent.getRole(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => response));
    }
    createRole(Role) {
        return this.agent
            .createRole(Role)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => response));
    }
    updateRole(Role) {
        return this.agent
            .updateRole(Role)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => response));
    }
    deleteRole(id) {
        return this.agent
            .deleteRole(id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => response));
    }
    getRolePermissionsByRoleId(roleId) {
        return this.agent
            .getRolePermissions(roleId)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => response));
    }
    updateRolePermissions(request) {
        return this.agent
            .updateRolePermissions(request)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => response));
    }
    getAllClaims() { }
    getClaimById(id) { }
    deleteClaimById(id) { }
}
RoleService.ɵfac = function RoleService_Factory(t) { return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_api_agent__WEBPACK_IMPORTED_MODULE_2__.Agent)); };
RoleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: RoleService, factory: RoleService.ɵfac });


/***/ }),

/***/ 6074:
/*!************************************************!*\
  !*** ./src/app/core/services/theme.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.service */ 64617);


class ThemeService {
    constructor(storage) {
        this.storage = storage;
    }
    toggleDarkMode() {
        console.log('Hi');
        if (this.isDarkMode()) {
            document.querySelector('.mat-app-background').classList.remove('dark-theme');
            document.querySelector('.mat-app-background').classList.add('light-theme');
            this.storage.setItem('themeVariant', 'light-theme');
            return false;
        }
        else {
            document.querySelector('.mat-app-background').classList.add('dark-theme');
            document.querySelector('.mat-app-background').classList.remove('light-theme');
            this.storage.setItem('themeVariant', 'dark-theme');
            return true;
        }
    }
    isDarkMode() {
        if (this.storage.getItem('themeVariant') == 'dark-theme') {
            return true;
        }
        return false;
    }
    setThemeFromLocalStorage() {
        if (this.isDarkMode()) {
            document.querySelector('.mat-app-background').classList.add('dark-theme');
        }
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService)); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 88386:
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _helpers_pagination_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/pagination-helper */ 29721);
/* harmony import */ var _shared_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/user */ 90193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _api_agent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/agent */ 26311);







class UserService {
    constructor(agent) {
        this.agent = agent;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.userParams = new _shared_models_user__WEBPACK_IMPORTED_MODULE_2__.UserParams();
    }
    getUserParams() {
        return this.userParams;
    }
    setUserParams(params) {
        this.userParams = params;
    }
    resetUserParams() {
        this.userParams = new _shared_models_user__WEBPACK_IMPORTED_MODULE_2__.UserParams();
        return this.userParams;
    }
    getUsers(userParams) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
        params = (0,_helpers_pagination_helper__WEBPACK_IMPORTED_MODULE_1__.getPaginationHeaders)(userParams.pageNumber, userParams.pageSize);
        if (userParams.searchTerm)
            params = params.append('searchTerm', userParams.searchTerm);
        if (userParams.orderBy)
            params = params.append('orderBy', userParams.orderBy.toString());
        return this.agent.getUsers(params)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
            return response;
        }));
    }
    getUserById(id) {
        return this.agent.getUser(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((response) => response));
    }
    updateUser(User) {
        return this.agent
            .updateUser(User)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((response) => response));
    }
    deleteUser(id) {
        return this.agent
            .deleteUser(id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((response) => response));
    }
    getUserRoles(id) {
        return this.agent
            .getUserRoles(id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((response) => response));
    }
    assignUserRoles(id, request) {
        return this.agent
            .assignUserRoles(id, request)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((response) => response));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_agent__WEBPACK_IMPORTED_MODULE_3__.Agent)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });


/***/ }),

/***/ 64288:
/*!********************************************************************!*\
  !*** ./src/app/layouts/account-layout/account-layout.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountLayoutComponent": () => (/* binding */ AccountLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class AccountLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccountLayoutComponent.ɵfac = function AccountLayoutComponent_Factory(t) { return new (t || AccountLayoutComponent)(); };
AccountLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountLayoutComponent, selectors: [["app-account-layout"]], decls: 1, vars: 0, template: function AccountLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 94026:
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLayoutComponent": () => (/* binding */ AdminLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_core_services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/account.service */ 1146);
/* harmony import */ var src_app_core_services_busy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/busy.service */ 9978);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _shared_directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directives/has-permission.directive */ 95516);
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar/toolbar.component */ 41458);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 83831);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
















function AdminLayoutComponent_a_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminLayoutComponent_a_20_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);

      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "store");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "layouts.admin.gazetteers"), " ");
  }
}

function AdminLayoutComponent_a_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminLayoutComponent_a_24_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);

      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "layouts.admin.users"), " ");
  }
}

function AdminLayoutComponent_a_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminLayoutComponent_a_25_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);

      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "layouts.admin.roles"), " ");
  }
}

function AdminLayoutComponent_a_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminLayoutComponent_a_26_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);

      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "layouts.admin.eventLogs"), " ");
  }
}

function AdminLayoutComponent_mat_progress_bar_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-progress-bar", 28);
  }
}

function AdminLayoutComponent_mat_card_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 29)(1, "mat-card-content")(2, "div", 30)(3, "div", 31)(4, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Support childprotection.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 33)(7, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminLayoutComponent_mat_card_41_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.hideAlert());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Hide Alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
}

const _c0 = function () {
  return ["Permissions.Provinces.View"];
};

const _c1 = function () {
  return ["Permissions.Users.View"];
};

const _c2 = function () {
  return ["Permissions.Roles.View"];
};

const _c3 = function () {
  return ["Permissions.Audit.View"];
};

class AdminLayoutComponent {
  constructor(accountService, busyService) {
    this.accountService = accountService;
    this.busyService = busyService;
    this.title = 'MiniStarter';
    this.fullName = '';
    this.email = '';
    this.alertIsVisible = false;
  }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.fullName = this.accountService.getFullName;
    this.email = this.accountService.getEmail;
  }

  hideAlert() {
    this.alertIsVisible = false;
  }

}

AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) {
  return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_busy_service__WEBPACK_IMPORTED_MODULE_1__.BusyService));
};

AdminLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AdminLayoutComponent,
  selectors: [["app-admin-layout"]],
  decls: 44,
  vars: 30,
  consts: [[1, "sidenav-container"], ["disableClose", "false", "mode", "push", 1, "sidenav"], ["sidenav", ""], [2, "padding-top", "0"], [2, "margin-bottom", "0px!important"], [2, "padding", "20px!important"], ["mat-card-avatar", "", 1, "example-header-image"], [2, "margin-bottom", "10px", "font-size", "medium"], [2, "margin-bottom", "5px", "font-size", "small"], [2, "padding", "10px"], ["mat-list-item", "", "routerLink", "dashboard/", 3, "click"], [2, "padding-right", "10px"], [1, "nav-subheading"], ["mat-list-item", "", "routerLink", "setup/gazetteers", 3, "click", 4, "appHasPermission"], ["mat-list-item", "", "routerLink", "users", 3, "click", 4, "appHasPermission"], ["mat-list-item", "", "routerLink", "roles", 3, "click", 4, "appHasPermission"], ["mat-list-item", "", "routerLink", "audit", 3, "click", 4, "appHasPermission"], ["mat-list-item", "", "routerLink", "/admin/about", 3, "click"], [3, "inputSideNav"], [2, "height", "1px"], ["mode", "indeterminate", "color", "accent", 4, "ngIf"], [1, "content"], [1, "container"], ["class", "module-card", 4, "ngIf"], ["mat-list-item", "", "routerLink", "setup/gazetteers", 3, "click"], ["mat-list-item", "", "routerLink", "users", 3, "click"], ["mat-list-item", "", "routerLink", "roles", 3, "click"], ["mat-list-item", "", "routerLink", "audit", 3, "click"], ["mode", "indeterminate", "color", "accent"], [1, "module-card"], [1, "row", 2, "align-items", "center"], [1, "col-6", "col-sm-6", "col-md-6", "col-lg-6", "col-xl-6"], ["mat-button", "", "color", "accent", "href", "https://opencollective.com/childprotection#category-CONTRIBUTE", "target", "_blank", 2, "background", "rgba(0,0,0,.03)!important"], [1, "col-6", "col-sm-6", "col-md-6", "col-lg-6", "col-xl-6", 2, "text-align", "right"], ["mat-button", "", "color", "accent", 3, "click"]],
  template: function AdminLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-sidenav-container", 0)(1, "mat-sidenav", 1, 2)(3, "mat-nav-list", 3)(4, "mat-card", 4)(5, "mat-card-header", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-card-title", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-card-subtitle", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9)(12, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_a_click_12_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);

        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.close());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "trending_up");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AdminLayoutComponent_a_20_Template, 5, 3, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, AdminLayoutComponent_a_24_Template, 5, 3, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, AdminLayoutComponent_a_25_Template, 5, 3, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, AdminLayoutComponent_a_26_Template, 5, 3, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_a_click_30_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);

        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);

        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r0.close());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "info");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "app-toolbar", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, AdminLayoutComponent_mat_progress_bar_37_Template, 1, 0, "mat-progress-bar", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](38, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 21)(40, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, AdminLayoutComponent_mat_card_41_Template, 9, 0, "mat-card", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "app-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.fullName);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 14, "layouts.admin.dashboard"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 16, "layouts.admin.setupSubhead"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("appHasPermission", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](26, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 18, "layouts.admin.accSubhead"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("appHasPermission", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](27, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("appHasPermission", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](28, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("appHasPermission", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](29, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 20, "layouts.admin.appSubhead"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 22, "layouts.admin.about"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputSideNav", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](38, 24, ctx.busyService.isLoading));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.alertIsVisible);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavContainer, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardAvatar, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_10__.MatListItem, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__.MatProgressBar, _shared_directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_2__.HasPermissionDirective, _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__.ToolbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  min-width: 250px;\n  border: 0 solid rgba(0, 0, 0, 0.5);\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 17px !important;\n  margin-top: 120px !important;\n}\n\n.user-card[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  height: 0.6px;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6d257453-e35e-4846-9f98-ffb5a54aeb09/d67p1cj-2f961097-1d06-4322-a01a-7fa3e4f8d0d1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZkMjU3NDUzLWUzNWUtNDg0Ni05Zjk4LWZmYjVhNTRhZWIwOVwvZDY3cDFjai0yZjk2MTA5Ny0xZDA2LTQzMjItYTAxYS03ZmEzZTRmOGQwZDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XdjUDwaRYj_PecGVDO9M6jlF3lYV6oCpWg1joGMIbNw\");\n  background-size: cover;\n}\n\n.mat-card-header[_ngcontent-%COMP%] {\n  padding: 10px !important;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  background-color: transparent;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n.nav-subheading[_ngcontent-%COMP%] {\n  font-weight: normal;\n  padding-left: 10px;\n  margin: 0 !important;\n  margin-bottom: 10px !important;\n  margin-top: 10px !important;\n  font-size: small;\n  opacity: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7QUFBRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFDQTtFQUVFLHdCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFDQTtFQUVJLFlBQUE7QUFDSjs7QUFDQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUdBQUE7QUFFRjs7QUFBQTtFQUNFLDJrQkFBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBREE7RUFDRSx3QkFBQTtBQUlGOztBQURDO0VBQ0MscUJBQUE7RUFDQSw2QkFBQTtBQUlGOztBQUZBO0VBRUksMkJBQUE7QUFJSjs7QUFGQTtFQUNBLG1CQUFBO0FBS0E7O0FBSEE7RUFFRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBS0YiLCJmaWxlIjoiYWRtaW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLnNpZGVuYXYge1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBib3JkZXI6IDAgc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLmNvbnRhaW5lclxue1xuICBwYWRkaW5nOiAxN3B4IWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTIwcHghaW1wb3J0YW50O1xufVxuLnVzZXItY2FyZFxue1xuICAgIG1hcmdpbjogMTBweDtcbn1cbmhyIHtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDAuNnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4xKSwgcmdiYSgwLCAwLCAwLCAwKSk7XG59XG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2VzLXdpeG1wLWVkMzBhODZiOGM0Y2E4ODc3NzM1OTRjMi53aXhtcC5jb20vZi82ZDI1NzQ1My1lMzVlLTQ4NDYtOWY5OC1mZmI1YTU0YWViMDkvZDY3cDFjai0yZjk2MTA5Ny0xZDA2LTQzMjItYTAxYS03ZmEzZTRmOGQwZDEuanBnP3Rva2VuPWV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUp6ZFdJaU9pSjFjbTQ2WVhCd09qZGxNR1F4T0RnNU9ESXlOalF6TnpOaE5XWXdaRFF4TldWaE1HUXlObVV3SWl3aWFYTnpJam9pZFhKdU9tRndjRG8zWlRCa01UZzRPVGd5TWpZME16Y3pZVFZtTUdRME1UVmxZVEJrTWpabE1DSXNJbTlpYWlJNlcxdDdJbkJoZEdnaU9pSmNMMlpjTHpaa01qVTNORFV6TFdVek5XVXRORGcwTmkwNVpqazRMV1ptWWpWaE5UUmhaV0l3T1Z3dlpEWTNjREZqYWkweVpqazJNVEE1TnkweFpEQTJMVFF6TWpJdFlUQXhZUzAzWm1FelpUUm1PR1F3WkRFdWFuQm5JbjFkWFN3aVlYVmtJanBiSW5WeWJqcHpaWEoyYVdObE9tWnBiR1V1Wkc5M2JteHZZV1FpWFgwLlhkalVEd2FSWWpfUGVjR1ZETzlNNmpsRjNsWVY2b0NwV2cxam9HTUliTncnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5tYXQtY2FyZC1oZWFkZXJ7XG4gIHBhZGRpbmc6MTBweCAhaW1wb3J0YW50O1xufVxuXG4gLm1hdC1jYXJke1xuICBwYWRkaW5nOjAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubWF0LWNhcmQtc3VidGl0bGVcbntcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG4ubWF0LWNhcmQtdGl0bGV7XG5mb250LXdlaWdodDpub3JtYWw7XG59XG4ubmF2LXN1YmhlYWRpbmdcbntcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweCFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHghaW1wb3J0YW50O1xuICBmb250LXNpemU6c21hbGw7XG4gIG9wYWNpdHk6IDUwJTtcbn1cbiJdfQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 83831:
/*!*****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/footer/footer.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 33935);





class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 13, vars: 3, consts: [["color", "primary", 1, "sticky-footer"], [1, "mat-body-1", 2, "margin", "0px!important"], [1, "footer-spacer"], ["mat-raised-button", "", "color", "accient", 1, "d-none", "d-lg-block"], ["color", "accent", "aria-hidden", "false"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "mat-toolbar-row")(2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3)(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Built with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " CHHIN SRAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "site.footer"));
    } }, dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".sticky-footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  overflow: hide;\n  width: 100%;\n}\n\n.footer-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RpY2t5LWZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdzogaGlkZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb290ZXItc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4iXX0= */"] });


/***/ }),

/***/ 41458:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/toolbar/toolbar.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarComponent": () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_components_logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/components/logout-dialog/logout-dialog.component */ 17675);
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ 64617);
/* harmony import */ var src_app_core_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/account.service */ 1146);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_core_services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/theme.service */ 6074);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 33935);















class ToolbarComponent {
    constructor(localStorageService, accountService, dialog, themeService) {
        this.localStorageService = localStorageService;
        this.accountService = accountService;
        this.dialog = dialog;
        this.themeService = themeService;
        this.darkModelToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
        let themeVariant = this.localStorageService.getItem('themeVariant');
        this.darkModeIcon = themeVariant === 'dark-theme' ? 'bedtime' : 'wb_sunny';
        this.isDarkMode = themeVariant === 'dark-theme';
        this.fullName = this.accountService.getFullName;
        this.email = this.accountService.getEmail;
    }
    toggleDarkMode() {
        this.isDarkMode = this.themeService.toggleDarkMode();
        this.darkModeIcon = this.isDarkMode ? 'bedtime' : 'wb_sunny';
    }
    openLogoutDialog() {
        const dialogRef = this.dialog.open(src_app_shared_components_logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_0__.LogoutDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (result)
                this.accountService.logout();
        });
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService)); };
ToolbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], inputs: { darkModeIcon: "darkModeIcon", inputSideNav: "inputSideNav", isDarkMode: "isDarkMode" }, outputs: { darkModelToggled: "darkModelToggled" }, decls: 72, vars: 10, consts: [["color", "primary", 1, "sticky-header"], ["mat-icon-button", "", 3, "click"], ["mat-button", "", "routerLink", "/", "aria-label", "childprotection"], ["src", "/assets/images/logo.png", "alt", "M'Lop Tapang Logo", 1, "angular-logo"], ["translate", "", 2, "font-weight", "lighter", "font-size", "larger"], [1, "nav-spacer"], ["mat-raised-button", "", "routerLink", "/", "color", "warn", 1, "d-none", "d-lg-block"], ["aria-hidden", "false", "aria-label", "Go home"], ["mat-icon-button", "", 1, "d-none", "d-sm-block", 3, "click"], ["vertical", "", 2, "height", "50%", "margin", "10px"], ["mat-raised-button", "", "color", "accent", 3, "matMenuTriggerFor"], [1, "fas", "fa-caret-down", 2, "margin-right", "10px"], [2, "padding-top", "0!important"], ["userMenu", "matMenu"], [2, "margin-bottom", "0px!important"], [2, "padding", "8px!important"], ["mat-card-avatar", "", 1, "example-header-image"], [2, "margin-bottom", "10px", "font-size", "medium"], [2, "margin-bottom", "5px", "font-size", "small"], ["mat-menu-item", "", "translate", "", "routerLink", "/admin/identity/profile"], ["mat-menu-item", "", "routerLink", "/admin/settings", "translate", ""], ["mat-menu-item", "", "translate", "", 3, "click"], [1, "second-toolbar"], ["mat-button", ""], [2, "padding-right", "5px"], ["mat-button", "", 3, "matMenuTriggerFor"], ["mat-button", "", "routerLink", "/admin/test-error"], ["products", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["listProduct", "matMenu"], ["mat-menu-item", "", "routerLink", "/admin/catalog/products"], ["manageProduct", "matMenu"], ["mat-menu-item", ""]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "mat-toolbar-row")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_2_listener() { return ctx.inputSideNav.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "site.title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 6)(11, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ToolbarComponent_Template_a_click_13_listener() { return ctx.toggleDarkMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "mat-divider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 10)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-menu", 12, 13)(23, "mat-card", 14)(24, "mat-card-header", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-card-title", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-card-subtitle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "userCard.profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "userCard.settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_35_listener() { return ctx.openLogoutDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "userCard.logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-toolbar-row", 22)(38, "button", 23)(39, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "store");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "button", 25)(43, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "store");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "button", 25)(47, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "store");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "button", 25)(51, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "store");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "button", 26)(55, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "store");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Test Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "mat-menu", null, 27)(60, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "mat-menu", null, 29)(66, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "mat-menu", null, 31)(70, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](22);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](59);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](65);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.darkModeIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarRow, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardAvatar, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateDirective], styles: [".angular-logo[_ngcontent-%COMP%] {\n  height: 26px;\n  margin: 0 4px 3px 0;\n  vertical-align: middle;\n}\n\n.nav-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.sticky-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  overflow: hide;\n  width: 100%;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6d257453-e35e-4846-9f98-ffb5a54aeb09/d67p1cj-2f961097-1d06-4322-a01a-7fa3e4f8d0d1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZkMjU3NDUzLWUzNWUtNDg0Ni05Zjk4LWZmYjVhNTRhZWIwOVwvZDY3cDFjai0yZjk2MTA5Ny0xZDA2LTQzMjItYTAxYS03ZmEzZTRmOGQwZDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XdjUDwaRYj_PecGVDO9M6jlF3lYV6oCpWg1joGMIbNw\");\n  background-size: cover;\n}\n\n@media screen and (max-width: 906px) {\n  .hide-on-mobile[_ngcontent-%COMP%] {\n    visibility: hidden;\n    clear: both;\n    display: none;\n  }\n\n  .visible-on-mobile-only[_ngcontent-%COMP%] {\n    visibility: visible;\n    clear: both;\n    display: block;\n  }\n}\n\n@media screen and (max-width: 1920px) {\n  .visible-on-mobile-only[_ngcontent-%COMP%] {\n    visibility: visible;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUdGOztBQUNBO0VBQ0UsMmtCQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFBQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtFQUdGOztFQURBO0lBQ0UsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtFQUlGO0FBQ0Y7O0FBRkE7RUFDRTtJQUNFLG1CQUFBO0VBSUY7QUFDRiIsImZpbGUiOiJ0b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuZ3VsYXItbG9nbyB7XG4gIGhlaWdodDogMjZweDtcbiAgbWFyZ2luOiAwIDRweCAzcHggMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5uYXYtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4uc3RpY2t5LWhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBvdmVyZmxvdzogaGlkZTtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIHotaW5kZXg6IDEwO1xufVxuXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2VzLXdpeG1wLWVkMzBhODZiOGM0Y2E4ODc3NzM1OTRjMi53aXhtcC5jb20vZi82ZDI1NzQ1My1lMzVlLTQ4NDYtOWY5OC1mZmI1YTU0YWViMDkvZDY3cDFjai0yZjk2MTA5Ny0xZDA2LTQzMjItYTAxYS03ZmEzZTRmOGQwZDEuanBnP3Rva2VuPWV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUp6ZFdJaU9pSjFjbTQ2WVhCd09qZGxNR1F4T0RnNU9ESXlOalF6TnpOaE5XWXdaRFF4TldWaE1HUXlObVV3SWl3aWFYTnpJam9pZFhKdU9tRndjRG8zWlRCa01UZzRPVGd5TWpZME16Y3pZVFZtTUdRME1UVmxZVEJrTWpabE1DSXNJbTlpYWlJNlcxdDdJbkJoZEdnaU9pSmNMMlpjTHpaa01qVTNORFV6TFdVek5XVXRORGcwTmkwNVpqazRMV1ptWWpWaE5UUmhaV0l3T1Z3dlpEWTNjREZqYWkweVpqazJNVEE1TnkweFpEQTJMVFF6TWpJdFlUQXhZUzAzWm1FelpUUm1PR1F3WkRFdWFuQm5JbjFkWFN3aVlYVmtJanBiSW5WeWJqcHpaWEoyYVdObE9tWnBiR1V1Wkc5M2JteHZZV1FpWFgwLlhkalVEd2FSWWpfUGVjR1ZETzlNNmpsRjNsWVY2b0NwV2cxam9HTUliTncnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTA2cHgpIHtcbiAgLmhpZGUtb24tbW9iaWxlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAudmlzaWJsZS1vbi1tb2JpbGUtb25seSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBjbGVhcjogYm90aDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkyMHB4KSB7XG4gIC52aXNpYmxlLW9uLW1vYmlsZS1vbmx5ICB7XG4gICAgdmlzaWJpbGl0eTp2aXNpYmxlO1xuICB9XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 82754:
/*!**************************************************************!*\
  !*** ./src/app/layouts/home-layout/home-layout.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeLayoutComponent": () => (/* binding */ HomeLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);


class HomeLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeLayoutComponent.ɵfac = function HomeLayoutComponent_Factory(t) { return new (t || HomeLayoutComponent)(); };
HomeLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeLayoutComponent, selectors: [["app-home-layout"]], decls: 3, vars: 0, consts: [[1, "content"], [1, "container"]], template: function HomeLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".container[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container[_ngcontent-%COMP%] {\n    width: 540px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 720px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    width: 960px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1140px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFO0lBQ0ksWUFBQTtFQUVKO0FBQ0Y7O0FBQUE7RUFDRTtJQUNJLFlBQUE7RUFFSjtBQUNGOztBQUFBO0VBQ0U7SUFDSSxZQUFBO0VBRUo7QUFDRjs7QUFBQTtFQUNFO0lBQ0ksYUFBQTtFQUVKO0FBQ0YiLCJmaWxlIjoiaG9tZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufSBcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiA1NDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgICAgd2lkdGg6IDcyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogOTYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTE0MHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 77099:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/access-denial/access-denial.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessDenialComponent": () => (/* binding */ AccessDenialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 33935);



class AccessDenialComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccessDenialComponent.ɵfac = function AccessDenialComponent_Factory(t) { return new (t || AccessDenialComponent)(); };
AccessDenialComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccessDenialComponent, selectors: [["app-access-denial"]], decls: 16, vars: 3, consts: [[1, "content"], [1, "container"], [1, "home-center-screen"], [1, "row"], [1, "col-md-12", "col-xl-12"], [1, "c-card", 2, "text-align", "center"], [2, "font-size", "xx-large"], ["translate", ""], ["mat-raised-button", "", "color", "primary", "routerLink", "/"]], template: function AccessDenialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div")(7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "403");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "components.accessDenial.header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "components.accessDenial.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 1, "components.accessDenial.button"));
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".container[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container[_ngcontent-%COMP%] {\n    width: 540px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 720px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    width: 960px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1140px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2Vzcy1kZW5pYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNFO0VBQ0U7SUFDSSxZQUFBO0VBRU47QUFDRjs7QUFBRTtFQUNFO0lBQ0ksWUFBQTtFQUVOO0FBQ0Y7O0FBQUU7RUFDRTtJQUNJLFlBQUE7RUFFTjtBQUNGOztBQUFFO0VBQ0U7SUFDSSxhQUFBO0VBRU47QUFDRiIsImZpbGUiOiJhY2Nlc3MtZGVuaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9IFxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDU0MHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDcyMHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDk2MHB4O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMTQwcHg7XG4gICAgfVxuICB9Il19 */"] });


/***/ }),

/***/ 87121:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/card-header/card-header.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardHeaderComponent": () => (/* binding */ CardHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 33935);



class CardHeaderComponent {
    constructor() {
        this.title = 'untitle';
    }
    ngOnInit() {
    }
}
CardHeaderComponent.ɵfac = function CardHeaderComponent_Factory(t) { return new (t || CardHeaderComponent)(); };
CardHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardHeaderComponent, selectors: [["app-card-header"]], inputs: { title: "title" }, decls: 5, vars: 3, consts: [[1, "module-card", 2, "margin-bottom", "0px!important", "padding-bottom", "4px!important"], [1, "khmer-moul"]], template: function CardHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header")(2, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.title), " ");
    } }, dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 59680:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/delete-dialog/delete-dialog.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteDialogComponent": () => (/* binding */ DeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 33935);





class DeleteDialogComponent {
    constructor(dialogRef, message) {
        this.dialogRef = dialogRef;
        this.message = message;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
DeleteDialogComponent.ɵfac = function DeleteDialogComponent_Factory(t) { return new (t || DeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
DeleteDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteDialogComponent, selectors: [["app-delete-dialog"]], decls: 12, vars: 11, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "cdkFocusInitial", "", "color", "danger", 3, "mat-dialog-close"]], template: function DeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 2)(6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteDialogComponent_Template_button_click_6_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, "dialogs.delete.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, "dialogs.delete.buttons.cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, "dialogs.delete.buttons.confirm"));
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 17675:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/logout-dialog/logout-dialog.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutDialogComponent": () => (/* binding */ LogoutDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 33935);





class LogoutDialogComponent {
    constructor(dialogRef, message) {
        this.dialogRef = dialogRef;
        this.message = message;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
LogoutDialogComponent.ɵfac = function LogoutDialogComponent_Factory(t) { return new (t || LogoutDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
LogoutDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutDialogComponent, selectors: [["app-logout-dialog"]], decls: 11, vars: 7, consts: [["mat-dialog-title", "", "translate", ""], ["translate", "", 1, "mat-typography"], ["align", "end"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "cdkFocusInitial", "", "color", "danger", 3, "mat-dialog-close"]], template: function LogoutDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dialogs.logout.title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "dialogs.logout.message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions", 2)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoutDialogComponent_Template_button_click_5_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, "common.cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, "dialogs.logout.button"));
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 59442:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 33935);



class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 16, vars: 3, consts: [[1, "content"], [1, "container"], [1, "home-center-screen"], [1, "row"], [1, "col-md-12", "col-xl-12"], [1, "c-card", 2, "text-align", "center"], [2, "font-size", "xx-large"], ["translate", ""], ["mat-raised-button", "", "color", "primary", "routerLink", "/"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div")(7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "components.notFound.header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "components.notFound.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 1, "components.notFound.button"));
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".container[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container[_ngcontent-%COMP%] {\n    width: 540px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 720px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    width: 960px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1140px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0U7RUFDRTtJQUNJLFlBQUE7RUFFTjtBQUNGOztBQUFFO0VBQ0U7SUFDSSxZQUFBO0VBRU47QUFDRjs7QUFBRTtFQUNFO0lBQ0ksWUFBQTtFQUVOO0FBQ0Y7O0FBQUU7RUFDRTtJQUNJLGFBQUE7RUFFTjtBQUNGIiwiZmlsZSI6Im5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfSBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA1NDBweDtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA3MjBweDtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA5NjBweDtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTE0MHB4O1xuICAgIH1cbiAgfSJdfQ== */"] });


/***/ }),

/***/ 32802:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderComponent": () => (/* binding */ PageHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 33935);


class PageHeaderComponent {
    constructor() {
        this.title = 'Title';
        this.subtitle = 'Subtitle';
    }
    ngOnInit() {
    }
}
PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) { return new (t || PageHeaderComponent)(); };
PageHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageHeaderComponent, selectors: [["app-page-header"]], inputs: { title: "title", subtitle: "subtitle" }, decls: 5, vars: 2, consts: [["translate", ""]], template: function PageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle);
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 70195:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/server-error/server-error.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerErrorComponent": () => (/* binding */ ServerErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 33935);





function ServerErrorComponent_code_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error.detail);
} }
class ServerErrorComponent {
    constructor(router) {
        this.router = router;
        const navigation = this.router.getCurrentNavigation();
        this.error = navigation?.extras?.state?.error;
    }
    ngOnInit() {
    }
}
ServerErrorComponent.ɵfac = function ServerErrorComponent_Factory(t) { return new (t || ServerErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
ServerErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerErrorComponent, selectors: [["app-server-error"]], decls: 35, vars: 4, consts: [[1, "content"], [1, "container"], [1, "home-center-screen"], [1, "row"], [1, "col-md-12", "col-xl-12"], [1, "c-card", 2, "text-align", "center"], [2, "font-size", "xx-large"], ["translate", ""], [2, "font-weight", "bold"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "routerLink", "/"]], template: function ServerErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div")(7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "components.serverError.header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "components.serverError.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Note: If you are seeing this then Angular is probably not to blame");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "What to do next?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ol")(18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Open the chrome dev tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Inspect the network tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Check the failing request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Examine the request URL - make sure it is correct");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Reproduce the error in Postman - if we see the same response, then the issue is not with Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Following is the stack trace - this is where your investigation should start!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ServerErrorComponent_code_31_Template, 2, 1, "code", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error && ctx.error.detail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 2, "components.serverError.button"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".container[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n@media (min-width: 576px) {\n  .container[_ngcontent-%COMP%] {\n    width: 540px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 720px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    width: 960px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1140px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci1lcnJvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0U7RUFDRTtJQUNJLFlBQUE7RUFFTjtBQUNGOztBQUFFO0VBQ0U7SUFDSSxZQUFBO0VBRU47QUFDRjs7QUFBRTtFQUNFO0lBQ0ksWUFBQTtFQUVOO0FBQ0Y7O0FBQUU7RUFDRTtJQUNJLGFBQUE7RUFFTjtBQUNGIiwiZmlsZSI6InNlcnZlci1lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfSBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA1NDBweDtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA3MjBweDtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA5NjBweDtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTE0MHB4O1xuICAgIH1cbiAgfSJdfQ== */"] });


/***/ }),

/***/ 36709:
/*!************************************************************!*\
  !*** ./src/app/shared/components/table/table.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableComponent": () => (/* binding */ TableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 84177);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ 9266);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../delete-dialog/delete-dialog.component */ 59680);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/clipboard */ 86079);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _pipes_data_property_getter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/data-property-getter.pipe */ 96931);
























const _c0 = ["TABLE"];
const _c1 = ["htmlData"];
function TableComponent_div_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_div_1_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.openCreateForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "components.table.register"), " ");
} }
function TableComponent_div_1_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_div_1_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.handleReload()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "components.table.reload"), " ");
} }
function TableComponent_div_1_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_div_1_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.handleReload()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "print");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "components.table.print"), " ");
} }
function TableComponent_div_1_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_div_1_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.exportAs("xlsx")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "calculate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "components.table.excel"), " ");
} }
function TableComponent_div_1_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_div_1_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.openPDF()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "picture_as_pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "components.table.pdf"), " ");
} }
function TableComponent_div_1_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_div_1_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r27.exportAs("csv")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "components.table.csv"), " ");
} }
function TableComponent_div_1_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseup", function TableComponent_div_1_button_10_Template_button_mouseup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.copyData()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkCopyToClipboard", ctx_r13.copyToClipboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 2, "components.table.copyTable"), " ");
} }
function TableComponent_div_1_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_div_1_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r31.handleReload()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "components.table.show"), " ");
} }
function TableComponent_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_div_1_div_12_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.handleCustomAction()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("color", ctx_r15.customActionData.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r15.customActionData.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r15.customActionData.title, " ");
} }
function TableComponent_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21)(1, "mat-form-field")(2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TableComponent_div_1_div_13_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r35.searchString = $event); })("keyup", function TableComponent_div_1_div_13_Template_input_keyup_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r37.handleFilter()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, "components.table.filter"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, ctx_r16.title), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r16.searchString);
} }
function TableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TableComponent_div_1_a_3_Template, 5, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TableComponent_div_1_a_4_Template, 5, 3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, TableComponent_div_1_a_6_Template, 5, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TableComponent_div_1_a_7_Template, 5, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TableComponent_div_1_a_8_Template, 5, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, TableComponent_div_1_a_9_Template, 5, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, TableComponent_div_1_button_10_Template, 5, 4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, TableComponent_div_1_a_11_Template, 5, 3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, TableComponent_div_1_div_12_Template, 5, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, TableComponent_div_1_div_13_Template, 5, 7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.onCreateForm.observers.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.onReload.observers.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.enablePrint);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.enableExportExcel);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.enableExportPDF);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.enableExportCSV);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.enableCopyToClipboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.enableShowColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.customActionData);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.onFilter.observers.length > 0);
} }
function TableComponent_ng_container_6_ng_container_1_ng_container_1_th_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tableColumn_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tableColumn_r38.name);
} }
function TableComponent_ng_container_6_ng_container_1_ng_container_1_th_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-checkbox", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TableComponent_ng_container_6_ng_container_1_ng_container_1_th_1_ng_container_2_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event ? ctx_r52.masterToggle() : null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r50.isAllSelected())("indeterminate", !ctx_r50.isAllSelected());
} }
function TableComponent_ng_container_6_ng_container_1_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TableComponent_ng_container_6_ng_container_1_ng_container_1_th_1_ng_container_1_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TableComponent_ng_container_6_ng_container_1_ng_container_1_th_1_ng_container_2_Template, 2, 2, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tableColumn_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-sort-header", tableColumn_r38.name)("arrowPosition", tableColumn_r38.position === "right" ? "before" : "after");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tableColumn_r38.dataKey !== "enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tableColumn_r38.dataKey === "enabled");
} }
function TableComponent_ng_container_6_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TableComponent_ng_container_6_ng_container_1_ng_container_1_th_1_Template, 3, 4, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function TableComponent_ng_container_6_ng_container_1_ng_template_2_th_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tableColumn_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](tableColumn_r38.name);
} }
function TableComponent_ng_container_6_ng_container_1_ng_template_2_th_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-checkbox", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TableComponent_ng_container_6_ng_container_1_ng_template_2_th_0_ng_container_2_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event ? ctx_r59.masterToggle() : null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r57.isAllSelected())("indeterminate", !ctx_r57.isAllSelected());
} }
function TableComponent_ng_container_6_ng_container_1_ng_template_2_th_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TableComponent_ng_container_6_ng_container_1_ng_template_2_th_0_ng_container_1_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TableComponent_ng_container_6_ng_container_1_ng_template_2_th_0_ng_container_2_Template, 2, 2, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tableColumn_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("text-right", tableColumn_r38.position == "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tableColumn_r38.dataKey !== "enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tableColumn_r38.dataKey === "enabled");
} }
function TableComponent_ng_container_6_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TableComponent_ng_container_6_ng_container_1_ng_template_2_th_0_Template, 3, 4, "th", 33);
} }
function TableComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TableComponent_ng_container_6_ng_container_1_ng_container_1_Template, 2, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TableComponent_ng_container_6_ng_container_1_ng_template_2_Template, 1, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const tableColumn_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tableColumn_r38.isSortable)("ngIfElse", _r46);
} }
function TableComponent_ng_container_6_ng_template_2_th_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "th", 36);
} }
function TableComponent_ng_container_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TableComponent_ng_container_6_ng_template_2_th_0_Template, 1, 0, "th", 35);
} }
function TableComponent_ng_container_6_ng_container_4_td_1_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "dataPropertyGetter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const tableColumn_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, element_r65, tableColumn_r38.dataKey), " ");
} }
function TableComponent_ng_container_6_ng_container_4_td_1_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" (", element_r65.taxMethod, ")");
} }
function TableComponent_ng_container_6_ng_container_4_td_1_ng_container_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", element_r65.isAlert ? "\u274C" : "\u2705", " (", element_r65.alertQuantity, ")");
} }
function TableComponent_ng_container_6_ng_container_4_td_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TableComponent_ng_container_6_ng_container_4_td_1_ng_container_1_span_1_Template, 3, 4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TableComponent_ng_container_6_ng_container_4_td_1_ng_container_1_span_2_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TableComponent_ng_container_6_ng_container_4_td_1_ng_container_1_span_3_Template, 2, 2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tableColumn_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tableColumn_r38.dataKey !== "isAlert");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tableColumn_r38.dataKey === "tax");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tableColumn_r38.dataKey === "isAlert");
} }
function TableComponent_ng_container_6_ng_container_4_td_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-checkbox", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_ng_container_6_ng_container_4_td_1_ng_container_2_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function TableComponent_ng_container_6_ng_container_4_td_1_ng_container_2_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r80); const element_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](element_r65.enabled = !element_r65.enabled); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const element_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", element_r65.enabled);
} }
function TableComponent_ng_container_6_ng_container_4_td_1_ng_container_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_ng_container_6_ng_container_4_td_1_ng_container_3_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r88); const element_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r86.openCustomActionOne(element_r65)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r82.customActionOneData.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("color", ctx_r82.customActionOneData.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r82.customActionOneData.icon);
} }
function TableComponent_ng_container_6_ng_container_4_td_1_ng_container_3_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_ng_container_6_ng_container_4_td_1_ng_container_3_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r91); const element_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r89.openViewForm(element_r65)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "remove_red_eye");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, "components.table.view"));
} }
function TableComponent_ng_container_6_ng_container_4_td_1_ng_container_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_ng_container_6_ng_container_4_td_1_ng_container_3_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r94); const element_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r92.openEditForm(element_r65)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, "components.table.edit"));
} }
function TableComponent_ng_container_6_ng_container_4_td_1_ng_container_3_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TableComponent_ng_container_6_ng_container_4_td_1_ng_container_3_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r97); const element_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r95.openDeleteConfirmationDialog(element_r65.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, "components.table.delete"));
} }
function TableComponent_ng_container_6_ng_container_4_td_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TableComponent_ng_container_6_ng_container_4_td_1_ng_container_3_button_1_Template, 3, 3, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TableComponent_ng_container_6_ng_container_4_td_1_ng_container_3_button_2_Template, 4, 3, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TableComponent_ng_container_6_ng_container_4_td_1_ng_container_3_button_3_Template, 4, 3, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TableComponent_ng_container_6_ng_container_4_td_1_ng_container_3_button_4_Template, 4, 3, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r68.customActionOneData);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r68.onView.observers.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r68.onEditForm.observers.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r68.onDelete.observers.length > 0);
} }
const _c2 = function (a0) { return { "text-right": a0 }; };
function TableComponent_ng_container_6_ng_container_4_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TableComponent_ng_container_6_ng_container_4_td_1_ng_container_1_Template, 4, 3, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TableComponent_ng_container_6_ng_container_4_td_1_ng_container_2_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TableComponent_ng_container_6_ng_container_4_td_1_ng_container_3_Template, 5, 4, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tableColumn_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("text-right", tableColumn_r38.position == "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c2, tableColumn_r38.dataKey === "action"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tableColumn_r38.isShowable && tableColumn_r38.dataKey !== "enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tableColumn_r38.dataKey === "enabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tableColumn_r38.dataKey === "action");
} }
function TableComponent_ng_container_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TableComponent_ng_container_6_ng_container_4_td_1_Template, 4, 8, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function TableComponent_ng_container_6_ng_template_5_th_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "th", 49);
} }
function TableComponent_ng_container_6_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TableComponent_ng_container_6_ng_template_5_th_0_Template, 1, 0, "th", 48);
} }
function TableComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TableComponent_ng_container_6_ng_container_1_Template, 4, 2, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TableComponent_ng_container_6_ng_template_2_Template, 1, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TableComponent_ng_container_6_ng_container_4_Template, 2, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, TableComponent_ng_container_6_ng_template_5_Template, 1, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tableColumn_r38 = ctx.$implicit;
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matColumnDef", tableColumn_r38.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tableColumn_r38.isShowable || tableColumn_r38.dataKey == "action")("ngIfElse", _r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", tableColumn_r38.isShowable || tableColumn_r38.dataKey == "action")("ngIfElse", _r43);
} }
function TableComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 50);
} }
function TableComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 51);
} }
const _c3 = function () { return [5, 10, 25, 100]; };
function TableComponent_mat_paginator_9_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-paginator", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function TableComponent_mat_paginator_9_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r103); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r102.onPageChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx_r6.totalCount)("pageSize", ctx_r6.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c3));
} }
class TableComponent {
    constructor(dialog, toastrService) {
        this.dialog = dialog;
        this.toastrService = toastrService;
        this.tableDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource([]);
        this.onPageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.title = 'Title';
        this.subtitle = 'Subtitle';
        this.isSortable = false;
        this.enablePrint = false;
        this.enableExportPDF = false;
        this.enableExportExcel = false;
        this.enableExportCSV = false;
        this.enableCopyToClipboard = false;
        this.enableShowColumns = false;
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onReload = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onSort = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onCustomActionOne = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onCustomAction = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onCreateForm = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onEditForm = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onView = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    set data(data) {
        this.setTableDataSource(data);
    }
    ngOnInit() {
        const columnNames = this.columns.map((tableColumn) => tableColumn.name);
        this.displayedColumns = columnNames;
    }
    ngAfterViewInit() {
        this.tableDataSource.sort = this.matSort;
    }
    setTableDataSource(data) {
        this.tableDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(data);
    }
    openCustomActionOne($event) {
        this.onCustomActionOne.emit($event);
    }
    handleCustomAction() {
        this.onCustomAction.emit(this.tableDataSource.data);
    }
    openCreateForm() {
        this.onCreateForm.emit();
    }
    openEditForm($event) {
        this.onEditForm.emit($event);
    }
    openViewForm($event) {
        this.onView.emit($event);
    }
    handleReload() {
        this.searchString = '';
        this.onReload.emit();
    }
    handleFilter() {
        this.onFilter.emit(this.searchString);
    }
    handleSort(sortParams) {
        sortParams.active = this.columns.find((column) => column.name === sortParams.active).dataKey;
        if (sortParams.direction == "") {
            sortParams.direction = "asc";
        }
        this.onSort.emit(sortParams);
    }
    openDeleteConfirmationDialog($event) {
        const dialogRef = this.dialog.open(_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeleteDialogComponent, {
            data: 'Do you confirm the removal of this brand?',
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.onDelete.emit($event);
            }
        });
    }
    onPageChange(pageEvent) {
        const event = {
            pageNumber: pageEvent.pageIndex + 1 ?? 1,
            pageSize: pageEvent.pageSize ?? 10,
        };
        this.onPageChanged.emit(event);
    }
    isAllSelected() {
        var result = true;
        this.tableDataSource.data.forEach(element => {
            if (element.selected === false)
                result = false;
        });
        return result;
    }
    toggleTableDataSourceChecking(condition) {
        this.tableDataSource.data.forEach(element => {
            element.selected = condition;
        });
    }
    masterToggle() {
        console.log(this.isAllSelected());
        this.isAllSelected() ? this.toggleTableDataSourceChecking(false) : this.toggleTableDataSourceChecking(true);
    }
    openPDF() {
        let DATA = document.getElementById('htmlData');
        html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(DATA).then(canvas => {
            let fileWidth = 208;
            let fileHeight = canvas.height * fileWidth / canvas.width;
            const FILEURI = canvas.toDataURL('image/png');
            let PDF = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]('p', 'mm', 'a4');
            let position = 0;
            PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
            PDF.save(`${this.title}.pdf`);
        });
    }
    exportAs(type) {
        // if (type == 'xlsx') {
        //   const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);//converts a DOM TABLE element to a worksheet
        //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
        //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        //   /* save to file */
        //   XLSX.writeFile(wb, `${this.title}.xlsx`);
        // } else if (type == 'csv') {
        //   const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);//converts a DOM TABLE element to a worksheet
        //   const csv: string = XLSX.utils.sheet_to_csv(ws);
        //   FileSaver.saveAs(new Blob([csv]), `${this.title}_${new Date().getTime()}.csv`);
        // }
    }
    copyData() {
        var dataArray = "";
        this.tableDataSource.data.forEach(row => {
            dataArray += this.ObjectToArray(row);
        });
        this.toastrService.info('Copied to clipboard.');
        this.copyToClipboard = dataArray;
    }
    ObjectToArray(obj) {
        var result = Object.keys(obj).map((key) => {
            let value = obj[key];
            return value;
        });
        return result.toString() + "\n";
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService)); };
TableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.htmlData = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.matSort = _t.first);
    } }, inputs: { customActionOneData: "customActionOneData", customActionData: "customActionData", totalCount: "totalCount", pageSize: "pageSize", title: "title", subtitle: "subtitle", isSortable: "isSortable", columns: "columns", data: "data", enablePrint: "enablePrint", enableExportPDF: "enableExportPDF", enableExportExcel: "enableExportExcel", enableExportCSV: "enableExportCSV", enableCopyToClipboard: "enableCopyToClipboard", enableShowColumns: "enableShowColumns" }, outputs: { onPageChanged: "onPageChanged", onFilter: "onFilter", onReload: "onReload", onSort: "onSort", onCustomActionOne: "onCustomActionOne", onCustomAction: "onCustomAction", onCreateForm: "onCreateForm", onEditForm: "onEditForm", onView: "onView", onDelete: "onDelete" }, decls: 10, vars: 6, consts: [[1, "module-card", 2, "margin-bottom", "0px!important", "padding-bottom", "4px!important"], ["class", "panel-content", 4, "ngIf"], ["id", "htmlData"], ["TABLE", ""], ["fixedLayout", "true", "mat-table", "", "mat-table-stripped", "", "matSort", "", 3, "dataSource", "matSortChange"], ["table", ""], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], [1, "panel-content"], [1, "left"], [1, "mr-2"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "mr-6", "mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], [1, "ml-2"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "cdkCopyToClipboard", "mouseup", 4, "ngIf"], ["class", "right", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "accent", 1, "mr-6", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "cdkCopyToClipboard", "mouseup"], [1, "right"], ["mat-raised-button", "", 3, "color", "click"], ["matInput", "", "name", "searchString", "type", "text", "autocomplete", "off", 3, "ngModel", "placeholder", "ngModelChange", "keyup"], [3, "matColumnDef"], [4, "ngIf", "ngIfElse"], ["notShowable", ""], ["notShowableData", ""], ["notSortable", ""], ["mat-header-cell", "", 3, "mat-sort-header", "arrowPosition", 4, "matHeaderCellDef"], ["mat-header-cell", "", 3, "mat-sort-header", "arrowPosition"], [4, "ngIf"], [3, "checked", "indeterminate", "change"], ["mat-header-cell", "", 3, "text-right", 4, "matHeaderCellDef"], ["mat-header-cell", ""], ["hidden", "", "mat-header-cell", "", 4, "matHeaderCellDef"], ["hidden", "", "mat-header-cell", ""], ["mat-cell", "", 3, "text-right", "ngClass", 4, "matCellDef"], ["mat-cell", "", 3, "ngClass"], [3, "checked", "click", "change"], ["mat-raised-button", "", 3, "matTooltip", "color", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "matTooltip", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "matTooltip", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "danger", 3, "matTooltip", "click", 4, "ngIf"], ["mat-raised-button", "", 3, "matTooltip", "color", "click"], ["mat-raised-button", "", "color", "primary", 3, "matTooltip", "click"], ["mat-raised-button", "", "color", "accent", 3, "matTooltip", "click"], ["mat-raised-button", "", "color", "danger", 3, "matTooltip", "click"], ["hidden", "", "mat-cell", "", 4, "matCellDef"], ["hidden", "", "mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TableComponent_div_1_Template, 14, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2, 3)(4, "table", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function TableComponent_Template_table_matSortChange_4_listener($event) { return ctx.handleSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, TableComponent_ng_container_6_Template, 7, 5, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TableComponent_tr_7_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TableComponent_tr_8_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, TableComponent_mat_paginator_9_Template, 1, 4, "mat-paginator", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.onReload.observers.length || ctx.onCreateForm.observers.length || ctx.enablePrint || ctx.enableExportExcel || ctx.enableExportPDF || ctx.enableExportCSV || ctx.enableCopyToClipboard || ctx.enableShowColumns || ctx.customActionData || ctx.onFilter.observers.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.tableDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.totalCount > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckbox, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_19__.CdkCopyToClipboard, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, _pipes_data_property_getter_pipe__WEBPACK_IMPORTED_MODULE_3__.DataPropertyGetterPipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.text-right[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  border-bottom-style: dotted;\n  height: 60px !important;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%] {\n  border-bottom-style: none;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  font-size: 17px;\n}\n\n.mat-raised-button[_ngcontent-%COMP%] {\n  min-width: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsNEJBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsdUJBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUVFLHlCQUFBO0FBQ0YiLCJmaWxlIjoidGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG50ZC5tYXQtY2VsbHtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTpkb3R0ZWQ7XG4gIGhlaWdodDogNjBweCFpbXBvcnRhbnQ7XG59XG5cbnRoLm1hdC1oZWFkZXItY2VsbHtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcblxufVxuLm1hdC1pY29uIHtcbiAgd2lkdGg6IDE3cHg7XG4gIGhlaWdodDogMTdweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b25cbntcbiAgbWluLXdpZHRoOiAwcHghaW1wb3J0YW50O1xufVxuIl19 */"] });


/***/ }),

/***/ 31506:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/uploader/uploader.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploaderComponent": () => (/* binding */ UploaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_models_upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/upload */ 37058);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 33935);





;
class UploaderComponent {
    constructor() {
        this.onLoadFile = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.upload = new src_app_shared_models_upload__WEBPACK_IMPORTED_MODULE_0__.Upload();
    }
    ngOnInit() {
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            this.upload.fileName = event.target.files[0].name.split('.').shift();
            this.upload.extension = event.target.files[0].name.split('.').pop();
            this.upload.uploadType = this.uploadType;
            reader.onloadend = (event) => {
                this.url = event.target.result;
                this.upload.data = event.target.result;
            };
            this.onLoadFile.emit(this.upload);
        }
    }
}
UploaderComponent.ɵfac = function UploaderComponent_Factory(t) { return new (t || UploaderComponent)(); };
UploaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UploaderComponent, selectors: [["app-uploader"]], inputs: { url: "url", uploadType: "uploadType" }, outputs: { onLoadFile: "onLoadFile" }, decls: 9, vars: 4, consts: [[1, "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12"], [2, "border-radius", "20px", "max-width", "100%", "max-height", "100%", 3, "src"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], ["file", ""], ["type", "button", "mat-raised-button", "", "color", "accent", 2, "width", "100%", 3, "click"], [1, "fas", "fa-upload", 2, "margin-right", "10px"]], template: function UploaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UploaderComponent_Template_input_change_2_listener($event) { return ctx.onSelectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploaderComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r0.click()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, "components.uploader.upload"));
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 95516:
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/has-permission.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HasPermissionDirective": () => (/* binding */ HasPermissionDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/account.service */ 1146);


class HasPermissionDirective {
    constructor(viewContainerRef, templateRef, accountService) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.accountService = accountService;
    }
    ngOnInit() {
        const isAuthorized = this.accountService.isAuthorized('Permission', this.appHasPermission);
        if (!isAuthorized) {
            this.viewContainerRef.clear();
        }
        else {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }
}
HasPermissionDirective.ɵfac = function HasPermissionDirective_Factory(t) { return new (t || HasPermissionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService)); };
HasPermissionDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: HasPermissionDirective, selectors: [["", "appHasPermission", ""]], inputs: { appHasPermission: "appHasPermission" } });


/***/ }),

/***/ 6059:
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/has-role.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HasRoleDirective": () => (/* binding */ HasRoleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/account.service */ 1146);


class HasRoleDirective {
    constructor(viewContainerRef, templateRef, accountService) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.accountService = accountService;
    }
    ngOnInit() {
        const isAuthorized = this.accountService.isAuthorized('Role', this.appHasRole);
        if (!isAuthorized) {
            this.viewContainerRef.clear();
        }
        else {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }
}
HasRoleDirective.ɵfac = function HasRoleDirective_Factory(t) { return new (t || HasRoleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService)); };
HasRoleDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: HasRoleDirective, selectors: [["", "appHasRole", ""]], inputs: { appHasRole: "appHasRole" } });


/***/ }),

/***/ 793:
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/stepper */ 44193);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tree */ 53453);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button-toggle */ 19837);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/badge */ 83335);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/chips */ 11169);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 64865);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/clipboard */ 86079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

// Material Form Controls









// Material Navigation



// Material Layout








// Material Buttons & Indicators








// Material Popups & Modals




// Material Data tables



// CDK


class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatNativeDateModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__.MatTreeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__.MatBadgeModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_37__.ClipboardModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__.MatTreeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__.MatBadgeModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_37__.ClipboardModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatNativeDateModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__.MatTreeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__.MatBadgeModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_37__.ClipboardModule], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_22__.MatTreeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__.MatBadgeModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatRippleModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_37__.ClipboardModule] }); })();


/***/ }),

/***/ 1118:
/*!*********************************************!*\
  !*** ./src/app/shared/models/pagination.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginatedResponse": () => (/* binding */ PaginatedResponse)
/* harmony export */ });
class PaginatedResponse {
}


/***/ }),

/***/ 37058:
/*!*****************************************!*\
  !*** ./src/app/shared/models/upload.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Upload": () => (/* binding */ Upload),
/* harmony export */   "UploadType": () => (/* binding */ UploadType)
/* harmony export */ });
class Upload {
}
var UploadType;
(function (UploadType) {
    UploadType[UploadType["Product"] = 0] = "Product";
    UploadType[UploadType["Brand"] = 1] = "Brand";
})(UploadType || (UploadType = {}));


/***/ }),

/***/ 90193:
/*!***************************************!*\
  !*** ./src/app/shared/models/user.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserParams": () => (/* binding */ UserParams)
/* harmony export */ });
class UserParams {
    constructor() {
        this.pageNumber = 1;
        this.pageSize = 5;
    }
}


/***/ }),

/***/ 96931:
/*!***********************************************************!*\
  !*** ./src/app/shared/pipes/data-property-getter.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataPropertyGetterPipe": () => (/* binding */ DataPropertyGetterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DataPropertyGetterPipe {
    transform(object, keyName, ...args) {
        return object[keyName];
    }
}
DataPropertyGetterPipe.ɵfac = function DataPropertyGetterPipe_Factory(t) { return new (t || DataPropertyGetterPipe)(); };
DataPropertyGetterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dataPropertyGetter", type: DataPropertyGetterPipe, pure: true });


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/not-found/not-found.component */ 59442);
/* harmony import */ var _components_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/server-error/server-error.component */ 70195);
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/table/table.component */ 36709);
/* harmony import */ var _components_access_denial_access_denial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/access-denial/access-denial.component */ 77099);
/* harmony import */ var _components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/delete-dialog/delete-dialog.component */ 59680);
/* harmony import */ var _components_logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/logout-dialog/logout-dialog.component */ 17675);
/* harmony import */ var _components_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/uploader/uploader.component */ 31506);
/* harmony import */ var _components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/card-header/card-header.component */ 87121);
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-header/page-header.component */ 32802);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material/material.module */ 793);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/google-maps */ 3889);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @swimlane/ngx-charts */ 14142);
/* harmony import */ var _pipes_data_property_getter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/data-property-getter.pipe */ 96931);
/* harmony import */ var _directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/has-permission.directive */ 95516);
/* harmony import */ var _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/has-role.directive */ 6059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);



















class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_9__.MaterialModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule,
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_17__.GoogleMapsModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_18__.NgxChartsModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_9__.MaterialModule,
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_17__.GoogleMapsModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_18__.NgxChartsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent,
        _components_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_1__.ServerErrorComponent,
        _components_table_table_component__WEBPACK_IMPORTED_MODULE_2__.TableComponent,
        _components_access_denial_access_denial_component__WEBPACK_IMPORTED_MODULE_3__.AccessDenialComponent,
        _components_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__.DeleteDialogComponent,
        _components_logout_dialog_logout_dialog_component__WEBPACK_IMPORTED_MODULE_5__.LogoutDialogComponent,
        _components_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_6__.UploaderComponent,
        _components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_7__.CardHeaderComponent,
        _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__.PageHeaderComponent,
        _pipes_data_property_getter_pipe__WEBPACK_IMPORTED_MODULE_10__.DataPropertyGetterPipe,
        _directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_11__.HasPermissionDirective,
        _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_12__.HasRoleDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_9__.MaterialModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule,
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_17__.GoogleMapsModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_18__.NgxChartsModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_9__.MaterialModule,
        _directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_11__.HasPermissionDirective,
        _directives_has_role_directive__WEBPACK_IMPORTED_MODULE_12__.HasRoleDirective,
        _components_uploader_uploader_component__WEBPACK_IMPORTED_MODULE_6__.UploaderComponent,
        _components_table_table_component__WEBPACK_IMPORTED_MODULE_2__.TableComponent,
        _components_card_header_card_header_component__WEBPACK_IMPORTED_MODULE_7__.CardHeaderComponent,
        _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__.PageHeaderComponent,
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_17__.GoogleMapsModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_18__.NgxChartsModule] }); })();


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    serverUrl: "https://localhost:5001/",
    apiUrl: "https://localhost:5001/api/"
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

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map