import { AggGroupNames } from '../../../src/plugins/data/public';
import { Schemas } from '../../../src/plugins/vis_default_editor/public';
import { getSimpleVisController } from './vis_controller';

export function simpleVisTypeDefinition(core, context) {
    return {
        name: 'simple-view',
        title:  'simple view',
        icon: 'simpleView',
        description: 'Blah blah',
        visualization: getSimpleVisController(core, context),
        visConfig: {
          defaults: {},
        },
        editorConfig: {
          schemas: new Schemas([
            {
              group: AggGroupNames.Metrics,
              name: 'metric',
              title: 'Metric',
              aggFilter: ['!derivative','!geo_centroid'],
              min: 1,
              defaults: [{ type: 'count', schema: 'metric' }]
            },
            {
              group: AggGroupNames.Buckets,
              name: 'segment',
              title:  'Bucket Split',
              min: 1,
              aggFilter: ['!geohash_grid','!filter']
            },
          ])
        },
        // requestHandler: enhancedTableRequestHandler,
        // responseHandler: enhancedTableResponseHandler,
        // hierarchicalData: (vis) => {
        //   return Boolean(vis.params.showPartialRows || vis.params.showMetricsAtAllLevels);
        // }
      };
}