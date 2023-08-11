import { AUTO_INJECTABLE_WATERMARK } from '../interfaces';
import { INJECTABLE_WATERMARK } from '@nestjs/common/constants';

export function AutoInjectable(): ClassDecorator {
  return (target: object) => {
    Reflect.defineMetadata(INJECTABLE_WATERMARK, true, target);
    Reflect.defineMetadata(AUTO_INJECTABLE_WATERMARK, true, target);
  };
}
