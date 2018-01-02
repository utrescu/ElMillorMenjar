import { LogService } from './log.service';
import { DialogService } from './dialog.service';
import { BackendService } from './backend.service';

export const SERVEIS: any[] = [
    LogService,
    DialogService
];
export * from './log.service';
export * from './dialog.service';
export * from './backend.service';