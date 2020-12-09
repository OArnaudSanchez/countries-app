import Service from './Service'

// const RESOURCE = 'all';
class CountriesService {
   async GetAllCountries()
    {
        return Service.get('all');
    }

    async GetAllCountriesByRegion(region)
    {
        return Service.get("region" + `/${region}`);
    }
}

export default new CountriesService();

