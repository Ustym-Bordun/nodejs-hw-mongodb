import path from 'node:path';
import fs from 'node:fs/promises';
import { AVATARS_DIR, TEMP_UPLOAD_DIR } from '../constants/index.js';
import { getEnvVar } from './getEnvVar.js';

export const saveFileToUploadsAvatarsDir = async (file) => {
  const extension = path.extname(file.filename); // .jpg, .png, etc.
  const nameWithoutExt = path.basename(file.filename, extension); // 1750006789872-604653123-blond-cutie

  const parts = nameWithoutExt.split('-');

  const prefix1 = parts[0]; // 1750006789872
  const prefix2 = parts[1]; // 604653123

  const baseName = parts.slice(2).join('-'); // blond-cutie

  const finalFileName = `${baseName}_${prefix1}-${prefix2}${extension}`;

  const tempPath = path.join(TEMP_UPLOAD_DIR, file.filename);
  const finalPath = path.join(AVATARS_DIR, finalFileName);

  await fs.rename(tempPath, finalPath);

  return `${getEnvVar('APP_DOMAIN')}/uploads/avatars/${finalFileName}`;
};
