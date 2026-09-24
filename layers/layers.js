var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Confini_Comune_Milanodissolto_1 = new ol.format.GeoJSON();
var features_Confini_Comune_Milanodissolto_1 = format_Confini_Comune_Milanodissolto_1.readFeatures(json_Confini_Comune_Milanodissolto_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Confini_Comune_Milanodissolto_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Confini_Comune_Milanodissolto_1.addFeatures(features_Confini_Comune_Milanodissolto_1);
var lyr_Confini_Comune_Milanodissolto_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Confini_Comune_Milanodissolto_1, 
                style: style_Confini_Comune_Milanodissolto_1,
                popuplayertitle: 'Confini_Comune_Milano — dissolto',
                interactive: false,
                title: '<img src="styles/legend/Confini_Comune_Milanodissolto_1.png" /> Confini_Comune_Milano — dissolto'
            });
var format_543_Venerdi_19_00_02_36_2 = new ol.format.GeoJSON();
var features_543_Venerdi_19_00_02_36_2 = format_543_Venerdi_19_00_02_36_2.readFeatures(json_543_Venerdi_19_00_02_36_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Venerdi_19_00_02_36_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Venerdi_19_00_02_36_2.addFeatures(features_543_Venerdi_19_00_02_36_2);
var lyr_543_Venerdi_19_00_02_36_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Venerdi_19_00_02_36_2, 
                style: style_543_Venerdi_19_00_02_36_2,
                popuplayertitle: '543_Venerdi_19_00_02_36',
                interactive: true,
    title: '543_Venerdi_19_00_02_36<br />\
    <img src="styles/legend/543_Venerdi_19_00_02_36_2_0.png" /> 1<br />' });
var format_542_Venerdi_13_07_20_43_3 = new ol.format.GeoJSON();
var features_542_Venerdi_13_07_20_43_3 = format_542_Venerdi_13_07_20_43_3.readFeatures(json_542_Venerdi_13_07_20_43_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Venerdi_13_07_20_43_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Venerdi_13_07_20_43_3.addFeatures(features_542_Venerdi_13_07_20_43_3);
var lyr_542_Venerdi_13_07_20_43_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Venerdi_13_07_20_43_3, 
                style: style_542_Venerdi_13_07_20_43_3,
                popuplayertitle: '542_Venerdi_13_07_20_43',
                interactive: true,
    title: '542_Venerdi_13_07_20_43<br />\
    <img src="styles/legend/542_Venerdi_13_07_20_43_3_0.png" /> 1<br />\
    <img src="styles/legend/542_Venerdi_13_07_20_43_3_1.png" /> 2<br />' });
var format_541_Venerdi_05_30_13_06_4 = new ol.format.GeoJSON();
var features_541_Venerdi_05_30_13_06_4 = format_541_Venerdi_05_30_13_06_4.readFeatures(json_541_Venerdi_05_30_13_06_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Venerdi_05_30_13_06_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Venerdi_05_30_13_06_4.addFeatures(features_541_Venerdi_05_30_13_06_4);
var lyr_541_Venerdi_05_30_13_06_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Venerdi_05_30_13_06_4, 
                style: style_541_Venerdi_05_30_13_06_4,
                popuplayertitle: '541_Venerdi_05_30_13_06',
                interactive: true,
    title: '541_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/541_Venerdi_05_30_13_06_4_0.png" /> 1<br />\
    <img src="styles/legend/541_Venerdi_05_30_13_06_4_1.png" /> 2<br />\
    <img src="styles/legend/541_Venerdi_05_30_13_06_4_2.png" /> 3<br />\
    <img src="styles/legend/541_Venerdi_05_30_13_06_4_3.png" /> 4<br />' });
var format_540_Venerdi_21_50_05_26_5 = new ol.format.GeoJSON();
var features_540_Venerdi_21_50_05_26_5 = format_540_Venerdi_21_50_05_26_5.readFeatures(json_540_Venerdi_21_50_05_26_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Venerdi_21_50_05_26_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Venerdi_21_50_05_26_5.addFeatures(features_540_Venerdi_21_50_05_26_5);
var lyr_540_Venerdi_21_50_05_26_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Venerdi_21_50_05_26_5, 
                style: style_540_Venerdi_21_50_05_26_5,
                popuplayertitle: '540_Venerdi_21_50_05_26',
                interactive: true,
    title: '540_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/540_Venerdi_21_50_05_26_5_0.png" /> 1<br />' });
var format_534_Venerdi_21_50_05_26_6 = new ol.format.GeoJSON();
var features_534_Venerdi_21_50_05_26_6 = format_534_Venerdi_21_50_05_26_6.readFeatures(json_534_Venerdi_21_50_05_26_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Venerdi_21_50_05_26_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Venerdi_21_50_05_26_6.addFeatures(features_534_Venerdi_21_50_05_26_6);
var lyr_534_Venerdi_21_50_05_26_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Venerdi_21_50_05_26_6, 
                style: style_534_Venerdi_21_50_05_26_6,
                popuplayertitle: '534_Venerdi_21_50_05_26',
                interactive: true,
    title: '534_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/534_Venerdi_21_50_05_26_6_0.png" /> 1<br />' });
var format_531_Venerdi_05_30_13_06_7 = new ol.format.GeoJSON();
var features_531_Venerdi_05_30_13_06_7 = format_531_Venerdi_05_30_13_06_7.readFeatures(json_531_Venerdi_05_30_13_06_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Venerdi_05_30_13_06_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Venerdi_05_30_13_06_7.addFeatures(features_531_Venerdi_05_30_13_06_7);
var lyr_531_Venerdi_05_30_13_06_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Venerdi_05_30_13_06_7, 
                style: style_531_Venerdi_05_30_13_06_7,
                popuplayertitle: '531_Venerdi_05_30_13_06',
                interactive: true,
    title: '531_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/531_Venerdi_05_30_13_06_7_0.png" /> 1<br />' });
var format_158_Venerdi_05_30_13_06_8 = new ol.format.GeoJSON();
var features_158_Venerdi_05_30_13_06_8 = format_158_Venerdi_05_30_13_06_8.readFeatures(json_158_Venerdi_05_30_13_06_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Venerdi_05_30_13_06_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Venerdi_05_30_13_06_8.addFeatures(features_158_Venerdi_05_30_13_06_8);
var lyr_158_Venerdi_05_30_13_06_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Venerdi_05_30_13_06_8, 
                style: style_158_Venerdi_05_30_13_06_8,
                popuplayertitle: '158_Venerdi_05_30_13_06',
                interactive: true,
    title: '158_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_8_0.png" /> 1<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_8_1.png" /> 2<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_8_2.png" /> 3<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_8_3.png" /> 4<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_8_4.png" /> 5<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_8_5.png" /> 6<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_8_6.png" /> 7<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_8_7.png" /> 8<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_8_8.png" /> 9<br />' });
var format_156_Venerdi_13_07_20_43_9 = new ol.format.GeoJSON();
var features_156_Venerdi_13_07_20_43_9 = format_156_Venerdi_13_07_20_43_9.readFeatures(json_156_Venerdi_13_07_20_43_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Venerdi_13_07_20_43_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Venerdi_13_07_20_43_9.addFeatures(features_156_Venerdi_13_07_20_43_9);
var lyr_156_Venerdi_13_07_20_43_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Venerdi_13_07_20_43_9, 
                style: style_156_Venerdi_13_07_20_43_9,
                popuplayertitle: '156_Venerdi_13_07_20_43',
                interactive: true,
    title: '156_Venerdi_13_07_20_43<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_0.png" /> 1<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_1.png" /> 2<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_2.png" /> 3<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_3.png" /> 4<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_4.png" /> 5<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_5.png" /> 6<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_6.png" /> 7<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_7.png" /> 8<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_8.png" /> 9<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_9.png" /> 10<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_10.png" /> 11<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_11.png" /> 12<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_12.png" /> 13<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_13.png" /> 14<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_14.png" /> 15<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_15.png" /> 16<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_16.png" /> 17<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_17.png" /> 18<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_9_18.png" /> 19<br />' });
var format_154_Venerdi_21_50_05_26_10 = new ol.format.GeoJSON();
var features_154_Venerdi_21_50_05_26_10 = format_154_Venerdi_21_50_05_26_10.readFeatures(json_154_Venerdi_21_50_05_26_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Venerdi_21_50_05_26_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Venerdi_21_50_05_26_10.addFeatures(features_154_Venerdi_21_50_05_26_10);
var lyr_154_Venerdi_21_50_05_26_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Venerdi_21_50_05_26_10, 
                style: style_154_Venerdi_21_50_05_26_10,
                popuplayertitle: '154_Venerdi_21_50_05_26',
                interactive: true,
    title: '154_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_0.png" /> 1<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_1.png" /> 2<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_2.png" /> 3<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_3.png" /> 4<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_4.png" /> 5<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_5.png" /> 6<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_6.png" /> 7<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_7.png" /> 8<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_8.png" /> 9<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_9.png" /> 10<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_10.png" /> 11<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_11.png" /> 12<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_12.png" /> 13<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_13.png" /> 14<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_14.png" /> 15<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_15.png" /> 16<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_16.png" /> 17<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_17.png" /> 18<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_18.png" /> 19<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_19.png" /> 20<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_20.png" /> 21<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_21.png" /> 22<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_22.png" /> 23<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_10_23.png" /> 24<br />' });
var format_79_Venerdi_21_50_05_26_11 = new ol.format.GeoJSON();
var features_79_Venerdi_21_50_05_26_11 = format_79_Venerdi_21_50_05_26_11.readFeatures(json_79_Venerdi_21_50_05_26_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Venerdi_21_50_05_26_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Venerdi_21_50_05_26_11.addFeatures(features_79_Venerdi_21_50_05_26_11);
var lyr_79_Venerdi_21_50_05_26_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Venerdi_21_50_05_26_11, 
                style: style_79_Venerdi_21_50_05_26_11,
                popuplayertitle: '79_Venerdi_21_50_05_26',
                interactive: true,
    title: '79_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/79_Venerdi_21_50_05_26_11_0.png" /> 1<br />\
    <img src="styles/legend/79_Venerdi_21_50_05_26_11_1.png" /> 2<br />' });
var format_77_Venerdi_21_50_05_26_12 = new ol.format.GeoJSON();
var features_77_Venerdi_21_50_05_26_12 = format_77_Venerdi_21_50_05_26_12.readFeatures(json_77_Venerdi_21_50_05_26_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Venerdi_21_50_05_26_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Venerdi_21_50_05_26_12.addFeatures(features_77_Venerdi_21_50_05_26_12);
var lyr_77_Venerdi_21_50_05_26_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Venerdi_21_50_05_26_12, 
                style: style_77_Venerdi_21_50_05_26_12,
                popuplayertitle: '77_Venerdi_21_50_05_26',
                interactive: true,
    title: '77_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_12_0.png" /> 1<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_12_1.png" /> 2<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_12_2.png" /> 3<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_12_3.png" /> 4<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_12_4.png" /> 5<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_12_5.png" /> 6<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_12_6.png" /> 7<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_12_7.png" /> 8<br />' });
var format_76_Venerdi_19_00_02_36_13 = new ol.format.GeoJSON();
var features_76_Venerdi_19_00_02_36_13 = format_76_Venerdi_19_00_02_36_13.readFeatures(json_76_Venerdi_19_00_02_36_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Venerdi_19_00_02_36_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Venerdi_19_00_02_36_13.addFeatures(features_76_Venerdi_19_00_02_36_13);
var lyr_76_Venerdi_19_00_02_36_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Venerdi_19_00_02_36_13, 
                style: style_76_Venerdi_19_00_02_36_13,
                popuplayertitle: '76_Venerdi_19_00_02_36',
                interactive: true,
    title: '76_Venerdi_19_00_02_36<br />\
    <img src="styles/legend/76_Venerdi_19_00_02_36_13_0.png" /> 1<br />' });
var format_75_Venerdi_13_07_20_43_14 = new ol.format.GeoJSON();
var features_75_Venerdi_13_07_20_43_14 = format_75_Venerdi_13_07_20_43_14.readFeatures(json_75_Venerdi_13_07_20_43_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Venerdi_13_07_20_43_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Venerdi_13_07_20_43_14.addFeatures(features_75_Venerdi_13_07_20_43_14);
var lyr_75_Venerdi_13_07_20_43_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Venerdi_13_07_20_43_14, 
                style: style_75_Venerdi_13_07_20_43_14,
                popuplayertitle: '75_Venerdi_13_07_20_43',
                interactive: true,
    title: '75_Venerdi_13_07_20_43<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43_14_0.png" /> 1<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43_14_1.png" /> 2<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43_14_2.png" /> 3<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43_14_3.png" /> 4<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43_14_4.png" /> 5<br />' });
var format_73_Venerdi_05_30_13_06_15 = new ol.format.GeoJSON();
var features_73_Venerdi_05_30_13_06_15 = format_73_Venerdi_05_30_13_06_15.readFeatures(json_73_Venerdi_05_30_13_06_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Venerdi_05_30_13_06_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Venerdi_05_30_13_06_15.addFeatures(features_73_Venerdi_05_30_13_06_15);
var lyr_73_Venerdi_05_30_13_06_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Venerdi_05_30_13_06_15, 
                style: style_73_Venerdi_05_30_13_06_15,
                popuplayertitle: '73_Venerdi_05_30_13_06',
                interactive: true,
    title: '73_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06_15_0.png" /> 1<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06_15_1.png" /> 2<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06_15_2.png" /> 3<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06_15_3.png" /> 4<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06_15_4.png" /> 5<br />' });
var format_72_Venerdi_13_07_20_43_16 = new ol.format.GeoJSON();
var features_72_Venerdi_13_07_20_43_16 = format_72_Venerdi_13_07_20_43_16.readFeatures(json_72_Venerdi_13_07_20_43_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Venerdi_13_07_20_43_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Venerdi_13_07_20_43_16.addFeatures(features_72_Venerdi_13_07_20_43_16);
var lyr_72_Venerdi_13_07_20_43_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Venerdi_13_07_20_43_16, 
                style: style_72_Venerdi_13_07_20_43_16,
                popuplayertitle: '72_Venerdi_13_07_20_43',
                interactive: true,
    title: '72_Venerdi_13_07_20_43<br />\
    <img src="styles/legend/72_Venerdi_13_07_20_43_16_0.png" /> 1<br />\
    <img src="styles/legend/72_Venerdi_13_07_20_43_16_1.png" /> 2<br />' });
var format_71_Venerdi_05_30_13_06_17 = new ol.format.GeoJSON();
var features_71_Venerdi_05_30_13_06_17 = format_71_Venerdi_05_30_13_06_17.readFeatures(json_71_Venerdi_05_30_13_06_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Venerdi_05_30_13_06_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Venerdi_05_30_13_06_17.addFeatures(features_71_Venerdi_05_30_13_06_17);
var lyr_71_Venerdi_05_30_13_06_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Venerdi_05_30_13_06_17, 
                style: style_71_Venerdi_05_30_13_06_17,
                popuplayertitle: '71_Venerdi_05_30_13_06',
                interactive: true,
    title: '71_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/71_Venerdi_05_30_13_06_17_0.png" /> 1<br />\
    <img src="styles/legend/71_Venerdi_05_30_13_06_17_1.png" /> 2<br />\
    <img src="styles/legend/71_Venerdi_05_30_13_06_17_2.png" /> 3<br />' });
var format_70_Venerdi_09_30_15_50_18 = new ol.format.GeoJSON();
var features_70_Venerdi_09_30_15_50_18 = format_70_Venerdi_09_30_15_50_18.readFeatures(json_70_Venerdi_09_30_15_50_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Venerdi_09_30_15_50_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Venerdi_09_30_15_50_18.addFeatures(features_70_Venerdi_09_30_15_50_18);
var lyr_70_Venerdi_09_30_15_50_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Venerdi_09_30_15_50_18, 
                style: style_70_Venerdi_09_30_15_50_18,
                popuplayertitle: '70_Venerdi_09_30_15_50',
                interactive: true,
    title: '70_Venerdi_09_30_15_50<br />\
    <img src="styles/legend/70_Venerdi_09_30_15_50_18_0.png" /> 1<br />' });
var format_543_Giovedi_19_00_02_36_19 = new ol.format.GeoJSON();
var features_543_Giovedi_19_00_02_36_19 = format_543_Giovedi_19_00_02_36_19.readFeatures(json_543_Giovedi_19_00_02_36_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Giovedi_19_00_02_36_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Giovedi_19_00_02_36_19.addFeatures(features_543_Giovedi_19_00_02_36_19);
var lyr_543_Giovedi_19_00_02_36_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Giovedi_19_00_02_36_19, 
                style: style_543_Giovedi_19_00_02_36_19,
                popuplayertitle: '543_Giovedi_19_00_02_36',
                interactive: true,
    title: '543_Giovedi_19_00_02_36<br />\
    <img src="styles/legend/543_Giovedi_19_00_02_36_19_0.png" /> 1<br />' });
var format_542_Giovedi_13_07_20_43_20 = new ol.format.GeoJSON();
var features_542_Giovedi_13_07_20_43_20 = format_542_Giovedi_13_07_20_43_20.readFeatures(json_542_Giovedi_13_07_20_43_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Giovedi_13_07_20_43_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Giovedi_13_07_20_43_20.addFeatures(features_542_Giovedi_13_07_20_43_20);
var lyr_542_Giovedi_13_07_20_43_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Giovedi_13_07_20_43_20, 
                style: style_542_Giovedi_13_07_20_43_20,
                popuplayertitle: '542_Giovedi_13_07_20_43',
                interactive: true,
    title: '542_Giovedi_13_07_20_43<br />\
    <img src="styles/legend/542_Giovedi_13_07_20_43_20_0.png" /> 1<br />\
    <img src="styles/legend/542_Giovedi_13_07_20_43_20_1.png" /> 2<br />' });
var format_541_Giovedi_05_30_13_06_21 = new ol.format.GeoJSON();
var features_541_Giovedi_05_30_13_06_21 = format_541_Giovedi_05_30_13_06_21.readFeatures(json_541_Giovedi_05_30_13_06_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Giovedi_05_30_13_06_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Giovedi_05_30_13_06_21.addFeatures(features_541_Giovedi_05_30_13_06_21);
var lyr_541_Giovedi_05_30_13_06_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Giovedi_05_30_13_06_21, 
                style: style_541_Giovedi_05_30_13_06_21,
                popuplayertitle: '541_Giovedi_05_30_13_06',
                interactive: true,
    title: '541_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/541_Giovedi_05_30_13_06_21_0.png" /> 1<br />\
    <img src="styles/legend/541_Giovedi_05_30_13_06_21_1.png" /> 2<br />\
    <img src="styles/legend/541_Giovedi_05_30_13_06_21_2.png" /> 3<br />\
    <img src="styles/legend/541_Giovedi_05_30_13_06_21_3.png" /> 4<br />' });
var format_540_Giovedi_21_50_05_26_22 = new ol.format.GeoJSON();
var features_540_Giovedi_21_50_05_26_22 = format_540_Giovedi_21_50_05_26_22.readFeatures(json_540_Giovedi_21_50_05_26_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Giovedi_21_50_05_26_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Giovedi_21_50_05_26_22.addFeatures(features_540_Giovedi_21_50_05_26_22);
var lyr_540_Giovedi_21_50_05_26_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Giovedi_21_50_05_26_22, 
                style: style_540_Giovedi_21_50_05_26_22,
                popuplayertitle: '540_Giovedi_21_50_05_26',
                interactive: true,
    title: '540_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/540_Giovedi_21_50_05_26_22_0.png" /> 1<br />' });
var format_534_Giovedi_21_50_05_26_23 = new ol.format.GeoJSON();
var features_534_Giovedi_21_50_05_26_23 = format_534_Giovedi_21_50_05_26_23.readFeatures(json_534_Giovedi_21_50_05_26_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Giovedi_21_50_05_26_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Giovedi_21_50_05_26_23.addFeatures(features_534_Giovedi_21_50_05_26_23);
var lyr_534_Giovedi_21_50_05_26_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Giovedi_21_50_05_26_23, 
                style: style_534_Giovedi_21_50_05_26_23,
                popuplayertitle: '534_Giovedi_21_50_05_26',
                interactive: true,
    title: '534_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/534_Giovedi_21_50_05_26_23_0.png" /> 1<br />' });
var format_531_Giovedi_05_30_13_06_24 = new ol.format.GeoJSON();
var features_531_Giovedi_05_30_13_06_24 = format_531_Giovedi_05_30_13_06_24.readFeatures(json_531_Giovedi_05_30_13_06_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Giovedi_05_30_13_06_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Giovedi_05_30_13_06_24.addFeatures(features_531_Giovedi_05_30_13_06_24);
var lyr_531_Giovedi_05_30_13_06_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Giovedi_05_30_13_06_24, 
                style: style_531_Giovedi_05_30_13_06_24,
                popuplayertitle: '531_Giovedi_05_30_13_06',
                interactive: true,
    title: '531_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/531_Giovedi_05_30_13_06_24_0.png" /> 1<br />' });
var format_158_Giovedi_05_30_13_06_25 = new ol.format.GeoJSON();
var features_158_Giovedi_05_30_13_06_25 = format_158_Giovedi_05_30_13_06_25.readFeatures(json_158_Giovedi_05_30_13_06_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Giovedi_05_30_13_06_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Giovedi_05_30_13_06_25.addFeatures(features_158_Giovedi_05_30_13_06_25);
var lyr_158_Giovedi_05_30_13_06_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Giovedi_05_30_13_06_25, 
                style: style_158_Giovedi_05_30_13_06_25,
                popuplayertitle: '158_Giovedi_05_30_13_06',
                interactive: true,
    title: '158_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_25_0.png" /> 1<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_25_1.png" /> 2<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_25_2.png" /> 3<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_25_3.png" /> 4<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_25_4.png" /> 5<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_25_5.png" /> 6<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_25_6.png" /> 7<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_25_7.png" /> 8<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_25_8.png" /> 9<br />' });
var format_156_Giovedi_13_07_20_43_26 = new ol.format.GeoJSON();
var features_156_Giovedi_13_07_20_43_26 = format_156_Giovedi_13_07_20_43_26.readFeatures(json_156_Giovedi_13_07_20_43_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Giovedi_13_07_20_43_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Giovedi_13_07_20_43_26.addFeatures(features_156_Giovedi_13_07_20_43_26);
var lyr_156_Giovedi_13_07_20_43_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Giovedi_13_07_20_43_26, 
                style: style_156_Giovedi_13_07_20_43_26,
                popuplayertitle: '156_Giovedi_13_07_20_43',
                interactive: true,
    title: '156_Giovedi_13_07_20_43<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_0.png" /> 1<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_1.png" /> 2<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_2.png" /> 3<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_3.png" /> 4<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_4.png" /> 5<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_5.png" /> 6<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_6.png" /> 7<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_7.png" /> 8<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_8.png" /> 9<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_9.png" /> 10<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_10.png" /> 11<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_11.png" /> 12<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_12.png" /> 13<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_13.png" /> 14<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_14.png" /> 15<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_15.png" /> 16<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_16.png" /> 17<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_17.png" /> 18<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_26_18.png" /> 19<br />' });
var format_154_Giovedi_21_50_05_26_27 = new ol.format.GeoJSON();
var features_154_Giovedi_21_50_05_26_27 = format_154_Giovedi_21_50_05_26_27.readFeatures(json_154_Giovedi_21_50_05_26_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Giovedi_21_50_05_26_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Giovedi_21_50_05_26_27.addFeatures(features_154_Giovedi_21_50_05_26_27);
var lyr_154_Giovedi_21_50_05_26_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Giovedi_21_50_05_26_27, 
                style: style_154_Giovedi_21_50_05_26_27,
                popuplayertitle: '154_Giovedi_21_50_05_26',
                interactive: true,
    title: '154_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_0.png" /> 1<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_1.png" /> 2<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_2.png" /> 3<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_3.png" /> 4<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_4.png" /> 5<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_5.png" /> 6<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_6.png" /> 7<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_7.png" /> 8<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_8.png" /> 9<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_9.png" /> 10<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_10.png" /> 11<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_11.png" /> 12<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_12.png" /> 13<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_13.png" /> 14<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_14.png" /> 15<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_15.png" /> 16<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_16.png" /> 17<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_17.png" /> 18<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_18.png" /> 19<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_19.png" /> 20<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_20.png" /> 21<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_21.png" /> 22<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_22.png" /> 23<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_27_23.png" /> 24<br />' });
var format_79_Giovedi_21_50_05_26_28 = new ol.format.GeoJSON();
var features_79_Giovedi_21_50_05_26_28 = format_79_Giovedi_21_50_05_26_28.readFeatures(json_79_Giovedi_21_50_05_26_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Giovedi_21_50_05_26_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Giovedi_21_50_05_26_28.addFeatures(features_79_Giovedi_21_50_05_26_28);
var lyr_79_Giovedi_21_50_05_26_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Giovedi_21_50_05_26_28, 
                style: style_79_Giovedi_21_50_05_26_28,
                popuplayertitle: '79_Giovedi_21_50_05_26',
                interactive: true,
    title: '79_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/79_Giovedi_21_50_05_26_28_0.png" /> 1<br />\
    <img src="styles/legend/79_Giovedi_21_50_05_26_28_1.png" /> 2<br />' });
var format_77_Giovedi_21_50_05_26_29 = new ol.format.GeoJSON();
var features_77_Giovedi_21_50_05_26_29 = format_77_Giovedi_21_50_05_26_29.readFeatures(json_77_Giovedi_21_50_05_26_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Giovedi_21_50_05_26_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Giovedi_21_50_05_26_29.addFeatures(features_77_Giovedi_21_50_05_26_29);
var lyr_77_Giovedi_21_50_05_26_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Giovedi_21_50_05_26_29, 
                style: style_77_Giovedi_21_50_05_26_29,
                popuplayertitle: '77_Giovedi_21_50_05_26',
                interactive: true,
    title: '77_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_29_0.png" /> 1<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_29_1.png" /> 2<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_29_2.png" /> 3<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_29_3.png" /> 4<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_29_4.png" /> 5<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_29_5.png" /> 6<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_29_6.png" /> 7<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_29_7.png" /> 8<br />' });
var format_76_Giovedi_19_00_02_36_30 = new ol.format.GeoJSON();
var features_76_Giovedi_19_00_02_36_30 = format_76_Giovedi_19_00_02_36_30.readFeatures(json_76_Giovedi_19_00_02_36_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Giovedi_19_00_02_36_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Giovedi_19_00_02_36_30.addFeatures(features_76_Giovedi_19_00_02_36_30);
var lyr_76_Giovedi_19_00_02_36_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Giovedi_19_00_02_36_30, 
                style: style_76_Giovedi_19_00_02_36_30,
                popuplayertitle: '76_Giovedi_19_00_02_36',
                interactive: true,
    title: '76_Giovedi_19_00_02_36<br />\
    <img src="styles/legend/76_Giovedi_19_00_02_36_30_0.png" /> 1<br />' });
var format_75_Giovedi_13_07_20_43_31 = new ol.format.GeoJSON();
var features_75_Giovedi_13_07_20_43_31 = format_75_Giovedi_13_07_20_43_31.readFeatures(json_75_Giovedi_13_07_20_43_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Giovedi_13_07_20_43_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Giovedi_13_07_20_43_31.addFeatures(features_75_Giovedi_13_07_20_43_31);
var lyr_75_Giovedi_13_07_20_43_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Giovedi_13_07_20_43_31, 
                style: style_75_Giovedi_13_07_20_43_31,
                popuplayertitle: '75_Giovedi_13_07_20_43',
                interactive: true,
    title: '75_Giovedi_13_07_20_43<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43_31_0.png" /> 1<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43_31_1.png" /> 2<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43_31_2.png" /> 3<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43_31_3.png" /> 4<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43_31_4.png" /> 5<br />' });
var format_73_Giovedi_05_30_13_06_32 = new ol.format.GeoJSON();
var features_73_Giovedi_05_30_13_06_32 = format_73_Giovedi_05_30_13_06_32.readFeatures(json_73_Giovedi_05_30_13_06_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Giovedi_05_30_13_06_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Giovedi_05_30_13_06_32.addFeatures(features_73_Giovedi_05_30_13_06_32);
var lyr_73_Giovedi_05_30_13_06_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Giovedi_05_30_13_06_32, 
                style: style_73_Giovedi_05_30_13_06_32,
                popuplayertitle: '73_Giovedi_05_30_13_06',
                interactive: true,
    title: '73_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06_32_0.png" /> 1<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06_32_1.png" /> 2<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06_32_2.png" /> 3<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06_32_3.png" /> 4<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06_32_4.png" /> 5<br />' });
var format_72_Giovedi_13_07_20_43_33 = new ol.format.GeoJSON();
var features_72_Giovedi_13_07_20_43_33 = format_72_Giovedi_13_07_20_43_33.readFeatures(json_72_Giovedi_13_07_20_43_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Giovedi_13_07_20_43_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Giovedi_13_07_20_43_33.addFeatures(features_72_Giovedi_13_07_20_43_33);
var lyr_72_Giovedi_13_07_20_43_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Giovedi_13_07_20_43_33, 
                style: style_72_Giovedi_13_07_20_43_33,
                popuplayertitle: '72_Giovedi_13_07_20_43',
                interactive: true,
    title: '72_Giovedi_13_07_20_43<br />\
    <img src="styles/legend/72_Giovedi_13_07_20_43_33_0.png" /> 1<br />\
    <img src="styles/legend/72_Giovedi_13_07_20_43_33_1.png" /> 2<br />' });
var format_71_Giovedi_05_30_13_06_34 = new ol.format.GeoJSON();
var features_71_Giovedi_05_30_13_06_34 = format_71_Giovedi_05_30_13_06_34.readFeatures(json_71_Giovedi_05_30_13_06_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Giovedi_05_30_13_06_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Giovedi_05_30_13_06_34.addFeatures(features_71_Giovedi_05_30_13_06_34);
var lyr_71_Giovedi_05_30_13_06_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Giovedi_05_30_13_06_34, 
                style: style_71_Giovedi_05_30_13_06_34,
                popuplayertitle: '71_Giovedi_05_30_13_06',
                interactive: true,
    title: '71_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/71_Giovedi_05_30_13_06_34_0.png" /> 1<br />\
    <img src="styles/legend/71_Giovedi_05_30_13_06_34_1.png" /> 2<br />\
    <img src="styles/legend/71_Giovedi_05_30_13_06_34_2.png" /> 3<br />' });
var format_70_Giovedi_09_30_15_50_35 = new ol.format.GeoJSON();
var features_70_Giovedi_09_30_15_50_35 = format_70_Giovedi_09_30_15_50_35.readFeatures(json_70_Giovedi_09_30_15_50_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Giovedi_09_30_15_50_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Giovedi_09_30_15_50_35.addFeatures(features_70_Giovedi_09_30_15_50_35);
var lyr_70_Giovedi_09_30_15_50_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Giovedi_09_30_15_50_35, 
                style: style_70_Giovedi_09_30_15_50_35,
                popuplayertitle: '70_Giovedi_09_30_15_50',
                interactive: true,
    title: '70_Giovedi_09_30_15_50<br />\
    <img src="styles/legend/70_Giovedi_09_30_15_50_35_0.png" /> 1<br />' });
var format_543_Mercoledi_19_00_02_36_36 = new ol.format.GeoJSON();
var features_543_Mercoledi_19_00_02_36_36 = format_543_Mercoledi_19_00_02_36_36.readFeatures(json_543_Mercoledi_19_00_02_36_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Mercoledi_19_00_02_36_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Mercoledi_19_00_02_36_36.addFeatures(features_543_Mercoledi_19_00_02_36_36);
var lyr_543_Mercoledi_19_00_02_36_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Mercoledi_19_00_02_36_36, 
                style: style_543_Mercoledi_19_00_02_36_36,
                popuplayertitle: '543_Mercoledi_19_00_02_36',
                interactive: true,
    title: '543_Mercoledi_19_00_02_36<br />\
    <img src="styles/legend/543_Mercoledi_19_00_02_36_36_0.png" /> 1<br />' });
var format_542_Mercoledi_13_07_20_43_37 = new ol.format.GeoJSON();
var features_542_Mercoledi_13_07_20_43_37 = format_542_Mercoledi_13_07_20_43_37.readFeatures(json_542_Mercoledi_13_07_20_43_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Mercoledi_13_07_20_43_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Mercoledi_13_07_20_43_37.addFeatures(features_542_Mercoledi_13_07_20_43_37);
var lyr_542_Mercoledi_13_07_20_43_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Mercoledi_13_07_20_43_37, 
                style: style_542_Mercoledi_13_07_20_43_37,
                popuplayertitle: '542_Mercoledi_13_07_20_43',
                interactive: true,
    title: '542_Mercoledi_13_07_20_43<br />\
    <img src="styles/legend/542_Mercoledi_13_07_20_43_37_0.png" /> 1<br />\
    <img src="styles/legend/542_Mercoledi_13_07_20_43_37_1.png" /> 2<br />' });
var format_541_Mercoledi_05_30_13_06_38 = new ol.format.GeoJSON();
var features_541_Mercoledi_05_30_13_06_38 = format_541_Mercoledi_05_30_13_06_38.readFeatures(json_541_Mercoledi_05_30_13_06_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Mercoledi_05_30_13_06_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Mercoledi_05_30_13_06_38.addFeatures(features_541_Mercoledi_05_30_13_06_38);
var lyr_541_Mercoledi_05_30_13_06_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Mercoledi_05_30_13_06_38, 
                style: style_541_Mercoledi_05_30_13_06_38,
                popuplayertitle: '541_Mercoledi_05_30_13_06',
                interactive: true,
    title: '541_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/541_Mercoledi_05_30_13_06_38_0.png" /> 1<br />\
    <img src="styles/legend/541_Mercoledi_05_30_13_06_38_1.png" /> 2<br />\
    <img src="styles/legend/541_Mercoledi_05_30_13_06_38_2.png" /> 3<br />\
    <img src="styles/legend/541_Mercoledi_05_30_13_06_38_3.png" /> 4<br />' });
var format_540_Mercoledi_21_50_05_26_39 = new ol.format.GeoJSON();
var features_540_Mercoledi_21_50_05_26_39 = format_540_Mercoledi_21_50_05_26_39.readFeatures(json_540_Mercoledi_21_50_05_26_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Mercoledi_21_50_05_26_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Mercoledi_21_50_05_26_39.addFeatures(features_540_Mercoledi_21_50_05_26_39);
var lyr_540_Mercoledi_21_50_05_26_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Mercoledi_21_50_05_26_39, 
                style: style_540_Mercoledi_21_50_05_26_39,
                popuplayertitle: '540_Mercoledi_21_50_05_26',
                interactive: true,
    title: '540_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/540_Mercoledi_21_50_05_26_39_0.png" /> 1<br />' });
var format_534_Mercoledi_21_50_05_26_40 = new ol.format.GeoJSON();
var features_534_Mercoledi_21_50_05_26_40 = format_534_Mercoledi_21_50_05_26_40.readFeatures(json_534_Mercoledi_21_50_05_26_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Mercoledi_21_50_05_26_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Mercoledi_21_50_05_26_40.addFeatures(features_534_Mercoledi_21_50_05_26_40);
var lyr_534_Mercoledi_21_50_05_26_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Mercoledi_21_50_05_26_40, 
                style: style_534_Mercoledi_21_50_05_26_40,
                popuplayertitle: '534_Mercoledi_21_50_05_26',
                interactive: true,
    title: '534_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/534_Mercoledi_21_50_05_26_40_0.png" /> 1<br />' });
var format_531_Mercoledi_05_30_13_06_41 = new ol.format.GeoJSON();
var features_531_Mercoledi_05_30_13_06_41 = format_531_Mercoledi_05_30_13_06_41.readFeatures(json_531_Mercoledi_05_30_13_06_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Mercoledi_05_30_13_06_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Mercoledi_05_30_13_06_41.addFeatures(features_531_Mercoledi_05_30_13_06_41);
var lyr_531_Mercoledi_05_30_13_06_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Mercoledi_05_30_13_06_41, 
                style: style_531_Mercoledi_05_30_13_06_41,
                popuplayertitle: '531_Mercoledi_05_30_13_06',
                interactive: true,
    title: '531_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/531_Mercoledi_05_30_13_06_41_0.png" /> 1<br />' });
var format_158_Mercoledi_05_30_13_06_42 = new ol.format.GeoJSON();
var features_158_Mercoledi_05_30_13_06_42 = format_158_Mercoledi_05_30_13_06_42.readFeatures(json_158_Mercoledi_05_30_13_06_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Mercoledi_05_30_13_06_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Mercoledi_05_30_13_06_42.addFeatures(features_158_Mercoledi_05_30_13_06_42);
var lyr_158_Mercoledi_05_30_13_06_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Mercoledi_05_30_13_06_42, 
                style: style_158_Mercoledi_05_30_13_06_42,
                popuplayertitle: '158_Mercoledi_05_30_13_06',
                interactive: true,
    title: '158_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_42_0.png" /> 1<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_42_1.png" /> 2<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_42_2.png" /> 3<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_42_3.png" /> 4<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_42_4.png" /> 5<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_42_5.png" /> 6<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_42_6.png" /> 7<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_42_7.png" /> 8<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_42_8.png" /> 9<br />' });
var format_156_Mercoledi_13_07_20_43_43 = new ol.format.GeoJSON();
var features_156_Mercoledi_13_07_20_43_43 = format_156_Mercoledi_13_07_20_43_43.readFeatures(json_156_Mercoledi_13_07_20_43_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Mercoledi_13_07_20_43_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Mercoledi_13_07_20_43_43.addFeatures(features_156_Mercoledi_13_07_20_43_43);
var lyr_156_Mercoledi_13_07_20_43_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Mercoledi_13_07_20_43_43, 
                style: style_156_Mercoledi_13_07_20_43_43,
                popuplayertitle: '156_Mercoledi_13_07_20_43',
                interactive: true,
    title: '156_Mercoledi_13_07_20_43<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_0.png" /> 1<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_1.png" /> 2<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_2.png" /> 3<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_3.png" /> 4<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_4.png" /> 5<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_5.png" /> 6<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_6.png" /> 7<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_7.png" /> 8<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_8.png" /> 9<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_9.png" /> 10<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_10.png" /> 11<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_11.png" /> 12<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_12.png" /> 13<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_13.png" /> 14<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_14.png" /> 15<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_15.png" /> 16<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_16.png" /> 17<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_17.png" /> 18<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_43_18.png" /> 19<br />' });
var format_154_Mercoledi_21_50_05_26_44 = new ol.format.GeoJSON();
var features_154_Mercoledi_21_50_05_26_44 = format_154_Mercoledi_21_50_05_26_44.readFeatures(json_154_Mercoledi_21_50_05_26_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Mercoledi_21_50_05_26_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Mercoledi_21_50_05_26_44.addFeatures(features_154_Mercoledi_21_50_05_26_44);
var lyr_154_Mercoledi_21_50_05_26_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Mercoledi_21_50_05_26_44, 
                style: style_154_Mercoledi_21_50_05_26_44,
                popuplayertitle: '154_Mercoledi_21_50_05_26',
                interactive: true,
    title: '154_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_0.png" /> 1<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_1.png" /> 2<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_2.png" /> 3<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_3.png" /> 4<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_4.png" /> 5<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_5.png" /> 6<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_6.png" /> 7<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_7.png" /> 8<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_8.png" /> 9<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_9.png" /> 10<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_10.png" /> 11<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_11.png" /> 12<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_12.png" /> 13<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_13.png" /> 14<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_14.png" /> 15<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_15.png" /> 16<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_16.png" /> 17<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_17.png" /> 18<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_18.png" /> 19<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_19.png" /> 20<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_20.png" /> 21<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_21.png" /> 22<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_22.png" /> 23<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_44_23.png" /> 24<br />' });
var format_79_Mercoledi_21_50_05_26_45 = new ol.format.GeoJSON();
var features_79_Mercoledi_21_50_05_26_45 = format_79_Mercoledi_21_50_05_26_45.readFeatures(json_79_Mercoledi_21_50_05_26_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Mercoledi_21_50_05_26_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Mercoledi_21_50_05_26_45.addFeatures(features_79_Mercoledi_21_50_05_26_45);
var lyr_79_Mercoledi_21_50_05_26_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Mercoledi_21_50_05_26_45, 
                style: style_79_Mercoledi_21_50_05_26_45,
                popuplayertitle: '79_Mercoledi_21_50_05_26',
                interactive: true,
    title: '79_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/79_Mercoledi_21_50_05_26_45_0.png" /> 1<br />\
    <img src="styles/legend/79_Mercoledi_21_50_05_26_45_1.png" /> 2<br />' });
var format_77_Mercoledi_21_50_05_26_46 = new ol.format.GeoJSON();
var features_77_Mercoledi_21_50_05_26_46 = format_77_Mercoledi_21_50_05_26_46.readFeatures(json_77_Mercoledi_21_50_05_26_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Mercoledi_21_50_05_26_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Mercoledi_21_50_05_26_46.addFeatures(features_77_Mercoledi_21_50_05_26_46);
var lyr_77_Mercoledi_21_50_05_26_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Mercoledi_21_50_05_26_46, 
                style: style_77_Mercoledi_21_50_05_26_46,
                popuplayertitle: '77_Mercoledi_21_50_05_26',
                interactive: true,
    title: '77_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_46_0.png" /> 1<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_46_1.png" /> 2<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_46_2.png" /> 3<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_46_3.png" /> 4<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_46_4.png" /> 5<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_46_5.png" /> 6<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_46_6.png" /> 7<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_46_7.png" /> 8<br />' });
var format_76_Mercoledi_19_00_02_36_47 = new ol.format.GeoJSON();
var features_76_Mercoledi_19_00_02_36_47 = format_76_Mercoledi_19_00_02_36_47.readFeatures(json_76_Mercoledi_19_00_02_36_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Mercoledi_19_00_02_36_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Mercoledi_19_00_02_36_47.addFeatures(features_76_Mercoledi_19_00_02_36_47);
var lyr_76_Mercoledi_19_00_02_36_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Mercoledi_19_00_02_36_47, 
                style: style_76_Mercoledi_19_00_02_36_47,
                popuplayertitle: '76_Mercoledi_19_00_02_36',
                interactive: true,
    title: '76_Mercoledi_19_00_02_36<br />\
    <img src="styles/legend/76_Mercoledi_19_00_02_36_47_0.png" /> 1<br />' });
var format_75_Mercoledi_13_07_20_43_48 = new ol.format.GeoJSON();
var features_75_Mercoledi_13_07_20_43_48 = format_75_Mercoledi_13_07_20_43_48.readFeatures(json_75_Mercoledi_13_07_20_43_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Mercoledi_13_07_20_43_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Mercoledi_13_07_20_43_48.addFeatures(features_75_Mercoledi_13_07_20_43_48);
var lyr_75_Mercoledi_13_07_20_43_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Mercoledi_13_07_20_43_48, 
                style: style_75_Mercoledi_13_07_20_43_48,
                popuplayertitle: '75_Mercoledi_13_07_20_43',
                interactive: true,
    title: '75_Mercoledi_13_07_20_43<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43_48_0.png" /> 1<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43_48_1.png" /> 2<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43_48_2.png" /> 3<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43_48_3.png" /> 4<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43_48_4.png" /> 5<br />' });
var format_73_Mercoledi_05_30_13_06_49 = new ol.format.GeoJSON();
var features_73_Mercoledi_05_30_13_06_49 = format_73_Mercoledi_05_30_13_06_49.readFeatures(json_73_Mercoledi_05_30_13_06_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Mercoledi_05_30_13_06_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Mercoledi_05_30_13_06_49.addFeatures(features_73_Mercoledi_05_30_13_06_49);
var lyr_73_Mercoledi_05_30_13_06_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Mercoledi_05_30_13_06_49, 
                style: style_73_Mercoledi_05_30_13_06_49,
                popuplayertitle: '73_Mercoledi_05_30_13_06',
                interactive: true,
    title: '73_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06_49_0.png" /> 1<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06_49_1.png" /> 2<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06_49_2.png" /> 3<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06_49_3.png" /> 4<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06_49_4.png" /> 5<br />' });
var format_72_Mercoledi_13_07_20_43_50 = new ol.format.GeoJSON();
var features_72_Mercoledi_13_07_20_43_50 = format_72_Mercoledi_13_07_20_43_50.readFeatures(json_72_Mercoledi_13_07_20_43_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Mercoledi_13_07_20_43_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Mercoledi_13_07_20_43_50.addFeatures(features_72_Mercoledi_13_07_20_43_50);
var lyr_72_Mercoledi_13_07_20_43_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Mercoledi_13_07_20_43_50, 
                style: style_72_Mercoledi_13_07_20_43_50,
                popuplayertitle: '72_Mercoledi_13_07_20_43',
                interactive: true,
    title: '72_Mercoledi_13_07_20_43<br />\
    <img src="styles/legend/72_Mercoledi_13_07_20_43_50_0.png" /> 1<br />\
    <img src="styles/legend/72_Mercoledi_13_07_20_43_50_1.png" /> 2<br />' });
var format_71_Mercoledi_05_30_13_06_51 = new ol.format.GeoJSON();
var features_71_Mercoledi_05_30_13_06_51 = format_71_Mercoledi_05_30_13_06_51.readFeatures(json_71_Mercoledi_05_30_13_06_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Mercoledi_05_30_13_06_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Mercoledi_05_30_13_06_51.addFeatures(features_71_Mercoledi_05_30_13_06_51);
var lyr_71_Mercoledi_05_30_13_06_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Mercoledi_05_30_13_06_51, 
                style: style_71_Mercoledi_05_30_13_06_51,
                popuplayertitle: '71_Mercoledi_05_30_13_06',
                interactive: true,
    title: '71_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/71_Mercoledi_05_30_13_06_51_0.png" /> 1<br />\
    <img src="styles/legend/71_Mercoledi_05_30_13_06_51_1.png" /> 2<br />\
    <img src="styles/legend/71_Mercoledi_05_30_13_06_51_2.png" /> 3<br />' });
var format_70_Mercoledi_09_30_15_50_52 = new ol.format.GeoJSON();
var features_70_Mercoledi_09_30_15_50_52 = format_70_Mercoledi_09_30_15_50_52.readFeatures(json_70_Mercoledi_09_30_15_50_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Mercoledi_09_30_15_50_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Mercoledi_09_30_15_50_52.addFeatures(features_70_Mercoledi_09_30_15_50_52);
var lyr_70_Mercoledi_09_30_15_50_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Mercoledi_09_30_15_50_52, 
                style: style_70_Mercoledi_09_30_15_50_52,
                popuplayertitle: '70_Mercoledi_09_30_15_50',
                interactive: true,
    title: '70_Mercoledi_09_30_15_50<br />\
    <img src="styles/legend/70_Mercoledi_09_30_15_50_52_0.png" /> 1<br />' });
var format_543_Martedi_19_00_02_36_53 = new ol.format.GeoJSON();
var features_543_Martedi_19_00_02_36_53 = format_543_Martedi_19_00_02_36_53.readFeatures(json_543_Martedi_19_00_02_36_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Martedi_19_00_02_36_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Martedi_19_00_02_36_53.addFeatures(features_543_Martedi_19_00_02_36_53);
var lyr_543_Martedi_19_00_02_36_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Martedi_19_00_02_36_53, 
                style: style_543_Martedi_19_00_02_36_53,
                popuplayertitle: '543_Martedi_19_00_02_36',
                interactive: true,
    title: '543_Martedi_19_00_02_36<br />\
    <img src="styles/legend/543_Martedi_19_00_02_36_53_0.png" /> 1<br />' });
var format_542_Martedi_13_07_20_43_54 = new ol.format.GeoJSON();
var features_542_Martedi_13_07_20_43_54 = format_542_Martedi_13_07_20_43_54.readFeatures(json_542_Martedi_13_07_20_43_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Martedi_13_07_20_43_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Martedi_13_07_20_43_54.addFeatures(features_542_Martedi_13_07_20_43_54);
var lyr_542_Martedi_13_07_20_43_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Martedi_13_07_20_43_54, 
                style: style_542_Martedi_13_07_20_43_54,
                popuplayertitle: '542_Martedi_13_07_20_43',
                interactive: true,
    title: '542_Martedi_13_07_20_43<br />\
    <img src="styles/legend/542_Martedi_13_07_20_43_54_0.png" /> 1<br />\
    <img src="styles/legend/542_Martedi_13_07_20_43_54_1.png" /> 2<br />' });
var format_541_Martedi_05_30_13_06_55 = new ol.format.GeoJSON();
var features_541_Martedi_05_30_13_06_55 = format_541_Martedi_05_30_13_06_55.readFeatures(json_541_Martedi_05_30_13_06_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Martedi_05_30_13_06_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Martedi_05_30_13_06_55.addFeatures(features_541_Martedi_05_30_13_06_55);
var lyr_541_Martedi_05_30_13_06_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Martedi_05_30_13_06_55, 
                style: style_541_Martedi_05_30_13_06_55,
                popuplayertitle: '541_Martedi_05_30_13_06',
                interactive: true,
    title: '541_Martedi_05_30_13_06<br />\
    <img src="styles/legend/541_Martedi_05_30_13_06_55_0.png" /> 1<br />\
    <img src="styles/legend/541_Martedi_05_30_13_06_55_1.png" /> 2<br />\
    <img src="styles/legend/541_Martedi_05_30_13_06_55_2.png" /> 3<br />\
    <img src="styles/legend/541_Martedi_05_30_13_06_55_3.png" /> 4<br />' });
var format_540_Martedi_21_50_05_26_56 = new ol.format.GeoJSON();
var features_540_Martedi_21_50_05_26_56 = format_540_Martedi_21_50_05_26_56.readFeatures(json_540_Martedi_21_50_05_26_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Martedi_21_50_05_26_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Martedi_21_50_05_26_56.addFeatures(features_540_Martedi_21_50_05_26_56);
var lyr_540_Martedi_21_50_05_26_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Martedi_21_50_05_26_56, 
                style: style_540_Martedi_21_50_05_26_56,
                popuplayertitle: '540_Martedi_21_50_05_26',
                interactive: true,
    title: '540_Martedi_21_50_05_26<br />\
    <img src="styles/legend/540_Martedi_21_50_05_26_56_0.png" /> 1<br />' });
var format_534_Martedi_21_50_05_26_57 = new ol.format.GeoJSON();
var features_534_Martedi_21_50_05_26_57 = format_534_Martedi_21_50_05_26_57.readFeatures(json_534_Martedi_21_50_05_26_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Martedi_21_50_05_26_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Martedi_21_50_05_26_57.addFeatures(features_534_Martedi_21_50_05_26_57);
var lyr_534_Martedi_21_50_05_26_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Martedi_21_50_05_26_57, 
                style: style_534_Martedi_21_50_05_26_57,
                popuplayertitle: '534_Martedi_21_50_05_26',
                interactive: true,
    title: '534_Martedi_21_50_05_26<br />\
    <img src="styles/legend/534_Martedi_21_50_05_26_57_0.png" /> 1<br />' });
var format_531_Martedi_05_30_13_06_58 = new ol.format.GeoJSON();
var features_531_Martedi_05_30_13_06_58 = format_531_Martedi_05_30_13_06_58.readFeatures(json_531_Martedi_05_30_13_06_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Martedi_05_30_13_06_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Martedi_05_30_13_06_58.addFeatures(features_531_Martedi_05_30_13_06_58);
var lyr_531_Martedi_05_30_13_06_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Martedi_05_30_13_06_58, 
                style: style_531_Martedi_05_30_13_06_58,
                popuplayertitle: '531_Martedi_05_30_13_06',
                interactive: true,
    title: '531_Martedi_05_30_13_06<br />\
    <img src="styles/legend/531_Martedi_05_30_13_06_58_0.png" /> 1<br />' });
var format_158_Martedi_05_30_13_06_59 = new ol.format.GeoJSON();
var features_158_Martedi_05_30_13_06_59 = format_158_Martedi_05_30_13_06_59.readFeatures(json_158_Martedi_05_30_13_06_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Martedi_05_30_13_06_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Martedi_05_30_13_06_59.addFeatures(features_158_Martedi_05_30_13_06_59);
var lyr_158_Martedi_05_30_13_06_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Martedi_05_30_13_06_59, 
                style: style_158_Martedi_05_30_13_06_59,
                popuplayertitle: '158_Martedi_05_30_13_06',
                interactive: true,
    title: '158_Martedi_05_30_13_06<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_59_0.png" /> 1<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_59_1.png" /> 2<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_59_2.png" /> 3<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_59_3.png" /> 4<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_59_4.png" /> 5<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_59_5.png" /> 6<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_59_6.png" /> 7<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_59_7.png" /> 8<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_59_8.png" /> 9<br />' });
var format_156_Martedi_13_07_20_43_60 = new ol.format.GeoJSON();
var features_156_Martedi_13_07_20_43_60 = format_156_Martedi_13_07_20_43_60.readFeatures(json_156_Martedi_13_07_20_43_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Martedi_13_07_20_43_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Martedi_13_07_20_43_60.addFeatures(features_156_Martedi_13_07_20_43_60);
var lyr_156_Martedi_13_07_20_43_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Martedi_13_07_20_43_60, 
                style: style_156_Martedi_13_07_20_43_60,
                popuplayertitle: '156_Martedi_13_07_20_43',
                interactive: true,
    title: '156_Martedi_13_07_20_43<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_0.png" /> 1<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_1.png" /> 2<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_2.png" /> 3<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_3.png" /> 4<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_4.png" /> 5<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_5.png" /> 6<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_6.png" /> 7<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_7.png" /> 8<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_8.png" /> 9<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_9.png" /> 10<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_10.png" /> 11<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_11.png" /> 12<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_12.png" /> 13<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_13.png" /> 14<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_14.png" /> 15<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_15.png" /> 16<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_16.png" /> 17<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_17.png" /> 18<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_60_18.png" /> 19<br />' });
var format_154_Martedi_21_50_05_26_61 = new ol.format.GeoJSON();
var features_154_Martedi_21_50_05_26_61 = format_154_Martedi_21_50_05_26_61.readFeatures(json_154_Martedi_21_50_05_26_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Martedi_21_50_05_26_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Martedi_21_50_05_26_61.addFeatures(features_154_Martedi_21_50_05_26_61);
var lyr_154_Martedi_21_50_05_26_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Martedi_21_50_05_26_61, 
                style: style_154_Martedi_21_50_05_26_61,
                popuplayertitle: '154_Martedi_21_50_05_26',
                interactive: true,
    title: '154_Martedi_21_50_05_26<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_0.png" /> 1<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_1.png" /> 2<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_2.png" /> 3<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_3.png" /> 4<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_4.png" /> 5<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_5.png" /> 6<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_6.png" /> 7<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_7.png" /> 8<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_8.png" /> 9<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_9.png" /> 10<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_10.png" /> 11<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_11.png" /> 12<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_12.png" /> 13<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_13.png" /> 14<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_14.png" /> 15<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_15.png" /> 16<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_16.png" /> 17<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_17.png" /> 18<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_18.png" /> 19<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_19.png" /> 20<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_20.png" /> 21<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_21.png" /> 22<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_22.png" /> 23<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_61_23.png" /> 24<br />' });
var format_79_Martedi_21_50_05_26_62 = new ol.format.GeoJSON();
var features_79_Martedi_21_50_05_26_62 = format_79_Martedi_21_50_05_26_62.readFeatures(json_79_Martedi_21_50_05_26_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Martedi_21_50_05_26_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Martedi_21_50_05_26_62.addFeatures(features_79_Martedi_21_50_05_26_62);
var lyr_79_Martedi_21_50_05_26_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Martedi_21_50_05_26_62, 
                style: style_79_Martedi_21_50_05_26_62,
                popuplayertitle: '79_Martedi_21_50_05_26',
                interactive: true,
    title: '79_Martedi_21_50_05_26<br />\
    <img src="styles/legend/79_Martedi_21_50_05_26_62_0.png" /> 1<br />\
    <img src="styles/legend/79_Martedi_21_50_05_26_62_1.png" /> 2<br />' });
var format_77_Martedi_21_50_05_26_63 = new ol.format.GeoJSON();
var features_77_Martedi_21_50_05_26_63 = format_77_Martedi_21_50_05_26_63.readFeatures(json_77_Martedi_21_50_05_26_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Martedi_21_50_05_26_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Martedi_21_50_05_26_63.addFeatures(features_77_Martedi_21_50_05_26_63);
var lyr_77_Martedi_21_50_05_26_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Martedi_21_50_05_26_63, 
                style: style_77_Martedi_21_50_05_26_63,
                popuplayertitle: '77_Martedi_21_50_05_26',
                interactive: true,
    title: '77_Martedi_21_50_05_26<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_63_0.png" /> 1<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_63_1.png" /> 2<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_63_2.png" /> 3<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_63_3.png" /> 4<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_63_4.png" /> 5<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_63_5.png" /> 6<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_63_6.png" /> 7<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_63_7.png" /> 8<br />' });
var format_76_Martedi_19_00_02_36_64 = new ol.format.GeoJSON();
var features_76_Martedi_19_00_02_36_64 = format_76_Martedi_19_00_02_36_64.readFeatures(json_76_Martedi_19_00_02_36_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Martedi_19_00_02_36_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Martedi_19_00_02_36_64.addFeatures(features_76_Martedi_19_00_02_36_64);
var lyr_76_Martedi_19_00_02_36_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Martedi_19_00_02_36_64, 
                style: style_76_Martedi_19_00_02_36_64,
                popuplayertitle: '76_Martedi_19_00_02_36',
                interactive: true,
    title: '76_Martedi_19_00_02_36<br />\
    <img src="styles/legend/76_Martedi_19_00_02_36_64_0.png" /> 1<br />' });
var format_75_Martedi_13_07_20_43_65 = new ol.format.GeoJSON();
var features_75_Martedi_13_07_20_43_65 = format_75_Martedi_13_07_20_43_65.readFeatures(json_75_Martedi_13_07_20_43_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Martedi_13_07_20_43_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Martedi_13_07_20_43_65.addFeatures(features_75_Martedi_13_07_20_43_65);
var lyr_75_Martedi_13_07_20_43_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Martedi_13_07_20_43_65, 
                style: style_75_Martedi_13_07_20_43_65,
                popuplayertitle: '75_Martedi_13_07_20_43',
                interactive: true,
    title: '75_Martedi_13_07_20_43<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43_65_0.png" /> 1<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43_65_1.png" /> 2<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43_65_2.png" /> 3<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43_65_3.png" /> 4<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43_65_4.png" /> 5<br />' });
var format_73_Martedi_05_30_13_06_66 = new ol.format.GeoJSON();
var features_73_Martedi_05_30_13_06_66 = format_73_Martedi_05_30_13_06_66.readFeatures(json_73_Martedi_05_30_13_06_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Martedi_05_30_13_06_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Martedi_05_30_13_06_66.addFeatures(features_73_Martedi_05_30_13_06_66);
var lyr_73_Martedi_05_30_13_06_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Martedi_05_30_13_06_66, 
                style: style_73_Martedi_05_30_13_06_66,
                popuplayertitle: '73_Martedi_05_30_13_06',
                interactive: true,
    title: '73_Martedi_05_30_13_06<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06_66_0.png" /> 1<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06_66_1.png" /> 2<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06_66_2.png" /> 3<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06_66_3.png" /> 4<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06_66_4.png" /> 5<br />' });
var format_72_Martedi_13_07_20_43_67 = new ol.format.GeoJSON();
var features_72_Martedi_13_07_20_43_67 = format_72_Martedi_13_07_20_43_67.readFeatures(json_72_Martedi_13_07_20_43_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Martedi_13_07_20_43_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Martedi_13_07_20_43_67.addFeatures(features_72_Martedi_13_07_20_43_67);
var lyr_72_Martedi_13_07_20_43_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Martedi_13_07_20_43_67, 
                style: style_72_Martedi_13_07_20_43_67,
                popuplayertitle: '72_Martedi_13_07_20_43',
                interactive: true,
    title: '72_Martedi_13_07_20_43<br />\
    <img src="styles/legend/72_Martedi_13_07_20_43_67_0.png" /> 1<br />\
    <img src="styles/legend/72_Martedi_13_07_20_43_67_1.png" /> 2<br />' });
var format_71_Martedi_05_30_13_06_68 = new ol.format.GeoJSON();
var features_71_Martedi_05_30_13_06_68 = format_71_Martedi_05_30_13_06_68.readFeatures(json_71_Martedi_05_30_13_06_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Martedi_05_30_13_06_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Martedi_05_30_13_06_68.addFeatures(features_71_Martedi_05_30_13_06_68);
var lyr_71_Martedi_05_30_13_06_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Martedi_05_30_13_06_68, 
                style: style_71_Martedi_05_30_13_06_68,
                popuplayertitle: '71_Martedi_05_30_13_06',
                interactive: true,
    title: '71_Martedi_05_30_13_06<br />\
    <img src="styles/legend/71_Martedi_05_30_13_06_68_0.png" /> 1<br />\
    <img src="styles/legend/71_Martedi_05_30_13_06_68_1.png" /> 2<br />\
    <img src="styles/legend/71_Martedi_05_30_13_06_68_2.png" /> 3<br />' });
var format_70_Martedi_09_30_15_50_69 = new ol.format.GeoJSON();
var features_70_Martedi_09_30_15_50_69 = format_70_Martedi_09_30_15_50_69.readFeatures(json_70_Martedi_09_30_15_50_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Martedi_09_30_15_50_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Martedi_09_30_15_50_69.addFeatures(features_70_Martedi_09_30_15_50_69);
var lyr_70_Martedi_09_30_15_50_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Martedi_09_30_15_50_69, 
                style: style_70_Martedi_09_30_15_50_69,
                popuplayertitle: '70_Martedi_09_30_15_50',
                interactive: true,
    title: '70_Martedi_09_30_15_50<br />\
    <img src="styles/legend/70_Martedi_09_30_15_50_69_0.png" /> 1<br />' });
var format_543_Lunedi_19_00_02_36_70 = new ol.format.GeoJSON();
var features_543_Lunedi_19_00_02_36_70 = format_543_Lunedi_19_00_02_36_70.readFeatures(json_543_Lunedi_19_00_02_36_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Lunedi_19_00_02_36_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Lunedi_19_00_02_36_70.addFeatures(features_543_Lunedi_19_00_02_36_70);
var lyr_543_Lunedi_19_00_02_36_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Lunedi_19_00_02_36_70, 
                style: style_543_Lunedi_19_00_02_36_70,
                popuplayertitle: '543_Lunedi_19_00_02_36',
                interactive: true,
    title: '543_Lunedi_19_00_02_36<br />\
    <img src="styles/legend/543_Lunedi_19_00_02_36_70_0.png" /> 1<br />' });
var format_542_Lunedi_13_07_20_43_71 = new ol.format.GeoJSON();
var features_542_Lunedi_13_07_20_43_71 = format_542_Lunedi_13_07_20_43_71.readFeatures(json_542_Lunedi_13_07_20_43_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Lunedi_13_07_20_43_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Lunedi_13_07_20_43_71.addFeatures(features_542_Lunedi_13_07_20_43_71);
var lyr_542_Lunedi_13_07_20_43_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Lunedi_13_07_20_43_71, 
                style: style_542_Lunedi_13_07_20_43_71,
                popuplayertitle: '542_Lunedi_13_07_20_43',
                interactive: true,
    title: '542_Lunedi_13_07_20_43<br />\
    <img src="styles/legend/542_Lunedi_13_07_20_43_71_0.png" /> 1<br />\
    <img src="styles/legend/542_Lunedi_13_07_20_43_71_1.png" /> 2<br />' });
var format_541_Lunedi_05_30_13_06_72 = new ol.format.GeoJSON();
var features_541_Lunedi_05_30_13_06_72 = format_541_Lunedi_05_30_13_06_72.readFeatures(json_541_Lunedi_05_30_13_06_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Lunedi_05_30_13_06_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Lunedi_05_30_13_06_72.addFeatures(features_541_Lunedi_05_30_13_06_72);
var lyr_541_Lunedi_05_30_13_06_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Lunedi_05_30_13_06_72, 
                style: style_541_Lunedi_05_30_13_06_72,
                popuplayertitle: '541_Lunedi_05_30_13_06',
                interactive: true,
    title: '541_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/541_Lunedi_05_30_13_06_72_0.png" /> 1<br />\
    <img src="styles/legend/541_Lunedi_05_30_13_06_72_1.png" /> 2<br />\
    <img src="styles/legend/541_Lunedi_05_30_13_06_72_2.png" /> 3<br />\
    <img src="styles/legend/541_Lunedi_05_30_13_06_72_3.png" /> 4<br />' });
var format_540_Lunedi_21_50_05_26_73 = new ol.format.GeoJSON();
var features_540_Lunedi_21_50_05_26_73 = format_540_Lunedi_21_50_05_26_73.readFeatures(json_540_Lunedi_21_50_05_26_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Lunedi_21_50_05_26_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Lunedi_21_50_05_26_73.addFeatures(features_540_Lunedi_21_50_05_26_73);
var lyr_540_Lunedi_21_50_05_26_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Lunedi_21_50_05_26_73, 
                style: style_540_Lunedi_21_50_05_26_73,
                popuplayertitle: '540_Lunedi_21_50_05_26',
                interactive: true,
    title: '540_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/540_Lunedi_21_50_05_26_73_0.png" /> 1<br />' });
var format_534_Lunedi_21_50_05_26_74 = new ol.format.GeoJSON();
var features_534_Lunedi_21_50_05_26_74 = format_534_Lunedi_21_50_05_26_74.readFeatures(json_534_Lunedi_21_50_05_26_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Lunedi_21_50_05_26_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Lunedi_21_50_05_26_74.addFeatures(features_534_Lunedi_21_50_05_26_74);
var lyr_534_Lunedi_21_50_05_26_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Lunedi_21_50_05_26_74, 
                style: style_534_Lunedi_21_50_05_26_74,
                popuplayertitle: '534_Lunedi_21_50_05_26',
                interactive: true,
    title: '534_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/534_Lunedi_21_50_05_26_74_0.png" /> 1<br />' });
var format_531_Lunedi_05_30_13_06_75 = new ol.format.GeoJSON();
var features_531_Lunedi_05_30_13_06_75 = format_531_Lunedi_05_30_13_06_75.readFeatures(json_531_Lunedi_05_30_13_06_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Lunedi_05_30_13_06_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Lunedi_05_30_13_06_75.addFeatures(features_531_Lunedi_05_30_13_06_75);
var lyr_531_Lunedi_05_30_13_06_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Lunedi_05_30_13_06_75, 
                style: style_531_Lunedi_05_30_13_06_75,
                popuplayertitle: '531_Lunedi_05_30_13_06',
                interactive: true,
    title: '531_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/531_Lunedi_05_30_13_06_75_0.png" /> 1<br />' });
var format_158_Lunedi_05_30_13_06_76 = new ol.format.GeoJSON();
var features_158_Lunedi_05_30_13_06_76 = format_158_Lunedi_05_30_13_06_76.readFeatures(json_158_Lunedi_05_30_13_06_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Lunedi_05_30_13_06_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Lunedi_05_30_13_06_76.addFeatures(features_158_Lunedi_05_30_13_06_76);
var lyr_158_Lunedi_05_30_13_06_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Lunedi_05_30_13_06_76, 
                style: style_158_Lunedi_05_30_13_06_76,
                popuplayertitle: '158_Lunedi_05_30_13_06',
                interactive: true,
    title: '158_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_76_0.png" /> 1<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_76_1.png" /> 2<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_76_2.png" /> 3<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_76_3.png" /> 4<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_76_4.png" /> 5<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_76_5.png" /> 6<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_76_6.png" /> 7<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_76_7.png" /> 8<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_76_8.png" /> 9<br />' });
var format_156_Lunedi_13_07_20_43_77 = new ol.format.GeoJSON();
var features_156_Lunedi_13_07_20_43_77 = format_156_Lunedi_13_07_20_43_77.readFeatures(json_156_Lunedi_13_07_20_43_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Lunedi_13_07_20_43_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Lunedi_13_07_20_43_77.addFeatures(features_156_Lunedi_13_07_20_43_77);
var lyr_156_Lunedi_13_07_20_43_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Lunedi_13_07_20_43_77, 
                style: style_156_Lunedi_13_07_20_43_77,
                popuplayertitle: '156_Lunedi_13_07_20_43',
                interactive: true,
    title: '156_Lunedi_13_07_20_43<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_0.png" /> 1<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_1.png" /> 2<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_2.png" /> 3<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_3.png" /> 4<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_4.png" /> 5<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_5.png" /> 6<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_6.png" /> 7<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_7.png" /> 8<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_8.png" /> 9<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_9.png" /> 10<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_10.png" /> 11<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_11.png" /> 12<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_12.png" /> 13<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_13.png" /> 14<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_14.png" /> 15<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_15.png" /> 16<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_16.png" /> 17<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_17.png" /> 18<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_77_18.png" /> 19<br />' });
var format_154_Lunedi_21_50_05_26_78 = new ol.format.GeoJSON();
var features_154_Lunedi_21_50_05_26_78 = format_154_Lunedi_21_50_05_26_78.readFeatures(json_154_Lunedi_21_50_05_26_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Lunedi_21_50_05_26_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Lunedi_21_50_05_26_78.addFeatures(features_154_Lunedi_21_50_05_26_78);
var lyr_154_Lunedi_21_50_05_26_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Lunedi_21_50_05_26_78, 
                style: style_154_Lunedi_21_50_05_26_78,
                popuplayertitle: '154_Lunedi_21_50_05_26',
                interactive: true,
    title: '154_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_0.png" /> 1<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_1.png" /> 2<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_2.png" /> 3<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_3.png" /> 4<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_4.png" /> 5<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_5.png" /> 6<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_6.png" /> 7<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_7.png" /> 8<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_8.png" /> 9<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_9.png" /> 10<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_10.png" /> 11<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_11.png" /> 12<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_12.png" /> 13<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_13.png" /> 14<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_14.png" /> 15<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_15.png" /> 16<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_16.png" /> 17<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_17.png" /> 18<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_18.png" /> 19<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_19.png" /> 20<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_20.png" /> 21<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_21.png" /> 22<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_22.png" /> 23<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_78_23.png" /> 24<br />' });
var format_79_Lunedi_21_50_05_26_79 = new ol.format.GeoJSON();
var features_79_Lunedi_21_50_05_26_79 = format_79_Lunedi_21_50_05_26_79.readFeatures(json_79_Lunedi_21_50_05_26_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Lunedi_21_50_05_26_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Lunedi_21_50_05_26_79.addFeatures(features_79_Lunedi_21_50_05_26_79);
var lyr_79_Lunedi_21_50_05_26_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Lunedi_21_50_05_26_79, 
                style: style_79_Lunedi_21_50_05_26_79,
                popuplayertitle: '79_Lunedi_21_50_05_26',
                interactive: true,
    title: '79_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/79_Lunedi_21_50_05_26_79_0.png" /> 1<br />\
    <img src="styles/legend/79_Lunedi_21_50_05_26_79_1.png" /> 2<br />' });
var format_77_Lunedi_21_50_05_26_80 = new ol.format.GeoJSON();
var features_77_Lunedi_21_50_05_26_80 = format_77_Lunedi_21_50_05_26_80.readFeatures(json_77_Lunedi_21_50_05_26_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Lunedi_21_50_05_26_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Lunedi_21_50_05_26_80.addFeatures(features_77_Lunedi_21_50_05_26_80);
var lyr_77_Lunedi_21_50_05_26_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Lunedi_21_50_05_26_80, 
                style: style_77_Lunedi_21_50_05_26_80,
                popuplayertitle: '77_Lunedi_21_50_05_26',
                interactive: true,
    title: '77_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_80_0.png" /> 1<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_80_1.png" /> 2<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_80_2.png" /> 3<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_80_3.png" /> 4<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_80_4.png" /> 5<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_80_5.png" /> 6<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_80_6.png" /> 7<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_80_7.png" /> 8<br />' });
var format_76_Lunedi_19_00_02_36_81 = new ol.format.GeoJSON();
var features_76_Lunedi_19_00_02_36_81 = format_76_Lunedi_19_00_02_36_81.readFeatures(json_76_Lunedi_19_00_02_36_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Lunedi_19_00_02_36_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Lunedi_19_00_02_36_81.addFeatures(features_76_Lunedi_19_00_02_36_81);
var lyr_76_Lunedi_19_00_02_36_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Lunedi_19_00_02_36_81, 
                style: style_76_Lunedi_19_00_02_36_81,
                popuplayertitle: '76_Lunedi_19_00_02_36',
                interactive: true,
    title: '76_Lunedi_19_00_02_36<br />\
    <img src="styles/legend/76_Lunedi_19_00_02_36_81_0.png" /> 1<br />' });
var format_75_Lunedi_13_07_20_43_82 = new ol.format.GeoJSON();
var features_75_Lunedi_13_07_20_43_82 = format_75_Lunedi_13_07_20_43_82.readFeatures(json_75_Lunedi_13_07_20_43_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Lunedi_13_07_20_43_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Lunedi_13_07_20_43_82.addFeatures(features_75_Lunedi_13_07_20_43_82);
var lyr_75_Lunedi_13_07_20_43_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Lunedi_13_07_20_43_82, 
                style: style_75_Lunedi_13_07_20_43_82,
                popuplayertitle: '75_Lunedi_13_07_20_43',
                interactive: true,
    title: '75_Lunedi_13_07_20_43<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43_82_0.png" /> 1<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43_82_1.png" /> 2<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43_82_2.png" /> 3<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43_82_3.png" /> 4<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43_82_4.png" /> 5<br />' });
var format_73_Lunedi_05_30_13_06_83 = new ol.format.GeoJSON();
var features_73_Lunedi_05_30_13_06_83 = format_73_Lunedi_05_30_13_06_83.readFeatures(json_73_Lunedi_05_30_13_06_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Lunedi_05_30_13_06_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Lunedi_05_30_13_06_83.addFeatures(features_73_Lunedi_05_30_13_06_83);
var lyr_73_Lunedi_05_30_13_06_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Lunedi_05_30_13_06_83, 
                style: style_73_Lunedi_05_30_13_06_83,
                popuplayertitle: '73_Lunedi_05_30_13_06',
                interactive: true,
    title: '73_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06_83_0.png" /> 1<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06_83_1.png" /> 2<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06_83_2.png" /> 3<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06_83_3.png" /> 4<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06_83_4.png" /> 5<br />' });
var format_72_Lunedi_13_07_20_43_84 = new ol.format.GeoJSON();
var features_72_Lunedi_13_07_20_43_84 = format_72_Lunedi_13_07_20_43_84.readFeatures(json_72_Lunedi_13_07_20_43_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Lunedi_13_07_20_43_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Lunedi_13_07_20_43_84.addFeatures(features_72_Lunedi_13_07_20_43_84);
var lyr_72_Lunedi_13_07_20_43_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Lunedi_13_07_20_43_84, 
                style: style_72_Lunedi_13_07_20_43_84,
                popuplayertitle: '72_Lunedi_13_07_20_43',
                interactive: true,
    title: '72_Lunedi_13_07_20_43<br />\
    <img src="styles/legend/72_Lunedi_13_07_20_43_84_0.png" /> 1<br />\
    <img src="styles/legend/72_Lunedi_13_07_20_43_84_1.png" /> 2<br />' });
var format_71_Lunedi_05_30_13_06_85 = new ol.format.GeoJSON();
var features_71_Lunedi_05_30_13_06_85 = format_71_Lunedi_05_30_13_06_85.readFeatures(json_71_Lunedi_05_30_13_06_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Lunedi_05_30_13_06_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Lunedi_05_30_13_06_85.addFeatures(features_71_Lunedi_05_30_13_06_85);
var lyr_71_Lunedi_05_30_13_06_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Lunedi_05_30_13_06_85, 
                style: style_71_Lunedi_05_30_13_06_85,
                popuplayertitle: '71_Lunedi_05_30_13_06',
                interactive: true,
    title: '71_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/71_Lunedi_05_30_13_06_85_0.png" /> 1<br />\
    <img src="styles/legend/71_Lunedi_05_30_13_06_85_1.png" /> 2<br />\
    <img src="styles/legend/71_Lunedi_05_30_13_06_85_2.png" /> 3<br />' });
var format_70_Lunedi_09_30_15_50_86 = new ol.format.GeoJSON();
var features_70_Lunedi_09_30_15_50_86 = format_70_Lunedi_09_30_15_50_86.readFeatures(json_70_Lunedi_09_30_15_50_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Lunedi_09_30_15_50_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Lunedi_09_30_15_50_86.addFeatures(features_70_Lunedi_09_30_15_50_86);
var lyr_70_Lunedi_09_30_15_50_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Lunedi_09_30_15_50_86, 
                style: style_70_Lunedi_09_30_15_50_86,
                popuplayertitle: '70_Lunedi_09_30_15_50',
                interactive: true,
    title: '70_Lunedi_09_30_15_50<br />\
    <img src="styles/legend/70_Lunedi_09_30_15_50_86_0.png" /> 1<br />' });
var group_Lunedi = new ol.layer.Group({
                                layers: [lyr_543_Lunedi_19_00_02_36_70,lyr_542_Lunedi_13_07_20_43_71,lyr_541_Lunedi_05_30_13_06_72,lyr_540_Lunedi_21_50_05_26_73,lyr_534_Lunedi_21_50_05_26_74,lyr_531_Lunedi_05_30_13_06_75,lyr_158_Lunedi_05_30_13_06_76,lyr_156_Lunedi_13_07_20_43_77,lyr_154_Lunedi_21_50_05_26_78,lyr_79_Lunedi_21_50_05_26_79,lyr_77_Lunedi_21_50_05_26_80,lyr_76_Lunedi_19_00_02_36_81,lyr_75_Lunedi_13_07_20_43_82,lyr_73_Lunedi_05_30_13_06_83,lyr_72_Lunedi_13_07_20_43_84,lyr_71_Lunedi_05_30_13_06_85,lyr_70_Lunedi_09_30_15_50_86,],
                                fold: 'close',
                                title: 'Lunedi'});
var group_Martedi = new ol.layer.Group({
                                layers: [lyr_543_Martedi_19_00_02_36_53,lyr_542_Martedi_13_07_20_43_54,lyr_541_Martedi_05_30_13_06_55,lyr_540_Martedi_21_50_05_26_56,lyr_534_Martedi_21_50_05_26_57,lyr_531_Martedi_05_30_13_06_58,lyr_158_Martedi_05_30_13_06_59,lyr_156_Martedi_13_07_20_43_60,lyr_154_Martedi_21_50_05_26_61,lyr_79_Martedi_21_50_05_26_62,lyr_77_Martedi_21_50_05_26_63,lyr_76_Martedi_19_00_02_36_64,lyr_75_Martedi_13_07_20_43_65,lyr_73_Martedi_05_30_13_06_66,lyr_72_Martedi_13_07_20_43_67,lyr_71_Martedi_05_30_13_06_68,lyr_70_Martedi_09_30_15_50_69,],
                                fold: 'close',
                                title: 'Martedi'});
var group_Mercoledi = new ol.layer.Group({
                                layers: [lyr_543_Mercoledi_19_00_02_36_36,lyr_542_Mercoledi_13_07_20_43_37,lyr_541_Mercoledi_05_30_13_06_38,lyr_540_Mercoledi_21_50_05_26_39,lyr_534_Mercoledi_21_50_05_26_40,lyr_531_Mercoledi_05_30_13_06_41,lyr_158_Mercoledi_05_30_13_06_42,lyr_156_Mercoledi_13_07_20_43_43,lyr_154_Mercoledi_21_50_05_26_44,lyr_79_Mercoledi_21_50_05_26_45,lyr_77_Mercoledi_21_50_05_26_46,lyr_76_Mercoledi_19_00_02_36_47,lyr_75_Mercoledi_13_07_20_43_48,lyr_73_Mercoledi_05_30_13_06_49,lyr_72_Mercoledi_13_07_20_43_50,lyr_71_Mercoledi_05_30_13_06_51,lyr_70_Mercoledi_09_30_15_50_52,],
                                fold: 'close',
                                title: 'Mercoledi'});
var group_Giovedi = new ol.layer.Group({
                                layers: [lyr_543_Giovedi_19_00_02_36_19,lyr_542_Giovedi_13_07_20_43_20,lyr_541_Giovedi_05_30_13_06_21,lyr_540_Giovedi_21_50_05_26_22,lyr_534_Giovedi_21_50_05_26_23,lyr_531_Giovedi_05_30_13_06_24,lyr_158_Giovedi_05_30_13_06_25,lyr_156_Giovedi_13_07_20_43_26,lyr_154_Giovedi_21_50_05_26_27,lyr_79_Giovedi_21_50_05_26_28,lyr_77_Giovedi_21_50_05_26_29,lyr_76_Giovedi_19_00_02_36_30,lyr_75_Giovedi_13_07_20_43_31,lyr_73_Giovedi_05_30_13_06_32,lyr_72_Giovedi_13_07_20_43_33,lyr_71_Giovedi_05_30_13_06_34,lyr_70_Giovedi_09_30_15_50_35,],
                                fold: 'close',
                                title: 'Giovedi'});
var group_Venerdi = new ol.layer.Group({
                                layers: [lyr_543_Venerdi_19_00_02_36_2,lyr_542_Venerdi_13_07_20_43_3,lyr_541_Venerdi_05_30_13_06_4,lyr_540_Venerdi_21_50_05_26_5,lyr_534_Venerdi_21_50_05_26_6,lyr_531_Venerdi_05_30_13_06_7,lyr_158_Venerdi_05_30_13_06_8,lyr_156_Venerdi_13_07_20_43_9,lyr_154_Venerdi_21_50_05_26_10,lyr_79_Venerdi_21_50_05_26_11,lyr_77_Venerdi_21_50_05_26_12,lyr_76_Venerdi_19_00_02_36_13,lyr_75_Venerdi_13_07_20_43_14,lyr_73_Venerdi_05_30_13_06_15,lyr_72_Venerdi_13_07_20_43_16,lyr_71_Venerdi_05_30_13_06_17,lyr_70_Venerdi_09_30_15_50_18,],
                                fold: 'close',
                                title: 'Venerdi'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Confini_Comune_Milanodissolto_1.setVisible(true);lyr_543_Venerdi_19_00_02_36_2.setVisible(false);lyr_542_Venerdi_13_07_20_43_3.setVisible(false);lyr_541_Venerdi_05_30_13_06_4.setVisible(false);lyr_540_Venerdi_21_50_05_26_5.setVisible(false);lyr_534_Venerdi_21_50_05_26_6.setVisible(false);lyr_531_Venerdi_05_30_13_06_7.setVisible(false);lyr_158_Venerdi_05_30_13_06_8.setVisible(false);lyr_156_Venerdi_13_07_20_43_9.setVisible(false);lyr_154_Venerdi_21_50_05_26_10.setVisible(false);lyr_79_Venerdi_21_50_05_26_11.setVisible(false);lyr_77_Venerdi_21_50_05_26_12.setVisible(false);lyr_76_Venerdi_19_00_02_36_13.setVisible(false);lyr_75_Venerdi_13_07_20_43_14.setVisible(false);lyr_73_Venerdi_05_30_13_06_15.setVisible(false);lyr_72_Venerdi_13_07_20_43_16.setVisible(false);lyr_71_Venerdi_05_30_13_06_17.setVisible(false);lyr_70_Venerdi_09_30_15_50_18.setVisible(false);lyr_543_Giovedi_19_00_02_36_19.setVisible(false);lyr_542_Giovedi_13_07_20_43_20.setVisible(false);lyr_541_Giovedi_05_30_13_06_21.setVisible(false);lyr_540_Giovedi_21_50_05_26_22.setVisible(false);lyr_534_Giovedi_21_50_05_26_23.setVisible(false);lyr_531_Giovedi_05_30_13_06_24.setVisible(false);lyr_158_Giovedi_05_30_13_06_25.setVisible(false);lyr_156_Giovedi_13_07_20_43_26.setVisible(false);lyr_154_Giovedi_21_50_05_26_27.setVisible(false);lyr_79_Giovedi_21_50_05_26_28.setVisible(false);lyr_77_Giovedi_21_50_05_26_29.setVisible(false);lyr_76_Giovedi_19_00_02_36_30.setVisible(false);lyr_75_Giovedi_13_07_20_43_31.setVisible(false);lyr_73_Giovedi_05_30_13_06_32.setVisible(false);lyr_72_Giovedi_13_07_20_43_33.setVisible(false);lyr_71_Giovedi_05_30_13_06_34.setVisible(false);lyr_70_Giovedi_09_30_15_50_35.setVisible(false);lyr_543_Mercoledi_19_00_02_36_36.setVisible(false);lyr_542_Mercoledi_13_07_20_43_37.setVisible(false);lyr_541_Mercoledi_05_30_13_06_38.setVisible(false);lyr_540_Mercoledi_21_50_05_26_39.setVisible(false);lyr_534_Mercoledi_21_50_05_26_40.setVisible(false);lyr_531_Mercoledi_05_30_13_06_41.setVisible(false);lyr_158_Mercoledi_05_30_13_06_42.setVisible(false);lyr_156_Mercoledi_13_07_20_43_43.setVisible(false);lyr_154_Mercoledi_21_50_05_26_44.setVisible(false);lyr_79_Mercoledi_21_50_05_26_45.setVisible(false);lyr_77_Mercoledi_21_50_05_26_46.setVisible(false);lyr_76_Mercoledi_19_00_02_36_47.setVisible(false);lyr_75_Mercoledi_13_07_20_43_48.setVisible(false);lyr_73_Mercoledi_05_30_13_06_49.setVisible(false);lyr_72_Mercoledi_13_07_20_43_50.setVisible(false);lyr_71_Mercoledi_05_30_13_06_51.setVisible(false);lyr_70_Mercoledi_09_30_15_50_52.setVisible(false);lyr_543_Martedi_19_00_02_36_53.setVisible(false);lyr_542_Martedi_13_07_20_43_54.setVisible(false);lyr_541_Martedi_05_30_13_06_55.setVisible(false);lyr_540_Martedi_21_50_05_26_56.setVisible(false);lyr_534_Martedi_21_50_05_26_57.setVisible(false);lyr_531_Martedi_05_30_13_06_58.setVisible(false);lyr_158_Martedi_05_30_13_06_59.setVisible(false);lyr_156_Martedi_13_07_20_43_60.setVisible(false);lyr_154_Martedi_21_50_05_26_61.setVisible(false);lyr_79_Martedi_21_50_05_26_62.setVisible(false);lyr_77_Martedi_21_50_05_26_63.setVisible(false);lyr_76_Martedi_19_00_02_36_64.setVisible(false);lyr_75_Martedi_13_07_20_43_65.setVisible(false);lyr_73_Martedi_05_30_13_06_66.setVisible(false);lyr_72_Martedi_13_07_20_43_67.setVisible(false);lyr_71_Martedi_05_30_13_06_68.setVisible(false);lyr_70_Martedi_09_30_15_50_69.setVisible(false);lyr_543_Lunedi_19_00_02_36_70.setVisible(false);lyr_542_Lunedi_13_07_20_43_71.setVisible(false);lyr_541_Lunedi_05_30_13_06_72.setVisible(false);lyr_540_Lunedi_21_50_05_26_73.setVisible(false);lyr_534_Lunedi_21_50_05_26_74.setVisible(false);lyr_531_Lunedi_05_30_13_06_75.setVisible(false);lyr_158_Lunedi_05_30_13_06_76.setVisible(true);lyr_156_Lunedi_13_07_20_43_77.setVisible(false);lyr_154_Lunedi_21_50_05_26_78.setVisible(false);lyr_79_Lunedi_21_50_05_26_79.setVisible(false);lyr_77_Lunedi_21_50_05_26_80.setVisible(false);lyr_76_Lunedi_19_00_02_36_81.setVisible(false);lyr_75_Lunedi_13_07_20_43_82.setVisible(false);lyr_73_Lunedi_05_30_13_06_83.setVisible(false);lyr_72_Lunedi_13_07_20_43_84.setVisible(false);lyr_71_Lunedi_05_30_13_06_85.setVisible(false);lyr_70_Lunedi_09_30_15_50_86.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_Confini_Comune_Milanodissolto_1,group_Venerdi,group_Giovedi,group_Mercoledi,group_Martedi,group_Lunedi];
lyr_Confini_Comune_Milanodissolto_1.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETRO': 'PERIMETRO', });
lyr_543_Venerdi_19_00_02_36_2.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_542_Venerdi_13_07_20_43_3.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_541_Venerdi_05_30_13_06_4.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_540_Venerdi_21_50_05_26_5.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_534_Venerdi_21_50_05_26_6.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_531_Venerdi_05_30_13_06_7.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_158_Venerdi_05_30_13_06_8.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_156_Venerdi_13_07_20_43_9.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_154_Venerdi_21_50_05_26_10.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_79_Venerdi_21_50_05_26_11.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_77_Venerdi_21_50_05_26_12.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_76_Venerdi_19_00_02_36_13.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_75_Venerdi_13_07_20_43_14.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_73_Venerdi_05_30_13_06_15.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_72_Venerdi_13_07_20_43_16.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_71_Venerdi_05_30_13_06_17.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_70_Venerdi_09_30_15_50_18.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_543_Giovedi_19_00_02_36_19.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_542_Giovedi_13_07_20_43_20.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_541_Giovedi_05_30_13_06_21.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_540_Giovedi_21_50_05_26_22.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_534_Giovedi_21_50_05_26_23.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_531_Giovedi_05_30_13_06_24.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_158_Giovedi_05_30_13_06_25.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_156_Giovedi_13_07_20_43_26.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_154_Giovedi_21_50_05_26_27.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_79_Giovedi_21_50_05_26_28.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_77_Giovedi_21_50_05_26_29.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_76_Giovedi_19_00_02_36_30.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_75_Giovedi_13_07_20_43_31.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_73_Giovedi_05_30_13_06_32.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_72_Giovedi_13_07_20_43_33.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_71_Giovedi_05_30_13_06_34.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_70_Giovedi_09_30_15_50_35.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_543_Mercoledi_19_00_02_36_36.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_542_Mercoledi_13_07_20_43_37.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_541_Mercoledi_05_30_13_06_38.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_540_Mercoledi_21_50_05_26_39.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_534_Mercoledi_21_50_05_26_40.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_531_Mercoledi_05_30_13_06_41.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_158_Mercoledi_05_30_13_06_42.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_156_Mercoledi_13_07_20_43_43.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_154_Mercoledi_21_50_05_26_44.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_79_Mercoledi_21_50_05_26_45.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_77_Mercoledi_21_50_05_26_46.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_76_Mercoledi_19_00_02_36_47.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_75_Mercoledi_13_07_20_43_48.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_73_Mercoledi_05_30_13_06_49.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_72_Mercoledi_13_07_20_43_50.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_71_Mercoledi_05_30_13_06_51.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_70_Mercoledi_09_30_15_50_52.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_543_Martedi_19_00_02_36_53.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_542_Martedi_13_07_20_43_54.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_541_Martedi_05_30_13_06_55.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_540_Martedi_21_50_05_26_56.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_534_Martedi_21_50_05_26_57.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_531_Martedi_05_30_13_06_58.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_158_Martedi_05_30_13_06_59.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_156_Martedi_13_07_20_43_60.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_154_Martedi_21_50_05_26_61.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_79_Martedi_21_50_05_26_62.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_77_Martedi_21_50_05_26_63.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_76_Martedi_19_00_02_36_64.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_75_Martedi_13_07_20_43_65.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_73_Martedi_05_30_13_06_66.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_72_Martedi_13_07_20_43_67.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_71_Martedi_05_30_13_06_68.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_70_Martedi_09_30_15_50_69.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_543_Lunedi_19_00_02_36_70.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_542_Lunedi_13_07_20_43_71.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_541_Lunedi_05_30_13_06_72.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_540_Lunedi_21_50_05_26_73.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_534_Lunedi_21_50_05_26_74.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_531_Lunedi_05_30_13_06_75.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_158_Lunedi_05_30_13_06_76.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_156_Lunedi_13_07_20_43_77.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_154_Lunedi_21_50_05_26_78.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_79_Lunedi_21_50_05_26_79.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_77_Lunedi_21_50_05_26_80.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_76_Lunedi_19_00_02_36_81.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_75_Lunedi_13_07_20_43_82.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_73_Lunedi_05_30_13_06_83.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_72_Lunedi_13_07_20_43_84.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_71_Lunedi_05_30_13_06_85.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_70_Lunedi_09_30_15_50_86.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'ID_SHP': 'ID_SHP', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', 'ID_EXCEL': 'ID_EXCEL', });
lyr_Confini_Comune_Milanodissolto_1.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRO': 'TextEdit', });
lyr_543_Venerdi_19_00_02_36_2.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_542_Venerdi_13_07_20_43_3.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_541_Venerdi_05_30_13_06_4.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_540_Venerdi_21_50_05_26_5.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_534_Venerdi_21_50_05_26_6.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_531_Venerdi_05_30_13_06_7.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_158_Venerdi_05_30_13_06_8.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_156_Venerdi_13_07_20_43_9.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_154_Venerdi_21_50_05_26_10.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_79_Venerdi_21_50_05_26_11.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_77_Venerdi_21_50_05_26_12.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_76_Venerdi_19_00_02_36_13.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_75_Venerdi_13_07_20_43_14.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_73_Venerdi_05_30_13_06_15.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_72_Venerdi_13_07_20_43_16.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_71_Venerdi_05_30_13_06_17.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_70_Venerdi_09_30_15_50_18.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_543_Giovedi_19_00_02_36_19.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_542_Giovedi_13_07_20_43_20.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_541_Giovedi_05_30_13_06_21.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_540_Giovedi_21_50_05_26_22.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_534_Giovedi_21_50_05_26_23.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_531_Giovedi_05_30_13_06_24.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_158_Giovedi_05_30_13_06_25.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_156_Giovedi_13_07_20_43_26.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_154_Giovedi_21_50_05_26_27.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_79_Giovedi_21_50_05_26_28.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_77_Giovedi_21_50_05_26_29.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_76_Giovedi_19_00_02_36_30.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_75_Giovedi_13_07_20_43_31.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_73_Giovedi_05_30_13_06_32.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_72_Giovedi_13_07_20_43_33.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_71_Giovedi_05_30_13_06_34.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_70_Giovedi_09_30_15_50_35.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_543_Mercoledi_19_00_02_36_36.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_542_Mercoledi_13_07_20_43_37.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_541_Mercoledi_05_30_13_06_38.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_540_Mercoledi_21_50_05_26_39.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_534_Mercoledi_21_50_05_26_40.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_531_Mercoledi_05_30_13_06_41.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_158_Mercoledi_05_30_13_06_42.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_156_Mercoledi_13_07_20_43_43.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_154_Mercoledi_21_50_05_26_44.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_79_Mercoledi_21_50_05_26_45.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_77_Mercoledi_21_50_05_26_46.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_76_Mercoledi_19_00_02_36_47.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_75_Mercoledi_13_07_20_43_48.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_73_Mercoledi_05_30_13_06_49.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_72_Mercoledi_13_07_20_43_50.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_71_Mercoledi_05_30_13_06_51.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_70_Mercoledi_09_30_15_50_52.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_543_Martedi_19_00_02_36_53.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_542_Martedi_13_07_20_43_54.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_541_Martedi_05_30_13_06_55.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_540_Martedi_21_50_05_26_56.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_534_Martedi_21_50_05_26_57.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_531_Martedi_05_30_13_06_58.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_158_Martedi_05_30_13_06_59.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_156_Martedi_13_07_20_43_60.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_154_Martedi_21_50_05_26_61.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_79_Martedi_21_50_05_26_62.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_77_Martedi_21_50_05_26_63.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_76_Martedi_19_00_02_36_64.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_75_Martedi_13_07_20_43_65.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_73_Martedi_05_30_13_06_66.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_72_Martedi_13_07_20_43_67.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_71_Martedi_05_30_13_06_68.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_70_Martedi_09_30_15_50_69.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_543_Lunedi_19_00_02_36_70.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_542_Lunedi_13_07_20_43_71.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_541_Lunedi_05_30_13_06_72.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_540_Lunedi_21_50_05_26_73.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_534_Lunedi_21_50_05_26_74.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_531_Lunedi_05_30_13_06_75.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_158_Lunedi_05_30_13_06_76.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_156_Lunedi_13_07_20_43_77.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_154_Lunedi_21_50_05_26_78.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_79_Lunedi_21_50_05_26_79.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_77_Lunedi_21_50_05_26_80.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_76_Lunedi_19_00_02_36_81.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_75_Lunedi_13_07_20_43_82.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_73_Lunedi_05_30_13_06_83.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_72_Lunedi_13_07_20_43_84.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_71_Lunedi_05_30_13_06_85.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_70_Lunedi_09_30_15_50_86.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'ID_SHP': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', 'ID_EXCEL': '', });
lyr_Confini_Comune_Milanodissolto_1.set('fieldLabels', {'fid': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERIMETRO': 'inline label - always visible', });
lyr_543_Venerdi_19_00_02_36_2.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_542_Venerdi_13_07_20_43_3.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_541_Venerdi_05_30_13_06_4.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_540_Venerdi_21_50_05_26_5.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_534_Venerdi_21_50_05_26_6.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_531_Venerdi_05_30_13_06_7.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_158_Venerdi_05_30_13_06_8.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_156_Venerdi_13_07_20_43_9.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_154_Venerdi_21_50_05_26_10.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_79_Venerdi_21_50_05_26_11.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_77_Venerdi_21_50_05_26_12.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_76_Venerdi_19_00_02_36_13.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_75_Venerdi_13_07_20_43_14.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_73_Venerdi_05_30_13_06_15.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_72_Venerdi_13_07_20_43_16.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_71_Venerdi_05_30_13_06_17.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_70_Venerdi_09_30_15_50_18.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_543_Giovedi_19_00_02_36_19.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_542_Giovedi_13_07_20_43_20.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_541_Giovedi_05_30_13_06_21.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_540_Giovedi_21_50_05_26_22.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_534_Giovedi_21_50_05_26_23.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_531_Giovedi_05_30_13_06_24.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_158_Giovedi_05_30_13_06_25.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_156_Giovedi_13_07_20_43_26.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_154_Giovedi_21_50_05_26_27.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_79_Giovedi_21_50_05_26_28.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_77_Giovedi_21_50_05_26_29.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_76_Giovedi_19_00_02_36_30.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_75_Giovedi_13_07_20_43_31.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_73_Giovedi_05_30_13_06_32.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_72_Giovedi_13_07_20_43_33.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_71_Giovedi_05_30_13_06_34.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_70_Giovedi_09_30_15_50_35.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_543_Mercoledi_19_00_02_36_36.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_542_Mercoledi_13_07_20_43_37.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_541_Mercoledi_05_30_13_06_38.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_540_Mercoledi_21_50_05_26_39.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_534_Mercoledi_21_50_05_26_40.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_531_Mercoledi_05_30_13_06_41.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_158_Mercoledi_05_30_13_06_42.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_156_Mercoledi_13_07_20_43_43.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_154_Mercoledi_21_50_05_26_44.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_79_Mercoledi_21_50_05_26_45.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_77_Mercoledi_21_50_05_26_46.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_76_Mercoledi_19_00_02_36_47.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_75_Mercoledi_13_07_20_43_48.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_73_Mercoledi_05_30_13_06_49.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_72_Mercoledi_13_07_20_43_50.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_71_Mercoledi_05_30_13_06_51.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_70_Mercoledi_09_30_15_50_52.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_543_Martedi_19_00_02_36_53.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_542_Martedi_13_07_20_43_54.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_541_Martedi_05_30_13_06_55.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_540_Martedi_21_50_05_26_56.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_534_Martedi_21_50_05_26_57.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_531_Martedi_05_30_13_06_58.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_158_Martedi_05_30_13_06_59.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_156_Martedi_13_07_20_43_60.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_154_Martedi_21_50_05_26_61.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_79_Martedi_21_50_05_26_62.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_77_Martedi_21_50_05_26_63.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_76_Martedi_19_00_02_36_64.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_75_Martedi_13_07_20_43_65.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_73_Martedi_05_30_13_06_66.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_72_Martedi_13_07_20_43_67.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_71_Martedi_05_30_13_06_68.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_70_Martedi_09_30_15_50_69.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_543_Lunedi_19_00_02_36_70.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_542_Lunedi_13_07_20_43_71.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_541_Lunedi_05_30_13_06_72.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_540_Lunedi_21_50_05_26_73.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_534_Lunedi_21_50_05_26_74.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_531_Lunedi_05_30_13_06_75.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_158_Lunedi_05_30_13_06_76.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_156_Lunedi_13_07_20_43_77.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_154_Lunedi_21_50_05_26_78.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_79_Lunedi_21_50_05_26_79.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_77_Lunedi_21_50_05_26_80.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_76_Lunedi_19_00_02_36_81.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_75_Lunedi_13_07_20_43_82.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_73_Lunedi_05_30_13_06_83.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_72_Lunedi_13_07_20_43_84.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_71_Lunedi_05_30_13_06_85.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_70_Lunedi_09_30_15_50_86.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'ID_SHP': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', 'ID_EXCEL': 'inline label - always visible', });
lyr_70_Lunedi_09_30_15_50_86.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});