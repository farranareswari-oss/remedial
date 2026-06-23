var wms_layers = [];

var format_BatasAdministrasiKecamatan_0 = new ol.format.GeoJSON();
var features_BatasAdministrasiKecamatan_0 = format_BatasAdministrasiKecamatan_0.readFeatures(json_BatasAdministrasiKecamatan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKecamatan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKecamatan_0.addFeatures(features_BatasAdministrasiKecamatan_0);
var lyr_BatasAdministrasiKecamatan_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKecamatan_0, 
                style: style_BatasAdministrasiKecamatan_0,
                popuplayertitle: 'Batas Administrasi Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasiKecamatan_0.png" /> Batas Administrasi Kecamatan'
            });
var format_convexhull5000m_1 = new ol.format.GeoJSON();
var features_convexhull5000m_1 = format_convexhull5000m_1.readFeatures(json_convexhull5000m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_convexhull5000m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_convexhull5000m_1.addFeatures(features_convexhull5000m_1);
var lyr_convexhull5000m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_convexhull5000m_1, 
                style: style_convexhull5000m_1,
                popuplayertitle: 'convex hull 5000m',
                interactive: true,
                title: '<img src="styles/legend/convexhull5000m_1.png" /> convex hull 5000m'
            });
var format_convexhull300m_2 = new ol.format.GeoJSON();
var features_convexhull300m_2 = format_convexhull300m_2.readFeatures(json_convexhull300m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_convexhull300m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_convexhull300m_2.addFeatures(features_convexhull300m_2);
var lyr_convexhull300m_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_convexhull300m_2, 
                style: style_convexhull300m_2,
                popuplayertitle: 'convex hull 300m',
                interactive: true,
                title: '<img src="styles/legend/convexhull300m_2.png" /> convex hull 300m'
            });
var format_JaringanJalan_3 = new ol.format.GeoJSON();
var features_JaringanJalan_3 = format_JaringanJalan_3.readFeatures(json_JaringanJalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_3.addFeatures(features_JaringanJalan_3);
var lyr_JaringanJalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_3, 
                style: style_JaringanJalan_3,
                popuplayertitle: 'Jaringan Jalan',
                interactive: true,
                title: '<img src="styles/legend/JaringanJalan_3.png" /> Jaringan Jalan'
            });
var format_Pemukiman_4 = new ol.format.GeoJSON();
var features_Pemukiman_4 = format_Pemukiman_4.readFeatures(json_Pemukiman_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_4.addFeatures(features_Pemukiman_4);
var lyr_Pemukiman_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_4, 
                style: style_Pemukiman_4,
                popuplayertitle: 'Pemukiman',
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_4.png" /> Pemukiman'
            });
var format_RUMAHSAKITMURUNGRAYA_5 = new ol.format.GeoJSON();
var features_RUMAHSAKITMURUNGRAYA_5 = format_RUMAHSAKITMURUNGRAYA_5.readFeatures(json_RUMAHSAKITMURUNGRAYA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKITMURUNGRAYA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKITMURUNGRAYA_5.addFeatures(features_RUMAHSAKITMURUNGRAYA_5);
var lyr_RUMAHSAKITMURUNGRAYA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKITMURUNGRAYA_5, 
                style: style_RUMAHSAKITMURUNGRAYA_5,
                popuplayertitle: 'RUMAH SAKIT MURUNG RAYA',
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKITMURUNGRAYA_5.png" /> RUMAH SAKIT MURUNG RAYA'
            });
var format_PUSKESMASMURUNGRAYA_6 = new ol.format.GeoJSON();
var features_PUSKESMASMURUNGRAYA_6 = format_PUSKESMASMURUNGRAYA_6.readFeatures(json_PUSKESMASMURUNGRAYA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PUSKESMASMURUNGRAYA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUSKESMASMURUNGRAYA_6.addFeatures(features_PUSKESMASMURUNGRAYA_6);
var lyr_PUSKESMASMURUNGRAYA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUSKESMASMURUNGRAYA_6, 
                style: style_PUSKESMASMURUNGRAYA_6,
                popuplayertitle: 'PUSKESMAS MURUNG RAYA',
                interactive: true,
                title: '<img src="styles/legend/PUSKESMASMURUNGRAYA_6.png" /> PUSKESMAS MURUNG RAYA'
            });
var format_ServisArea3000mkepuskesmas_7 = new ol.format.GeoJSON();
var features_ServisArea3000mkepuskesmas_7 = format_ServisArea3000mkepuskesmas_7.readFeatures(json_ServisArea3000mkepuskesmas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServisArea3000mkepuskesmas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServisArea3000mkepuskesmas_7.addFeatures(features_ServisArea3000mkepuskesmas_7);
var lyr_ServisArea3000mkepuskesmas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServisArea3000mkepuskesmas_7, 
                style: style_ServisArea3000mkepuskesmas_7,
                popuplayertitle: 'Servis Area 3000m ke puskesmas',
                interactive: true,
                title: '<img src="styles/legend/ServisArea3000mkepuskesmas_7.png" /> Servis Area 3000m ke puskesmas'
            });
var format_ServisArea5000mkepuskesmas_8 = new ol.format.GeoJSON();
var features_ServisArea5000mkepuskesmas_8 = format_ServisArea5000mkepuskesmas_8.readFeatures(json_ServisArea5000mkepuskesmas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServisArea5000mkepuskesmas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServisArea5000mkepuskesmas_8.addFeatures(features_ServisArea5000mkepuskesmas_8);
var lyr_ServisArea5000mkepuskesmas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServisArea5000mkepuskesmas_8, 
                style: style_ServisArea5000mkepuskesmas_8,
                popuplayertitle: 'Servis Area 5000m ke puskesmas',
                interactive: true,
                title: '<img src="styles/legend/ServisArea5000mkepuskesmas_8.png" /> Servis Area 5000m ke puskesmas'
            });
var format_OutputODMatrik_9 = new ol.format.GeoJSON();
var features_OutputODMatrik_9 = format_OutputODMatrik_9.readFeatures(json_OutputODMatrik_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OutputODMatrik_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OutputODMatrik_9.addFeatures(features_OutputODMatrik_9);
var lyr_OutputODMatrik_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OutputODMatrik_9, 
                style: style_OutputODMatrik_9,
                popuplayertitle: 'Output OD Matrik',
                interactive: true,
    title: 'Output OD Matrik<br />\
    <img src="styles/legend/OutputODMatrik_9_0.png" /> 0 - 0<br />\
    <img src="styles/legend/OutputODMatrik_9_1.png" /> 0 - 1664<br />\
    <img src="styles/legend/OutputODMatrik_9_2.png" /> 1664 - 8643<br />\
    <img src="styles/legend/OutputODMatrik_9_3.png" /> 8643 - 17937<br />\
    <img src="styles/legend/OutputODMatrik_9_4.png" /> 17937 - 88910<br />' });

lyr_BatasAdministrasiKecamatan_0.setVisible(true);lyr_convexhull5000m_1.setVisible(true);lyr_convexhull300m_2.setVisible(true);lyr_JaringanJalan_3.setVisible(true);lyr_Pemukiman_4.setVisible(true);lyr_RUMAHSAKITMURUNGRAYA_5.setVisible(true);lyr_PUSKESMASMURUNGRAYA_6.setVisible(true);lyr_ServisArea3000mkepuskesmas_7.setVisible(true);lyr_ServisArea5000mkepuskesmas_8.setVisible(true);lyr_OutputODMatrik_9.setVisible(true);
var layersList = [lyr_BatasAdministrasiKecamatan_0,lyr_convexhull5000m_1,lyr_convexhull300m_2,lyr_JaringanJalan_3,lyr_Pemukiman_4,lyr_RUMAHSAKITMURUNGRAYA_5,lyr_PUSKESMASMURUNGRAYA_6,lyr_ServisArea3000mkepuskesmas_7,lyr_ServisArea5000mkepuskesmas_8,lyr_OutputODMatrik_9];
lyr_BatasAdministrasiKecamatan_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_convexhull5000m_1.set('fieldAliases', {'No_': 'No_', 'Nama_Puske': 'Nama_Puske', 'X': 'X', 'Y': 'Y', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'type': 'type', 'start': 'start', 'area': 'area', 'perimeter': 'perimeter', });
lyr_convexhull300m_2.set('fieldAliases', {'No_': 'No_', 'Nama_Puske': 'Nama_Puske', 'X': 'X', 'Y': 'Y', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'type': 'type', 'start': 'start', 'area': 'area', 'perimeter': 'perimeter', });
lyr_JaringanJalan_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Pemukiman_4.set('fieldAliases', {'fid': 'fid', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RUMAHSAKITMURUNGRAYA_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'JPLYRS': 'JPLYRS', 'RSALAMAT': 'RSALAMAT', 'TIPRST': 'TIPRST', 'FOTO': 'FOTO', });
lyr_PUSKESMASMURUNGRAYA_6.set('fieldAliases', {'No_': 'No_', 'Nama_Puske': 'Nama_Puske', 'X': 'X', 'Y': 'Y', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'FOTO': 'FOTO', });
lyr_ServisArea3000mkepuskesmas_7.set('fieldAliases', {'No_': 'No_', 'Nama_Puske': 'Nama_Puske', 'X': 'X', 'Y': 'Y', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'type': 'type', 'start': 'start', });
lyr_ServisArea5000mkepuskesmas_8.set('fieldAliases', {'No_': 'No_', 'Nama_Puske': 'Nama_Puske', 'X': 'X', 'Y': 'Y', 'Alamat': 'Alamat', 'Kecamatan': 'Kecamatan', 'type': 'type', 'start': 'start', });
lyr_OutputODMatrik_9.set('fieldAliases', {'origin_id': 'origin_id', 'destinatio': 'destinatio', 'entry_cost': 'entry_cost', 'network_co': 'network_co', 'exit_cost': 'exit_cost', 'total_cost': 'total_cost', });
lyr_BatasAdministrasiKecamatan_0.set('fieldImages', {'WADMKC': '', 'WADMKK': '', 'WADMPR': '', });
lyr_convexhull5000m_1.set('fieldImages', {'No_': '', 'Nama_Puske': '', 'X': '', 'Y': '', 'Alamat': '', 'Kecamatan': '', 'type': '', 'start': '', 'area': '', 'perimeter': '', });
lyr_convexhull300m_2.set('fieldImages', {'No_': '', 'Nama_Puske': '', 'X': '', 'Y': '', 'Alamat': '', 'Kecamatan': '', 'type': '', 'start': '', 'area': '', 'perimeter': '', });
lyr_JaringanJalan_3.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'ARHRJL': '', 'AUTRJL': '', 'FGSRJL': '', 'JARRJL': '', 'JPARJL': '', 'KLLRJL': '', 'KONRJL': '', 'KPMSTR': '', 'LKONOF': '', 'LKSBSP': '', 'LKSRTA': '', 'LLHRRT': '', 'LOCRJL': '', 'LBRBHJ': '', 'LBRJLN': '', 'MATRJL': '', 'MEDRJL': '', 'SPCRJL': '', 'STARJL': '', 'TOLRJL': '', 'UTKRJL': '', 'VLCPRT': '', 'WLYRJL': '', 'TGL_SK': '', 'JLNLYG': '', 'KLSRJL': '', 'SHAPE_Leng': '', });
lyr_Pemukiman_4.set('fieldImages', {'fid': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_RUMAHSAKITMURUNGRAYA_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'JPLYRS': 'TextEdit', 'RSALAMAT': 'TextEdit', 'TIPRST': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_PUSKESMASMURUNGRAYA_6.set('fieldImages', {'No_': 'TextEdit', 'Nama_Puske': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Alamat': 'TextEdit', 'Kecamatan': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_ServisArea3000mkepuskesmas_7.set('fieldImages', {'No_': '', 'Nama_Puske': '', 'X': '', 'Y': '', 'Alamat': '', 'Kecamatan': '', 'type': '', 'start': '', });
lyr_ServisArea5000mkepuskesmas_8.set('fieldImages', {'No_': '', 'Nama_Puske': '', 'X': '', 'Y': '', 'Alamat': '', 'Kecamatan': '', 'type': '', 'start': '', });
lyr_OutputODMatrik_9.set('fieldImages', {'origin_id': 'TextEdit', 'destinatio': '', 'entry_cost': 'TextEdit', 'network_co': '', 'exit_cost': 'TextEdit', 'total_cost': 'TextEdit', });
lyr_BatasAdministrasiKecamatan_0.set('fieldLabels', {'WADMKC': 'no label', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'no label', });
lyr_convexhull5000m_1.set('fieldLabels', {'No_': 'no label', 'Nama_Puske': 'no label', 'X': 'no label', 'Y': 'no label', 'Alamat': 'no label', 'Kecamatan': 'inline label - visible with data', 'type': 'no label', 'start': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_convexhull300m_2.set('fieldLabels', {'No_': 'no label', 'Nama_Puske': 'no label', 'X': 'no label', 'Y': 'no label', 'Alamat': 'no label', 'Kecamatan': 'inline label - visible with data', 'type': 'no label', 'start': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_JaringanJalan_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Pemukiman_4.set('fieldLabels', {'fid': 'no label', 'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_RUMAHSAKITMURUNGRAYA_5.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'JPLYRS': 'no label', 'RSALAMAT': 'no label', 'TIPRST': 'no label', 'FOTO': 'inline label - visible with data', });
lyr_PUSKESMASMURUNGRAYA_6.set('fieldLabels', {'No_': 'no label', 'Nama_Puske': 'inline label - visible with data', 'X': 'no label', 'Y': 'no label', 'Alamat': 'no label', 'Kecamatan': 'inline label - visible with data', 'FOTO': 'inline label - visible with data', });
lyr_ServisArea3000mkepuskesmas_7.set('fieldLabels', {'No_': 'no label', 'Nama_Puske': 'no label', 'X': 'no label', 'Y': 'no label', 'Alamat': 'no label', 'Kecamatan': 'inline label - visible with data', 'type': 'no label', 'start': 'no label', });
lyr_ServisArea5000mkepuskesmas_8.set('fieldLabels', {'No_': 'no label', 'Nama_Puske': 'no label', 'X': 'no label', 'Y': 'no label', 'Alamat': 'no label', 'Kecamatan': 'inline label - visible with data', 'type': 'no label', 'start': 'no label', });
lyr_OutputODMatrik_9.set('fieldLabels', {'origin_id': 'no label', 'destinatio': 'no label', 'entry_cost': 'no label', 'network_co': 'no label', 'exit_cost': 'no label', 'total_cost': 'inline label - always visible', });
lyr_OutputODMatrik_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});