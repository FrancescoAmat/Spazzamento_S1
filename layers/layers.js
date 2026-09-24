var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 0.698000,
            
            
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
var format_70_Venerdi_09_30_15_50_2 = new ol.format.GeoJSON();
var features_70_Venerdi_09_30_15_50_2 = format_70_Venerdi_09_30_15_50_2.readFeatures(json_70_Venerdi_09_30_15_50_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Venerdi_09_30_15_50_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Venerdi_09_30_15_50_2.addFeatures(features_70_Venerdi_09_30_15_50_2);
var lyr_70_Venerdi_09_30_15_50_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Venerdi_09_30_15_50_2, 
                style: style_70_Venerdi_09_30_15_50_2,
                popuplayertitle: '70_Venerdi_09_30_15_50',
                interactive: true,
    title: '70_Venerdi_09_30_15_50<br />\
    <img src="styles/legend/70_Venerdi_09_30_15_50_2_0.png" /> 1<br />' });
var format_71_Venerdi_05_30_13_06_3 = new ol.format.GeoJSON();
var features_71_Venerdi_05_30_13_06_3 = format_71_Venerdi_05_30_13_06_3.readFeatures(json_71_Venerdi_05_30_13_06_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Venerdi_05_30_13_06_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Venerdi_05_30_13_06_3.addFeatures(features_71_Venerdi_05_30_13_06_3);
var lyr_71_Venerdi_05_30_13_06_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Venerdi_05_30_13_06_3, 
                style: style_71_Venerdi_05_30_13_06_3,
                popuplayertitle: '71_Venerdi_05_30_13_06',
                interactive: true,
    title: '71_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/71_Venerdi_05_30_13_06_3_0.png" /> 1<br />\
    <img src="styles/legend/71_Venerdi_05_30_13_06_3_1.png" /> 2<br />\
    <img src="styles/legend/71_Venerdi_05_30_13_06_3_2.png" /> 3<br />' });
var format_72_Venerdi_13_07_20_43_4 = new ol.format.GeoJSON();
var features_72_Venerdi_13_07_20_43_4 = format_72_Venerdi_13_07_20_43_4.readFeatures(json_72_Venerdi_13_07_20_43_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Venerdi_13_07_20_43_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Venerdi_13_07_20_43_4.addFeatures(features_72_Venerdi_13_07_20_43_4);
var lyr_72_Venerdi_13_07_20_43_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Venerdi_13_07_20_43_4, 
                style: style_72_Venerdi_13_07_20_43_4,
                popuplayertitle: '72_Venerdi_13_07_20_43',
                interactive: true,
    title: '72_Venerdi_13_07_20_43<br />\
    <img src="styles/legend/72_Venerdi_13_07_20_43_4_0.png" /> 1<br />\
    <img src="styles/legend/72_Venerdi_13_07_20_43_4_1.png" /> 2<br />' });
var format_73_Venerdi_05_30_13_06_5 = new ol.format.GeoJSON();
var features_73_Venerdi_05_30_13_06_5 = format_73_Venerdi_05_30_13_06_5.readFeatures(json_73_Venerdi_05_30_13_06_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Venerdi_05_30_13_06_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Venerdi_05_30_13_06_5.addFeatures(features_73_Venerdi_05_30_13_06_5);
var lyr_73_Venerdi_05_30_13_06_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Venerdi_05_30_13_06_5, 
                style: style_73_Venerdi_05_30_13_06_5,
                popuplayertitle: '73_Venerdi_05_30_13_06',
                interactive: true,
    title: '73_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06_5_0.png" /> 1<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06_5_1.png" /> 2<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06_5_2.png" /> 3<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06_5_3.png" /> 4<br />\
    <img src="styles/legend/73_Venerdi_05_30_13_06_5_4.png" /> 5<br />' });
var format_75_Venerdi_13_07_20_43_6 = new ol.format.GeoJSON();
var features_75_Venerdi_13_07_20_43_6 = format_75_Venerdi_13_07_20_43_6.readFeatures(json_75_Venerdi_13_07_20_43_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Venerdi_13_07_20_43_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Venerdi_13_07_20_43_6.addFeatures(features_75_Venerdi_13_07_20_43_6);
var lyr_75_Venerdi_13_07_20_43_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Venerdi_13_07_20_43_6, 
                style: style_75_Venerdi_13_07_20_43_6,
                popuplayertitle: '75_Venerdi_13_07_20_43',
                interactive: true,
    title: '75_Venerdi_13_07_20_43<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43_6_0.png" /> 1<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43_6_1.png" /> 2<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43_6_2.png" /> 3<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43_6_3.png" /> 4<br />\
    <img src="styles/legend/75_Venerdi_13_07_20_43_6_4.png" /> 5<br />' });
var format_76_Venerdi_19_00_02_36_7 = new ol.format.GeoJSON();
var features_76_Venerdi_19_00_02_36_7 = format_76_Venerdi_19_00_02_36_7.readFeatures(json_76_Venerdi_19_00_02_36_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Venerdi_19_00_02_36_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Venerdi_19_00_02_36_7.addFeatures(features_76_Venerdi_19_00_02_36_7);
var lyr_76_Venerdi_19_00_02_36_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Venerdi_19_00_02_36_7, 
                style: style_76_Venerdi_19_00_02_36_7,
                popuplayertitle: '76_Venerdi_19_00_02_36',
                interactive: true,
    title: '76_Venerdi_19_00_02_36<br />\
    <img src="styles/legend/76_Venerdi_19_00_02_36_7_0.png" /> 1<br />' });
var format_77_Venerdi_21_50_05_26_8 = new ol.format.GeoJSON();
var features_77_Venerdi_21_50_05_26_8 = format_77_Venerdi_21_50_05_26_8.readFeatures(json_77_Venerdi_21_50_05_26_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Venerdi_21_50_05_26_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Venerdi_21_50_05_26_8.addFeatures(features_77_Venerdi_21_50_05_26_8);
var lyr_77_Venerdi_21_50_05_26_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Venerdi_21_50_05_26_8, 
                style: style_77_Venerdi_21_50_05_26_8,
                popuplayertitle: '77_Venerdi_21_50_05_26',
                interactive: true,
    title: '77_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_8_0.png" /> 1<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_8_1.png" /> 2<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_8_2.png" /> 3<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_8_3.png" /> 4<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_8_4.png" /> 5<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_8_5.png" /> 6<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_8_6.png" /> 7<br />\
    <img src="styles/legend/77_Venerdi_21_50_05_26_8_7.png" /> 8<br />' });
var format_79_Venerdi_21_50_05_26_9 = new ol.format.GeoJSON();
var features_79_Venerdi_21_50_05_26_9 = format_79_Venerdi_21_50_05_26_9.readFeatures(json_79_Venerdi_21_50_05_26_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Venerdi_21_50_05_26_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Venerdi_21_50_05_26_9.addFeatures(features_79_Venerdi_21_50_05_26_9);
var lyr_79_Venerdi_21_50_05_26_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Venerdi_21_50_05_26_9, 
                style: style_79_Venerdi_21_50_05_26_9,
                popuplayertitle: '79_Venerdi_21_50_05_26',
                interactive: true,
    title: '79_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/79_Venerdi_21_50_05_26_9_0.png" /> 1<br />\
    <img src="styles/legend/79_Venerdi_21_50_05_26_9_1.png" /> 2<br />' });
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
var format_156_Venerdi_13_07_20_43_11 = new ol.format.GeoJSON();
var features_156_Venerdi_13_07_20_43_11 = format_156_Venerdi_13_07_20_43_11.readFeatures(json_156_Venerdi_13_07_20_43_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Venerdi_13_07_20_43_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Venerdi_13_07_20_43_11.addFeatures(features_156_Venerdi_13_07_20_43_11);
var lyr_156_Venerdi_13_07_20_43_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Venerdi_13_07_20_43_11, 
                style: style_156_Venerdi_13_07_20_43_11,
                popuplayertitle: '156_Venerdi_13_07_20_43',
                interactive: true,
    title: '156_Venerdi_13_07_20_43<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_0.png" /> 1<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_1.png" /> 2<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_2.png" /> 3<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_3.png" /> 4<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_4.png" /> 5<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_5.png" /> 6<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_6.png" /> 7<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_7.png" /> 8<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_8.png" /> 9<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_9.png" /> 10<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_10.png" /> 11<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_11.png" /> 12<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_12.png" /> 13<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_13.png" /> 14<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_14.png" /> 15<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_15.png" /> 16<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_16.png" /> 17<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_17.png" /> 18<br />\
    <img src="styles/legend/156_Venerdi_13_07_20_43_11_18.png" /> 19<br />' });
var format_158_Venerdi_05_30_13_06_12 = new ol.format.GeoJSON();
var features_158_Venerdi_05_30_13_06_12 = format_158_Venerdi_05_30_13_06_12.readFeatures(json_158_Venerdi_05_30_13_06_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Venerdi_05_30_13_06_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Venerdi_05_30_13_06_12.addFeatures(features_158_Venerdi_05_30_13_06_12);
var lyr_158_Venerdi_05_30_13_06_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Venerdi_05_30_13_06_12, 
                style: style_158_Venerdi_05_30_13_06_12,
                popuplayertitle: '158_Venerdi_05_30_13_06',
                interactive: true,
    title: '158_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_12_0.png" /> 1<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_12_1.png" /> 2<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_12_2.png" /> 3<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_12_3.png" /> 4<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_12_4.png" /> 5<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_12_5.png" /> 6<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_12_6.png" /> 7<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_12_7.png" /> 8<br />\
    <img src="styles/legend/158_Venerdi_05_30_13_06_12_8.png" /> 9<br />' });
var format_531_Venerdi_05_30_13_06_13 = new ol.format.GeoJSON();
var features_531_Venerdi_05_30_13_06_13 = format_531_Venerdi_05_30_13_06_13.readFeatures(json_531_Venerdi_05_30_13_06_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Venerdi_05_30_13_06_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Venerdi_05_30_13_06_13.addFeatures(features_531_Venerdi_05_30_13_06_13);
var lyr_531_Venerdi_05_30_13_06_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Venerdi_05_30_13_06_13, 
                style: style_531_Venerdi_05_30_13_06_13,
                popuplayertitle: '531_Venerdi_05_30_13_06',
                interactive: true,
    title: '531_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/531_Venerdi_05_30_13_06_13_0.png" /> 1<br />' });
var format_534_Venerdi_21_50_05_26_14 = new ol.format.GeoJSON();
var features_534_Venerdi_21_50_05_26_14 = format_534_Venerdi_21_50_05_26_14.readFeatures(json_534_Venerdi_21_50_05_26_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Venerdi_21_50_05_26_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Venerdi_21_50_05_26_14.addFeatures(features_534_Venerdi_21_50_05_26_14);
var lyr_534_Venerdi_21_50_05_26_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Venerdi_21_50_05_26_14, 
                style: style_534_Venerdi_21_50_05_26_14,
                popuplayertitle: '534_Venerdi_21_50_05_26',
                interactive: true,
    title: '534_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/534_Venerdi_21_50_05_26_14_0.png" /> 1<br />' });
var format_540_Venerdi_21_50_05_26_15 = new ol.format.GeoJSON();
var features_540_Venerdi_21_50_05_26_15 = format_540_Venerdi_21_50_05_26_15.readFeatures(json_540_Venerdi_21_50_05_26_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Venerdi_21_50_05_26_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Venerdi_21_50_05_26_15.addFeatures(features_540_Venerdi_21_50_05_26_15);
var lyr_540_Venerdi_21_50_05_26_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Venerdi_21_50_05_26_15, 
                style: style_540_Venerdi_21_50_05_26_15,
                popuplayertitle: '540_Venerdi_21_50_05_26',
                interactive: true,
    title: '540_Venerdi_21_50_05_26<br />\
    <img src="styles/legend/540_Venerdi_21_50_05_26_15_0.png" /> 1<br />' });
var format_541_Venerdi_05_30_13_06_16 = new ol.format.GeoJSON();
var features_541_Venerdi_05_30_13_06_16 = format_541_Venerdi_05_30_13_06_16.readFeatures(json_541_Venerdi_05_30_13_06_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Venerdi_05_30_13_06_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Venerdi_05_30_13_06_16.addFeatures(features_541_Venerdi_05_30_13_06_16);
var lyr_541_Venerdi_05_30_13_06_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Venerdi_05_30_13_06_16, 
                style: style_541_Venerdi_05_30_13_06_16,
                popuplayertitle: '541_Venerdi_05_30_13_06',
                interactive: true,
    title: '541_Venerdi_05_30_13_06<br />\
    <img src="styles/legend/541_Venerdi_05_30_13_06_16_0.png" /> 1<br />\
    <img src="styles/legend/541_Venerdi_05_30_13_06_16_1.png" /> 2<br />\
    <img src="styles/legend/541_Venerdi_05_30_13_06_16_2.png" /> 3<br />\
    <img src="styles/legend/541_Venerdi_05_30_13_06_16_3.png" /> 4<br />' });
var format_542_Venerdi_13_07_20_43_17 = new ol.format.GeoJSON();
var features_542_Venerdi_13_07_20_43_17 = format_542_Venerdi_13_07_20_43_17.readFeatures(json_542_Venerdi_13_07_20_43_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Venerdi_13_07_20_43_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Venerdi_13_07_20_43_17.addFeatures(features_542_Venerdi_13_07_20_43_17);
var lyr_542_Venerdi_13_07_20_43_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Venerdi_13_07_20_43_17, 
                style: style_542_Venerdi_13_07_20_43_17,
                popuplayertitle: '542_Venerdi_13_07_20_43',
                interactive: true,
    title: '542_Venerdi_13_07_20_43<br />\
    <img src="styles/legend/542_Venerdi_13_07_20_43_17_0.png" /> 1<br />\
    <img src="styles/legend/542_Venerdi_13_07_20_43_17_1.png" /> 2<br />' });
var format_543_Venerdi_19_00_02_36_18 = new ol.format.GeoJSON();
var features_543_Venerdi_19_00_02_36_18 = format_543_Venerdi_19_00_02_36_18.readFeatures(json_543_Venerdi_19_00_02_36_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Venerdi_19_00_02_36_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Venerdi_19_00_02_36_18.addFeatures(features_543_Venerdi_19_00_02_36_18);
var lyr_543_Venerdi_19_00_02_36_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Venerdi_19_00_02_36_18, 
                style: style_543_Venerdi_19_00_02_36_18,
                popuplayertitle: '543_Venerdi_19_00_02_36',
                interactive: true,
    title: '543_Venerdi_19_00_02_36<br />\
    <img src="styles/legend/543_Venerdi_19_00_02_36_18_0.png" /> 1<br />' });
var format_70_Giovedi_09_30_15_50_19 = new ol.format.GeoJSON();
var features_70_Giovedi_09_30_15_50_19 = format_70_Giovedi_09_30_15_50_19.readFeatures(json_70_Giovedi_09_30_15_50_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Giovedi_09_30_15_50_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Giovedi_09_30_15_50_19.addFeatures(features_70_Giovedi_09_30_15_50_19);
var lyr_70_Giovedi_09_30_15_50_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Giovedi_09_30_15_50_19, 
                style: style_70_Giovedi_09_30_15_50_19,
                popuplayertitle: '70_Giovedi_09_30_15_50',
                interactive: true,
    title: '70_Giovedi_09_30_15_50<br />\
    <img src="styles/legend/70_Giovedi_09_30_15_50_19_0.png" /> 1<br />' });
var format_71_Giovedi_05_30_13_06_20 = new ol.format.GeoJSON();
var features_71_Giovedi_05_30_13_06_20 = format_71_Giovedi_05_30_13_06_20.readFeatures(json_71_Giovedi_05_30_13_06_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Giovedi_05_30_13_06_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Giovedi_05_30_13_06_20.addFeatures(features_71_Giovedi_05_30_13_06_20);
var lyr_71_Giovedi_05_30_13_06_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Giovedi_05_30_13_06_20, 
                style: style_71_Giovedi_05_30_13_06_20,
                popuplayertitle: '71_Giovedi_05_30_13_06',
                interactive: true,
    title: '71_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/71_Giovedi_05_30_13_06_20_0.png" /> 1<br />\
    <img src="styles/legend/71_Giovedi_05_30_13_06_20_1.png" /> 2<br />\
    <img src="styles/legend/71_Giovedi_05_30_13_06_20_2.png" /> 3<br />' });
var format_72_Giovedi_13_07_20_43_21 = new ol.format.GeoJSON();
var features_72_Giovedi_13_07_20_43_21 = format_72_Giovedi_13_07_20_43_21.readFeatures(json_72_Giovedi_13_07_20_43_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Giovedi_13_07_20_43_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Giovedi_13_07_20_43_21.addFeatures(features_72_Giovedi_13_07_20_43_21);
var lyr_72_Giovedi_13_07_20_43_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Giovedi_13_07_20_43_21, 
                style: style_72_Giovedi_13_07_20_43_21,
                popuplayertitle: '72_Giovedi_13_07_20_43',
                interactive: true,
    title: '72_Giovedi_13_07_20_43<br />\
    <img src="styles/legend/72_Giovedi_13_07_20_43_21_0.png" /> 1<br />\
    <img src="styles/legend/72_Giovedi_13_07_20_43_21_1.png" /> 2<br />' });
var format_73_Giovedi_05_30_13_06_22 = new ol.format.GeoJSON();
var features_73_Giovedi_05_30_13_06_22 = format_73_Giovedi_05_30_13_06_22.readFeatures(json_73_Giovedi_05_30_13_06_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Giovedi_05_30_13_06_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Giovedi_05_30_13_06_22.addFeatures(features_73_Giovedi_05_30_13_06_22);
var lyr_73_Giovedi_05_30_13_06_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Giovedi_05_30_13_06_22, 
                style: style_73_Giovedi_05_30_13_06_22,
                popuplayertitle: '73_Giovedi_05_30_13_06',
                interactive: true,
    title: '73_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06_22_0.png" /> 1<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06_22_1.png" /> 2<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06_22_2.png" /> 3<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06_22_3.png" /> 4<br />\
    <img src="styles/legend/73_Giovedi_05_30_13_06_22_4.png" /> 5<br />' });
var format_75_Giovedi_13_07_20_43_23 = new ol.format.GeoJSON();
var features_75_Giovedi_13_07_20_43_23 = format_75_Giovedi_13_07_20_43_23.readFeatures(json_75_Giovedi_13_07_20_43_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Giovedi_13_07_20_43_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Giovedi_13_07_20_43_23.addFeatures(features_75_Giovedi_13_07_20_43_23);
var lyr_75_Giovedi_13_07_20_43_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Giovedi_13_07_20_43_23, 
                style: style_75_Giovedi_13_07_20_43_23,
                popuplayertitle: '75_Giovedi_13_07_20_43',
                interactive: true,
    title: '75_Giovedi_13_07_20_43<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43_23_0.png" /> 1<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43_23_1.png" /> 2<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43_23_2.png" /> 3<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43_23_3.png" /> 4<br />\
    <img src="styles/legend/75_Giovedi_13_07_20_43_23_4.png" /> 5<br />' });
var format_76_Giovedi_19_00_02_36_24 = new ol.format.GeoJSON();
var features_76_Giovedi_19_00_02_36_24 = format_76_Giovedi_19_00_02_36_24.readFeatures(json_76_Giovedi_19_00_02_36_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Giovedi_19_00_02_36_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Giovedi_19_00_02_36_24.addFeatures(features_76_Giovedi_19_00_02_36_24);
var lyr_76_Giovedi_19_00_02_36_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Giovedi_19_00_02_36_24, 
                style: style_76_Giovedi_19_00_02_36_24,
                popuplayertitle: '76_Giovedi_19_00_02_36',
                interactive: true,
    title: '76_Giovedi_19_00_02_36<br />\
    <img src="styles/legend/76_Giovedi_19_00_02_36_24_0.png" /> 1<br />' });
var format_77_Giovedi_21_50_05_26_25 = new ol.format.GeoJSON();
var features_77_Giovedi_21_50_05_26_25 = format_77_Giovedi_21_50_05_26_25.readFeatures(json_77_Giovedi_21_50_05_26_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Giovedi_21_50_05_26_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Giovedi_21_50_05_26_25.addFeatures(features_77_Giovedi_21_50_05_26_25);
var lyr_77_Giovedi_21_50_05_26_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Giovedi_21_50_05_26_25, 
                style: style_77_Giovedi_21_50_05_26_25,
                popuplayertitle: '77_Giovedi_21_50_05_26',
                interactive: true,
    title: '77_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_25_0.png" /> 1<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_25_1.png" /> 2<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_25_2.png" /> 3<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_25_3.png" /> 4<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_25_4.png" /> 5<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_25_5.png" /> 6<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_25_6.png" /> 7<br />\
    <img src="styles/legend/77_Giovedi_21_50_05_26_25_7.png" /> 8<br />' });
var format_79_Giovedi_21_50_05_26_26 = new ol.format.GeoJSON();
var features_79_Giovedi_21_50_05_26_26 = format_79_Giovedi_21_50_05_26_26.readFeatures(json_79_Giovedi_21_50_05_26_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Giovedi_21_50_05_26_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Giovedi_21_50_05_26_26.addFeatures(features_79_Giovedi_21_50_05_26_26);
var lyr_79_Giovedi_21_50_05_26_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Giovedi_21_50_05_26_26, 
                style: style_79_Giovedi_21_50_05_26_26,
                popuplayertitle: '79_Giovedi_21_50_05_26',
                interactive: true,
    title: '79_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/79_Giovedi_21_50_05_26_26_0.png" /> 1<br />\
    <img src="styles/legend/79_Giovedi_21_50_05_26_26_1.png" /> 2<br />' });
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
var format_156_Giovedi_13_07_20_43_28 = new ol.format.GeoJSON();
var features_156_Giovedi_13_07_20_43_28 = format_156_Giovedi_13_07_20_43_28.readFeatures(json_156_Giovedi_13_07_20_43_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Giovedi_13_07_20_43_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Giovedi_13_07_20_43_28.addFeatures(features_156_Giovedi_13_07_20_43_28);
var lyr_156_Giovedi_13_07_20_43_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Giovedi_13_07_20_43_28, 
                style: style_156_Giovedi_13_07_20_43_28,
                popuplayertitle: '156_Giovedi_13_07_20_43',
                interactive: true,
    title: '156_Giovedi_13_07_20_43<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_0.png" /> 1<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_1.png" /> 2<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_2.png" /> 3<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_3.png" /> 4<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_4.png" /> 5<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_5.png" /> 6<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_6.png" /> 7<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_7.png" /> 8<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_8.png" /> 9<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_9.png" /> 10<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_10.png" /> 11<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_11.png" /> 12<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_12.png" /> 13<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_13.png" /> 14<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_14.png" /> 15<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_15.png" /> 16<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_16.png" /> 17<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_17.png" /> 18<br />\
    <img src="styles/legend/156_Giovedi_13_07_20_43_28_18.png" /> 19<br />' });
var format_158_Giovedi_05_30_13_06_29 = new ol.format.GeoJSON();
var features_158_Giovedi_05_30_13_06_29 = format_158_Giovedi_05_30_13_06_29.readFeatures(json_158_Giovedi_05_30_13_06_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Giovedi_05_30_13_06_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Giovedi_05_30_13_06_29.addFeatures(features_158_Giovedi_05_30_13_06_29);
var lyr_158_Giovedi_05_30_13_06_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Giovedi_05_30_13_06_29, 
                style: style_158_Giovedi_05_30_13_06_29,
                popuplayertitle: '158_Giovedi_05_30_13_06',
                interactive: true,
    title: '158_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_29_0.png" /> 1<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_29_1.png" /> 2<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_29_2.png" /> 3<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_29_3.png" /> 4<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_29_4.png" /> 5<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_29_5.png" /> 6<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_29_6.png" /> 7<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_29_7.png" /> 8<br />\
    <img src="styles/legend/158_Giovedi_05_30_13_06_29_8.png" /> 9<br />' });
var format_531_Giovedi_05_30_13_06_30 = new ol.format.GeoJSON();
var features_531_Giovedi_05_30_13_06_30 = format_531_Giovedi_05_30_13_06_30.readFeatures(json_531_Giovedi_05_30_13_06_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Giovedi_05_30_13_06_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Giovedi_05_30_13_06_30.addFeatures(features_531_Giovedi_05_30_13_06_30);
var lyr_531_Giovedi_05_30_13_06_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Giovedi_05_30_13_06_30, 
                style: style_531_Giovedi_05_30_13_06_30,
                popuplayertitle: '531_Giovedi_05_30_13_06',
                interactive: true,
    title: '531_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/531_Giovedi_05_30_13_06_30_0.png" /> 1<br />' });
var format_534_Giovedi_21_50_05_26_31 = new ol.format.GeoJSON();
var features_534_Giovedi_21_50_05_26_31 = format_534_Giovedi_21_50_05_26_31.readFeatures(json_534_Giovedi_21_50_05_26_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Giovedi_21_50_05_26_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Giovedi_21_50_05_26_31.addFeatures(features_534_Giovedi_21_50_05_26_31);
var lyr_534_Giovedi_21_50_05_26_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Giovedi_21_50_05_26_31, 
                style: style_534_Giovedi_21_50_05_26_31,
                popuplayertitle: '534_Giovedi_21_50_05_26',
                interactive: true,
    title: '534_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/534_Giovedi_21_50_05_26_31_0.png" /> 1<br />' });
var format_540_Giovedi_21_50_05_26_32 = new ol.format.GeoJSON();
var features_540_Giovedi_21_50_05_26_32 = format_540_Giovedi_21_50_05_26_32.readFeatures(json_540_Giovedi_21_50_05_26_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Giovedi_21_50_05_26_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Giovedi_21_50_05_26_32.addFeatures(features_540_Giovedi_21_50_05_26_32);
var lyr_540_Giovedi_21_50_05_26_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Giovedi_21_50_05_26_32, 
                style: style_540_Giovedi_21_50_05_26_32,
                popuplayertitle: '540_Giovedi_21_50_05_26',
                interactive: true,
    title: '540_Giovedi_21_50_05_26<br />\
    <img src="styles/legend/540_Giovedi_21_50_05_26_32_0.png" /> 1<br />' });
var format_541_Giovedi_05_30_13_06_33 = new ol.format.GeoJSON();
var features_541_Giovedi_05_30_13_06_33 = format_541_Giovedi_05_30_13_06_33.readFeatures(json_541_Giovedi_05_30_13_06_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Giovedi_05_30_13_06_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Giovedi_05_30_13_06_33.addFeatures(features_541_Giovedi_05_30_13_06_33);
var lyr_541_Giovedi_05_30_13_06_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Giovedi_05_30_13_06_33, 
                style: style_541_Giovedi_05_30_13_06_33,
                popuplayertitle: '541_Giovedi_05_30_13_06',
                interactive: true,
    title: '541_Giovedi_05_30_13_06<br />\
    <img src="styles/legend/541_Giovedi_05_30_13_06_33_0.png" /> 1<br />\
    <img src="styles/legend/541_Giovedi_05_30_13_06_33_1.png" /> 2<br />\
    <img src="styles/legend/541_Giovedi_05_30_13_06_33_2.png" /> 3<br />\
    <img src="styles/legend/541_Giovedi_05_30_13_06_33_3.png" /> 4<br />' });
var format_542_Giovedi_13_07_20_43_34 = new ol.format.GeoJSON();
var features_542_Giovedi_13_07_20_43_34 = format_542_Giovedi_13_07_20_43_34.readFeatures(json_542_Giovedi_13_07_20_43_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Giovedi_13_07_20_43_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Giovedi_13_07_20_43_34.addFeatures(features_542_Giovedi_13_07_20_43_34);
var lyr_542_Giovedi_13_07_20_43_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Giovedi_13_07_20_43_34, 
                style: style_542_Giovedi_13_07_20_43_34,
                popuplayertitle: '542_Giovedi_13_07_20_43',
                interactive: true,
    title: '542_Giovedi_13_07_20_43<br />\
    <img src="styles/legend/542_Giovedi_13_07_20_43_34_0.png" /> 1<br />\
    <img src="styles/legend/542_Giovedi_13_07_20_43_34_1.png" /> 2<br />' });
var format_543_Giovedi_19_00_02_36_35 = new ol.format.GeoJSON();
var features_543_Giovedi_19_00_02_36_35 = format_543_Giovedi_19_00_02_36_35.readFeatures(json_543_Giovedi_19_00_02_36_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Giovedi_19_00_02_36_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Giovedi_19_00_02_36_35.addFeatures(features_543_Giovedi_19_00_02_36_35);
var lyr_543_Giovedi_19_00_02_36_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Giovedi_19_00_02_36_35, 
                style: style_543_Giovedi_19_00_02_36_35,
                popuplayertitle: '543_Giovedi_19_00_02_36',
                interactive: true,
    title: '543_Giovedi_19_00_02_36<br />\
    <img src="styles/legend/543_Giovedi_19_00_02_36_35_0.png" /> 1<br />' });
var format_70_Mercoledi_09_30_15_50_36 = new ol.format.GeoJSON();
var features_70_Mercoledi_09_30_15_50_36 = format_70_Mercoledi_09_30_15_50_36.readFeatures(json_70_Mercoledi_09_30_15_50_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Mercoledi_09_30_15_50_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Mercoledi_09_30_15_50_36.addFeatures(features_70_Mercoledi_09_30_15_50_36);
var lyr_70_Mercoledi_09_30_15_50_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Mercoledi_09_30_15_50_36, 
                style: style_70_Mercoledi_09_30_15_50_36,
                popuplayertitle: '70_Mercoledi_09_30_15_50',
                interactive: true,
    title: '70_Mercoledi_09_30_15_50<br />\
    <img src="styles/legend/70_Mercoledi_09_30_15_50_36_0.png" /> 1<br />' });
var format_71_Mercoledi_05_30_13_06_37 = new ol.format.GeoJSON();
var features_71_Mercoledi_05_30_13_06_37 = format_71_Mercoledi_05_30_13_06_37.readFeatures(json_71_Mercoledi_05_30_13_06_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Mercoledi_05_30_13_06_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Mercoledi_05_30_13_06_37.addFeatures(features_71_Mercoledi_05_30_13_06_37);
var lyr_71_Mercoledi_05_30_13_06_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Mercoledi_05_30_13_06_37, 
                style: style_71_Mercoledi_05_30_13_06_37,
                popuplayertitle: '71_Mercoledi_05_30_13_06',
                interactive: true,
    title: '71_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/71_Mercoledi_05_30_13_06_37_0.png" /> 1<br />\
    <img src="styles/legend/71_Mercoledi_05_30_13_06_37_1.png" /> 2<br />\
    <img src="styles/legend/71_Mercoledi_05_30_13_06_37_2.png" /> 3<br />' });
var format_72_Mercoledi_13_07_20_43_38 = new ol.format.GeoJSON();
var features_72_Mercoledi_13_07_20_43_38 = format_72_Mercoledi_13_07_20_43_38.readFeatures(json_72_Mercoledi_13_07_20_43_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Mercoledi_13_07_20_43_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Mercoledi_13_07_20_43_38.addFeatures(features_72_Mercoledi_13_07_20_43_38);
var lyr_72_Mercoledi_13_07_20_43_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Mercoledi_13_07_20_43_38, 
                style: style_72_Mercoledi_13_07_20_43_38,
                popuplayertitle: '72_Mercoledi_13_07_20_43',
                interactive: true,
    title: '72_Mercoledi_13_07_20_43<br />\
    <img src="styles/legend/72_Mercoledi_13_07_20_43_38_0.png" /> 1<br />\
    <img src="styles/legend/72_Mercoledi_13_07_20_43_38_1.png" /> 2<br />' });
var format_73_Mercoledi_05_30_13_06_39 = new ol.format.GeoJSON();
var features_73_Mercoledi_05_30_13_06_39 = format_73_Mercoledi_05_30_13_06_39.readFeatures(json_73_Mercoledi_05_30_13_06_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Mercoledi_05_30_13_06_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Mercoledi_05_30_13_06_39.addFeatures(features_73_Mercoledi_05_30_13_06_39);
var lyr_73_Mercoledi_05_30_13_06_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Mercoledi_05_30_13_06_39, 
                style: style_73_Mercoledi_05_30_13_06_39,
                popuplayertitle: '73_Mercoledi_05_30_13_06',
                interactive: true,
    title: '73_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06_39_0.png" /> 1<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06_39_1.png" /> 2<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06_39_2.png" /> 3<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06_39_3.png" /> 4<br />\
    <img src="styles/legend/73_Mercoledi_05_30_13_06_39_4.png" /> 5<br />' });
var format_75_Mercoledi_13_07_20_43_40 = new ol.format.GeoJSON();
var features_75_Mercoledi_13_07_20_43_40 = format_75_Mercoledi_13_07_20_43_40.readFeatures(json_75_Mercoledi_13_07_20_43_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Mercoledi_13_07_20_43_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Mercoledi_13_07_20_43_40.addFeatures(features_75_Mercoledi_13_07_20_43_40);
var lyr_75_Mercoledi_13_07_20_43_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Mercoledi_13_07_20_43_40, 
                style: style_75_Mercoledi_13_07_20_43_40,
                popuplayertitle: '75_Mercoledi_13_07_20_43',
                interactive: true,
    title: '75_Mercoledi_13_07_20_43<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43_40_0.png" /> 1<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43_40_1.png" /> 2<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43_40_2.png" /> 3<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43_40_3.png" /> 4<br />\
    <img src="styles/legend/75_Mercoledi_13_07_20_43_40_4.png" /> 5<br />' });
var format_76_Mercoledi_19_00_02_36_41 = new ol.format.GeoJSON();
var features_76_Mercoledi_19_00_02_36_41 = format_76_Mercoledi_19_00_02_36_41.readFeatures(json_76_Mercoledi_19_00_02_36_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Mercoledi_19_00_02_36_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Mercoledi_19_00_02_36_41.addFeatures(features_76_Mercoledi_19_00_02_36_41);
var lyr_76_Mercoledi_19_00_02_36_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Mercoledi_19_00_02_36_41, 
                style: style_76_Mercoledi_19_00_02_36_41,
                popuplayertitle: '76_Mercoledi_19_00_02_36',
                interactive: true,
    title: '76_Mercoledi_19_00_02_36<br />\
    <img src="styles/legend/76_Mercoledi_19_00_02_36_41_0.png" /> 1<br />' });
var format_77_Mercoledi_21_50_05_26_42 = new ol.format.GeoJSON();
var features_77_Mercoledi_21_50_05_26_42 = format_77_Mercoledi_21_50_05_26_42.readFeatures(json_77_Mercoledi_21_50_05_26_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Mercoledi_21_50_05_26_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Mercoledi_21_50_05_26_42.addFeatures(features_77_Mercoledi_21_50_05_26_42);
var lyr_77_Mercoledi_21_50_05_26_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Mercoledi_21_50_05_26_42, 
                style: style_77_Mercoledi_21_50_05_26_42,
                popuplayertitle: '77_Mercoledi_21_50_05_26',
                interactive: true,
    title: '77_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_42_0.png" /> 1<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_42_1.png" /> 2<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_42_2.png" /> 3<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_42_3.png" /> 4<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_42_4.png" /> 5<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_42_5.png" /> 6<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_42_6.png" /> 7<br />\
    <img src="styles/legend/77_Mercoledi_21_50_05_26_42_7.png" /> 8<br />' });
var format_79_Mercoledi_21_50_05_26_43 = new ol.format.GeoJSON();
var features_79_Mercoledi_21_50_05_26_43 = format_79_Mercoledi_21_50_05_26_43.readFeatures(json_79_Mercoledi_21_50_05_26_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Mercoledi_21_50_05_26_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Mercoledi_21_50_05_26_43.addFeatures(features_79_Mercoledi_21_50_05_26_43);
var lyr_79_Mercoledi_21_50_05_26_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Mercoledi_21_50_05_26_43, 
                style: style_79_Mercoledi_21_50_05_26_43,
                popuplayertitle: '79_Mercoledi_21_50_05_26',
                interactive: true,
    title: '79_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/79_Mercoledi_21_50_05_26_43_0.png" /> 1<br />\
    <img src="styles/legend/79_Mercoledi_21_50_05_26_43_1.png" /> 2<br />' });
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
var format_156_Mercoledi_13_07_20_43_45 = new ol.format.GeoJSON();
var features_156_Mercoledi_13_07_20_43_45 = format_156_Mercoledi_13_07_20_43_45.readFeatures(json_156_Mercoledi_13_07_20_43_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Mercoledi_13_07_20_43_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Mercoledi_13_07_20_43_45.addFeatures(features_156_Mercoledi_13_07_20_43_45);
var lyr_156_Mercoledi_13_07_20_43_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Mercoledi_13_07_20_43_45, 
                style: style_156_Mercoledi_13_07_20_43_45,
                popuplayertitle: '156_Mercoledi_13_07_20_43',
                interactive: true,
    title: '156_Mercoledi_13_07_20_43<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_0.png" /> 1<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_1.png" /> 2<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_2.png" /> 3<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_3.png" /> 4<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_4.png" /> 5<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_5.png" /> 6<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_6.png" /> 7<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_7.png" /> 8<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_8.png" /> 9<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_9.png" /> 10<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_10.png" /> 11<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_11.png" /> 12<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_12.png" /> 13<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_13.png" /> 14<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_14.png" /> 15<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_15.png" /> 16<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_16.png" /> 17<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_17.png" /> 18<br />\
    <img src="styles/legend/156_Mercoledi_13_07_20_43_45_18.png" /> 19<br />' });
var format_158_Mercoledi_05_30_13_06_46 = new ol.format.GeoJSON();
var features_158_Mercoledi_05_30_13_06_46 = format_158_Mercoledi_05_30_13_06_46.readFeatures(json_158_Mercoledi_05_30_13_06_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Mercoledi_05_30_13_06_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Mercoledi_05_30_13_06_46.addFeatures(features_158_Mercoledi_05_30_13_06_46);
var lyr_158_Mercoledi_05_30_13_06_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Mercoledi_05_30_13_06_46, 
                style: style_158_Mercoledi_05_30_13_06_46,
                popuplayertitle: '158_Mercoledi_05_30_13_06',
                interactive: true,
    title: '158_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_46_0.png" /> 1<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_46_1.png" /> 2<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_46_2.png" /> 3<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_46_3.png" /> 4<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_46_4.png" /> 5<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_46_5.png" /> 6<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_46_6.png" /> 7<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_46_7.png" /> 8<br />\
    <img src="styles/legend/158_Mercoledi_05_30_13_06_46_8.png" /> 9<br />' });
var format_531_Mercoledi_05_30_13_06_47 = new ol.format.GeoJSON();
var features_531_Mercoledi_05_30_13_06_47 = format_531_Mercoledi_05_30_13_06_47.readFeatures(json_531_Mercoledi_05_30_13_06_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Mercoledi_05_30_13_06_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Mercoledi_05_30_13_06_47.addFeatures(features_531_Mercoledi_05_30_13_06_47);
var lyr_531_Mercoledi_05_30_13_06_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Mercoledi_05_30_13_06_47, 
                style: style_531_Mercoledi_05_30_13_06_47,
                popuplayertitle: '531_Mercoledi_05_30_13_06',
                interactive: true,
    title: '531_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/531_Mercoledi_05_30_13_06_47_0.png" /> 1<br />' });
var format_534_Mercoledi_21_50_05_26_48 = new ol.format.GeoJSON();
var features_534_Mercoledi_21_50_05_26_48 = format_534_Mercoledi_21_50_05_26_48.readFeatures(json_534_Mercoledi_21_50_05_26_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Mercoledi_21_50_05_26_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Mercoledi_21_50_05_26_48.addFeatures(features_534_Mercoledi_21_50_05_26_48);
var lyr_534_Mercoledi_21_50_05_26_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Mercoledi_21_50_05_26_48, 
                style: style_534_Mercoledi_21_50_05_26_48,
                popuplayertitle: '534_Mercoledi_21_50_05_26',
                interactive: true,
    title: '534_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/534_Mercoledi_21_50_05_26_48_0.png" /> 1<br />' });
var format_540_Mercoledi_21_50_05_26_49 = new ol.format.GeoJSON();
var features_540_Mercoledi_21_50_05_26_49 = format_540_Mercoledi_21_50_05_26_49.readFeatures(json_540_Mercoledi_21_50_05_26_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Mercoledi_21_50_05_26_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Mercoledi_21_50_05_26_49.addFeatures(features_540_Mercoledi_21_50_05_26_49);
var lyr_540_Mercoledi_21_50_05_26_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Mercoledi_21_50_05_26_49, 
                style: style_540_Mercoledi_21_50_05_26_49,
                popuplayertitle: '540_Mercoledi_21_50_05_26',
                interactive: true,
    title: '540_Mercoledi_21_50_05_26<br />\
    <img src="styles/legend/540_Mercoledi_21_50_05_26_49_0.png" /> 1<br />' });
var format_541_Mercoledi_05_30_13_06_50 = new ol.format.GeoJSON();
var features_541_Mercoledi_05_30_13_06_50 = format_541_Mercoledi_05_30_13_06_50.readFeatures(json_541_Mercoledi_05_30_13_06_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Mercoledi_05_30_13_06_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Mercoledi_05_30_13_06_50.addFeatures(features_541_Mercoledi_05_30_13_06_50);
var lyr_541_Mercoledi_05_30_13_06_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Mercoledi_05_30_13_06_50, 
                style: style_541_Mercoledi_05_30_13_06_50,
                popuplayertitle: '541_Mercoledi_05_30_13_06',
                interactive: true,
    title: '541_Mercoledi_05_30_13_06<br />\
    <img src="styles/legend/541_Mercoledi_05_30_13_06_50_0.png" /> 1<br />\
    <img src="styles/legend/541_Mercoledi_05_30_13_06_50_1.png" /> 2<br />\
    <img src="styles/legend/541_Mercoledi_05_30_13_06_50_2.png" /> 3<br />\
    <img src="styles/legend/541_Mercoledi_05_30_13_06_50_3.png" /> 4<br />' });
var format_542_Mercoledi_13_07_20_43_51 = new ol.format.GeoJSON();
var features_542_Mercoledi_13_07_20_43_51 = format_542_Mercoledi_13_07_20_43_51.readFeatures(json_542_Mercoledi_13_07_20_43_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Mercoledi_13_07_20_43_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Mercoledi_13_07_20_43_51.addFeatures(features_542_Mercoledi_13_07_20_43_51);
var lyr_542_Mercoledi_13_07_20_43_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Mercoledi_13_07_20_43_51, 
                style: style_542_Mercoledi_13_07_20_43_51,
                popuplayertitle: '542_Mercoledi_13_07_20_43',
                interactive: true,
    title: '542_Mercoledi_13_07_20_43<br />\
    <img src="styles/legend/542_Mercoledi_13_07_20_43_51_0.png" /> 1<br />\
    <img src="styles/legend/542_Mercoledi_13_07_20_43_51_1.png" /> 2<br />' });
var format_543_Mercoledi_19_00_02_36_52 = new ol.format.GeoJSON();
var features_543_Mercoledi_19_00_02_36_52 = format_543_Mercoledi_19_00_02_36_52.readFeatures(json_543_Mercoledi_19_00_02_36_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Mercoledi_19_00_02_36_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Mercoledi_19_00_02_36_52.addFeatures(features_543_Mercoledi_19_00_02_36_52);
var lyr_543_Mercoledi_19_00_02_36_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Mercoledi_19_00_02_36_52, 
                style: style_543_Mercoledi_19_00_02_36_52,
                popuplayertitle: '543_Mercoledi_19_00_02_36',
                interactive: true,
    title: '543_Mercoledi_19_00_02_36<br />\
    <img src="styles/legend/543_Mercoledi_19_00_02_36_52_0.png" /> 1<br />' });
var format_70_Martedi_09_30_15_50_53 = new ol.format.GeoJSON();
var features_70_Martedi_09_30_15_50_53 = format_70_Martedi_09_30_15_50_53.readFeatures(json_70_Martedi_09_30_15_50_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Martedi_09_30_15_50_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Martedi_09_30_15_50_53.addFeatures(features_70_Martedi_09_30_15_50_53);
var lyr_70_Martedi_09_30_15_50_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Martedi_09_30_15_50_53, 
                style: style_70_Martedi_09_30_15_50_53,
                popuplayertitle: '70_Martedi_09_30_15_50',
                interactive: true,
    title: '70_Martedi_09_30_15_50<br />\
    <img src="styles/legend/70_Martedi_09_30_15_50_53_0.png" /> 1<br />' });
var format_71_Martedi_05_30_13_06_54 = new ol.format.GeoJSON();
var features_71_Martedi_05_30_13_06_54 = format_71_Martedi_05_30_13_06_54.readFeatures(json_71_Martedi_05_30_13_06_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Martedi_05_30_13_06_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Martedi_05_30_13_06_54.addFeatures(features_71_Martedi_05_30_13_06_54);
var lyr_71_Martedi_05_30_13_06_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Martedi_05_30_13_06_54, 
                style: style_71_Martedi_05_30_13_06_54,
                popuplayertitle: '71_Martedi_05_30_13_06',
                interactive: true,
    title: '71_Martedi_05_30_13_06<br />\
    <img src="styles/legend/71_Martedi_05_30_13_06_54_0.png" /> 1<br />\
    <img src="styles/legend/71_Martedi_05_30_13_06_54_1.png" /> 2<br />\
    <img src="styles/legend/71_Martedi_05_30_13_06_54_2.png" /> 3<br />' });
var format_72_Martedi_13_07_20_43_55 = new ol.format.GeoJSON();
var features_72_Martedi_13_07_20_43_55 = format_72_Martedi_13_07_20_43_55.readFeatures(json_72_Martedi_13_07_20_43_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Martedi_13_07_20_43_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Martedi_13_07_20_43_55.addFeatures(features_72_Martedi_13_07_20_43_55);
var lyr_72_Martedi_13_07_20_43_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Martedi_13_07_20_43_55, 
                style: style_72_Martedi_13_07_20_43_55,
                popuplayertitle: '72_Martedi_13_07_20_43',
                interactive: true,
    title: '72_Martedi_13_07_20_43<br />\
    <img src="styles/legend/72_Martedi_13_07_20_43_55_0.png" /> 1<br />\
    <img src="styles/legend/72_Martedi_13_07_20_43_55_1.png" /> 2<br />' });
var format_73_Martedi_05_30_13_06_56 = new ol.format.GeoJSON();
var features_73_Martedi_05_30_13_06_56 = format_73_Martedi_05_30_13_06_56.readFeatures(json_73_Martedi_05_30_13_06_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Martedi_05_30_13_06_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Martedi_05_30_13_06_56.addFeatures(features_73_Martedi_05_30_13_06_56);
var lyr_73_Martedi_05_30_13_06_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Martedi_05_30_13_06_56, 
                style: style_73_Martedi_05_30_13_06_56,
                popuplayertitle: '73_Martedi_05_30_13_06',
                interactive: true,
    title: '73_Martedi_05_30_13_06<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06_56_0.png" /> 1<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06_56_1.png" /> 2<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06_56_2.png" /> 3<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06_56_3.png" /> 4<br />\
    <img src="styles/legend/73_Martedi_05_30_13_06_56_4.png" /> 5<br />' });
var format_75_Martedi_13_07_20_43_57 = new ol.format.GeoJSON();
var features_75_Martedi_13_07_20_43_57 = format_75_Martedi_13_07_20_43_57.readFeatures(json_75_Martedi_13_07_20_43_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Martedi_13_07_20_43_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Martedi_13_07_20_43_57.addFeatures(features_75_Martedi_13_07_20_43_57);
var lyr_75_Martedi_13_07_20_43_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Martedi_13_07_20_43_57, 
                style: style_75_Martedi_13_07_20_43_57,
                popuplayertitle: '75_Martedi_13_07_20_43',
                interactive: true,
    title: '75_Martedi_13_07_20_43<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43_57_0.png" /> 1<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43_57_1.png" /> 2<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43_57_2.png" /> 3<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43_57_3.png" /> 4<br />\
    <img src="styles/legend/75_Martedi_13_07_20_43_57_4.png" /> 5<br />' });
var format_76_Martedi_19_00_02_36_58 = new ol.format.GeoJSON();
var features_76_Martedi_19_00_02_36_58 = format_76_Martedi_19_00_02_36_58.readFeatures(json_76_Martedi_19_00_02_36_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Martedi_19_00_02_36_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Martedi_19_00_02_36_58.addFeatures(features_76_Martedi_19_00_02_36_58);
var lyr_76_Martedi_19_00_02_36_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Martedi_19_00_02_36_58, 
                style: style_76_Martedi_19_00_02_36_58,
                popuplayertitle: '76_Martedi_19_00_02_36',
                interactive: true,
    title: '76_Martedi_19_00_02_36<br />\
    <img src="styles/legend/76_Martedi_19_00_02_36_58_0.png" /> 1<br />' });
var format_77_Martedi_21_50_05_26_59 = new ol.format.GeoJSON();
var features_77_Martedi_21_50_05_26_59 = format_77_Martedi_21_50_05_26_59.readFeatures(json_77_Martedi_21_50_05_26_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Martedi_21_50_05_26_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Martedi_21_50_05_26_59.addFeatures(features_77_Martedi_21_50_05_26_59);
var lyr_77_Martedi_21_50_05_26_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Martedi_21_50_05_26_59, 
                style: style_77_Martedi_21_50_05_26_59,
                popuplayertitle: '77_Martedi_21_50_05_26',
                interactive: true,
    title: '77_Martedi_21_50_05_26<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_59_0.png" /> 1<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_59_1.png" /> 2<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_59_2.png" /> 3<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_59_3.png" /> 4<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_59_4.png" /> 5<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_59_5.png" /> 6<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_59_6.png" /> 7<br />\
    <img src="styles/legend/77_Martedi_21_50_05_26_59_7.png" /> 8<br />' });
var format_79_Martedi_21_50_05_26_60 = new ol.format.GeoJSON();
var features_79_Martedi_21_50_05_26_60 = format_79_Martedi_21_50_05_26_60.readFeatures(json_79_Martedi_21_50_05_26_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Martedi_21_50_05_26_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Martedi_21_50_05_26_60.addFeatures(features_79_Martedi_21_50_05_26_60);
var lyr_79_Martedi_21_50_05_26_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Martedi_21_50_05_26_60, 
                style: style_79_Martedi_21_50_05_26_60,
                popuplayertitle: '79_Martedi_21_50_05_26',
                interactive: true,
    title: '79_Martedi_21_50_05_26<br />\
    <img src="styles/legend/79_Martedi_21_50_05_26_60_0.png" /> 1<br />\
    <img src="styles/legend/79_Martedi_21_50_05_26_60_1.png" /> 2<br />' });
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
var format_156_Martedi_13_07_20_43_62 = new ol.format.GeoJSON();
var features_156_Martedi_13_07_20_43_62 = format_156_Martedi_13_07_20_43_62.readFeatures(json_156_Martedi_13_07_20_43_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Martedi_13_07_20_43_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Martedi_13_07_20_43_62.addFeatures(features_156_Martedi_13_07_20_43_62);
var lyr_156_Martedi_13_07_20_43_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Martedi_13_07_20_43_62, 
                style: style_156_Martedi_13_07_20_43_62,
                popuplayertitle: '156_Martedi_13_07_20_43',
                interactive: true,
    title: '156_Martedi_13_07_20_43<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_0.png" /> 1<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_1.png" /> 2<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_2.png" /> 3<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_3.png" /> 4<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_4.png" /> 5<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_5.png" /> 6<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_6.png" /> 7<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_7.png" /> 8<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_8.png" /> 9<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_9.png" /> 10<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_10.png" /> 11<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_11.png" /> 12<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_12.png" /> 13<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_13.png" /> 14<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_14.png" /> 15<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_15.png" /> 16<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_16.png" /> 17<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_17.png" /> 18<br />\
    <img src="styles/legend/156_Martedi_13_07_20_43_62_18.png" /> 19<br />' });
var format_158_Martedi_05_30_13_06_63 = new ol.format.GeoJSON();
var features_158_Martedi_05_30_13_06_63 = format_158_Martedi_05_30_13_06_63.readFeatures(json_158_Martedi_05_30_13_06_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Martedi_05_30_13_06_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Martedi_05_30_13_06_63.addFeatures(features_158_Martedi_05_30_13_06_63);
var lyr_158_Martedi_05_30_13_06_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Martedi_05_30_13_06_63, 
                style: style_158_Martedi_05_30_13_06_63,
                popuplayertitle: '158_Martedi_05_30_13_06',
                interactive: true,
    title: '158_Martedi_05_30_13_06<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_63_0.png" /> 1<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_63_1.png" /> 2<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_63_2.png" /> 3<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_63_3.png" /> 4<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_63_4.png" /> 5<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_63_5.png" /> 6<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_63_6.png" /> 7<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_63_7.png" /> 8<br />\
    <img src="styles/legend/158_Martedi_05_30_13_06_63_8.png" /> 9<br />' });
var format_531_Martedi_05_30_13_06_64 = new ol.format.GeoJSON();
var features_531_Martedi_05_30_13_06_64 = format_531_Martedi_05_30_13_06_64.readFeatures(json_531_Martedi_05_30_13_06_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Martedi_05_30_13_06_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Martedi_05_30_13_06_64.addFeatures(features_531_Martedi_05_30_13_06_64);
var lyr_531_Martedi_05_30_13_06_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Martedi_05_30_13_06_64, 
                style: style_531_Martedi_05_30_13_06_64,
                popuplayertitle: '531_Martedi_05_30_13_06',
                interactive: true,
    title: '531_Martedi_05_30_13_06<br />\
    <img src="styles/legend/531_Martedi_05_30_13_06_64_0.png" /> 1<br />' });
var format_534_Martedi_21_50_05_26_65 = new ol.format.GeoJSON();
var features_534_Martedi_21_50_05_26_65 = format_534_Martedi_21_50_05_26_65.readFeatures(json_534_Martedi_21_50_05_26_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Martedi_21_50_05_26_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Martedi_21_50_05_26_65.addFeatures(features_534_Martedi_21_50_05_26_65);
var lyr_534_Martedi_21_50_05_26_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Martedi_21_50_05_26_65, 
                style: style_534_Martedi_21_50_05_26_65,
                popuplayertitle: '534_Martedi_21_50_05_26',
                interactive: true,
    title: '534_Martedi_21_50_05_26<br />\
    <img src="styles/legend/534_Martedi_21_50_05_26_65_0.png" /> 1<br />' });
var format_540_Martedi_21_50_05_26_66 = new ol.format.GeoJSON();
var features_540_Martedi_21_50_05_26_66 = format_540_Martedi_21_50_05_26_66.readFeatures(json_540_Martedi_21_50_05_26_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Martedi_21_50_05_26_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Martedi_21_50_05_26_66.addFeatures(features_540_Martedi_21_50_05_26_66);
var lyr_540_Martedi_21_50_05_26_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Martedi_21_50_05_26_66, 
                style: style_540_Martedi_21_50_05_26_66,
                popuplayertitle: '540_Martedi_21_50_05_26',
                interactive: true,
    title: '540_Martedi_21_50_05_26<br />\
    <img src="styles/legend/540_Martedi_21_50_05_26_66_0.png" /> 1<br />' });
var format_541_Martedi_05_30_13_06_67 = new ol.format.GeoJSON();
var features_541_Martedi_05_30_13_06_67 = format_541_Martedi_05_30_13_06_67.readFeatures(json_541_Martedi_05_30_13_06_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Martedi_05_30_13_06_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Martedi_05_30_13_06_67.addFeatures(features_541_Martedi_05_30_13_06_67);
var lyr_541_Martedi_05_30_13_06_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Martedi_05_30_13_06_67, 
                style: style_541_Martedi_05_30_13_06_67,
                popuplayertitle: '541_Martedi_05_30_13_06',
                interactive: true,
    title: '541_Martedi_05_30_13_06<br />\
    <img src="styles/legend/541_Martedi_05_30_13_06_67_0.png" /> 1<br />\
    <img src="styles/legend/541_Martedi_05_30_13_06_67_1.png" /> 2<br />\
    <img src="styles/legend/541_Martedi_05_30_13_06_67_2.png" /> 3<br />\
    <img src="styles/legend/541_Martedi_05_30_13_06_67_3.png" /> 4<br />' });
var format_542_Martedi_13_07_20_43_68 = new ol.format.GeoJSON();
var features_542_Martedi_13_07_20_43_68 = format_542_Martedi_13_07_20_43_68.readFeatures(json_542_Martedi_13_07_20_43_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Martedi_13_07_20_43_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Martedi_13_07_20_43_68.addFeatures(features_542_Martedi_13_07_20_43_68);
var lyr_542_Martedi_13_07_20_43_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Martedi_13_07_20_43_68, 
                style: style_542_Martedi_13_07_20_43_68,
                popuplayertitle: '542_Martedi_13_07_20_43',
                interactive: true,
    title: '542_Martedi_13_07_20_43<br />\
    <img src="styles/legend/542_Martedi_13_07_20_43_68_0.png" /> 1<br />\
    <img src="styles/legend/542_Martedi_13_07_20_43_68_1.png" /> 2<br />' });
var format_543_Martedi_19_00_02_36_69 = new ol.format.GeoJSON();
var features_543_Martedi_19_00_02_36_69 = format_543_Martedi_19_00_02_36_69.readFeatures(json_543_Martedi_19_00_02_36_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Martedi_19_00_02_36_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Martedi_19_00_02_36_69.addFeatures(features_543_Martedi_19_00_02_36_69);
var lyr_543_Martedi_19_00_02_36_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Martedi_19_00_02_36_69, 
                style: style_543_Martedi_19_00_02_36_69,
                popuplayertitle: '543_Martedi_19_00_02_36',
                interactive: true,
    title: '543_Martedi_19_00_02_36<br />\
    <img src="styles/legend/543_Martedi_19_00_02_36_69_0.png" /> 1<br />' });
var format_70_Lunedi_09_30_15_50_70 = new ol.format.GeoJSON();
var features_70_Lunedi_09_30_15_50_70 = format_70_Lunedi_09_30_15_50_70.readFeatures(json_70_Lunedi_09_30_15_50_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_70_Lunedi_09_30_15_50_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_70_Lunedi_09_30_15_50_70.addFeatures(features_70_Lunedi_09_30_15_50_70);
var lyr_70_Lunedi_09_30_15_50_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_70_Lunedi_09_30_15_50_70, 
                style: style_70_Lunedi_09_30_15_50_70,
                popuplayertitle: '70_Lunedi_09_30_15_50',
                interactive: true,
    title: '70_Lunedi_09_30_15_50<br />\
    <img src="styles/legend/70_Lunedi_09_30_15_50_70_0.png" /> 1<br />' });
var format_71_Lunedi_05_30_13_06_71 = new ol.format.GeoJSON();
var features_71_Lunedi_05_30_13_06_71 = format_71_Lunedi_05_30_13_06_71.readFeatures(json_71_Lunedi_05_30_13_06_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_71_Lunedi_05_30_13_06_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_71_Lunedi_05_30_13_06_71.addFeatures(features_71_Lunedi_05_30_13_06_71);
var lyr_71_Lunedi_05_30_13_06_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_71_Lunedi_05_30_13_06_71, 
                style: style_71_Lunedi_05_30_13_06_71,
                popuplayertitle: '71_Lunedi_05_30_13_06',
                interactive: true,
    title: '71_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/71_Lunedi_05_30_13_06_71_0.png" /> 1<br />\
    <img src="styles/legend/71_Lunedi_05_30_13_06_71_1.png" /> 2<br />\
    <img src="styles/legend/71_Lunedi_05_30_13_06_71_2.png" /> 3<br />' });
var format_72_Lunedi_13_07_20_43_72 = new ol.format.GeoJSON();
var features_72_Lunedi_13_07_20_43_72 = format_72_Lunedi_13_07_20_43_72.readFeatures(json_72_Lunedi_13_07_20_43_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_72_Lunedi_13_07_20_43_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_72_Lunedi_13_07_20_43_72.addFeatures(features_72_Lunedi_13_07_20_43_72);
var lyr_72_Lunedi_13_07_20_43_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_72_Lunedi_13_07_20_43_72, 
                style: style_72_Lunedi_13_07_20_43_72,
                popuplayertitle: '72_Lunedi_13_07_20_43',
                interactive: true,
    title: '72_Lunedi_13_07_20_43<br />\
    <img src="styles/legend/72_Lunedi_13_07_20_43_72_0.png" /> 1<br />\
    <img src="styles/legend/72_Lunedi_13_07_20_43_72_1.png" /> 2<br />' });
var format_73_Lunedi_05_30_13_06_73 = new ol.format.GeoJSON();
var features_73_Lunedi_05_30_13_06_73 = format_73_Lunedi_05_30_13_06_73.readFeatures(json_73_Lunedi_05_30_13_06_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_73_Lunedi_05_30_13_06_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_73_Lunedi_05_30_13_06_73.addFeatures(features_73_Lunedi_05_30_13_06_73);
var lyr_73_Lunedi_05_30_13_06_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_73_Lunedi_05_30_13_06_73, 
                style: style_73_Lunedi_05_30_13_06_73,
                popuplayertitle: '73_Lunedi_05_30_13_06',
                interactive: true,
    title: '73_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06_73_0.png" /> 1<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06_73_1.png" /> 2<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06_73_2.png" /> 3<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06_73_3.png" /> 4<br />\
    <img src="styles/legend/73_Lunedi_05_30_13_06_73_4.png" /> 5<br />' });
var format_75_Lunedi_13_07_20_43_74 = new ol.format.GeoJSON();
var features_75_Lunedi_13_07_20_43_74 = format_75_Lunedi_13_07_20_43_74.readFeatures(json_75_Lunedi_13_07_20_43_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_75_Lunedi_13_07_20_43_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_75_Lunedi_13_07_20_43_74.addFeatures(features_75_Lunedi_13_07_20_43_74);
var lyr_75_Lunedi_13_07_20_43_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_75_Lunedi_13_07_20_43_74, 
                style: style_75_Lunedi_13_07_20_43_74,
                popuplayertitle: '75_Lunedi_13_07_20_43',
                interactive: true,
    title: '75_Lunedi_13_07_20_43<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43_74_0.png" /> 1<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43_74_1.png" /> 2<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43_74_2.png" /> 3<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43_74_3.png" /> 4<br />\
    <img src="styles/legend/75_Lunedi_13_07_20_43_74_4.png" /> 5<br />' });
var format_76_Lunedi_19_00_02_36_75 = new ol.format.GeoJSON();
var features_76_Lunedi_19_00_02_36_75 = format_76_Lunedi_19_00_02_36_75.readFeatures(json_76_Lunedi_19_00_02_36_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_Lunedi_19_00_02_36_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_Lunedi_19_00_02_36_75.addFeatures(features_76_Lunedi_19_00_02_36_75);
var lyr_76_Lunedi_19_00_02_36_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_Lunedi_19_00_02_36_75, 
                style: style_76_Lunedi_19_00_02_36_75,
                popuplayertitle: '76_Lunedi_19_00_02_36',
                interactive: true,
    title: '76_Lunedi_19_00_02_36<br />\
    <img src="styles/legend/76_Lunedi_19_00_02_36_75_0.png" /> 1<br />' });
var format_77_Lunedi_21_50_05_26_76 = new ol.format.GeoJSON();
var features_77_Lunedi_21_50_05_26_76 = format_77_Lunedi_21_50_05_26_76.readFeatures(json_77_Lunedi_21_50_05_26_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_77_Lunedi_21_50_05_26_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_77_Lunedi_21_50_05_26_76.addFeatures(features_77_Lunedi_21_50_05_26_76);
var lyr_77_Lunedi_21_50_05_26_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_77_Lunedi_21_50_05_26_76, 
                style: style_77_Lunedi_21_50_05_26_76,
                popuplayertitle: '77_Lunedi_21_50_05_26',
                interactive: true,
    title: '77_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_76_0.png" /> 1<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_76_1.png" /> 2<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_76_2.png" /> 3<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_76_3.png" /> 4<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_76_4.png" /> 5<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_76_5.png" /> 6<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_76_6.png" /> 7<br />\
    <img src="styles/legend/77_Lunedi_21_50_05_26_76_7.png" /> 8<br />' });
var format_79_Lunedi_21_50_05_26_77 = new ol.format.GeoJSON();
var features_79_Lunedi_21_50_05_26_77 = format_79_Lunedi_21_50_05_26_77.readFeatures(json_79_Lunedi_21_50_05_26_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_79_Lunedi_21_50_05_26_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_79_Lunedi_21_50_05_26_77.addFeatures(features_79_Lunedi_21_50_05_26_77);
var lyr_79_Lunedi_21_50_05_26_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_79_Lunedi_21_50_05_26_77, 
                style: style_79_Lunedi_21_50_05_26_77,
                popuplayertitle: '79_Lunedi_21_50_05_26',
                interactive: true,
    title: '79_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/79_Lunedi_21_50_05_26_77_0.png" /> 1<br />\
    <img src="styles/legend/79_Lunedi_21_50_05_26_77_1.png" /> 2<br />' });
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
var format_156_Lunedi_13_07_20_43_79 = new ol.format.GeoJSON();
var features_156_Lunedi_13_07_20_43_79 = format_156_Lunedi_13_07_20_43_79.readFeatures(json_156_Lunedi_13_07_20_43_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_156_Lunedi_13_07_20_43_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_156_Lunedi_13_07_20_43_79.addFeatures(features_156_Lunedi_13_07_20_43_79);
var lyr_156_Lunedi_13_07_20_43_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_156_Lunedi_13_07_20_43_79, 
                style: style_156_Lunedi_13_07_20_43_79,
                popuplayertitle: '156_Lunedi_13_07_20_43',
                interactive: true,
    title: '156_Lunedi_13_07_20_43<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_0.png" /> 1<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_1.png" /> 2<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_2.png" /> 3<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_3.png" /> 4<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_4.png" /> 5<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_5.png" /> 6<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_6.png" /> 7<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_7.png" /> 8<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_8.png" /> 9<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_9.png" /> 10<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_10.png" /> 11<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_11.png" /> 12<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_12.png" /> 13<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_13.png" /> 14<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_14.png" /> 15<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_15.png" /> 16<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_16.png" /> 17<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_17.png" /> 18<br />\
    <img src="styles/legend/156_Lunedi_13_07_20_43_79_18.png" /> 19<br />' });
var format_158_Lunedi_05_30_13_06_80 = new ol.format.GeoJSON();
var features_158_Lunedi_05_30_13_06_80 = format_158_Lunedi_05_30_13_06_80.readFeatures(json_158_Lunedi_05_30_13_06_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_158_Lunedi_05_30_13_06_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_158_Lunedi_05_30_13_06_80.addFeatures(features_158_Lunedi_05_30_13_06_80);
var lyr_158_Lunedi_05_30_13_06_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_158_Lunedi_05_30_13_06_80, 
                style: style_158_Lunedi_05_30_13_06_80,
                popuplayertitle: '158_Lunedi_05_30_13_06',
                interactive: true,
    title: '158_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_80_0.png" /> 1<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_80_1.png" /> 2<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_80_2.png" /> 3<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_80_3.png" /> 4<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_80_4.png" /> 5<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_80_5.png" /> 6<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_80_6.png" /> 7<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_80_7.png" /> 8<br />\
    <img src="styles/legend/158_Lunedi_05_30_13_06_80_8.png" /> 9<br />' });
var format_531_Lunedi_05_30_13_06_81 = new ol.format.GeoJSON();
var features_531_Lunedi_05_30_13_06_81 = format_531_Lunedi_05_30_13_06_81.readFeatures(json_531_Lunedi_05_30_13_06_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_531_Lunedi_05_30_13_06_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_531_Lunedi_05_30_13_06_81.addFeatures(features_531_Lunedi_05_30_13_06_81);
var lyr_531_Lunedi_05_30_13_06_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_531_Lunedi_05_30_13_06_81, 
                style: style_531_Lunedi_05_30_13_06_81,
                popuplayertitle: '531_Lunedi_05_30_13_06',
                interactive: true,
    title: '531_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/531_Lunedi_05_30_13_06_81_0.png" /> 1<br />' });
var format_534_Lunedi_21_50_05_26_82 = new ol.format.GeoJSON();
var features_534_Lunedi_21_50_05_26_82 = format_534_Lunedi_21_50_05_26_82.readFeatures(json_534_Lunedi_21_50_05_26_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_534_Lunedi_21_50_05_26_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_534_Lunedi_21_50_05_26_82.addFeatures(features_534_Lunedi_21_50_05_26_82);
var lyr_534_Lunedi_21_50_05_26_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_534_Lunedi_21_50_05_26_82, 
                style: style_534_Lunedi_21_50_05_26_82,
                popuplayertitle: '534_Lunedi_21_50_05_26',
                interactive: true,
    title: '534_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/534_Lunedi_21_50_05_26_82_0.png" /> 1<br />' });
var format_540_Lunedi_21_50_05_26_83 = new ol.format.GeoJSON();
var features_540_Lunedi_21_50_05_26_83 = format_540_Lunedi_21_50_05_26_83.readFeatures(json_540_Lunedi_21_50_05_26_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_540_Lunedi_21_50_05_26_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_540_Lunedi_21_50_05_26_83.addFeatures(features_540_Lunedi_21_50_05_26_83);
var lyr_540_Lunedi_21_50_05_26_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_540_Lunedi_21_50_05_26_83, 
                style: style_540_Lunedi_21_50_05_26_83,
                popuplayertitle: '540_Lunedi_21_50_05_26',
                interactive: true,
    title: '540_Lunedi_21_50_05_26<br />\
    <img src="styles/legend/540_Lunedi_21_50_05_26_83_0.png" /> 1<br />' });
var format_541_Lunedi_05_30_13_06_84 = new ol.format.GeoJSON();
var features_541_Lunedi_05_30_13_06_84 = format_541_Lunedi_05_30_13_06_84.readFeatures(json_541_Lunedi_05_30_13_06_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_541_Lunedi_05_30_13_06_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_541_Lunedi_05_30_13_06_84.addFeatures(features_541_Lunedi_05_30_13_06_84);
var lyr_541_Lunedi_05_30_13_06_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_541_Lunedi_05_30_13_06_84, 
                style: style_541_Lunedi_05_30_13_06_84,
                popuplayertitle: '541_Lunedi_05_30_13_06',
                interactive: true,
    title: '541_Lunedi_05_30_13_06<br />\
    <img src="styles/legend/541_Lunedi_05_30_13_06_84_0.png" /> 1<br />\
    <img src="styles/legend/541_Lunedi_05_30_13_06_84_1.png" /> 2<br />\
    <img src="styles/legend/541_Lunedi_05_30_13_06_84_2.png" /> 3<br />\
    <img src="styles/legend/541_Lunedi_05_30_13_06_84_3.png" /> 4<br />' });
var format_542_Lunedi_13_07_20_43_85 = new ol.format.GeoJSON();
var features_542_Lunedi_13_07_20_43_85 = format_542_Lunedi_13_07_20_43_85.readFeatures(json_542_Lunedi_13_07_20_43_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_542_Lunedi_13_07_20_43_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_542_Lunedi_13_07_20_43_85.addFeatures(features_542_Lunedi_13_07_20_43_85);
var lyr_542_Lunedi_13_07_20_43_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_542_Lunedi_13_07_20_43_85, 
                style: style_542_Lunedi_13_07_20_43_85,
                popuplayertitle: '542_Lunedi_13_07_20_43',
                interactive: true,
    title: '542_Lunedi_13_07_20_43<br />\
    <img src="styles/legend/542_Lunedi_13_07_20_43_85_0.png" /> 1<br />\
    <img src="styles/legend/542_Lunedi_13_07_20_43_85_1.png" /> 2<br />' });
var format_543_Lunedi_19_00_02_36_86 = new ol.format.GeoJSON();
var features_543_Lunedi_19_00_02_36_86 = format_543_Lunedi_19_00_02_36_86.readFeatures(json_543_Lunedi_19_00_02_36_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_543_Lunedi_19_00_02_36_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_543_Lunedi_19_00_02_36_86.addFeatures(features_543_Lunedi_19_00_02_36_86);
var lyr_543_Lunedi_19_00_02_36_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_543_Lunedi_19_00_02_36_86, 
                style: style_543_Lunedi_19_00_02_36_86,
                popuplayertitle: '543_Lunedi_19_00_02_36',
                interactive: true,
    title: '543_Lunedi_19_00_02_36<br />\
    <img src="styles/legend/543_Lunedi_19_00_02_36_86_0.png" /> 1<br />' });
var group_Lunedi = new ol.layer.Group({
                                layers: [lyr_70_Lunedi_09_30_15_50_70,lyr_71_Lunedi_05_30_13_06_71,lyr_72_Lunedi_13_07_20_43_72,lyr_73_Lunedi_05_30_13_06_73,lyr_75_Lunedi_13_07_20_43_74,lyr_76_Lunedi_19_00_02_36_75,lyr_77_Lunedi_21_50_05_26_76,lyr_79_Lunedi_21_50_05_26_77,lyr_154_Lunedi_21_50_05_26_78,lyr_156_Lunedi_13_07_20_43_79,lyr_158_Lunedi_05_30_13_06_80,lyr_531_Lunedi_05_30_13_06_81,lyr_534_Lunedi_21_50_05_26_82,lyr_540_Lunedi_21_50_05_26_83,lyr_541_Lunedi_05_30_13_06_84,lyr_542_Lunedi_13_07_20_43_85,lyr_543_Lunedi_19_00_02_36_86,],
                                fold: 'close',
                                title: 'Lunedi'});
var group_Martedi = new ol.layer.Group({
                                layers: [lyr_70_Martedi_09_30_15_50_53,lyr_71_Martedi_05_30_13_06_54,lyr_72_Martedi_13_07_20_43_55,lyr_73_Martedi_05_30_13_06_56,lyr_75_Martedi_13_07_20_43_57,lyr_76_Martedi_19_00_02_36_58,lyr_77_Martedi_21_50_05_26_59,lyr_79_Martedi_21_50_05_26_60,lyr_154_Martedi_21_50_05_26_61,lyr_156_Martedi_13_07_20_43_62,lyr_158_Martedi_05_30_13_06_63,lyr_531_Martedi_05_30_13_06_64,lyr_534_Martedi_21_50_05_26_65,lyr_540_Martedi_21_50_05_26_66,lyr_541_Martedi_05_30_13_06_67,lyr_542_Martedi_13_07_20_43_68,lyr_543_Martedi_19_00_02_36_69,],
                                fold: 'close',
                                title: 'Martedi'});
var group_Mercoledi = new ol.layer.Group({
                                layers: [lyr_70_Mercoledi_09_30_15_50_36,lyr_71_Mercoledi_05_30_13_06_37,lyr_72_Mercoledi_13_07_20_43_38,lyr_73_Mercoledi_05_30_13_06_39,lyr_75_Mercoledi_13_07_20_43_40,lyr_76_Mercoledi_19_00_02_36_41,lyr_77_Mercoledi_21_50_05_26_42,lyr_79_Mercoledi_21_50_05_26_43,lyr_154_Mercoledi_21_50_05_26_44,lyr_156_Mercoledi_13_07_20_43_45,lyr_158_Mercoledi_05_30_13_06_46,lyr_531_Mercoledi_05_30_13_06_47,lyr_534_Mercoledi_21_50_05_26_48,lyr_540_Mercoledi_21_50_05_26_49,lyr_541_Mercoledi_05_30_13_06_50,lyr_542_Mercoledi_13_07_20_43_51,lyr_543_Mercoledi_19_00_02_36_52,],
                                fold: 'close',
                                title: 'Mercoledi'});
var group_Giovedi = new ol.layer.Group({
                                layers: [lyr_70_Giovedi_09_30_15_50_19,lyr_71_Giovedi_05_30_13_06_20,lyr_72_Giovedi_13_07_20_43_21,lyr_73_Giovedi_05_30_13_06_22,lyr_75_Giovedi_13_07_20_43_23,lyr_76_Giovedi_19_00_02_36_24,lyr_77_Giovedi_21_50_05_26_25,lyr_79_Giovedi_21_50_05_26_26,lyr_154_Giovedi_21_50_05_26_27,lyr_156_Giovedi_13_07_20_43_28,lyr_158_Giovedi_05_30_13_06_29,lyr_531_Giovedi_05_30_13_06_30,lyr_534_Giovedi_21_50_05_26_31,lyr_540_Giovedi_21_50_05_26_32,lyr_541_Giovedi_05_30_13_06_33,lyr_542_Giovedi_13_07_20_43_34,lyr_543_Giovedi_19_00_02_36_35,],
                                fold: 'close',
                                title: 'Giovedi'});
var group_Venerdi = new ol.layer.Group({
                                layers: [lyr_70_Venerdi_09_30_15_50_2,lyr_71_Venerdi_05_30_13_06_3,lyr_72_Venerdi_13_07_20_43_4,lyr_73_Venerdi_05_30_13_06_5,lyr_75_Venerdi_13_07_20_43_6,lyr_76_Venerdi_19_00_02_36_7,lyr_77_Venerdi_21_50_05_26_8,lyr_79_Venerdi_21_50_05_26_9,lyr_154_Venerdi_21_50_05_26_10,lyr_156_Venerdi_13_07_20_43_11,lyr_158_Venerdi_05_30_13_06_12,lyr_531_Venerdi_05_30_13_06_13,lyr_534_Venerdi_21_50_05_26_14,lyr_540_Venerdi_21_50_05_26_15,lyr_541_Venerdi_05_30_13_06_16,lyr_542_Venerdi_13_07_20_43_17,lyr_543_Venerdi_19_00_02_36_18,],
                                fold: 'close',
                                title: 'Venerdi'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Confini_Comune_Milanodissolto_1.setVisible(true);lyr_70_Venerdi_09_30_15_50_2.setVisible(false);lyr_71_Venerdi_05_30_13_06_3.setVisible(false);lyr_72_Venerdi_13_07_20_43_4.setVisible(false);lyr_73_Venerdi_05_30_13_06_5.setVisible(false);lyr_75_Venerdi_13_07_20_43_6.setVisible(false);lyr_76_Venerdi_19_00_02_36_7.setVisible(false);lyr_77_Venerdi_21_50_05_26_8.setVisible(false);lyr_79_Venerdi_21_50_05_26_9.setVisible(false);lyr_154_Venerdi_21_50_05_26_10.setVisible(false);lyr_156_Venerdi_13_07_20_43_11.setVisible(false);lyr_158_Venerdi_05_30_13_06_12.setVisible(false);lyr_531_Venerdi_05_30_13_06_13.setVisible(false);lyr_534_Venerdi_21_50_05_26_14.setVisible(false);lyr_540_Venerdi_21_50_05_26_15.setVisible(false);lyr_541_Venerdi_05_30_13_06_16.setVisible(false);lyr_542_Venerdi_13_07_20_43_17.setVisible(false);lyr_543_Venerdi_19_00_02_36_18.setVisible(false);lyr_70_Giovedi_09_30_15_50_19.setVisible(false);lyr_71_Giovedi_05_30_13_06_20.setVisible(false);lyr_72_Giovedi_13_07_20_43_21.setVisible(false);lyr_73_Giovedi_05_30_13_06_22.setVisible(false);lyr_75_Giovedi_13_07_20_43_23.setVisible(false);lyr_76_Giovedi_19_00_02_36_24.setVisible(false);lyr_77_Giovedi_21_50_05_26_25.setVisible(false);lyr_79_Giovedi_21_50_05_26_26.setVisible(false);lyr_154_Giovedi_21_50_05_26_27.setVisible(false);lyr_156_Giovedi_13_07_20_43_28.setVisible(false);lyr_158_Giovedi_05_30_13_06_29.setVisible(false);lyr_531_Giovedi_05_30_13_06_30.setVisible(false);lyr_534_Giovedi_21_50_05_26_31.setVisible(false);lyr_540_Giovedi_21_50_05_26_32.setVisible(false);lyr_541_Giovedi_05_30_13_06_33.setVisible(false);lyr_542_Giovedi_13_07_20_43_34.setVisible(false);lyr_543_Giovedi_19_00_02_36_35.setVisible(false);lyr_70_Mercoledi_09_30_15_50_36.setVisible(false);lyr_71_Mercoledi_05_30_13_06_37.setVisible(false);lyr_72_Mercoledi_13_07_20_43_38.setVisible(false);lyr_73_Mercoledi_05_30_13_06_39.setVisible(false);lyr_75_Mercoledi_13_07_20_43_40.setVisible(false);lyr_76_Mercoledi_19_00_02_36_41.setVisible(false);lyr_77_Mercoledi_21_50_05_26_42.setVisible(false);lyr_79_Mercoledi_21_50_05_26_43.setVisible(false);lyr_154_Mercoledi_21_50_05_26_44.setVisible(false);lyr_156_Mercoledi_13_07_20_43_45.setVisible(false);lyr_158_Mercoledi_05_30_13_06_46.setVisible(false);lyr_531_Mercoledi_05_30_13_06_47.setVisible(false);lyr_534_Mercoledi_21_50_05_26_48.setVisible(false);lyr_540_Mercoledi_21_50_05_26_49.setVisible(false);lyr_541_Mercoledi_05_30_13_06_50.setVisible(false);lyr_542_Mercoledi_13_07_20_43_51.setVisible(false);lyr_543_Mercoledi_19_00_02_36_52.setVisible(false);lyr_70_Martedi_09_30_15_50_53.setVisible(false);lyr_71_Martedi_05_30_13_06_54.setVisible(false);lyr_72_Martedi_13_07_20_43_55.setVisible(false);lyr_73_Martedi_05_30_13_06_56.setVisible(false);lyr_75_Martedi_13_07_20_43_57.setVisible(false);lyr_76_Martedi_19_00_02_36_58.setVisible(false);lyr_77_Martedi_21_50_05_26_59.setVisible(false);lyr_79_Martedi_21_50_05_26_60.setVisible(false);lyr_154_Martedi_21_50_05_26_61.setVisible(false);lyr_156_Martedi_13_07_20_43_62.setVisible(false);lyr_158_Martedi_05_30_13_06_63.setVisible(false);lyr_531_Martedi_05_30_13_06_64.setVisible(false);lyr_534_Martedi_21_50_05_26_65.setVisible(false);lyr_540_Martedi_21_50_05_26_66.setVisible(false);lyr_541_Martedi_05_30_13_06_67.setVisible(false);lyr_542_Martedi_13_07_20_43_68.setVisible(false);lyr_543_Martedi_19_00_02_36_69.setVisible(false);lyr_70_Lunedi_09_30_15_50_70.setVisible(false);lyr_71_Lunedi_05_30_13_06_71.setVisible(false);lyr_72_Lunedi_13_07_20_43_72.setVisible(false);lyr_73_Lunedi_05_30_13_06_73.setVisible(false);lyr_75_Lunedi_13_07_20_43_74.setVisible(false);lyr_76_Lunedi_19_00_02_36_75.setVisible(false);lyr_77_Lunedi_21_50_05_26_76.setVisible(false);lyr_79_Lunedi_21_50_05_26_77.setVisible(false);lyr_154_Lunedi_21_50_05_26_78.setVisible(false);lyr_156_Lunedi_13_07_20_43_79.setVisible(false);lyr_158_Lunedi_05_30_13_06_80.setVisible(true);lyr_531_Lunedi_05_30_13_06_81.setVisible(false);lyr_534_Lunedi_21_50_05_26_82.setVisible(false);lyr_540_Lunedi_21_50_05_26_83.setVisible(false);lyr_541_Lunedi_05_30_13_06_84.setVisible(false);lyr_542_Lunedi_13_07_20_43_85.setVisible(false);lyr_543_Lunedi_19_00_02_36_86.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_Confini_Comune_Milanodissolto_1,group_Venerdi,group_Giovedi,group_Mercoledi,group_Martedi,group_Lunedi];
lyr_Confini_Comune_Milanodissolto_1.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETRO': 'PERIMETRO', });
lyr_70_Venerdi_09_30_15_50_2.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_71_Venerdi_05_30_13_06_3.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_72_Venerdi_13_07_20_43_4.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_73_Venerdi_05_30_13_06_5.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_75_Venerdi_13_07_20_43_6.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_76_Venerdi_19_00_02_36_7.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_77_Venerdi_21_50_05_26_8.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_79_Venerdi_21_50_05_26_9.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_154_Venerdi_21_50_05_26_10.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_156_Venerdi_13_07_20_43_11.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_158_Venerdi_05_30_13_06_12.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_531_Venerdi_05_30_13_06_13.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_534_Venerdi_21_50_05_26_14.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_540_Venerdi_21_50_05_26_15.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_541_Venerdi_05_30_13_06_16.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_542_Venerdi_13_07_20_43_17.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_543_Venerdi_19_00_02_36_18.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_70_Giovedi_09_30_15_50_19.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_71_Giovedi_05_30_13_06_20.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_72_Giovedi_13_07_20_43_21.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_73_Giovedi_05_30_13_06_22.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_75_Giovedi_13_07_20_43_23.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_76_Giovedi_19_00_02_36_24.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_77_Giovedi_21_50_05_26_25.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_79_Giovedi_21_50_05_26_26.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_154_Giovedi_21_50_05_26_27.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_156_Giovedi_13_07_20_43_28.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_158_Giovedi_05_30_13_06_29.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_531_Giovedi_05_30_13_06_30.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_534_Giovedi_21_50_05_26_31.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_540_Giovedi_21_50_05_26_32.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_541_Giovedi_05_30_13_06_33.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_542_Giovedi_13_07_20_43_34.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_543_Giovedi_19_00_02_36_35.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_70_Mercoledi_09_30_15_50_36.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_71_Mercoledi_05_30_13_06_37.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_72_Mercoledi_13_07_20_43_38.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_73_Mercoledi_05_30_13_06_39.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_75_Mercoledi_13_07_20_43_40.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_76_Mercoledi_19_00_02_36_41.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_77_Mercoledi_21_50_05_26_42.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_79_Mercoledi_21_50_05_26_43.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_154_Mercoledi_21_50_05_26_44.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_156_Mercoledi_13_07_20_43_45.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_158_Mercoledi_05_30_13_06_46.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_531_Mercoledi_05_30_13_06_47.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_534_Mercoledi_21_50_05_26_48.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_540_Mercoledi_21_50_05_26_49.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_541_Mercoledi_05_30_13_06_50.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_542_Mercoledi_13_07_20_43_51.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_543_Mercoledi_19_00_02_36_52.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_70_Martedi_09_30_15_50_53.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_71_Martedi_05_30_13_06_54.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_72_Martedi_13_07_20_43_55.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_73_Martedi_05_30_13_06_56.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_75_Martedi_13_07_20_43_57.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_76_Martedi_19_00_02_36_58.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_77_Martedi_21_50_05_26_59.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_79_Martedi_21_50_05_26_60.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_154_Martedi_21_50_05_26_61.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_156_Martedi_13_07_20_43_62.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_158_Martedi_05_30_13_06_63.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_531_Martedi_05_30_13_06_64.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_534_Martedi_21_50_05_26_65.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_540_Martedi_21_50_05_26_66.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_541_Martedi_05_30_13_06_67.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_542_Martedi_13_07_20_43_68.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_543_Martedi_19_00_02_36_69.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_70_Lunedi_09_30_15_50_70.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_71_Lunedi_05_30_13_06_71.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_72_Lunedi_13_07_20_43_72.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_73_Lunedi_05_30_13_06_73.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_75_Lunedi_13_07_20_43_74.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_76_Lunedi_19_00_02_36_75.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_77_Lunedi_21_50_05_26_76.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_79_Lunedi_21_50_05_26_77.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_154_Lunedi_21_50_05_26_78.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_156_Lunedi_13_07_20_43_79.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_158_Lunedi_05_30_13_06_80.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_531_Lunedi_05_30_13_06_81.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_534_Lunedi_21_50_05_26_82.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_540_Lunedi_21_50_05_26_83.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_541_Lunedi_05_30_13_06_84.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_542_Lunedi_13_07_20_43_85.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_543_Lunedi_19_00_02_36_86.set('fieldAliases', {'CD_VIARIO': 'CD_VIARIO', 'TP_VIA': 'TP_VIA', 'DSC_VIA': 'DSC_VIA', 'toponym': 'toponym', 'unita_terr': 'unita_terr', 'giorno': 'giorno', 'tipo_giorn': 'tipo_giorn', 'ora_inizio': 'ora_inizio', 'ora_fine': 'ora_fine', 'streetcode': 'streetcode', 'squadra': 'squadra', 'lato': 'lato', 'servizio_g': 'servizio_g', });
lyr_Confini_Comune_Milanodissolto_1.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETRO': 'TextEdit', });
lyr_70_Venerdi_09_30_15_50_2.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_71_Venerdi_05_30_13_06_3.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_72_Venerdi_13_07_20_43_4.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_73_Venerdi_05_30_13_06_5.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_75_Venerdi_13_07_20_43_6.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_76_Venerdi_19_00_02_36_7.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_77_Venerdi_21_50_05_26_8.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_79_Venerdi_21_50_05_26_9.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_154_Venerdi_21_50_05_26_10.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_156_Venerdi_13_07_20_43_11.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_158_Venerdi_05_30_13_06_12.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_531_Venerdi_05_30_13_06_13.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_534_Venerdi_21_50_05_26_14.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_540_Venerdi_21_50_05_26_15.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_541_Venerdi_05_30_13_06_16.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_542_Venerdi_13_07_20_43_17.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_543_Venerdi_19_00_02_36_18.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_70_Giovedi_09_30_15_50_19.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_71_Giovedi_05_30_13_06_20.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_72_Giovedi_13_07_20_43_21.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_73_Giovedi_05_30_13_06_22.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_75_Giovedi_13_07_20_43_23.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_76_Giovedi_19_00_02_36_24.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_77_Giovedi_21_50_05_26_25.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_79_Giovedi_21_50_05_26_26.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_154_Giovedi_21_50_05_26_27.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_156_Giovedi_13_07_20_43_28.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_158_Giovedi_05_30_13_06_29.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_531_Giovedi_05_30_13_06_30.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_534_Giovedi_21_50_05_26_31.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_540_Giovedi_21_50_05_26_32.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_541_Giovedi_05_30_13_06_33.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_542_Giovedi_13_07_20_43_34.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_543_Giovedi_19_00_02_36_35.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_70_Mercoledi_09_30_15_50_36.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_71_Mercoledi_05_30_13_06_37.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_72_Mercoledi_13_07_20_43_38.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_73_Mercoledi_05_30_13_06_39.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_75_Mercoledi_13_07_20_43_40.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_76_Mercoledi_19_00_02_36_41.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_77_Mercoledi_21_50_05_26_42.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_79_Mercoledi_21_50_05_26_43.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_154_Mercoledi_21_50_05_26_44.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_156_Mercoledi_13_07_20_43_45.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_158_Mercoledi_05_30_13_06_46.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_531_Mercoledi_05_30_13_06_47.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_534_Mercoledi_21_50_05_26_48.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_540_Mercoledi_21_50_05_26_49.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_541_Mercoledi_05_30_13_06_50.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_542_Mercoledi_13_07_20_43_51.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_543_Mercoledi_19_00_02_36_52.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_70_Martedi_09_30_15_50_53.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_71_Martedi_05_30_13_06_54.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_72_Martedi_13_07_20_43_55.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_73_Martedi_05_30_13_06_56.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_75_Martedi_13_07_20_43_57.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_76_Martedi_19_00_02_36_58.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_77_Martedi_21_50_05_26_59.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_79_Martedi_21_50_05_26_60.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_154_Martedi_21_50_05_26_61.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_156_Martedi_13_07_20_43_62.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_158_Martedi_05_30_13_06_63.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_531_Martedi_05_30_13_06_64.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_534_Martedi_21_50_05_26_65.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_540_Martedi_21_50_05_26_66.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_541_Martedi_05_30_13_06_67.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_542_Martedi_13_07_20_43_68.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_543_Martedi_19_00_02_36_69.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_70_Lunedi_09_30_15_50_70.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_71_Lunedi_05_30_13_06_71.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_72_Lunedi_13_07_20_43_72.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_73_Lunedi_05_30_13_06_73.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_75_Lunedi_13_07_20_43_74.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_76_Lunedi_19_00_02_36_75.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_77_Lunedi_21_50_05_26_76.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_79_Lunedi_21_50_05_26_77.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_154_Lunedi_21_50_05_26_78.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_156_Lunedi_13_07_20_43_79.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_158_Lunedi_05_30_13_06_80.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_531_Lunedi_05_30_13_06_81.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_534_Lunedi_21_50_05_26_82.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_540_Lunedi_21_50_05_26_83.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_541_Lunedi_05_30_13_06_84.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_542_Lunedi_13_07_20_43_85.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_543_Lunedi_19_00_02_36_86.set('fieldImages', {'CD_VIARIO': '', 'TP_VIA': '', 'DSC_VIA': '', 'toponym': '', 'unita_terr': '', 'giorno': '', 'tipo_giorn': '', 'ora_inizio': '', 'ora_fine': '', 'streetcode': '', 'squadra': '', 'lato': '', 'servizio_g': '', });
lyr_Confini_Comune_Milanodissolto_1.set('fieldLabels', {'fid': 'inline label - always visible', 'AREA': 'inline label - always visible', 'PERIMETRO': 'inline label - always visible', });
lyr_70_Venerdi_09_30_15_50_2.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_71_Venerdi_05_30_13_06_3.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_72_Venerdi_13_07_20_43_4.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_73_Venerdi_05_30_13_06_5.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_75_Venerdi_13_07_20_43_6.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_76_Venerdi_19_00_02_36_7.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_77_Venerdi_21_50_05_26_8.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_79_Venerdi_21_50_05_26_9.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_154_Venerdi_21_50_05_26_10.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_156_Venerdi_13_07_20_43_11.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_158_Venerdi_05_30_13_06_12.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_531_Venerdi_05_30_13_06_13.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_534_Venerdi_21_50_05_26_14.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_540_Venerdi_21_50_05_26_15.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_541_Venerdi_05_30_13_06_16.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_542_Venerdi_13_07_20_43_17.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_543_Venerdi_19_00_02_36_18.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_70_Giovedi_09_30_15_50_19.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_71_Giovedi_05_30_13_06_20.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_72_Giovedi_13_07_20_43_21.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_73_Giovedi_05_30_13_06_22.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_75_Giovedi_13_07_20_43_23.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_76_Giovedi_19_00_02_36_24.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_77_Giovedi_21_50_05_26_25.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_79_Giovedi_21_50_05_26_26.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_154_Giovedi_21_50_05_26_27.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_156_Giovedi_13_07_20_43_28.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_158_Giovedi_05_30_13_06_29.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_531_Giovedi_05_30_13_06_30.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_534_Giovedi_21_50_05_26_31.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_540_Giovedi_21_50_05_26_32.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_541_Giovedi_05_30_13_06_33.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_542_Giovedi_13_07_20_43_34.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_543_Giovedi_19_00_02_36_35.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_70_Mercoledi_09_30_15_50_36.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_71_Mercoledi_05_30_13_06_37.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_72_Mercoledi_13_07_20_43_38.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_73_Mercoledi_05_30_13_06_39.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_75_Mercoledi_13_07_20_43_40.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_76_Mercoledi_19_00_02_36_41.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_77_Mercoledi_21_50_05_26_42.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_79_Mercoledi_21_50_05_26_43.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_154_Mercoledi_21_50_05_26_44.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_156_Mercoledi_13_07_20_43_45.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_158_Mercoledi_05_30_13_06_46.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_531_Mercoledi_05_30_13_06_47.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_534_Mercoledi_21_50_05_26_48.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_540_Mercoledi_21_50_05_26_49.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_541_Mercoledi_05_30_13_06_50.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_542_Mercoledi_13_07_20_43_51.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_543_Mercoledi_19_00_02_36_52.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_70_Martedi_09_30_15_50_53.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_71_Martedi_05_30_13_06_54.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_72_Martedi_13_07_20_43_55.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_73_Martedi_05_30_13_06_56.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_75_Martedi_13_07_20_43_57.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_76_Martedi_19_00_02_36_58.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_77_Martedi_21_50_05_26_59.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_79_Martedi_21_50_05_26_60.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_154_Martedi_21_50_05_26_61.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_156_Martedi_13_07_20_43_62.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_158_Martedi_05_30_13_06_63.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_531_Martedi_05_30_13_06_64.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_534_Martedi_21_50_05_26_65.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_540_Martedi_21_50_05_26_66.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_541_Martedi_05_30_13_06_67.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_542_Martedi_13_07_20_43_68.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_543_Martedi_19_00_02_36_69.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_70_Lunedi_09_30_15_50_70.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_71_Lunedi_05_30_13_06_71.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_72_Lunedi_13_07_20_43_72.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_73_Lunedi_05_30_13_06_73.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_75_Lunedi_13_07_20_43_74.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_76_Lunedi_19_00_02_36_75.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_77_Lunedi_21_50_05_26_76.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_79_Lunedi_21_50_05_26_77.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_154_Lunedi_21_50_05_26_78.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_156_Lunedi_13_07_20_43_79.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_158_Lunedi_05_30_13_06_80.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_531_Lunedi_05_30_13_06_81.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_534_Lunedi_21_50_05_26_82.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_540_Lunedi_21_50_05_26_83.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_541_Lunedi_05_30_13_06_84.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_542_Lunedi_13_07_20_43_85.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_543_Lunedi_19_00_02_36_86.set('fieldLabels', {'CD_VIARIO': 'inline label - always visible', 'TP_VIA': 'inline label - always visible', 'DSC_VIA': 'inline label - always visible', 'toponym': 'inline label - always visible', 'unita_terr': 'inline label - always visible', 'giorno': 'inline label - always visible', 'tipo_giorn': 'inline label - always visible', 'ora_inizio': 'inline label - always visible', 'ora_fine': 'inline label - always visible', 'streetcode': 'inline label - always visible', 'squadra': 'inline label - always visible', 'lato': 'inline label - always visible', 'servizio_g': 'inline label - always visible', });
lyr_543_Lunedi_19_00_02_36_86.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});