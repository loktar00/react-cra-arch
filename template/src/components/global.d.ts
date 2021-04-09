// declaration.d.ts
declare module '*.scss' {
    const content: {[className: string]: string};
    export default content;
}

declare interface Window {
    APP_SETTINGS: {
        API_BASE_URL: string,
        COGNITO: {
            REGION: string,
            USER_POOL_ID: string,
            CLIENT_ID: string
        }
    }
}

declare type Nullable<T> = T | null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type Index<> = any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare interface IGenericObject<T = any> {
    [key: string]: Index
}
