import { PluginInitializerContext, CoreSetup, CoreStart, Plugin } from '../../../src/core/public';
import { VisualizationsSetup } from '../../../src/plugins/visualizations/public';

import { simpleVisTypeDefinition } from './simple-vis';


// import { documentTableVisTypeDefinition } from './document-table-vis';
// import { DataPublicPluginStart } from '../../../src/plugins/data/public';
// import { setFormatService, setKibanaLegacy, setNotifications, setQueryService, setSearchService } from './services';
// import { KibanaLegacyStart } from '../../../src/plugins/kibana_legacy/public';



export interface TablePluginSetupDependencies {
  visualizations: VisualizationsSetup;
}

export class SimpleVisPlugin implements Plugin<Promise<void>, void> {
  initializerContext: PluginInitializerContext;
  createBaseVisualization: any;

  constructor(initializerContext: PluginInitializerContext) {
    this.initializerContext = initializerContext;
  }

  public async setup(
    core: CoreSetup,
    { visualizations }: TablePluginSetupDependencies
  ) {
    visualizations.createBaseVisualization(
      simpleVisTypeDefinition(core, this.initializerContext)
    );
  }

}