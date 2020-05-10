var comercial = {
"type": "FeatureCollection",
"name": "comercial",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "cu_catastr": "151101001001043004001001004", "desp_equp": "Restaurant", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.6636499761414, 10.233379633755177 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001043003001002006", "desp_equp": "Cafeteria", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.663718289861535, 10.233483378510448 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001017009001002003", "desp_equp": "Panaderia", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.665263928601604, 10.234096568792113 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001044001003002020", "desp_equp": "Cafeteria", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.663055551242024, 10.234065318816691 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001017002002006002", "desp_equp": "Restaurant", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.665669275532949, 10.234333066701566 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001018004001004004", "desp_equp": "Cafeteria", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.664394415229737, 10.234691735263194 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001018003003001001", "desp_equp": "Panaderia", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.664499269759958, 10.234778722686762 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001018003001001002", "desp_equp": "Restaurant", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.664664292583069, 10.235000789029458 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001033001001001010", "desp_equp": "Restaurant", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.663211960516165, 10.235017047680854 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001019005001001001", "desp_equp": "Panaderia", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.663755473884748, 10.23516661273705 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001050008001001005", "desp_equp": "Farmacia", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.663948342439767, 10.231913277622985 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001030008001001008", "desp_equp": "Farmacia", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.665439744825562, 10.233475568361442 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001045004002001004", "desp_equp": "Farmacia", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.662397700168398, 10.234235776222237 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001032013001002026", "desp_equp": "Farmacia", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.663844775157145, 10.234327143226471 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001019010001001001", "desp_equp": "Farmacia", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.664164279474647, 10.234856375097694 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001020006001001001", "desp_equp": "Farmacia", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.663287346337512, 10.23570973494243 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001042001002001032", "desp_equp": "Centro Comercial", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.6648198677876, 10.232984363157508 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001030003002010042", "desp_equp": "Centro Comercial", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.664713596717078, 10.2334038672687 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001044001002002040", "desp_equp": "Centro Comercial", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.663341751852229, 10.233908375560691 ] } },
{ "type": "Feature", "properties": { "cu_catastr": "151101001001030003001010042", "desp_equp": "Centro Comercial", "equip_urb": "Comercial", "non_parada": null }, "geometry": { "type": "Point", "coordinates": [ -66.664811525059164, 10.233583213826122 ] } }
]
}
L.geoJson(comercial).addTo(map);