var wms_layers = [];


        var lyr_Mappa_web_Fra_0 = new ol.layer.Tile({
            'title': 'Mappa_web_Fra',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
            })
        });
var format_79_Domenica_21_50_05_26shp_1 = new ol.format.GeoJSON();
var features_79_Domenica_21_50_05_26shp_1 = format_79_Domenica_21_50_05_26shp_1.readFeatures(json_79_Domenica_21_50_05_26shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Domenica_21_50_05_26shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Domenica_21_50_05_26shp_1.addFeatures(features_79_Domenica_21_50_05_26shp_1);
var lyr_79_Domenica_21_50_05_26shp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Domenica_21_50_05_26shp_1, 
                style: style_79_Domenica_21_50_05_26shp_1,
                popuplayertitle: '79_Domenica_21_50_05_26.shp',
                interactive: true,
    title: '79_Domenica_21_50_05_26.shp<br />\
    <img src="styles/legend/79_Domenica_21_50_05_26shp_1_0.png" /> 1<br />\
    <img src="styles/legend/79_Domenica_21_50_05_26shp_1_1.png" /> 2<br />' });
var format_77_Domenica_21_50_05_26shp_2 = new ol.format.GeoJSON();
var features_77_Domenica_21_50_05_26shp_2 = format_77_Domenica_21_50_05_26shp_2.readFeatures(json_77_Domenica_21_50_05_26shp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Domenica_21_50_05_26shp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Domenica_21_50_05_26shp_2.addFeatures(features_77_Domenica_21_50_05_26shp_2);
var lyr_77_Domenica_21_50_05_26shp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Domenica_21_50_05_26shp_2, 
                style: style_77_Domenica_21_50_05_26shp_2,
                popuplayertitle: '77_Domenica_21_50_05_26.shp',
                interactive: true,
    title: '77_Domenica_21_50_05_26.shp<br />\
    <img src="styles/legend/77_Domenica_21_50_05_26shp_2_0.png" /> 1<br />\
    <img src="styles/legend/77_Domenica_21_50_05_26shp_2_1.png" /> 2<br />\
    <img src="styles/legend/77_Domenica_21_50_05_26shp_2_2.png" /> 3<br />\
    <img src="styles/legend/77_Domenica_21_50_05_26shp_2_3.png" /> 4<br />\
    <img src="styles/legend/77_Domenica_21_50_05_26shp_2_4.png" /> 5<br />\
    <img src="styles/legend/77_Domenica_21_50_05_26shp_2_5.png" /> 6<br />\
    <img src="styles/legend/77_Domenica_21_50_05_26shp_2_6.png" /> 7<br />\
    <img src="styles/legend/77_Domenica_21_50_05_26shp_2_7.png" /> 8<br />' });
var format_76_Domenica_19_00_02_36shp_3 = new ol.format.GeoJSON();
var features_76_Domenica_19_00_02_36shp_3 = format_76_Domenica_19_00_02_36shp_3.readFeatures(json_76_Domenica_19_00_02_36shp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Domenica_19_00_02_36shp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Domenica_19_00_02_36shp_3.addFeatures(features_76_Domenica_19_00_02_36shp_3);
var lyr_76_Domenica_19_00_02_36shp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Domenica_19_00_02_36shp_3, 
                style: style_76_Domenica_19_00_02_36shp_3,
                popuplayertitle: '76_Domenica_19_00_02_36.shp',
                interactive: true,
    title: '76_Domenica_19_00_02_36.shp<br />\
    <img src="styles/legend/76_Domenica_19_00_02_36shp_3_0.png" /> 1<br />' });
var format_75_Domenica_13_07_20_43shp_4 = new ol.format.GeoJSON();
var features_75_Domenica_13_07_20_43shp_4 = format_75_Domenica_13_07_20_43shp_4.readFeatures(json_75_Domenica_13_07_20_43shp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Domenica_13_07_20_43shp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Domenica_13_07_20_43shp_4.addFeatures(features_75_Domenica_13_07_20_43shp_4);
var lyr_75_Domenica_13_07_20_43shp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Domenica_13_07_20_43shp_4, 
                style: style_75_Domenica_13_07_20_43shp_4,
                popuplayertitle: '75_Domenica_13_07_20_43.shp',
                interactive: true,
    title: '75_Domenica_13_07_20_43.shp<br />\
    <img src="styles/legend/75_Domenica_13_07_20_43shp_4_0.png" /> 1<br />\
    <img src="styles/legend/75_Domenica_13_07_20_43shp_4_1.png" /> 2<br />\
    <img src="styles/legend/75_Domenica_13_07_20_43shp_4_2.png" /> 3<br />\
    <img src="styles/legend/75_Domenica_13_07_20_43shp_4_3.png" /> 4<br />' });
var format_73_Domenica_05_30_13_06shp_5 = new ol.format.GeoJSON();
var features_73_Domenica_05_30_13_06shp_5 = format_73_Domenica_05_30_13_06shp_5.readFeatures(json_73_Domenica_05_30_13_06shp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Domenica_05_30_13_06shp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Domenica_05_30_13_06shp_5.addFeatures(features_73_Domenica_05_30_13_06shp_5);
var lyr_73_Domenica_05_30_13_06shp_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Domenica_05_30_13_06shp_5, 
                style: style_73_Domenica_05_30_13_06shp_5,
                popuplayertitle: '73_Domenica_05_30_13_06.shp',
                interactive: true,
    title: '73_Domenica_05_30_13_06.shp<br />\
    <img src="styles/legend/73_Domenica_05_30_13_06shp_5_0.png" /> 1<br />\
    <img src="styles/legend/73_Domenica_05_30_13_06shp_5_1.png" /> 2<br />\
    <img src="styles/legend/73_Domenica_05_30_13_06shp_5_2.png" /> 3<br />' });
var format_72_Domenica_13_07_20_43shp_6 = new ol.format.GeoJSON();
var features_72_Domenica_13_07_20_43shp_6 = format_72_Domenica_13_07_20_43shp_6.readFeatures(json_72_Domenica_13_07_20_43shp_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Domenica_13_07_20_43shp_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Domenica_13_07_20_43shp_6.addFeatures(features_72_Domenica_13_07_20_43shp_6);
var lyr_72_Domenica_13_07_20_43shp_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Domenica_13_07_20_43shp_6, 
                style: style_72_Domenica_13_07_20_43shp_6,
                popuplayertitle: '72_Domenica_13_07_20_43.shp',
                interactive: true,
    title: '72_Domenica_13_07_20_43.shp<br />\
    <img src="styles/legend/72_Domenica_13_07_20_43shp_6_0.png" /> 1<br />' });
var format_71_Domenica_05_30_13_06shp_7 = new ol.format.GeoJSON();
var features_71_Domenica_05_30_13_06shp_7 = format_71_Domenica_05_30_13_06shp_7.readFeatures(json_71_Domenica_05_30_13_06shp_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Domenica_05_30_13_06shp_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Domenica_05_30_13_06shp_7.addFeatures(features_71_Domenica_05_30_13_06shp_7);
var lyr_71_Domenica_05_30_13_06shp_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Domenica_05_30_13_06shp_7, 
                style: style_71_Domenica_05_30_13_06shp_7,
                popuplayertitle: '71_Domenica_05_30_13_06.shp',
                interactive: true,
    title: '71_Domenica_05_30_13_06.shp<br />\
    <img src="styles/legend/71_Domenica_05_30_13_06shp_7_0.png" /> 1<br />' });
var format_543_Domenica_19_00_02_36shp_8 = new ol.format.GeoJSON();
var features_543_Domenica_19_00_02_36shp_8 = format_543_Domenica_19_00_02_36shp_8.readFeatures(json_543_Domenica_19_00_02_36shp_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Domenica_19_00_02_36shp_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Domenica_19_00_02_36shp_8.addFeatures(features_543_Domenica_19_00_02_36shp_8);
var lyr_543_Domenica_19_00_02_36shp_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Domenica_19_00_02_36shp_8, 
                style: style_543_Domenica_19_00_02_36shp_8,
                popuplayertitle: '543_Domenica_19_00_02_36.shp',
                interactive: true,
    title: '543_Domenica_19_00_02_36.shp<br />\
    <img src="styles/legend/543_Domenica_19_00_02_36shp_8_0.png" /> 1<br />' });
var format_542_Domenica_13_07_20_43shp_9 = new ol.format.GeoJSON();
var features_542_Domenica_13_07_20_43shp_9 = format_542_Domenica_13_07_20_43shp_9.readFeatures(json_542_Domenica_13_07_20_43shp_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Domenica_13_07_20_43shp_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Domenica_13_07_20_43shp_9.addFeatures(features_542_Domenica_13_07_20_43shp_9);
var lyr_542_Domenica_13_07_20_43shp_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Domenica_13_07_20_43shp_9, 
                style: style_542_Domenica_13_07_20_43shp_9,
                popuplayertitle: '542_Domenica_13_07_20_43.shp',
                interactive: true,
    title: '542_Domenica_13_07_20_43.shp<br />\
    <img src="styles/legend/542_Domenica_13_07_20_43shp_9_0.png" /> 1<br />\
    <img src="styles/legend/542_Domenica_13_07_20_43shp_9_1.png" /> 2<br />' });
var format_541_Domenica_05_30_13_06shp_10 = new ol.format.GeoJSON();
var features_541_Domenica_05_30_13_06shp_10 = format_541_Domenica_05_30_13_06shp_10.readFeatures(json_541_Domenica_05_30_13_06shp_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Domenica_05_30_13_06shp_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Domenica_05_30_13_06shp_10.addFeatures(features_541_Domenica_05_30_13_06shp_10);
var lyr_541_Domenica_05_30_13_06shp_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Domenica_05_30_13_06shp_10, 
                style: style_541_Domenica_05_30_13_06shp_10,
                popuplayertitle: '541_Domenica_05_30_13_06.shp',
                interactive: true,
    title: '541_Domenica_05_30_13_06.shp<br />\
    <img src="styles/legend/541_Domenica_05_30_13_06shp_10_0.png" /> 1<br />\
    <img src="styles/legend/541_Domenica_05_30_13_06shp_10_1.png" /> 2<br />\
    <img src="styles/legend/541_Domenica_05_30_13_06shp_10_2.png" /> 3<br />' });
var format_540_Domenica_21_50_05_26shp_11 = new ol.format.GeoJSON();
var features_540_Domenica_21_50_05_26shp_11 = format_540_Domenica_21_50_05_26shp_11.readFeatures(json_540_Domenica_21_50_05_26shp_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Domenica_21_50_05_26shp_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Domenica_21_50_05_26shp_11.addFeatures(features_540_Domenica_21_50_05_26shp_11);
var lyr_540_Domenica_21_50_05_26shp_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Domenica_21_50_05_26shp_11, 
                style: style_540_Domenica_21_50_05_26shp_11,
                popuplayertitle: '540_Domenica_21_50_05_26.shp',
                interactive: true,
    title: '540_Domenica_21_50_05_26.shp<br />\
    <img src="styles/legend/540_Domenica_21_50_05_26shp_11_0.png" /> 1<br />' });
var format_534_Domenica_21_50_05_26shp_12 = new ol.format.GeoJSON();
var features_534_Domenica_21_50_05_26shp_12 = format_534_Domenica_21_50_05_26shp_12.readFeatures(json_534_Domenica_21_50_05_26shp_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Domenica_21_50_05_26shp_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Domenica_21_50_05_26shp_12.addFeatures(features_534_Domenica_21_50_05_26shp_12);
var lyr_534_Domenica_21_50_05_26shp_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Domenica_21_50_05_26shp_12, 
                style: style_534_Domenica_21_50_05_26shp_12,
                popuplayertitle: '534_Domenica_21_50_05_26.shp',
                interactive: true,
    title: '534_Domenica_21_50_05_26.shp<br />\
    <img src="styles/legend/534_Domenica_21_50_05_26shp_12_0.png" /> 1<br />' });
var format_531_Domenica_05_30_13_06shp_13 = new ol.format.GeoJSON();
var features_531_Domenica_05_30_13_06shp_13 = format_531_Domenica_05_30_13_06shp_13.readFeatures(json_531_Domenica_05_30_13_06shp_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Domenica_05_30_13_06shp_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Domenica_05_30_13_06shp_13.addFeatures(features_531_Domenica_05_30_13_06shp_13);
var lyr_531_Domenica_05_30_13_06shp_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Domenica_05_30_13_06shp_13, 
                style: style_531_Domenica_05_30_13_06shp_13,
                popuplayertitle: '531_Domenica_05_30_13_06.shp',
                interactive: true,
    title: '531_Domenica_05_30_13_06.shp<br />\
    <img src="styles/legend/531_Domenica_05_30_13_06shp_13_0.png" /> 1<br />' });
var format_158_Domenica_05_30_13_06shp_14 = new ol.format.GeoJSON();
var features_158_Domenica_05_30_13_06shp_14 = format_158_Domenica_05_30_13_06shp_14.readFeatures(json_158_Domenica_05_30_13_06shp_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Domenica_05_30_13_06shp_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Domenica_05_30_13_06shp_14.addFeatures(features_158_Domenica_05_30_13_06shp_14);
var lyr_158_Domenica_05_30_13_06shp_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Domenica_05_30_13_06shp_14, 
                style: style_158_Domenica_05_30_13_06shp_14,
                popuplayertitle: '158_Domenica_05_30_13_06.shp',
                interactive: true,
    title: '158_Domenica_05_30_13_06.shp<br />\
    <img src="styles/legend/158_Domenica_05_30_13_06shp_14_0.png" /> 1<br />\
    <img src="styles/legend/158_Domenica_05_30_13_06shp_14_1.png" /> 2<br />\
    <img src="styles/legend/158_Domenica_05_30_13_06shp_14_2.png" /> 3<br />\
    <img src="styles/legend/158_Domenica_05_30_13_06shp_14_3.png" /> 4<br />\
    <img src="styles/legend/158_Domenica_05_30_13_06shp_14_4.png" /> 5<br />\
    <img src="styles/legend/158_Domenica_05_30_13_06shp_14_5.png" /> 6<br />\
    <img src="styles/legend/158_Domenica_05_30_13_06shp_14_6.png" /> 7<br />' });
var format_156_Domenica_13_07_20_43shp_15 = new ol.format.GeoJSON();
var features_156_Domenica_13_07_20_43shp_15 = format_156_Domenica_13_07_20_43shp_15.readFeatures(json_156_Domenica_13_07_20_43shp_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Domenica_13_07_20_43shp_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Domenica_13_07_20_43shp_15.addFeatures(features_156_Domenica_13_07_20_43shp_15);
var lyr_156_Domenica_13_07_20_43shp_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Domenica_13_07_20_43shp_15, 
                style: style_156_Domenica_13_07_20_43shp_15,
                popuplayertitle: '156_Domenica_13_07_20_43.shp',
                interactive: true,
    title: '156_Domenica_13_07_20_43.shp<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43shp_15_0.png" /> 1<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43shp_15_1.png" /> 2<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43shp_15_2.png" /> 3<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43shp_15_3.png" /> 4<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43shp_15_4.png" /> 5<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43shp_15_5.png" /> 6<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43shp_15_6.png" /> 7<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43shp_15_7.png" /> 8<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43shp_15_8.png" /> 9<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43shp_15_9.png" /> 10<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43shp_15_10.png" /> 11<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43shp_15_11.png" /> 12<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43shp_15_12.png" /> 13<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43shp_15_13.png" /> 14<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43shp_15_14.png" /> 15<br />' });
var format_154_Domenica_21_50_05_26shp_16 = new ol.format.GeoJSON();
var features_154_Domenica_21_50_05_26shp_16 = format_154_Domenica_21_50_05_26shp_16.readFeatures(json_154_Domenica_21_50_05_26shp_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Domenica_21_50_05_26shp_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Domenica_21_50_05_26shp_16.addFeatures(features_154_Domenica_21_50_05_26shp_16);
var lyr_154_Domenica_21_50_05_26shp_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Domenica_21_50_05_26shp_16, 
                style: style_154_Domenica_21_50_05_26shp_16,
                popuplayertitle: '154_Domenica_21_50_05_26.shp',
                interactive: true,
    title: '154_Domenica_21_50_05_26.shp<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26shp_16_0.png" /> 1<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26shp_16_1.png" /> 2<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26shp_16_2.png" /> 3<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26shp_16_3.png" /> 4<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26shp_16_4.png" /> 5<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26shp_16_5.png" /> 6<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26shp_16_6.png" /> 7<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26shp_16_7.png" /> 8<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26shp_16_8.png" /> 9<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26shp_16_9.png" /> 10<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26shp_16_10.png" /> 11<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26shp_16_11.png" /> 12<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26shp_16_12.png" /> 13<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26shp_16_13.png" /> 14<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26shp_16_14.png" /> 15<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26shp_16_15.png" /> 16<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26shp_16_16.png" /> 17<br />' });
var format_79_Sabato_21_50_05_26shp_17 = new ol.format.GeoJSON();
var features_79_Sabato_21_50_05_26shp_17 = format_79_Sabato_21_50_05_26shp_17.readFeatures(json_79_Sabato_21_50_05_26shp_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Sabato_21_50_05_26shp_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Sabato_21_50_05_26shp_17.addFeatures(features_79_Sabato_21_50_05_26shp_17);
var lyr_79_Sabato_21_50_05_26shp_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Sabato_21_50_05_26shp_17, 
                style: style_79_Sabato_21_50_05_26shp_17,
                popuplayertitle: '79_Sabato_21_50_05_26.shp',
                interactive: true,
    title: '79_Sabato_21_50_05_26.shp<br />\
    <img src="styles/legend/79_Sabato_21_50_05_26shp_17_0.png" /> 1<br />' });
var format_77_Sabato_21_50_05_26shp_18 = new ol.format.GeoJSON();
var features_77_Sabato_21_50_05_26shp_18 = format_77_Sabato_21_50_05_26shp_18.readFeatures(json_77_Sabato_21_50_05_26shp_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Sabato_21_50_05_26shp_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Sabato_21_50_05_26shp_18.addFeatures(features_77_Sabato_21_50_05_26shp_18);
var lyr_77_Sabato_21_50_05_26shp_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Sabato_21_50_05_26shp_18, 
                style: style_77_Sabato_21_50_05_26shp_18,
                popuplayertitle: '77_Sabato_21_50_05_26.shp',
                interactive: true,
    title: '77_Sabato_21_50_05_26.shp<br />\
    <img src="styles/legend/77_Sabato_21_50_05_26shp_18_0.png" /> 1<br />\
    <img src="styles/legend/77_Sabato_21_50_05_26shp_18_1.png" /> 2<br />\
    <img src="styles/legend/77_Sabato_21_50_05_26shp_18_2.png" /> 3<br />\
    <img src="styles/legend/77_Sabato_21_50_05_26shp_18_3.png" /> 4<br />\
    <img src="styles/legend/77_Sabato_21_50_05_26shp_18_4.png" /> 5<br />\
    <img src="styles/legend/77_Sabato_21_50_05_26shp_18_5.png" /> 6<br />\
    <img src="styles/legend/77_Sabato_21_50_05_26shp_18_6.png" /> 7<br />\
    <img src="styles/legend/77_Sabato_21_50_05_26shp_18_7.png" /> 8<br />' });
var format_76_Sabato_19_00_02_36shp_19 = new ol.format.GeoJSON();
var features_76_Sabato_19_00_02_36shp_19 = format_76_Sabato_19_00_02_36shp_19.readFeatures(json_76_Sabato_19_00_02_36shp_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Sabato_19_00_02_36shp_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Sabato_19_00_02_36shp_19.addFeatures(features_76_Sabato_19_00_02_36shp_19);
var lyr_76_Sabato_19_00_02_36shp_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Sabato_19_00_02_36shp_19, 
                style: style_76_Sabato_19_00_02_36shp_19,
                popuplayertitle: '76_Sabato_19_00_02_36.shp',
                interactive: true,
    title: '76_Sabato_19_00_02_36.shp<br />\
    <img src="styles/legend/76_Sabato_19_00_02_36shp_19_0.png" /> 1<br />' });
var format_75_Sabato_13_07_20_43shp_20 = new ol.format.GeoJSON();
var features_75_Sabato_13_07_20_43shp_20 = format_75_Sabato_13_07_20_43shp_20.readFeatures(json_75_Sabato_13_07_20_43shp_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Sabato_13_07_20_43shp_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Sabato_13_07_20_43shp_20.addFeatures(features_75_Sabato_13_07_20_43shp_20);
var lyr_75_Sabato_13_07_20_43shp_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Sabato_13_07_20_43shp_20, 
                style: style_75_Sabato_13_07_20_43shp_20,
                popuplayertitle: '75_Sabato_13_07_20_43.shp',
                interactive: true,
    title: '75_Sabato_13_07_20_43.shp<br />\
    <img src="styles/legend/75_Sabato_13_07_20_43shp_20_0.png" /> 1<br />\
    <img src="styles/legend/75_Sabato_13_07_20_43shp_20_1.png" /> 2<br />\
    <img src="styles/legend/75_Sabato_13_07_20_43shp_20_2.png" /> 3<br />' });
var format_73_Sabato_05_30_13_06shp_21 = new ol.format.GeoJSON();
var features_73_Sabato_05_30_13_06shp_21 = format_73_Sabato_05_30_13_06shp_21.readFeatures(json_73_Sabato_05_30_13_06shp_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Sabato_05_30_13_06shp_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Sabato_05_30_13_06shp_21.addFeatures(features_73_Sabato_05_30_13_06shp_21);
var lyr_73_Sabato_05_30_13_06shp_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Sabato_05_30_13_06shp_21, 
                style: style_73_Sabato_05_30_13_06shp_21,
                popuplayertitle: '73_Sabato_05_30_13_06.shp',
                interactive: true,
    title: '73_Sabato_05_30_13_06.shp<br />\
    <img src="styles/legend/73_Sabato_05_30_13_06shp_21_0.png" /> 1<br />\
    <img src="styles/legend/73_Sabato_05_30_13_06shp_21_1.png" /> 2<br />\
    <img src="styles/legend/73_Sabato_05_30_13_06shp_21_2.png" /> 3<br />' });
var format_72_Sabato_13_07_20_43shp_22 = new ol.format.GeoJSON();
var features_72_Sabato_13_07_20_43shp_22 = format_72_Sabato_13_07_20_43shp_22.readFeatures(json_72_Sabato_13_07_20_43shp_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Sabato_13_07_20_43shp_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Sabato_13_07_20_43shp_22.addFeatures(features_72_Sabato_13_07_20_43shp_22);
var lyr_72_Sabato_13_07_20_43shp_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Sabato_13_07_20_43shp_22, 
                style: style_72_Sabato_13_07_20_43shp_22,
                popuplayertitle: '72_Sabato_13_07_20_43.shp',
                interactive: true,
    title: '72_Sabato_13_07_20_43.shp<br />\
    <img src="styles/legend/72_Sabato_13_07_20_43shp_22_0.png" /> 1<br />' });
var format_71_Sabato_05_30_13_06shp_23 = new ol.format.GeoJSON();
var features_71_Sabato_05_30_13_06shp_23 = format_71_Sabato_05_30_13_06shp_23.readFeatures(json_71_Sabato_05_30_13_06shp_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Sabato_05_30_13_06shp_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Sabato_05_30_13_06shp_23.addFeatures(features_71_Sabato_05_30_13_06shp_23);
var lyr_71_Sabato_05_30_13_06shp_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Sabato_05_30_13_06shp_23, 
                style: style_71_Sabato_05_30_13_06shp_23,
                popuplayertitle: '71_Sabato_05_30_13_06.shp',
                interactive: true,
    title: '71_Sabato_05_30_13_06.shp<br />\
    <img src="styles/legend/71_Sabato_05_30_13_06shp_23_0.png" /> 1<br />' });
var format_70_Sabato_09_30_15_50shp_24 = new ol.format.GeoJSON();
var features_70_Sabato_09_30_15_50shp_24 = format_70_Sabato_09_30_15_50shp_24.readFeatures(json_70_Sabato_09_30_15_50shp_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Sabato_09_30_15_50shp_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Sabato_09_30_15_50shp_24.addFeatures(features_70_Sabato_09_30_15_50shp_24);
var lyr_70_Sabato_09_30_15_50shp_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Sabato_09_30_15_50shp_24, 
                style: style_70_Sabato_09_30_15_50shp_24,
                popuplayertitle: '70_Sabato_09_30_15_50.shp',
                interactive: true,
    title: '70_Sabato_09_30_15_50.shp<br />\
    <img src="styles/legend/70_Sabato_09_30_15_50shp_24_0.png" /> 1<br />' });
var format_543_Sabato_19_00_02_36shp_25 = new ol.format.GeoJSON();
var features_543_Sabato_19_00_02_36shp_25 = format_543_Sabato_19_00_02_36shp_25.readFeatures(json_543_Sabato_19_00_02_36shp_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Sabato_19_00_02_36shp_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Sabato_19_00_02_36shp_25.addFeatures(features_543_Sabato_19_00_02_36shp_25);
var lyr_543_Sabato_19_00_02_36shp_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Sabato_19_00_02_36shp_25, 
                style: style_543_Sabato_19_00_02_36shp_25,
                popuplayertitle: '543_Sabato_19_00_02_36.shp',
                interactive: true,
    title: '543_Sabato_19_00_02_36.shp<br />\
    <img src="styles/legend/543_Sabato_19_00_02_36shp_25_0.png" /> 1<br />' });
var format_542_Sabato_13_07_20_43shp_26 = new ol.format.GeoJSON();
var features_542_Sabato_13_07_20_43shp_26 = format_542_Sabato_13_07_20_43shp_26.readFeatures(json_542_Sabato_13_07_20_43shp_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Sabato_13_07_20_43shp_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Sabato_13_07_20_43shp_26.addFeatures(features_542_Sabato_13_07_20_43shp_26);
var lyr_542_Sabato_13_07_20_43shp_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Sabato_13_07_20_43shp_26, 
                style: style_542_Sabato_13_07_20_43shp_26,
                popuplayertitle: '542_Sabato_13_07_20_43.shp',
                interactive: true,
    title: '542_Sabato_13_07_20_43.shp<br />\
    <img src="styles/legend/542_Sabato_13_07_20_43shp_26_0.png" /> 1<br />\
    <img src="styles/legend/542_Sabato_13_07_20_43shp_26_1.png" /> 2<br />' });
var format_541_Sabato_05_30_13_06shp_27 = new ol.format.GeoJSON();
var features_541_Sabato_05_30_13_06shp_27 = format_541_Sabato_05_30_13_06shp_27.readFeatures(json_541_Sabato_05_30_13_06shp_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Sabato_05_30_13_06shp_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Sabato_05_30_13_06shp_27.addFeatures(features_541_Sabato_05_30_13_06shp_27);
var lyr_541_Sabato_05_30_13_06shp_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Sabato_05_30_13_06shp_27, 
                style: style_541_Sabato_05_30_13_06shp_27,
                popuplayertitle: '541_Sabato_05_30_13_06.shp',
                interactive: true,
    title: '541_Sabato_05_30_13_06.shp<br />\
    <img src="styles/legend/541_Sabato_05_30_13_06shp_27_0.png" /> 1<br />\
    <img src="styles/legend/541_Sabato_05_30_13_06shp_27_1.png" /> 2<br />\
    <img src="styles/legend/541_Sabato_05_30_13_06shp_27_2.png" /> 3<br />\
    <img src="styles/legend/541_Sabato_05_30_13_06shp_27_3.png" /> 4<br />' });
var format_540_Sabato_21_50_05_26shp_28 = new ol.format.GeoJSON();
var features_540_Sabato_21_50_05_26shp_28 = format_540_Sabato_21_50_05_26shp_28.readFeatures(json_540_Sabato_21_50_05_26shp_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Sabato_21_50_05_26shp_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Sabato_21_50_05_26shp_28.addFeatures(features_540_Sabato_21_50_05_26shp_28);
var lyr_540_Sabato_21_50_05_26shp_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Sabato_21_50_05_26shp_28, 
                style: style_540_Sabato_21_50_05_26shp_28,
                popuplayertitle: '540_Sabato_21_50_05_26.shp',
                interactive: true,
    title: '540_Sabato_21_50_05_26.shp<br />\
    <img src="styles/legend/540_Sabato_21_50_05_26shp_28_0.png" /> 1<br />' });
var format_534_Sabato_21_50_05_26shp_29 = new ol.format.GeoJSON();
var features_534_Sabato_21_50_05_26shp_29 = format_534_Sabato_21_50_05_26shp_29.readFeatures(json_534_Sabato_21_50_05_26shp_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Sabato_21_50_05_26shp_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Sabato_21_50_05_26shp_29.addFeatures(features_534_Sabato_21_50_05_26shp_29);
var lyr_534_Sabato_21_50_05_26shp_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Sabato_21_50_05_26shp_29, 
                style: style_534_Sabato_21_50_05_26shp_29,
                popuplayertitle: '534_Sabato_21_50_05_26.shp',
                interactive: true,
    title: '534_Sabato_21_50_05_26.shp<br />\
    <img src="styles/legend/534_Sabato_21_50_05_26shp_29_0.png" /> 1<br />' });
var format_531_Sabato_05_30_13_06shp_30 = new ol.format.GeoJSON();
var features_531_Sabato_05_30_13_06shp_30 = format_531_Sabato_05_30_13_06shp_30.readFeatures(json_531_Sabato_05_30_13_06shp_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Sabato_05_30_13_06shp_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Sabato_05_30_13_06shp_30.addFeatures(features_531_Sabato_05_30_13_06shp_30);
var lyr_531_Sabato_05_30_13_06shp_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Sabato_05_30_13_06shp_30, 
                style: style_531_Sabato_05_30_13_06shp_30,
                popuplayertitle: '531_Sabato_05_30_13_06.shp',
                interactive: true,
    title: '531_Sabato_05_30_13_06.shp<br />\
    <img src="styles/legend/531_Sabato_05_30_13_06shp_30_0.png" /> 1<br />' });
var format_158_Sabato_05_30_13_06shp_31 = new ol.format.GeoJSON();
var features_158_Sabato_05_30_13_06shp_31 = format_158_Sabato_05_30_13_06shp_31.readFeatures(json_158_Sabato_05_30_13_06shp_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Sabato_05_30_13_06shp_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Sabato_05_30_13_06shp_31.addFeatures(features_158_Sabato_05_30_13_06shp_31);
var lyr_158_Sabato_05_30_13_06shp_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Sabato_05_30_13_06shp_31, 
                style: style_158_Sabato_05_30_13_06shp_31,
                popuplayertitle: '158_Sabato_05_30_13_06.shp',
                interactive: true,
    title: '158_Sabato_05_30_13_06.shp<br />\
    <img src="styles/legend/158_Sabato_05_30_13_06shp_31_0.png" /> 1<br />\
    <img src="styles/legend/158_Sabato_05_30_13_06shp_31_1.png" /> 2<br />\
    <img src="styles/legend/158_Sabato_05_30_13_06shp_31_2.png" /> 3<br />\
    <img src="styles/legend/158_Sabato_05_30_13_06shp_31_3.png" /> 4<br />\
    <img src="styles/legend/158_Sabato_05_30_13_06shp_31_4.png" /> 5<br />\
    <img src="styles/legend/158_Sabato_05_30_13_06shp_31_5.png" /> 6<br />\
    <img src="styles/legend/158_Sabato_05_30_13_06shp_31_6.png" /> 7<br />' });
var format_156_Sabato_13_07_20_43shp_32 = new ol.format.GeoJSON();
var features_156_Sabato_13_07_20_43shp_32 = format_156_Sabato_13_07_20_43shp_32.readFeatures(json_156_Sabato_13_07_20_43shp_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Sabato_13_07_20_43shp_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Sabato_13_07_20_43shp_32.addFeatures(features_156_Sabato_13_07_20_43shp_32);
var lyr_156_Sabato_13_07_20_43shp_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Sabato_13_07_20_43shp_32, 
                style: style_156_Sabato_13_07_20_43shp_32,
                popuplayertitle: '156_Sabato_13_07_20_43.shp',
                interactive: true,
    title: '156_Sabato_13_07_20_43.shp<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43shp_32_0.png" /> 1<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43shp_32_1.png" /> 2<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43shp_32_2.png" /> 3<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43shp_32_3.png" /> 4<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43shp_32_4.png" /> 5<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43shp_32_5.png" /> 6<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43shp_32_6.png" /> 7<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43shp_32_7.png" /> 8<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43shp_32_8.png" /> 9<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43shp_32_9.png" /> 10<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43shp_32_10.png" /> 11<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43shp_32_11.png" /> 12<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43shp_32_12.png" /> 13<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43shp_32_13.png" /> 14<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43shp_32_14.png" /> 15<br />' });
var format_154_Sabato_21_50_05_26shp_33 = new ol.format.GeoJSON();
var features_154_Sabato_21_50_05_26shp_33 = format_154_Sabato_21_50_05_26shp_33.readFeatures(json_154_Sabato_21_50_05_26shp_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Sabato_21_50_05_26shp_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Sabato_21_50_05_26shp_33.addFeatures(features_154_Sabato_21_50_05_26shp_33);
var lyr_154_Sabato_21_50_05_26shp_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Sabato_21_50_05_26shp_33, 
                style: style_154_Sabato_21_50_05_26shp_33,
                popuplayertitle: '154_Sabato_21_50_05_26.shp',
                interactive: true,
    title: '154_Sabato_21_50_05_26.shp<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26shp_33_0.png" /> 1<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26shp_33_1.png" /> 2<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26shp_33_2.png" /> 3<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26shp_33_3.png" /> 4<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26shp_33_4.png" /> 5<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26shp_33_5.png" /> 6<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26shp_33_6.png" /> 7<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26shp_33_7.png" /> 8<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26shp_33_8.png" /> 9<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26shp_33_9.png" /> 10<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26shp_33_10.png" /> 11<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26shp_33_11.png" /> 12<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26shp_33_12.png" /> 13<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26shp_33_13.png" /> 14<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26shp_33_14.png" /> 15<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26shp_33_15.png" /> 16<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26shp_33_16.png" /> 17<br />' });
var format_79_Venerdi_21_50_05_26shp_34 = new ol.format.GeoJSON();
var features_79_Venerdi_21_50_05_26shp_34 = format_79_Venerdi_21_50_05_26shp_34.readFeatures(json_79_Venerdi_21_50_05_26shp_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Venerdi_21_50_05_26shp_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Venerdi_21_50_05_26shp_34.addFeatures(features_79_Venerdi_21_50_05_26shp_34);
var lyr_79_Venerdi_21_50_05_26shp_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Venerdi_21_50_05_26shp_34, 
                style: style_79_Venerdi_21_50_05_26shp_34,
                popuplayertitle: '79_Venerdi_21_50_05_26.shp',
                interactive: true,
    title: '79_Venerdi_21_50_05_26.shp<br />\
    <img src="styles/legend/79_Venerdi_21_50_05_26shp_34_0.png" /> 1<br />\
    <img src="styles/legend/79_Venerdi_21_50_05_26shp_34_1.png" /> 2<br />' });
var format_77_Venerdi_21_50_05_26shp_35 = new ol.format.GeoJSON();
var features_77_Venerdi_21_50_05_26shp_35 = format_77_Venerdi_21_50_05_26shp_35.readFeatures(json_77_Venerdi_21_50_05_26shp_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Venerdi_21_50_05_26shp_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Venerdi_21_50_05_26shp_35.addFeatures(features_77_Venerdi_21_50_05_26shp_35);
var lyr_77_Venerdi_21_50_05_26shp_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Venerdi_21_50_05_26shp_35, 
                style: style_77_Venerdi_21_50_05_26shp_35,
                popuplayertitle: '77_Venerdi_21_50_05_26.shp',
                interactive: true,
    title: '77_Venerdi_21_50_05_26.shp<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26shp_35_0.png" /> 1<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26shp_35_1.png" /> 2<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26shp_35_2.png" /> 3<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26shp_35_3.png" /> 4<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26shp_35_4.png" /> 5<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26shp_35_5.png" /> 6<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26shp_35_6.png" /> 7<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26shp_35_7.png" /> 8<br />' });
var format_76_Venerdi_19_00_02_36shp_36 = new ol.format.GeoJSON();
var features_76_Venerdi_19_00_02_36shp_36 = format_76_Venerdi_19_00_02_36shp_36.readFeatures(json_76_Venerdi_19_00_02_36shp_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Venerdi_19_00_02_36shp_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Venerdi_19_00_02_36shp_36.addFeatures(features_76_Venerdi_19_00_02_36shp_36);
var lyr_76_Venerdi_19_00_02_36shp_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Venerdi_19_00_02_36shp_36, 
                style: style_76_Venerdi_19_00_02_36shp_36,
                popuplayertitle: '76_Venerdi_19_00_02_36.shp',
                interactive: true,
    title: '76_Venerdi_19_00_02_36.shp<br />\
    <img src="styles/legend/76_Venerdi_19_00_02_36shp_36_0.png" /> 1<br />' });
var format_75_Venerdi_13_07_20_43shp_37 = new ol.format.GeoJSON();
var features_75_Venerdi_13_07_20_43shp_37 = format_75_Venerdi_13_07_20_43shp_37.readFeatures(json_75_Venerdi_13_07_20_43shp_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Venerdi_13_07_20_43shp_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Venerdi_13_07_20_43shp_37.addFeatures(features_75_Venerdi_13_07_20_43shp_37);
var lyr_75_Venerdi_13_07_20_43shp_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Venerdi_13_07_20_43shp_37, 
                style: style_75_Venerdi_13_07_20_43shp_37,
                popuplayertitle: '75_Venerdi_13_07_20_43.shp',
                interactive: true,
    title: '75_Venerdi_13_07_20_43.shp<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43shp_37_0.png" /> 1<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43shp_37_1.png" /> 2<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43shp_37_2.png" /> 3<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43shp_37_3.png" /> 4<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43shp_37_4.png" /> 5<br />' });
var format_73_Venerdi_05_30_13_06shp_38 = new ol.format.GeoJSON();
var features_73_Venerdi_05_30_13_06shp_38 = format_73_Venerdi_05_30_13_06shp_38.readFeatures(json_73_Venerdi_05_30_13_06shp_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Venerdi_05_30_13_06shp_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Venerdi_05_30_13_06shp_38.addFeatures(features_73_Venerdi_05_30_13_06shp_38);
var lyr_73_Venerdi_05_30_13_06shp_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Venerdi_05_30_13_06shp_38, 
                style: style_73_Venerdi_05_30_13_06shp_38,
                popuplayertitle: '73_Venerdi_05_30_13_06.shp',
                interactive: true,
    title: '73_Venerdi_05_30_13_06.shp<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06shp_38_0.png" /> 1<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06shp_38_1.png" /> 2<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06shp_38_2.png" /> 3<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06shp_38_3.png" /> 4<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06shp_38_4.png" /> 5<br />' });
var format_72_Venerdi_13_07_20_43shp_39 = new ol.format.GeoJSON();
var features_72_Venerdi_13_07_20_43shp_39 = format_72_Venerdi_13_07_20_43shp_39.readFeatures(json_72_Venerdi_13_07_20_43shp_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Venerdi_13_07_20_43shp_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Venerdi_13_07_20_43shp_39.addFeatures(features_72_Venerdi_13_07_20_43shp_39);
var lyr_72_Venerdi_13_07_20_43shp_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Venerdi_13_07_20_43shp_39, 
                style: style_72_Venerdi_13_07_20_43shp_39,
                popuplayertitle: '72_Venerdi_13_07_20_43.shp',
                interactive: true,
    title: '72_Venerdi_13_07_20_43.shp<br />\
    <img src="styles/legend/72_Venerdi_13_07_20_43shp_39_0.png" /> 1<br />\
    <img src="styles/legend/72_Venerdi_13_07_20_43shp_39_1.png" /> 2<br />' });
var format_71_Venerdi_05_30_13_06shp_40 = new ol.format.GeoJSON();
var features_71_Venerdi_05_30_13_06shp_40 = format_71_Venerdi_05_30_13_06shp_40.readFeatures(json_71_Venerdi_05_30_13_06shp_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Venerdi_05_30_13_06shp_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Venerdi_05_30_13_06shp_40.addFeatures(features_71_Venerdi_05_30_13_06shp_40);
var lyr_71_Venerdi_05_30_13_06shp_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Venerdi_05_30_13_06shp_40, 
                style: style_71_Venerdi_05_30_13_06shp_40,
                popuplayertitle: '71_Venerdi_05_30_13_06.shp',
                interactive: true,
    title: '71_Venerdi_05_30_13_06.shp<br />\
    <img src="styles/legend/71_Venerdi_05_30_13_06shp_40_0.png" /> 1<br />\
    <img src="styles/legend/71_Venerdi_05_30_13_06shp_40_1.png" /> 2<br />\
    <img src="styles/legend/71_Venerdi_05_30_13_06shp_40_2.png" /> 3<br />' });
var format_70_Venerdi_09_30_15_50shp_41 = new ol.format.GeoJSON();
var features_70_Venerdi_09_30_15_50shp_41 = format_70_Venerdi_09_30_15_50shp_41.readFeatures(json_70_Venerdi_09_30_15_50shp_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Venerdi_09_30_15_50shp_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Venerdi_09_30_15_50shp_41.addFeatures(features_70_Venerdi_09_30_15_50shp_41);
var lyr_70_Venerdi_09_30_15_50shp_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Venerdi_09_30_15_50shp_41, 
                style: style_70_Venerdi_09_30_15_50shp_41,
                popuplayertitle: '70_Venerdi_09_30_15_50.shp',
                interactive: true,
    title: '70_Venerdi_09_30_15_50.shp<br />\
    <img src="styles/legend/70_Venerdi_09_30_15_50shp_41_0.png" /> 1<br />' });
var format_543_Venerdi_19_00_02_36shp_42 = new ol.format.GeoJSON();
var features_543_Venerdi_19_00_02_36shp_42 = format_543_Venerdi_19_00_02_36shp_42.readFeatures(json_543_Venerdi_19_00_02_36shp_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Venerdi_19_00_02_36shp_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Venerdi_19_00_02_36shp_42.addFeatures(features_543_Venerdi_19_00_02_36shp_42);
var lyr_543_Venerdi_19_00_02_36shp_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Venerdi_19_00_02_36shp_42, 
                style: style_543_Venerdi_19_00_02_36shp_42,
                popuplayertitle: '543_Venerdi_19_00_02_36.shp',
                interactive: true,
    title: '543_Venerdi_19_00_02_36.shp<br />\
    <img src="styles/legend/543_Venerdi_19_00_02_36shp_42_0.png" /> 1<br />' });
var format_542_Venerdi_13_07_20_43shp_43 = new ol.format.GeoJSON();
var features_542_Venerdi_13_07_20_43shp_43 = format_542_Venerdi_13_07_20_43shp_43.readFeatures(json_542_Venerdi_13_07_20_43shp_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Venerdi_13_07_20_43shp_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Venerdi_13_07_20_43shp_43.addFeatures(features_542_Venerdi_13_07_20_43shp_43);
var lyr_542_Venerdi_13_07_20_43shp_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Venerdi_13_07_20_43shp_43, 
                style: style_542_Venerdi_13_07_20_43shp_43,
                popuplayertitle: '542_Venerdi_13_07_20_43.shp',
                interactive: true,
    title: '542_Venerdi_13_07_20_43.shp<br />\
    <img src="styles/legend/542_Venerdi_13_07_20_43shp_43_0.png" /> 1<br />\
    <img src="styles/legend/542_Venerdi_13_07_20_43shp_43_1.png" /> 2<br />' });
var format_541_Venerdi_05_30_13_06shp_44 = new ol.format.GeoJSON();
var features_541_Venerdi_05_30_13_06shp_44 = format_541_Venerdi_05_30_13_06shp_44.readFeatures(json_541_Venerdi_05_30_13_06shp_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Venerdi_05_30_13_06shp_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Venerdi_05_30_13_06shp_44.addFeatures(features_541_Venerdi_05_30_13_06shp_44);
var lyr_541_Venerdi_05_30_13_06shp_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Venerdi_05_30_13_06shp_44, 
                style: style_541_Venerdi_05_30_13_06shp_44,
                popuplayertitle: '541_Venerdi_05_30_13_06.shp',
                interactive: true,
    title: '541_Venerdi_05_30_13_06.shp<br />\
    <img src="styles/legend/541_Venerdi_05_30_13_06shp_44_0.png" /> 1<br />\
    <img src="styles/legend/541_Venerdi_05_30_13_06shp_44_1.png" /> 2<br />\
    <img src="styles/legend/541_Venerdi_05_30_13_06shp_44_2.png" /> 3<br />\
    <img src="styles/legend/541_Venerdi_05_30_13_06shp_44_3.png" /> 4<br />' });
var format_540_Venerdi_21_50_05_26shp_45 = new ol.format.GeoJSON();
var features_540_Venerdi_21_50_05_26shp_45 = format_540_Venerdi_21_50_05_26shp_45.readFeatures(json_540_Venerdi_21_50_05_26shp_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Venerdi_21_50_05_26shp_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Venerdi_21_50_05_26shp_45.addFeatures(features_540_Venerdi_21_50_05_26shp_45);
var lyr_540_Venerdi_21_50_05_26shp_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Venerdi_21_50_05_26shp_45, 
                style: style_540_Venerdi_21_50_05_26shp_45,
                popuplayertitle: '540_Venerdi_21_50_05_26.shp',
                interactive: true,
    title: '540_Venerdi_21_50_05_26.shp<br />\
    <img src="styles/legend/540_Venerdi_21_50_05_26shp_45_0.png" /> 1<br />' });
var format_534_Venerdi_21_50_05_26shp_46 = new ol.format.GeoJSON();
var features_534_Venerdi_21_50_05_26shp_46 = format_534_Venerdi_21_50_05_26shp_46.readFeatures(json_534_Venerdi_21_50_05_26shp_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Venerdi_21_50_05_26shp_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Venerdi_21_50_05_26shp_46.addFeatures(features_534_Venerdi_21_50_05_26shp_46);
var lyr_534_Venerdi_21_50_05_26shp_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Venerdi_21_50_05_26shp_46, 
                style: style_534_Venerdi_21_50_05_26shp_46,
                popuplayertitle: '534_Venerdi_21_50_05_26.shp',
                interactive: true,
    title: '534_Venerdi_21_50_05_26.shp<br />\
    <img src="styles/legend/534_Venerdi_21_50_05_26shp_46_0.png" /> 1<br />' });
var format_531_Venerdi_05_30_13_06shp_47 = new ol.format.GeoJSON();
var features_531_Venerdi_05_30_13_06shp_47 = format_531_Venerdi_05_30_13_06shp_47.readFeatures(json_531_Venerdi_05_30_13_06shp_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Venerdi_05_30_13_06shp_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Venerdi_05_30_13_06shp_47.addFeatures(features_531_Venerdi_05_30_13_06shp_47);
var lyr_531_Venerdi_05_30_13_06shp_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Venerdi_05_30_13_06shp_47, 
                style: style_531_Venerdi_05_30_13_06shp_47,
                popuplayertitle: '531_Venerdi_05_30_13_06.shp',
                interactive: true,
    title: '531_Venerdi_05_30_13_06.shp<br />\
    <img src="styles/legend/531_Venerdi_05_30_13_06shp_47_0.png" /> 1<br />' });
var format_158_Venerdi_05_30_13_06shp_48 = new ol.format.GeoJSON();
var features_158_Venerdi_05_30_13_06shp_48 = format_158_Venerdi_05_30_13_06shp_48.readFeatures(json_158_Venerdi_05_30_13_06shp_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Venerdi_05_30_13_06shp_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Venerdi_05_30_13_06shp_48.addFeatures(features_158_Venerdi_05_30_13_06shp_48);
var lyr_158_Venerdi_05_30_13_06shp_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Venerdi_05_30_13_06shp_48, 
                style: style_158_Venerdi_05_30_13_06shp_48,
                popuplayertitle: '158_Venerdi_05_30_13_06.shp',
                interactive: true,
    title: '158_Venerdi_05_30_13_06.shp<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06shp_48_0.png" /> 1<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06shp_48_1.png" /> 2<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06shp_48_2.png" /> 3<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06shp_48_3.png" /> 4<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06shp_48_4.png" /> 5<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06shp_48_5.png" /> 6<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06shp_48_6.png" /> 7<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06shp_48_7.png" /> 8<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06shp_48_8.png" /> 9<br />' });
var format_156_Venerdi_13_07_20_43shp_49 = new ol.format.GeoJSON();
var features_156_Venerdi_13_07_20_43shp_49 = format_156_Venerdi_13_07_20_43shp_49.readFeatures(json_156_Venerdi_13_07_20_43shp_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Venerdi_13_07_20_43shp_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Venerdi_13_07_20_43shp_49.addFeatures(features_156_Venerdi_13_07_20_43shp_49);
var lyr_156_Venerdi_13_07_20_43shp_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Venerdi_13_07_20_43shp_49, 
                style: style_156_Venerdi_13_07_20_43shp_49,
                popuplayertitle: '156_Venerdi_13_07_20_43.shp',
                interactive: true,
    title: '156_Venerdi_13_07_20_43.shp<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_0.png" /> 1<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_1.png" /> 2<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_2.png" /> 3<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_3.png" /> 4<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_4.png" /> 5<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_5.png" /> 6<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_6.png" /> 7<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_7.png" /> 8<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_8.png" /> 9<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_9.png" /> 10<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_10.png" /> 11<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_11.png" /> 12<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_12.png" /> 13<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_13.png" /> 14<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_14.png" /> 15<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_15.png" /> 16<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_16.png" /> 17<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_17.png" /> 18<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43shp_49_18.png" /> 19<br />' });
var format_154_Venerdi_21_50_05_26shp_50 = new ol.format.GeoJSON();
var features_154_Venerdi_21_50_05_26shp_50 = format_154_Venerdi_21_50_05_26shp_50.readFeatures(json_154_Venerdi_21_50_05_26shp_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Venerdi_21_50_05_26shp_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Venerdi_21_50_05_26shp_50.addFeatures(features_154_Venerdi_21_50_05_26shp_50);
var lyr_154_Venerdi_21_50_05_26shp_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Venerdi_21_50_05_26shp_50, 
                style: style_154_Venerdi_21_50_05_26shp_50,
                popuplayertitle: '154_Venerdi_21_50_05_26.shp',
                interactive: true,
    title: '154_Venerdi_21_50_05_26.shp<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_0.png" /> 1<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_1.png" /> 2<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_2.png" /> 3<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_3.png" /> 4<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_4.png" /> 5<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_5.png" /> 6<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_6.png" /> 7<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_7.png" /> 8<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_8.png" /> 9<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_9.png" /> 10<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_10.png" /> 11<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_11.png" /> 12<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_12.png" /> 13<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_13.png" /> 14<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_14.png" /> 15<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_15.png" /> 16<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_16.png" /> 17<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_17.png" /> 18<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_18.png" /> 19<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_19.png" /> 20<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_20.png" /> 21<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_21.png" /> 22<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_22.png" /> 23<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26shp_50_23.png" /> 24<br />' });
var format_79_Giovedi_21_50_05_26shp_51 = new ol.format.GeoJSON();
var features_79_Giovedi_21_50_05_26shp_51 = format_79_Giovedi_21_50_05_26shp_51.readFeatures(json_79_Giovedi_21_50_05_26shp_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Giovedi_21_50_05_26shp_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Giovedi_21_50_05_26shp_51.addFeatures(features_79_Giovedi_21_50_05_26shp_51);
var lyr_79_Giovedi_21_50_05_26shp_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Giovedi_21_50_05_26shp_51, 
                style: style_79_Giovedi_21_50_05_26shp_51,
                popuplayertitle: '79_Giovedi_21_50_05_26.shp',
                interactive: true,
    title: '79_Giovedi_21_50_05_26.shp<br />\
    <img src="styles/legend/79_Giovedi_21_50_05_26shp_51_0.png" /> 1<br />\
    <img src="styles/legend/79_Giovedi_21_50_05_26shp_51_1.png" /> 2<br />' });
var format_77_Giovedi_21_50_05_26shp_52 = new ol.format.GeoJSON();
var features_77_Giovedi_21_50_05_26shp_52 = format_77_Giovedi_21_50_05_26shp_52.readFeatures(json_77_Giovedi_21_50_05_26shp_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Giovedi_21_50_05_26shp_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Giovedi_21_50_05_26shp_52.addFeatures(features_77_Giovedi_21_50_05_26shp_52);
var lyr_77_Giovedi_21_50_05_26shp_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Giovedi_21_50_05_26shp_52, 
                style: style_77_Giovedi_21_50_05_26shp_52,
                popuplayertitle: '77_Giovedi_21_50_05_26.shp',
                interactive: true,
    title: '77_Giovedi_21_50_05_26.shp<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26shp_52_0.png" /> 1<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26shp_52_1.png" /> 2<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26shp_52_2.png" /> 3<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26shp_52_3.png" /> 4<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26shp_52_4.png" /> 5<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26shp_52_5.png" /> 6<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26shp_52_6.png" /> 7<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26shp_52_7.png" /> 8<br />' });
var format_76_Giovedi_19_00_02_36shp_53 = new ol.format.GeoJSON();
var features_76_Giovedi_19_00_02_36shp_53 = format_76_Giovedi_19_00_02_36shp_53.readFeatures(json_76_Giovedi_19_00_02_36shp_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Giovedi_19_00_02_36shp_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Giovedi_19_00_02_36shp_53.addFeatures(features_76_Giovedi_19_00_02_36shp_53);
var lyr_76_Giovedi_19_00_02_36shp_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Giovedi_19_00_02_36shp_53, 
                style: style_76_Giovedi_19_00_02_36shp_53,
                popuplayertitle: '76_Giovedi_19_00_02_36.shp',
                interactive: true,
    title: '76_Giovedi_19_00_02_36.shp<br />\
    <img src="styles/legend/76_Giovedi_19_00_02_36shp_53_0.png" /> 1<br />' });
var format_75_Giovedi_13_07_20_43shp_54 = new ol.format.GeoJSON();
var features_75_Giovedi_13_07_20_43shp_54 = format_75_Giovedi_13_07_20_43shp_54.readFeatures(json_75_Giovedi_13_07_20_43shp_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Giovedi_13_07_20_43shp_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Giovedi_13_07_20_43shp_54.addFeatures(features_75_Giovedi_13_07_20_43shp_54);
var lyr_75_Giovedi_13_07_20_43shp_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Giovedi_13_07_20_43shp_54, 
                style: style_75_Giovedi_13_07_20_43shp_54,
                popuplayertitle: '75_Giovedi_13_07_20_43.shp',
                interactive: true,
    title: '75_Giovedi_13_07_20_43.shp<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43shp_54_0.png" /> 1<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43shp_54_1.png" /> 2<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43shp_54_2.png" /> 3<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43shp_54_3.png" /> 4<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43shp_54_4.png" /> 5<br />' });
var format_73_Giovedi_05_30_13_06shp_55 = new ol.format.GeoJSON();
var features_73_Giovedi_05_30_13_06shp_55 = format_73_Giovedi_05_30_13_06shp_55.readFeatures(json_73_Giovedi_05_30_13_06shp_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Giovedi_05_30_13_06shp_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Giovedi_05_30_13_06shp_55.addFeatures(features_73_Giovedi_05_30_13_06shp_55);
var lyr_73_Giovedi_05_30_13_06shp_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Giovedi_05_30_13_06shp_55, 
                style: style_73_Giovedi_05_30_13_06shp_55,
                popuplayertitle: '73_Giovedi_05_30_13_06.shp',
                interactive: true,
    title: '73_Giovedi_05_30_13_06.shp<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06shp_55_0.png" /> 1<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06shp_55_1.png" /> 2<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06shp_55_2.png" /> 3<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06shp_55_3.png" /> 4<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06shp_55_4.png" /> 5<br />' });
var format_72_Giovedi_13_07_20_43shp_56 = new ol.format.GeoJSON();
var features_72_Giovedi_13_07_20_43shp_56 = format_72_Giovedi_13_07_20_43shp_56.readFeatures(json_72_Giovedi_13_07_20_43shp_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Giovedi_13_07_20_43shp_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Giovedi_13_07_20_43shp_56.addFeatures(features_72_Giovedi_13_07_20_43shp_56);
var lyr_72_Giovedi_13_07_20_43shp_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Giovedi_13_07_20_43shp_56, 
                style: style_72_Giovedi_13_07_20_43shp_56,
                popuplayertitle: '72_Giovedi_13_07_20_43.shp',
                interactive: true,
    title: '72_Giovedi_13_07_20_43.shp<br />\
    <img src="styles/legend/72_Giovedi_13_07_20_43shp_56_0.png" /> 1<br />\
    <img src="styles/legend/72_Giovedi_13_07_20_43shp_56_1.png" /> 2<br />' });
var format_71_Giovedi_05_30_13_06shp_57 = new ol.format.GeoJSON();
var features_71_Giovedi_05_30_13_06shp_57 = format_71_Giovedi_05_30_13_06shp_57.readFeatures(json_71_Giovedi_05_30_13_06shp_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Giovedi_05_30_13_06shp_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Giovedi_05_30_13_06shp_57.addFeatures(features_71_Giovedi_05_30_13_06shp_57);
var lyr_71_Giovedi_05_30_13_06shp_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Giovedi_05_30_13_06shp_57, 
                style: style_71_Giovedi_05_30_13_06shp_57,
                popuplayertitle: '71_Giovedi_05_30_13_06.shp',
                interactive: true,
    title: '71_Giovedi_05_30_13_06.shp<br />\
    <img src="styles/legend/71_Giovedi_05_30_13_06shp_57_0.png" /> 1<br />\
    <img src="styles/legend/71_Giovedi_05_30_13_06shp_57_1.png" /> 2<br />\
    <img src="styles/legend/71_Giovedi_05_30_13_06shp_57_2.png" /> 3<br />' });
var format_70_Giovedi_09_30_15_50shp_58 = new ol.format.GeoJSON();
var features_70_Giovedi_09_30_15_50shp_58 = format_70_Giovedi_09_30_15_50shp_58.readFeatures(json_70_Giovedi_09_30_15_50shp_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Giovedi_09_30_15_50shp_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Giovedi_09_30_15_50shp_58.addFeatures(features_70_Giovedi_09_30_15_50shp_58);
var lyr_70_Giovedi_09_30_15_50shp_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Giovedi_09_30_15_50shp_58, 
                style: style_70_Giovedi_09_30_15_50shp_58,
                popuplayertitle: '70_Giovedi_09_30_15_50.shp',
                interactive: true,
    title: '70_Giovedi_09_30_15_50.shp<br />\
    <img src="styles/legend/70_Giovedi_09_30_15_50shp_58_0.png" /> 1<br />' });
var format_543_Giovedi_19_00_02_36shp_59 = new ol.format.GeoJSON();
var features_543_Giovedi_19_00_02_36shp_59 = format_543_Giovedi_19_00_02_36shp_59.readFeatures(json_543_Giovedi_19_00_02_36shp_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Giovedi_19_00_02_36shp_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Giovedi_19_00_02_36shp_59.addFeatures(features_543_Giovedi_19_00_02_36shp_59);
var lyr_543_Giovedi_19_00_02_36shp_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Giovedi_19_00_02_36shp_59, 
                style: style_543_Giovedi_19_00_02_36shp_59,
                popuplayertitle: '543_Giovedi_19_00_02_36.shp',
                interactive: true,
    title: '543_Giovedi_19_00_02_36.shp<br />\
    <img src="styles/legend/543_Giovedi_19_00_02_36shp_59_0.png" /> 1<br />' });
var format_542_Giovedi_13_07_20_43shp_60 = new ol.format.GeoJSON();
var features_542_Giovedi_13_07_20_43shp_60 = format_542_Giovedi_13_07_20_43shp_60.readFeatures(json_542_Giovedi_13_07_20_43shp_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Giovedi_13_07_20_43shp_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Giovedi_13_07_20_43shp_60.addFeatures(features_542_Giovedi_13_07_20_43shp_60);
var lyr_542_Giovedi_13_07_20_43shp_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Giovedi_13_07_20_43shp_60, 
                style: style_542_Giovedi_13_07_20_43shp_60,
                popuplayertitle: '542_Giovedi_13_07_20_43.shp',
                interactive: true,
    title: '542_Giovedi_13_07_20_43.shp<br />\
    <img src="styles/legend/542_Giovedi_13_07_20_43shp_60_0.png" /> 1<br />\
    <img src="styles/legend/542_Giovedi_13_07_20_43shp_60_1.png" /> 2<br />' });
var format_541_Giovedi_05_30_13_06shp_61 = new ol.format.GeoJSON();
var features_541_Giovedi_05_30_13_06shp_61 = format_541_Giovedi_05_30_13_06shp_61.readFeatures(json_541_Giovedi_05_30_13_06shp_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Giovedi_05_30_13_06shp_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Giovedi_05_30_13_06shp_61.addFeatures(features_541_Giovedi_05_30_13_06shp_61);
var lyr_541_Giovedi_05_30_13_06shp_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Giovedi_05_30_13_06shp_61, 
                style: style_541_Giovedi_05_30_13_06shp_61,
                popuplayertitle: '541_Giovedi_05_30_13_06.shp',
                interactive: true,
    title: '541_Giovedi_05_30_13_06.shp<br />\
    <img src="styles/legend/541_Giovedi_05_30_13_06shp_61_0.png" /> 1<br />\
    <img src="styles/legend/541_Giovedi_05_30_13_06shp_61_1.png" /> 2<br />\
    <img src="styles/legend/541_Giovedi_05_30_13_06shp_61_2.png" /> 3<br />\
    <img src="styles/legend/541_Giovedi_05_30_13_06shp_61_3.png" /> 4<br />' });
var format_540_Giovedi_21_50_05_26shp_62 = new ol.format.GeoJSON();
var features_540_Giovedi_21_50_05_26shp_62 = format_540_Giovedi_21_50_05_26shp_62.readFeatures(json_540_Giovedi_21_50_05_26shp_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Giovedi_21_50_05_26shp_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Giovedi_21_50_05_26shp_62.addFeatures(features_540_Giovedi_21_50_05_26shp_62);
var lyr_540_Giovedi_21_50_05_26shp_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Giovedi_21_50_05_26shp_62, 
                style: style_540_Giovedi_21_50_05_26shp_62,
                popuplayertitle: '540_Giovedi_21_50_05_26.shp',
                interactive: true,
    title: '540_Giovedi_21_50_05_26.shp<br />\
    <img src="styles/legend/540_Giovedi_21_50_05_26shp_62_0.png" /> 1<br />' });
var format_534_Giovedi_21_50_05_26shp_63 = new ol.format.GeoJSON();
var features_534_Giovedi_21_50_05_26shp_63 = format_534_Giovedi_21_50_05_26shp_63.readFeatures(json_534_Giovedi_21_50_05_26shp_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Giovedi_21_50_05_26shp_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Giovedi_21_50_05_26shp_63.addFeatures(features_534_Giovedi_21_50_05_26shp_63);
var lyr_534_Giovedi_21_50_05_26shp_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Giovedi_21_50_05_26shp_63, 
                style: style_534_Giovedi_21_50_05_26shp_63,
                popuplayertitle: '534_Giovedi_21_50_05_26.shp',
                interactive: true,
    title: '534_Giovedi_21_50_05_26.shp<br />\
    <img src="styles/legend/534_Giovedi_21_50_05_26shp_63_0.png" /> 1<br />' });
var format_531_Giovedi_05_30_13_06shp_64 = new ol.format.GeoJSON();
var features_531_Giovedi_05_30_13_06shp_64 = format_531_Giovedi_05_30_13_06shp_64.readFeatures(json_531_Giovedi_05_30_13_06shp_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Giovedi_05_30_13_06shp_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Giovedi_05_30_13_06shp_64.addFeatures(features_531_Giovedi_05_30_13_06shp_64);
var lyr_531_Giovedi_05_30_13_06shp_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Giovedi_05_30_13_06shp_64, 
                style: style_531_Giovedi_05_30_13_06shp_64,
                popuplayertitle: '531_Giovedi_05_30_13_06.shp',
                interactive: true,
    title: '531_Giovedi_05_30_13_06.shp<br />\
    <img src="styles/legend/531_Giovedi_05_30_13_06shp_64_0.png" /> 1<br />' });
var format_158_Giovedi_05_30_13_06shp_65 = new ol.format.GeoJSON();
var features_158_Giovedi_05_30_13_06shp_65 = format_158_Giovedi_05_30_13_06shp_65.readFeatures(json_158_Giovedi_05_30_13_06shp_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Giovedi_05_30_13_06shp_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Giovedi_05_30_13_06shp_65.addFeatures(features_158_Giovedi_05_30_13_06shp_65);
var lyr_158_Giovedi_05_30_13_06shp_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Giovedi_05_30_13_06shp_65, 
                style: style_158_Giovedi_05_30_13_06shp_65,
                popuplayertitle: '158_Giovedi_05_30_13_06.shp',
                interactive: true,
    title: '158_Giovedi_05_30_13_06.shp<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06shp_65_0.png" /> 1<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06shp_65_1.png" /> 2<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06shp_65_2.png" /> 3<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06shp_65_3.png" /> 4<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06shp_65_4.png" /> 5<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06shp_65_5.png" /> 6<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06shp_65_6.png" /> 7<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06shp_65_7.png" /> 8<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06shp_65_8.png" /> 9<br />' });
var format_156_Giovedi_13_07_20_43shp_66 = new ol.format.GeoJSON();
var features_156_Giovedi_13_07_20_43shp_66 = format_156_Giovedi_13_07_20_43shp_66.readFeatures(json_156_Giovedi_13_07_20_43shp_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Giovedi_13_07_20_43shp_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Giovedi_13_07_20_43shp_66.addFeatures(features_156_Giovedi_13_07_20_43shp_66);
var lyr_156_Giovedi_13_07_20_43shp_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Giovedi_13_07_20_43shp_66, 
                style: style_156_Giovedi_13_07_20_43shp_66,
                popuplayertitle: '156_Giovedi_13_07_20_43.shp',
                interactive: true,
    title: '156_Giovedi_13_07_20_43.shp<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_0.png" /> 1<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_1.png" /> 2<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_2.png" /> 3<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_3.png" /> 4<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_4.png" /> 5<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_5.png" /> 6<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_6.png" /> 7<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_7.png" /> 8<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_8.png" /> 9<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_9.png" /> 10<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_10.png" /> 11<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_11.png" /> 12<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_12.png" /> 13<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_13.png" /> 14<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_14.png" /> 15<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_15.png" /> 16<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_16.png" /> 17<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_17.png" /> 18<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43shp_66_18.png" /> 19<br />' });
var format_154_Giovedi_21_50_05_26shp_67 = new ol.format.GeoJSON();
var features_154_Giovedi_21_50_05_26shp_67 = format_154_Giovedi_21_50_05_26shp_67.readFeatures(json_154_Giovedi_21_50_05_26shp_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Giovedi_21_50_05_26shp_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Giovedi_21_50_05_26shp_67.addFeatures(features_154_Giovedi_21_50_05_26shp_67);
var lyr_154_Giovedi_21_50_05_26shp_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Giovedi_21_50_05_26shp_67, 
                style: style_154_Giovedi_21_50_05_26shp_67,
                popuplayertitle: '154_Giovedi_21_50_05_26.shp',
                interactive: true,
    title: '154_Giovedi_21_50_05_26.shp<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_0.png" /> 1<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_1.png" /> 2<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_2.png" /> 3<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_3.png" /> 4<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_4.png" /> 5<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_5.png" /> 6<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_6.png" /> 7<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_7.png" /> 8<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_8.png" /> 9<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_9.png" /> 10<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_10.png" /> 11<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_11.png" /> 12<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_12.png" /> 13<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_13.png" /> 14<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_14.png" /> 15<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_15.png" /> 16<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_16.png" /> 17<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_17.png" /> 18<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_18.png" /> 19<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_19.png" /> 20<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_20.png" /> 21<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_21.png" /> 22<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_22.png" /> 23<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26shp_67_23.png" /> 24<br />' });
var format_79_Mercoledi_21_50_05_26shp_68 = new ol.format.GeoJSON();
var features_79_Mercoledi_21_50_05_26shp_68 = format_79_Mercoledi_21_50_05_26shp_68.readFeatures(json_79_Mercoledi_21_50_05_26shp_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Mercoledi_21_50_05_26shp_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Mercoledi_21_50_05_26shp_68.addFeatures(features_79_Mercoledi_21_50_05_26shp_68);
var lyr_79_Mercoledi_21_50_05_26shp_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Mercoledi_21_50_05_26shp_68, 
                style: style_79_Mercoledi_21_50_05_26shp_68,
                popuplayertitle: '79_Mercoledi_21_50_05_26.shp',
                interactive: true,
    title: '79_Mercoledi_21_50_05_26.shp<br />\
    <img src="styles/legend/79_Mercoledi_21_50_05_26shp_68_0.png" /> 1<br />\
    <img src="styles/legend/79_Mercoledi_21_50_05_26shp_68_1.png" /> 2<br />' });
var format_77_Mercoledi_21_50_05_26shp_69 = new ol.format.GeoJSON();
var features_77_Mercoledi_21_50_05_26shp_69 = format_77_Mercoledi_21_50_05_26shp_69.readFeatures(json_77_Mercoledi_21_50_05_26shp_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Mercoledi_21_50_05_26shp_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Mercoledi_21_50_05_26shp_69.addFeatures(features_77_Mercoledi_21_50_05_26shp_69);
var lyr_77_Mercoledi_21_50_05_26shp_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Mercoledi_21_50_05_26shp_69, 
                style: style_77_Mercoledi_21_50_05_26shp_69,
                popuplayertitle: '77_Mercoledi_21_50_05_26.shp',
                interactive: true,
    title: '77_Mercoledi_21_50_05_26.shp<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26shp_69_0.png" /> 1<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26shp_69_1.png" /> 2<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26shp_69_2.png" /> 3<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26shp_69_3.png" /> 4<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26shp_69_4.png" /> 5<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26shp_69_5.png" /> 6<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26shp_69_6.png" /> 7<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26shp_69_7.png" /> 8<br />' });
var format_76_Mercoledi_19_00_02_36shp_70 = new ol.format.GeoJSON();
var features_76_Mercoledi_19_00_02_36shp_70 = format_76_Mercoledi_19_00_02_36shp_70.readFeatures(json_76_Mercoledi_19_00_02_36shp_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Mercoledi_19_00_02_36shp_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Mercoledi_19_00_02_36shp_70.addFeatures(features_76_Mercoledi_19_00_02_36shp_70);
var lyr_76_Mercoledi_19_00_02_36shp_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Mercoledi_19_00_02_36shp_70, 
                style: style_76_Mercoledi_19_00_02_36shp_70,
                popuplayertitle: '76_Mercoledi_19_00_02_36.shp',
                interactive: true,
    title: '76_Mercoledi_19_00_02_36.shp<br />\
    <img src="styles/legend/76_Mercoledi_19_00_02_36shp_70_0.png" /> 1<br />' });
var format_75_Mercoledi_13_07_20_43shp_71 = new ol.format.GeoJSON();
var features_75_Mercoledi_13_07_20_43shp_71 = format_75_Mercoledi_13_07_20_43shp_71.readFeatures(json_75_Mercoledi_13_07_20_43shp_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Mercoledi_13_07_20_43shp_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Mercoledi_13_07_20_43shp_71.addFeatures(features_75_Mercoledi_13_07_20_43shp_71);
var lyr_75_Mercoledi_13_07_20_43shp_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Mercoledi_13_07_20_43shp_71, 
                style: style_75_Mercoledi_13_07_20_43shp_71,
                popuplayertitle: '75_Mercoledi_13_07_20_43.shp',
                interactive: true,
    title: '75_Mercoledi_13_07_20_43.shp<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43shp_71_0.png" /> 1<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43shp_71_1.png" /> 2<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43shp_71_2.png" /> 3<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43shp_71_3.png" /> 4<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43shp_71_4.png" /> 5<br />' });
var format_73_Mercoledi_05_30_13_06shp_72 = new ol.format.GeoJSON();
var features_73_Mercoledi_05_30_13_06shp_72 = format_73_Mercoledi_05_30_13_06shp_72.readFeatures(json_73_Mercoledi_05_30_13_06shp_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Mercoledi_05_30_13_06shp_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Mercoledi_05_30_13_06shp_72.addFeatures(features_73_Mercoledi_05_30_13_06shp_72);
var lyr_73_Mercoledi_05_30_13_06shp_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Mercoledi_05_30_13_06shp_72, 
                style: style_73_Mercoledi_05_30_13_06shp_72,
                popuplayertitle: '73_Mercoledi_05_30_13_06.shp',
                interactive: true,
    title: '73_Mercoledi_05_30_13_06.shp<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06shp_72_0.png" /> 1<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06shp_72_1.png" /> 2<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06shp_72_2.png" /> 3<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06shp_72_3.png" /> 4<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06shp_72_4.png" /> 5<br />' });
var format_72_Mercoledi_13_07_20_43shp_73 = new ol.format.GeoJSON();
var features_72_Mercoledi_13_07_20_43shp_73 = format_72_Mercoledi_13_07_20_43shp_73.readFeatures(json_72_Mercoledi_13_07_20_43shp_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Mercoledi_13_07_20_43shp_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Mercoledi_13_07_20_43shp_73.addFeatures(features_72_Mercoledi_13_07_20_43shp_73);
var lyr_72_Mercoledi_13_07_20_43shp_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Mercoledi_13_07_20_43shp_73, 
                style: style_72_Mercoledi_13_07_20_43shp_73,
                popuplayertitle: '72_Mercoledi_13_07_20_43.shp',
                interactive: true,
    title: '72_Mercoledi_13_07_20_43.shp<br />\
    <img src="styles/legend/72_Mercoledi_13_07_20_43shp_73_0.png" /> 1<br />\
    <img src="styles/legend/72_Mercoledi_13_07_20_43shp_73_1.png" /> 2<br />' });
var format_71_Mercoledi_05_30_13_06shp_74 = new ol.format.GeoJSON();
var features_71_Mercoledi_05_30_13_06shp_74 = format_71_Mercoledi_05_30_13_06shp_74.readFeatures(json_71_Mercoledi_05_30_13_06shp_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Mercoledi_05_30_13_06shp_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Mercoledi_05_30_13_06shp_74.addFeatures(features_71_Mercoledi_05_30_13_06shp_74);
var lyr_71_Mercoledi_05_30_13_06shp_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Mercoledi_05_30_13_06shp_74, 
                style: style_71_Mercoledi_05_30_13_06shp_74,
                popuplayertitle: '71_Mercoledi_05_30_13_06.shp',
                interactive: true,
    title: '71_Mercoledi_05_30_13_06.shp<br />\
    <img src="styles/legend/71_Mercoledi_05_30_13_06shp_74_0.png" /> 1<br />\
    <img src="styles/legend/71_Mercoledi_05_30_13_06shp_74_1.png" /> 2<br />\
    <img src="styles/legend/71_Mercoledi_05_30_13_06shp_74_2.png" /> 3<br />' });
var format_70_Mercoledi_09_30_15_50shp_75 = new ol.format.GeoJSON();
var features_70_Mercoledi_09_30_15_50shp_75 = format_70_Mercoledi_09_30_15_50shp_75.readFeatures(json_70_Mercoledi_09_30_15_50shp_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Mercoledi_09_30_15_50shp_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Mercoledi_09_30_15_50shp_75.addFeatures(features_70_Mercoledi_09_30_15_50shp_75);
var lyr_70_Mercoledi_09_30_15_50shp_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Mercoledi_09_30_15_50shp_75, 
                style: style_70_Mercoledi_09_30_15_50shp_75,
                popuplayertitle: '70_Mercoledi_09_30_15_50.shp',
                interactive: true,
    title: '70_Mercoledi_09_30_15_50.shp<br />\
    <img src="styles/legend/70_Mercoledi_09_30_15_50shp_75_0.png" /> 1<br />' });
var format_543_Mercoledi_19_00_02_36shp_76 = new ol.format.GeoJSON();
var features_543_Mercoledi_19_00_02_36shp_76 = format_543_Mercoledi_19_00_02_36shp_76.readFeatures(json_543_Mercoledi_19_00_02_36shp_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Mercoledi_19_00_02_36shp_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Mercoledi_19_00_02_36shp_76.addFeatures(features_543_Mercoledi_19_00_02_36shp_76);
var lyr_543_Mercoledi_19_00_02_36shp_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Mercoledi_19_00_02_36shp_76, 
                style: style_543_Mercoledi_19_00_02_36shp_76,
                popuplayertitle: '543_Mercoledi_19_00_02_36.shp',
                interactive: true,
    title: '543_Mercoledi_19_00_02_36.shp<br />\
    <img src="styles/legend/543_Mercoledi_19_00_02_36shp_76_0.png" /> 1<br />' });
var format_542_Mercoledi_13_07_20_43shp_77 = new ol.format.GeoJSON();
var features_542_Mercoledi_13_07_20_43shp_77 = format_542_Mercoledi_13_07_20_43shp_77.readFeatures(json_542_Mercoledi_13_07_20_43shp_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Mercoledi_13_07_20_43shp_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Mercoledi_13_07_20_43shp_77.addFeatures(features_542_Mercoledi_13_07_20_43shp_77);
var lyr_542_Mercoledi_13_07_20_43shp_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Mercoledi_13_07_20_43shp_77, 
                style: style_542_Mercoledi_13_07_20_43shp_77,
                popuplayertitle: '542_Mercoledi_13_07_20_43.shp',
                interactive: true,
    title: '542_Mercoledi_13_07_20_43.shp<br />\
    <img src="styles/legend/542_Mercoledi_13_07_20_43shp_77_0.png" /> 1<br />\
    <img src="styles/legend/542_Mercoledi_13_07_20_43shp_77_1.png" /> 2<br />' });
var format_541_Mercoledi_05_30_13_06shp_78 = new ol.format.GeoJSON();
var features_541_Mercoledi_05_30_13_06shp_78 = format_541_Mercoledi_05_30_13_06shp_78.readFeatures(json_541_Mercoledi_05_30_13_06shp_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Mercoledi_05_30_13_06shp_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Mercoledi_05_30_13_06shp_78.addFeatures(features_541_Mercoledi_05_30_13_06shp_78);
var lyr_541_Mercoledi_05_30_13_06shp_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Mercoledi_05_30_13_06shp_78, 
                style: style_541_Mercoledi_05_30_13_06shp_78,
                popuplayertitle: '541_Mercoledi_05_30_13_06.shp',
                interactive: true,
    title: '541_Mercoledi_05_30_13_06.shp<br />\
    <img src="styles/legend/541_Mercoledi_05_30_13_06shp_78_0.png" /> 1<br />\
    <img src="styles/legend/541_Mercoledi_05_30_13_06shp_78_1.png" /> 2<br />\
    <img src="styles/legend/541_Mercoledi_05_30_13_06shp_78_2.png" /> 3<br />\
    <img src="styles/legend/541_Mercoledi_05_30_13_06shp_78_3.png" /> 4<br />' });
var format_540_Mercoledi_21_50_05_26shp_79 = new ol.format.GeoJSON();
var features_540_Mercoledi_21_50_05_26shp_79 = format_540_Mercoledi_21_50_05_26shp_79.readFeatures(json_540_Mercoledi_21_50_05_26shp_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Mercoledi_21_50_05_26shp_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Mercoledi_21_50_05_26shp_79.addFeatures(features_540_Mercoledi_21_50_05_26shp_79);
var lyr_540_Mercoledi_21_50_05_26shp_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Mercoledi_21_50_05_26shp_79, 
                style: style_540_Mercoledi_21_50_05_26shp_79,
                popuplayertitle: '540_Mercoledi_21_50_05_26.shp',
                interactive: true,
    title: '540_Mercoledi_21_50_05_26.shp<br />\
    <img src="styles/legend/540_Mercoledi_21_50_05_26shp_79_0.png" /> 1<br />' });
var format_534_Mercoledi_21_50_05_26shp_80 = new ol.format.GeoJSON();
var features_534_Mercoledi_21_50_05_26shp_80 = format_534_Mercoledi_21_50_05_26shp_80.readFeatures(json_534_Mercoledi_21_50_05_26shp_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Mercoledi_21_50_05_26shp_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Mercoledi_21_50_05_26shp_80.addFeatures(features_534_Mercoledi_21_50_05_26shp_80);
var lyr_534_Mercoledi_21_50_05_26shp_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Mercoledi_21_50_05_26shp_80, 
                style: style_534_Mercoledi_21_50_05_26shp_80,
                popuplayertitle: '534_Mercoledi_21_50_05_26.shp',
                interactive: true,
    title: '534_Mercoledi_21_50_05_26.shp<br />\
    <img src="styles/legend/534_Mercoledi_21_50_05_26shp_80_0.png" /> 1<br />' });
var format_531_Mercoledi_05_30_13_06shp_81 = new ol.format.GeoJSON();
var features_531_Mercoledi_05_30_13_06shp_81 = format_531_Mercoledi_05_30_13_06shp_81.readFeatures(json_531_Mercoledi_05_30_13_06shp_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Mercoledi_05_30_13_06shp_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Mercoledi_05_30_13_06shp_81.addFeatures(features_531_Mercoledi_05_30_13_06shp_81);
var lyr_531_Mercoledi_05_30_13_06shp_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Mercoledi_05_30_13_06shp_81, 
                style: style_531_Mercoledi_05_30_13_06shp_81,
                popuplayertitle: '531_Mercoledi_05_30_13_06.shp',
                interactive: true,
    title: '531_Mercoledi_05_30_13_06.shp<br />\
    <img src="styles/legend/531_Mercoledi_05_30_13_06shp_81_0.png" /> 1<br />' });
var format_158_Mercoledi_05_30_13_06shp_82 = new ol.format.GeoJSON();
var features_158_Mercoledi_05_30_13_06shp_82 = format_158_Mercoledi_05_30_13_06shp_82.readFeatures(json_158_Mercoledi_05_30_13_06shp_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Mercoledi_05_30_13_06shp_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Mercoledi_05_30_13_06shp_82.addFeatures(features_158_Mercoledi_05_30_13_06shp_82);
var lyr_158_Mercoledi_05_30_13_06shp_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Mercoledi_05_30_13_06shp_82, 
                style: style_158_Mercoledi_05_30_13_06shp_82,
                popuplayertitle: '158_Mercoledi_05_30_13_06.shp',
                interactive: true,
    title: '158_Mercoledi_05_30_13_06.shp<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06shp_82_0.png" /> 1<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06shp_82_1.png" /> 2<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06shp_82_2.png" /> 3<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06shp_82_3.png" /> 4<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06shp_82_4.png" /> 5<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06shp_82_5.png" /> 6<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06shp_82_6.png" /> 7<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06shp_82_7.png" /> 8<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06shp_82_8.png" /> 9<br />' });
var format_156_Mercoledi_13_07_20_43shp_83 = new ol.format.GeoJSON();
var features_156_Mercoledi_13_07_20_43shp_83 = format_156_Mercoledi_13_07_20_43shp_83.readFeatures(json_156_Mercoledi_13_07_20_43shp_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Mercoledi_13_07_20_43shp_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Mercoledi_13_07_20_43shp_83.addFeatures(features_156_Mercoledi_13_07_20_43shp_83);
var lyr_156_Mercoledi_13_07_20_43shp_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Mercoledi_13_07_20_43shp_83, 
                style: style_156_Mercoledi_13_07_20_43shp_83,
                popuplayertitle: '156_Mercoledi_13_07_20_43.shp',
                interactive: true,
    title: '156_Mercoledi_13_07_20_43.shp<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_0.png" /> 1<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_1.png" /> 2<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_2.png" /> 3<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_3.png" /> 4<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_4.png" /> 5<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_5.png" /> 6<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_6.png" /> 7<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_7.png" /> 8<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_8.png" /> 9<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_9.png" /> 10<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_10.png" /> 11<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_11.png" /> 12<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_12.png" /> 13<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_13.png" /> 14<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_14.png" /> 15<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_15.png" /> 16<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_16.png" /> 17<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_17.png" /> 18<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43shp_83_18.png" /> 19<br />' });
var format_154_Mercoledi_21_50_05_26shp_84 = new ol.format.GeoJSON();
var features_154_Mercoledi_21_50_05_26shp_84 = format_154_Mercoledi_21_50_05_26shp_84.readFeatures(json_154_Mercoledi_21_50_05_26shp_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Mercoledi_21_50_05_26shp_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Mercoledi_21_50_05_26shp_84.addFeatures(features_154_Mercoledi_21_50_05_26shp_84);
var lyr_154_Mercoledi_21_50_05_26shp_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Mercoledi_21_50_05_26shp_84, 
                style: style_154_Mercoledi_21_50_05_26shp_84,
                popuplayertitle: '154_Mercoledi_21_50_05_26.shp',
                interactive: true,
    title: '154_Mercoledi_21_50_05_26.shp<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_0.png" /> 1<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_1.png" /> 2<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_2.png" /> 3<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_3.png" /> 4<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_4.png" /> 5<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_5.png" /> 6<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_6.png" /> 7<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_7.png" /> 8<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_8.png" /> 9<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_9.png" /> 10<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_10.png" /> 11<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_11.png" /> 12<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_12.png" /> 13<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_13.png" /> 14<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_14.png" /> 15<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_15.png" /> 16<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_16.png" /> 17<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_17.png" /> 18<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_18.png" /> 19<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_19.png" /> 20<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_20.png" /> 21<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_21.png" /> 22<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_22.png" /> 23<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26shp_84_23.png" /> 24<br />' });
var format_79_Martedi_21_50_05_26shp_85 = new ol.format.GeoJSON();
var features_79_Martedi_21_50_05_26shp_85 = format_79_Martedi_21_50_05_26shp_85.readFeatures(json_79_Martedi_21_50_05_26shp_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Martedi_21_50_05_26shp_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Martedi_21_50_05_26shp_85.addFeatures(features_79_Martedi_21_50_05_26shp_85);
var lyr_79_Martedi_21_50_05_26shp_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Martedi_21_50_05_26shp_85, 
                style: style_79_Martedi_21_50_05_26shp_85,
                popuplayertitle: '79_Martedi_21_50_05_26.shp',
                interactive: true,
    title: '79_Martedi_21_50_05_26.shp<br />\
    <img src="styles/legend/79_Martedi_21_50_05_26shp_85_0.png" /> 1<br />\
    <img src="styles/legend/79_Martedi_21_50_05_26shp_85_1.png" /> 2<br />' });
var format_77_Martedi_21_50_05_26shp_86 = new ol.format.GeoJSON();
var features_77_Martedi_21_50_05_26shp_86 = format_77_Martedi_21_50_05_26shp_86.readFeatures(json_77_Martedi_21_50_05_26shp_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Martedi_21_50_05_26shp_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Martedi_21_50_05_26shp_86.addFeatures(features_77_Martedi_21_50_05_26shp_86);
var lyr_77_Martedi_21_50_05_26shp_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Martedi_21_50_05_26shp_86, 
                style: style_77_Martedi_21_50_05_26shp_86,
                popuplayertitle: '77_Martedi_21_50_05_26.shp',
                interactive: true,
    title: '77_Martedi_21_50_05_26.shp<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26shp_86_0.png" /> 1<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26shp_86_1.png" /> 2<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26shp_86_2.png" /> 3<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26shp_86_3.png" /> 4<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26shp_86_4.png" /> 5<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26shp_86_5.png" /> 6<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26shp_86_6.png" /> 7<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26shp_86_7.png" /> 8<br />' });
var format_76_Martedi_19_00_02_36shp_87 = new ol.format.GeoJSON();
var features_76_Martedi_19_00_02_36shp_87 = format_76_Martedi_19_00_02_36shp_87.readFeatures(json_76_Martedi_19_00_02_36shp_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Martedi_19_00_02_36shp_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Martedi_19_00_02_36shp_87.addFeatures(features_76_Martedi_19_00_02_36shp_87);
var lyr_76_Martedi_19_00_02_36shp_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Martedi_19_00_02_36shp_87, 
                style: style_76_Martedi_19_00_02_36shp_87,
                popuplayertitle: '76_Martedi_19_00_02_36.shp',
                interactive: true,
    title: '76_Martedi_19_00_02_36.shp<br />\
    <img src="styles/legend/76_Martedi_19_00_02_36shp_87_0.png" /> 1<br />' });
var format_75_Martedi_13_07_20_43shp_88 = new ol.format.GeoJSON();
var features_75_Martedi_13_07_20_43shp_88 = format_75_Martedi_13_07_20_43shp_88.readFeatures(json_75_Martedi_13_07_20_43shp_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Martedi_13_07_20_43shp_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Martedi_13_07_20_43shp_88.addFeatures(features_75_Martedi_13_07_20_43shp_88);
var lyr_75_Martedi_13_07_20_43shp_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Martedi_13_07_20_43shp_88, 
                style: style_75_Martedi_13_07_20_43shp_88,
                popuplayertitle: '75_Martedi_13_07_20_43.shp',
                interactive: true,
    title: '75_Martedi_13_07_20_43.shp<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43shp_88_0.png" /> 1<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43shp_88_1.png" /> 2<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43shp_88_2.png" /> 3<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43shp_88_3.png" /> 4<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43shp_88_4.png" /> 5<br />' });
var format_73_Martedi_05_30_13_06shp_89 = new ol.format.GeoJSON();
var features_73_Martedi_05_30_13_06shp_89 = format_73_Martedi_05_30_13_06shp_89.readFeatures(json_73_Martedi_05_30_13_06shp_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Martedi_05_30_13_06shp_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Martedi_05_30_13_06shp_89.addFeatures(features_73_Martedi_05_30_13_06shp_89);
var lyr_73_Martedi_05_30_13_06shp_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Martedi_05_30_13_06shp_89, 
                style: style_73_Martedi_05_30_13_06shp_89,
                popuplayertitle: '73_Martedi_05_30_13_06.shp',
                interactive: true,
    title: '73_Martedi_05_30_13_06.shp<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06shp_89_0.png" /> 1<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06shp_89_1.png" /> 2<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06shp_89_2.png" /> 3<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06shp_89_3.png" /> 4<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06shp_89_4.png" /> 5<br />' });
var format_72_Martedi_13_07_20_43shp_90 = new ol.format.GeoJSON();
var features_72_Martedi_13_07_20_43shp_90 = format_72_Martedi_13_07_20_43shp_90.readFeatures(json_72_Martedi_13_07_20_43shp_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Martedi_13_07_20_43shp_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Martedi_13_07_20_43shp_90.addFeatures(features_72_Martedi_13_07_20_43shp_90);
var lyr_72_Martedi_13_07_20_43shp_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Martedi_13_07_20_43shp_90, 
                style: style_72_Martedi_13_07_20_43shp_90,
                popuplayertitle: '72_Martedi_13_07_20_43.shp',
                interactive: true,
    title: '72_Martedi_13_07_20_43.shp<br />\
    <img src="styles/legend/72_Martedi_13_07_20_43shp_90_0.png" /> 1<br />\
    <img src="styles/legend/72_Martedi_13_07_20_43shp_90_1.png" /> 2<br />' });
var format_71_Martedi_05_30_13_06shp_91 = new ol.format.GeoJSON();
var features_71_Martedi_05_30_13_06shp_91 = format_71_Martedi_05_30_13_06shp_91.readFeatures(json_71_Martedi_05_30_13_06shp_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Martedi_05_30_13_06shp_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Martedi_05_30_13_06shp_91.addFeatures(features_71_Martedi_05_30_13_06shp_91);
var lyr_71_Martedi_05_30_13_06shp_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Martedi_05_30_13_06shp_91, 
                style: style_71_Martedi_05_30_13_06shp_91,
                popuplayertitle: '71_Martedi_05_30_13_06.shp',
                interactive: true,
    title: '71_Martedi_05_30_13_06.shp<br />\
    <img src="styles/legend/71_Martedi_05_30_13_06shp_91_0.png" /> 1<br />\
    <img src="styles/legend/71_Martedi_05_30_13_06shp_91_1.png" /> 2<br />\
    <img src="styles/legend/71_Martedi_05_30_13_06shp_91_2.png" /> 3<br />' });
var format_70_Martedi_09_30_15_50shp_92 = new ol.format.GeoJSON();
var features_70_Martedi_09_30_15_50shp_92 = format_70_Martedi_09_30_15_50shp_92.readFeatures(json_70_Martedi_09_30_15_50shp_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Martedi_09_30_15_50shp_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Martedi_09_30_15_50shp_92.addFeatures(features_70_Martedi_09_30_15_50shp_92);
var lyr_70_Martedi_09_30_15_50shp_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Martedi_09_30_15_50shp_92, 
                style: style_70_Martedi_09_30_15_50shp_92,
                popuplayertitle: '70_Martedi_09_30_15_50.shp',
                interactive: true,
    title: '70_Martedi_09_30_15_50.shp<br />\
    <img src="styles/legend/70_Martedi_09_30_15_50shp_92_0.png" /> 1<br />' });
var format_543_Martedi_19_00_02_36shp_93 = new ol.format.GeoJSON();
var features_543_Martedi_19_00_02_36shp_93 = format_543_Martedi_19_00_02_36shp_93.readFeatures(json_543_Martedi_19_00_02_36shp_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Martedi_19_00_02_36shp_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Martedi_19_00_02_36shp_93.addFeatures(features_543_Martedi_19_00_02_36shp_93);
var lyr_543_Martedi_19_00_02_36shp_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Martedi_19_00_02_36shp_93, 
                style: style_543_Martedi_19_00_02_36shp_93,
                popuplayertitle: '543_Martedi_19_00_02_36.shp',
                interactive: true,
    title: '543_Martedi_19_00_02_36.shp<br />\
    <img src="styles/legend/543_Martedi_19_00_02_36shp_93_0.png" /> 1<br />' });
var format_542_Martedi_13_07_20_43shp_94 = new ol.format.GeoJSON();
var features_542_Martedi_13_07_20_43shp_94 = format_542_Martedi_13_07_20_43shp_94.readFeatures(json_542_Martedi_13_07_20_43shp_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Martedi_13_07_20_43shp_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Martedi_13_07_20_43shp_94.addFeatures(features_542_Martedi_13_07_20_43shp_94);
var lyr_542_Martedi_13_07_20_43shp_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Martedi_13_07_20_43shp_94, 
                style: style_542_Martedi_13_07_20_43shp_94,
                popuplayertitle: '542_Martedi_13_07_20_43.shp',
                interactive: true,
    title: '542_Martedi_13_07_20_43.shp<br />\
    <img src="styles/legend/542_Martedi_13_07_20_43shp_94_0.png" /> 1<br />\
    <img src="styles/legend/542_Martedi_13_07_20_43shp_94_1.png" /> 2<br />' });
var format_541_Martedi_05_30_13_06shp_95 = new ol.format.GeoJSON();
var features_541_Martedi_05_30_13_06shp_95 = format_541_Martedi_05_30_13_06shp_95.readFeatures(json_541_Martedi_05_30_13_06shp_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Martedi_05_30_13_06shp_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Martedi_05_30_13_06shp_95.addFeatures(features_541_Martedi_05_30_13_06shp_95);
var lyr_541_Martedi_05_30_13_06shp_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Martedi_05_30_13_06shp_95, 
                style: style_541_Martedi_05_30_13_06shp_95,
                popuplayertitle: '541_Martedi_05_30_13_06.shp',
                interactive: true,
    title: '541_Martedi_05_30_13_06.shp<br />\
    <img src="styles/legend/541_Martedi_05_30_13_06shp_95_0.png" /> 1<br />\
    <img src="styles/legend/541_Martedi_05_30_13_06shp_95_1.png" /> 2<br />\
    <img src="styles/legend/541_Martedi_05_30_13_06shp_95_2.png" /> 3<br />\
    <img src="styles/legend/541_Martedi_05_30_13_06shp_95_3.png" /> 4<br />' });
var format_540_Martedi_21_50_05_26shp_96 = new ol.format.GeoJSON();
var features_540_Martedi_21_50_05_26shp_96 = format_540_Martedi_21_50_05_26shp_96.readFeatures(json_540_Martedi_21_50_05_26shp_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Martedi_21_50_05_26shp_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Martedi_21_50_05_26shp_96.addFeatures(features_540_Martedi_21_50_05_26shp_96);
var lyr_540_Martedi_21_50_05_26shp_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Martedi_21_50_05_26shp_96, 
                style: style_540_Martedi_21_50_05_26shp_96,
                popuplayertitle: '540_Martedi_21_50_05_26.shp',
                interactive: true,
    title: '540_Martedi_21_50_05_26.shp<br />\
    <img src="styles/legend/540_Martedi_21_50_05_26shp_96_0.png" /> 1<br />' });
var format_534_Martedi_21_50_05_26shp_97 = new ol.format.GeoJSON();
var features_534_Martedi_21_50_05_26shp_97 = format_534_Martedi_21_50_05_26shp_97.readFeatures(json_534_Martedi_21_50_05_26shp_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Martedi_21_50_05_26shp_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Martedi_21_50_05_26shp_97.addFeatures(features_534_Martedi_21_50_05_26shp_97);
var lyr_534_Martedi_21_50_05_26shp_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Martedi_21_50_05_26shp_97, 
                style: style_534_Martedi_21_50_05_26shp_97,
                popuplayertitle: '534_Martedi_21_50_05_26.shp',
                interactive: true,
    title: '534_Martedi_21_50_05_26.shp<br />\
    <img src="styles/legend/534_Martedi_21_50_05_26shp_97_0.png" /> 1<br />' });
var format_531_Martedi_05_30_13_06shp_98 = new ol.format.GeoJSON();
var features_531_Martedi_05_30_13_06shp_98 = format_531_Martedi_05_30_13_06shp_98.readFeatures(json_531_Martedi_05_30_13_06shp_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Martedi_05_30_13_06shp_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Martedi_05_30_13_06shp_98.addFeatures(features_531_Martedi_05_30_13_06shp_98);
var lyr_531_Martedi_05_30_13_06shp_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Martedi_05_30_13_06shp_98, 
                style: style_531_Martedi_05_30_13_06shp_98,
                popuplayertitle: '531_Martedi_05_30_13_06.shp',
                interactive: true,
    title: '531_Martedi_05_30_13_06.shp<br />\
    <img src="styles/legend/531_Martedi_05_30_13_06shp_98_0.png" /> 1<br />' });
var format_158_Martedi_05_30_13_06shp_99 = new ol.format.GeoJSON();
var features_158_Martedi_05_30_13_06shp_99 = format_158_Martedi_05_30_13_06shp_99.readFeatures(json_158_Martedi_05_30_13_06shp_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Martedi_05_30_13_06shp_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Martedi_05_30_13_06shp_99.addFeatures(features_158_Martedi_05_30_13_06shp_99);
var lyr_158_Martedi_05_30_13_06shp_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Martedi_05_30_13_06shp_99, 
                style: style_158_Martedi_05_30_13_06shp_99,
                popuplayertitle: '158_Martedi_05_30_13_06.shp',
                interactive: true,
    title: '158_Martedi_05_30_13_06.shp<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06shp_99_0.png" /> 1<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06shp_99_1.png" /> 2<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06shp_99_2.png" /> 3<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06shp_99_3.png" /> 4<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06shp_99_4.png" /> 5<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06shp_99_5.png" /> 6<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06shp_99_6.png" /> 7<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06shp_99_7.png" /> 8<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06shp_99_8.png" /> 9<br />' });
var format_156_Martedi_13_07_20_43shp_100 = new ol.format.GeoJSON();
var features_156_Martedi_13_07_20_43shp_100 = format_156_Martedi_13_07_20_43shp_100.readFeatures(json_156_Martedi_13_07_20_43shp_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Martedi_13_07_20_43shp_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Martedi_13_07_20_43shp_100.addFeatures(features_156_Martedi_13_07_20_43shp_100);
var lyr_156_Martedi_13_07_20_43shp_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Martedi_13_07_20_43shp_100, 
                style: style_156_Martedi_13_07_20_43shp_100,
                popuplayertitle: '156_Martedi_13_07_20_43.shp',
                interactive: true,
    title: '156_Martedi_13_07_20_43.shp<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_0.png" /> 1<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_1.png" /> 2<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_2.png" /> 3<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_3.png" /> 4<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_4.png" /> 5<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_5.png" /> 6<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_6.png" /> 7<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_7.png" /> 8<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_8.png" /> 9<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_9.png" /> 10<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_10.png" /> 11<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_11.png" /> 12<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_12.png" /> 13<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_13.png" /> 14<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_14.png" /> 15<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_15.png" /> 16<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_16.png" /> 17<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_17.png" /> 18<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43shp_100_18.png" /> 19<br />' });
var format_154_Martedi_21_50_05_26shp_101 = new ol.format.GeoJSON();
var features_154_Martedi_21_50_05_26shp_101 = format_154_Martedi_21_50_05_26shp_101.readFeatures(json_154_Martedi_21_50_05_26shp_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Martedi_21_50_05_26shp_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Martedi_21_50_05_26shp_101.addFeatures(features_154_Martedi_21_50_05_26shp_101);
var lyr_154_Martedi_21_50_05_26shp_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Martedi_21_50_05_26shp_101, 
                style: style_154_Martedi_21_50_05_26shp_101,
                popuplayertitle: '154_Martedi_21_50_05_26.shp',
                interactive: true,
    title: '154_Martedi_21_50_05_26.shp<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_0.png" /> 1<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_1.png" /> 2<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_2.png" /> 3<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_3.png" /> 4<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_4.png" /> 5<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_5.png" /> 6<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_6.png" /> 7<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_7.png" /> 8<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_8.png" /> 9<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_9.png" /> 10<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_10.png" /> 11<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_11.png" /> 12<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_12.png" /> 13<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_13.png" /> 14<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_14.png" /> 15<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_15.png" /> 16<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_16.png" /> 17<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_17.png" /> 18<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_18.png" /> 19<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_19.png" /> 20<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_20.png" /> 21<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_21.png" /> 22<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_22.png" /> 23<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26shp_101_23.png" /> 24<br />' });
var format_79_Lunedi_21_50_05_26shp_102 = new ol.format.GeoJSON();
var features_79_Lunedi_21_50_05_26shp_102 = format_79_Lunedi_21_50_05_26shp_102.readFeatures(json_79_Lunedi_21_50_05_26shp_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Lunedi_21_50_05_26shp_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Lunedi_21_50_05_26shp_102.addFeatures(features_79_Lunedi_21_50_05_26shp_102);
var lyr_79_Lunedi_21_50_05_26shp_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Lunedi_21_50_05_26shp_102, 
                style: style_79_Lunedi_21_50_05_26shp_102,
                popuplayertitle: '79_Lunedi_21_50_05_26.shp',
                interactive: true,
    title: '79_Lunedi_21_50_05_26.shp<br />\
    <img src="styles/legend/79_Lunedi_21_50_05_26shp_102_0.png" /> 1<br />\
    <img src="styles/legend/79_Lunedi_21_50_05_26shp_102_1.png" /> 2<br />' });
var format_77_Lunedi_21_50_05_26shp_103 = new ol.format.GeoJSON();
var features_77_Lunedi_21_50_05_26shp_103 = format_77_Lunedi_21_50_05_26shp_103.readFeatures(json_77_Lunedi_21_50_05_26shp_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Lunedi_21_50_05_26shp_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Lunedi_21_50_05_26shp_103.addFeatures(features_77_Lunedi_21_50_05_26shp_103);
var lyr_77_Lunedi_21_50_05_26shp_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Lunedi_21_50_05_26shp_103, 
                style: style_77_Lunedi_21_50_05_26shp_103,
                popuplayertitle: '77_Lunedi_21_50_05_26.shp',
                interactive: true,
    title: '77_Lunedi_21_50_05_26.shp<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26shp_103_0.png" /> 1<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26shp_103_1.png" /> 2<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26shp_103_2.png" /> 3<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26shp_103_3.png" /> 4<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26shp_103_4.png" /> 5<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26shp_103_5.png" /> 6<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26shp_103_6.png" /> 7<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26shp_103_7.png" /> 8<br />' });
var format_76_Lunedi_19_00_02_36shp_104 = new ol.format.GeoJSON();
var features_76_Lunedi_19_00_02_36shp_104 = format_76_Lunedi_19_00_02_36shp_104.readFeatures(json_76_Lunedi_19_00_02_36shp_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Lunedi_19_00_02_36shp_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Lunedi_19_00_02_36shp_104.addFeatures(features_76_Lunedi_19_00_02_36shp_104);
var lyr_76_Lunedi_19_00_02_36shp_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Lunedi_19_00_02_36shp_104, 
                style: style_76_Lunedi_19_00_02_36shp_104,
                popuplayertitle: '76_Lunedi_19_00_02_36.shp',
                interactive: true,
    title: '76_Lunedi_19_00_02_36.shp<br />\
    <img src="styles/legend/76_Lunedi_19_00_02_36shp_104_0.png" /> 1<br />' });
var format_75_Lunedi_13_07_20_43shp_105 = new ol.format.GeoJSON();
var features_75_Lunedi_13_07_20_43shp_105 = format_75_Lunedi_13_07_20_43shp_105.readFeatures(json_75_Lunedi_13_07_20_43shp_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Lunedi_13_07_20_43shp_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Lunedi_13_07_20_43shp_105.addFeatures(features_75_Lunedi_13_07_20_43shp_105);
var lyr_75_Lunedi_13_07_20_43shp_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Lunedi_13_07_20_43shp_105, 
                style: style_75_Lunedi_13_07_20_43shp_105,
                popuplayertitle: '75_Lunedi_13_07_20_43.shp',
                interactive: true,
    title: '75_Lunedi_13_07_20_43.shp<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43shp_105_0.png" /> 1<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43shp_105_1.png" /> 2<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43shp_105_2.png" /> 3<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43shp_105_3.png" /> 4<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43shp_105_4.png" /> 5<br />' });
var format_73_Lunedi_05_30_13_06shp_106 = new ol.format.GeoJSON();
var features_73_Lunedi_05_30_13_06shp_106 = format_73_Lunedi_05_30_13_06shp_106.readFeatures(json_73_Lunedi_05_30_13_06shp_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Lunedi_05_30_13_06shp_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Lunedi_05_30_13_06shp_106.addFeatures(features_73_Lunedi_05_30_13_06shp_106);
var lyr_73_Lunedi_05_30_13_06shp_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Lunedi_05_30_13_06shp_106, 
                style: style_73_Lunedi_05_30_13_06shp_106,
                popuplayertitle: '73_Lunedi_05_30_13_06.shp',
                interactive: true,
    title: '73_Lunedi_05_30_13_06.shp<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06shp_106_0.png" /> 1<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06shp_106_1.png" /> 2<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06shp_106_2.png" /> 3<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06shp_106_3.png" /> 4<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06shp_106_4.png" /> 5<br />' });
var format_72_Lunedi_13_07_20_43shp_107 = new ol.format.GeoJSON();
var features_72_Lunedi_13_07_20_43shp_107 = format_72_Lunedi_13_07_20_43shp_107.readFeatures(json_72_Lunedi_13_07_20_43shp_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Lunedi_13_07_20_43shp_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Lunedi_13_07_20_43shp_107.addFeatures(features_72_Lunedi_13_07_20_43shp_107);
var lyr_72_Lunedi_13_07_20_43shp_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Lunedi_13_07_20_43shp_107, 
                style: style_72_Lunedi_13_07_20_43shp_107,
                popuplayertitle: '72_Lunedi_13_07_20_43.shp',
                interactive: true,
    title: '72_Lunedi_13_07_20_43.shp<br />\
    <img src="styles/legend/72_Lunedi_13_07_20_43shp_107_0.png" /> 1<br />\
    <img src="styles/legend/72_Lunedi_13_07_20_43shp_107_1.png" /> 2<br />' });
var format_71_Lunedi_05_30_13_06shp_108 = new ol.format.GeoJSON();
var features_71_Lunedi_05_30_13_06shp_108 = format_71_Lunedi_05_30_13_06shp_108.readFeatures(json_71_Lunedi_05_30_13_06shp_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Lunedi_05_30_13_06shp_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Lunedi_05_30_13_06shp_108.addFeatures(features_71_Lunedi_05_30_13_06shp_108);
var lyr_71_Lunedi_05_30_13_06shp_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Lunedi_05_30_13_06shp_108, 
                style: style_71_Lunedi_05_30_13_06shp_108,
                popuplayertitle: '71_Lunedi_05_30_13_06.shp',
                interactive: true,
    title: '71_Lunedi_05_30_13_06.shp<br />\
    <img src="styles/legend/71_Lunedi_05_30_13_06shp_108_0.png" /> 1<br />\
    <img src="styles/legend/71_Lunedi_05_30_13_06shp_108_1.png" /> 2<br />\
    <img src="styles/legend/71_Lunedi_05_30_13_06shp_108_2.png" /> 3<br />' });
var format_70_Lunedi_09_30_15_50shp_109 = new ol.format.GeoJSON();
var features_70_Lunedi_09_30_15_50shp_109 = format_70_Lunedi_09_30_15_50shp_109.readFeatures(json_70_Lunedi_09_30_15_50shp_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Lunedi_09_30_15_50shp_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Lunedi_09_30_15_50shp_109.addFeatures(features_70_Lunedi_09_30_15_50shp_109);
var lyr_70_Lunedi_09_30_15_50shp_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Lunedi_09_30_15_50shp_109, 
                style: style_70_Lunedi_09_30_15_50shp_109,
                popuplayertitle: '70_Lunedi_09_30_15_50.shp',
                interactive: true,
    title: '70_Lunedi_09_30_15_50.shp<br />\
    <img src="styles/legend/70_Lunedi_09_30_15_50shp_109_0.png" /> 1<br />' });
var format_543_Lunedi_19_00_02_36shp_110 = new ol.format.GeoJSON();
var features_543_Lunedi_19_00_02_36shp_110 = format_543_Lunedi_19_00_02_36shp_110.readFeatures(json_543_Lunedi_19_00_02_36shp_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Lunedi_19_00_02_36shp_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Lunedi_19_00_02_36shp_110.addFeatures(features_543_Lunedi_19_00_02_36shp_110);
var lyr_543_Lunedi_19_00_02_36shp_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Lunedi_19_00_02_36shp_110, 
                style: style_543_Lunedi_19_00_02_36shp_110,
                popuplayertitle: '543_Lunedi_19_00_02_36.shp',
                interactive: true,
    title: '543_Lunedi_19_00_02_36.shp<br />\
    <img src="styles/legend/543_Lunedi_19_00_02_36shp_110_0.png" /> 1<br />' });
var format_542_Lunedi_13_07_20_43shp_111 = new ol.format.GeoJSON();
var features_542_Lunedi_13_07_20_43shp_111 = format_542_Lunedi_13_07_20_43shp_111.readFeatures(json_542_Lunedi_13_07_20_43shp_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Lunedi_13_07_20_43shp_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Lunedi_13_07_20_43shp_111.addFeatures(features_542_Lunedi_13_07_20_43shp_111);
var lyr_542_Lunedi_13_07_20_43shp_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Lunedi_13_07_20_43shp_111, 
                style: style_542_Lunedi_13_07_20_43shp_111,
                popuplayertitle: '542_Lunedi_13_07_20_43.shp',
                interactive: true,
    title: '542_Lunedi_13_07_20_43.shp<br />\
    <img src="styles/legend/542_Lunedi_13_07_20_43shp_111_0.png" /> 1<br />\
    <img src="styles/legend/542_Lunedi_13_07_20_43shp_111_1.png" /> 2<br />' });
var format_541_Lunedi_05_30_13_06shp_112 = new ol.format.GeoJSON();
var features_541_Lunedi_05_30_13_06shp_112 = format_541_Lunedi_05_30_13_06shp_112.readFeatures(json_541_Lunedi_05_30_13_06shp_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Lunedi_05_30_13_06shp_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Lunedi_05_30_13_06shp_112.addFeatures(features_541_Lunedi_05_30_13_06shp_112);
var lyr_541_Lunedi_05_30_13_06shp_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Lunedi_05_30_13_06shp_112, 
                style: style_541_Lunedi_05_30_13_06shp_112,
                popuplayertitle: '541_Lunedi_05_30_13_06.shp',
                interactive: true,
    title: '541_Lunedi_05_30_13_06.shp<br />\
    <img src="styles/legend/541_Lunedi_05_30_13_06shp_112_0.png" /> 1<br />\
    <img src="styles/legend/541_Lunedi_05_30_13_06shp_112_1.png" /> 2<br />\
    <img src="styles/legend/541_Lunedi_05_30_13_06shp_112_2.png" /> 3<br />\
    <img src="styles/legend/541_Lunedi_05_30_13_06shp_112_3.png" /> 4<br />' });
var format_540_Lunedi_21_50_05_26shp_113 = new ol.format.GeoJSON();
var features_540_Lunedi_21_50_05_26shp_113 = format_540_Lunedi_21_50_05_26shp_113.readFeatures(json_540_Lunedi_21_50_05_26shp_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Lunedi_21_50_05_26shp_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Lunedi_21_50_05_26shp_113.addFeatures(features_540_Lunedi_21_50_05_26shp_113);
var lyr_540_Lunedi_21_50_05_26shp_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Lunedi_21_50_05_26shp_113, 
                style: style_540_Lunedi_21_50_05_26shp_113,
                popuplayertitle: '540_Lunedi_21_50_05_26.shp',
                interactive: true,
    title: '540_Lunedi_21_50_05_26.shp<br />\
    <img src="styles/legend/540_Lunedi_21_50_05_26shp_113_0.png" /> 1<br />' });
var format_534_Lunedi_21_50_05_26shp_114 = new ol.format.GeoJSON();
var features_534_Lunedi_21_50_05_26shp_114 = format_534_Lunedi_21_50_05_26shp_114.readFeatures(json_534_Lunedi_21_50_05_26shp_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Lunedi_21_50_05_26shp_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Lunedi_21_50_05_26shp_114.addFeatures(features_534_Lunedi_21_50_05_26shp_114);
var lyr_534_Lunedi_21_50_05_26shp_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Lunedi_21_50_05_26shp_114, 
                style: style_534_Lunedi_21_50_05_26shp_114,
                popuplayertitle: '534_Lunedi_21_50_05_26.shp',
                interactive: true,
    title: '534_Lunedi_21_50_05_26.shp<br />\
    <img src="styles/legend/534_Lunedi_21_50_05_26shp_114_0.png" /> 1<br />' });
var format_531_Lunedi_05_30_13_06shp_115 = new ol.format.GeoJSON();
var features_531_Lunedi_05_30_13_06shp_115 = format_531_Lunedi_05_30_13_06shp_115.readFeatures(json_531_Lunedi_05_30_13_06shp_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Lunedi_05_30_13_06shp_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Lunedi_05_30_13_06shp_115.addFeatures(features_531_Lunedi_05_30_13_06shp_115);
var lyr_531_Lunedi_05_30_13_06shp_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Lunedi_05_30_13_06shp_115, 
                style: style_531_Lunedi_05_30_13_06shp_115,
                popuplayertitle: '531_Lunedi_05_30_13_06.shp',
                interactive: true,
    title: '531_Lunedi_05_30_13_06.shp<br />\
    <img src="styles/legend/531_Lunedi_05_30_13_06shp_115_0.png" /> 1<br />' });
var format_158_Lunedi_05_30_13_06shp_116 = new ol.format.GeoJSON();
var features_158_Lunedi_05_30_13_06shp_116 = format_158_Lunedi_05_30_13_06shp_116.readFeatures(json_158_Lunedi_05_30_13_06shp_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Lunedi_05_30_13_06shp_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Lunedi_05_30_13_06shp_116.addFeatures(features_158_Lunedi_05_30_13_06shp_116);
var lyr_158_Lunedi_05_30_13_06shp_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Lunedi_05_30_13_06shp_116, 
                style: style_158_Lunedi_05_30_13_06shp_116,
                popuplayertitle: '158_Lunedi_05_30_13_06.shp',
                interactive: true,
    title: '158_Lunedi_05_30_13_06.shp<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06shp_116_0.png" /> 1<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06shp_116_1.png" /> 2<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06shp_116_2.png" /> 3<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06shp_116_3.png" /> 4<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06shp_116_4.png" /> 5<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06shp_116_5.png" /> 6<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06shp_116_6.png" /> 7<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06shp_116_7.png" /> 8<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06shp_116_8.png" /> 9<br />' });
var format_156_Lunedi_13_07_20_43shp_117 = new ol.format.GeoJSON();
var features_156_Lunedi_13_07_20_43shp_117 = format_156_Lunedi_13_07_20_43shp_117.readFeatures(json_156_Lunedi_13_07_20_43shp_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Lunedi_13_07_20_43shp_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Lunedi_13_07_20_43shp_117.addFeatures(features_156_Lunedi_13_07_20_43shp_117);
var lyr_156_Lunedi_13_07_20_43shp_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Lunedi_13_07_20_43shp_117, 
                style: style_156_Lunedi_13_07_20_43shp_117,
                popuplayertitle: '156_Lunedi_13_07_20_43.shp',
                interactive: true,
    title: '156_Lunedi_13_07_20_43.shp<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_0.png" /> 1<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_1.png" /> 2<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_2.png" /> 3<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_3.png" /> 4<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_4.png" /> 5<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_5.png" /> 6<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_6.png" /> 7<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_7.png" /> 8<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_8.png" /> 9<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_9.png" /> 10<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_10.png" /> 11<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_11.png" /> 12<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_12.png" /> 13<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_13.png" /> 14<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_14.png" /> 15<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_15.png" /> 16<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_16.png" /> 17<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_17.png" /> 18<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43shp_117_18.png" /> 19<br />' });
var format_154_Lunedi_21_50_05_26shp_118 = new ol.format.GeoJSON();
var features_154_Lunedi_21_50_05_26shp_118 = format_154_Lunedi_21_50_05_26shp_118.readFeatures(json_154_Lunedi_21_50_05_26shp_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Lunedi_21_50_05_26shp_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Lunedi_21_50_05_26shp_118.addFeatures(features_154_Lunedi_21_50_05_26shp_118);
var lyr_154_Lunedi_21_50_05_26shp_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Lunedi_21_50_05_26shp_118, 
                style: style_154_Lunedi_21_50_05_26shp_118,
                popuplayertitle: '154_Lunedi_21_50_05_26.shp',
                interactive: true,
    title: '154_Lunedi_21_50_05_26.shp<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_0.png" /> 1<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_1.png" /> 2<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_2.png" /> 3<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_3.png" /> 4<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_4.png" /> 5<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_5.png" /> 6<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_6.png" /> 7<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_7.png" /> 8<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_8.png" /> 9<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_9.png" /> 10<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_10.png" /> 11<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_11.png" /> 12<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_12.png" /> 13<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_13.png" /> 14<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_14.png" /> 15<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_15.png" /> 16<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_16.png" /> 17<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_17.png" /> 18<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_18.png" /> 19<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_19.png" /> 20<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_20.png" /> 21<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_21.png" /> 22<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_22.png" /> 23<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26shp_118_23.png" /> 24<br />' });
var group_Lunedi = new ol.layer.Group({
                                layers: [lyr_79_Lunedi_21_50_05_26shp_102,lyr_77_Lunedi_21_50_05_26shp_103,lyr_76_Lunedi_19_00_02_36shp_104,lyr_75_Lunedi_13_07_20_43shp_105,lyr_73_Lunedi_05_30_13_06shp_106,lyr_72_Lunedi_13_07_20_43shp_107,lyr_71_Lunedi_05_30_13_06shp_108,lyr_70_Lunedi_09_30_15_50shp_109,lyr_543_Lunedi_19_00_02_36shp_110,lyr_542_Lunedi_13_07_20_43shp_111,lyr_541_Lunedi_05_30_13_06shp_112,lyr_540_Lunedi_21_50_05_26shp_113,lyr_534_Lunedi_21_50_05_26shp_114,lyr_531_Lunedi_05_30_13_06shp_115,lyr_158_Lunedi_05_30_13_06shp_116,lyr_156_Lunedi_13_07_20_43shp_117,lyr_154_Lunedi_21_50_05_26shp_118,],
                                fold: 'close',
                                title: 'Lunedi'});
var group_Martedi = new ol.layer.Group({
                                layers: [lyr_79_Martedi_21_50_05_26shp_85,lyr_77_Martedi_21_50_05_26shp_86,lyr_76_Martedi_19_00_02_36shp_87,lyr_75_Martedi_13_07_20_43shp_88,lyr_73_Martedi_05_30_13_06shp_89,lyr_72_Martedi_13_07_20_43shp_90,lyr_71_Martedi_05_30_13_06shp_91,lyr_70_Martedi_09_30_15_50shp_92,lyr_543_Martedi_19_00_02_36shp_93,lyr_542_Martedi_13_07_20_43shp_94,lyr_541_Martedi_05_30_13_06shp_95,lyr_540_Martedi_21_50_05_26shp_96,lyr_534_Martedi_21_50_05_26shp_97,lyr_531_Martedi_05_30_13_06shp_98,lyr_158_Martedi_05_30_13_06shp_99,lyr_156_Martedi_13_07_20_43shp_100,lyr_154_Martedi_21_50_05_26shp_101,],
                                fold: 'close',
                                title: 'Martedi'});
var group_Mercoledi = new ol.layer.Group({
                                layers: [lyr_79_Mercoledi_21_50_05_26shp_68,lyr_77_Mercoledi_21_50_05_26shp_69,lyr_76_Mercoledi_19_00_02_36shp_70,lyr_75_Mercoledi_13_07_20_43shp_71,lyr_73_Mercoledi_05_30_13_06shp_72,lyr_72_Mercoledi_13_07_20_43shp_73,lyr_71_Mercoledi_05_30_13_06shp_74,lyr_70_Mercoledi_09_30_15_50shp_75,lyr_543_Mercoledi_19_00_02_36shp_76,lyr_542_Mercoledi_13_07_20_43shp_77,lyr_541_Mercoledi_05_30_13_06shp_78,lyr_540_Mercoledi_21_50_05_26shp_79,lyr_534_Mercoledi_21_50_05_26shp_80,lyr_531_Mercoledi_05_30_13_06shp_81,lyr_158_Mercoledi_05_30_13_06shp_82,lyr_156_Mercoledi_13_07_20_43shp_83,lyr_154_Mercoledi_21_50_05_26shp_84,],
                                fold: 'close',
                                title: 'Mercoledi'});
var group_Giovedi = new ol.layer.Group({
                                layers: [lyr_79_Giovedi_21_50_05_26shp_51,lyr_77_Giovedi_21_50_05_26shp_52,lyr_76_Giovedi_19_00_02_36shp_53,lyr_75_Giovedi_13_07_20_43shp_54,lyr_73_Giovedi_05_30_13_06shp_55,lyr_72_Giovedi_13_07_20_43shp_56,lyr_71_Giovedi_05_30_13_06shp_57,lyr_70_Giovedi_09_30_15_50shp_58,lyr_543_Giovedi_19_00_02_36shp_59,lyr_542_Giovedi_13_07_20_43shp_60,lyr_541_Giovedi_05_30_13_06shp_61,lyr_540_Giovedi_21_50_05_26shp_62,lyr_534_Giovedi_21_50_05_26shp_63,lyr_531_Giovedi_05_30_13_06shp_64,lyr_158_Giovedi_05_30_13_06shp_65,lyr_156_Giovedi_13_07_20_43shp_66,lyr_154_Giovedi_21_50_05_26shp_67,],
                                fold: 'close',
                                title: 'Giovedi'});
var group_Venerdi = new ol.layer.Group({
                                layers: [lyr_79_Venerdi_21_50_05_26shp_34,lyr_77_Venerdi_21_50_05_26shp_35,lyr_76_Venerdi_19_00_02_36shp_36,lyr_75_Venerdi_13_07_20_43shp_37,lyr_73_Venerdi_05_30_13_06shp_38,lyr_72_Venerdi_13_07_20_43shp_39,lyr_71_Venerdi_05_30_13_06shp_40,lyr_70_Venerdi_09_30_15_50shp_41,lyr_543_Venerdi_19_00_02_36shp_42,lyr_542_Venerdi_13_07_20_43shp_43,lyr_541_Venerdi_05_30_13_06shp_44,lyr_540_Venerdi_21_50_05_26shp_45,lyr_534_Venerdi_21_50_05_26shp_46,lyr_531_Venerdi_05_30_13_06shp_47,lyr_158_Venerdi_05_30_13_06shp_48,lyr_156_Venerdi_13_07_20_43shp_49,lyr_154_Venerdi_21_50_05_26shp_50,],
                                fold: 'close',
                                title: 'Venerdi'});
var group_Sabato = new ol.layer.Group({
                                layers: [lyr_79_Sabato_21_50_05_26shp_17,lyr_77_Sabato_21_50_05_26shp_18,lyr_76_Sabato_19_00_02_36shp_19,lyr_75_Sabato_13_07_20_43shp_20,lyr_73_Sabato_05_30_13_06shp_21,lyr_72_Sabato_13_07_20_43shp_22,lyr_71_Sabato_05_30_13_06shp_23,lyr_70_Sabato_09_30_15_50shp_24,lyr_543_Sabato_19_00_02_36shp_25,lyr_542_Sabato_13_07_20_43shp_26,lyr_541_Sabato_05_30_13_06shp_27,lyr_540_Sabato_21_50_05_26shp_28,lyr_534_Sabato_21_50_05_26shp_29,lyr_531_Sabato_05_30_13_06shp_30,lyr_158_Sabato_05_30_13_06shp_31,lyr_156_Sabato_13_07_20_43shp_32,lyr_154_Sabato_21_50_05_26shp_33,],
                                fold: 'close',
                                title: 'Sabato'});
var group_Domenica = new ol.layer.Group({
                                layers: [lyr_79_Domenica_21_50_05_26shp_1,lyr_77_Domenica_21_50_05_26shp_2,lyr_76_Domenica_19_00_02_36shp_3,lyr_75_Domenica_13_07_20_43shp_4,lyr_73_Domenica_05_30_13_06shp_5,lyr_72_Domenica_13_07_20_43shp_6,lyr_71_Domenica_05_30_13_06shp_7,lyr_543_Domenica_19_00_02_36shp_8,lyr_542_Domenica_13_07_20_43shp_9,lyr_541_Domenica_05_30_13_06shp_10,lyr_540_Domenica_21_50_05_26shp_11,lyr_534_Domenica_21_50_05_26shp_12,lyr_531_Domenica_05_30_13_06shp_13,lyr_158_Domenica_05_30_13_06shp_14,lyr_156_Domenica_13_07_20_43shp_15,lyr_154_Domenica_21_50_05_26shp_16,],
                                fold: 'close',
                                title: 'Domenica'});

lyr_Mappa_web_Fra_0.setVisible(true);lyr_79_Domenica_21_50_05_26shp_1.setVisible(true);lyr_77_Domenica_21_50_05_26shp_2.setVisible(true);lyr_76_Domenica_19_00_02_36shp_3.setVisible(true);lyr_75_Domenica_13_07_20_43shp_4.setVisible(true);lyr_73_Domenica_05_30_13_06shp_5.setVisible(true);lyr_72_Domenica_13_07_20_43shp_6.setVisible(true);lyr_71_Domenica_05_30_13_06shp_7.setVisible(true);lyr_543_Domenica_19_00_02_36shp_8.setVisible(true);lyr_542_Domenica_13_07_20_43shp_9.setVisible(true);lyr_541_Domenica_05_30_13_06shp_10.setVisible(true);lyr_540_Domenica_21_50_05_26shp_11.setVisible(true);lyr_534_Domenica_21_50_05_26shp_12.setVisible(true);lyr_531_Domenica_05_30_13_06shp_13.setVisible(true);lyr_158_Domenica_05_30_13_06shp_14.setVisible(true);lyr_156_Domenica_13_07_20_43shp_15.setVisible(true);lyr_154_Domenica_21_50_05_26shp_16.setVisible(true);lyr_79_Sabato_21_50_05_26shp_17.setVisible(true);lyr_77_Sabato_21_50_05_26shp_18.setVisible(true);lyr_76_Sabato_19_00_02_36shp_19.setVisible(true);lyr_75_Sabato_13_07_20_43shp_20.setVisible(true);lyr_73_Sabato_05_30_13_06shp_21.setVisible(true);lyr_72_Sabato_13_07_20_43shp_22.setVisible(true);lyr_71_Sabato_05_30_13_06shp_23.setVisible(true);lyr_70_Sabato_09_30_15_50shp_24.setVisible(true);lyr_543_Sabato_19_00_02_36shp_25.setVisible(true);lyr_542_Sabato_13_07_20_43shp_26.setVisible(true);lyr_541_Sabato_05_30_13_06shp_27.setVisible(true);lyr_540_Sabato_21_50_05_26shp_28.setVisible(true);lyr_534_Sabato_21_50_05_26shp_29.setVisible(true);lyr_531_Sabato_05_30_13_06shp_30.setVisible(true);lyr_158_Sabato_05_30_13_06shp_31.setVisible(true);lyr_156_Sabato_13_07_20_43shp_32.setVisible(true);lyr_154_Sabato_21_50_05_26shp_33.setVisible(true);lyr_79_Venerdi_21_50_05_26shp_34.setVisible(true);lyr_77_Venerdi_21_50_05_26shp_35.setVisible(true);lyr_76_Venerdi_19_00_02_36shp_36.setVisible(true);lyr_75_Venerdi_13_07_20_43shp_37.setVisible(true);lyr_73_Venerdi_05_30_13_06shp_38.setVisible(true);lyr_72_Venerdi_13_07_20_43shp_39.setVisible(true);lyr_71_Venerdi_05_30_13_06shp_40.setVisible(true);lyr_70_Venerdi_09_30_15_50shp_41.setVisible(true);lyr_543_Venerdi_19_00_02_36shp_42.setVisible(true);lyr_542_Venerdi_13_07_20_43shp_43.setVisible(true);lyr_541_Venerdi_05_30_13_06shp_44.setVisible(true);lyr_540_Venerdi_21_50_05_26shp_45.setVisible(true);lyr_534_Venerdi_21_50_05_26shp_46.setVisible(true);lyr_531_Venerdi_05_30_13_06shp_47.setVisible(true);lyr_158_Venerdi_05_30_13_06shp_48.setVisible(true);lyr_156_Venerdi_13_07_20_43shp_49.setVisible(true);lyr_154_Venerdi_21_50_05_26shp_50.setVisible(true);lyr_79_Giovedi_21_50_05_26shp_51.setVisible(true);lyr_77_Giovedi_21_50_05_26shp_52.setVisible(true);lyr_76_Giovedi_19_00_02_36shp_53.setVisible(true);lyr_75_Giovedi_13_07_20_43shp_54.setVisible(true);lyr_73_Giovedi_05_30_13_06shp_55.setVisible(true);lyr_72_Giovedi_13_07_20_43shp_56.setVisible(true);lyr_71_Giovedi_05_30_13_06shp_57.setVisible(true);lyr_70_Giovedi_09_30_15_50shp_58.setVisible(true);lyr_543_Giovedi_19_00_02_36shp_59.setVisible(true);lyr_542_Giovedi_13_07_20_43shp_60.setVisible(true);lyr_541_Giovedi_05_30_13_06shp_61.setVisible(true);lyr_540_Giovedi_21_50_05_26shp_62.setVisible(true);lyr_534_Giovedi_21_50_05_26shp_63.setVisible(true);lyr_531_Giovedi_05_30_13_06shp_64.setVisible(true);lyr_158_Giovedi_05_30_13_06shp_65.setVisible(true);lyr_156_Giovedi_13_07_20_43shp_66.setVisible(true);lyr_154_Giovedi_21_50_05_26shp_67.setVisible(true);lyr_79_Mercoledi_21_50_05_26shp_68.setVisible(true);lyr_77_Mercoledi_21_50_05_26shp_69.setVisible(true);lyr_76_Mercoledi_19_00_02_36shp_70.setVisible(true);lyr_75_Mercoledi_13_07_20_43shp_71.setVisible(true);lyr_73_Mercoledi_05_30_13_06shp_72.setVisible(true);lyr_72_Mercoledi_13_07_20_43shp_73.setVisible(true);lyr_71_Mercoledi_05_30_13_06shp_74.setVisible(true);lyr_70_Mercoledi_09_30_15_50shp_75.setVisible(true);lyr_543_Mercoledi_19_00_02_36shp_76.setVisible(true);lyr_542_Mercoledi_13_07_20_43shp_77.setVisible(true);lyr_541_Mercoledi_05_30_13_06shp_78.setVisible(true);lyr_540_Mercoledi_21_50_05_26shp_79.setVisible(true);lyr_534_Mercoledi_21_50_05_26shp_80.setVisible(true);lyr_531_Mercoledi_05_30_13_06shp_81.setVisible(true);lyr_158_Mercoledi_05_30_13_06shp_82.setVisible(true);lyr_156_Mercoledi_13_07_20_43shp_83.setVisible(true);lyr_154_Mercoledi_21_50_05_26shp_84.setVisible(true);lyr_79_Martedi_21_50_05_26shp_85.setVisible(true);lyr_77_Martedi_21_50_05_26shp_86.setVisible(true);lyr_76_Martedi_19_00_02_36shp_87.setVisible(true);lyr_75_Martedi_13_07_20_43shp_88.setVisible(true);lyr_73_Martedi_05_30_13_06shp_89.setVisible(true);lyr_72_Martedi_13_07_20_43shp_90.setVisible(true);lyr_71_Martedi_05_30_13_06shp_91.setVisible(true);lyr_70_Martedi_09_30_15_50shp_92.setVisible(true);lyr_543_Martedi_19_00_02_36shp_93.setVisible(true);lyr_542_Martedi_13_07_20_43shp_94.setVisible(true);lyr_541_Martedi_05_30_13_06shp_95.setVisible(true);lyr_540_Martedi_21_50_05_26shp_96.setVisible(true);lyr_534_Martedi_21_50_05_26shp_97.setVisible(true);lyr_531_Martedi_05_30_13_06shp_98.setVisible(true);lyr_158_Martedi_05_30_13_06shp_99.setVisible(true);lyr_156_Martedi_13_07_20_43shp_100.setVisible(true);lyr_154_Martedi_21_50_05_26shp_101.setVisible(true);lyr_79_Lunedi_21_50_05_26shp_102.setVisible(true);lyr_77_Lunedi_21_50_05_26shp_103.setVisible(true);lyr_76_Lunedi_19_00_02_36shp_104.setVisible(true);lyr_75_Lunedi_13_07_20_43shp_105.setVisible(true);lyr_73_Lunedi_05_30_13_06shp_106.setVisible(true);lyr_72_Lunedi_13_07_20_43shp_107.setVisible(true);lyr_71_Lunedi_05_30_13_06shp_108.setVisible(true);lyr_70_Lunedi_09_30_15_50shp_109.setVisible(true);lyr_543_Lunedi_19_00_02_36shp_110.setVisible(true);lyr_542_Lunedi_13_07_20_43shp_111.setVisible(true);lyr_541_Lunedi_05_30_13_06shp_112.setVisible(true);lyr_540_Lunedi_21_50_05_26shp_113.setVisible(true);lyr_534_Lunedi_21_50_05_26shp_114.setVisible(true);lyr_531_Lunedi_05_30_13_06shp_115.setVisible(true);lyr_158_Lunedi_05_30_13_06shp_116.setVisible(true);lyr_156_Lunedi_13_07_20_43shp_117.setVisible(true);lyr_154_Lunedi_21_50_05_26shp_118.setVisible(true);
var layersList = [lyr_Mappa_web_Fra_0,group_Domenica,group_Sabato,group_Venerdi,group_Giovedi,group_Mercoledi,group_Martedi,group_Lunedi];
lyr_79_Domenica_21_50_05_26shp_1.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_77_Domenica_21_50_05_26shp_2.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_76_Domenica_19_00_02_36shp_3.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_75_Domenica_13_07_20_43shp_4.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_73_Domenica_05_30_13_06shp_5.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_72_Domenica_13_07_20_43shp_6.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_71_Domenica_05_30_13_06shp_7.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_543_Domenica_19_00_02_36shp_8.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_542_Domenica_13_07_20_43shp_9.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_541_Domenica_05_30_13_06shp_10.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_540_Domenica_21_50_05_26shp_11.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_534_Domenica_21_50_05_26shp_12.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_531_Domenica_05_30_13_06shp_13.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_158_Domenica_05_30_13_06shp_14.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_156_Domenica_13_07_20_43shp_15.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_154_Domenica_21_50_05_26shp_16.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_79_Sabato_21_50_05_26shp_17.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_77_Sabato_21_50_05_26shp_18.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_76_Sabato_19_00_02_36shp_19.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_75_Sabato_13_07_20_43shp_20.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_73_Sabato_05_30_13_06shp_21.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_72_Sabato_13_07_20_43shp_22.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_71_Sabato_05_30_13_06shp_23.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_70_Sabato_09_30_15_50shp_24.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_543_Sabato_19_00_02_36shp_25.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_542_Sabato_13_07_20_43shp_26.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_541_Sabato_05_30_13_06shp_27.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_540_Sabato_21_50_05_26shp_28.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_534_Sabato_21_50_05_26shp_29.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_531_Sabato_05_30_13_06shp_30.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_158_Sabato_05_30_13_06shp_31.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_156_Sabato_13_07_20_43shp_32.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_154_Sabato_21_50_05_26shp_33.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_79_Venerdi_21_50_05_26shp_34.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_77_Venerdi_21_50_05_26shp_35.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_76_Venerdi_19_00_02_36shp_36.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_75_Venerdi_13_07_20_43shp_37.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_73_Venerdi_05_30_13_06shp_38.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_72_Venerdi_13_07_20_43shp_39.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_71_Venerdi_05_30_13_06shp_40.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_70_Venerdi_09_30_15_50shp_41.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_543_Venerdi_19_00_02_36shp_42.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_542_Venerdi_13_07_20_43shp_43.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_541_Venerdi_05_30_13_06shp_44.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_540_Venerdi_21_50_05_26shp_45.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_534_Venerdi_21_50_05_26shp_46.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_531_Venerdi_05_30_13_06shp_47.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_158_Venerdi_05_30_13_06shp_48.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_156_Venerdi_13_07_20_43shp_49.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_154_Venerdi_21_50_05_26shp_50.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_79_Giovedi_21_50_05_26shp_51.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_77_Giovedi_21_50_05_26shp_52.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_76_Giovedi_19_00_02_36shp_53.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_75_Giovedi_13_07_20_43shp_54.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_73_Giovedi_05_30_13_06shp_55.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_72_Giovedi_13_07_20_43shp_56.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_71_Giovedi_05_30_13_06shp_57.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_70_Giovedi_09_30_15_50shp_58.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_543_Giovedi_19_00_02_36shp_59.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_542_Giovedi_13_07_20_43shp_60.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_541_Giovedi_05_30_13_06shp_61.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_540_Giovedi_21_50_05_26shp_62.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_534_Giovedi_21_50_05_26shp_63.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_531_Giovedi_05_30_13_06shp_64.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_158_Giovedi_05_30_13_06shp_65.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_156_Giovedi_13_07_20_43shp_66.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_154_Giovedi_21_50_05_26shp_67.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_79_Mercoledi_21_50_05_26shp_68.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_77_Mercoledi_21_50_05_26shp_69.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_76_Mercoledi_19_00_02_36shp_70.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_75_Mercoledi_13_07_20_43shp_71.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_73_Mercoledi_05_30_13_06shp_72.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_72_Mercoledi_13_07_20_43shp_73.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_71_Mercoledi_05_30_13_06shp_74.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_70_Mercoledi_09_30_15_50shp_75.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_543_Mercoledi_19_00_02_36shp_76.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_542_Mercoledi_13_07_20_43shp_77.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_541_Mercoledi_05_30_13_06shp_78.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_540_Mercoledi_21_50_05_26shp_79.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_534_Mercoledi_21_50_05_26shp_80.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_531_Mercoledi_05_30_13_06shp_81.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_158_Mercoledi_05_30_13_06shp_82.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_156_Mercoledi_13_07_20_43shp_83.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_154_Mercoledi_21_50_05_26shp_84.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_79_Martedi_21_50_05_26shp_85.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_77_Martedi_21_50_05_26shp_86.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_76_Martedi_19_00_02_36shp_87.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_75_Martedi_13_07_20_43shp_88.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_73_Martedi_05_30_13_06shp_89.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_72_Martedi_13_07_20_43shp_90.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_71_Martedi_05_30_13_06shp_91.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_70_Martedi_09_30_15_50shp_92.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_543_Martedi_19_00_02_36shp_93.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_542_Martedi_13_07_20_43shp_94.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_541_Martedi_05_30_13_06shp_95.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_540_Martedi_21_50_05_26shp_96.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_534_Martedi_21_50_05_26shp_97.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_531_Martedi_05_30_13_06shp_98.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_158_Martedi_05_30_13_06shp_99.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_156_Martedi_13_07_20_43shp_100.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_154_Martedi_21_50_05_26shp_101.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_79_Lunedi_21_50_05_26shp_102.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_77_Lunedi_21_50_05_26shp_103.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_76_Lunedi_19_00_02_36shp_104.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_75_Lunedi_13_07_20_43shp_105.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_73_Lunedi_05_30_13_06shp_106.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_72_Lunedi_13_07_20_43shp_107.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_71_Lunedi_05_30_13_06shp_108.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_70_Lunedi_09_30_15_50shp_109.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_543_Lunedi_19_00_02_36shp_110.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_542_Lunedi_13_07_20_43shp_111.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_541_Lunedi_05_30_13_06shp_112.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_540_Lunedi_21_50_05_26shp_113.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_534_Lunedi_21_50_05_26shp_114.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_531_Lunedi_05_30_13_06shp_115.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_158_Lunedi_05_30_13_06shp_116.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_156_Lunedi_13_07_20_43shp_117.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_154_Lunedi_21_50_05_26shp_118.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'tipo_giorn': 'tipo_giorn', 'Giorno': 'Giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'sequenza': 'sequenza', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_79_Domenica_21_50_05_26shp_1.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_77_Domenica_21_50_05_26shp_2.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_76_Domenica_19_00_02_36shp_3.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_75_Domenica_13_07_20_43shp_4.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_73_Domenica_05_30_13_06shp_5.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_72_Domenica_13_07_20_43shp_6.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_71_Domenica_05_30_13_06shp_7.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_543_Domenica_19_00_02_36shp_8.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_542_Domenica_13_07_20_43shp_9.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_541_Domenica_05_30_13_06shp_10.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_540_Domenica_21_50_05_26shp_11.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_534_Domenica_21_50_05_26shp_12.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_531_Domenica_05_30_13_06shp_13.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_158_Domenica_05_30_13_06shp_14.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_156_Domenica_13_07_20_43shp_15.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_154_Domenica_21_50_05_26shp_16.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_79_Sabato_21_50_05_26shp_17.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_77_Sabato_21_50_05_26shp_18.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_76_Sabato_19_00_02_36shp_19.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_75_Sabato_13_07_20_43shp_20.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_73_Sabato_05_30_13_06shp_21.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_72_Sabato_13_07_20_43shp_22.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_71_Sabato_05_30_13_06shp_23.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_70_Sabato_09_30_15_50shp_24.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_543_Sabato_19_00_02_36shp_25.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_542_Sabato_13_07_20_43shp_26.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_541_Sabato_05_30_13_06shp_27.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_540_Sabato_21_50_05_26shp_28.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_534_Sabato_21_50_05_26shp_29.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_531_Sabato_05_30_13_06shp_30.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_158_Sabato_05_30_13_06shp_31.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_156_Sabato_13_07_20_43shp_32.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_154_Sabato_21_50_05_26shp_33.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_79_Venerdi_21_50_05_26shp_34.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_77_Venerdi_21_50_05_26shp_35.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_76_Venerdi_19_00_02_36shp_36.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_75_Venerdi_13_07_20_43shp_37.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_73_Venerdi_05_30_13_06shp_38.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_72_Venerdi_13_07_20_43shp_39.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_71_Venerdi_05_30_13_06shp_40.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_70_Venerdi_09_30_15_50shp_41.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_543_Venerdi_19_00_02_36shp_42.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_542_Venerdi_13_07_20_43shp_43.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_541_Venerdi_05_30_13_06shp_44.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_540_Venerdi_21_50_05_26shp_45.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_534_Venerdi_21_50_05_26shp_46.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_531_Venerdi_05_30_13_06shp_47.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_158_Venerdi_05_30_13_06shp_48.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_156_Venerdi_13_07_20_43shp_49.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_154_Venerdi_21_50_05_26shp_50.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_79_Giovedi_21_50_05_26shp_51.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_77_Giovedi_21_50_05_26shp_52.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_76_Giovedi_19_00_02_36shp_53.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_75_Giovedi_13_07_20_43shp_54.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_73_Giovedi_05_30_13_06shp_55.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_72_Giovedi_13_07_20_43shp_56.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_71_Giovedi_05_30_13_06shp_57.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_70_Giovedi_09_30_15_50shp_58.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_543_Giovedi_19_00_02_36shp_59.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_542_Giovedi_13_07_20_43shp_60.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_541_Giovedi_05_30_13_06shp_61.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_540_Giovedi_21_50_05_26shp_62.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_534_Giovedi_21_50_05_26shp_63.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_531_Giovedi_05_30_13_06shp_64.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_158_Giovedi_05_30_13_06shp_65.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_156_Giovedi_13_07_20_43shp_66.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_154_Giovedi_21_50_05_26shp_67.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_79_Mercoledi_21_50_05_26shp_68.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_77_Mercoledi_21_50_05_26shp_69.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_76_Mercoledi_19_00_02_36shp_70.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_75_Mercoledi_13_07_20_43shp_71.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_73_Mercoledi_05_30_13_06shp_72.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_72_Mercoledi_13_07_20_43shp_73.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_71_Mercoledi_05_30_13_06shp_74.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_70_Mercoledi_09_30_15_50shp_75.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_543_Mercoledi_19_00_02_36shp_76.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_542_Mercoledi_13_07_20_43shp_77.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_541_Mercoledi_05_30_13_06shp_78.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_540_Mercoledi_21_50_05_26shp_79.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_534_Mercoledi_21_50_05_26shp_80.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_531_Mercoledi_05_30_13_06shp_81.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_158_Mercoledi_05_30_13_06shp_82.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_156_Mercoledi_13_07_20_43shp_83.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_154_Mercoledi_21_50_05_26shp_84.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_79_Martedi_21_50_05_26shp_85.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_77_Martedi_21_50_05_26shp_86.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_76_Martedi_19_00_02_36shp_87.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_75_Martedi_13_07_20_43shp_88.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_73_Martedi_05_30_13_06shp_89.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_72_Martedi_13_07_20_43shp_90.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_71_Martedi_05_30_13_06shp_91.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_70_Martedi_09_30_15_50shp_92.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_543_Martedi_19_00_02_36shp_93.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_542_Martedi_13_07_20_43shp_94.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_541_Martedi_05_30_13_06shp_95.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_540_Martedi_21_50_05_26shp_96.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_534_Martedi_21_50_05_26shp_97.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_531_Martedi_05_30_13_06shp_98.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_158_Martedi_05_30_13_06shp_99.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_156_Martedi_13_07_20_43shp_100.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_154_Martedi_21_50_05_26shp_101.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_79_Lunedi_21_50_05_26shp_102.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_77_Lunedi_21_50_05_26shp_103.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_76_Lunedi_19_00_02_36shp_104.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_75_Lunedi_13_07_20_43shp_105.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_73_Lunedi_05_30_13_06shp_106.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_72_Lunedi_13_07_20_43shp_107.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_71_Lunedi_05_30_13_06shp_108.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_70_Lunedi_09_30_15_50shp_109.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_543_Lunedi_19_00_02_36shp_110.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_542_Lunedi_13_07_20_43shp_111.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_541_Lunedi_05_30_13_06shp_112.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_540_Lunedi_21_50_05_26shp_113.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_534_Lunedi_21_50_05_26shp_114.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_531_Lunedi_05_30_13_06shp_115.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_158_Lunedi_05_30_13_06shp_116.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_156_Lunedi_13_07_20_43shp_117.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_154_Lunedi_21_50_05_26shp_118.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'tipo_giorn': '', 'Giorno': '', 'ora_inizio': '', 'ora_fine': '', 'sequenza': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_79_Domenica_21_50_05_26shp_1.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_77_Domenica_21_50_05_26shp_2.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_76_Domenica_19_00_02_36shp_3.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_75_Domenica_13_07_20_43shp_4.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_73_Domenica_05_30_13_06shp_5.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_72_Domenica_13_07_20_43shp_6.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_71_Domenica_05_30_13_06shp_7.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_543_Domenica_19_00_02_36shp_8.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_542_Domenica_13_07_20_43shp_9.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_541_Domenica_05_30_13_06shp_10.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_540_Domenica_21_50_05_26shp_11.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_534_Domenica_21_50_05_26shp_12.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_531_Domenica_05_30_13_06shp_13.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_158_Domenica_05_30_13_06shp_14.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_156_Domenica_13_07_20_43shp_15.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_154_Domenica_21_50_05_26shp_16.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_79_Sabato_21_50_05_26shp_17.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_77_Sabato_21_50_05_26shp_18.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_76_Sabato_19_00_02_36shp_19.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_75_Sabato_13_07_20_43shp_20.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_73_Sabato_05_30_13_06shp_21.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_72_Sabato_13_07_20_43shp_22.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_71_Sabato_05_30_13_06shp_23.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_70_Sabato_09_30_15_50shp_24.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_543_Sabato_19_00_02_36shp_25.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_542_Sabato_13_07_20_43shp_26.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_541_Sabato_05_30_13_06shp_27.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_540_Sabato_21_50_05_26shp_28.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_534_Sabato_21_50_05_26shp_29.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_531_Sabato_05_30_13_06shp_30.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_158_Sabato_05_30_13_06shp_31.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_156_Sabato_13_07_20_43shp_32.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_154_Sabato_21_50_05_26shp_33.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_79_Venerdi_21_50_05_26shp_34.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_77_Venerdi_21_50_05_26shp_35.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_76_Venerdi_19_00_02_36shp_36.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_75_Venerdi_13_07_20_43shp_37.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_73_Venerdi_05_30_13_06shp_38.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_72_Venerdi_13_07_20_43shp_39.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_71_Venerdi_05_30_13_06shp_40.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_70_Venerdi_09_30_15_50shp_41.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_543_Venerdi_19_00_02_36shp_42.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_542_Venerdi_13_07_20_43shp_43.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_541_Venerdi_05_30_13_06shp_44.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_540_Venerdi_21_50_05_26shp_45.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_534_Venerdi_21_50_05_26shp_46.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_531_Venerdi_05_30_13_06shp_47.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_158_Venerdi_05_30_13_06shp_48.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_156_Venerdi_13_07_20_43shp_49.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_154_Venerdi_21_50_05_26shp_50.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_79_Giovedi_21_50_05_26shp_51.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_77_Giovedi_21_50_05_26shp_52.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_76_Giovedi_19_00_02_36shp_53.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_75_Giovedi_13_07_20_43shp_54.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_73_Giovedi_05_30_13_06shp_55.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_72_Giovedi_13_07_20_43shp_56.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_71_Giovedi_05_30_13_06shp_57.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_70_Giovedi_09_30_15_50shp_58.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_543_Giovedi_19_00_02_36shp_59.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_542_Giovedi_13_07_20_43shp_60.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_541_Giovedi_05_30_13_06shp_61.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_540_Giovedi_21_50_05_26shp_62.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_534_Giovedi_21_50_05_26shp_63.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_531_Giovedi_05_30_13_06shp_64.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_158_Giovedi_05_30_13_06shp_65.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_156_Giovedi_13_07_20_43shp_66.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_154_Giovedi_21_50_05_26shp_67.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_79_Mercoledi_21_50_05_26shp_68.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_77_Mercoledi_21_50_05_26shp_69.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_76_Mercoledi_19_00_02_36shp_70.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_75_Mercoledi_13_07_20_43shp_71.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_73_Mercoledi_05_30_13_06shp_72.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_72_Mercoledi_13_07_20_43shp_73.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_71_Mercoledi_05_30_13_06shp_74.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_70_Mercoledi_09_30_15_50shp_75.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_543_Mercoledi_19_00_02_36shp_76.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_542_Mercoledi_13_07_20_43shp_77.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_541_Mercoledi_05_30_13_06shp_78.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_540_Mercoledi_21_50_05_26shp_79.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_534_Mercoledi_21_50_05_26shp_80.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_531_Mercoledi_05_30_13_06shp_81.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_158_Mercoledi_05_30_13_06shp_82.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_156_Mercoledi_13_07_20_43shp_83.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_154_Mercoledi_21_50_05_26shp_84.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_79_Martedi_21_50_05_26shp_85.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_77_Martedi_21_50_05_26shp_86.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_76_Martedi_19_00_02_36shp_87.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_75_Martedi_13_07_20_43shp_88.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_73_Martedi_05_30_13_06shp_89.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_72_Martedi_13_07_20_43shp_90.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_71_Martedi_05_30_13_06shp_91.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_70_Martedi_09_30_15_50shp_92.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_543_Martedi_19_00_02_36shp_93.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_542_Martedi_13_07_20_43shp_94.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_541_Martedi_05_30_13_06shp_95.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_540_Martedi_21_50_05_26shp_96.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_534_Martedi_21_50_05_26shp_97.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_531_Martedi_05_30_13_06shp_98.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_158_Martedi_05_30_13_06shp_99.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_156_Martedi_13_07_20_43shp_100.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_154_Martedi_21_50_05_26shp_101.set('fieldLabels', {'CD_VIARIO': 'no label', 'TP_VIA': 'no label', 'DSC_VIA': 'no label', 'ID_SHP': 'no label', 'toponym': 'no label', 'unita_terr': 'no label', 'tipo_giorn': 'no label', 'Giorno': 'no label', 'ora_inizio': 'no label', 'ora_fine': 'no label', 'sequenza': 'no label', 'streetcode': 'no label', 'squadra': 'no label', 'lato': 'no label', 'servizio_g': 'no label', 'ID_EXCEL': 'no label', });
lyr_79_Lunedi_21_50_05_26shp_102.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'sequenza': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_77_Lunedi_21_50_05_26shp_103.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'sequenza': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_76_Lunedi_19_00_02_36shp_104.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'sequenza': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_75_Lunedi_13_07_20_43shp_105.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'sequenza': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_73_Lunedi_05_30_13_06shp_106.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'sequenza': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_72_Lunedi_13_07_20_43shp_107.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'sequenza': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_71_Lunedi_05_30_13_06shp_108.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'sequenza': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_70_Lunedi_09_30_15_50shp_109.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'sequenza': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_543_Lunedi_19_00_02_36shp_110.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'sequenza': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_542_Lunedi_13_07_20_43shp_111.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'sequenza': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_541_Lunedi_05_30_13_06shp_112.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'sequenza': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_540_Lunedi_21_50_05_26shp_113.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'sequenza': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_534_Lunedi_21_50_05_26shp_114.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'sequenza': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_531_Lunedi_05_30_13_06shp_115.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'sequenza': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_158_Lunedi_05_30_13_06shp_116.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'sequenza': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_156_Lunedi_13_07_20_43shp_117.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'sequenza': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_154_Lunedi_21_50_05_26shp_118.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'Giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'sequenza': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_154_Lunedi_21_50_05_26shp_118.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});