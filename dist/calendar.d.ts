import { ElementCompact } from 'xml-js';
import { DAVDepth, DAVResponse } from './types/DAVTypes';
import { SyncCalendars } from './types/functionsOverloads';
import { DAVAccount, DAVCalendar, DAVCalendarObject } from './types/models';
export declare const calendarQuery: (params: {
    url: string;
    props: ElementCompact;
    filters?: ElementCompact;
    timezone?: string;
    depth?: DAVDepth;
    headers?: Record<string, string>;
    headersToExclude?: string[];
}) => Promise<DAVResponse[]>;
export declare const calendarMultiGet: (params: {
    url: string;
    props: ElementCompact;
    objectUrls?: string[];
    timezone?: string;
    depth: DAVDepth;
    filters?: ElementCompact;
    headers?: Record<string, string>;
    headersToExclude?: string[];
}) => Promise<DAVResponse[]>;
export declare const makeCalendar: (params: {
    url: string;
    props: ElementCompact;
    depth?: DAVDepth;
    headers?: Record<string, string>;
    headersToExclude?: string[];
}) => Promise<DAVResponse[]>;
export declare const fetchCalendars: (params?: {
    account?: DAVAccount;
    props?: ElementCompact;
    projectedProps?: Record<string, boolean>;
    headers?: Record<string, string>;
    headersToExclude?: string[];
}) => Promise<DAVCalendar[]>;
export declare const fetchCalendarObjects: (params: {
    calendar: DAVCalendar;
    objectUrls?: string[];
    filters?: ElementCompact;
    timeRange?: {
        start: string;
        end: string;
    };
    expand?: boolean;
    urlFilter?: (url: string) => boolean;
    headers?: Record<string, string>;
    headersToExclude?: string[];
    useMultiGet?: boolean;
}) => Promise<DAVCalendarObject[]>;
export declare const createCalendarObject: (params: {
    calendar: DAVCalendar;
    iCalString: string;
    filename: string;
    headers?: Record<string, string>;
    headersToExclude?: string[];
}) => Promise<Response>;
export declare const updateCalendarObject: (params: {
    calendarObject: DAVCalendarObject;
    headers?: Record<string, string>;
    headersToExclude?: string[];
}) => Promise<Response>;
export declare const deleteCalendarObject: (params: {
    calendarObject: DAVCalendarObject;
    headers?: Record<string, string>;
    headersToExclude?: string[];
}) => Promise<Response>;
/**
 * Sync remote calendars to local
 */
export declare const syncCalendars: SyncCalendars;
export declare const freeBusyQuery: (params: {
    url: string;
    timeRange: {
        start: string;
        end: string;
    };
    depth?: DAVDepth;
    headers?: Record<string, string>;
    headersToExclude?: string[];
}) => Promise<DAVResponse>;
