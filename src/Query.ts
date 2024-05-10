import { cutterHeadSpotLayer, dateTable, tbmTunnelLayer } from './layers';
import StatisticDefinition from '@arcgis/core/rest/support/StatisticDefinition';
import { view } from './Scene';
import SpatialReference from '@arcgis/core/geometry/SpatialReference';
import { IconSymbol3DLayer, PointSymbol3D } from '@arcgis/core/symbols';
import Graphic from '@arcgis/core/Graphic';
import { tbmTunnelSection } from './StatusUniqueValues';

// Updat date
export async function dateUpdate() {
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const query = dateTable.createQuery();
  query.where = "category = 'TBM Tunnel'";

  return dateTable.queryFeatures(query).then((response: any) => {
    const stats = response.features;
    const dates = stats.map((result: any) => {
      const date = new Date(result.attributes.date);
      const year = date.getFullYear();
      const month = monthList[date.getMonth()];
      const day = date.getDate();
      const final = year < 1990 ? '' : `${month} ${day}, ${year}`;
      return final;
    });
    return dates;
  });
}

export async function generateTbmTunnelData(section: any) {
  var total_segment_number = new StatisticDefinition({
    onStatisticField: 'Line',
    outStatisticFieldName: 'total_segment_number',
    statisticType: 'count',
  });

  var total_segment_comp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_segment_comp',
    statisticType: 'sum',
  });

  // Query
  var query = tbmTunnelLayer.createQuery();
  query.outStatistics = [total_segment_comp, total_segment_number];

  const qNB = "Line = '" + 'NB' + "'";
  const qSB = "Line = '" + 'SB' + "'";

  // Query
  if (section === tbmTunnelSection[0]) {
    query.where = '1=1';
    tbmTunnelLayer.definitionExpression = '1=1';
  } else if (section === tbmTunnelSection[1]) {
    // eslint-disable-next-line no-useless-concat
    query.where = qNB;
    tbmTunnelLayer.definitionExpression = qNB;
  } else if (section === tbmTunnelSection[2]) {
    // eslint-disable-next-line no-useless-concat
    query.where = qSB;
    tbmTunnelLayer.definitionExpression = qSB;
  }

  // zoom to layer
  zoomToLayer(tbmTunnelLayer);

  return tbmTunnelLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const total = stats.total_segment_number;
    const complete = stats.total_segment_comp;
    const pComp = (complete / total) * 100;

    return [total, complete, pComp];
  });
}

export async function cutterHeadPositionData() {
  var query = tbmTunnelLayer.createQuery();
  query.where = 'tbmSpot = 1';
  query.groupByFieldsForStatistics = ['Line'];

  return tbmTunnelLayer.queryFeatures(query).then((response: any) => {
    const stats = response.features;
    const lines = stats.map((stat: any, index: any) => {
      const result = stat.attributes;
      const segment_no = result.RingNo;
      const tbm_section = result.Line;
      return [segment_no, tbm_section];
    });

    return lines;
  });
}

const spatialReference = SpatialReference.WebMercator;
export async function tbmCutterHeadSpotData(section: any) {
  cutterHeadSpotLayer.removeAll();
  var query = tbmTunnelLayer.createQuery();
  query.returnGeometry = true;
  query.groupByFieldsForStatistics = ['Line'];

  const tbmSpot = 'tbmSpot = 1';
  // eslint-disable-next-line no-useless-concat

  // Query
  if (section === tbmTunnelSection[0]) {
    query.where = tbmSpot;
  } else if (section === tbmTunnelSection[1]) {
    query.where = "Line = 'NB'" + ' AND ' + tbmSpot;
  } else if (section === tbmTunnelSection[2]) {
    query.where = "Line = 'SB'" + ' AND ' + tbmSpot;
  }

  return tbmTunnelLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    stats.forEach((result: any, index: any) => {
      const vertex = result.geometry.paths[0];
      console.log(vertex);
      const long = (vertex[0][0] + vertex[1][0]) / 2;
      const lat = (vertex[0][1] + vertex[1][1]) / 2;

      const point = {
        spatialReference: spatialReference,
        type: 'point',
        x: long,
        y: lat,
        z: -10,
      };

      const symbol = new PointSymbol3D({
        symbolLayers: [
          new IconSymbol3DLayer({
            resource: {
              href: 'https://EijiGorilla.github.io/Symbols/TBM_LOGO2.png',
            },
            size: 30,
          }),
        ],
        verticalOffset: {
          screenLength: 100,
          maxWorldLength: 500,
          minWorldLength: 40,
        },
        callout: {
          type: 'line',
          size: 1.5,
          color: '#E83618',
          border: {
            color: '#E83618',
          },
        },
        // maxScale: 1000,
        // minScale: 25000000,
      });

      const myGraphic = new Graphic({
        geometry: point,
        symbol: symbol,
      });
      return cutterHeadSpotLayer.add(myGraphic);
    });
  });
}

export async function timeSeriesChartData(section: any) {
  var total_segment_comp = new StatisticDefinition({
    onStatisticField: 'CASE WHEN Status = 3 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_segment_comp',
    statisticType: 'sum',
  });

  var query = tbmTunnelLayer.createQuery();

  const qNoEndDate = 'endDate IS NOT NULL';
  // eslint-disable-next-line no-useless-concat

  // Query

  if (section === tbmTunnelSection[0]) {
    query.where = qNoEndDate;
  } else if (section === tbmTunnelSection[1]) {
    query.where = "Line = 'NB'" + ' AND ' + qNoEndDate;
  } else if (section === tbmTunnelSection[2]) {
    query.where = "Line = 'SB'" + ' AND ' + qNoEndDate;
  }

  query.outStatistics = [total_segment_comp];
  query.outFields = ['endDate'];
  query.orderByFields = ['endDate'];
  query.groupByFieldsForStatistics = ['endDate'];

  return tbmTunnelLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;

    // collect all dates for each viaduct type
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const date = attributes.endDate;
      const value = attributes.total_segment_comp;

      // compile in object
      return Object.assign(
        {},
        {
          date: date,
          value: value,
        },
      );
    });
    return data;
  });
}

// Thousand separators function
export function thousands_separators(num: any) {
  if (num) {
    var num_parts = num.toString().split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return num_parts.join('.');
  }
}

export function zoomToLayer(layer: any) {
  return layer.queryExtent().then((response: any) => {
    view
      .goTo(response.extent, {
        //response.extent
        speedFactor: 2,
      })
      .catch(function (error) {
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      });
  });
}
