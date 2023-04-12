export interface IQuery {
    name: string,
    url: string
}

export interface IItem {
    name: string
    img: string
    main: {
        'general_year': number
        'display_size__inch': number
        'cpu_type': string
        'cpu_number_of_cores': number
        'storage_capacity__gb': number
        'manufacturer': string
        'country': string
        'wireless_charging': boolean,
        'NFC': boolean,
        'update_frequency': number,
        'esim': false
    }
}

export interface ITableProperty {
    general_year: string
    display_size__inch: string
    cpu_type: string
    cpu_number_of_cores: string
    storage_capacity__gb: string
    manufacturer: string
    country: string
    wireless_charging: string
    NFC: string
    update_frequency: string
    esim: string
}


