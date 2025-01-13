import { Link } from 'react-router-dom';
import Climate1 from '../assets/climate1.png';
import Climate2 from '../assets/climate2.png';
import PageHeader from '../components/PageHeader';

function ClimateDynamics() {
    return (
        <div className="bg-white p-4 pb-32">
            <PageHeader pageTitle="Climate Dynamics and its Impact" className="mb-8" />
            <div className="grid grid-cols-12 gap-10">
                <div className="col-span-12 md:col-span-6 bg-gray-50 border rounded-lg p-6">
                    <p className='font-roboto text-justify leading-relaxed mb-4'>The Sindh Water Policy emphasises the interconnected nature
                        of water-related challenges and underscores the need for
                        international cooperation. It calls for collective action to address
                        the water and climate change crises, recognising water as a
                        fundamental human right and advocating for equitable access
                        and distribution (Sindh Water Policy, 2023). Climate change
                        impact in Sindh has been significant. Among all these risks, the
                        most devastating has been the increased frequency and intensity
                        of droughts and floods. Sindh has experienced six major floods
                        over the past fourteen years, including two catastrophic floods in
                        2010 and 2022 that devastated nearly the entire province. These
                        events resulted in loss of life, destroyed crops and livestock, and
                        caused extensive damage to people’s assets. The frequency of
                        drought occurrences was notably high in Sindh, with years like
                        1871, 1881, 1899, 1931, 1947, and 1998 marked as the worst </p>

                    <img src={Climate1} alt='graph' className='max-w-full object-contain' />
                    <p>Total annual Precipitation of Sindh from 1961 through 2020.
                        (Data Source: Pakistan Meteorological Department, 2020)</p>
                </div>
                <div className="col-span-12 md:col-span-6 bg-gray-50 border rounded-lg p-6">

                    <p className='font-roboto text-justify leading-relaxed mt-4'>drought years. The drought event from 1998 to 2000, declared
                        the worst in Pakistan’s history, resulted in dire consequences,
                        including 127 casualties due to water scarcity and dehydration,
                        predominantly in the Tharparkar district of Sindh. Studies carried
                        out by Provincial Disaster Management Authority (PDMA), Sindh
                        shows decadal average temperature indicates a rise in the
                        province’s annual temperatures, with a marked increase observed
                        from 1990 onwards. The most significant temperature increases
                        have been recorded in Central and Upper Sindh. Significant change
                        in total precipitation was observed over the period starting from
                        1981. Impacts of climate change, population growth, along with
                        migration from rural to urban areas of Sindh, are the three primary
                        concerns for water and food security in the province. These
                        factors are creating significant challenges for water resources
                        management.</p>
                    <img src={Climate2} alt='graph' className='max-w-full object-contain' />
                    <p>Projected Precipitation Anomaly for 2040-2059 (Annual) Sindh, Pakistan; (Ref. Period: 1995-2014), SSP5-8.5, Multi-Model Ensemble</p>
                    <p>(Data Source: <Link to='https://climateknowledgeportal.worldbank.org/' target='_blank'>https://climateknowledgeportal.worldbank.org/</Link></p>
                </div>
            </div>

        </div>
    )
}

export default ClimateDynamics