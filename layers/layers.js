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
var format_71_Domenica_05_30_13_06_2 = new ol.format.GeoJSON();
var features_71_Domenica_05_30_13_06_2 = format_71_Domenica_05_30_13_06_2.readFeatures(json_71_Domenica_05_30_13_06_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Domenica_05_30_13_06_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Domenica_05_30_13_06_2.addFeatures(features_71_Domenica_05_30_13_06_2);
var lyr_71_Domenica_05_30_13_06_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Domenica_05_30_13_06_2, 
                style: style_71_Domenica_05_30_13_06_2,
                popuplayertitle: '71_Domenica_05_30_13_06',
                interactive: true,
    title: '71_Domenica_05_30_13_06<br />\
    <img src="styles/legend/71_Domenica_05_30_13_06_2_0.png" /> 1<br />' });
var format_72_Domenica_13_06_20_43_3 = new ol.format.GeoJSON();
var features_72_Domenica_13_06_20_43_3 = format_72_Domenica_13_06_20_43_3.readFeatures(json_72_Domenica_13_06_20_43_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Domenica_13_06_20_43_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Domenica_13_06_20_43_3.addFeatures(features_72_Domenica_13_06_20_43_3);
var lyr_72_Domenica_13_06_20_43_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Domenica_13_06_20_43_3, 
                style: style_72_Domenica_13_06_20_43_3,
                popuplayertitle: '72_Domenica_13_06_20_43',
                interactive: true,
    title: '72_Domenica_13_06_20_43<br />\
    <img src="styles/legend/72_Domenica_13_06_20_43_3_0.png" /> 1<br />' });
var format_73_Domenica_05_30_13_06_4 = new ol.format.GeoJSON();
var features_73_Domenica_05_30_13_06_4 = format_73_Domenica_05_30_13_06_4.readFeatures(json_73_Domenica_05_30_13_06_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Domenica_05_30_13_06_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Domenica_05_30_13_06_4.addFeatures(features_73_Domenica_05_30_13_06_4);
var lyr_73_Domenica_05_30_13_06_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Domenica_05_30_13_06_4, 
                style: style_73_Domenica_05_30_13_06_4,
                popuplayertitle: '73_Domenica_05_30_13_06',
                interactive: true,
    title: '73_Domenica_05_30_13_06<br />\
    <img src="styles/legend/73_Domenica_05_30_13_06_4_0.png" /> 1<br />\
    <img src="styles/legend/73_Domenica_05_30_13_06_4_1.png" /> 2<br />\
    <img src="styles/legend/73_Domenica_05_30_13_06_4_2.png" /> 3<br />' });
var format_75_Domenica_13_07_20_43_5 = new ol.format.GeoJSON();
var features_75_Domenica_13_07_20_43_5 = format_75_Domenica_13_07_20_43_5.readFeatures(json_75_Domenica_13_07_20_43_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Domenica_13_07_20_43_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Domenica_13_07_20_43_5.addFeatures(features_75_Domenica_13_07_20_43_5);
var lyr_75_Domenica_13_07_20_43_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Domenica_13_07_20_43_5, 
                style: style_75_Domenica_13_07_20_43_5,
                popuplayertitle: '75_Domenica_13_07_20_43',
                interactive: true,
    title: '75_Domenica_13_07_20_43<br />\
    <img src="styles/legend/75_Domenica_13_07_20_43_5_0.png" /> 1<br />\
    <img src="styles/legend/75_Domenica_13_07_20_43_5_1.png" /> 2<br />\
    <img src="styles/legend/75_Domenica_13_07_20_43_5_2.png" /> 3<br />' });
var format_76_Domenica_19_00_02_36_6 = new ol.format.GeoJSON();
var features_76_Domenica_19_00_02_36_6 = format_76_Domenica_19_00_02_36_6.readFeatures(json_76_Domenica_19_00_02_36_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Domenica_19_00_02_36_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Domenica_19_00_02_36_6.addFeatures(features_76_Domenica_19_00_02_36_6);
var lyr_76_Domenica_19_00_02_36_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Domenica_19_00_02_36_6, 
                style: style_76_Domenica_19_00_02_36_6,
                popuplayertitle: '76_Domenica_19_00_02_36',
                interactive: true,
    title: '76_Domenica_19_00_02_36<br />\
    <img src="styles/legend/76_Domenica_19_00_02_36_6_0.png" /> 1<br />' });
var format_77_Domenica_21_50_05_26_7 = new ol.format.GeoJSON();
var features_77_Domenica_21_50_05_26_7 = format_77_Domenica_21_50_05_26_7.readFeatures(json_77_Domenica_21_50_05_26_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Domenica_21_50_05_26_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Domenica_21_50_05_26_7.addFeatures(features_77_Domenica_21_50_05_26_7);
var lyr_77_Domenica_21_50_05_26_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Domenica_21_50_05_26_7, 
                style: style_77_Domenica_21_50_05_26_7,
                popuplayertitle: '77_Domenica_21_50_05_26',
                interactive: true,
    title: '77_Domenica_21_50_05_26<br />\
    <img src="styles/legend/77_Domenica_21_50_05_26_7_0.png" /> 1<br />\
    <img src="styles/legend/77_Domenica_21_50_05_26_7_1.png" /> 2<br />\
    <img src="styles/legend/77_Domenica_21_50_05_26_7_2.png" /> 3<br />\
    <img src="styles/legend/77_Domenica_21_50_05_26_7_3.png" /> 4<br />\
    <img src="styles/legend/77_Domenica_21_50_05_26_7_4.png" /> 5<br />\
    <img src="styles/legend/77_Domenica_21_50_05_26_7_5.png" /> 6<br />\
    <img src="styles/legend/77_Domenica_21_50_05_26_7_6.png" /> 7<br />\
    <img src="styles/legend/77_Domenica_21_50_05_26_7_7.png" /> 8<br />' });
var format_79_Domenica_21_50_05_26_8 = new ol.format.GeoJSON();
var features_79_Domenica_21_50_05_26_8 = format_79_Domenica_21_50_05_26_8.readFeatures(json_79_Domenica_21_50_05_26_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Domenica_21_50_05_26_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Domenica_21_50_05_26_8.addFeatures(features_79_Domenica_21_50_05_26_8);
var lyr_79_Domenica_21_50_05_26_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Domenica_21_50_05_26_8, 
                style: style_79_Domenica_21_50_05_26_8,
                popuplayertitle: '79_Domenica_21_50_05_26',
                interactive: true,
    title: '79_Domenica_21_50_05_26<br />\
    <img src="styles/legend/79_Domenica_21_50_05_26_8_0.png" /> 1<br />\
    <img src="styles/legend/79_Domenica_21_50_05_26_8_1.png" /> 2<br />' });
var format_154_Domenica_21_50_05_26_9 = new ol.format.GeoJSON();
var features_154_Domenica_21_50_05_26_9 = format_154_Domenica_21_50_05_26_9.readFeatures(json_154_Domenica_21_50_05_26_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Domenica_21_50_05_26_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Domenica_21_50_05_26_9.addFeatures(features_154_Domenica_21_50_05_26_9);
var lyr_154_Domenica_21_50_05_26_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Domenica_21_50_05_26_9, 
                style: style_154_Domenica_21_50_05_26_9,
                popuplayertitle: '154_Domenica_21_50_05_26',
                interactive: true,
    title: '154_Domenica_21_50_05_26<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26_9_0.png" /> 1<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26_9_1.png" /> 2<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26_9_2.png" /> 3<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26_9_3.png" /> 4<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26_9_4.png" /> 5<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26_9_5.png" /> 6<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26_9_6.png" /> 7<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26_9_7.png" /> 8<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26_9_8.png" /> 9<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26_9_9.png" /> 10<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26_9_10.png" /> 11<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26_9_11.png" /> 12<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26_9_12.png" /> 13<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26_9_13.png" /> 14<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26_9_14.png" /> 15<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26_9_15.png" /> 16<br />\
    <img src="styles/legend/154_Domenica_21_50_05_26_9_16.png" /> 17<br />' });
var format_156_Domenica_13_07_20_43_10 = new ol.format.GeoJSON();
var features_156_Domenica_13_07_20_43_10 = format_156_Domenica_13_07_20_43_10.readFeatures(json_156_Domenica_13_07_20_43_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Domenica_13_07_20_43_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Domenica_13_07_20_43_10.addFeatures(features_156_Domenica_13_07_20_43_10);
var lyr_156_Domenica_13_07_20_43_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Domenica_13_07_20_43_10, 
                style: style_156_Domenica_13_07_20_43_10,
                popuplayertitle: '156_Domenica_13_07_20_43',
                interactive: true,
    title: '156_Domenica_13_07_20_43<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43_10_0.png" /> 1<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43_10_1.png" /> 2<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43_10_2.png" /> 3<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43_10_3.png" /> 4<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43_10_4.png" /> 5<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43_10_5.png" /> 6<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43_10_6.png" /> 7<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43_10_7.png" /> 8<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43_10_8.png" /> 9<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43_10_9.png" /> 10<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43_10_10.png" /> 11<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43_10_11.png" /> 12<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43_10_12.png" /> 13<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43_10_13.png" /> 14<br />\
    <img src="styles/legend/156_Domenica_13_07_20_43_10_14.png" /> 15<br />' });
var format_158_Domenica_05_30_13_06_11 = new ol.format.GeoJSON();
var features_158_Domenica_05_30_13_06_11 = format_158_Domenica_05_30_13_06_11.readFeatures(json_158_Domenica_05_30_13_06_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Domenica_05_30_13_06_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Domenica_05_30_13_06_11.addFeatures(features_158_Domenica_05_30_13_06_11);
var lyr_158_Domenica_05_30_13_06_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Domenica_05_30_13_06_11, 
                style: style_158_Domenica_05_30_13_06_11,
                popuplayertitle: '158_Domenica_05_30_13_06',
                interactive: true,
    title: '158_Domenica_05_30_13_06<br />\
    <img src="styles/legend/158_Domenica_05_30_13_06_11_0.png" /> 1<br />\
    <img src="styles/legend/158_Domenica_05_30_13_06_11_1.png" /> 2<br />\
    <img src="styles/legend/158_Domenica_05_30_13_06_11_2.png" /> 3<br />\
    <img src="styles/legend/158_Domenica_05_30_13_06_11_3.png" /> 4<br />\
    <img src="styles/legend/158_Domenica_05_30_13_06_11_4.png" /> 5<br />\
    <img src="styles/legend/158_Domenica_05_30_13_06_11_5.png" /> 6<br />\
    <img src="styles/legend/158_Domenica_05_30_13_06_11_6.png" /> 7<br />' });
var format_531_Domenica_05_30_13_06_12 = new ol.format.GeoJSON();
var features_531_Domenica_05_30_13_06_12 = format_531_Domenica_05_30_13_06_12.readFeatures(json_531_Domenica_05_30_13_06_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Domenica_05_30_13_06_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Domenica_05_30_13_06_12.addFeatures(features_531_Domenica_05_30_13_06_12);
var lyr_531_Domenica_05_30_13_06_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Domenica_05_30_13_06_12, 
                style: style_531_Domenica_05_30_13_06_12,
                popuplayertitle: '531_Domenica_05_30_13_06',
                interactive: true,
    title: '531_Domenica_05_30_13_06<br />\
    <img src="styles/legend/531_Domenica_05_30_13_06_12_0.png" /> 1<br />' });
var format_534_Domenica_21_50_05_26_13 = new ol.format.GeoJSON();
var features_534_Domenica_21_50_05_26_13 = format_534_Domenica_21_50_05_26_13.readFeatures(json_534_Domenica_21_50_05_26_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Domenica_21_50_05_26_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Domenica_21_50_05_26_13.addFeatures(features_534_Domenica_21_50_05_26_13);
var lyr_534_Domenica_21_50_05_26_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Domenica_21_50_05_26_13, 
                style: style_534_Domenica_21_50_05_26_13,
                popuplayertitle: '534_Domenica_21_50_05_26',
                interactive: true,
    title: '534_Domenica_21_50_05_26<br />\
    <img src="styles/legend/534_Domenica_21_50_05_26_13_0.png" /> 1<br />' });
var format_540_Domenica_21_50_05_26_14 = new ol.format.GeoJSON();
var features_540_Domenica_21_50_05_26_14 = format_540_Domenica_21_50_05_26_14.readFeatures(json_540_Domenica_21_50_05_26_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Domenica_21_50_05_26_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Domenica_21_50_05_26_14.addFeatures(features_540_Domenica_21_50_05_26_14);
var lyr_540_Domenica_21_50_05_26_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Domenica_21_50_05_26_14, 
                style: style_540_Domenica_21_50_05_26_14,
                popuplayertitle: '540_Domenica_21_50_05_26',
                interactive: true,
    title: '540_Domenica_21_50_05_26<br />\
    <img src="styles/legend/540_Domenica_21_50_05_26_14_0.png" /> 1<br />' });
var format_541_Domenica_05_30_13_06_15 = new ol.format.GeoJSON();
var features_541_Domenica_05_30_13_06_15 = format_541_Domenica_05_30_13_06_15.readFeatures(json_541_Domenica_05_30_13_06_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Domenica_05_30_13_06_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Domenica_05_30_13_06_15.addFeatures(features_541_Domenica_05_30_13_06_15);
var lyr_541_Domenica_05_30_13_06_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Domenica_05_30_13_06_15, 
                style: style_541_Domenica_05_30_13_06_15,
                popuplayertitle: '541_Domenica_05_30_13_06',
                interactive: true,
    title: '541_Domenica_05_30_13_06<br />\
    <img src="styles/legend/541_Domenica_05_30_13_06_15_0.png" /> 1<br />\
    <img src="styles/legend/541_Domenica_05_30_13_06_15_1.png" /> 2<br />\
    <img src="styles/legend/541_Domenica_05_30_13_06_15_2.png" /> 3<br />' });
var format_542_Domenica_13_07_20_43_16 = new ol.format.GeoJSON();
var features_542_Domenica_13_07_20_43_16 = format_542_Domenica_13_07_20_43_16.readFeatures(json_542_Domenica_13_07_20_43_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Domenica_13_07_20_43_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Domenica_13_07_20_43_16.addFeatures(features_542_Domenica_13_07_20_43_16);
var lyr_542_Domenica_13_07_20_43_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Domenica_13_07_20_43_16, 
                style: style_542_Domenica_13_07_20_43_16,
                popuplayertitle: '542_Domenica_13_07_20_43',
                interactive: true,
    title: '542_Domenica_13_07_20_43<br />\
    <img src="styles/legend/542_Domenica_13_07_20_43_16_0.png" /> 1<br />\
    <img src="styles/legend/542_Domenica_13_07_20_43_16_1.png" /> 2<br />' });
var format_543_Domenica_19_00_02_36_17 = new ol.format.GeoJSON();
var features_543_Domenica_19_00_02_36_17 = format_543_Domenica_19_00_02_36_17.readFeatures(json_543_Domenica_19_00_02_36_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Domenica_19_00_02_36_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Domenica_19_00_02_36_17.addFeatures(features_543_Domenica_19_00_02_36_17);
var lyr_543_Domenica_19_00_02_36_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Domenica_19_00_02_36_17, 
                style: style_543_Domenica_19_00_02_36_17,
                popuplayertitle: '543_Domenica_19_00_02_36',
                interactive: true,
    title: '543_Domenica_19_00_02_36<br />\
    <img src="styles/legend/543_Domenica_19_00_02_36_17_0.png" /> 1<br />' });
var format_70_Sabato_09_30_15_50_18 = new ol.format.GeoJSON();
var features_70_Sabato_09_30_15_50_18 = format_70_Sabato_09_30_15_50_18.readFeatures(json_70_Sabato_09_30_15_50_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Sabato_09_30_15_50_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Sabato_09_30_15_50_18.addFeatures(features_70_Sabato_09_30_15_50_18);
var lyr_70_Sabato_09_30_15_50_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Sabato_09_30_15_50_18, 
                style: style_70_Sabato_09_30_15_50_18,
                popuplayertitle: '70_Sabato_09_30_15_50',
                interactive: true,
    title: '70_Sabato_09_30_15_50<br />\
    <img src="styles/legend/70_Sabato_09_30_15_50_18_0.png" /> 1<br />' });
var format_71_Sabato_05_30_13_06_19 = new ol.format.GeoJSON();
var features_71_Sabato_05_30_13_06_19 = format_71_Sabato_05_30_13_06_19.readFeatures(json_71_Sabato_05_30_13_06_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Sabato_05_30_13_06_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Sabato_05_30_13_06_19.addFeatures(features_71_Sabato_05_30_13_06_19);
var lyr_71_Sabato_05_30_13_06_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Sabato_05_30_13_06_19, 
                style: style_71_Sabato_05_30_13_06_19,
                popuplayertitle: '71_Sabato_05_30_13_06',
                interactive: true,
    title: '71_Sabato_05_30_13_06<br />\
    <img src="styles/legend/71_Sabato_05_30_13_06_19_0.png" /> 1<br />' });
var format_72_Sabato_13_06_20_43_20 = new ol.format.GeoJSON();
var features_72_Sabato_13_06_20_43_20 = format_72_Sabato_13_06_20_43_20.readFeatures(json_72_Sabato_13_06_20_43_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Sabato_13_06_20_43_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Sabato_13_06_20_43_20.addFeatures(features_72_Sabato_13_06_20_43_20);
var lyr_72_Sabato_13_06_20_43_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Sabato_13_06_20_43_20, 
                style: style_72_Sabato_13_06_20_43_20,
                popuplayertitle: '72_Sabato_13_06_20_43',
                interactive: true,
    title: '72_Sabato_13_06_20_43<br />\
    <img src="styles/legend/72_Sabato_13_06_20_43_20_0.png" /> 1<br />' });
var format_73_Sabato_05_30_13_06_21 = new ol.format.GeoJSON();
var features_73_Sabato_05_30_13_06_21 = format_73_Sabato_05_30_13_06_21.readFeatures(json_73_Sabato_05_30_13_06_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Sabato_05_30_13_06_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Sabato_05_30_13_06_21.addFeatures(features_73_Sabato_05_30_13_06_21);
var lyr_73_Sabato_05_30_13_06_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Sabato_05_30_13_06_21, 
                style: style_73_Sabato_05_30_13_06_21,
                popuplayertitle: '73_Sabato_05_30_13_06',
                interactive: true,
    title: '73_Sabato_05_30_13_06<br />\
    <img src="styles/legend/73_Sabato_05_30_13_06_21_0.png" /> 1<br />\
    <img src="styles/legend/73_Sabato_05_30_13_06_21_1.png" /> 2<br />\
    <img src="styles/legend/73_Sabato_05_30_13_06_21_2.png" /> 3<br />' });
var format_75_Sabato_13_07_20_43_22 = new ol.format.GeoJSON();
var features_75_Sabato_13_07_20_43_22 = format_75_Sabato_13_07_20_43_22.readFeatures(json_75_Sabato_13_07_20_43_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Sabato_13_07_20_43_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Sabato_13_07_20_43_22.addFeatures(features_75_Sabato_13_07_20_43_22);
var lyr_75_Sabato_13_07_20_43_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Sabato_13_07_20_43_22, 
                style: style_75_Sabato_13_07_20_43_22,
                popuplayertitle: '75_Sabato_13_07_20_43',
                interactive: true,
    title: '75_Sabato_13_07_20_43<br />\
    <img src="styles/legend/75_Sabato_13_07_20_43_22_0.png" /> 1<br />\
    <img src="styles/legend/75_Sabato_13_07_20_43_22_1.png" /> 2<br />\
    <img src="styles/legend/75_Sabato_13_07_20_43_22_2.png" /> 3<br />' });
var format_76_Sabato_19_00_02_36_23 = new ol.format.GeoJSON();
var features_76_Sabato_19_00_02_36_23 = format_76_Sabato_19_00_02_36_23.readFeatures(json_76_Sabato_19_00_02_36_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Sabato_19_00_02_36_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Sabato_19_00_02_36_23.addFeatures(features_76_Sabato_19_00_02_36_23);
var lyr_76_Sabato_19_00_02_36_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Sabato_19_00_02_36_23, 
                style: style_76_Sabato_19_00_02_36_23,
                popuplayertitle: '76_Sabato_19_00_02_36',
                interactive: true,
    title: '76_Sabato_19_00_02_36<br />\
    <img src="styles/legend/76_Sabato_19_00_02_36_23_0.png" /> 1<br />' });
var format_77_Sabato_21_50_05_26_24 = new ol.format.GeoJSON();
var features_77_Sabato_21_50_05_26_24 = format_77_Sabato_21_50_05_26_24.readFeatures(json_77_Sabato_21_50_05_26_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Sabato_21_50_05_26_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Sabato_21_50_05_26_24.addFeatures(features_77_Sabato_21_50_05_26_24);
var lyr_77_Sabato_21_50_05_26_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Sabato_21_50_05_26_24, 
                style: style_77_Sabato_21_50_05_26_24,
                popuplayertitle: '77_Sabato_21_50_05_26',
                interactive: true,
    title: '77_Sabato_21_50_05_26<br />\
    <img src="styles/legend/77_Sabato_21_50_05_26_24_0.png" /> 1<br />\
    <img src="styles/legend/77_Sabato_21_50_05_26_24_1.png" /> 2<br />\
    <img src="styles/legend/77_Sabato_21_50_05_26_24_2.png" /> 3<br />\
    <img src="styles/legend/77_Sabato_21_50_05_26_24_3.png" /> 4<br />\
    <img src="styles/legend/77_Sabato_21_50_05_26_24_4.png" /> 5<br />\
    <img src="styles/legend/77_Sabato_21_50_05_26_24_5.png" /> 6<br />\
    <img src="styles/legend/77_Sabato_21_50_05_26_24_6.png" /> 7<br />\
    <img src="styles/legend/77_Sabato_21_50_05_26_24_7.png" /> 8<br />' });
var format_79_Sabato_21_50_05_26_25 = new ol.format.GeoJSON();
var features_79_Sabato_21_50_05_26_25 = format_79_Sabato_21_50_05_26_25.readFeatures(json_79_Sabato_21_50_05_26_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Sabato_21_50_05_26_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Sabato_21_50_05_26_25.addFeatures(features_79_Sabato_21_50_05_26_25);
var lyr_79_Sabato_21_50_05_26_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Sabato_21_50_05_26_25, 
                style: style_79_Sabato_21_50_05_26_25,
                popuplayertitle: '79_Sabato_21_50_05_26',
                interactive: true,
    title: '79_Sabato_21_50_05_26<br />\
    <img src="styles/legend/79_Sabato_21_50_05_26_25_0.png" /> 1<br />' });
var format_154_Sabato_21_50_05_26_26 = new ol.format.GeoJSON();
var features_154_Sabato_21_50_05_26_26 = format_154_Sabato_21_50_05_26_26.readFeatures(json_154_Sabato_21_50_05_26_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Sabato_21_50_05_26_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Sabato_21_50_05_26_26.addFeatures(features_154_Sabato_21_50_05_26_26);
var lyr_154_Sabato_21_50_05_26_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Sabato_21_50_05_26_26, 
                style: style_154_Sabato_21_50_05_26_26,
                popuplayertitle: '154_Sabato_21_50_05_26',
                interactive: true,
    title: '154_Sabato_21_50_05_26<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26_26_0.png" /> 1<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26_26_1.png" /> 2<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26_26_2.png" /> 3<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26_26_3.png" /> 4<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26_26_4.png" /> 5<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26_26_5.png" /> 6<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26_26_6.png" /> 7<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26_26_7.png" /> 8<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26_26_8.png" /> 9<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26_26_9.png" /> 10<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26_26_10.png" /> 11<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26_26_11.png" /> 12<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26_26_12.png" /> 13<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26_26_13.png" /> 14<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26_26_14.png" /> 15<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26_26_15.png" /> 16<br />\
    <img src="styles/legend/154_Sabato_21_50_05_26_26_16.png" /> 17<br />' });
var format_156_Sabato_13_07_20_43_27 = new ol.format.GeoJSON();
var features_156_Sabato_13_07_20_43_27 = format_156_Sabato_13_07_20_43_27.readFeatures(json_156_Sabato_13_07_20_43_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Sabato_13_07_20_43_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Sabato_13_07_20_43_27.addFeatures(features_156_Sabato_13_07_20_43_27);
var lyr_156_Sabato_13_07_20_43_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Sabato_13_07_20_43_27, 
                style: style_156_Sabato_13_07_20_43_27,
                popuplayertitle: '156_Sabato_13_07_20_43',
                interactive: true,
    title: '156_Sabato_13_07_20_43<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43_27_0.png" /> 1<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43_27_1.png" /> 2<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43_27_2.png" /> 3<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43_27_3.png" /> 4<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43_27_4.png" /> 5<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43_27_5.png" /> 6<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43_27_6.png" /> 7<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43_27_7.png" /> 8<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43_27_8.png" /> 9<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43_27_9.png" /> 10<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43_27_10.png" /> 11<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43_27_11.png" /> 12<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43_27_12.png" /> 13<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43_27_13.png" /> 14<br />\
    <img src="styles/legend/156_Sabato_13_07_20_43_27_14.png" /> 15<br />' });
var format_158_Sabato_05_30_13_06_28 = new ol.format.GeoJSON();
var features_158_Sabato_05_30_13_06_28 = format_158_Sabato_05_30_13_06_28.readFeatures(json_158_Sabato_05_30_13_06_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Sabato_05_30_13_06_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Sabato_05_30_13_06_28.addFeatures(features_158_Sabato_05_30_13_06_28);
var lyr_158_Sabato_05_30_13_06_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Sabato_05_30_13_06_28, 
                style: style_158_Sabato_05_30_13_06_28,
                popuplayertitle: '158_Sabato_05_30_13_06',
                interactive: true,
    title: '158_Sabato_05_30_13_06<br />\
    <img src="styles/legend/158_Sabato_05_30_13_06_28_0.png" /> 1<br />\
    <img src="styles/legend/158_Sabato_05_30_13_06_28_1.png" /> 2<br />\
    <img src="styles/legend/158_Sabato_05_30_13_06_28_2.png" /> 3<br />\
    <img src="styles/legend/158_Sabato_05_30_13_06_28_3.png" /> 4<br />\
    <img src="styles/legend/158_Sabato_05_30_13_06_28_4.png" /> 5<br />\
    <img src="styles/legend/158_Sabato_05_30_13_06_28_5.png" /> 6<br />\
    <img src="styles/legend/158_Sabato_05_30_13_06_28_6.png" /> 7<br />' });
var format_531_Sabato_05_30_13_06_29 = new ol.format.GeoJSON();
var features_531_Sabato_05_30_13_06_29 = format_531_Sabato_05_30_13_06_29.readFeatures(json_531_Sabato_05_30_13_06_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Sabato_05_30_13_06_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Sabato_05_30_13_06_29.addFeatures(features_531_Sabato_05_30_13_06_29);
var lyr_531_Sabato_05_30_13_06_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Sabato_05_30_13_06_29, 
                style: style_531_Sabato_05_30_13_06_29,
                popuplayertitle: '531_Sabato_05_30_13_06',
                interactive: true,
    title: '531_Sabato_05_30_13_06<br />\
    <img src="styles/legend/531_Sabato_05_30_13_06_29_0.png" /> 1<br />' });
var format_534_Sabato_21_50_05_26_30 = new ol.format.GeoJSON();
var features_534_Sabato_21_50_05_26_30 = format_534_Sabato_21_50_05_26_30.readFeatures(json_534_Sabato_21_50_05_26_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Sabato_21_50_05_26_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Sabato_21_50_05_26_30.addFeatures(features_534_Sabato_21_50_05_26_30);
var lyr_534_Sabato_21_50_05_26_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Sabato_21_50_05_26_30, 
                style: style_534_Sabato_21_50_05_26_30,
                popuplayertitle: '534_Sabato_21_50_05_26',
                interactive: true,
    title: '534_Sabato_21_50_05_26<br />\
    <img src="styles/legend/534_Sabato_21_50_05_26_30_0.png" /> 1<br />' });
var format_540_Sabato_21_50_05_26_31 = new ol.format.GeoJSON();
var features_540_Sabato_21_50_05_26_31 = format_540_Sabato_21_50_05_26_31.readFeatures(json_540_Sabato_21_50_05_26_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Sabato_21_50_05_26_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Sabato_21_50_05_26_31.addFeatures(features_540_Sabato_21_50_05_26_31);
var lyr_540_Sabato_21_50_05_26_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Sabato_21_50_05_26_31, 
                style: style_540_Sabato_21_50_05_26_31,
                popuplayertitle: '540_Sabato_21_50_05_26',
                interactive: true,
    title: '540_Sabato_21_50_05_26<br />\
    <img src="styles/legend/540_Sabato_21_50_05_26_31_0.png" /> 1<br />' });
var format_541_Sabato_05_30_13_06_32 = new ol.format.GeoJSON();
var features_541_Sabato_05_30_13_06_32 = format_541_Sabato_05_30_13_06_32.readFeatures(json_541_Sabato_05_30_13_06_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Sabato_05_30_13_06_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Sabato_05_30_13_06_32.addFeatures(features_541_Sabato_05_30_13_06_32);
var lyr_541_Sabato_05_30_13_06_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Sabato_05_30_13_06_32, 
                style: style_541_Sabato_05_30_13_06_32,
                popuplayertitle: '541_Sabato_05_30_13_06',
                interactive: true,
    title: '541_Sabato_05_30_13_06<br />\
    <img src="styles/legend/541_Sabato_05_30_13_06_32_0.png" /> 1<br />\
    <img src="styles/legend/541_Sabato_05_30_13_06_32_1.png" /> 2<br />\
    <img src="styles/legend/541_Sabato_05_30_13_06_32_2.png" /> 3<br />\
    <img src="styles/legend/541_Sabato_05_30_13_06_32_3.png" /> 4<br />' });
var format_542_Sabato_13_07_20_43_33 = new ol.format.GeoJSON();
var features_542_Sabato_13_07_20_43_33 = format_542_Sabato_13_07_20_43_33.readFeatures(json_542_Sabato_13_07_20_43_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Sabato_13_07_20_43_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Sabato_13_07_20_43_33.addFeatures(features_542_Sabato_13_07_20_43_33);
var lyr_542_Sabato_13_07_20_43_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Sabato_13_07_20_43_33, 
                style: style_542_Sabato_13_07_20_43_33,
                popuplayertitle: '542_Sabato_13_07_20_43',
                interactive: true,
    title: '542_Sabato_13_07_20_43<br />\
    <img src="styles/legend/542_Sabato_13_07_20_43_33_0.png" /> 1<br />\
    <img src="styles/legend/542_Sabato_13_07_20_43_33_1.png" /> 2<br />' });
var format_543_Sabato_19_00_02_36_34 = new ol.format.GeoJSON();
var features_543_Sabato_19_00_02_36_34 = format_543_Sabato_19_00_02_36_34.readFeatures(json_543_Sabato_19_00_02_36_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Sabato_19_00_02_36_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Sabato_19_00_02_36_34.addFeatures(features_543_Sabato_19_00_02_36_34);
var lyr_543_Sabato_19_00_02_36_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Sabato_19_00_02_36_34, 
                style: style_543_Sabato_19_00_02_36_34,
                popuplayertitle: '543_Sabato_19_00_02_36',
                interactive: true,
    title: '543_Sabato_19_00_02_36<br />\
    <img src="styles/legend/543_Sabato_19_00_02_36_34_0.png" /> 1<br />' });
var format_70_Venerdi_09_30_15_50_35 = new ol.format.GeoJSON();
var features_70_Venerdi_09_30_15_50_35 = format_70_Venerdi_09_30_15_50_35.readFeatures(json_70_Venerdi_09_30_15_50_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Venerdi_09_30_15_50_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Venerdi_09_30_15_50_35.addFeatures(features_70_Venerdi_09_30_15_50_35);
var lyr_70_Venerdi_09_30_15_50_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Venerdi_09_30_15_50_35, 
                style: style_70_Venerdi_09_30_15_50_35,
                popuplayertitle: '70_Venerdi_09_30_15_50',
                interactive: true,
    title: '70_Venerdi_09_30_15_50<br />\
    <img src="styles/legend/70_Venerdi_09_30_15_50_35_0.png" /> 1<br />' });
var format_71_Venerdi_05_30_13_06_36 = new ol.format.GeoJSON();
var features_71_Venerdi_05_30_13_06_36 = format_71_Venerdi_05_30_13_06_36.readFeatures(json_71_Venerdi_05_30_13_06_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Venerdi_05_30_13_06_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Venerdi_05_30_13_06_36.addFeatures(features_71_Venerdi_05_30_13_06_36);
var lyr_71_Venerdi_05_30_13_06_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Venerdi_05_30_13_06_36, 
                style: style_71_Venerdi_05_30_13_06_36,
                popuplayertitle: '71_Venerdi_05_30_13_06',
                interactive: true,
    title: '71_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/71_Venerdi_05_30_13_06_36_0.png" /> 1<br />\
    <img src="styles/legend/71_Venerdi_05_30_13_06_36_1.png" /> 2<br />\
    <img src="styles/legend/71_Venerdi_05_30_13_06_36_2.png" /> 3<br />' });
var format_72_Venerdi_13_06_20_43_37 = new ol.format.GeoJSON();
var features_72_Venerdi_13_06_20_43_37 = format_72_Venerdi_13_06_20_43_37.readFeatures(json_72_Venerdi_13_06_20_43_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Venerdi_13_06_20_43_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Venerdi_13_06_20_43_37.addFeatures(features_72_Venerdi_13_06_20_43_37);
var lyr_72_Venerdi_13_06_20_43_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Venerdi_13_06_20_43_37, 
                style: style_72_Venerdi_13_06_20_43_37,
                popuplayertitle: '72_Venerdi_13_06_20_43',
                interactive: true,
    title: '72_Venerdi_13_06_20_43<br />\
    <img src="styles/legend/72_Venerdi_13_06_20_43_37_0.png" /> 1<br />\
    <img src="styles/legend/72_Venerdi_13_06_20_43_37_1.png" /> 2<br />' });
var format_73_Venerdi_05_30_13_06_38 = new ol.format.GeoJSON();
var features_73_Venerdi_05_30_13_06_38 = format_73_Venerdi_05_30_13_06_38.readFeatures(json_73_Venerdi_05_30_13_06_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Venerdi_05_30_13_06_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Venerdi_05_30_13_06_38.addFeatures(features_73_Venerdi_05_30_13_06_38);
var lyr_73_Venerdi_05_30_13_06_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Venerdi_05_30_13_06_38, 
                style: style_73_Venerdi_05_30_13_06_38,
                popuplayertitle: '73_Venerdi_05_30_13_06',
                interactive: true,
    title: '73_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06_38_0.png" /> 1<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06_38_1.png" /> 2<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06_38_2.png" /> 3<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06_38_3.png" /> 4<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06_38_4.png" /> 5<br />' });
var format_75_Venerdi_13_07_20_43_39 = new ol.format.GeoJSON();
var features_75_Venerdi_13_07_20_43_39 = format_75_Venerdi_13_07_20_43_39.readFeatures(json_75_Venerdi_13_07_20_43_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Venerdi_13_07_20_43_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Venerdi_13_07_20_43_39.addFeatures(features_75_Venerdi_13_07_20_43_39);
var lyr_75_Venerdi_13_07_20_43_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Venerdi_13_07_20_43_39, 
                style: style_75_Venerdi_13_07_20_43_39,
                popuplayertitle: '75_Venerdi_13_07_20_43',
                interactive: true,
    title: '75_Venerdi_13_07_20_43<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43_39_0.png" /> 1<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43_39_1.png" /> 2<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43_39_2.png" /> 3<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43_39_3.png" /> 4<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43_39_4.png" /> 5<br />' });
var format_76_Venerdi_19_00_02_36_40 = new ol.format.GeoJSON();
var features_76_Venerdi_19_00_02_36_40 = format_76_Venerdi_19_00_02_36_40.readFeatures(json_76_Venerdi_19_00_02_36_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Venerdi_19_00_02_36_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Venerdi_19_00_02_36_40.addFeatures(features_76_Venerdi_19_00_02_36_40);
var lyr_76_Venerdi_19_00_02_36_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Venerdi_19_00_02_36_40, 
                style: style_76_Venerdi_19_00_02_36_40,
                popuplayertitle: '76_Venerdi_19_00_02_36',
                interactive: true,
    title: '76_Venerdi_19_00_02_36<br />\
    <img src="styles/legend/76_Venerdi_19_00_02_36_40_0.png" /> 1<br />' });
var format_77_Venerdi_21_50_05_26_41 = new ol.format.GeoJSON();
var features_77_Venerdi_21_50_05_26_41 = format_77_Venerdi_21_50_05_26_41.readFeatures(json_77_Venerdi_21_50_05_26_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Venerdi_21_50_05_26_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Venerdi_21_50_05_26_41.addFeatures(features_77_Venerdi_21_50_05_26_41);
var lyr_77_Venerdi_21_50_05_26_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Venerdi_21_50_05_26_41, 
                style: style_77_Venerdi_21_50_05_26_41,
                popuplayertitle: '77_Venerdi_21_50_05_26',
                interactive: true,
    title: '77_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_41_0.png" /> 1<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_41_1.png" /> 2<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_41_2.png" /> 3<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_41_3.png" /> 4<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_41_4.png" /> 5<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_41_5.png" /> 6<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_41_6.png" /> 7<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_41_7.png" /> 8<br />' });
var format_79_Venerdi_21_50_05_26_42 = new ol.format.GeoJSON();
var features_79_Venerdi_21_50_05_26_42 = format_79_Venerdi_21_50_05_26_42.readFeatures(json_79_Venerdi_21_50_05_26_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Venerdi_21_50_05_26_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Venerdi_21_50_05_26_42.addFeatures(features_79_Venerdi_21_50_05_26_42);
var lyr_79_Venerdi_21_50_05_26_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Venerdi_21_50_05_26_42, 
                style: style_79_Venerdi_21_50_05_26_42,
                popuplayertitle: '79_Venerdi_21_50_05_26',
                interactive: true,
    title: '79_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/79_Venerdi_21_50_05_26_42_0.png" /> 1<br />\
    <img src="styles/legend/79_Venerdi_21_50_05_26_42_1.png" /> 2<br />' });
var format_154_Venerdi_21_50_05_26_43 = new ol.format.GeoJSON();
var features_154_Venerdi_21_50_05_26_43 = format_154_Venerdi_21_50_05_26_43.readFeatures(json_154_Venerdi_21_50_05_26_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Venerdi_21_50_05_26_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Venerdi_21_50_05_26_43.addFeatures(features_154_Venerdi_21_50_05_26_43);
var lyr_154_Venerdi_21_50_05_26_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Venerdi_21_50_05_26_43, 
                style: style_154_Venerdi_21_50_05_26_43,
                popuplayertitle: '154_Venerdi_21_50_05_26',
                interactive: true,
    title: '154_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_0.png" /> 1<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_1.png" /> 2<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_2.png" /> 3<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_3.png" /> 4<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_4.png" /> 5<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_5.png" /> 6<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_6.png" /> 7<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_7.png" /> 8<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_8.png" /> 9<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_9.png" /> 10<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_10.png" /> 11<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_11.png" /> 12<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_12.png" /> 13<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_13.png" /> 14<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_14.png" /> 15<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_15.png" /> 16<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_16.png" /> 17<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_17.png" /> 18<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_18.png" /> 19<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_19.png" /> 20<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_20.png" /> 21<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_21.png" /> 22<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_22.png" /> 23<br />\
    <img src="styles/legend/154_Venerdi_21_50_05_26_43_23.png" /> 24<br />' });
var format_156_Venerdi_13_07_20_43_44 = new ol.format.GeoJSON();
var features_156_Venerdi_13_07_20_43_44 = format_156_Venerdi_13_07_20_43_44.readFeatures(json_156_Venerdi_13_07_20_43_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Venerdi_13_07_20_43_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Venerdi_13_07_20_43_44.addFeatures(features_156_Venerdi_13_07_20_43_44);
var lyr_156_Venerdi_13_07_20_43_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Venerdi_13_07_20_43_44, 
                style: style_156_Venerdi_13_07_20_43_44,
                popuplayertitle: '156_Venerdi_13_07_20_43',
                interactive: true,
    title: '156_Venerdi_13_07_20_43<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_0.png" /> 1<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_1.png" /> 2<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_2.png" /> 3<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_3.png" /> 4<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_4.png" /> 5<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_5.png" /> 6<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_6.png" /> 7<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_7.png" /> 8<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_8.png" /> 9<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_9.png" /> 10<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_10.png" /> 11<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_11.png" /> 12<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_12.png" /> 13<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_13.png" /> 14<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_14.png" /> 15<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_15.png" /> 16<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_16.png" /> 17<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_17.png" /> 18<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_44_18.png" /> 19<br />' });
var format_158_Venerdi_05_30_13_06_45 = new ol.format.GeoJSON();
var features_158_Venerdi_05_30_13_06_45 = format_158_Venerdi_05_30_13_06_45.readFeatures(json_158_Venerdi_05_30_13_06_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Venerdi_05_30_13_06_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Venerdi_05_30_13_06_45.addFeatures(features_158_Venerdi_05_30_13_06_45);
var lyr_158_Venerdi_05_30_13_06_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Venerdi_05_30_13_06_45, 
                style: style_158_Venerdi_05_30_13_06_45,
                popuplayertitle: '158_Venerdi_05_30_13_06',
                interactive: true,
    title: '158_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_45_0.png" /> 1<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_45_1.png" /> 2<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_45_2.png" /> 3<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_45_3.png" /> 4<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_45_4.png" /> 5<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_45_5.png" /> 6<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_45_6.png" /> 7<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_45_7.png" /> 8<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_45_8.png" /> 9<br />' });
var format_531_Venerdi_05_30_13_06_46 = new ol.format.GeoJSON();
var features_531_Venerdi_05_30_13_06_46 = format_531_Venerdi_05_30_13_06_46.readFeatures(json_531_Venerdi_05_30_13_06_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Venerdi_05_30_13_06_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Venerdi_05_30_13_06_46.addFeatures(features_531_Venerdi_05_30_13_06_46);
var lyr_531_Venerdi_05_30_13_06_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Venerdi_05_30_13_06_46, 
                style: style_531_Venerdi_05_30_13_06_46,
                popuplayertitle: '531_Venerdi_05_30_13_06',
                interactive: true,
    title: '531_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/531_Venerdi_05_30_13_06_46_0.png" /> 1<br />' });
var format_534_Venerdi_21_50_05_26_47 = new ol.format.GeoJSON();
var features_534_Venerdi_21_50_05_26_47 = format_534_Venerdi_21_50_05_26_47.readFeatures(json_534_Venerdi_21_50_05_26_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Venerdi_21_50_05_26_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Venerdi_21_50_05_26_47.addFeatures(features_534_Venerdi_21_50_05_26_47);
var lyr_534_Venerdi_21_50_05_26_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Venerdi_21_50_05_26_47, 
                style: style_534_Venerdi_21_50_05_26_47,
                popuplayertitle: '534_Venerdi_21_50_05_26',
                interactive: true,
    title: '534_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/534_Venerdi_21_50_05_26_47_0.png" /> 1<br />' });
var format_540_Venerdi_21_50_05_26_48 = new ol.format.GeoJSON();
var features_540_Venerdi_21_50_05_26_48 = format_540_Venerdi_21_50_05_26_48.readFeatures(json_540_Venerdi_21_50_05_26_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Venerdi_21_50_05_26_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Venerdi_21_50_05_26_48.addFeatures(features_540_Venerdi_21_50_05_26_48);
var lyr_540_Venerdi_21_50_05_26_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Venerdi_21_50_05_26_48, 
                style: style_540_Venerdi_21_50_05_26_48,
                popuplayertitle: '540_Venerdi_21_50_05_26',
                interactive: true,
    title: '540_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/540_Venerdi_21_50_05_26_48_0.png" /> 1<br />' });
var format_541_Venerdi_05_30_13_06_49 = new ol.format.GeoJSON();
var features_541_Venerdi_05_30_13_06_49 = format_541_Venerdi_05_30_13_06_49.readFeatures(json_541_Venerdi_05_30_13_06_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Venerdi_05_30_13_06_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Venerdi_05_30_13_06_49.addFeatures(features_541_Venerdi_05_30_13_06_49);
var lyr_541_Venerdi_05_30_13_06_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Venerdi_05_30_13_06_49, 
                style: style_541_Venerdi_05_30_13_06_49,
                popuplayertitle: '541_Venerdi_05_30_13_06',
                interactive: true,
    title: '541_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/541_Venerdi_05_30_13_06_49_0.png" /> 1<br />\
    <img src="styles/legend/541_Venerdi_05_30_13_06_49_1.png" /> 2<br />\
    <img src="styles/legend/541_Venerdi_05_30_13_06_49_2.png" /> 3<br />\
    <img src="styles/legend/541_Venerdi_05_30_13_06_49_3.png" /> 4<br />' });
var format_542_Venerdi_13_07_20_43_50 = new ol.format.GeoJSON();
var features_542_Venerdi_13_07_20_43_50 = format_542_Venerdi_13_07_20_43_50.readFeatures(json_542_Venerdi_13_07_20_43_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Venerdi_13_07_20_43_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Venerdi_13_07_20_43_50.addFeatures(features_542_Venerdi_13_07_20_43_50);
var lyr_542_Venerdi_13_07_20_43_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Venerdi_13_07_20_43_50, 
                style: style_542_Venerdi_13_07_20_43_50,
                popuplayertitle: '542_Venerdi_13_07_20_43',
                interactive: true,
    title: '542_Venerdi_13_07_20_43<br />\
    <img src="styles/legend/542_Venerdi_13_07_20_43_50_0.png" /> 1<br />\
    <img src="styles/legend/542_Venerdi_13_07_20_43_50_1.png" /> 2<br />' });
var format_543_Venerdi_19_00_02_36_51 = new ol.format.GeoJSON();
var features_543_Venerdi_19_00_02_36_51 = format_543_Venerdi_19_00_02_36_51.readFeatures(json_543_Venerdi_19_00_02_36_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Venerdi_19_00_02_36_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Venerdi_19_00_02_36_51.addFeatures(features_543_Venerdi_19_00_02_36_51);
var lyr_543_Venerdi_19_00_02_36_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Venerdi_19_00_02_36_51, 
                style: style_543_Venerdi_19_00_02_36_51,
                popuplayertitle: '543_Venerdi_19_00_02_36',
                interactive: true,
    title: '543_Venerdi_19_00_02_36<br />\
    <img src="styles/legend/543_Venerdi_19_00_02_36_51_0.png" /> 1<br />' });
var format_70_Giovedi_09_30_15_50_52 = new ol.format.GeoJSON();
var features_70_Giovedi_09_30_15_50_52 = format_70_Giovedi_09_30_15_50_52.readFeatures(json_70_Giovedi_09_30_15_50_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Giovedi_09_30_15_50_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Giovedi_09_30_15_50_52.addFeatures(features_70_Giovedi_09_30_15_50_52);
var lyr_70_Giovedi_09_30_15_50_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Giovedi_09_30_15_50_52, 
                style: style_70_Giovedi_09_30_15_50_52,
                popuplayertitle: '70_Giovedi_09_30_15_50',
                interactive: true,
    title: '70_Giovedi_09_30_15_50<br />\
    <img src="styles/legend/70_Giovedi_09_30_15_50_52_0.png" /> 1<br />' });
var format_71_Giovedi_05_30_13_06_53 = new ol.format.GeoJSON();
var features_71_Giovedi_05_30_13_06_53 = format_71_Giovedi_05_30_13_06_53.readFeatures(json_71_Giovedi_05_30_13_06_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Giovedi_05_30_13_06_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Giovedi_05_30_13_06_53.addFeatures(features_71_Giovedi_05_30_13_06_53);
var lyr_71_Giovedi_05_30_13_06_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Giovedi_05_30_13_06_53, 
                style: style_71_Giovedi_05_30_13_06_53,
                popuplayertitle: '71_Giovedi_05_30_13_06',
                interactive: true,
    title: '71_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/71_Giovedi_05_30_13_06_53_0.png" /> 1<br />\
    <img src="styles/legend/71_Giovedi_05_30_13_06_53_1.png" /> 2<br />\
    <img src="styles/legend/71_Giovedi_05_30_13_06_53_2.png" /> 3<br />' });
var format_72_Giovedi_13_06_20_43_54 = new ol.format.GeoJSON();
var features_72_Giovedi_13_06_20_43_54 = format_72_Giovedi_13_06_20_43_54.readFeatures(json_72_Giovedi_13_06_20_43_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Giovedi_13_06_20_43_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Giovedi_13_06_20_43_54.addFeatures(features_72_Giovedi_13_06_20_43_54);
var lyr_72_Giovedi_13_06_20_43_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Giovedi_13_06_20_43_54, 
                style: style_72_Giovedi_13_06_20_43_54,
                popuplayertitle: '72_Giovedi_13_06_20_43',
                interactive: true,
    title: '72_Giovedi_13_06_20_43<br />\
    <img src="styles/legend/72_Giovedi_13_06_20_43_54_0.png" /> 1<br />\
    <img src="styles/legend/72_Giovedi_13_06_20_43_54_1.png" /> 2<br />' });
var format_73_Giovedi_05_30_13_06_55 = new ol.format.GeoJSON();
var features_73_Giovedi_05_30_13_06_55 = format_73_Giovedi_05_30_13_06_55.readFeatures(json_73_Giovedi_05_30_13_06_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Giovedi_05_30_13_06_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Giovedi_05_30_13_06_55.addFeatures(features_73_Giovedi_05_30_13_06_55);
var lyr_73_Giovedi_05_30_13_06_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Giovedi_05_30_13_06_55, 
                style: style_73_Giovedi_05_30_13_06_55,
                popuplayertitle: '73_Giovedi_05_30_13_06',
                interactive: true,
    title: '73_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06_55_0.png" /> 1<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06_55_1.png" /> 2<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06_55_2.png" /> 3<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06_55_3.png" /> 4<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06_55_4.png" /> 5<br />' });
var format_75_Giovedi_13_07_20_43_56 = new ol.format.GeoJSON();
var features_75_Giovedi_13_07_20_43_56 = format_75_Giovedi_13_07_20_43_56.readFeatures(json_75_Giovedi_13_07_20_43_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Giovedi_13_07_20_43_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Giovedi_13_07_20_43_56.addFeatures(features_75_Giovedi_13_07_20_43_56);
var lyr_75_Giovedi_13_07_20_43_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Giovedi_13_07_20_43_56, 
                style: style_75_Giovedi_13_07_20_43_56,
                popuplayertitle: '75_Giovedi_13_07_20_43',
                interactive: true,
    title: '75_Giovedi_13_07_20_43<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43_56_0.png" /> 1<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43_56_1.png" /> 2<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43_56_2.png" /> 3<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43_56_3.png" /> 4<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43_56_4.png" /> 5<br />' });
var format_76_Giovedi_19_00_02_36_57 = new ol.format.GeoJSON();
var features_76_Giovedi_19_00_02_36_57 = format_76_Giovedi_19_00_02_36_57.readFeatures(json_76_Giovedi_19_00_02_36_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Giovedi_19_00_02_36_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Giovedi_19_00_02_36_57.addFeatures(features_76_Giovedi_19_00_02_36_57);
var lyr_76_Giovedi_19_00_02_36_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Giovedi_19_00_02_36_57, 
                style: style_76_Giovedi_19_00_02_36_57,
                popuplayertitle: '76_Giovedi_19_00_02_36',
                interactive: true,
    title: '76_Giovedi_19_00_02_36<br />\
    <img src="styles/legend/76_Giovedi_19_00_02_36_57_0.png" /> 1<br />' });
var format_77_Giovedi_21_50_05_26_58 = new ol.format.GeoJSON();
var features_77_Giovedi_21_50_05_26_58 = format_77_Giovedi_21_50_05_26_58.readFeatures(json_77_Giovedi_21_50_05_26_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Giovedi_21_50_05_26_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Giovedi_21_50_05_26_58.addFeatures(features_77_Giovedi_21_50_05_26_58);
var lyr_77_Giovedi_21_50_05_26_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Giovedi_21_50_05_26_58, 
                style: style_77_Giovedi_21_50_05_26_58,
                popuplayertitle: '77_Giovedi_21_50_05_26',
                interactive: true,
    title: '77_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_58_0.png" /> 1<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_58_1.png" /> 2<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_58_2.png" /> 3<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_58_3.png" /> 4<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_58_4.png" /> 5<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_58_5.png" /> 6<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_58_6.png" /> 7<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_58_7.png" /> 8<br />' });
var format_79_Giovedi_21_50_05_26_59 = new ol.format.GeoJSON();
var features_79_Giovedi_21_50_05_26_59 = format_79_Giovedi_21_50_05_26_59.readFeatures(json_79_Giovedi_21_50_05_26_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Giovedi_21_50_05_26_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Giovedi_21_50_05_26_59.addFeatures(features_79_Giovedi_21_50_05_26_59);
var lyr_79_Giovedi_21_50_05_26_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Giovedi_21_50_05_26_59, 
                style: style_79_Giovedi_21_50_05_26_59,
                popuplayertitle: '79_Giovedi_21_50_05_26',
                interactive: true,
    title: '79_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/79_Giovedi_21_50_05_26_59_0.png" /> 1<br />\
    <img src="styles/legend/79_Giovedi_21_50_05_26_59_1.png" /> 2<br />' });
var format_154_Giovedi_21_50_05_26_60 = new ol.format.GeoJSON();
var features_154_Giovedi_21_50_05_26_60 = format_154_Giovedi_21_50_05_26_60.readFeatures(json_154_Giovedi_21_50_05_26_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Giovedi_21_50_05_26_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Giovedi_21_50_05_26_60.addFeatures(features_154_Giovedi_21_50_05_26_60);
var lyr_154_Giovedi_21_50_05_26_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Giovedi_21_50_05_26_60, 
                style: style_154_Giovedi_21_50_05_26_60,
                popuplayertitle: '154_Giovedi_21_50_05_26',
                interactive: true,
    title: '154_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_0.png" /> 1<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_1.png" /> 2<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_2.png" /> 3<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_3.png" /> 4<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_4.png" /> 5<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_5.png" /> 6<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_6.png" /> 7<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_7.png" /> 8<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_8.png" /> 9<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_9.png" /> 10<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_10.png" /> 11<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_11.png" /> 12<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_12.png" /> 13<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_13.png" /> 14<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_14.png" /> 15<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_15.png" /> 16<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_16.png" /> 17<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_17.png" /> 18<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_18.png" /> 19<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_19.png" /> 20<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_20.png" /> 21<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_21.png" /> 22<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_22.png" /> 23<br />\
    <img src="styles/legend/154_Giovedi_21_50_05_26_60_23.png" /> 24<br />' });
var format_156_Giovedi_13_07_20_43_61 = new ol.format.GeoJSON();
var features_156_Giovedi_13_07_20_43_61 = format_156_Giovedi_13_07_20_43_61.readFeatures(json_156_Giovedi_13_07_20_43_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Giovedi_13_07_20_43_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Giovedi_13_07_20_43_61.addFeatures(features_156_Giovedi_13_07_20_43_61);
var lyr_156_Giovedi_13_07_20_43_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Giovedi_13_07_20_43_61, 
                style: style_156_Giovedi_13_07_20_43_61,
                popuplayertitle: '156_Giovedi_13_07_20_43',
                interactive: true,
    title: '156_Giovedi_13_07_20_43<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_0.png" /> 1<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_1.png" /> 2<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_2.png" /> 3<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_3.png" /> 4<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_4.png" /> 5<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_5.png" /> 6<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_6.png" /> 7<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_7.png" /> 8<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_8.png" /> 9<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_9.png" /> 10<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_10.png" /> 11<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_11.png" /> 12<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_12.png" /> 13<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_13.png" /> 14<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_14.png" /> 15<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_15.png" /> 16<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_16.png" /> 17<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_17.png" /> 18<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_61_18.png" /> 19<br />' });
var format_158_Giovedi_05_30_13_06_62 = new ol.format.GeoJSON();
var features_158_Giovedi_05_30_13_06_62 = format_158_Giovedi_05_30_13_06_62.readFeatures(json_158_Giovedi_05_30_13_06_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Giovedi_05_30_13_06_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Giovedi_05_30_13_06_62.addFeatures(features_158_Giovedi_05_30_13_06_62);
var lyr_158_Giovedi_05_30_13_06_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Giovedi_05_30_13_06_62, 
                style: style_158_Giovedi_05_30_13_06_62,
                popuplayertitle: '158_Giovedi_05_30_13_06',
                interactive: true,
    title: '158_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_62_0.png" /> 1<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_62_1.png" /> 2<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_62_2.png" /> 3<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_62_3.png" /> 4<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_62_4.png" /> 5<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_62_5.png" /> 6<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_62_6.png" /> 7<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_62_7.png" /> 8<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_62_8.png" /> 9<br />' });
var format_531_Giovedi_05_30_13_06_63 = new ol.format.GeoJSON();
var features_531_Giovedi_05_30_13_06_63 = format_531_Giovedi_05_30_13_06_63.readFeatures(json_531_Giovedi_05_30_13_06_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Giovedi_05_30_13_06_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Giovedi_05_30_13_06_63.addFeatures(features_531_Giovedi_05_30_13_06_63);
var lyr_531_Giovedi_05_30_13_06_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Giovedi_05_30_13_06_63, 
                style: style_531_Giovedi_05_30_13_06_63,
                popuplayertitle: '531_Giovedi_05_30_13_06',
                interactive: true,
    title: '531_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/531_Giovedi_05_30_13_06_63_0.png" /> 1<br />' });
var format_534_Giovedi_21_50_05_26_64 = new ol.format.GeoJSON();
var features_534_Giovedi_21_50_05_26_64 = format_534_Giovedi_21_50_05_26_64.readFeatures(json_534_Giovedi_21_50_05_26_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Giovedi_21_50_05_26_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Giovedi_21_50_05_26_64.addFeatures(features_534_Giovedi_21_50_05_26_64);
var lyr_534_Giovedi_21_50_05_26_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Giovedi_21_50_05_26_64, 
                style: style_534_Giovedi_21_50_05_26_64,
                popuplayertitle: '534_Giovedi_21_50_05_26',
                interactive: true,
    title: '534_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/534_Giovedi_21_50_05_26_64_0.png" /> 1<br />' });
var format_540_Giovedi_21_50_05_26_65 = new ol.format.GeoJSON();
var features_540_Giovedi_21_50_05_26_65 = format_540_Giovedi_21_50_05_26_65.readFeatures(json_540_Giovedi_21_50_05_26_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Giovedi_21_50_05_26_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Giovedi_21_50_05_26_65.addFeatures(features_540_Giovedi_21_50_05_26_65);
var lyr_540_Giovedi_21_50_05_26_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Giovedi_21_50_05_26_65, 
                style: style_540_Giovedi_21_50_05_26_65,
                popuplayertitle: '540_Giovedi_21_50_05_26',
                interactive: true,
    title: '540_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/540_Giovedi_21_50_05_26_65_0.png" /> 1<br />' });
var format_541_Giovedi_05_30_13_06_66 = new ol.format.GeoJSON();
var features_541_Giovedi_05_30_13_06_66 = format_541_Giovedi_05_30_13_06_66.readFeatures(json_541_Giovedi_05_30_13_06_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Giovedi_05_30_13_06_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Giovedi_05_30_13_06_66.addFeatures(features_541_Giovedi_05_30_13_06_66);
var lyr_541_Giovedi_05_30_13_06_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Giovedi_05_30_13_06_66, 
                style: style_541_Giovedi_05_30_13_06_66,
                popuplayertitle: '541_Giovedi_05_30_13_06',
                interactive: true,
    title: '541_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/541_Giovedi_05_30_13_06_66_0.png" /> 1<br />\
    <img src="styles/legend/541_Giovedi_05_30_13_06_66_1.png" /> 2<br />\
    <img src="styles/legend/541_Giovedi_05_30_13_06_66_2.png" /> 3<br />\
    <img src="styles/legend/541_Giovedi_05_30_13_06_66_3.png" /> 4<br />' });
var format_542_Giovedi_13_07_20_43_67 = new ol.format.GeoJSON();
var features_542_Giovedi_13_07_20_43_67 = format_542_Giovedi_13_07_20_43_67.readFeatures(json_542_Giovedi_13_07_20_43_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Giovedi_13_07_20_43_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Giovedi_13_07_20_43_67.addFeatures(features_542_Giovedi_13_07_20_43_67);
var lyr_542_Giovedi_13_07_20_43_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Giovedi_13_07_20_43_67, 
                style: style_542_Giovedi_13_07_20_43_67,
                popuplayertitle: '542_Giovedi_13_07_20_43',
                interactive: true,
    title: '542_Giovedi_13_07_20_43<br />\
    <img src="styles/legend/542_Giovedi_13_07_20_43_67_0.png" /> 1<br />\
    <img src="styles/legend/542_Giovedi_13_07_20_43_67_1.png" /> 2<br />' });
var format_543_Giovedi_19_00_02_36_68 = new ol.format.GeoJSON();
var features_543_Giovedi_19_00_02_36_68 = format_543_Giovedi_19_00_02_36_68.readFeatures(json_543_Giovedi_19_00_02_36_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Giovedi_19_00_02_36_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Giovedi_19_00_02_36_68.addFeatures(features_543_Giovedi_19_00_02_36_68);
var lyr_543_Giovedi_19_00_02_36_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Giovedi_19_00_02_36_68, 
                style: style_543_Giovedi_19_00_02_36_68,
                popuplayertitle: '543_Giovedi_19_00_02_36',
                interactive: true,
    title: '543_Giovedi_19_00_02_36<br />\
    <img src="styles/legend/543_Giovedi_19_00_02_36_68_0.png" /> 1<br />' });
var format_70_Mercoledi_09_30_15_50_69 = new ol.format.GeoJSON();
var features_70_Mercoledi_09_30_15_50_69 = format_70_Mercoledi_09_30_15_50_69.readFeatures(json_70_Mercoledi_09_30_15_50_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Mercoledi_09_30_15_50_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Mercoledi_09_30_15_50_69.addFeatures(features_70_Mercoledi_09_30_15_50_69);
var lyr_70_Mercoledi_09_30_15_50_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Mercoledi_09_30_15_50_69, 
                style: style_70_Mercoledi_09_30_15_50_69,
                popuplayertitle: '70_Mercoledi_09_30_15_50',
                interactive: true,
    title: '70_Mercoledi_09_30_15_50<br />\
    <img src="styles/legend/70_Mercoledi_09_30_15_50_69_0.png" /> 1<br />' });
var format_71_Mercoledi_05_30_13_06_70 = new ol.format.GeoJSON();
var features_71_Mercoledi_05_30_13_06_70 = format_71_Mercoledi_05_30_13_06_70.readFeatures(json_71_Mercoledi_05_30_13_06_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Mercoledi_05_30_13_06_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Mercoledi_05_30_13_06_70.addFeatures(features_71_Mercoledi_05_30_13_06_70);
var lyr_71_Mercoledi_05_30_13_06_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Mercoledi_05_30_13_06_70, 
                style: style_71_Mercoledi_05_30_13_06_70,
                popuplayertitle: '71_Mercoledi_05_30_13_06',
                interactive: true,
    title: '71_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/71_Mercoledi_05_30_13_06_70_0.png" /> 1<br />\
    <img src="styles/legend/71_Mercoledi_05_30_13_06_70_1.png" /> 2<br />\
    <img src="styles/legend/71_Mercoledi_05_30_13_06_70_2.png" /> 3<br />' });
var format_72_Mercoledi_13_06_20_43_71 = new ol.format.GeoJSON();
var features_72_Mercoledi_13_06_20_43_71 = format_72_Mercoledi_13_06_20_43_71.readFeatures(json_72_Mercoledi_13_06_20_43_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Mercoledi_13_06_20_43_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Mercoledi_13_06_20_43_71.addFeatures(features_72_Mercoledi_13_06_20_43_71);
var lyr_72_Mercoledi_13_06_20_43_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Mercoledi_13_06_20_43_71, 
                style: style_72_Mercoledi_13_06_20_43_71,
                popuplayertitle: '72_Mercoledi_13_06_20_43',
                interactive: true,
    title: '72_Mercoledi_13_06_20_43<br />\
    <img src="styles/legend/72_Mercoledi_13_06_20_43_71_0.png" /> 1<br />\
    <img src="styles/legend/72_Mercoledi_13_06_20_43_71_1.png" /> 2<br />' });
var format_73_Mercoledi_05_30_13_06_72 = new ol.format.GeoJSON();
var features_73_Mercoledi_05_30_13_06_72 = format_73_Mercoledi_05_30_13_06_72.readFeatures(json_73_Mercoledi_05_30_13_06_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Mercoledi_05_30_13_06_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Mercoledi_05_30_13_06_72.addFeatures(features_73_Mercoledi_05_30_13_06_72);
var lyr_73_Mercoledi_05_30_13_06_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Mercoledi_05_30_13_06_72, 
                style: style_73_Mercoledi_05_30_13_06_72,
                popuplayertitle: '73_Mercoledi_05_30_13_06',
                interactive: true,
    title: '73_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06_72_0.png" /> 1<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06_72_1.png" /> 2<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06_72_2.png" /> 3<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06_72_3.png" /> 4<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06_72_4.png" /> 5<br />' });
var format_75_Mercoledi_13_07_20_43_73 = new ol.format.GeoJSON();
var features_75_Mercoledi_13_07_20_43_73 = format_75_Mercoledi_13_07_20_43_73.readFeatures(json_75_Mercoledi_13_07_20_43_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Mercoledi_13_07_20_43_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Mercoledi_13_07_20_43_73.addFeatures(features_75_Mercoledi_13_07_20_43_73);
var lyr_75_Mercoledi_13_07_20_43_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Mercoledi_13_07_20_43_73, 
                style: style_75_Mercoledi_13_07_20_43_73,
                popuplayertitle: '75_Mercoledi_13_07_20_43',
                interactive: true,
    title: '75_Mercoledi_13_07_20_43<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43_73_0.png" /> 1<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43_73_1.png" /> 2<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43_73_2.png" /> 3<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43_73_3.png" /> 4<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43_73_4.png" /> 5<br />' });
var format_76_Mercoledi_19_00_02_36_74 = new ol.format.GeoJSON();
var features_76_Mercoledi_19_00_02_36_74 = format_76_Mercoledi_19_00_02_36_74.readFeatures(json_76_Mercoledi_19_00_02_36_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Mercoledi_19_00_02_36_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Mercoledi_19_00_02_36_74.addFeatures(features_76_Mercoledi_19_00_02_36_74);
var lyr_76_Mercoledi_19_00_02_36_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Mercoledi_19_00_02_36_74, 
                style: style_76_Mercoledi_19_00_02_36_74,
                popuplayertitle: '76_Mercoledi_19_00_02_36',
                interactive: true,
    title: '76_Mercoledi_19_00_02_36<br />\
    <img src="styles/legend/76_Mercoledi_19_00_02_36_74_0.png" /> 1<br />' });
var format_77_Mercoledi_21_50_05_26_75 = new ol.format.GeoJSON();
var features_77_Mercoledi_21_50_05_26_75 = format_77_Mercoledi_21_50_05_26_75.readFeatures(json_77_Mercoledi_21_50_05_26_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Mercoledi_21_50_05_26_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Mercoledi_21_50_05_26_75.addFeatures(features_77_Mercoledi_21_50_05_26_75);
var lyr_77_Mercoledi_21_50_05_26_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Mercoledi_21_50_05_26_75, 
                style: style_77_Mercoledi_21_50_05_26_75,
                popuplayertitle: '77_Mercoledi_21_50_05_26',
                interactive: true,
    title: '77_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_75_0.png" /> 1<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_75_1.png" /> 2<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_75_2.png" /> 3<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_75_3.png" /> 4<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_75_4.png" /> 5<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_75_5.png" /> 6<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_75_6.png" /> 7<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_75_7.png" /> 8<br />' });
var format_79_Mercoledi_21_50_05_26_76 = new ol.format.GeoJSON();
var features_79_Mercoledi_21_50_05_26_76 = format_79_Mercoledi_21_50_05_26_76.readFeatures(json_79_Mercoledi_21_50_05_26_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Mercoledi_21_50_05_26_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Mercoledi_21_50_05_26_76.addFeatures(features_79_Mercoledi_21_50_05_26_76);
var lyr_79_Mercoledi_21_50_05_26_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Mercoledi_21_50_05_26_76, 
                style: style_79_Mercoledi_21_50_05_26_76,
                popuplayertitle: '79_Mercoledi_21_50_05_26',
                interactive: true,
    title: '79_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/79_Mercoledi_21_50_05_26_76_0.png" /> 1<br />\
    <img src="styles/legend/79_Mercoledi_21_50_05_26_76_1.png" /> 2<br />' });
var format_154_Mercoledi_21_50_05_26_77 = new ol.format.GeoJSON();
var features_154_Mercoledi_21_50_05_26_77 = format_154_Mercoledi_21_50_05_26_77.readFeatures(json_154_Mercoledi_21_50_05_26_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Mercoledi_21_50_05_26_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Mercoledi_21_50_05_26_77.addFeatures(features_154_Mercoledi_21_50_05_26_77);
var lyr_154_Mercoledi_21_50_05_26_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Mercoledi_21_50_05_26_77, 
                style: style_154_Mercoledi_21_50_05_26_77,
                popuplayertitle: '154_Mercoledi_21_50_05_26',
                interactive: true,
    title: '154_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_0.png" /> 1<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_1.png" /> 2<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_2.png" /> 3<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_3.png" /> 4<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_4.png" /> 5<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_5.png" /> 6<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_6.png" /> 7<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_7.png" /> 8<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_8.png" /> 9<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_9.png" /> 10<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_10.png" /> 11<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_11.png" /> 12<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_12.png" /> 13<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_13.png" /> 14<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_14.png" /> 15<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_15.png" /> 16<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_16.png" /> 17<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_17.png" /> 18<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_18.png" /> 19<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_19.png" /> 20<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_20.png" /> 21<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_21.png" /> 22<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_22.png" /> 23<br />\
    <img src="styles/legend/154_Mercoledi_21_50_05_26_77_23.png" /> 24<br />' });
var format_156_Mercoledi_13_07_20_43_78 = new ol.format.GeoJSON();
var features_156_Mercoledi_13_07_20_43_78 = format_156_Mercoledi_13_07_20_43_78.readFeatures(json_156_Mercoledi_13_07_20_43_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Mercoledi_13_07_20_43_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Mercoledi_13_07_20_43_78.addFeatures(features_156_Mercoledi_13_07_20_43_78);
var lyr_156_Mercoledi_13_07_20_43_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Mercoledi_13_07_20_43_78, 
                style: style_156_Mercoledi_13_07_20_43_78,
                popuplayertitle: '156_Mercoledi_13_07_20_43',
                interactive: true,
    title: '156_Mercoledi_13_07_20_43<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_0.png" /> 1<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_1.png" /> 2<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_2.png" /> 3<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_3.png" /> 4<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_4.png" /> 5<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_5.png" /> 6<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_6.png" /> 7<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_7.png" /> 8<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_8.png" /> 9<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_9.png" /> 10<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_10.png" /> 11<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_11.png" /> 12<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_12.png" /> 13<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_13.png" /> 14<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_14.png" /> 15<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_15.png" /> 16<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_16.png" /> 17<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_17.png" /> 18<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_78_18.png" /> 19<br />' });
var format_158_Mercoledi_05_30_13_06_79 = new ol.format.GeoJSON();
var features_158_Mercoledi_05_30_13_06_79 = format_158_Mercoledi_05_30_13_06_79.readFeatures(json_158_Mercoledi_05_30_13_06_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Mercoledi_05_30_13_06_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Mercoledi_05_30_13_06_79.addFeatures(features_158_Mercoledi_05_30_13_06_79);
var lyr_158_Mercoledi_05_30_13_06_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Mercoledi_05_30_13_06_79, 
                style: style_158_Mercoledi_05_30_13_06_79,
                popuplayertitle: '158_Mercoledi_05_30_13_06',
                interactive: true,
    title: '158_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_79_0.png" /> 1<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_79_1.png" /> 2<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_79_2.png" /> 3<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_79_3.png" /> 4<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_79_4.png" /> 5<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_79_5.png" /> 6<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_79_6.png" /> 7<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_79_7.png" /> 8<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_79_8.png" /> 9<br />' });
var format_531_Mercoledi_05_30_13_06_80 = new ol.format.GeoJSON();
var features_531_Mercoledi_05_30_13_06_80 = format_531_Mercoledi_05_30_13_06_80.readFeatures(json_531_Mercoledi_05_30_13_06_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Mercoledi_05_30_13_06_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Mercoledi_05_30_13_06_80.addFeatures(features_531_Mercoledi_05_30_13_06_80);
var lyr_531_Mercoledi_05_30_13_06_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Mercoledi_05_30_13_06_80, 
                style: style_531_Mercoledi_05_30_13_06_80,
                popuplayertitle: '531_Mercoledi_05_30_13_06',
                interactive: true,
    title: '531_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/531_Mercoledi_05_30_13_06_80_0.png" /> 1<br />' });
var format_534_Mercoledi_21_50_05_26_81 = new ol.format.GeoJSON();
var features_534_Mercoledi_21_50_05_26_81 = format_534_Mercoledi_21_50_05_26_81.readFeatures(json_534_Mercoledi_21_50_05_26_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Mercoledi_21_50_05_26_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Mercoledi_21_50_05_26_81.addFeatures(features_534_Mercoledi_21_50_05_26_81);
var lyr_534_Mercoledi_21_50_05_26_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Mercoledi_21_50_05_26_81, 
                style: style_534_Mercoledi_21_50_05_26_81,
                popuplayertitle: '534_Mercoledi_21_50_05_26',
                interactive: true,
    title: '534_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/534_Mercoledi_21_50_05_26_81_0.png" /> 1<br />' });
var format_540_Mercoledi_21_50_05_26_82 = new ol.format.GeoJSON();
var features_540_Mercoledi_21_50_05_26_82 = format_540_Mercoledi_21_50_05_26_82.readFeatures(json_540_Mercoledi_21_50_05_26_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Mercoledi_21_50_05_26_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Mercoledi_21_50_05_26_82.addFeatures(features_540_Mercoledi_21_50_05_26_82);
var lyr_540_Mercoledi_21_50_05_26_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Mercoledi_21_50_05_26_82, 
                style: style_540_Mercoledi_21_50_05_26_82,
                popuplayertitle: '540_Mercoledi_21_50_05_26',
                interactive: true,
    title: '540_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/540_Mercoledi_21_50_05_26_82_0.png" /> 1<br />' });
var format_541_Mercoledi_05_30_13_06_83 = new ol.format.GeoJSON();
var features_541_Mercoledi_05_30_13_06_83 = format_541_Mercoledi_05_30_13_06_83.readFeatures(json_541_Mercoledi_05_30_13_06_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Mercoledi_05_30_13_06_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Mercoledi_05_30_13_06_83.addFeatures(features_541_Mercoledi_05_30_13_06_83);
var lyr_541_Mercoledi_05_30_13_06_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Mercoledi_05_30_13_06_83, 
                style: style_541_Mercoledi_05_30_13_06_83,
                popuplayertitle: '541_Mercoledi_05_30_13_06',
                interactive: true,
    title: '541_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/541_Mercoledi_05_30_13_06_83_0.png" /> 1<br />\
    <img src="styles/legend/541_Mercoledi_05_30_13_06_83_1.png" /> 2<br />\
    <img src="styles/legend/541_Mercoledi_05_30_13_06_83_2.png" /> 3<br />\
    <img src="styles/legend/541_Mercoledi_05_30_13_06_83_3.png" /> 4<br />' });
var format_542_Mercoledi_13_07_20_43_84 = new ol.format.GeoJSON();
var features_542_Mercoledi_13_07_20_43_84 = format_542_Mercoledi_13_07_20_43_84.readFeatures(json_542_Mercoledi_13_07_20_43_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Mercoledi_13_07_20_43_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Mercoledi_13_07_20_43_84.addFeatures(features_542_Mercoledi_13_07_20_43_84);
var lyr_542_Mercoledi_13_07_20_43_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Mercoledi_13_07_20_43_84, 
                style: style_542_Mercoledi_13_07_20_43_84,
                popuplayertitle: '542_Mercoledi_13_07_20_43',
                interactive: true,
    title: '542_Mercoledi_13_07_20_43<br />\
    <img src="styles/legend/542_Mercoledi_13_07_20_43_84_0.png" /> 1<br />\
    <img src="styles/legend/542_Mercoledi_13_07_20_43_84_1.png" /> 2<br />' });
var format_543_Mercoledi_19_00_02_36_85 = new ol.format.GeoJSON();
var features_543_Mercoledi_19_00_02_36_85 = format_543_Mercoledi_19_00_02_36_85.readFeatures(json_543_Mercoledi_19_00_02_36_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Mercoledi_19_00_02_36_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Mercoledi_19_00_02_36_85.addFeatures(features_543_Mercoledi_19_00_02_36_85);
var lyr_543_Mercoledi_19_00_02_36_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Mercoledi_19_00_02_36_85, 
                style: style_543_Mercoledi_19_00_02_36_85,
                popuplayertitle: '543_Mercoledi_19_00_02_36',
                interactive: true,
    title: '543_Mercoledi_19_00_02_36<br />\
    <img src="styles/legend/543_Mercoledi_19_00_02_36_85_0.png" /> 1<br />' });
var format_70_Martedi_09_30_15_50_86 = new ol.format.GeoJSON();
var features_70_Martedi_09_30_15_50_86 = format_70_Martedi_09_30_15_50_86.readFeatures(json_70_Martedi_09_30_15_50_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Martedi_09_30_15_50_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Martedi_09_30_15_50_86.addFeatures(features_70_Martedi_09_30_15_50_86);
var lyr_70_Martedi_09_30_15_50_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Martedi_09_30_15_50_86, 
                style: style_70_Martedi_09_30_15_50_86,
                popuplayertitle: '70_Martedi_09_30_15_50',
                interactive: true,
    title: '70_Martedi_09_30_15_50<br />\
    <img src="styles/legend/70_Martedi_09_30_15_50_86_0.png" /> 1<br />' });
var format_71_Martedi_05_30_13_06_87 = new ol.format.GeoJSON();
var features_71_Martedi_05_30_13_06_87 = format_71_Martedi_05_30_13_06_87.readFeatures(json_71_Martedi_05_30_13_06_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Martedi_05_30_13_06_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Martedi_05_30_13_06_87.addFeatures(features_71_Martedi_05_30_13_06_87);
var lyr_71_Martedi_05_30_13_06_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Martedi_05_30_13_06_87, 
                style: style_71_Martedi_05_30_13_06_87,
                popuplayertitle: '71_Martedi_05_30_13_06',
                interactive: true,
    title: '71_Martedi_05_30_13_06<br />\
    <img src="styles/legend/71_Martedi_05_30_13_06_87_0.png" /> 1<br />\
    <img src="styles/legend/71_Martedi_05_30_13_06_87_1.png" /> 2<br />\
    <img src="styles/legend/71_Martedi_05_30_13_06_87_2.png" /> 3<br />' });
var format_72_Martedi_13_06_20_43_88 = new ol.format.GeoJSON();
var features_72_Martedi_13_06_20_43_88 = format_72_Martedi_13_06_20_43_88.readFeatures(json_72_Martedi_13_06_20_43_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Martedi_13_06_20_43_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Martedi_13_06_20_43_88.addFeatures(features_72_Martedi_13_06_20_43_88);
var lyr_72_Martedi_13_06_20_43_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Martedi_13_06_20_43_88, 
                style: style_72_Martedi_13_06_20_43_88,
                popuplayertitle: '72_Martedi_13_06_20_43',
                interactive: true,
    title: '72_Martedi_13_06_20_43<br />\
    <img src="styles/legend/72_Martedi_13_06_20_43_88_0.png" /> 1<br />\
    <img src="styles/legend/72_Martedi_13_06_20_43_88_1.png" /> 2<br />' });
var format_73_Martedi_05_30_13_06_89 = new ol.format.GeoJSON();
var features_73_Martedi_05_30_13_06_89 = format_73_Martedi_05_30_13_06_89.readFeatures(json_73_Martedi_05_30_13_06_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Martedi_05_30_13_06_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Martedi_05_30_13_06_89.addFeatures(features_73_Martedi_05_30_13_06_89);
var lyr_73_Martedi_05_30_13_06_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Martedi_05_30_13_06_89, 
                style: style_73_Martedi_05_30_13_06_89,
                popuplayertitle: '73_Martedi_05_30_13_06',
                interactive: true,
    title: '73_Martedi_05_30_13_06<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06_89_0.png" /> 1<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06_89_1.png" /> 2<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06_89_2.png" /> 3<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06_89_3.png" /> 4<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06_89_4.png" /> 5<br />' });
var format_75_Martedi_13_07_20_43_90 = new ol.format.GeoJSON();
var features_75_Martedi_13_07_20_43_90 = format_75_Martedi_13_07_20_43_90.readFeatures(json_75_Martedi_13_07_20_43_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Martedi_13_07_20_43_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Martedi_13_07_20_43_90.addFeatures(features_75_Martedi_13_07_20_43_90);
var lyr_75_Martedi_13_07_20_43_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Martedi_13_07_20_43_90, 
                style: style_75_Martedi_13_07_20_43_90,
                popuplayertitle: '75_Martedi_13_07_20_43',
                interactive: true,
    title: '75_Martedi_13_07_20_43<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43_90_0.png" /> 1<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43_90_1.png" /> 2<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43_90_2.png" /> 3<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43_90_3.png" /> 4<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43_90_4.png" /> 5<br />' });
var format_76_Martedi_19_00_02_36_91 = new ol.format.GeoJSON();
var features_76_Martedi_19_00_02_36_91 = format_76_Martedi_19_00_02_36_91.readFeatures(json_76_Martedi_19_00_02_36_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Martedi_19_00_02_36_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Martedi_19_00_02_36_91.addFeatures(features_76_Martedi_19_00_02_36_91);
var lyr_76_Martedi_19_00_02_36_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Martedi_19_00_02_36_91, 
                style: style_76_Martedi_19_00_02_36_91,
                popuplayertitle: '76_Martedi_19_00_02_36',
                interactive: true,
    title: '76_Martedi_19_00_02_36<br />\
    <img src="styles/legend/76_Martedi_19_00_02_36_91_0.png" /> 1<br />' });
var format_77_Martedi_21_50_05_26_92 = new ol.format.GeoJSON();
var features_77_Martedi_21_50_05_26_92 = format_77_Martedi_21_50_05_26_92.readFeatures(json_77_Martedi_21_50_05_26_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Martedi_21_50_05_26_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Martedi_21_50_05_26_92.addFeatures(features_77_Martedi_21_50_05_26_92);
var lyr_77_Martedi_21_50_05_26_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Martedi_21_50_05_26_92, 
                style: style_77_Martedi_21_50_05_26_92,
                popuplayertitle: '77_Martedi_21_50_05_26',
                interactive: true,
    title: '77_Martedi_21_50_05_26<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_92_0.png" /> 1<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_92_1.png" /> 2<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_92_2.png" /> 3<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_92_3.png" /> 4<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_92_4.png" /> 5<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_92_5.png" /> 6<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_92_6.png" /> 7<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_92_7.png" /> 8<br />' });
var format_79_Martedi_21_50_05_26_93 = new ol.format.GeoJSON();
var features_79_Martedi_21_50_05_26_93 = format_79_Martedi_21_50_05_26_93.readFeatures(json_79_Martedi_21_50_05_26_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Martedi_21_50_05_26_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Martedi_21_50_05_26_93.addFeatures(features_79_Martedi_21_50_05_26_93);
var lyr_79_Martedi_21_50_05_26_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Martedi_21_50_05_26_93, 
                style: style_79_Martedi_21_50_05_26_93,
                popuplayertitle: '79_Martedi_21_50_05_26',
                interactive: true,
    title: '79_Martedi_21_50_05_26<br />\
    <img src="styles/legend/79_Martedi_21_50_05_26_93_0.png" /> 1<br />\
    <img src="styles/legend/79_Martedi_21_50_05_26_93_1.png" /> 2<br />' });
var format_154_Martedi_21_50_05_26_94 = new ol.format.GeoJSON();
var features_154_Martedi_21_50_05_26_94 = format_154_Martedi_21_50_05_26_94.readFeatures(json_154_Martedi_21_50_05_26_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Martedi_21_50_05_26_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Martedi_21_50_05_26_94.addFeatures(features_154_Martedi_21_50_05_26_94);
var lyr_154_Martedi_21_50_05_26_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Martedi_21_50_05_26_94, 
                style: style_154_Martedi_21_50_05_26_94,
                popuplayertitle: '154_Martedi_21_50_05_26',
                interactive: true,
    title: '154_Martedi_21_50_05_26<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_0.png" /> 1<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_1.png" /> 2<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_2.png" /> 3<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_3.png" /> 4<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_4.png" /> 5<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_5.png" /> 6<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_6.png" /> 7<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_7.png" /> 8<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_8.png" /> 9<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_9.png" /> 10<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_10.png" /> 11<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_11.png" /> 12<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_12.png" /> 13<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_13.png" /> 14<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_14.png" /> 15<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_15.png" /> 16<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_16.png" /> 17<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_17.png" /> 18<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_18.png" /> 19<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_19.png" /> 20<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_20.png" /> 21<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_21.png" /> 22<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_22.png" /> 23<br />\
    <img src="styles/legend/154_Martedi_21_50_05_26_94_23.png" /> 24<br />' });
var format_156_Martedi_13_07_20_43_95 = new ol.format.GeoJSON();
var features_156_Martedi_13_07_20_43_95 = format_156_Martedi_13_07_20_43_95.readFeatures(json_156_Martedi_13_07_20_43_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Martedi_13_07_20_43_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Martedi_13_07_20_43_95.addFeatures(features_156_Martedi_13_07_20_43_95);
var lyr_156_Martedi_13_07_20_43_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Martedi_13_07_20_43_95, 
                style: style_156_Martedi_13_07_20_43_95,
                popuplayertitle: '156_Martedi_13_07_20_43',
                interactive: true,
    title: '156_Martedi_13_07_20_43<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_0.png" /> 1<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_1.png" /> 2<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_2.png" /> 3<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_3.png" /> 4<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_4.png" /> 5<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_5.png" /> 6<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_6.png" /> 7<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_7.png" /> 8<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_8.png" /> 9<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_9.png" /> 10<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_10.png" /> 11<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_11.png" /> 12<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_12.png" /> 13<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_13.png" /> 14<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_14.png" /> 15<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_15.png" /> 16<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_16.png" /> 17<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_17.png" /> 18<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_95_18.png" /> 19<br />' });
var format_158_Martedi_05_30_13_06_96 = new ol.format.GeoJSON();
var features_158_Martedi_05_30_13_06_96 = format_158_Martedi_05_30_13_06_96.readFeatures(json_158_Martedi_05_30_13_06_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Martedi_05_30_13_06_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Martedi_05_30_13_06_96.addFeatures(features_158_Martedi_05_30_13_06_96);
var lyr_158_Martedi_05_30_13_06_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Martedi_05_30_13_06_96, 
                style: style_158_Martedi_05_30_13_06_96,
                popuplayertitle: '158_Martedi_05_30_13_06',
                interactive: true,
    title: '158_Martedi_05_30_13_06<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_96_0.png" /> 1<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_96_1.png" /> 2<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_96_2.png" /> 3<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_96_3.png" /> 4<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_96_4.png" /> 5<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_96_5.png" /> 6<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_96_6.png" /> 7<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_96_7.png" /> 8<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_96_8.png" /> 9<br />' });
var format_531_Martedi_05_30_13_06_97 = new ol.format.GeoJSON();
var features_531_Martedi_05_30_13_06_97 = format_531_Martedi_05_30_13_06_97.readFeatures(json_531_Martedi_05_30_13_06_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Martedi_05_30_13_06_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Martedi_05_30_13_06_97.addFeatures(features_531_Martedi_05_30_13_06_97);
var lyr_531_Martedi_05_30_13_06_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Martedi_05_30_13_06_97, 
                style: style_531_Martedi_05_30_13_06_97,
                popuplayertitle: '531_Martedi_05_30_13_06',
                interactive: true,
    title: '531_Martedi_05_30_13_06<br />\
    <img src="styles/legend/531_Martedi_05_30_13_06_97_0.png" /> 1<br />' });
var format_534_Martedi_21_50_05_26_98 = new ol.format.GeoJSON();
var features_534_Martedi_21_50_05_26_98 = format_534_Martedi_21_50_05_26_98.readFeatures(json_534_Martedi_21_50_05_26_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Martedi_21_50_05_26_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Martedi_21_50_05_26_98.addFeatures(features_534_Martedi_21_50_05_26_98);
var lyr_534_Martedi_21_50_05_26_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Martedi_21_50_05_26_98, 
                style: style_534_Martedi_21_50_05_26_98,
                popuplayertitle: '534_Martedi_21_50_05_26',
                interactive: true,
    title: '534_Martedi_21_50_05_26<br />\
    <img src="styles/legend/534_Martedi_21_50_05_26_98_0.png" /> 1<br />' });
var format_540_Martedi_21_50_05_26_99 = new ol.format.GeoJSON();
var features_540_Martedi_21_50_05_26_99 = format_540_Martedi_21_50_05_26_99.readFeatures(json_540_Martedi_21_50_05_26_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Martedi_21_50_05_26_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Martedi_21_50_05_26_99.addFeatures(features_540_Martedi_21_50_05_26_99);
var lyr_540_Martedi_21_50_05_26_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Martedi_21_50_05_26_99, 
                style: style_540_Martedi_21_50_05_26_99,
                popuplayertitle: '540_Martedi_21_50_05_26',
                interactive: true,
    title: '540_Martedi_21_50_05_26<br />\
    <img src="styles/legend/540_Martedi_21_50_05_26_99_0.png" /> 1<br />' });
var format_541_Martedi_05_30_13_06_100 = new ol.format.GeoJSON();
var features_541_Martedi_05_30_13_06_100 = format_541_Martedi_05_30_13_06_100.readFeatures(json_541_Martedi_05_30_13_06_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Martedi_05_30_13_06_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Martedi_05_30_13_06_100.addFeatures(features_541_Martedi_05_30_13_06_100);
var lyr_541_Martedi_05_30_13_06_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Martedi_05_30_13_06_100, 
                style: style_541_Martedi_05_30_13_06_100,
                popuplayertitle: '541_Martedi_05_30_13_06',
                interactive: true,
    title: '541_Martedi_05_30_13_06<br />\
    <img src="styles/legend/541_Martedi_05_30_13_06_100_0.png" /> 1<br />\
    <img src="styles/legend/541_Martedi_05_30_13_06_100_1.png" /> 2<br />\
    <img src="styles/legend/541_Martedi_05_30_13_06_100_2.png" /> 3<br />\
    <img src="styles/legend/541_Martedi_05_30_13_06_100_3.png" /> 4<br />' });
var format_542_Martedi_13_07_20_43_101 = new ol.format.GeoJSON();
var features_542_Martedi_13_07_20_43_101 = format_542_Martedi_13_07_20_43_101.readFeatures(json_542_Martedi_13_07_20_43_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Martedi_13_07_20_43_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Martedi_13_07_20_43_101.addFeatures(features_542_Martedi_13_07_20_43_101);
var lyr_542_Martedi_13_07_20_43_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Martedi_13_07_20_43_101, 
                style: style_542_Martedi_13_07_20_43_101,
                popuplayertitle: '542_Martedi_13_07_20_43',
                interactive: true,
    title: '542_Martedi_13_07_20_43<br />\
    <img src="styles/legend/542_Martedi_13_07_20_43_101_0.png" /> 1<br />\
    <img src="styles/legend/542_Martedi_13_07_20_43_101_1.png" /> 2<br />' });
var format_543_Martedi_19_00_02_36_102 = new ol.format.GeoJSON();
var features_543_Martedi_19_00_02_36_102 = format_543_Martedi_19_00_02_36_102.readFeatures(json_543_Martedi_19_00_02_36_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Martedi_19_00_02_36_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Martedi_19_00_02_36_102.addFeatures(features_543_Martedi_19_00_02_36_102);
var lyr_543_Martedi_19_00_02_36_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Martedi_19_00_02_36_102, 
                style: style_543_Martedi_19_00_02_36_102,
                popuplayertitle: '543_Martedi_19_00_02_36',
                interactive: true,
    title: '543_Martedi_19_00_02_36<br />\
    <img src="styles/legend/543_Martedi_19_00_02_36_102_0.png" /> 1<br />' });
var format_70_Lunedi_09_30_15_50_103 = new ol.format.GeoJSON();
var features_70_Lunedi_09_30_15_50_103 = format_70_Lunedi_09_30_15_50_103.readFeatures(json_70_Lunedi_09_30_15_50_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Lunedi_09_30_15_50_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Lunedi_09_30_15_50_103.addFeatures(features_70_Lunedi_09_30_15_50_103);
var lyr_70_Lunedi_09_30_15_50_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Lunedi_09_30_15_50_103, 
                style: style_70_Lunedi_09_30_15_50_103,
                popuplayertitle: '70_Lunedi_09_30_15_50',
                interactive: true,
    title: '70_Lunedi_09_30_15_50<br />\
    <img src="styles/legend/70_Lunedi_09_30_15_50_103_0.png" /> 1<br />' });
var format_71_Lunedi_05_30_13_06_104 = new ol.format.GeoJSON();
var features_71_Lunedi_05_30_13_06_104 = format_71_Lunedi_05_30_13_06_104.readFeatures(json_71_Lunedi_05_30_13_06_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Lunedi_05_30_13_06_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Lunedi_05_30_13_06_104.addFeatures(features_71_Lunedi_05_30_13_06_104);
var lyr_71_Lunedi_05_30_13_06_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Lunedi_05_30_13_06_104, 
                style: style_71_Lunedi_05_30_13_06_104,
                popuplayertitle: '71_Lunedi_05_30_13_06',
                interactive: true,
    title: '71_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/71_Lunedi_05_30_13_06_104_0.png" /> 1<br />\
    <img src="styles/legend/71_Lunedi_05_30_13_06_104_1.png" /> 2<br />\
    <img src="styles/legend/71_Lunedi_05_30_13_06_104_2.png" /> 3<br />' });
var format_72_Lunedi_13_06_20_43_105 = new ol.format.GeoJSON();
var features_72_Lunedi_13_06_20_43_105 = format_72_Lunedi_13_06_20_43_105.readFeatures(json_72_Lunedi_13_06_20_43_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Lunedi_13_06_20_43_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Lunedi_13_06_20_43_105.addFeatures(features_72_Lunedi_13_06_20_43_105);
var lyr_72_Lunedi_13_06_20_43_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Lunedi_13_06_20_43_105, 
                style: style_72_Lunedi_13_06_20_43_105,
                popuplayertitle: '72_Lunedi_13_06_20_43',
                interactive: true,
    title: '72_Lunedi_13_06_20_43<br />\
    <img src="styles/legend/72_Lunedi_13_06_20_43_105_0.png" /> 1<br />\
    <img src="styles/legend/72_Lunedi_13_06_20_43_105_1.png" /> 2<br />' });
var format_73_Lunedi_05_30_13_06_106 = new ol.format.GeoJSON();
var features_73_Lunedi_05_30_13_06_106 = format_73_Lunedi_05_30_13_06_106.readFeatures(json_73_Lunedi_05_30_13_06_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Lunedi_05_30_13_06_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Lunedi_05_30_13_06_106.addFeatures(features_73_Lunedi_05_30_13_06_106);
var lyr_73_Lunedi_05_30_13_06_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Lunedi_05_30_13_06_106, 
                style: style_73_Lunedi_05_30_13_06_106,
                popuplayertitle: '73_Lunedi_05_30_13_06',
                interactive: true,
    title: '73_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06_106_0.png" /> 1<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06_106_1.png" /> 2<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06_106_2.png" /> 3<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06_106_3.png" /> 4<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06_106_4.png" /> 5<br />' });
var format_75_Lunedi_13_07_20_43_107 = new ol.format.GeoJSON();
var features_75_Lunedi_13_07_20_43_107 = format_75_Lunedi_13_07_20_43_107.readFeatures(json_75_Lunedi_13_07_20_43_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Lunedi_13_07_20_43_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Lunedi_13_07_20_43_107.addFeatures(features_75_Lunedi_13_07_20_43_107);
var lyr_75_Lunedi_13_07_20_43_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Lunedi_13_07_20_43_107, 
                style: style_75_Lunedi_13_07_20_43_107,
                popuplayertitle: '75_Lunedi_13_07_20_43',
                interactive: true,
    title: '75_Lunedi_13_07_20_43<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43_107_0.png" /> 1<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43_107_1.png" /> 2<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43_107_2.png" /> 3<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43_107_3.png" /> 4<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43_107_4.png" /> 5<br />' });
var format_76_Lunedi_19_00_02_36_108 = new ol.format.GeoJSON();
var features_76_Lunedi_19_00_02_36_108 = format_76_Lunedi_19_00_02_36_108.readFeatures(json_76_Lunedi_19_00_02_36_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Lunedi_19_00_02_36_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Lunedi_19_00_02_36_108.addFeatures(features_76_Lunedi_19_00_02_36_108);
var lyr_76_Lunedi_19_00_02_36_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Lunedi_19_00_02_36_108, 
                style: style_76_Lunedi_19_00_02_36_108,
                popuplayertitle: '76_Lunedi_19_00_02_36',
                interactive: true,
    title: '76_Lunedi_19_00_02_36<br />\
    <img src="styles/legend/76_Lunedi_19_00_02_36_108_0.png" /> 1<br />' });
var format_77_Lunedi_21_50_05_26_109 = new ol.format.GeoJSON();
var features_77_Lunedi_21_50_05_26_109 = format_77_Lunedi_21_50_05_26_109.readFeatures(json_77_Lunedi_21_50_05_26_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Lunedi_21_50_05_26_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Lunedi_21_50_05_26_109.addFeatures(features_77_Lunedi_21_50_05_26_109);
var lyr_77_Lunedi_21_50_05_26_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Lunedi_21_50_05_26_109, 
                style: style_77_Lunedi_21_50_05_26_109,
                popuplayertitle: '77_Lunedi_21_50_05_26',
                interactive: true,
    title: '77_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_109_0.png" /> 1<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_109_1.png" /> 2<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_109_2.png" /> 3<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_109_3.png" /> 4<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_109_4.png" /> 5<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_109_5.png" /> 6<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_109_6.png" /> 7<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_109_7.png" /> 8<br />' });
var format_79_Lunedi_21_50_05_26_110 = new ol.format.GeoJSON();
var features_79_Lunedi_21_50_05_26_110 = format_79_Lunedi_21_50_05_26_110.readFeatures(json_79_Lunedi_21_50_05_26_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Lunedi_21_50_05_26_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Lunedi_21_50_05_26_110.addFeatures(features_79_Lunedi_21_50_05_26_110);
var lyr_79_Lunedi_21_50_05_26_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Lunedi_21_50_05_26_110, 
                style: style_79_Lunedi_21_50_05_26_110,
                popuplayertitle: '79_Lunedi_21_50_05_26',
                interactive: true,
    title: '79_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/79_Lunedi_21_50_05_26_110_0.png" /> 1<br />\
    <img src="styles/legend/79_Lunedi_21_50_05_26_110_1.png" /> 2<br />' });
var format_154_Lunedi_21_50_05_26_111 = new ol.format.GeoJSON();
var features_154_Lunedi_21_50_05_26_111 = format_154_Lunedi_21_50_05_26_111.readFeatures(json_154_Lunedi_21_50_05_26_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_154_Lunedi_21_50_05_26_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_154_Lunedi_21_50_05_26_111.addFeatures(features_154_Lunedi_21_50_05_26_111);
var lyr_154_Lunedi_21_50_05_26_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_154_Lunedi_21_50_05_26_111, 
                style: style_154_Lunedi_21_50_05_26_111,
                popuplayertitle: '154_Lunedi_21_50_05_26',
                interactive: true,
    title: '154_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_0.png" /> 1<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_1.png" /> 2<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_2.png" /> 3<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_3.png" /> 4<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_4.png" /> 5<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_5.png" /> 6<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_6.png" /> 7<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_7.png" /> 8<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_8.png" /> 9<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_9.png" /> 10<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_10.png" /> 11<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_11.png" /> 12<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_12.png" /> 13<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_13.png" /> 14<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_14.png" /> 15<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_15.png" /> 16<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_16.png" /> 17<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_17.png" /> 18<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_18.png" /> 19<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_19.png" /> 20<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_20.png" /> 21<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_21.png" /> 22<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_22.png" /> 23<br />\
    <img src="styles/legend/154_Lunedi_21_50_05_26_111_23.png" /> 24<br />' });
var format_156_Lunedi_13_07_20_43_112 = new ol.format.GeoJSON();
var features_156_Lunedi_13_07_20_43_112 = format_156_Lunedi_13_07_20_43_112.readFeatures(json_156_Lunedi_13_07_20_43_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Lunedi_13_07_20_43_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Lunedi_13_07_20_43_112.addFeatures(features_156_Lunedi_13_07_20_43_112);
var lyr_156_Lunedi_13_07_20_43_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Lunedi_13_07_20_43_112, 
                style: style_156_Lunedi_13_07_20_43_112,
                popuplayertitle: '156_Lunedi_13_07_20_43',
                interactive: true,
    title: '156_Lunedi_13_07_20_43<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_0.png" /> 1<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_1.png" /> 2<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_2.png" /> 3<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_3.png" /> 4<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_4.png" /> 5<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_5.png" /> 6<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_6.png" /> 7<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_7.png" /> 8<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_8.png" /> 9<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_9.png" /> 10<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_10.png" /> 11<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_11.png" /> 12<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_12.png" /> 13<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_13.png" /> 14<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_14.png" /> 15<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_15.png" /> 16<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_16.png" /> 17<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_17.png" /> 18<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_112_18.png" /> 19<br />' });
var format_158_Lunedi_05_30_13_06_113 = new ol.format.GeoJSON();
var features_158_Lunedi_05_30_13_06_113 = format_158_Lunedi_05_30_13_06_113.readFeatures(json_158_Lunedi_05_30_13_06_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Lunedi_05_30_13_06_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Lunedi_05_30_13_06_113.addFeatures(features_158_Lunedi_05_30_13_06_113);
var lyr_158_Lunedi_05_30_13_06_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Lunedi_05_30_13_06_113, 
                style: style_158_Lunedi_05_30_13_06_113,
                popuplayertitle: '158_Lunedi_05_30_13_06',
                interactive: true,
    title: '158_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_113_0.png" /> 1<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_113_1.png" /> 2<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_113_2.png" /> 3<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_113_3.png" /> 4<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_113_4.png" /> 5<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_113_5.png" /> 6<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_113_6.png" /> 7<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_113_7.png" /> 8<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_113_8.png" /> 9<br />' });
var format_531_Lunedi_05_30_13_06_114 = new ol.format.GeoJSON();
var features_531_Lunedi_05_30_13_06_114 = format_531_Lunedi_05_30_13_06_114.readFeatures(json_531_Lunedi_05_30_13_06_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Lunedi_05_30_13_06_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Lunedi_05_30_13_06_114.addFeatures(features_531_Lunedi_05_30_13_06_114);
var lyr_531_Lunedi_05_30_13_06_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Lunedi_05_30_13_06_114, 
                style: style_531_Lunedi_05_30_13_06_114,
                popuplayertitle: '531_Lunedi_05_30_13_06',
                interactive: true,
    title: '531_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/531_Lunedi_05_30_13_06_114_0.png" /> 1<br />' });
var format_534_Lunedi_21_50_05_26_115 = new ol.format.GeoJSON();
var features_534_Lunedi_21_50_05_26_115 = format_534_Lunedi_21_50_05_26_115.readFeatures(json_534_Lunedi_21_50_05_26_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Lunedi_21_50_05_26_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Lunedi_21_50_05_26_115.addFeatures(features_534_Lunedi_21_50_05_26_115);
var lyr_534_Lunedi_21_50_05_26_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Lunedi_21_50_05_26_115, 
                style: style_534_Lunedi_21_50_05_26_115,
                popuplayertitle: '534_Lunedi_21_50_05_26',
                interactive: true,
    title: '534_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/534_Lunedi_21_50_05_26_115_0.png" /> 1<br />' });
var format_540_Lunedi_21_50_05_26_116 = new ol.format.GeoJSON();
var features_540_Lunedi_21_50_05_26_116 = format_540_Lunedi_21_50_05_26_116.readFeatures(json_540_Lunedi_21_50_05_26_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Lunedi_21_50_05_26_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Lunedi_21_50_05_26_116.addFeatures(features_540_Lunedi_21_50_05_26_116);
var lyr_540_Lunedi_21_50_05_26_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Lunedi_21_50_05_26_116, 
                style: style_540_Lunedi_21_50_05_26_116,
                popuplayertitle: '540_Lunedi_21_50_05_26',
                interactive: true,
    title: '540_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/540_Lunedi_21_50_05_26_116_0.png" /> 1<br />' });
var format_541_Lunedi_05_30_13_06_117 = new ol.format.GeoJSON();
var features_541_Lunedi_05_30_13_06_117 = format_541_Lunedi_05_30_13_06_117.readFeatures(json_541_Lunedi_05_30_13_06_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Lunedi_05_30_13_06_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Lunedi_05_30_13_06_117.addFeatures(features_541_Lunedi_05_30_13_06_117);
var lyr_541_Lunedi_05_30_13_06_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Lunedi_05_30_13_06_117, 
                style: style_541_Lunedi_05_30_13_06_117,
                popuplayertitle: '541_Lunedi_05_30_13_06',
                interactive: true,
    title: '541_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/541_Lunedi_05_30_13_06_117_0.png" /> 1<br />\
    <img src="styles/legend/541_Lunedi_05_30_13_06_117_1.png" /> 2<br />\
    <img src="styles/legend/541_Lunedi_05_30_13_06_117_2.png" /> 3<br />\
    <img src="styles/legend/541_Lunedi_05_30_13_06_117_3.png" /> 4<br />' });
var format_542_Lunedi_13_07_20_43_118 = new ol.format.GeoJSON();
var features_542_Lunedi_13_07_20_43_118 = format_542_Lunedi_13_07_20_43_118.readFeatures(json_542_Lunedi_13_07_20_43_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Lunedi_13_07_20_43_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Lunedi_13_07_20_43_118.addFeatures(features_542_Lunedi_13_07_20_43_118);
var lyr_542_Lunedi_13_07_20_43_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Lunedi_13_07_20_43_118, 
                style: style_542_Lunedi_13_07_20_43_118,
                popuplayertitle: '542_Lunedi_13_07_20_43',
                interactive: true,
    title: '542_Lunedi_13_07_20_43<br />\
    <img src="styles/legend/542_Lunedi_13_07_20_43_118_0.png" /> 1<br />\
    <img src="styles/legend/542_Lunedi_13_07_20_43_118_1.png" /> 2<br />' });
var format_543_Lunedi_19_00_02_36_119 = new ol.format.GeoJSON();
var features_543_Lunedi_19_00_02_36_119 = format_543_Lunedi_19_00_02_36_119.readFeatures(json_543_Lunedi_19_00_02_36_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Lunedi_19_00_02_36_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Lunedi_19_00_02_36_119.addFeatures(features_543_Lunedi_19_00_02_36_119);
var lyr_543_Lunedi_19_00_02_36_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Lunedi_19_00_02_36_119, 
                style: style_543_Lunedi_19_00_02_36_119,
                popuplayertitle: '543_Lunedi_19_00_02_36',
                interactive: true,
    title: '543_Lunedi_19_00_02_36<br />\
    <img src="styles/legend/543_Lunedi_19_00_02_36_119_0.png" /> 1<br />' });
var group_LunediS116Nov2026 = new ol.layer.Group({
                                layers: [lyr_70_Lunedi_09_30_15_50_103,lyr_71_Lunedi_05_30_13_06_104,lyr_72_Lunedi_13_06_20_43_105,lyr_73_Lunedi_05_30_13_06_106,lyr_75_Lunedi_13_07_20_43_107,lyr_76_Lunedi_19_00_02_36_108,lyr_77_Lunedi_21_50_05_26_109,lyr_79_Lunedi_21_50_05_26_110,lyr_154_Lunedi_21_50_05_26_111,lyr_156_Lunedi_13_07_20_43_112,lyr_158_Lunedi_05_30_13_06_113,lyr_531_Lunedi_05_30_13_06_114,lyr_534_Lunedi_21_50_05_26_115,lyr_540_Lunedi_21_50_05_26_116,lyr_541_Lunedi_05_30_13_06_117,lyr_542_Lunedi_13_07_20_43_118,lyr_543_Lunedi_19_00_02_36_119,],
                                fold: 'close',
                                title: 'Lunedi - S1 16 Nov 2026'});
var group_MartediS116Nov2026 = new ol.layer.Group({
                                layers: [lyr_70_Martedi_09_30_15_50_86,lyr_71_Martedi_05_30_13_06_87,lyr_72_Martedi_13_06_20_43_88,lyr_73_Martedi_05_30_13_06_89,lyr_75_Martedi_13_07_20_43_90,lyr_76_Martedi_19_00_02_36_91,lyr_77_Martedi_21_50_05_26_92,lyr_79_Martedi_21_50_05_26_93,lyr_154_Martedi_21_50_05_26_94,lyr_156_Martedi_13_07_20_43_95,lyr_158_Martedi_05_30_13_06_96,lyr_531_Martedi_05_30_13_06_97,lyr_534_Martedi_21_50_05_26_98,lyr_540_Martedi_21_50_05_26_99,lyr_541_Martedi_05_30_13_06_100,lyr_542_Martedi_13_07_20_43_101,lyr_543_Martedi_19_00_02_36_102,],
                                fold: 'close',
                                title: 'Martedi - S1 16 Nov 2026'});
var group_MercolediS116Nov2026 = new ol.layer.Group({
                                layers: [lyr_70_Mercoledi_09_30_15_50_69,lyr_71_Mercoledi_05_30_13_06_70,lyr_72_Mercoledi_13_06_20_43_71,lyr_73_Mercoledi_05_30_13_06_72,lyr_75_Mercoledi_13_07_20_43_73,lyr_76_Mercoledi_19_00_02_36_74,lyr_77_Mercoledi_21_50_05_26_75,lyr_79_Mercoledi_21_50_05_26_76,lyr_154_Mercoledi_21_50_05_26_77,lyr_156_Mercoledi_13_07_20_43_78,lyr_158_Mercoledi_05_30_13_06_79,lyr_531_Mercoledi_05_30_13_06_80,lyr_534_Mercoledi_21_50_05_26_81,lyr_540_Mercoledi_21_50_05_26_82,lyr_541_Mercoledi_05_30_13_06_83,lyr_542_Mercoledi_13_07_20_43_84,lyr_543_Mercoledi_19_00_02_36_85,],
                                fold: 'close',
                                title: 'Mercoledi - S1 16 Nov 2026'});
var group_GiovediS116Nov2026 = new ol.layer.Group({
                                layers: [lyr_70_Giovedi_09_30_15_50_52,lyr_71_Giovedi_05_30_13_06_53,lyr_72_Giovedi_13_06_20_43_54,lyr_73_Giovedi_05_30_13_06_55,lyr_75_Giovedi_13_07_20_43_56,lyr_76_Giovedi_19_00_02_36_57,lyr_77_Giovedi_21_50_05_26_58,lyr_79_Giovedi_21_50_05_26_59,lyr_154_Giovedi_21_50_05_26_60,lyr_156_Giovedi_13_07_20_43_61,lyr_158_Giovedi_05_30_13_06_62,lyr_531_Giovedi_05_30_13_06_63,lyr_534_Giovedi_21_50_05_26_64,lyr_540_Giovedi_21_50_05_26_65,lyr_541_Giovedi_05_30_13_06_66,lyr_542_Giovedi_13_07_20_43_67,lyr_543_Giovedi_19_00_02_36_68,],
                                fold: 'close',
                                title: 'Giovedi - S1 16 Nov 2026'});
var group_VenerdiS116Nov2026 = new ol.layer.Group({
                                layers: [lyr_70_Venerdi_09_30_15_50_35,lyr_71_Venerdi_05_30_13_06_36,lyr_72_Venerdi_13_06_20_43_37,lyr_73_Venerdi_05_30_13_06_38,lyr_75_Venerdi_13_07_20_43_39,lyr_76_Venerdi_19_00_02_36_40,lyr_77_Venerdi_21_50_05_26_41,lyr_79_Venerdi_21_50_05_26_42,lyr_154_Venerdi_21_50_05_26_43,lyr_156_Venerdi_13_07_20_43_44,lyr_158_Venerdi_05_30_13_06_45,lyr_531_Venerdi_05_30_13_06_46,lyr_534_Venerdi_21_50_05_26_47,lyr_540_Venerdi_21_50_05_26_48,lyr_541_Venerdi_05_30_13_06_49,lyr_542_Venerdi_13_07_20_43_50,lyr_543_Venerdi_19_00_02_36_51,],
                                fold: 'close',
                                title: 'Venerdi - S1 16 Nov 2026'});
var group_SabatoS116Nov2026 = new ol.layer.Group({
                                layers: [lyr_70_Sabato_09_30_15_50_18,lyr_71_Sabato_05_30_13_06_19,lyr_72_Sabato_13_06_20_43_20,lyr_73_Sabato_05_30_13_06_21,lyr_75_Sabato_13_07_20_43_22,lyr_76_Sabato_19_00_02_36_23,lyr_77_Sabato_21_50_05_26_24,lyr_79_Sabato_21_50_05_26_25,lyr_154_Sabato_21_50_05_26_26,lyr_156_Sabato_13_07_20_43_27,lyr_158_Sabato_05_30_13_06_28,lyr_531_Sabato_05_30_13_06_29,lyr_534_Sabato_21_50_05_26_30,lyr_540_Sabato_21_50_05_26_31,lyr_541_Sabato_05_30_13_06_32,lyr_542_Sabato_13_07_20_43_33,lyr_543_Sabato_19_00_02_36_34,],
                                fold: 'close',
                                title: 'Sabato - S1 16 Nov 2026'});
var group_DomenicaS116Nov2026 = new ol.layer.Group({
                                layers: [lyr_71_Domenica_05_30_13_06_2,lyr_72_Domenica_13_06_20_43_3,lyr_73_Domenica_05_30_13_06_4,lyr_75_Domenica_13_07_20_43_5,lyr_76_Domenica_19_00_02_36_6,lyr_77_Domenica_21_50_05_26_7,lyr_79_Domenica_21_50_05_26_8,lyr_154_Domenica_21_50_05_26_9,lyr_156_Domenica_13_07_20_43_10,lyr_158_Domenica_05_30_13_06_11,lyr_531_Domenica_05_30_13_06_12,lyr_534_Domenica_21_50_05_26_13,lyr_540_Domenica_21_50_05_26_14,lyr_541_Domenica_05_30_13_06_15,lyr_542_Domenica_13_07_20_43_16,lyr_543_Domenica_19_00_02_36_17,],
                                fold: 'close',
                                title: 'Domenica - S1 16 Nov 2026'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Confini_Comune_Milanodissolto_1.setVisible(true);lyr_71_Domenica_05_30_13_06_2.setVisible(false);lyr_72_Domenica_13_06_20_43_3.setVisible(false);lyr_73_Domenica_05_30_13_06_4.setVisible(false);lyr_75_Domenica_13_07_20_43_5.setVisible(false);lyr_76_Domenica_19_00_02_36_6.setVisible(false);lyr_77_Domenica_21_50_05_26_7.setVisible(false);lyr_79_Domenica_21_50_05_26_8.setVisible(false);lyr_154_Domenica_21_50_05_26_9.setVisible(false);lyr_156_Domenica_13_07_20_43_10.setVisible(false);lyr_158_Domenica_05_30_13_06_11.setVisible(false);lyr_531_Domenica_05_30_13_06_12.setVisible(false);lyr_534_Domenica_21_50_05_26_13.setVisible(false);lyr_540_Domenica_21_50_05_26_14.setVisible(false);lyr_541_Domenica_05_30_13_06_15.setVisible(false);lyr_542_Domenica_13_07_20_43_16.setVisible(false);lyr_543_Domenica_19_00_02_36_17.setVisible(false);lyr_70_Sabato_09_30_15_50_18.setVisible(false);lyr_71_Sabato_05_30_13_06_19.setVisible(false);lyr_72_Sabato_13_06_20_43_20.setVisible(false);lyr_73_Sabato_05_30_13_06_21.setVisible(false);lyr_75_Sabato_13_07_20_43_22.setVisible(false);lyr_76_Sabato_19_00_02_36_23.setVisible(false);lyr_77_Sabato_21_50_05_26_24.setVisible(false);lyr_79_Sabato_21_50_05_26_25.setVisible(false);lyr_154_Sabato_21_50_05_26_26.setVisible(false);lyr_156_Sabato_13_07_20_43_27.setVisible(false);lyr_158_Sabato_05_30_13_06_28.setVisible(false);lyr_531_Sabato_05_30_13_06_29.setVisible(false);lyr_534_Sabato_21_50_05_26_30.setVisible(false);lyr_540_Sabato_21_50_05_26_31.setVisible(false);lyr_541_Sabato_05_30_13_06_32.setVisible(false);lyr_542_Sabato_13_07_20_43_33.setVisible(false);lyr_543_Sabato_19_00_02_36_34.setVisible(false);lyr_70_Venerdi_09_30_15_50_35.setVisible(false);lyr_71_Venerdi_05_30_13_06_36.setVisible(false);lyr_72_Venerdi_13_06_20_43_37.setVisible(false);lyr_73_Venerdi_05_30_13_06_38.setVisible(false);lyr_75_Venerdi_13_07_20_43_39.setVisible(false);lyr_76_Venerdi_19_00_02_36_40.setVisible(false);lyr_77_Venerdi_21_50_05_26_41.setVisible(false);lyr_79_Venerdi_21_50_05_26_42.setVisible(false);lyr_154_Venerdi_21_50_05_26_43.setVisible(false);lyr_156_Venerdi_13_07_20_43_44.setVisible(false);lyr_158_Venerdi_05_30_13_06_45.setVisible(false);lyr_531_Venerdi_05_30_13_06_46.setVisible(false);lyr_534_Venerdi_21_50_05_26_47.setVisible(false);lyr_540_Venerdi_21_50_05_26_48.setVisible(false);lyr_541_Venerdi_05_30_13_06_49.setVisible(false);lyr_542_Venerdi_13_07_20_43_50.setVisible(false);lyr_543_Venerdi_19_00_02_36_51.setVisible(false);lyr_70_Giovedi_09_30_15_50_52.setVisible(false);lyr_71_Giovedi_05_30_13_06_53.setVisible(false);lyr_72_Giovedi_13_06_20_43_54.setVisible(false);lyr_73_Giovedi_05_30_13_06_55.setVisible(false);lyr_75_Giovedi_13_07_20_43_56.setVisible(false);lyr_76_Giovedi_19_00_02_36_57.setVisible(false);lyr_77_Giovedi_21_50_05_26_58.setVisible(false);lyr_79_Giovedi_21_50_05_26_59.setVisible(false);lyr_154_Giovedi_21_50_05_26_60.setVisible(false);lyr_156_Giovedi_13_07_20_43_61.setVisible(false);lyr_158_Giovedi_05_30_13_06_62.setVisible(false);lyr_531_Giovedi_05_30_13_06_63.setVisible(false);lyr_534_Giovedi_21_50_05_26_64.setVisible(false);lyr_540_Giovedi_21_50_05_26_65.setVisible(false);lyr_541_Giovedi_05_30_13_06_66.setVisible(false);lyr_542_Giovedi_13_07_20_43_67.setVisible(false);lyr_543_Giovedi_19_00_02_36_68.setVisible(false);lyr_70_Mercoledi_09_30_15_50_69.setVisible(false);lyr_71_Mercoledi_05_30_13_06_70.setVisible(false);lyr_72_Mercoledi_13_06_20_43_71.setVisible(false);lyr_73_Mercoledi_05_30_13_06_72.setVisible(false);lyr_75_Mercoledi_13_07_20_43_73.setVisible(false);lyr_76_Mercoledi_19_00_02_36_74.setVisible(false);lyr_77_Mercoledi_21_50_05_26_75.setVisible(false);lyr_79_Mercoledi_21_50_05_26_76.setVisible(false);lyr_154_Mercoledi_21_50_05_26_77.setVisible(false);lyr_156_Mercoledi_13_07_20_43_78.setVisible(false);lyr_158_Mercoledi_05_30_13_06_79.setVisible(false);lyr_531_Mercoledi_05_30_13_06_80.setVisible(false);lyr_534_Mercoledi_21_50_05_26_81.setVisible(false);lyr_540_Mercoledi_21_50_05_26_82.setVisible(false);lyr_541_Mercoledi_05_30_13_06_83.setVisible(false);lyr_542_Mercoledi_13_07_20_43_84.setVisible(false);lyr_543_Mercoledi_19_00_02_36_85.setVisible(false);lyr_70_Martedi_09_30_15_50_86.setVisible(false);lyr_71_Martedi_05_30_13_06_87.setVisible(false);lyr_72_Martedi_13_06_20_43_88.setVisible(false);lyr_73_Martedi_05_30_13_06_89.setVisible(false);lyr_75_Martedi_13_07_20_43_90.setVisible(false);lyr_76_Martedi_19_00_02_36_91.setVisible(false);lyr_77_Martedi_21_50_05_26_92.setVisible(false);lyr_79_Martedi_21_50_05_26_93.setVisible(false);lyr_154_Martedi_21_50_05_26_94.setVisible(false);lyr_156_Martedi_13_07_20_43_95.setVisible(false);lyr_158_Martedi_05_30_13_06_96.setVisible(false);lyr_531_Martedi_05_30_13_06_97.setVisible(false);lyr_534_Martedi_21_50_05_26_98.setVisible(false);lyr_540_Martedi_21_50_05_26_99.setVisible(false);lyr_541_Martedi_05_30_13_06_100.setVisible(false);lyr_542_Martedi_13_07_20_43_101.setVisible(false);lyr_543_Martedi_19_00_02_36_102.setVisible(false);lyr_70_Lunedi_09_30_15_50_103.setVisible(false);lyr_71_Lunedi_05_30_13_06_104.setVisible(false);lyr_72_Lunedi_13_06_20_43_105.setVisible(false);lyr_73_Lunedi_05_30_13_06_106.setVisible(false);lyr_75_Lunedi_13_07_20_43_107.setVisible(false);lyr_76_Lunedi_19_00_02_36_108.setVisible(false);lyr_77_Lunedi_21_50_05_26_109.setVisible(false);lyr_79_Lunedi_21_50_05_26_110.setVisible(false);lyr_154_Lunedi_21_50_05_26_111.setVisible(false);lyr_156_Lunedi_13_07_20_43_112.setVisible(false);lyr_158_Lunedi_05_30_13_06_113.setVisible(true);lyr_531_Lunedi_05_30_13_06_114.setVisible(false);lyr_534_Lunedi_21_50_05_26_115.setVisible(false);lyr_540_Lunedi_21_50_05_26_116.setVisible(false);lyr_541_Lunedi_05_30_13_06_117.setVisible(false);lyr_542_Lunedi_13_07_20_43_118.setVisible(false);lyr_543_Lunedi_19_00_02_36_119.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_Confini_Comune_Milanodissolto_1,group_DomenicaS116Nov2026,group_SabatoS116Nov2026,group_VenerdiS116Nov2026,group_GiovediS116Nov2026,group_MercolediS116Nov2026,group_MartediS116Nov2026,group_LunediS116Nov2026];
lyr_Confini_Comune_Milanodissolto_1.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETRO': 'PERIMETRO', });
lyr_71_Domenica_05_30_13_06_2.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_72_Domenica_13_06_20_43_3.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_73_Domenica_05_30_13_06_4.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_75_Domenica_13_07_20_43_5.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_76_Domenica_19_00_02_36_6.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_77_Domenica_21_50_05_26_7.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_79_Domenica_21_50_05_26_8.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_154_Domenica_21_50_05_26_9.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_156_Domenica_13_07_20_43_10.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_158_Domenica_05_30_13_06_11.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_531_Domenica_05_30_13_06_12.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_534_Domenica_21_50_05_26_13.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_540_Domenica_21_50_05_26_14.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_541_Domenica_05_30_13_06_15.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_542_Domenica_13_07_20_43_16.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_543_Domenica_19_00_02_36_17.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_70_Sabato_09_30_15_50_18.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_71_Sabato_05_30_13_06_19.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_72_Sabato_13_06_20_43_20.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_73_Sabato_05_30_13_06_21.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_75_Sabato_13_07_20_43_22.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_76_Sabato_19_00_02_36_23.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_77_Sabato_21_50_05_26_24.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_79_Sabato_21_50_05_26_25.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_154_Sabato_21_50_05_26_26.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_156_Sabato_13_07_20_43_27.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_158_Sabato_05_30_13_06_28.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_531_Sabato_05_30_13_06_29.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_534_Sabato_21_50_05_26_30.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_540_Sabato_21_50_05_26_31.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_541_Sabato_05_30_13_06_32.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_542_Sabato_13_07_20_43_33.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_543_Sabato_19_00_02_36_34.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_70_Venerdi_09_30_15_50_35.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_71_Venerdi_05_30_13_06_36.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_72_Venerdi_13_06_20_43_37.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_73_Venerdi_05_30_13_06_38.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_75_Venerdi_13_07_20_43_39.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_76_Venerdi_19_00_02_36_40.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_77_Venerdi_21_50_05_26_41.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_79_Venerdi_21_50_05_26_42.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_154_Venerdi_21_50_05_26_43.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_156_Venerdi_13_07_20_43_44.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_158_Venerdi_05_30_13_06_45.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_531_Venerdi_05_30_13_06_46.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_534_Venerdi_21_50_05_26_47.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_540_Venerdi_21_50_05_26_48.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_541_Venerdi_05_30_13_06_49.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_542_Venerdi_13_07_20_43_50.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_543_Venerdi_19_00_02_36_51.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_70_Giovedi_09_30_15_50_52.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_71_Giovedi_05_30_13_06_53.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_72_Giovedi_13_06_20_43_54.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_73_Giovedi_05_30_13_06_55.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_75_Giovedi_13_07_20_43_56.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_76_Giovedi_19_00_02_36_57.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_77_Giovedi_21_50_05_26_58.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_79_Giovedi_21_50_05_26_59.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_154_Giovedi_21_50_05_26_60.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_156_Giovedi_13_07_20_43_61.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_158_Giovedi_05_30_13_06_62.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_531_Giovedi_05_30_13_06_63.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_534_Giovedi_21_50_05_26_64.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_540_Giovedi_21_50_05_26_65.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_541_Giovedi_05_30_13_06_66.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_542_Giovedi_13_07_20_43_67.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_543_Giovedi_19_00_02_36_68.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_70_Mercoledi_09_30_15_50_69.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_71_Mercoledi_05_30_13_06_70.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_72_Mercoledi_13_06_20_43_71.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_73_Mercoledi_05_30_13_06_72.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_75_Mercoledi_13_07_20_43_73.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_76_Mercoledi_19_00_02_36_74.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_77_Mercoledi_21_50_05_26_75.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_79_Mercoledi_21_50_05_26_76.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_154_Mercoledi_21_50_05_26_77.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_156_Mercoledi_13_07_20_43_78.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_158_Mercoledi_05_30_13_06_79.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_531_Mercoledi_05_30_13_06_80.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_534_Mercoledi_21_50_05_26_81.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_540_Mercoledi_21_50_05_26_82.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_541_Mercoledi_05_30_13_06_83.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_542_Mercoledi_13_07_20_43_84.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_543_Mercoledi_19_00_02_36_85.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_70_Martedi_09_30_15_50_86.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_71_Martedi_05_30_13_06_87.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_72_Martedi_13_06_20_43_88.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_73_Martedi_05_30_13_06_89.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_75_Martedi_13_07_20_43_90.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_76_Martedi_19_00_02_36_91.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_77_Martedi_21_50_05_26_92.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_79_Martedi_21_50_05_26_93.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_154_Martedi_21_50_05_26_94.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_156_Martedi_13_07_20_43_95.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_158_Martedi_05_30_13_06_96.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_531_Martedi_05_30_13_06_97.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_534_Martedi_21_50_05_26_98.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_540_Martedi_21_50_05_26_99.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_541_Martedi_05_30_13_06_100.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_542_Martedi_13_07_20_43_101.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_543_Martedi_19_00_02_36_102.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_70_Lunedi_09_30_15_50_103.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_71_Lunedi_05_30_13_06_104.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_72_Lunedi_13_06_20_43_105.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_73_Lunedi_05_30_13_06_106.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_75_Lunedi_13_07_20_43_107.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_76_Lunedi_19_00_02_36_108.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_77_Lunedi_21_50_05_26_109.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_79_Lunedi_21_50_05_26_110.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_154_Lunedi_21_50_05_26_111.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_156_Lunedi_13_07_20_43_112.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_158_Lunedi_05_30_13_06_113.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_531_Lunedi_05_30_13_06_114.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_534_Lunedi_21_50_05_26_115.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_540_Lunedi_21_50_05_26_116.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_541_Lunedi_05_30_13_06_117.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_542_Lunedi_13_07_20_43_118.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_543_Lunedi_19_00_02_36_119.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'squadra': 'squadra', 'servizio_g': 'servizio_g', });
lyr_Confini_Comune_Milanodissolto_1.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRO': 'TextEdit', });
lyr_71_Domenica_05_30_13_06_2.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_72_Domenica_13_06_20_43_3.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_73_Domenica_05_30_13_06_4.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_75_Domenica_13_07_20_43_5.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_76_Domenica_19_00_02_36_6.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_77_Domenica_21_50_05_26_7.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_79_Domenica_21_50_05_26_8.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_154_Domenica_21_50_05_26_9.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_156_Domenica_13_07_20_43_10.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_158_Domenica_05_30_13_06_11.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_531_Domenica_05_30_13_06_12.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_534_Domenica_21_50_05_26_13.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_540_Domenica_21_50_05_26_14.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_541_Domenica_05_30_13_06_15.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_542_Domenica_13_07_20_43_16.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_543_Domenica_19_00_02_36_17.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_70_Sabato_09_30_15_50_18.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_71_Sabato_05_30_13_06_19.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_72_Sabato_13_06_20_43_20.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_73_Sabato_05_30_13_06_21.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_75_Sabato_13_07_20_43_22.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_76_Sabato_19_00_02_36_23.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_77_Sabato_21_50_05_26_24.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_79_Sabato_21_50_05_26_25.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_154_Sabato_21_50_05_26_26.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_156_Sabato_13_07_20_43_27.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_158_Sabato_05_30_13_06_28.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_531_Sabato_05_30_13_06_29.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_534_Sabato_21_50_05_26_30.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_540_Sabato_21_50_05_26_31.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_541_Sabato_05_30_13_06_32.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_542_Sabato_13_07_20_43_33.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_543_Sabato_19_00_02_36_34.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_70_Venerdi_09_30_15_50_35.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_71_Venerdi_05_30_13_06_36.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_72_Venerdi_13_06_20_43_37.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_73_Venerdi_05_30_13_06_38.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_75_Venerdi_13_07_20_43_39.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_76_Venerdi_19_00_02_36_40.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_77_Venerdi_21_50_05_26_41.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_79_Venerdi_21_50_05_26_42.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_154_Venerdi_21_50_05_26_43.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_156_Venerdi_13_07_20_43_44.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_158_Venerdi_05_30_13_06_45.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_531_Venerdi_05_30_13_06_46.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_534_Venerdi_21_50_05_26_47.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_540_Venerdi_21_50_05_26_48.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_541_Venerdi_05_30_13_06_49.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_542_Venerdi_13_07_20_43_50.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_543_Venerdi_19_00_02_36_51.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_70_Giovedi_09_30_15_50_52.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_71_Giovedi_05_30_13_06_53.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_72_Giovedi_13_06_20_43_54.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_73_Giovedi_05_30_13_06_55.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_75_Giovedi_13_07_20_43_56.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_76_Giovedi_19_00_02_36_57.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_77_Giovedi_21_50_05_26_58.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_79_Giovedi_21_50_05_26_59.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_154_Giovedi_21_50_05_26_60.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_156_Giovedi_13_07_20_43_61.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_158_Giovedi_05_30_13_06_62.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_531_Giovedi_05_30_13_06_63.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_534_Giovedi_21_50_05_26_64.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_540_Giovedi_21_50_05_26_65.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_541_Giovedi_05_30_13_06_66.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_542_Giovedi_13_07_20_43_67.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_543_Giovedi_19_00_02_36_68.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_70_Mercoledi_09_30_15_50_69.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_71_Mercoledi_05_30_13_06_70.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_72_Mercoledi_13_06_20_43_71.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_73_Mercoledi_05_30_13_06_72.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_75_Mercoledi_13_07_20_43_73.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_76_Mercoledi_19_00_02_36_74.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_77_Mercoledi_21_50_05_26_75.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_79_Mercoledi_21_50_05_26_76.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_154_Mercoledi_21_50_05_26_77.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_156_Mercoledi_13_07_20_43_78.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_158_Mercoledi_05_30_13_06_79.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_531_Mercoledi_05_30_13_06_80.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_534_Mercoledi_21_50_05_26_81.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_540_Mercoledi_21_50_05_26_82.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_541_Mercoledi_05_30_13_06_83.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_542_Mercoledi_13_07_20_43_84.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_543_Mercoledi_19_00_02_36_85.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_70_Martedi_09_30_15_50_86.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_71_Martedi_05_30_13_06_87.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_72_Martedi_13_06_20_43_88.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_73_Martedi_05_30_13_06_89.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_75_Martedi_13_07_20_43_90.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_76_Martedi_19_00_02_36_91.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_77_Martedi_21_50_05_26_92.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_79_Martedi_21_50_05_26_93.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_154_Martedi_21_50_05_26_94.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_156_Martedi_13_07_20_43_95.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_158_Martedi_05_30_13_06_96.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_531_Martedi_05_30_13_06_97.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_534_Martedi_21_50_05_26_98.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_540_Martedi_21_50_05_26_99.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_541_Martedi_05_30_13_06_100.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_542_Martedi_13_07_20_43_101.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_543_Martedi_19_00_02_36_102.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_70_Lunedi_09_30_15_50_103.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_71_Lunedi_05_30_13_06_104.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_72_Lunedi_13_06_20_43_105.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_73_Lunedi_05_30_13_06_106.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_75_Lunedi_13_07_20_43_107.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_76_Lunedi_19_00_02_36_108.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_77_Lunedi_21_50_05_26_109.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_79_Lunedi_21_50_05_26_110.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_154_Lunedi_21_50_05_26_111.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_156_Lunedi_13_07_20_43_112.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_158_Lunedi_05_30_13_06_113.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_531_Lunedi_05_30_13_06_114.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_534_Lunedi_21_50_05_26_115.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_540_Lunedi_21_50_05_26_116.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_541_Lunedi_05_30_13_06_117.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_542_Lunedi_13_07_20_43_118.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_543_Lunedi_19_00_02_36_119.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'unita_terr': '', 'giorno': '', 'ora_inizio': '', 'ora_fine': '', 'squadra': '', 'servizio_g': '', });
lyr_Confini_Comune_Milanodissolto_1.set('fieldLabels', {'fid': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERIMETRO': 'inline label - always visible', });
lyr_71_Domenica_05_30_13_06_2.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_72_Domenica_13_06_20_43_3.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_73_Domenica_05_30_13_06_4.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_75_Domenica_13_07_20_43_5.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_76_Domenica_19_00_02_36_6.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_77_Domenica_21_50_05_26_7.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_79_Domenica_21_50_05_26_8.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_154_Domenica_21_50_05_26_9.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_156_Domenica_13_07_20_43_10.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_158_Domenica_05_30_13_06_11.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_531_Domenica_05_30_13_06_12.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_534_Domenica_21_50_05_26_13.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_540_Domenica_21_50_05_26_14.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_541_Domenica_05_30_13_06_15.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_542_Domenica_13_07_20_43_16.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_543_Domenica_19_00_02_36_17.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_70_Sabato_09_30_15_50_18.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_71_Sabato_05_30_13_06_19.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_72_Sabato_13_06_20_43_20.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_73_Sabato_05_30_13_06_21.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_75_Sabato_13_07_20_43_22.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_76_Sabato_19_00_02_36_23.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_77_Sabato_21_50_05_26_24.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_79_Sabato_21_50_05_26_25.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_154_Sabato_21_50_05_26_26.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_156_Sabato_13_07_20_43_27.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_158_Sabato_05_30_13_06_28.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_531_Sabato_05_30_13_06_29.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_534_Sabato_21_50_05_26_30.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_540_Sabato_21_50_05_26_31.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_541_Sabato_05_30_13_06_32.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_542_Sabato_13_07_20_43_33.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_543_Sabato_19_00_02_36_34.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_70_Venerdi_09_30_15_50_35.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_71_Venerdi_05_30_13_06_36.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_72_Venerdi_13_06_20_43_37.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_73_Venerdi_05_30_13_06_38.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_75_Venerdi_13_07_20_43_39.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_76_Venerdi_19_00_02_36_40.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_77_Venerdi_21_50_05_26_41.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_79_Venerdi_21_50_05_26_42.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_154_Venerdi_21_50_05_26_43.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_156_Venerdi_13_07_20_43_44.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_158_Venerdi_05_30_13_06_45.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_531_Venerdi_05_30_13_06_46.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_534_Venerdi_21_50_05_26_47.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_540_Venerdi_21_50_05_26_48.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_541_Venerdi_05_30_13_06_49.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_542_Venerdi_13_07_20_43_50.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_543_Venerdi_19_00_02_36_51.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_70_Giovedi_09_30_15_50_52.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_71_Giovedi_05_30_13_06_53.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_72_Giovedi_13_06_20_43_54.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_73_Giovedi_05_30_13_06_55.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_75_Giovedi_13_07_20_43_56.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_76_Giovedi_19_00_02_36_57.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_77_Giovedi_21_50_05_26_58.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_79_Giovedi_21_50_05_26_59.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_154_Giovedi_21_50_05_26_60.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_156_Giovedi_13_07_20_43_61.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_158_Giovedi_05_30_13_06_62.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_531_Giovedi_05_30_13_06_63.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_534_Giovedi_21_50_05_26_64.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_540_Giovedi_21_50_05_26_65.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_541_Giovedi_05_30_13_06_66.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_542_Giovedi_13_07_20_43_67.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_543_Giovedi_19_00_02_36_68.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_70_Mercoledi_09_30_15_50_69.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_71_Mercoledi_05_30_13_06_70.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_72_Mercoledi_13_06_20_43_71.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_73_Mercoledi_05_30_13_06_72.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_75_Mercoledi_13_07_20_43_73.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_76_Mercoledi_19_00_02_36_74.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_77_Mercoledi_21_50_05_26_75.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_79_Mercoledi_21_50_05_26_76.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_154_Mercoledi_21_50_05_26_77.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_156_Mercoledi_13_07_20_43_78.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_158_Mercoledi_05_30_13_06_79.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_531_Mercoledi_05_30_13_06_80.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_534_Mercoledi_21_50_05_26_81.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_540_Mercoledi_21_50_05_26_82.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_541_Mercoledi_05_30_13_06_83.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_542_Mercoledi_13_07_20_43_84.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_543_Mercoledi_19_00_02_36_85.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_70_Martedi_09_30_15_50_86.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_71_Martedi_05_30_13_06_87.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_72_Martedi_13_06_20_43_88.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_73_Martedi_05_30_13_06_89.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_75_Martedi_13_07_20_43_90.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_76_Martedi_19_00_02_36_91.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_77_Martedi_21_50_05_26_92.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_79_Martedi_21_50_05_26_93.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_154_Martedi_21_50_05_26_94.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_156_Martedi_13_07_20_43_95.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_158_Martedi_05_30_13_06_96.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_531_Martedi_05_30_13_06_97.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_534_Martedi_21_50_05_26_98.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_540_Martedi_21_50_05_26_99.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_541_Martedi_05_30_13_06_100.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_542_Martedi_13_07_20_43_101.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_543_Martedi_19_00_02_36_102.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_70_Lunedi_09_30_15_50_103.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_71_Lunedi_05_30_13_06_104.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_72_Lunedi_13_06_20_43_105.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_73_Lunedi_05_30_13_06_106.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_75_Lunedi_13_07_20_43_107.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_76_Lunedi_19_00_02_36_108.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_77_Lunedi_21_50_05_26_109.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_79_Lunedi_21_50_05_26_110.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_154_Lunedi_21_50_05_26_111.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_156_Lunedi_13_07_20_43_112.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_158_Lunedi_05_30_13_06_113.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_531_Lunedi_05_30_13_06_114.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_534_Lunedi_21_50_05_26_115.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_540_Lunedi_21_50_05_26_116.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_541_Lunedi_05_30_13_06_117.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_542_Lunedi_13_07_20_43_118.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_543_Lunedi_19_00_02_36_119.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'squadra': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_543_Lunedi_19_00_02_36_119.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});