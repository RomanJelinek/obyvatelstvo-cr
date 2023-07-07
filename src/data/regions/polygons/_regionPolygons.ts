import jihocesky from './jihocesky.json';
import jihomoravsky from './jihomoravsky.json';
import karlovarsky from './karlovarsky.json';
import kralovehradecky from './kralovehradecky.json';
import liberecky from './liberecky.json';
import moravskoslezsky from './moravskoslezsky.json';
import olomoucky from './olomoucky.json';
import pardubicky from './pardubicky.json';
import plzensky from './plzensky.json';
import praha from './praha.json';
import stredocesky from './stredocesky.json';
import ustecky from './ustecky.json';
import vysocina from './vysocina.json';
import zlinsky from './zlinsky.json';

export const regionPolygons = [
{ id: 'jihocesky-kraj', name: 'Jihočeský kraj', coordinates: jihocesky },
{ id: 'jihomoravsky-kraj', name: 'Jihomoravský kraj', coordinates: jihomoravsky },
{ id: 'karlovarsky-kraj', name: 'Karlovarský kraj', coordinates: karlovarsky },
{ id: 'kralovehradecky-kraj', name: 'Královéhradecký kraj', coordinates: kralovehradecky },
{ id: 'liberecky-kraj', name: 'Liberecký kraj', coordinates: liberecky },
{ id: 'moravskoslezsky-kraj', name: 'Moravskoslezský kraj', coordinates: moravskoslezsky },
{ id: 'olomoucky-kraj', name: 'Olomoucký kraj', coordinates: olomoucky },
{ id: 'pardubicky-kraj', name: 'Pardubický kraj', coordinates: pardubicky },
{ id: 'plzensky-kraj', name: 'Plzeňský kraj', coordinates: plzensky },
{ id: 'stredocesky-kraj', name: 'Středočeský kraj', coordinates: stredocesky },
{ id: 'praha', name: 'Praha', coordinates: praha },
{ id: 'ustecky-kraj', name: 'Ústecký kraj', coordinates: ustecky },
{ id: 'vysocina', name: 'Vysočina', coordinates: vysocina },
{ id: 'zlinsky-kraj', name: 'Zlínský kraj', coordinates: zlinsky },
] 

export const districtsRegions = {
  CZ0100: {
    region: 'Hlavní město Praha',
    regionId: 'praha',
    name: 'Hlavní město Praha',
  },
  CZ0201: {
    region: 'Středočeský kraj',
    regionId: 'stredocesky-kraj',
    name: 'Okres Benešov',
  },
  CZ0202: {
    region: 'Středočeský kraj',
    regionId: 'stredocesky-kraj',
    name: 'Okres Beroun',
  },
  CZ0203: {
    region: 'Středočeský kraj',
    regionId: 'stredocesky-kraj',
    name: 'Okres Kladno',
  },
  CZ0204: {
    region: 'Středočeský kraj',
    regionId: 'stredocesky-kraj',
    name: 'Okres Kolín',
  },
  CZ0205: {
    region: 'Středočeský kraj',
    regionId: 'stredocesky-kraj',
    name: 'Okres Kutná Hora',
  },
  CZ0206: {
    region: 'Středočeský kraj',
    regionId: 'stredocesky-kraj',
    name: 'Okres Mělník',
  },
  CZ0207: {
    region: 'Středočeský kraj',
    regionId: 'stredocesky-kraj',
    name: 'Okres Mladá Boleslav',
  },
  CZ0208: {
    region: 'Středočeský kraj',
    regionId: 'stredocesky-kraj',
    name: 'Okres Nymburk',
  },
  CZ0209: {
    region: 'Středočeský kraj',
    regionId: 'stredocesky-kraj',
    name: 'Praha-východ',
  },
  CZ020A: {
    region: 'Středočeský kraj',
    regionId: 'stredocesky-kraj',
    name: 'Praha-západ',
  },
  CZ020B: {
    region: 'Středočeský kraj',
    regionId: 'stredocesky-kraj',
    name: 'Okres Příbram',
  },
  CZ020C: {
    region: 'Středočeský kraj',
    regionId: 'stredocesky-kraj',
    name: 'Okres Rakovník',
  },
  CZ0311: {
    region: 'Jihočeský kraj',
    regionId: 'jihocesky-kraj',
    name: 'Okres České Budějovice',
  },
  CZ0312: {
    region: 'Jihočeský kraj',
    regionId: 'jihocesky-kraj',
    name: 'Okres Český Krumlov',
  },
  CZ0313: {
    region: 'Jihočeský kraj',
    regionId: 'jihocesky-kraj',
    name: 'Okres Jindřichův Hradec',
  },
  CZ0314: {
    region: 'Jihočeský kraj',
    regionId: 'jihocesky-kraj',
    name: 'Okres Písek',
  },
  CZ0315: {
    region: 'Jihočeský kraj',
    regionId: 'jihocesky-kraj',
    name: 'Okres Prachatice',
  },
  CZ0316: {
    region: 'Jihočeský kraj',
    regionId: 'jihocesky-kraj',
    name: 'Okres Strakonice',
  },
  CZ0317: {
    region: 'Jihočeský kraj',
    regionId: 'jihocesky-kraj',
    name: 'Okres Tábor',
  },
  CZ0321: {
    region: 'Plzeňský kraj',
    regionId: 'plzensky-kraj',
    name: 'Okres Domažlice',
  },
  CZ0322: {
    region: 'Plzeňský kraj',
    regionId: 'plzensky-kraj',
    name: 'Okres Klatovy',
  },
  CZ0323: {
    region: 'Plzeňský kraj',
    regionId: 'plzensky-kraj',
    name: 'Plzeň-město',
  },
  CZ0324: {
    region: 'Plzeňský kraj',
    regionId: 'plzensky-kraj',
    name: 'Plzeň-Jih',
  },
  CZ0325: {
    region: 'Plzeňský kraj',
    regionId: 'plzensky-kraj',
    name: 'Plzeň-sever',
  },
  CZ0326: {
    region: 'Plzeňský kraj',
    regionId: 'plzensky-kraj',
    name: 'Okres Rokycany',
  },
  CZ0327: {
    region: 'Plzeňský kraj',
    regionId: 'plzensky-kraj',
    name: 'Okres Tachov',
  },
  CZ0411: {
    region: 'Karlovarský kraj',
    regionId: 'karlovarsky-kraj',
    name: 'Okres Cheb',
  },
  CZ0412: {
    region: 'Karlovarský kraj',
    regionId: 'karlovarsky-kraj',
    name: 'Okres Karlovy Vary',
  },
  CZ0413: {
    region: 'Karlovarský kraj',
    regionId: 'karlovarsky-kraj',
    name: 'Okres Sokolov',
  },
  CZ0421: {
    region: 'Ústecký kraj',
    regionId: 'ustecky-kraj',
    name: 'Okres Děčín',
  },
  CZ0422: {
    region: 'Ústecký kraj',
    regionId: 'ustecky-kraj',
    name: 'Okres Chomutov',
  },
  CZ0423: {
    region: 'Ústecký kraj',
    regionId: 'ustecky-kraj',
    name: 'Okres Litoměřice',
  },
  CZ0424: { region: 'Ústecký kraj', regionId: 'ustecky-kraj', name: 'Louny' },
  CZ0425: { region: 'Ústecký kraj', regionId: 'ustecky-kraj', name: 'Most' },
  CZ0426: { region: 'Ústecký kraj', regionId: 'ustecky-kraj', name: 'Teplice' },
  CZ0427: {
    region: 'Ústecký kraj',
    regionId: 'ustecky-kraj',
    name: 'Okres Ústí nad Labem',
  },
  CZ0511: {
    region: 'Liberecký kraj',
    regionId: 'liberecky-kraj',
    name: 'Okres Česká Lípa',
  },
  CZ0512: {
    region: 'Liberecký kraj',
    regionId: 'liberecky-kraj',
    name: 'Okres Jablonec nad Nisou',
  },
  CZ0513: {
    region: 'Liberecký kraj',
    regionId: 'liberecky-kraj',
    name: 'Okres Liberec',
  },
  CZ0514: {
    region: 'Liberecký kraj',
    regionId: 'liberecky-kraj',
    name: 'Okres Semily',
  },
  CZ0521: {
    region: 'Královéhradecký kraj',
    regionId: 'kralovehradecky-kraj',
    name: 'Okres Hradec Králové',
  },
  CZ0522: {
    region: 'Královéhradecký kraj',
    regionId: 'kralovehradecky-kraj',
    name: 'Okres Jičín',
  },
  CZ0523: {
    region: 'Královéhradecký kraj',
    regionId: 'kralovehradecky-kraj',
    name: 'Okres Náchod',
  },
  CZ0524: {
    region: 'Královéhradecký kraj',
    regionId: 'kralovehradecky-kraj',
    name: 'Okres Rychnov nad Kněžnou',
  },
  CZ0525: {
    region: 'Královéhradecký kraj',
    regionId: 'kralovehradecky-kraj',
    name: 'Okres Trutnov',
  },
  CZ0531: {
    region: 'Pardubický kraj',
    regionId: 'pardubicky-kraj',
    name: 'Okres Chrudim',
  },
  CZ0532: {
    region: 'Pardubický kraj',
    regionId: 'pardubicky-kraj',
    name: 'Okres Pardubice',
  },
  CZ0533: {
    region: 'Pardubický kraj',
    regionId: 'pardubicky-kraj',
    name: 'Okres Svitavy',
  },
  CZ0534: {
    region: 'Pardubický kraj',
    regionId: 'pardubicky-kraj',
    name: 'Okres Ústí nad Orlicí',
  },
  CZ0631: {
    region: 'Kraj Vysočina',
    regionId: 'vysocina',
    name: 'Okres Havlíčkův Brod',
  },
  CZ0632: {
    region: 'Kraj Vysočina',
    regionId: 'vysocina',
    name: 'Okres Jihlava',
  },
  CZ0633: {
    region: 'Kraj Vysočina',
    regionId: 'vysocina',
    name: 'Okres Pelhřimov',
  },
  CZ0634: {
    region: 'Kraj Vysočina',
    regionId: 'vysocina',
    name: 'Okres Třebíč',
  },
  CZ0635: {
    region: 'Kraj Vysočina',
    regionId: 'vysocina',
    name: 'Okres Žďár nad Sázavou',
  },
  CZ0711: {
    region: 'Olomoucký kraj',
    regionId: 'olomoucky-kraj',
    name: 'Okres Jeseník',
  },
  CZ0712: {
    region: 'Olomoucký kraj',
    regionId: 'olomoucky-kraj',
    name: 'Okres Olomouc',
  },
  CZ0713: {
    region: 'Olomoucký kraj',
    regionId: 'olomoucky-kraj',
    name: 'Okres Prostějov',
  },
  CZ0714: {
    region: 'Olomoucký kraj',
    regionId: 'olomoucky-kraj',
    name: 'Okres Přerov',
  },
  CZ0715: {
    region: 'Olomoucký kraj',
    regionId: 'olomoucky-kraj',
    name: 'Okres Šumperk',
  },
  CZ0724: {
    region: 'Zlínský kraj',
    regionId: 'zlinsky-kraj',
    name: 'Okres Zlín',
  },
  CZ0721: {
    region: 'Zlínský kraj',
    regionId: 'zlinsky-kraj',
    name: 'Okres Kroměříž',
  },
  CZ0722: {
    region: 'Zlínský kraj',
    regionId: 'zlinsky-kraj',
    name: 'Okres Uherské Hradiště',
  },
  CZ0723: {
    region: 'Zlínský kraj',
    regionId: 'zlinsky-kraj',
    name: 'Okres Vsetín',
  },
  CZ0801: {
    region: 'Moravskoslezský kraj',
    regionId: 'moravskoslezsky-kraj',
    name: 'Okres Bruntál',
  },
  CZ0802: {
    region: 'Moravskoslezský kraj',
    regionId: 'moravskoslezsky-kraj',
    name: 'Okres Frýdek-Místek',
  },
  CZ0803: {
    region: 'Moravskoslezský kraj',
    regionId: 'moravskoslezsky-kraj',
    name: 'Okres Karviná',
  },
  CZ0804: {
    region: 'Moravskoslezský kraj',
    regionId: 'moravskoslezsky-kraj',
    name: 'Okres Nový Jičín',
  },
  CZ0805: {
    region: 'Moravskoslezský kraj',
    regionId: 'moravskoslezsky-kraj',
    name: 'Okres Opava',
  },
  CZ0806: {
    region: 'Moravskoslezský kraj',
    regionId: 'moravskoslezsky-kraj',
    name: 'Ostrava-město',
  },
  CZ0641: {
    region: 'Jihomoravský kraj',
    regionId: 'jihomoravsky-kraj',
    name: 'Okres Blansko',
  },
  CZ0642: {
    region: 'Jihomoravský kraj',
    regionId: 'jihomoravsky-kraj',
    name: 'Brno-město',
  },
  CZ0643: {
    region: 'Jihomoravský kraj',
    regionId: 'jihomoravsky-kraj',
    name: 'Brno-venkov',
  },
  CZ0644: {
    region: 'Jihomoravský kraj',
    regionId: 'jihomoravsky-kraj',
    name: 'Okres Břeclav',
  },
  CZ0645: {
    region: 'Jihomoravský kraj',
    regionId: 'jihomoravsky-kraj',
    name: 'Okres Hodonín',
  },
  CZ0646: {
    region: 'Jihomoravský kraj',
    regionId: 'jihomoravsky-kraj',
    name: 'Okres Vyškov',
  },
  CZ0647: {
    region: 'Jihomoravský kraj',
    regionId: 'jihomoravsky-kraj',
    name: 'Okres Znojmo',
  },
};

