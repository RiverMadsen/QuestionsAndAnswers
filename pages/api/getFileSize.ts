import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const getFileSize = (fileName: string): number | null => {
  try {
    const filePath = path.join(process.cwd(), 'public', fileName as string);
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (err) {
    console.error(`Error getting file size: ${err}`);
    return -1;
  }
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { fileName } = req.query;
  const filePath = path.join(process.cwd(), 'public', fileName as string);
  const fileSize = getFileSize(filePath);

  if (fileSize === null) {
    res.status(500).send('Error getting file size');
  } else {
    res.status(200).json({ fileSize });
  }
};

export default getFileSize;