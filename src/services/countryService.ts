// services/countryService.ts

export const fetchCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
  
    return data.map((country) => ({
      name: country.name.common,
      code: country.cca2,
    }));
  };
  