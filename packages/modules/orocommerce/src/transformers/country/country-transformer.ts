import { Country as AcCountry } from '@aligent/orocommerce-resolvers';
import { Country, Region } from '../../types';
import { Injectable } from 'graphql-modules';

@Injectable()
export class CountryTransformer {
    public transform(
        oroCountries: Country[],
        oroRegions?: Region[]
    ): AcCountry[] {
        return <AcCountry[]>oroCountries.map((country) => {
            const available_regions = country.relationships?.regions.data?.map((countryRegion) => {
                if (oroRegions) {
                    const region = <Region[]>oroRegions.filter((region) => region.id === countryRegion.id);
                    if (region[0]) {
                        return {
                            code: region[0].attributes.code,
                            id: region[0].id,
                            name: region[0].attributes.name,
                        }
                    }
                }
                return;
            })
            return {
                full_name_english: country.attributes.name,
                full_name_locale: country.attributes.name,
                id: String(country.id),
                two_letter_abbreviation: country.id,
                three_letter_abbreviation: country.attributes.iso3Code,
                available_regions: available_regions ?? [],
            };
        });
    }
}
