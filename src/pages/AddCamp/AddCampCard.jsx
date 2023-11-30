

const AddCampCard = ({ camp }) => {
    const { Camp_id, CampName, Details, CampFees, Date, Location, Time, Services, Image } = camp;

    const handleRemove = (_id) => {
        localStorage.clear(_id)
        // setBlog([]);
        // setNoFound(' No Blog Found')
        console.log('delete')

    }


    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-full h-[30vh]' src={Image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-base">{Location}</h2>
                    <h2 className="card-title">{CampName}!</h2>
                    <p>{Details}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleRemove} className="btn bg-cyan-600 text-white hover:bg-stone-900">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCampCard;