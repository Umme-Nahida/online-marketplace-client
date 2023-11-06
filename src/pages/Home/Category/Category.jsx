import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const allCategoryJobs = useLoaderData()
    console.log(allCategoryJobs)

    const categoryOne = allCategoryJobs?.filter(job => job?.category === "web-development")
    const categoryTwo = allCategoryJobs?.filter(job => job?.category === "digital-marketing")
    const categoryThree = allCategoryJobs?.filter(job => job?.category === "graphics-design")

    return (
        <div className='m-20'>
            <Tabs className='border-2 border-[#AAAAAA]'>
                <TabList>
                    <Tab>Web development </Tab>
                    <Tab>Digital markenting</Tab>
                    <Tab>Graphics design</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-10 justify-items-stretch m-10 md:m-20 items-center'>
                        {
                            categoryOne.map(job =>
                                <div key={job?._id} className="card  bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">{job?.jobTitle} </h2>
                                        {
                                            job?.description.length > 150 ? <p>{job?.description.slice(0,150)}...... </p> : <p>{job?.description}</p>
                                        }
                                        <div className="card-actions items-center  justify-items-center">
                                            <span className='font-bold'>Price rang:</span>
                                            <div>${job?.minPrice} -</div>
                                            <div>${job?.maxPrice} </div>
                                        </div>
                                        <p className='font-medium text-[#F18615] '>Deadline: {job?.deadline} </p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Bid Now</button>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-10 justify-items-stretch m-10 md:m-20 items-center'>
                        {
                            categoryTwo.map(job =>
                                <div key={job?._id} className="card  bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">{job?.jobTitle} </h2>
                                        {
                                            job?.description.length > 150 ? <p>{job?.description.slice(0,150)}...... </p> : <p>{job?.description}</p>
                                        }
                                        <div className="card-actions items-center  justify-items-center">
                                            <span className='font-bold'>Price rang:</span>
                                            <div>${job?.minPrice} -</div>
                                            <div>${job?.maxPrice} </div>
                                        </div>
                                        <p className='font-medium text-[#F18615] '>Deadline: {job?.deadline} </p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Bid Now</button>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-10 justify-items-stretch m-10 md:m-20 items-center'>
                        {
                            categoryThree.map(job =>
                                <div key={job?._id} className="card  bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">{job?.jobTitle} </h2>
                                        {
                                            job?.description.length > 150 ? <p>{job?.description.slice(0,150)}...... </p> : <p>{job?.description}</p>
                                        }
                                        
                                        <div className="card-actions items-center  justify-items-center">
                                            <span className='font-bold'>Price rang:</span>
                                            <div>${job?.minPrice} -</div>
                                            <div>${job?.maxPrice} </div>
                                        </div>
                                        <p className='font-medium text-[#F18615] '>Deadline: {job?.deadline} </p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Bid Now</button>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;