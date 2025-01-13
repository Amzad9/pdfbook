import PageHeader from '../components/PageHeader'
import Water1 from '../assets/water1.png';
import Water2 from '../assets/water2.png';
import WaterBanner from '../assets/water-banner.png';

function WaterResources() {
    return (
        <div className="bg-white p-4 pb-32">
            <PageHeader pageTitle="Water Resources of Sindh Province" className="mb-8" />
            <div className="grid grid-cols-12 gap-10">
                <div className="col-span-12 md:col-span-6">
                    <p className='font-roboto text-justify leading-relaxed mb-4'>Water plays an essential role in the livelihoods of the population
                        in Sindh, driving both agricultural productivity and socioeconomic
                        development. The transformation of vast areas in Sindh from a dry
                        alluvial plain of the Indus River to fertile, cultivable lands highlights
                        the region’s reliance on water resources for agricultural activities,
                        which form the backbone of its economy. Sindh’s prosperity in terms
                        of food production, industry, and rural livelihoods is intricately tied
                        to the management and use of its water, particularly through the
                        extensive irrigation systems fed by the Indus River. Effective water
                        governance is therefore critical to sustaining these livelihoods and
                        ensuring long-term development.</p>
                    <p className='font-roboto text-justify leading-relaxed mb-4'>The water resources available to the people of Sindh are limited,
                        with the province receiving an average annual rainfall of only
                        100 to 200 mm. The primary water source for Sindh is the Indus
                        River, which is channeled through a vast hydraulic infrastructure
                        developed over the past century, known as the Lower Indus Basin
                        Irrigation System (IBIS). Water from the Indus River is distributed
                        to users via a canal system that branches out from three major
                        barrages: Guddu, Sukkur, and Kotri. These barrages divert water
                        into 14 main canals, which further distribute it through a complex
                        network of 117 branch canals, 1,400 distributaries and minors, and
                        44,000 watercourses.</p>
<img src={Water1} alt='graph' className='max-w-full object-contain' />
                </div>
                <div className="col-span-12 md:col-span-6">
<img src={Water2} alt='graph' className='max-w-full object-contain' />
                    <p className='font-roboto text-justify leading-relaxed mt-4'>A significant concern for Sindh is its status as the lower riparian
                        region within Pakistan. This brings multiple challenges, including
                        worries about reduced surface water inflows, the risk of uncontrolled
                        flood releases during periods of flooding, and the deteriorating
                        water quality in the main Indus River. Outside the coverage of the
                        IBIS, surface water resources are even more scarce. They primarily
                        depend on runoff generated in catchment areas during rainfall.
                        Another important and increasingly relied upon source of water,
                        both in the dryland and canal areas, is groundwater. Groundwater
                        resources serve as a crucial complement to the available surface
                        water in Sindh.</p>
                    <p className='font-roboto text-justify leading-relaxed mt-4'>The largest water use in Sindh is agriculture, accounting for
                        around 95% of total consumption, with evapotranspiration ranging
                        from 26.6 to 41.7 MAF. Annual water demand for domestic use
                        is 1.2 MAF, for industry 0.5 MAF, and livestock use is minimal1
                        .
                        Maintaining the Indus Delta’s ecosystem is also crucial, with the
                        Indus River Accord recommending annual flows of 10 MAF, though
                        actual flows often fall short of environmental needs. Sindh boasts
                        of a number of wetlands, but they have largely been left unmanaged
                        and, in some cases have been degraded </p>
                </div>
            </div>
            <img src={WaterBanner} alt="image" className='max-w-full object-contain mt-5' />
        </div>
    )
}

export default WaterResources