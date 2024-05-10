import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import {
  LineSymbol3D,
  PathSymbol3DLayer,
  TextSymbol,
  LabelSymbol3D,
  TextSymbol3DLayer,
  SimpleLineSymbol,
  SimpleMarkerSymbol,
} from '@arcgis/core/symbols';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import {
  lotStatusColor,
  lotStatusField,
  lotStatusLabel,
  lotUseArray,
  tbmStatusColor,
  tbmStatusField,
  tbmStatusLabel,
} from './StatusUniqueValues';
import CustomContent from '@arcgis/core/popup/content/CustomContent';
import PopupTemplate from '@arcgis/core/PopupTemplate';

/* Standalone table for Dates */
export const dateTable = new FeatureLayer({
  portalItem: {
    id: 'b2a118b088a44fa0a7a84acbe0844cb2',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
});

/* Station  */
var labelClass = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: '#d4ff33',
        },
        size: 15,
        halo: {
          color: 'black',
          size: 0.5,
        },
        // font: {
        //   family: 'Ubuntu Mono',
        //   //weight: "bold"
        // },
      }),
    ],
    verticalOffset: {
      screenLength: 100,
      maxWorldLength: 700,
      minWorldLength: 80,
    },

    callout: {
      type: 'line', // autocasts as new LineCallout3D()
      color: [128, 128, 128, 0.5],
      size: 0.2,
      border: {
        color: 'grey',
      },
    },
  }),
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: '$feature.Station',
    //value: "{TEXTSTRING}"
  },
});

export const stationLayer = new FeatureLayer({
  portalItem: {
    id: 'e09b9af286204939a32df019403ef438',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 6,
  title: 'SC Stations',
  labelingInfo: [labelClass],
  elevationInfo: {
    mode: 'relative-to-ground',
  },
});
stationLayer.listMode = 'hide';

/* Chainage Layer  */
var labelChainage = new LabelClass({
  labelExpressionInfo: { expression: '$feature.KmSpot' },
  symbol: {
    type: 'text',
    color: [85, 255, 0],
    haloColor: 'black',
    haloSize: 0.5,
    font: {
      size: 15,
      weight: 'bold',
    },
  },
});

var chainageRenderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    size: 5,
    color: [255, 255, 255, 0.9],
    outline: {
      width: 0.2,
      color: 'black',
    },
  }),
});

export const chainageLayer = new FeatureLayer({
  portalItem: {
    id: 'e09b9af286204939a32df019403ef438',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 2,
  title: 'Chainage',
  elevationInfo: {
    mode: 'relative-to-ground',
  },
  labelingInfo: [labelChainage],
  minScale: 150000,
  maxScale: 0,
  renderer: chainageRenderer,

  popupEnabled: false,
});

/* ROW Layer */
var prowRenderer = new SimpleRenderer({
  symbol: new SimpleLineSymbol({
    color: '#ff0000',
    width: '2px',
  }),
});

export const prowLayer = new FeatureLayer({
  url: 'https://gis.railway-sector.com/server/rest/services/SC_Alignment/FeatureServer/5',
  layerId: 5,
  title: 'PROW',
  popupEnabled: false,
  renderer: prowRenderer,
});
prowLayer.listMode = 'hide';

/* lot layer */
var lotIdLabel = new LabelClass({
  labelExpressionInfo: { expression: '$feature.LotID' },
  symbol: {
    type: 'text',
    color: 'black',
    haloColor: 'white',
    haloSize: 0.5,
    font: {
      size: 11,
      weight: 'bold',
    },
  },
});

let lotDefaultSymbol = new SimpleFillSymbol({
  color: [0, 0, 0, 0],
  style: 'solid',
  outline: {
    // autocasts as new SimpleLineSymbol()
    color: [110, 110, 110],
    width: 0.7,
  },
});

const uniqueValueInfosLotStatus = lotStatusLabel.map((status: any, index: any) => {
  return Object.assign({
    value: index + 1,
    label: status,
    symbol: new SimpleFillSymbol({
      color: lotStatusColor[index],
    }),
  });
});
let lotLayerRenderer = new UniqueValueRenderer({
  field: lotStatusField,
  defaultSymbol: lotDefaultSymbol, // autocasts as new SimpleFillSymbol()
  uniqueValueInfos: uniqueValueInfosLotStatus,
});

// Custom popup for lot layer
const endorsedStatus = ['Not Endorsed', 'Endorsed', 'NA'];

let customContentLot = new CustomContent({
  outFields: ['*'],
  creator: (event: any) => {
    // Extract AsscessDate of clicked pierAccessLayer
    const handedOverDate = event.graphic.attributes.HandedOverDate;
    const handOverArea = event.graphic.attributes.percentHandedOver;
    const statusLot = event.graphic.attributes.StatusLA;
    const landUse = event.graphic.attributes.LandUse;
    const municipal = event.graphic.attributes.Municipality;
    const barangay = event.graphic.attributes.Barangay;
    const landOwner = event.graphic.attributes.LandOwner;
    const cpNo = event.graphic.attributes.CP;
    const endorse = event.graphic.attributes.Endorsed;
    const endorsed = endorsedStatus[endorse];

    let daten: any;
    let date: any;
    if (handedOverDate) {
      daten = new Date(handedOverDate);
      const year = daten.getFullYear();
      const month = daten.getMonth() + 1;
      const day = daten.getDate();
      date = `${year}-${month}-${day}`;
    } else {
      date = 'Undefined';
    }
    // Convert numeric to date format 0
    //var daten = new Date(handedOverDate);
    //var date = dateFormat(daten, 'MM-dd-yyyy');
    //<li>Hand-Over Date: <b>${date}</b></li><br>

    return `<ul><li>Handed-Over Area: <b>${handOverArea} %</b></li><br>
      <li>Handed-Over Date: <b>${date}</b></li><br>
                <li>Status:           <b>${
                  statusLot >= 0 ? lotStatusLabel[statusLot - 1] : ''
                }</b></li><br>
                <li>Land Use:         <b>${landUse >= 1 ? lotUseArray[landUse - 1] : ''}</b></li><br>
                <li>Municipality:     <b>${municipal}</b></li><br>
                <li>Barangay:         <b>${barangay}</b></li><br>
                <li>Land Owner:       <b>${landOwner}</b>
                <li>CP:               <b>${cpNo}</b><br>
                <li>Endorsed:         <b>${endorsed}</b></li></ul>`;
  },
});

const templateLot = new PopupTemplate({
  title: 'Lot No.: <b>{LotID}</b>',
  lastEditInfoEnabled: false,
  content: [customContentLot],
});

export const lotLayer = new FeatureLayer({
  portalItem: {
    id: '99500faf0251426ea1df934a739faa6f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  labelingInfo: [lotIdLabel],
  renderer: lotLayerRenderer,
  popupTemplate: templateLot,
  title: 'Land Acquisition',
  minScale: 150000,
  maxScale: 0,
  //labelsVisible: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});

/* TBM Segment */

const tbmStatusUniqueValuesInfos = tbmStatusLabel.map((label: any, index: any) => {
  return Object.assign({
    value: index + 1,
    label: label,
    symbol: new LineSymbol3D({
      symbolLayers: [
        new PathSymbol3DLayer({
          profile: 'circle',
          material: {
            color: tbmStatusColor[index],
          },
          width: 5,
          height: 5,
          join: 'miter',
          cap: 'butt',
          anchor: 'bottom',
          profileRotation: 'all',
        }),
      ],
    }),
  });
});
export const tbmStatusRenderer = new UniqueValueRenderer({
  field: tbmStatusField,
  uniqueValueInfos: tbmStatusUniqueValuesInfos,
});

export const tbmTunnelLayer = new FeatureLayer({
  portalItem: {
    id: '54bf8ee3d409400b8799a0e279507905',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  elevationInfo: {
    mode: 'absolute-height',
    offset: -2,
  },
  hasZ: true,
  //definitionExpression: "Package = 'CP101'",
  renderer: tbmStatusRenderer,
  title: 'TBM Segment',
  popupTemplate: {
    title: 'Ring No.: <b>{RingNo}</b> (<b>{Line}</b>)',
    lastEditInfoEnabled: false,
  },
});

export const cutterHeadSpotLayer = new GraphicsLayer({
  title: 'Cutter Head Position',
});
