import { Country, Region } from '../../../types';

export const oroCountries: Country[] =
[
    {
        "type": "countries",
        "id": "AU",
        "attributes": {
            "iso3Code": "AUS",
            "name": "Australia"
        },
        "relationships": {
            "regions": {
                "data": [
                    {
                        "type": "regions",
                        "id": "AU-ACT"
                    },
                    {
                        "type": "regions",
                        "id": "AU-NSW"
                    },
                    {
                        "type": "regions",
                        "id": "AU-NT"
                    },
                    {
                        "type": "regions",
                        "id": "AU-QLD"
                    },
                    {
                        "type": "regions",
                        "id": "AU-SA"
                    },
                    {
                        "type": "regions",
                        "id": "AU-TAS"
                    },
                    {
                        "type": "regions",
                        "id": "AU-VIC"
                    },
                    {
                        "type": "regions",
                        "id": "AU-WA"
                    }
                ]
            }
        }
    },
    {
        "type": "countries",
        "id": "NZ",
        "attributes": {
            "iso3Code": "NZL",
            "name": "New Zealand"
        },
        "relationships": {
            "regions": {
                "data": [
                    {
                        "type": "regions",
                        "id": "NZ-AUK"
                    },
                    {
                        "type": "regions",
                        "id": "NZ-BOP"
                    },
                    {
                        "type": "regions",
                        "id": "NZ-CAN"
                    },
                    {
                        "type": "regions",
                        "id": "NZ-CIT"
                    },
                    {
                        "type": "regions",
                        "id": "NZ-GIS"
                    },
                    {
                        "type": "regions",
                        "id": "NZ-HKB"
                    },
                    {
                        "type": "regions",
                        "id": "NZ-MBH"
                    },
                    {
                        "type": "regions",
                        "id": "NZ-MWT"
                    },
                    {
                        "type": "regions",
                        "id": "NZ-N"
                    },
                    {
                        "type": "regions",
                        "id": "NZ-NSN"
                    },
                    {
                        "type": "regions",
                        "id": "NZ-NTL"
                    },
                    {
                        "type": "regions",
                        "id": "NZ-OTA"
                    },
                    {
                        "type": "regions",
                        "id": "NZ-S"
                    },
                    {
                        "type": "regions",
                        "id": "NZ-STL"
                    },
                    {
                        "type": "regions",
                        "id": "NZ-TAS"
                    },
                    {
                        "type": "regions",
                        "id": "NZ-TKI"
                    },
                    {
                        "type": "regions",
                        "id": "NZ-WGN"
                    },
                    {
                        "type": "regions",
                        "id": "NZ-WKO"
                    },
                    {
                        "type": "regions",
                        "id": "NZ-WTC"
                    }
                ]
            }
        }
    }
];

export const oroRegions: Region[] =
[
    {
        "type": "regions",
        "id": "AU-ACT",
        "attributes": {
            "code": "ACT",
            "name": "Australian Capital Territory"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "AU"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "AU-NSW",
        "attributes": {
            "code": "NSW",
            "name": "New South Wales"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "AU"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "AU-NT",
        "attributes": {
            "code": "NT",
            "name": "Northern Territory"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "AU"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "AU-QLD",
        "attributes": {
            "code": "QLD",
            "name": "Queensland"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "AU"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "AU-SA",
        "attributes": {
            "code": "SA",
            "name": "South Australia"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "AU"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "AU-TAS",
        "attributes": {
            "code": "TAS",
            "name": "Tasmania"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "AU"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "AU-VIC",
        "attributes": {
            "code": "VIC",
            "name": "Victoria"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "AU"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "AU-WA",
        "attributes": {
            "code": "WA",
            "name": "Western Australia"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "AU"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-AUK",
        "attributes": {
            "code": "AUK",
            "name": "Auckland"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-BOP",
        "attributes": {
            "code": "BOP",
            "name": "Bay of Plenty"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-CAN",
        "attributes": {
            "code": "CAN",
            "name": "Canterbury"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-CIT",
        "attributes": {
            "code": "CIT",
            "name": "Chatham Islands Territory"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-GIS",
        "attributes": {
            "code": "GIS",
            "name": "Gisborne District"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-HKB",
        "attributes": {
            "code": "HKB",
            "name": "Hawke's Bay"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-MBH",
        "attributes": {
            "code": "MBH",
            "name": "Marlborough District"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-MWT",
        "attributes": {
            "code": "MWT",
            "name": "Manawatu-Wanganui"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-N",
        "attributes": {
            "code": "N",
            "name": "North Island"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-NSN",
        "attributes": {
            "code": "NSN",
            "name": "Nelson City"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-NTL",
        "attributes": {
            "code": "NTL",
            "name": "Northland"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-OTA",
        "attributes": {
            "code": "OTA",
            "name": "Otago"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-S",
        "attributes": {
            "code": "S",
            "name": "South Island"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-STL",
        "attributes": {
            "code": "STL",
            "name": "Southland"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-TAS",
        "attributes": {
            "code": "TAS",
            "name": "Tasman District"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-TKI",
        "attributes": {
            "code": "TKI",
            "name": "Taranaki"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-WGN",
        "attributes": {
            "code": "WGN",
            "name": "Wellington"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-WKO",
        "attributes": {
            "code": "WKO",
            "name": "Waikato"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    },
    {
        "type": "regions",
        "id": "NZ-WTC",
        "attributes": {
            "code": "WTC",
            "name": "West Coast"
        },
        "relationships": {
            "country": {
                "data": {
                    "type": "countries",
                    "id": "NZ"
                }
            }
        }
    }
];
