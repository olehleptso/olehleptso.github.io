import './JobInfo.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SectionHeader from '../SectionHeader/SectionHeader';
import Perk from '../Perk/Perk';
import TextBlock from '../TextBlock/TextBlock';

function JobInfo() {
    const {id} = useParams()
    const [job, setJob] = useState()
    
    

      useEffect(() => {
        fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
            .then(response => response.json())
            .then(data => {
                setJob(data[id])
                console.log(data[id])
            }
        )}, []);

    if (!job) {
        return false
    }

    return (
        <div className='jobInfo'>
            <div className='outer'>
                <div className='content'>
                    <SectionHeader title="Job Details" underline>
                        <div className='flex'>
                            <h2>Save to my list</h2>
                            <h2>Share</h2>
                        </div>
                    </SectionHeader>
                    <button className='standart'>
                        Apply Now
                    </button>
                    <h2 className='heading'>{job.title}</h2>
                    <h2 className='secondary'> Posted 2 days ago</h2>
                    <TextBlock>
                        At WellStar, we all share common goals. That’s what makes us so successful – and such an integral part of our communities. 
                        We want the same things, for our organization, for our patients, and for our colleagues. 
                        As the most integrated healthcare provider in Georgia, this means we pride ourselves on investing in the communities that we serve. 
                        We continue to provide innovative care models, focused on improving quality and access to healthcare.
                    </TextBlock>
                    <h2  className='head'>Responsibilities</h2>
                    <TextBlock>
                        Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic surgeon to join their existing cardiovascular program. 
                        This is an opportunity to play a key role on a multidisciplinary team of cardiologists and surgeons.
                    </TextBlock>
                    <TextBlock>
                        The ideal candidate will have five or more years of experience in cardiac surgery. 
                        This candidate should be facile with off-pump revascularization, complex aortic surgery, minimally invasive valve and valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation, ventricular assist device placement, and extra corporeal membrane oxygenation.
                    </TextBlock>
                    <TextBlock>
                    Wellstar is one of the largest integrated healthcare systems in the Southeast with 11 hospitals in Atlanta metro region. With two open heart programs at Kennestone Regional Medical Center and Atlanta Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac procedures per year. The cardiac service line is the only center in Georgia with the Joint Commission’s Comprehensive Cardiac Center certification.
                    </TextBlock>
                    <h2 className='head'>
                        Compensation & Benefits:
                    </h2>
                    <TextBlock>
                        Our physicians enjoy a wide range of benefits, including:    
                        <ul>
                            <li className='description'>Very competitive compensation package with bonuses</li>
                            <li className='description'>Medical, Dental, and Vision Insurance</li>
                            <li className='description'>Occurrence-based Malpractice Coverage</li>
                            <li className='description'>Short-term and Long-term Disability Insurance and life insurance</li>
                        </ul>
                    </TextBlock>
                    
                    <button className='standart'>
                        Apply Now
                    </button>
                    <SectionHeader title="Additional info" underline />
                    <TextBlock>
                        Employment Type
                    </TextBlock>
                    <div className='employment'>
                        {job.employment_type.map((data, index) => {
                            return <Perk key={index} data={data} type='employmentType'/>
                        })}
                    </div>
                    
                    <TextBlock>
                        Benefits
                    </TextBlock>
                    <div className='employment'>
                        {job.benefits.map((data, index) => {
                            return <Perk key={index} data={data} type='benefits'/>
                        })}
                    </div>
                    <SectionHeader title="Attached images" underline />
                    <div>
                        {job.pictures.map((data, index) => {
                            return <img className="image" key={index} src={data}></img>
                        })}
                    </div>
                </div>
                <div className='map'>
                </div>
            </div>
        </div>
    );
}

export default JobInfo;