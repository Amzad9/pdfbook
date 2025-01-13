import PageHeader from '../components/PageHeader'
import IntroGraph from '../assets/intro.png'
import IntroBanner from '../assets/intro-banner.png'

function Introduction() {
    return (
        <div className="bg-white p-4 pb-32">
            <PageHeader pageTitle="Introduction" className="mb-4" />
            <div className='grid grid-cols-12 gap-10'>
                <div className='col-span-12 md:col-span-6 bg-gray-50 border rounded-lg p-6'>
                    <p className='font-roboto text-justify mb-5'>Pakistan, home to one of the world’s largest contiguous irrigation
                        systems, is grappling with significant challenges in sustaining its
                        agrarian economy due to a severe shortage of water resources. Per
                        capita surface water availability has been drastically declining due
                        to an ever-increasing population, unplanned water usage through
                        conventional irrigation methods, urbanisation, and the impacts
                        of climate change. Climate change has exacerbated these issues,
                        manifesting through unpredictable precipitation patterns, flash
                        floods in the north, and prolonged droughts in the south.</p>
                    <img src={IntroGraph} alt='graph' className='max-w-full object-contain' />
                </div>
                <div className='col-span-12 md:col-span-6 bg-gray-50 border rounded-lg p-6'>
                    <p className='font-roboto text-justify leading-relaxed'>
                        Sindh, situated in the southeastern region of Pakistan and the
                        country’s third-largest province by land area, is facing significant
                        water-related challenges. These include declining water quality,
                        rising waterlogging and salinity, the drying of tail-end canal
                        command areas, and the disappearance of wetlands. These
                        issues contribute to the economic insecurity of the province.
                        There is a strong perception that both the conventional methods
                        of water use and the current management practices need to be
                        revised. On-farm water management approaches must expand
                        to encompass all sources of water including surface water,
                        groundwater, rainwater, wastewater reuse, and floodwater. User
                        demands and water usage practices also need harmonisation.
                        In response to these challenges, the Government of Sindh
                        approved its first-ever water policy, the Sindh Water Policy 2023.
                        This policy aims to secure the comprehensive development and
                        management of water resources to ensure the well-being of
                        citizens and boost the provincial economy. The policy highlights
                    </p>
                </div>
            </div>
            <div className='pt-5'>
                <img src={IntroBanner} alt='graph' className='max-w-full' />
                <p className='font-roboto text-justify leading-relaxed mt-4'>water governance challenges, including rising water demands due to
                    a growing population and climate-induced challenges like increasing
                    frequency of floods and droughts. The policy emphasises managing canal
                    water supply through efficient practices to enhance water availability.</p>
                <p className='font-roboto text-justify leading-relaxed mt-4'>The policy advocates for enhancing water supplies by promoting
                    practices such as conjunctive use and reuse of drainage effluents,
                    considering water quality, and discouraging water-intensive crops.
                    ‘Water conservation’ has been prioritised as a tool to serve tail-end areas,
                    maintain environmental flows, and support the expansion of irrigated
                    agriculture. It also encourages adaptive water resource management
                    practices to secure water availability for diverse demands across the
                    province.</p>
                <p className='font-roboto text-justify leading-relaxed mt-4'>As part of the overall management and development of water
                    resources in line with Sindh Water Policy 2023, the Climate Adaptation and
                    Resilience for South Asia Project, in collaboration with the Government
                    of Sindh’s Irrigation and Agriculture departments, has co-developed this
                    compendium of best adaptive water resource management practices. The
                    compendium includes water saving or water conservation interventions
                    practiced in various districts of the province, with a potential for scaling
                    up and scaling out across Sindh, Pakistan. The compendium focuses on
                    sustainable water supply management, and on agricultural production.</p>
                <p className='font-roboto text-justify leading-relaxed mt-4'>
                    The compendium aims to sensitise policymakers, water resource
                    managers, agricultural extension workers, and farmers on the judicious
                    use of water, ultimately conserving water to serve tail-end areas, meet
                    environmental flow requirements, and support agricultural expansion for
                    food security and economic upliftment of the province. It also serves as
                    a reference for researchers and academia to extend their studies for the
                    efficacy of the adaptive water management practices in different agroecological zones of the province.
                </p>
            </div>
            <div className='mt-5'>
                <h4 className='text-lg font-bold font-roboto'>The Context</h4>
                <p className='font-roboto text-justify leading-relaxed'>In mid-2021, The Government of Sindh’s Irrigation
                    Department organised a consultation meeting to
                    discuss priority interventions in Sindh as part of the
                    Climate Adaptation and Resilience for South Asia
                    Project funded by the World Bank. The meeting was
                    attended by representatives from provincial and
                    federal government departments, academia, and
                    international organisations, including:</p>
                <ul className="list-disc pl-5 my-5">
                    <li>Sindh Irrigation Department, Government of Sindh</li>
                    <li>Sindh Irrigation and Drainage Authority (SIDA),
                        Government of Sindh</li>
                    <li>Sindh Agriculture University, Tando Jam, Sindh</li>
                    <li>Food and Agriculture Organization (FAO) of the
                        United Nations represented by the consultant from
                        the Sindh Barrage Improvement Project (SBIP)</li>
                    <li>Pakistan Council of Research in Water Resources
                        (PCRWR), Ministry of Water Resources,
                        Government of Pakistan</li>
                </ul>
                <p className='font-roboto text-justify leading-relaxed'>In mid-2022, the Ministry of Planning,
                    Development, and Special Initiatives (MoPDSI) and
                    Irrigation Departments of Sindh and Balochistan as
                    part of the national planning meeting of the Climate
                    Adaptation and Resilience for South Asia Project
                    endorsed the proposed study on identification of
                    best practices, including indigenous/local adaptive
                    water resources management to adapt and build
                    resilience of the farming community of the province
                    to changing climate</p>
            </div>
        </div>
    )
}

export default Introduction