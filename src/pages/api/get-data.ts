import { completeDataMapper } from '@/context/dataContext/mappers/completeDataMapper';
import { districtsRegions } from '@/data/regions/polygons/_regionPolygons';
import { completeData } from '@/data/years';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = completeDataMapper(completeData, districtsRegions);

    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ statusCode: 500 });
  }
}
