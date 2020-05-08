var no_consumo = {
"type": "FeatureCollection",
"name": "no_consumo",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "id": null, "nombre": "No Servido", "sup_ha": 3.1274, "fec_reg": null }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -66.664097490101071, 10.23664954370676 ], [ -66.66382170278618, 10.236448413898275 ], [ -66.664021563992563, 10.236253299901049 ], [ -66.664152997359167, 10.236002310800789 ], [ -66.66419325692587, 10.235761829694072 ], [ -66.664439921445322, 10.235724945919923 ], [ -66.664695194415359, 10.235598412148317 ], [ -66.664898497410718, 10.235399936257403 ], [ -66.665029929663774, 10.235148946559937 ], [ -66.665076625759141, 10.234870011795428 ], [ -66.665034014956177, 10.234590436125234 ], [ -66.665032762504438, 10.234587957136997 ], [ -66.665067819806652, 10.234378544798506 ], [ -66.665054349228782, 10.234290162444681 ], [ -66.665151529717875, 10.234340090236417 ], [ -66.66543313644479, 10.234386342865434 ], [ -66.665715390133371, 10.234344135859921 ], [ -66.665970661594173, 10.234217600720291 ], [ -66.665996990689848, 10.234191896424489 ], [ -66.666517554112815, 10.235131076434202 ], [ -66.665842187411897, 10.235532617118771 ], [ -66.665478000144162, 10.235682903112746 ], [ -66.664336682474342, 10.236234158244816 ], [ -66.664097490101071, 10.23664954370676 ] ] ], [ [ [ -66.661729108905462, 10.233642325648104 ], [ -66.66146823904333, 10.233300401153352 ], [ -66.663128210510379, 10.232291553056761 ], [ -66.663206358822038, 10.232446235401376 ], [ -66.663266751743919, 10.232506929303204 ], [ -66.663270297466795, 10.232513947499397 ], [ -66.663199179703469, 10.232649757596883 ], [ -66.663006080537102, 10.23261804066016 ], [ -66.662723828599795, 10.232660245575941 ], [ -66.66246855781182, 10.23278677816764 ], [ -66.662300923603993, 10.232950431694389 ], [ -66.662265409206753, 10.232968035403019 ], [ -66.662062106836061, 10.233166509654508 ], [ -66.661930673686996, 10.233417497843631 ], [ -66.661919947863538, 10.233481564444416 ], [ -66.661866792921515, 10.233507912035147 ], [ -66.661729108905462, 10.233642325648104 ] ] ] ] } }
]
}
L.geoJson(no_consumo).addTo(map);
