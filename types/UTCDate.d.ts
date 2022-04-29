export const LOCAL_TIMEZONE_OFFSET: number;
export default UTCDate;
declare class UTCDate {
    constructor(arg?: Date, $timezoneOffset?: number);
    $d: Date;
    $timezoneOffset: number;
    getTimezoneOffset(): number;
    setTimezoneOffset($timezoneOffset?: number): void;
}
