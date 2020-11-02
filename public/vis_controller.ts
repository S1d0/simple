import { CoreSetup, PluginInitializerContext } from 'kibana/public';
import angular, { IModule, auto, IRootScopeService, IScope, ICompileService } from 'angular';
import { VisParams, ExprVis } from '../../../src/plugins/visualizations/public';
import $ from 'jquery';

import { getAngularModule } from './get_inner_angular';
import { getKibanaLegacy } from './services';
import { initTableVisLegacyModule } from './table_vis_legacy_module';


const innerAngularName = 'kibana/enhanced_table_vis';


export function getSimpleVisController(
    core: CoreSetup,
    context: PluginInitializerContext
) {
 
    return class SimpleVisualizationController {
        private tableVisModule: IModule | undefined;
        private injector: auto.IInjectorService | undefined;
        el: JQuery<Element>;
        vis: ExprVis;
        $rootScope: IRootScopeService | null = null;
        $scope: (IScope & { [key: string]: any }) | undefined;
        $compile: ICompileService | undefined;
        
        // testing
        container: any;

    
        constructor(domeElement: Element, vis: ExprVis) {
          this.el = $(domeElement);
          this.vis = vis;

          this.container = document.createElement('div');
          
        }

        async render(esResponse: object, visParams: VisParams) {
          const helloDiv = document.createElement('div');
          helloDiv.innerHTML ='Hello World';
          this.container.appendChild(helloDiv);        

          this.el.appendChild(this.container);
          
          return new Promise(resolve => {
            resolve('when done rendering')
          });
        }
    };
}
