import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LayerList from '@arcgis/core/widgets/LayerList';
import Search from '@arcgis/core/widgets/Search';
import Expand from '@arcgis/core/widgets/Expand';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import Locate from '@arcgis/core/widgets/Locate.js';
import {
  lotLayer,
  chainageLayer,
  stationLayer,
  prowLayer,
  tbmTunnelLayer,
  cutterHeadSpotLayer,
} from './layers';
// import { highlightLot } from './Query';
import Zoom from '@arcgis/core/widgets/Zoom';
import Measurement from '@arcgis/core/widgets/Measurement';
import Compass from '@arcgis/core/widgets/Compass';

export const map = new Map({
  basemap: 'dark-gray-vector', // "streets-night-vector", basemap
  ground: 'world-elevation',
});

// Change the layer order by using index numbers in map.add
map.add(chainageLayer);
map.add(lotLayer);
map.add(prowLayer);
map.add(stationLayer);
map.add(tbmTunnelLayer);
map.add(cutterHeadSpotLayer);

export const view = new SceneView({
  container: undefined,
  map,
  viewingMode: 'local',
  camera: {
    position: {
      x: 121.0226965,
      y: 14.5283429,
      z: 1000,
    },
    tilt: 10,
  },
  environment: {
    background: {
      type: 'color', // autocasts as new ColorBackground()
      color: [0, 0, 0, 1],
    },
    // disable stars
    starsEnabled: false,
    //disable atmosphere
    atmosphereEnabled: false,
  },
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

// highlight super urgent
export const layerList = new LayerList({
  view: view,
  selectionMode: 'multiple',
  visibilityAppearance: 'checkbox',
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type !== 'group') {
      item.panel = {
        content: 'legend',
        open: true,
      };
    }
    item.title === 'Chainage' || item.title === 'Land Acquisition'
      ? (item.visible = false)
      : (item.visible = true);
  },
});

const sources = [
  {
    layer: lotLayer,
    searchFields: ['LotID'],
    displayField: 'LotID',
    exactMatch: false,
    outFields: ['LotID'],
    name: 'Lot ID',
    placeholder: 'example: 10083',
  },
  {
    layer: chainageLayer,
    searchFields: ['KmSpot'],
    displayField: 'KmSpot',
    exactMatch: false,
    outFields: ['*'],
    name: 'Main KM',
    placeholder: 'example: 80+400',
  },
];

const searchWidget = new Search({
  view: view,
  locationEnabled: false,
  allPlaceholder: 'LotID, StructureID, Chainage',
  includeDefaultSources: false,
  container: undefined,
  sources: sources,
});

// const locateBtn = new Locate({
//   view,
//   // container: undefined,
// });
// view.ui.add(locateBtn, { position: 'top-right' });

const zoom = new Zoom({
  view,
});
view.ui.add(zoom, { position: 'bottom-right' });

// Measurement Tool
export const measurement = new Measurement({
  view: view,
  activeTool: undefined,
  container: undefined,
});

const searchExpand = new Expand({
  view: view,
  content: searchWidget,
  expandIconClass: 'esri-icon-search',
  group: 'top-right',
});
view.ui.add(searchExpand, {
  position: 'top-right',
});

// Compass
export const compass = new Compass({
  view: view,
});
