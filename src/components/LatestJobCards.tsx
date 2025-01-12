import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LatestJobCards = ({ job }: { job: any }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer transform transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-purple-500"
    >
      <div>
        {/* <h1 className='font-medium text-lg'>{job?.company?.name}</h1> */}
        <h1 className="font-medium text-lg">google</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        {/* <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p> */}
        <h1 className="font-bold text-lg my-2">title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          quisquam debitis aperiam maxime voluptatum, quaerat ut voluptate eos
          at omnis sequi modi accusantium optio laudantium fugiat enim? Alias,
          eos recusandae.
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={'text-blue-700 font-bold'} variant="outline">
          {job?.position} Positions
        </Badge>
        <Badge className={'text-[#F83002] font-bold'} variant="outline">
          {job?.jobType}
        </Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant="outline">
          {job?.salary}LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
