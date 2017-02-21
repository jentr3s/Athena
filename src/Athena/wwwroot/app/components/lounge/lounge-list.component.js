System.register(["@angular/core","@angular/router","../../services/app.service"],function(exports_1,context_1){"use strict";var core_1,router_1,app_service_1,LoungeListComponent,__decorate=(context_1&&context_1.id,this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r}),__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};return{setters:[function(core_1_1){core_1=core_1_1},function(router_1_1){router_1=router_1_1},function(app_service_1_1){app_service_1=app_service_1_1}],execute:function(){LoungeListComponent=function(){function LoungeListComponent(AppService,router){this.AppService=AppService,this.router=router}return LoungeListComponent.prototype.ngOnInit=function(){var _this=this;this.title="The Lounge";var service=this.AppService.getLatestDiscussion();service.subscribe(function(items){return _this.items=items},function(error){return _this.errorMessage=error})},LoungeListComponent.prototype.onSelect=function(item){this.selectedItem=item;var link=["/lounge",this.selectedItem.ID];this.router.navigate(link)},LoungeListComponent=__decorate([core_1.Component({selector:"lounge-list",template:'\n           <h2>{{title}}</h2>\n            <ul class="items">\n                <li *ngFor="let item of items" \n                    [class.selected]="item === selectedItem"\n                    (click)="onSelect(item)">\n                    <span>{{item.Subject}}</span>\n                </li>\n            </ul>\n    ',styles:["\n        ul.items li { \n            cursor: pointer;\n        }\n        ul.items li:hover { \n            background-color: #E8FAEC; \n        }\n    "]}),__metadata("design:paramtypes",[app_service_1.AppService,router_1.Router])],LoungeListComponent)}(),exports_1("LoungeListComponent",LoungeListComponent)}}});
//# sourceMappingURL=lounge-list.component.js.map
