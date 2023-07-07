import { CompleteData } from '../../../data/years';

export interface BasicData {
  id: string | number;
  name: string;
  total: number;
  men: number;
  women: number;
  men_average_age: number;
  women_average_age: number;
  total_average_age: number;
  total_change_relative: number;
  total_change_absolute: number;
  cities: CityData[];
}

export interface CityData extends Omit<BasicData, 'cities'> {}

export interface RegionData extends BasicData {}

export interface DistrictData extends BasicData {
  region: string;
}
export interface CountryData extends BasicData {}

interface EntryDistrictsData {
  name: string;
  region: string;
  regionId: string;
}

export function completeDataMapper(
  entryYearsData: Record<string, CompleteData[]>,
  entryDistrictsData: Record<string, EntryDistrictsData>
): {
  districtData: Record<string, DistrictData[]>;
  regionData: Record<string, RegionData[]>;
  countryData: Record<string, CountryData[]>;
  cityData: Record<string, CityData[]>;
} {
  let districtResult: Record<string, DistrictData[]> = {};
  let regionResult: Record<string, RegionData[]> = {};
  let countryResult: Record<string, CountryData[]> = {};
  let cityResult: Record<string, CityData[]> = {};
  let previousCityData: Record<string, CityData> = {};

  for (let year in entryYearsData) {
    districtResult[year] = [];
    regionResult[year] = [];
    cityResult[year] = [];
    countryResult[year] = [
      {
        id: 'country',
        name: 'ČR',
        total: 0,
        men: 0,
        women: 0,
        men_average_age: 0,
        women_average_age: 0,
        total_average_age: 0,
        total_change_absolute: 0,
        total_change_relative: 0,
        cities: [],
      },
    ];

    entryYearsData[year].forEach(
      ({
        district,
        municipality,
        name_of_municipality,
        total,
        men,
        women,
        men_average_age,
        women_average_age,
        total_average_age,
      }) => {
        let districtDataItem = districtResult[year].find(
          (d) => d.id === district
        );
        if (!districtDataItem) {
          districtDataItem = {
            id: district,
            name: entryDistrictsData[district]?.name || '',
            region: entryDistrictsData[district]?.region || '',
            total,
            men,
            women,
            men_average_age: men_average_age * men,
            women_average_age: women_average_age * women,
            total_average_age: total_average_age * total,
            total_change_relative: 0,
            total_change_absolute: 0,
            cities: [],
          };
          districtResult[year].push(districtDataItem);
        } else {
          districtDataItem.total += total;
          districtDataItem.men += men;
          districtDataItem.women += women;
          districtDataItem.men_average_age += men_average_age * men;
          districtDataItem.women_average_age += women_average_age * women;
          districtDataItem.total_average_age += total_average_age * total;
        }

        let regionDataItem = regionResult[year].find(
          (r) => r.id === entryDistrictsData[district]?.regionId
        );
        if (!regionDataItem) {
          regionDataItem = {
            id: entryDistrictsData[district]?.regionId || '',
            name: entryDistrictsData[district]?.region || '',
            total,
            men,
            women,
            men_average_age: men_average_age * men,
            women_average_age: women_average_age * women,
            total_average_age: total_average_age * total,
            total_change_relative: 0,
            total_change_absolute: 0,
            cities: [],
          };
          regionResult[year].push(regionDataItem);
        } else {
          regionDataItem.total += total;
          regionDataItem.men += men;
          regionDataItem.women += women;
          regionDataItem.men_average_age += men_average_age * men;
          regionDataItem.women_average_age += women_average_age * women;
          regionDataItem.total_average_age += total_average_age * total;
        }

        countryResult[year][0].total += total;
        countryResult[year][0].men += men;
        countryResult[year][0].women += women;
        countryResult[year][0].men_average_age += men_average_age * men;
        countryResult[year][0].women_average_age += women_average_age * women;
        countryResult[year][0].total_average_age += total_average_age * total;

        let cityData: CityData = {
          id: String(municipality),
          name: name_of_municipality,
          total,
          men,
          women,
          men_average_age,
          women_average_age,
          total_average_age,
          total_change_relative: 0,
          total_change_absolute: 0,
        };

        let prevCityData = previousCityData[municipality];

        if (prevCityData) {
          cityData.total_change_absolute = total - prevCityData.total;
          cityData.total_change_relative =
            (total - prevCityData.total) / prevCityData.total;
        }

        previousCityData[municipality] = cityData;

        cityResult[year].push(cityData);

        districtDataItem.cities.push(cityData);
        regionDataItem.cities.push(cityData);
        countryResult[year][0].cities.push(cityData);
      }
    );

    for (let districtData of districtResult[year]) {
      districtData.men_average_age /= districtData.men;
      districtData.women_average_age /= districtData.women;
      districtData.total_average_age /= districtData.total;
    }

    for (let regionDataItem of regionResult[year]) {
      regionDataItem.men_average_age /= regionDataItem.men;
      regionDataItem.women_average_age /= regionDataItem.women;
      regionDataItem.total_average_age /= regionDataItem.total;
    }

    countryResult[year][0].men_average_age /= countryResult[year][0].men;
    countryResult[year][0].women_average_age /= countryResult[year][0].women;
    countryResult[year][0].total_average_age /= countryResult[year][0].total;

    if (Number(year) > 0) {
      let prevYear = Number(year) - 1;
      if (districtResult[prevYear]) {
        for (let districtData of districtResult[year]) {
          let prevDistrictData = districtResult[prevYear].find(
            (d) => d.id === districtData.id
          );
          if (prevDistrictData) {
            districtData.total_change_absolute =
              districtData.total - prevDistrictData.total;
            districtData.total_change_relative =
              (districtData.total - prevDistrictData.total) /
              prevDistrictData.total;
          }
          for (let city of districtData.cities) {
            let prevCityData = previousCityData[city.id];
            if (prevCityData) {
              city.total_change_absolute = city.total - prevCityData.total;
              city.total_change_relative =
                (city.total - prevCityData.total) / prevCityData.total;
            }
          }
        }
      }
      if (regionResult[prevYear]) {
        for (let regionDataItem of regionResult[year]) {
          let prevRegionData = regionResult[prevYear].find(
            (r) => r.id === regionDataItem.id
          );
          if (prevRegionData) {
            regionDataItem.total_change_absolute =
              regionDataItem.total - prevRegionData.total;
            regionDataItem.total_change_relative =
              (regionDataItem.total - prevRegionData.total) /
              prevRegionData.total;
          }
          for (let city of regionDataItem.cities) {
            let prevCityData = previousCityData[city.id];
            if (prevCityData) {
              city.total_change_absolute = city.total - prevCityData.total;
              city.total_change_relative =
                (city.total - prevCityData.total) / prevCityData.total;
            }
          }
        }
      }
      if (countryResult[prevYear]) {
        let prevCountryData = countryResult[prevYear];
        countryResult[year][0].total_change_absolute =
          countryResult[year][0].total - prevCountryData[0].total;
        countryResult[year][0].total_change_relative =
          (countryResult[year][0].total - prevCountryData[0].total) /
          prevCountryData[0].total;
        for (let city of countryResult[year][0].cities) {
          let prevCityData = previousCityData[city.id];
          if (prevCityData) {
            city.total_change_absolute = city.total - prevCityData.total;
            city.total_change_relative =
              (city.total - prevCityData.total) / prevCityData.total;
          }
        }
      }
      if (cityResult[prevYear]) {
        for (let cityDataItem of cityResult[year]) {
          let prevCityData = cityResult[prevYear].find(
            (c) => c.id === cityDataItem.id
          );
          if (prevCityData) {
            cityDataItem.total_change_absolute =
              cityDataItem.total - prevCityData.total;
            cityDataItem.total_change_relative = prevCityData.total
              ? (cityDataItem.total - prevCityData.total) / prevCityData.total
              : 0;
          }
        }
      }
    }
  }

  return {
    districtData: districtResult,
    regionData: regionResult,
    countryData: countryResult,
    cityData: cityResult,
  };
}
