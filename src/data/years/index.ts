import data2023 from './2023.json';
import data2022 from './2022.json';
import data2021 from './2021.json';
import data2020 from './2020.json';
import data2019 from './2019.json';
import data2018 from './2018.json';
import data2017 from './2017.json';
import data2016 from './2016.json';
import data2015 from './2015.json';
import data2014 from './2014.json';
import data2013 from './2013.json';
import data2012 from './2012.json';
import data2011 from './2011.json';
import data2010 from './2010.json';

export const completeData: Record<string, CompleteData[]> = {
  2023: data2023,
  2022: data2022,
  2021: data2021,
  2020: data2020,
  2019: data2019,
  2018: data2018,
  2017: data2017,
  2016: data2016,
  2015: data2015,
  2014: data2014,
  2013: data2013,
  2012: data2012,
  2011: data2011,
  2010: data2010,
};

export interface CompleteData {
  district: string;
  municipality: number;
  name_of_municipality: string;
  total: number;
  men: number;
  women: number;
  men_average_age: number;
  women_average_age: number;
  total_average_age: number;
}
